'use client';

import { useEffect, useRef } from 'react';

export default function FeatureSlider() {
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Function to update active slide blue light - only show on leftmost visible slide
        const updateActiveSlide = () => {
            if (!sliderRef.current) return;
            
            const slides = sliderRef.current.querySelectorAll('.w-slide');
            const mask = sliderRef.current.querySelector('.w-slider-mask') as HTMLElement;
            
            if (!mask) return;
            
            // Get the mask's bounding rectangle to know the viewport
            const maskRect = mask.getBoundingClientRect();
            const maskLeft = maskRect.left;
            
            // Find the slide that is closest to the left edge of the viewport
            let leftmostSlide: HTMLElement | null = null;
            let leftmostDistance = Infinity;
            
            slides.forEach((slide) => {
                const slideElement = slide as HTMLElement;
                const slideRect = slideElement.getBoundingClientRect();
                const slideLeft = slideRect.left;
                const slideRight = slideRect.right;
                
                // Check if slide is at least partially visible in the viewport
                if (slideRight > maskLeft && slideLeft < maskRect.right) {
                    // Calculate distance from left edge of mask
                    const distance = slideLeft - maskLeft;
                    
                    // If this slide is closer to the left edge, it's the leftmost
                    if (distance >= -50 && distance < leftmostDistance) {
                        leftmostDistance = distance;
                        leftmostSlide = slideElement;
                    }
                }
            });
            
            // Hide all blue lights first
            slides.forEach((slide) => {
                const slideElement = slide as HTMLElement;
                const blueLineWrapper = slideElement.querySelector('.blue-line-wrapper') as HTMLElement;
                const blurImageHolder = slideElement.querySelector('.blur-image-holder') as HTMLElement;
                const blueLines = slideElement.querySelectorAll('.blue-line') as NodeListOf<HTMLElement>;
                const blurImages = slideElement.querySelectorAll('.feature-blur-image') as NodeListOf<HTMLElement>;
                
                if (blueLineWrapper) blueLineWrapper.style.opacity = '0';
                if (blurImageHolder) blurImageHolder.style.opacity = '0';
                blueLines.forEach(line => line.style.opacity = '0');
                blurImages.forEach(img => img.style.opacity = '0');
            });
            
            // Show blue light only on the leftmost slide
            if (leftmostSlide !== null) {
                const slideElement: HTMLElement = leftmostSlide;
                const blueLineWrapper = slideElement.querySelector('.blue-line-wrapper') as HTMLElement;
                const blurImageHolder = slideElement.querySelector('.blur-image-holder') as HTMLElement;
                const blueLines = slideElement.querySelectorAll('.blue-line') as NodeListOf<HTMLElement>;
                const blurImages = slideElement.querySelectorAll('.feature-blur-image') as NodeListOf<HTMLElement>;
                
                if (blueLineWrapper) blueLineWrapper.style.opacity = '1';
                if (blurImageHolder) blurImageHolder.style.opacity = '1';
                blueLines.forEach(line => line.style.opacity = '1');
                blurImages.forEach(img => img.style.opacity = '1');
            }
        };

        // Wait for Webflow scripts to load and initialize slider
        const initSlider = () => {
            if (typeof window !== 'undefined') {
                // Check if Webflow is available
                if ((window as any).Webflow) {
                    // Destroy existing slider instance if any
                    if (sliderRef.current) {
                        const $slider = (window as any).$(sliderRef.current);
                        if ($slider.data('w-slider')) {
                            $slider.data('w-slider').destroy();
                        }
                    }
                    
                    // Reinitialize Webflow
                    (window as any).Webflow.destroy();
                    (window as any).Webflow.ready();
                    (window as any).Webflow.require('ix2').init();
                    
                    // Set initial active slide and setup observer
                    setTimeout(() => {
                        updateActiveSlide();
                        setupObserver();
                    }, 200);
                    
                    // Listen for slider changes
                    if (sliderRef.current) {
                        const $slider = (window as any).$(sliderRef.current);
                        $slider.on('change', updateActiveSlide);
                        
                        // Also listen for transition end
                        const mask = sliderRef.current.querySelector('.w-slider-mask') as HTMLElement;
                        if (mask) {
                            mask.addEventListener('transitionend', updateActiveSlide);
                        }
                    }
                } else {
                    // Retry after a short delay if Webflow isn't loaded yet
                    setTimeout(initSlider, 100);
                }
            }
        };

        // Try to initialize immediately
        initSlider();

        // Also try after a delay to ensure scripts are loaded
        const timeoutId = setTimeout(initSlider, 500);
        
        // Initialize observer after slider is ready
        let observer: IntersectionObserver | null = null;
        
        const setupObserver = () => {
            if (!sliderRef.current) return;
            
            const mask = sliderRef.current.querySelector('.w-slider-mask') as HTMLElement;
            if (!mask) return;
            
            // Disconnect existing observer if any
            if (observer) {
                observer.disconnect();
            }
            
            const observerOptions = {
                root: mask,
                rootMargin: '0px',
                threshold: 0.5 // Consider slide active when 50% visible
            };
            
            observer = new IntersectionObserver((entries) => {
                // Use the main update function which finds the leftmost slide
                updateActiveSlide();
            }, observerOptions);
            
            // Observe all slides
            const slides = sliderRef.current.querySelectorAll('.w-slide');
            slides.forEach(slide => observer!.observe(slide));
        };
        
        // Poll for slide changes (fallback method) - check more frequently for smooth updates
        const intervalId = setInterval(() => {
            if (sliderRef.current) {
                updateActiveSlide();
            }
        }, 100);

        return () => {
            clearTimeout(timeoutId);
            clearInterval(intervalId);
            if (observer) {
                observer.disconnect();
            }
            if (sliderRef.current) {
                const $slider = (window as any).$(sliderRef.current);
                $slider.off('change', updateActiveSlide);
            }
        };
    }, []);

    return (
        <div data-delay="4000" data-animation="slide" className="slider w-slider" data-autoplay="true" data-easing="ease-out-expo" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="1250" data-infinite="true" ref={sliderRef}>
            <div className="mask w-slider-mask">
                {/* Slide 1: Unified View - FIRST */}
                <div className="slide w-slide">
                    <div id="w-node-_9eed4757-86a4-f7d5-b099-f9f1459df6a9-a9826b02" className="feature-item-center">
                        <div className="feautre-content">
                            <div className="fetaure-icon-holder">
                                <img sizes="(max-width: 792px) 100vw, 792px" alt="" src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cee_White%2520Icon%2520(5).png" loading="lazy" className="ease-feature-icon" />
                            </div>
                            <div className="feature-heading-small">Unified View</div>
                            <p><strong>‍</strong>From content to cashflow, ScaleOS centralizes your entire business backend</p>
                        </div>
                        <div className="blue-line-wrapper">
                            <div className="blue-line _01"></div>
                        </div>
                        <div className="blur-image-holder">
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _01" />
                        </div>
                    </div>
                </div>

                {/* Slide 2: Track Your Content Performance — For Real */}
                <div className="slide w-slide">
                    <div className="feature-item-center">
                        <div className="feautre-content">
                            <div className="fetaure-icon-holder">
                                <img sizes="(max-width: 792px) 100vw, 792px" alt="" src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cee_White%2520Icon%2520(5).png" loading="lazy" className="ease-feature-icon" />
                            </div>
                            <div className="feature-heading-small">Track Your Content Performance — For Real</div>
                            <p>See which posts generate the most leads, calls, and cash. ScaleOS connects your content to real business results, so you scale based on data, not views.</p>
                        </div>
                        <div className="blue-line-wrapper">
                            <div className="blue-line _01"></div>
                        </div>
                        <div className="blur-image-holder">
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _01" />
                        </div>
                    </div>
                </div>

                {/* Slide 3: Smart Revenue Analytics */}
                <div className="slide w-slide">
                    <div className="feature-item-center">
                        <div className="feautre-content">
                            <div className="fetaure-icon-holder">
                                <img sizes="(max-width: 909px) 100vw, 909px" alt="" src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf1_White%2520Icon%2520(6).png" loading="lazy" className="ease-feature-icon" />
                            </div>
                            <div className="feature-heading-small">Smart Revenue Analytics</div>
                            <p>Make decisions based on data, not gut feeling.<strong> </strong>Know exactly what&apos;s working</p>
                        </div>
                        <div className="blue-line-wrapper">
                            <div className="blue-line _01"></div>
                            <div className="blue-line _02"></div>
                        </div>
                        <div className="blur-image-holder">
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _01" />
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _02" />
                        </div>
                    </div>
                </div>

                {/* Slide 4: Know What Each Video Makes You */}
                <div className="slide w-slide">
                    <div className="feature-item-center">
                        <div className="feautre-content">
                            <div className="fetaure-icon-holder">
                                <img sizes="(max-width: 792px) 100vw, 792px" alt="" src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cee_White%2520Icon%2520(5).png" loading="lazy" className="ease-feature-icon" />
                            </div>
                            <div className="feature-heading-small">Know What Each Video Makes You</div>
                            <p>Track the exact revenue generated by every YouTube video in real time. ScaleOS shows you what content brings in the most money, so you can replicate winners and scale with clarity.</p>
                        </div>
                        <div className="blue-line-wrapper">
                            <div className="blue-line _01"></div>
                        </div>
                        <div className="blur-image-holder">
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _01" />
                        </div>
                    </div>
                </div>

                {/* Slide 5: Live Sales Tracking */}
                <div className="slide w-slide">
                    <div className="feature-item-center">
                        <div className="feautre-content">
                            <div className="fetaure-icon-holder">
                                <img sizes="(max-width: 765px) 100vw, 765px" alt="" src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826ced_White%2520Icon%2520(4).png" loading="lazy" className="ease-feature-icon" />
                            </div>
                            <div className="feature-heading-small">Live Sales Tracking</div>
                            <p>Real-time view of your pipeline.<strong> </strong>From call booked to deal closed, follow your leads and sales activity live.</p>
                        </div>
                        <div className="blue-line-wrapper">
                            <div className="blue-line _01"></div>
                            <div className="blue-line _02"></div>
                        </div>
                        <div className="blur-image-holder">
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _01" />
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _02" />
                        </div>
                    </div>
                </div>

                {/* Slide 6: Team Productivity Sync */}
                <div className="slide w-slide">
                    <div className="feature-item-center">
                        <div className="feautre-content">
                            <div className="fetaure-icon-holder">
                                <img sizes="(max-width: 792px) 100vw, 792px" alt="" src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826ceb_White%2520Icon%2520(3).png" loading="lazy" className="ease-feature-icon" />
                            </div>
                            <div className="feature-heading-small">Team Productivity Sync</div>
                            <p>Streamline your setters &amp; closers<strong>. </strong>Assign leads, monitor follow-ups, and track performance.</p>
                        </div>
                        <div className="blue-line-wrapper">
                            <div className="blue-line _01"></div>
                            <div className="blue-line _02"></div>
                        </div>
                        <div className="blur-image-holder">
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _01" />
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _02" />
                        </div>
                    </div>
                </div>

                {/* Slide 7: Auto Data Sync */}
                <div className="slide w-slide">
                    <div className="feature-item-center">
                        <div className="feautre-content">
                            <div className="fetaure-icon-holder">
                                <img sizes="(max-width: 837px) 100vw, 837px" alt="" src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cef_White%2520Icon%2520(1).png" loading="lazy" className="ease-feature-icon" />
                            </div>
                            <div className="feature-heading-small">Auto Data Sync</div>
                            <p>Connect Stripe, Whop, Slack &amp; more<strong><br />‍</strong>Built to integrate with your stack.</p>
                        </div>
                        <div className="blue-line-wrapper">
                            <div className="blue-line _01"></div>
                            <div className="blue-line _02"></div>
                        </div>
                        <div className="blur-image-holder">
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _01" />
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _02" />
                        </div>
                    </div>
                </div>

                {/* Slide 8: AOV / LTV Optimization */}
                <div className="slide w-slide">
                    <div className="feature-item-center">
                        <div className="feautre-content">
                            <div className="fetaure-icon-holder">
                                <img sizes="(max-width: 684px) 100vw, 684px" alt="" src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cec_White%2520Icon%2520(2).png" loading="lazy" className="ease-feature-icon" />
                            </div>
                            <div className="feature-heading-small">AOV / LTV Optimization</div>
                            <p>Scale without guessing.<strong> </strong>Track client value and purchase behavior over time to spot high-value offers</p>
                        </div>
                        <div className="blue-line-wrapper">
                            <div className="blue-line _01"></div>
                            <div className="blue-line _02"></div>
                        </div>
                        <div className="blur-image-holder">
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _01" />
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _02" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="slider-arrow w-slider-arrow-left">
                <div className="slider-arrow-holder">
                    <img src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf3_Arrows%2520(1).svg" loading="lazy" alt="" className="arrow-icon" />
                </div>
            </div>
            <div className="slider-arrow right w-slider-arrow-right">
                <div className="slider-arrow-holder">
                    <img src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf2_Arrows%2520(2).svg" loading="lazy" alt="" className="arrow-icon" />
                </div>
            </div>
            <div className="hide w-slider-nav w-round w-num"></div>
        </div>
    );
}

