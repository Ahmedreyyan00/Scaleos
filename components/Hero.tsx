'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Blue blur opacity - easily editable (0.0 to 1.0)
const BLUE_BLUR_OPACITY = 0.25; // 25% opacity - adjust this value to change blur intensity

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const tagRef = useRef<HTMLDivElement>(null);
    const shineRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const subtitleRef = useRef<HTMLHeadingElement>(null);
    const iconsHolderRef = useRef<HTMLDivElement>(null);
    const blueBlurRef = useRef<HTMLDivElement>(null);
    const heroTextContainerRef = useRef<HTMLDivElement>(null);
    const textSectionBackgroundRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!heroRef.current) return;

        const ctx = gsap.context(() => {
            // Set all elements to be hidden initially
            gsap.set(tagRef.current, { opacity: 0, scale: 0.8, force3D: true });
            gsap.set(shineRef.current, { opacity: 1, x: '-100%', force3D: true });
            gsap.set(titleRef.current, { opacity: 0, y: 20, force3D: true });
            gsap.set(descriptionRef.current, { opacity: 0, y: 20, force3D: true });
            gsap.set(buttonsRef.current?.children || [], { opacity: 0, y: 20, force3D: true });
            gsap.set(imageContainerRef.current, {
                opacity: 0,
                y: 0,
                boxShadow: '0 0 0px 0px rgba(16,90,201,0)',
                filter: 'blur(0px)', // No blur on container
                force3D: true
            });
            gsap.set(imageRef.current, {
                opacity: 0,
                filter: 'blur(0px)', // Start with no blur
                scale: 1, // Start at normal scale
                force3D: true
            });
            gsap.set(subtitleRef.current, { opacity: 0, y: 20, force3D: true });
            gsap.set(iconsHolderRef.current?.children || [], { opacity: 0, scale: 0.8, y: 20, force3D: true });
            // Set initial state for dark background overlay
            gsap.set(textSectionBackgroundRef.current, {
                opacity: 0,
                y: '100%',
                force3D: true
            });
            // Set initial state for hero-text-container
            gsap.set(heroTextContainerRef.current, {
                filter: 'blur(0px)',
                opacity: 1,
                transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                force3D: true,
                willChange: 'filter, opacity, transform'
            });
            // Set initial state for blue blur
            // Since CSS has left: 50% and top: 50%, we use xPercent and yPercent to center
            gsap.set(blueBlurRef.current, {
                opacity: 0,
                xPercent: -50,
                yPercent: -50,
                scaleX: 1,
                scaleY: 0.5,
                force3D: true,
                transformStyle: 'preserve-3d'
            });

            // Now animate them in one by one sequentially
            const tl = gsap.timeline({ delay: 0.2 });

            // 1. Badge scales in and fades in
            tl.to(tagRef.current,
                { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)', force3D: true }
            );

            // 1.5. Shine effect sweeps across
            tl.to(shineRef.current,
                { x: '100%', duration: 1.5, ease: 'power2.inOut', force3D: true },
                '-=0.3'
            );

            // 2. Title slides up and fades in
            tl.to(titleRef.current,
                { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', force3D: true },
                '+=0.1'
            );

            // 3. Description slides up and fades in
            tl.to(descriptionRef.current,
                { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', force3D: true },
                '+=0.1'
            );

            // 4. Buttons slide up and fade in with stagger
            if (buttonsRef.current?.children) {
                tl.to(buttonsRef.current.children,
                    { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out', force3D: true },
                    '+=0.1'
                );
            }

            // 5. Image container fades in at current position - no blur
            tl.to(imageContainerRef.current,
                {
                    opacity: 1,
                    filter: 'blur(0px)', // Ensure no blur on container
                    duration: 0.9,
                    ease: 'power3.out',
                    force3D: true
                },
                '+=0.1'
            );

            // 5.5. Image fades in - clear and sharp
            tl.to(imageRef.current,
                {
                    opacity: 1,
                    filter: 'blur(0px)', // Ensure no blur
                    scale: 1, // Normal scale
                    duration: 0.6,
                    ease: 'power2.out',
                    force3D: true
                },
                '-=0.4'
            );

            // 6. Animate box shadow after image appears
            tl.to(imageContainerRef.current, {
                boxShadow: '0 0 60px 80px rgba(16,90,201,0.5)',
                duration: 1,
                ease: 'power2.out',
            }, '-=0.3');

            // 6.5. Slightly push the dashboard and floating logos "back" as we transition focus to the text
            tl.to(
                [imageContainerRef.current, iconsHolderRef.current],
                {
                    scale: 0.94,
                    opacity: 0.6,
                    y: 20,
                    duration: 1.2,
                    ease: 'power2.out',
                    force3D: true,
                },
                '+=0.1'
            );

            // 7. Translucent background overlay slides up and covers the image above
            tl.to(textSectionBackgroundRef.current,
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    force3D: true
                },
                '+=0.1'
            );

            // 7.1. Subtitle slides up and fades in on top of the translucent background
            // Image and icons stay clear, just pushed slightly back
            tl.to(subtitleRef.current,
                { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', force3D: true },
                '-=0.8' // Overlap with background animation
            );

            // 7.5. Blue blur animates in with the subtitle
            tl.to(blueBlurRef.current,
                {
                    opacity: BLUE_BLUR_OPACITY, // Editable via BLUE_BLUR_OPACITY constant at top of file
                    xPercent: -50,
                    yPercent: -50,
                    scaleX: 1.3613,
                    scaleY: 0.7785,
                    duration: 1.2,
                    ease: 'power2.out',
                    force3D: true,
                    transformStyle: 'preserve-3d'
                },
                '-=0.7'
            );

            // 8. Hero icons scale, slide up and fade in with stagger
            if (iconsHolderRef.current?.children) {
                tl.to(iconsHolderRef.current.children,
                    { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(1.4)', force3D: true },
                    '+=0.1'
                );
            }
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={heroRef} data-w-id="39b80f7e-f18f-dad7-8c15-1a4ce38b91c9" className="hero-section-wrapper">
            <div className="container">
                <div className="home-text-holder">
                    <div className="home-text-container">
                        {/* Premium Badge */}
                        <div className="flex justify-center cursor-pointer w-full mb-2">
                            <div
                                ref={tagRef}
                                className="glass-badge inline-flex items-center gap-3 px-4 py-2 rounded-full relative overflow-hidden"
                            >
                                {/* Overlapping avatar circles for social proof */}
                                <div className="flex items-center -space-x-2 relative z-10" style={{ marginTop: '2px' }}>
                                    {[
                                        '/image6.png',
                                        '/image10.png',
                                        '/image13.png',
                                        '/image15.png',
                                    ].map((avatarUrl, index) => (
                                        <div
                                            key={index}
                                            className="w-7 h-7 rounded-full border-2 border-white/30 overflow-hidden shadow-sm bg-gray-200"
                                            style={{
                                                zIndex: 10 - index,
                                            }}
                                        >
                                            <img
                                                src={avatarUrl}
                                                alt={`User ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                                {/* Shine effect - same as FOMOBadge */}
                                <div ref={shineRef} className="fomo-shine"></div>
                                <span className="text-white text-sm font-medium relative z-10">Trusted by +30 coaches, creators & infopreneurs</span>
                            </div>
                        </div>
                        <div className="animate-on-load-01">
                            <h1
                                ref={titleRef}
                                className="hero-title animate-me"
                            >
                                The #1 All-in-One System for Infopreneurs.
                            </h1>
                            {/* <h1
                                ref={titleRef}
                                className="hero-title animate-me"
                            >
                                Stop Losing Time &amp; Money. <br />Scale based on Real Data.
                            </h1> */}
                        </div>
                    </div>
                    <div className="home-pragraph-holder">
                        <div className="animate-on-load-02">
                            <p
                                ref={descriptionRef}
                                className="paragraph-l animate-me"
                            >
Stop losing time & money. Everything centralized. Scale with real data.

                                {/* Everything centralized.<br />No more guesswork — just clarity. */}
                            </p>
                        </div>
                        <div className="animate-on-load-03">
                            <div ref={buttonsRef} className="button-holder">
                                <a
                                    href="https://app.youform.com/forms/esb5dhlr"
                                    className="button w-button animate-me"
                                >
                                    Apply to ScaleOS
                                </a>
                                <a
                                    href="/demo"
                                    className="button outline w-button animate-me"
                                >
                                    View demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-dashboard-wrapper">
                    <div className="animate-on-load-04 center">
                        <div
                            ref={imageContainerRef}
                            className="hero-dashbord-holder"
                        >
                            <img
                                ref={imageRef}
                                sizes="(max-width: 1904px) 100vw, 1904px"
                                alt=""
                                src="https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/692dbc7b3a5c06985dfce7d4_Capture%20d%E2%80%99e%CC%81cran%202025-12-01%20a%CC%80%2015.24.13-p-1600.png"
                                loading="lazy"
                                className="hero-dashboard-image animate-me w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>

                    <div ref={iconsHolderRef} className="hero-icons-holder">
                        <div className="hero-logo-container _01">
                            <img loading="lazy" src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882b349a4b61a45372a3ffb_Calendly.png" alt="" className="hero-logo-slack" />
                            <img loading="lazy" src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882b349a4b61a45372a3ffb_Calendly.png" alt="" className="hero-logo blured" />
                        </div>
                        <div className="hero-logo-container _02">
                            <img sizes="(max-width: 561px) 100vw, 561px" alt="" src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882b3242425dde5434b4301_Stripeimage%25202.png" loading="lazy" className="hero-logo" />
                            <img loading="lazy" src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cd8_Logo%252002.svg" alt="" className="hero-logo blured" />
                        </div>
                        <div className="hero-logo-container _03">
                            <img loading="lazy" src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882b2f8d4b8f6d910498299_Group%252026.png" alt="" className="hero-logo" />
                            <img loading="lazy" src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882b2f8d4b8f6d910498299_Group%252026.png" alt="" className="hero-logo blured" />
                        </div>
                        <div className="hero-logo-container _04">
                            <img sizes="(max-width: 588px) 100vw, 588px" src="https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882b3b81b43f2a0372751f8_Slackimage%201.png" alt="Slack" loading="lazy" className="hero-logo" />
                            <img sizes="(max-width: 588px) 100vw, 588px" src="https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882b3b81b43f2a0372751f8_Slackimage%201.png" alt="Slack" loading="lazy" className="hero-logo blured" />
                        </div>
                    </div>
                </div>


                <div className="hero-text-holder">
                    <div className="hero-text-container" style={{ willChange: 'filter, opacity, transform', filter: 'blur(0px)', opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                        <div className="blue-blur _02" style={{ opacity: 0.255717, transform: 'translate3d(0px, 0px, 0px) scale3d(1.35239, 0.77355, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', willChange: 'opacity, transform' }}></div>
                        
                        <h2 className="title">Say goodbye to scattered spreadsheets, disconnected CRMs and guessing games. Say hello to clarity, control, and cash collected.</h2>
                        </div>
                        
                        </div>
            </div>
        </div>
    );
}
