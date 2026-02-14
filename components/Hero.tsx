'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

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

    useLayoutEffect(() => {
        if (!heroRef.current) return;

        const ctx = gsap.context(() => {
            // First, ensure all elements are visible and in their final positions
            // Then animate them from their starting positions
            gsap.set(tagRef.current, { opacity: 1, scale: 1, force3D: true });
            gsap.set(shineRef.current, { opacity: 1, x: '100%', force3D: true });
            gsap.set(titleRef.current, { opacity: 1, y: 0, force3D: true });
            gsap.set(descriptionRef.current, { opacity: 1, y: 0, force3D: true });
            gsap.set(buttonsRef.current?.children || [], { opacity: 1, y: 0, force3D: true });
            gsap.set(imageContainerRef.current, { opacity: 1, y: 0, boxShadow: '0 0 0px 0px rgba(16,90,201,0)', force3D: true });
            gsap.set(imageRef.current, { opacity: 1 });
            gsap.set(subtitleRef.current, { opacity: 1, y: 0, force3D: true });
            gsap.set(iconsHolderRef.current?.children || [], { opacity: 1, scale: 1, y: 0, force3D: true });

            // Now animate from starting positions to final positions
            const tl = gsap.timeline({ delay: 0.1 });

            // Timeline sequence - smooth entrance animations
            // 1. Badge scales in
            tl.fromTo(tagRef.current, 
                { scale: 0.8 },
                { scale: 1, duration: 0.5, ease: 'back.out(1.7)', force3D: true }
            );

            // 1.5. Shine effect sweeps across
            tl.fromTo(shineRef.current,
                { x: '-100%' },
                { x: '100%', duration: 1.5, ease: 'power2.inOut', force3D: true },
                '-=0.3'
            );

            // 2. Title slides up
            tl.fromTo(titleRef.current,
                { y: 20 },
                { y: 0, duration: 0.6, ease: 'power3.out', force3D: true },
                '-=0.2'
            );

            // 3. Description slides up
            tl.fromTo(descriptionRef.current,
                { y: 20 },
                { y: 0, duration: 0.6, ease: 'power3.out', force3D: true },
                '-=0.3'
            );

            // 4. Buttons slide up with stagger
            if (buttonsRef.current?.children) {
                tl.fromTo(buttonsRef.current.children,
                    { y: 20 },
                    { y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out', force3D: true },
                    '-=0.3'
                );
            }

            // 5. Image container slides up from bottom
            tl.fromTo(imageContainerRef.current,
                { y: 200, boxShadow: '0 0 0px 0px rgba(16,90,201,0)' },
                { y: 0, duration: 0.8, ease: 'power3.out', force3D: true },
                '-=0.2'
            );

            // 7. Animate box shadow after image appears
            tl.to(imageContainerRef.current, {
                boxShadow: '0 0 60px 80px rgba(16,90,201,0.5)',
                duration: 1,
                ease: 'power2.out',
            }, '-=0.4');

            // 8. Subtitle slides up
            tl.fromTo(subtitleRef.current,
                { y: 20 },
                { y: 0, duration: 0.6, ease: 'power3.out', force3D: true },
                '-=1.5'
            );

            // 9. Hero icons scale and slide up with stagger
            if (iconsHolderRef.current?.children) {
                tl.fromTo(iconsHolderRef.current.children,
                    { scale: 0.8, y: 20 },
                    { scale: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'back.out(1.4)', force3D: true },
                    '-=1'
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
                        <div className="flex justify-center cursor-pointer w-full mb-6">
                            <div 
                                ref={tagRef}
                                className="glass-badge inline-flex items-center gap-3 px-4 py-2 rounded-full relative overflow-hidden"
                            >
                                {/* Overlapping avatar circles for social proof */}
                                <div className="flex items-center -space-x-2 relative z-10">
                                    {[
                                        'https://i.pravatar.cc/150?img=1',
                                        'https://i.pravatar.cc/150?img=12',
                                        'https://i.pravatar.cc/150?img=33',
                                        'https://i.pravatar.cc/150?img=47',
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
                                                                The #1 All-in-One System for Infopreneurs.


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
                    <div className="hero-text-container">
                        <div className="blue-blur _02"></div>
                        <h2
                            ref={subtitleRef}
                            className="title animate-me"
                        >
                            Say goodbye to scattered spreadsheets, disconnected CRMs and guessing games. Say hello to clarity, control, and cash collected.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
