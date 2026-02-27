'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/all';

// Register GSAP plugins on client side only
if (typeof window !== 'undefined') {
    gsap.registerPlugin(Draggable);
}

export default function FeatureSlider() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const maskRef = useRef<HTMLDivElement>(null);
    const scrollAnimationRef = useRef<gsap.core.Tween | null>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const draggableInstanceRef = useRef<Draggable[] | null>(null);

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
                const blueLines = slideElement.querySelectorAll('.blue-line') as NodeListOf<HTMLElement>;
                
                if (blueLineWrapper) blueLineWrapper.style.opacity = '0';
                blueLines.forEach(line => line.style.opacity = '0');
            });
            
            // Show blue light only on the leftmost slide (but NOT blur image holder)
            if (leftmostSlide !== null) {
                const slideElement: HTMLElement = leftmostSlide;
                const blueLineWrapper = slideElement.querySelector('.blue-line-wrapper') as HTMLElement;
                const blueLines = slideElement.querySelectorAll('.blue-line') as NodeListOf<HTMLElement>;
                
                if (blueLineWrapper) blueLineWrapper.style.opacity = '1';
                blueLines.forEach(line => line.style.opacity = '1');
                // Don't show blur image holder here - only on hover
            }
        };

        // Smooth continuous scrolling animation using GSAP with infinite loop
        const startContinuousScroll = (speedMultiplier = 1) => {
            if (!maskRef.current || !sliderRef.current) return;
            
            // Get only the original slides (first set, before duplicates)
            const allSlides = sliderRef.current.querySelectorAll('.w-slide');
            const originalSlideCount = 8; // We have 8 original slides
            const slides = Array.from(allSlides).slice(0, originalSlideCount) as HTMLElement[];
            
            if (!slides || slides.length === 0) {
                // Retry if slides aren't ready
                setTimeout(() => startContinuousScroll(speedMultiplier), 200);
                return;
            }

            // Wait for layout to settle
            setTimeout(() => {
                if (!maskRef.current) return;

                const firstSlide = slides[0];
                // Get computed width including margin
                const slideRect = firstSlide.getBoundingClientRect();
                const slideWidth = slideRect.width || firstSlide.offsetWidth || 300;
                const slideMargin = 30; // margin-right from CSS
                const slideWidthWithMargin = slideWidth + slideMargin;
                
                if (slideWidth === 0) {
                    setTimeout(() => startContinuousScroll(speedMultiplier), 200);
                    return;
                }

                // Kill existing animation if any
                if (scrollAnimationRef.current) {
                    scrollAnimationRef.current.kill();
                }

                // Calculate width of one complete set of slides (for seamless loop)
                const oneSetWidth = slideWidthWithMargin * originalSlideCount;
                
                // Get current position to continue from where we are
                const currentX = gsap.getProperty(maskRef.current, 'x') as number || 0;

                // Base scroll speed: 40px per second for smooth, readable speed
                const baseScrollSpeed = 40; // pixels per second
                const scrollSpeed = baseScrollSpeed * speedMultiplier;
                const remainingDistance = oneSetWidth + currentX; // Distance to end of loop
                const duration = remainingDistance / scrollSpeed; // time to scroll remaining distance

                // Create smooth infinite scroll animation - like marquee
                scrollAnimationRef.current = gsap.to(maskRef.current, {
                    x: -oneSetWidth,
                    duration: duration,
                    ease: 'none', // Linear easing for constant speed
                    repeat: -1, // Infinite repeat
                    onRepeat: () => {
                        // Reset position seamlessly at the start of each loop
                        gsap.set(maskRef.current, { x: 0 });
                    },
                    onUpdate: () => {
                        updateActiveSlide();
                    }
                });
            }, 500);
        };

        // Setup draggable functionality for manual scrolling
        const setupDraggable = () => {
            if (!maskRef.current || !sliderRef.current) return;

            // Kill any existing draggable
            if (draggableInstanceRef.current) {
                draggableInstanceRef.current.forEach(d => d.kill());
            }

            const allSlides = sliderRef.current.querySelectorAll('.w-slide');
            const originalSlideCount = 8;
            const slides = Array.from(allSlides).slice(0, originalSlideCount) as HTMLElement[];
            
            if (!slides || slides.length === 0) {
                setTimeout(setupDraggable, 200);
                return;
            }

            const firstSlide = slides[0];
            const slideRect = firstSlide.getBoundingClientRect();
            const slideWidth = slideRect.width || firstSlide.offsetWidth || 300;
            const slideMargin = 30;
            const slideWidthWithMargin = slideWidth + slideMargin;
            const oneSetWidth = slideWidthWithMargin * originalSlideCount;

            draggableInstanceRef.current = Draggable.create(maskRef.current, {
                type: 'x',
                inertia: true,
                bounds: { minX: -oneSetWidth * 2, maxX: 0 },
                onDragStart: () => {
                    setIsDragging(true);
                    if (scrollAnimationRef.current) {
                        scrollAnimationRef.current.pause();
                    }
                },
                onDrag: function() {
                    // Handle seamless looping during drag
                    const currentX = this.x;
                    if (currentX < -oneSetWidth) {
                        gsap.set(maskRef.current, { x: currentX + oneSetWidth });
                        this.update();
                    } else if (currentX > 0) {
                        gsap.set(maskRef.current, { x: currentX - oneSetWidth });
                        this.update();
                    }
                    updateActiveSlide();
                },
                onDragEnd: () => {
                    setIsDragging(false);
                    // Resume auto-scroll after drag
                    if (!isHovered) {
                        startContinuousScroll(1);
                    } else {
                        startContinuousScroll(3);
                    }
                }
            });
        };

        // Initialize after a delay to ensure DOM is ready
        const initTimeout = setTimeout(() => {
            updateActiveSlide();
            startContinuousScroll(1);
            setupDraggable();
        }, 1000);

        // Update active slide periodically
        const intervalId = setInterval(() => {
            if (sliderRef.current) {
                updateActiveSlide();
            }
        }, 200);

        return () => {
            clearTimeout(initTimeout);
            clearInterval(intervalId);
            // Kill GSAP animations
            if (scrollAnimationRef.current) {
                scrollAnimationRef.current.kill();
            }
            if (maskRef.current) {
                gsap.killTweensOf(maskRef.current);
            }
            // Kill draggable
            if (draggableInstanceRef.current) {
                draggableInstanceRef.current.forEach(d => d.kill());
            }
        };
    }, []);

    // Handle hover/touch speed changes
    useEffect(() => {
        if (isDragging) return; // Don't change speed while dragging

        if (isHovered) {
            // Speed up to 3x on hover/touch
            startContinuousScroll(3);
        } else {
            // Normal speed when not hovered
            startContinuousScroll(1);
        }
    }, [isHovered, isDragging]);

    const startContinuousScroll = (speedMultiplier: number) => {
        if (!maskRef.current || !sliderRef.current) return;
        
        const allSlides = sliderRef.current.querySelectorAll('.w-slide');
        const originalSlideCount = 8;
        const slides = Array.from(allSlides).slice(0, originalSlideCount) as HTMLElement[];
        
        if (!slides || slides.length === 0) return;

        const firstSlide = slides[0];
        const slideRect = firstSlide.getBoundingClientRect();
        const slideWidth = slideRect.width || firstSlide.offsetWidth || 300;
        const slideMargin = 30;
        const slideWidthWithMargin = slideWidth + slideMargin;
        
        if (slideWidth === 0) return;

        if (scrollAnimationRef.current) {
            scrollAnimationRef.current.kill();
        }

        const oneSetWidth = slideWidthWithMargin * originalSlideCount;
        const currentX = gsap.getProperty(maskRef.current, 'x') as number || 0;
        const baseScrollSpeed = 40;
        const scrollSpeed = baseScrollSpeed * speedMultiplier;
        const remainingDistance = oneSetWidth + currentX;
        const duration = remainingDistance / scrollSpeed;

        scrollAnimationRef.current = gsap.to(maskRef.current, {
            x: -oneSetWidth,
            duration: duration,
            ease: 'none',
            repeat: -1,
            onRepeat: () => {
                gsap.set(maskRef.current, { x: 0 });
            },
            onUpdate: () => {
                updateActiveSlide();
            }
        });
    };

    const updateActiveSlide = () => {
        if (!sliderRef.current) return;
        
        const slides = sliderRef.current.querySelectorAll('.w-slide');
        const mask = sliderRef.current.querySelector('.w-slider-mask') as HTMLElement;
        
        if (!mask) return;
        
        const maskRect = mask.getBoundingClientRect();
        const maskLeft = maskRect.left;
        
        let leftmostSlide: HTMLElement | null = null;
        let leftmostDistance = Infinity;
        
        slides.forEach((slide) => {
            const slideElement = slide as HTMLElement;
            const slideRect = slideElement.getBoundingClientRect();
            const slideLeft = slideRect.left;
            const slideRight = slideRect.right;
            
            if (slideRight > maskLeft && slideLeft < maskRect.right) {
                const distance = slideLeft - maskLeft;
                
                if (distance >= -50 && distance < leftmostDistance) {
                    leftmostDistance = distance;
                    leftmostSlide = slideElement;
                }
            }
        });
        
        slides.forEach((slide) => {
            const slideElement = slide as HTMLElement;
            const blueLineWrapper = slideElement.querySelector('.blue-line-wrapper') as HTMLElement;
            const blueLines = slideElement.querySelectorAll('.blue-line') as NodeListOf<HTMLElement>;
            
            if (blueLineWrapper) blueLineWrapper.style.opacity = '0';
            blueLines.forEach(line => line.style.opacity = '0');
        });
        
        if (leftmostSlide !== null) {
            const slideElement: HTMLElement = leftmostSlide;
            const blueLineWrapper = slideElement.querySelector('.blue-line-wrapper') as HTMLElement;
            const blueLines = slideElement.querySelectorAll('.blue-line') as NodeListOf<HTMLElement>;
            
            if (blueLineWrapper) blueLineWrapper.style.opacity = '1';
            blueLines.forEach(line => line.style.opacity = '1');
        }
    };

    const setupDraggable = () => {
        if (!maskRef.current || !sliderRef.current) return;

        if (draggableInstanceRef.current) {
            draggableInstanceRef.current.forEach(d => d.kill());
        }

        const allSlides = sliderRef.current.querySelectorAll('.w-slide');
        const originalSlideCount = 8;
        const slides = Array.from(allSlides).slice(0, originalSlideCount) as HTMLElement[];
        
        if (!slides || slides.length === 0) {
            setTimeout(setupDraggable, 200);
            return;
        }

        const firstSlide = slides[0];
        const slideRect = firstSlide.getBoundingClientRect();
        const slideWidth = slideRect.width || firstSlide.offsetWidth || 300;
        const slideMargin = 30;
        const slideWidthWithMargin = slideWidth + slideMargin;
        const oneSetWidth = slideWidthWithMargin * originalSlideCount;

        draggableInstanceRef.current = Draggable.create(maskRef.current, {
            type: 'x',
            inertia: true,
            bounds: { minX: -oneSetWidth * 2, maxX: 0 },
            onDragStart: () => {
                setIsDragging(true);
                if (scrollAnimationRef.current) {
                    scrollAnimationRef.current.pause();
                }
            },
            onDrag: function() {
                const currentX = this.x;
                if (currentX < -oneSetWidth) {
                    gsap.set(maskRef.current, { x: currentX + oneSetWidth });
                    this.update();
                } else if (currentX > 0) {
                    gsap.set(maskRef.current, { x: currentX - oneSetWidth });
                    this.update();
                }
                updateActiveSlide();
            },
            onDragEnd: () => {
                setIsDragging(false);
                if (!isHovered) {
                    startContinuousScroll(1);
                } else {
                    startContinuousScroll(3);
                }
            }
        });
    };

    return (
        <div 
            className="slider w-slider" 
            ref={sliderRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
            style={{
                position: 'relative',
                overflow: 'hidden',
                width: '100vw',
                maxWidth: '100vw',
                cursor: isDragging ? 'grabbing' : 'grab'
            }}
        >
            <div 
                className="mask w-slider-mask" 
                ref={maskRef}
                style={{
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    display: 'flex',
                    width: 'fit-content'
                }}
            >
                {/* Slide 1: Unified View - FIRST */}
                <div 
                    className="slide w-slide"
                >
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
                    </div>
                </div>

                {/* Slide 2: Track Your Content Performance — For Real */}
                <div 
                    className="slide w-slide"
                >
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
                    </div>
                </div>

                {/* Slide 3: Smart Revenue Analytics */}
                <div 
                    className="slide w-slide"
                >
                    <div className="feature-item-center">
                        <div className="feautre-content">
                            <div className="fetaure-icon-holder">
                                <img sizes="(max-width: 909px) 100vw, 909px" alt="" src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf1_White%2520Icon%2520(6).png" loading="lazy" className="ease-feature-icon" />
                            </div>
                            <div className="feature-heading-small">Smart Revenue Analytics</div>
                            <p>Make decisions based on data, not gut feeling.<strong> </strong>Know exactly what&apos;s working</p>
                        </div>
                        {/* <div className="blue-line-wrapper">
                            <div className="blue-line _01"></div>
                            <div className="blue-line _02"></div>
                        </div>
                        <div className="blur-image-holder">
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _01" />
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _02" />
                        </div> */}
                    </div>
                </div>

                {/* Slide 4: Know What Each Video Makes You */}
                <div 
                    className="slide w-slide"
                >
                    <div className="feature-item-center">
                        <div className="feautre-content">
                            <div className="fetaure-icon-holder">
                                <img sizes="(max-width: 792px) 100vw, 792px" alt="" src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cee_White%2520Icon%2520(5).png" loading="lazy" className="ease-feature-icon" />
                            </div>
                            <div className="feature-heading-small">Know What Each Video Makes You</div>
                            <p>Track the exact revenue generated by every YouTube video in real time. ScaleOS shows you what content brings in the most money, so you can replicate winners and scale with clarity.</p>
                        </div>
                        {/* <div className="blue-line-wrapper">
                            <div className="blue-line _01"></div>
                        </div> */}
                    </div>
                </div>

                {/* Slide 5: Live Sales Tracking */}
                <div 
                    className="slide w-slide"
                >
                    <div className="feature-item-center">
                        <div className="feautre-content">
                            <div className="fetaure-icon-holder">
                                <img sizes="(max-width: 765px) 100vw, 765px" alt="" src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826ced_White%2520Icon%2520(4).png" loading="lazy" className="ease-feature-icon" />
                            </div>
                            <div className="feature-heading-small">Live Sales Tracking</div>
                            <p>Real-time view of your pipeline.<strong> </strong>From call booked to deal closed, follow your leads and sales activity live.</p>
                        </div>
                        {/* <div className="blue-line-wrapper">
                            <div className="blue-line _01"></div>
                            <div className="blue-line _02"></div>
                        </div>
                        <div className="blur-image-holder">
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _01" />
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _02" />
                        </div> */}
                    </div>
                </div>

                {/* Slide 6: Team Productivity Sync */}
                <div 
                    className="slide w-slide"
                >
                    <div className="feature-item-center">
                        <div className="feautre-content">
                            <div className="fetaure-icon-holder">
                                <img sizes="(max-width: 792px) 100vw, 792px" alt="" src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826ceb_White%2520Icon%2520(3).png" loading="lazy" className="ease-feature-icon" />
                            </div>
                            <div className="feature-heading-small">Team Productivity Sync</div>
                            <p>Streamline your setters &amp; closers<strong>. </strong>Assign leads, monitor follow-ups, and track performance.</p>
                        </div>
                        {/* <div className="blue-line-wrapper">
                            <div className="blue-line _01"></div>
                            <div className="blue-line _02"></div>
                        </div>
                        <div className="blur-image-holder">
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _01" />
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _02" />
                        </div> */}
                    </div>
                </div>

                {/* Slide 7: Auto Data Sync */}
                <div 
                    className="slide w-slide"
                >
                    <div className="feature-item-center">
                        <div className="feautre-content">
                            <div className="fetaure-icon-holder">
                                <img sizes="(max-width: 837px) 100vw, 837px" alt="" src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cef_White%2520Icon%2520(1).png" loading="lazy" className="ease-feature-icon" />
                            </div>
                            <div className="feature-heading-small">Auto Data Sync</div>
                            <p>Connect Stripe, Whop, Slack &amp; more<strong><br />‍</strong>Built to integrate with your stack.</p>
                        </div>
                        {/* <div className="blue-line-wrapper">
                            <div className="blue-line _01"></div>
                            <div className="blue-line _02"></div>
                        </div>
                        <div className="blur-image-holder">
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _01" />
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _02" />
                        </div> */}
                    </div>
                </div>

                {/* Slide 8: AOV / LTV Optimization */}
                <div 
                    className="slide w-slide"
                >
                    <div className="feature-item-center">
                        <div className="feautre-content">
                            <div className="fetaure-icon-holder">
                                <img sizes="(max-width: 684px) 100vw, 684px" alt="" src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cec_White%2520Icon%2520(2).png" loading="lazy" className="ease-feature-icon" />
                            </div>
                            <div className="feature-heading-small">AOV / LTV Optimization</div>
                            <p>Scale without guessing.<strong> </strong>Track client value and purchase behavior over time to spot high-value offers</p>
                        </div>
                        {/* <div className="blue-line-wrapper">
                            <div className="blue-line _01"></div>
                            <div className="blue-line _02"></div>
                        </div>
                        <div className="blur-image-holder">
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _01" />
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _02" />
                        </div> */}
                    </div>
                </div>

                {/* Duplicated slides for seamless infinite loop */}
                {/* Slide 1 Duplicate: Unified View */}
                <div 
                    className="slide w-slide"
                >
                    <div className="feature-item-center">
                        <div className="feautre-content">
                            <div className="fetaure-icon-holder">
                                <img sizes="(max-width: 792px) 100vw, 792px" alt="" src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cee_White%2520Icon%2520(5).png" loading="lazy" className="ease-feature-icon" />
                            </div>
                            <div className="feature-heading-small">Unified View</div>
                            <p><strong>‍</strong>From content to cashflow, ScaleOS centralizes your entire business backend</p>
                        </div>
                        {/* <div className="blue-line-wrapper">
                            <div className="blue-line _01"></div>
                        </div> */}
                    </div>
                </div>

                {/* Slide 2 Duplicate: Track Your Content Performance */}
                <div 
                    className="slide w-slide"
                >
                    <div className="feature-item-center">
                        <div className="feautre-content">
                            <div className="fetaure-icon-holder">
                                <img sizes="(max-width: 792px) 100vw, 792px" alt="" src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cee_White%2520Icon%2520(5).png" loading="lazy" className="ease-feature-icon" />
                            </div>
                            <div className="feature-heading-small">Track Your Content Performance — For Real</div>
                            <p>See which posts generate the most leads, calls, and cash. ScaleOS connects your content to real business results, so you scale based on data, not views.</p>
                        </div>
                        {/* <div className="blue-line-wrapper">
                            <div className="blue-line _01"></div>
                        </div> */}
                    </div>
                </div>

                {/* Slide 3 Duplicate: Smart Revenue Analytics */}
                <div 
                    className="slide w-slide"
                >
                    <div className="feature-item-center">
                        <div className="feautre-content">
                            <div className="fetaure-icon-holder">
                                <img sizes="(max-width: 909px) 100vw, 909px" alt="" src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf1_White%2520Icon%2520(6).png" loading="lazy" className="ease-feature-icon" />
                            </div>
                            <div className="feature-heading-small">Smart Revenue Analytics</div>
                            <p>Make decisions based on data, not gut feeling.<strong> </strong>Know exactly what&apos;s working</p>
                        </div>
                        {/* <div className="blue-line-wrapper">
                            <div className="blue-line _01"></div>
                            <div className="blue-line _02"></div>
                        </div> */}
                        {/* <div className="blur-image-holder">
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _01" />
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _02" />
                        </div> */}
                    </div>
                </div>

                {/* Slide 4 Duplicate: Know What Each Video Makes You */}
                <div 
                    className="slide w-slide"
                >
                    <div className="feature-item-center">
                        <div className="feautre-content">
                            <div className="fetaure-icon-holder">
                                <img sizes="(max-width: 792px) 100vw, 792px" alt="" src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cee_White%2520Icon%2520(5).png" loading="lazy" className="ease-feature-icon" />
                            </div>
                            <div className="feature-heading-small">Know What Each Video Makes You</div>
                            <p>Track the exact revenue generated by every YouTube video in real time. ScaleOS shows you what content brings in the most money, so you can replicate winners and scale with clarity.</p>
                        </div>
                        {/* <div className="blue-line-wrapper">
                            <div className="blue-line _01"></div>
                        </div> */}
                    </div>
                </div>

                {/* Slide 5 Duplicate: Live Sales Tracking */}
                <div 
                    className="slide w-slide"
                >
                    <div className="feature-item-center">
                        <div className="feautre-content">
                            <div className="fetaure-icon-holder">
                                <img sizes="(max-width: 765px) 100vw, 765px" alt="" src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826ced_White%2520Icon%2520(4).png" loading="lazy" className="ease-feature-icon" />
                            </div>
                            <div className="feature-heading-small">Live Sales Tracking</div>
                            <p>Real-time view of your pipeline.<strong> </strong>From call booked to deal closed, follow your leads and sales activity live.</p>
                        </div>
                        {/* <div className="blue-line-wrapper">
                            <div className="blue-line _01"></div>
                            <div className="blue-line _02"></div>
                        </div> */}
                        {/* <div className="blur-image-holder">
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _01" />
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _02" />
                        </div> */}
                    </div>
                </div>

                {/* Slide 6 Duplicate: Team Productivity Sync */}
                <div 
                    className="slide w-slide"
                >
                    <div className="feature-item-center">
                        <div className="feautre-content">
                            <div className="fetaure-icon-holder">
                                <img sizes="(max-width: 792px) 100vw, 792px" alt="" src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826ceb_White%2520Icon%2520(3).png" loading="lazy" className="ease-feature-icon" />
                            </div>
                            <div className="feature-heading-small">Team Productivity Sync</div>
                            <p>Streamline your setters &amp; closers<strong>. </strong>Assign leads, monitor follow-ups, and track performance.</p>
                        </div>
                        {/* <div className="blue-line-wrapper">
                            <div className="blue-line _01"></div>
                            <div className="blue-line _02"></div>
                        </div> */}
                        {/* <div className="blur-image-holder">
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _01" />
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _02" />
                        </div> */}
                    </div>
                </div>

                {/* Slide 7 Duplicate: Auto Data Sync */}
                <div 
                    className="slide w-slide"
                >
                    <div className="feature-item-center">
                        <div className="feautre-content">
                            <div className="fetaure-icon-holder">
                                <img sizes="(max-width: 837px) 100vw, 837px" alt="" src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cef_White%2520Icon%2520(1).png" loading="lazy" className="ease-feature-icon" />
                            </div>
                            <div className="feature-heading-small">Auto Data Sync</div>
                            <p>Connect Stripe, Whop, Slack &amp; more<strong><br />‍</strong>Built to integrate with your stack.</p>
                        </div>
                        {/* <div className="blue-line-wrapper">
                            <div className="blue-line _01"></div>
                            <div className="blue-line _02"></div>
                        </div> */}
                        {/* <div className="blur-image-holder">
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _01" />
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _02" />
                        </div> */}
                    </div>
                </div>

                {/* Slide 8 Duplicate: AOV / LTV Optimization */}
                <div 
                    className="slide w-slide"
                >
                    <div className="feature-item-center">
                        <div className="feautre-content">
                            <div className="fetaure-icon-holder">
                                <img sizes="(max-width: 684px) 100vw, 684px" alt="" src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cec_White%2520Icon%2520(2).png" loading="lazy" className="ease-feature-icon" />
                            </div>
                            <div className="feature-heading-small">AOV / LTV Optimization</div>
                            <p>Scale without guessing.<strong> </strong>Track client value and purchase behavior over time to spot high-value offers</p>
                        </div>
                        {/* <div className="blue-line-wrapper">
                            <div className="blue-line _01"></div>
                            <div className="blue-line _02"></div>
                        </div> */}
                        {/* <div className="blur-image-holder">
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _01" />
                            <img sizes="(max-width: 844px) 100vw, 844px" alt='' src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf0_Blur%2520Image.avif" loading="lazy" className="feature-blur-image _02" />
                        </div> */}
                    </div>
                </div>
            </div>
            {/* <div className="slider-arrow w-slider-arrow-left">
                <div className="slider-arrow-holder">
                    <img src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf3_Arrows%2520(1).svg" loading="lazy" alt="" className="arrow-icon" />
                </div>
            </div>
            <div className="slider-arrow right w-slider-arrow-right">
                <div className="slider-arrow-holder">
                    <img src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cf2_Arrows%2520(2).svg" loading="lazy" alt="" className="arrow-icon" />
                </div>
            </div> */}
            <div className="hide w-slider-nav w-round w-num"></div>
        </div>
    );
}
