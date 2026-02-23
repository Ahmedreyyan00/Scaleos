'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin once
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * Animates every meaningful content block outside the Hero component.
 * Elements start blurry + slightly faded and become crystal-clear when they
 * reach 30% from the bottom of the viewport (so small screens don’t require
 * scrolling the whole image up to see the text). The effect is scrubbed to scroll.
 */
export function useBlurFadeIn() {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        let ctx: gsap.Context | null = null;

        const init = () => {
            // ── 1. Find the hero wrapper so we can exclude it ─────────────────
            const heroWrapper = document.querySelector('.hero-section-wrapper');

            // ── 2. Broad set of selectors that covers all non-hero content ────
            // Grid: only .grid-holder is animated (single animation for both images/cards). No .grid-item or inner elements.
            const SELECTORS = [
                // Section-level blocks; grid gets one animation via .grid-holder only
                '.grid-holder',
                '.section-inside',
                '.new-features-holder',
                '.cta-holder',

                // Individual semantic blocks
                '.feature-grid-content',
                '.feature-grid-content-holder-2',
                '.feature-grid-content-holder-2 .fade-in-on-scroll',
                '.feature-content-holder',
                '.feature-graphic-holder',

                // Grid inner elements (only used when NOT inside .grid-item; grid-item children skipped below)
                '.grid-title',
                '.grid-content',

                // Headings & text (all levels so headings and paragraphs behave the same)
                'h1:not(.hero-section-wrapper h1)',
                'h2:not(.hero-section-wrapper h2)',
                'h3:not(.hero-section-wrapper h3)',
                'h4:not(.hero-section-wrapper h4)',
                'h5:not(.hero-section-wrapper h5)',
                'h6:not(.hero-section-wrapper h6)',
                '.title:not(.hero-section-wrapper .title)',
                '.paragraph-2:not(.hero-section-wrapper .paragraph-2)',
                '.feature-content-holder p',
                '.feature-grid-content-holder-2 p',
                '.no-margins-2',
                '.center-text',
                '.heading-holder',

                // Images (non-hero)
                '.grid-image',
                '.feature-image-full',
                '.feature-image-container',
                '.meeting-card',
                '.cube-image',

                // Cards & interactive elements
                '.card-image-holder',
                '.grey-card-holder',
                '.feature-image-holder',
                '.home-pragraph-holder',
                '.hero-text-container-2',
                '.hero-text-holder:not(.hero-section-wrapper .hero-text-holder)',

                // CTA & footer
                '.cta-content',
                '.cta-section',
                '.footer-holder',
                '.footer-link-holder',

                // Feature slider
                '.section-inside .center-text',
                '.slide',

                // Demo-page extras
                '.button-holder-phone',
                '.youtube',
                '.youform-embed-container',
                '.section-2',
                '.hero-section-center-holder-2',
                '.fomo-badge',
            ];

            // ── 3. Collect unique elements, skipping anything inside Hero ─────
            const seen = new Set<Element>();
            const targets: HTMLElement[] = [];

            SELECTORS.forEach((selector) => {
                let candidates: HTMLElement[];
                try {
                    candidates = Array.from(
                        document.querySelectorAll<HTMLElement>(selector)
                    );
                } catch {
                    return; // skip invalid selectors
                }

                candidates.forEach((el) => {
                    if (seen.has(el)) return;
                    // Skip anything inside the hero wrapper
                    if (heroWrapper && heroWrapper.contains(el)) return;
                    // Skip the hero wrapper itself
                    if (el === heroWrapper) return;
                    // Skip header / navbar
                    if (el.closest('.navbar') || el.closest('.w-nav')) return;
                    // Skip premium-animation elements (they have their own IntersectionObserver animation)
                    if (el.classList.contains('premium-animation') || el.closest('.premium-animation')) return;
                    // Skip any element inside .grid-holder except .grid-holder (single animation for whole grid + both images)
                    if (el.closest('.grid-holder') && !el.classList.contains('grid-holder')) return;
                    seen.add(el);
                    targets.push(el);
                });
            });

            if (targets.length === 0) return;

            // ── 4. Classify targets: footer/bottom vs mid-page ───────────────
            const BOTTOM_SELECTORS = [
                'footer', '.footer-holder', '.footer-link-holder',
                '.cta-holder', '.cta-content', '.cta-section',
                '[data-wf--footer--variant]',
            ];

            const isBottomElement = (el: HTMLElement) =>
                BOTTOM_SELECTORS.some((sel) => el.matches(sel) || el.closest(sel));

            // ── 5. Create a GSAP context for clean teardown ───────────────────
            ctx = gsap.context(() => {
                targets.forEach((el) => {
                    // Mark element so layout.tsx !important rules skip it
                    el.classList.add('gsap-blur-reveal');

                    // Initial hidden+blurred state
                    gsap.set(el, {
                        autoAlpha: 0,
                        filter: 'blur(18px)',
                        y: 24,
                        force3D: true,
                        willChange: 'filter, opacity, transform',
                    });

                    if (isBottomElement(el)) {
                        // ── Footer / CTA: play-on-enter, no scrub ─────────────
                        // These sit at the bottom of the page so "center center"
                        // is unreachable. Use toggleActions so animation fires
                        // the moment the element enters the viewport.
                        gsap.to(el, {
                            scrollTrigger: {
                                trigger: el,
                                start: 'top 92%',
                                toggleActions: 'play none none none',
                            },
                            autoAlpha: 1,
                            filter: 'blur(0px)',
                            y: 0,
                            duration: 0.9,
                            ease: 'power2.out',
                            force3D: true,
                        });
                    } else {
                        // ── Mid-page elements: scrub tied to scroll ───────────
                        // end: 'top 70%' = animation completes when element is 30% from bottom,
                        // so on small screens users see the text without scrolling the image fully up.
                        // Grid section uses a longer scrub for one smooth animation on the whole block.
                        const isGridHolder = el.classList.contains('grid-holder');
                        gsap.to(el, {
                            scrollTrigger: {
                                trigger: el,
                                start: 'top 88%',
                                end: 'top 70%',
                                scrub: isGridHolder ? 2.2 : 1.4,
                            },
                            autoAlpha: 1,
                            filter: 'blur(0px)',
                            y: 0,
                            ease: 'power2.out',
                            force3D: true,
                        });
                    }
                });
            });
        };

        // Small delay so Next.js has fully hydrated the DOM
        const timer = setTimeout(init, 200);

        return () => {
            clearTimeout(timer);
            ctx?.revert();           // removes all GSAP tweens/triggers in this context
        };
    }, []);
}
