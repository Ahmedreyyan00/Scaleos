'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CTASection() {
    const ctaRef = useRef<HTMLDivElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (!ctaRef.current) return;

        const ctx = gsap.context(() => {
            // Set initial states IMMEDIATELY to prevent layout shift
            gsap.set(imageContainerRef.current, {
                opacity: 0,
                y: 200,
                boxShadow: '0 0 0px 0px rgba(16,90,201,0)',
                immediateRender: true,
                force3D: true
            });
            gsap.set(imageRef.current, {
                opacity: 0,
                immediateRender: true
            });

            // Create timeline
            const tl = gsap.timeline({ delay: 0.5 });

            // Timeline sequence
            // 1. Image container comes from bottom
            tl.to(imageContainerRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                force3D: true,
            });

            // 2. Image fades in
            tl.to(imageRef.current, {
                opacity: 1,
                duration: 0.3,
                ease: 'power2.out',
            }, '-=0.5');

            // 3. Animate box shadow after image appears (using theme blue color)
            tl.to(imageContainerRef.current, {
                boxShadow: '0 0 100px 50px rgba(16,90,201,0.5)',
                duration: 1,
                ease: 'power2.out',
            }, '-=0.4');
        }, ctaRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={ctaRef} data-w-id="916dc6f2-d45d-4fd6-0e2a-987e1ed31411" className="cta-dashboard-holer">
            <div className="cta-dashboard">
                <div ref={imageContainerRef} className="hero-dashbord-holder">
                    <img
                        ref={imageRef}
                        sizes="(max-width: 1904px) 100vw, 1904px"
                        alt=""
                        src="/saasDashboard.png"
                        loading="lazy"
                        className="hero-dashboard-image"
                    />
                </div>
            </div>
            {/* <div className="blue-blur cta-blue-blur"></div> */}
        </div>
    );
}

