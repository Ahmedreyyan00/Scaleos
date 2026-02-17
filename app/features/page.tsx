'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

const Features = () => {
    const featureSectionRef = useRef<HTMLDivElement>(null);
    const featureImageContainerRef = useRef<HTMLDivElement>(null);
    const featureImageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (!featureSectionRef.current) return;

        const ctx = gsap.context(() => {
            // Set initial states IMMEDIATELY to prevent layout shift
            gsap.set(featureImageContainerRef.current, { 
                opacity: 0, 
                x: '100%', 
                boxShadow: '0 0 0px 0px rgba(16,90,201,0)',
                immediateRender: true,
                force3D: true
            });
            gsap.set(featureImageRef.current, { 
                opacity: 0,
                immediateRender: true
            });

            // Create timeline
            const tl = gsap.timeline({ delay: 0.5 });

            // Timeline sequence
            // 1. Image container slides in from right
            tl.to(featureImageContainerRef.current, {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out',
                force3D: true,
            });

            // 2. Image fades in
            tl.to(featureImageRef.current, {
                opacity: 1,
                duration: 0.3,
                ease: 'power2.out',
            }, '-=0.5');

            // 3. Animate box shadow with smaller intensity (60px blur, 30px spread, 0.3 opacity)
            tl.to(featureImageContainerRef.current, {
                boxShadow: '0 0 60px 30px rgba(16,90,201,0.3)',
                duration: 1,
                ease: 'power2.out',
            }, '-=0.4');
        }, featureSectionRef);

        return () => ctx.revert();
    }, []);
    return (
        <div ref={featureSectionRef}>
            <Header />
            <div className="section overflow-hidden">
                <div className="container">
                    <div className="feature-hero-section-holder">
                        <div className="feature-hero-content">
                            <div style={{ opacity: 0, WebkitTransform: 'translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', filter: 'blur(11px)' }}
                                className="animate-on-load-01">
                                <div className="feature-heading-holder">
                                    <h2 className="title"><strong>Made for creators, coaches &amp; infopreneurs</strong></h2>
                                </div>
                            </div>
                            <div style={{ WebkitTransform: 'translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0, filter: 'blur(11px)' }}
                                className="animate-on-load-02">
                                <div className="feature-paragraph-holder">
                                    <p>ScaleOS turns raw business data into clear decisions. Track revenue, optimize your sales team, and scale with clarity.
                                    </p>
                                </div>
                            </div>
                            <div style={{ opacity: 0, WebkitTransform: 'translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', filter: 'blur(11px)' }}
                                className="animate-on-load-03">
                                <div className="button-holder-features"><a href="https://app.youform.com/forms/esb5dhlr"
                                    className="button w-button">Apply to ScaleOS</a><a href="/demo"
                                        className="button outline w-button">View demo</a></div>
                            </div>
                        </div>
                        <div className="feature-dashboard-holder">
                            <div className="hero-dashboard-wrapper feature-page">
                                <div className="animate-on-load-04 center">
                                    <div ref={featureImageContainerRef} className="hero-dashbord-holder">
                                        <img 
                                            ref={featureImageRef}
                                            sizes="(max-width: 1904px) 100vw, 1904px"
                                            srcSet="https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/692dbc7b3a5c06985dfce7d4_Capture%20d%E2%80%99e%CC%81cran%202025-12-01%20a%CC%80%2015.24.13-p-500.png 500w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/692dbc7b3a5c06985dfce7d4_Capture%20d%E2%80%99e%CC%81cran%202025-12-01%20a%CC%80%2015.24.13-p-800.png 800w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/692dbc7b3a5c06985dfce7d4_Capture%20d%E2%80%99e%CC%81cran%202025-12-01%20a%CC%80%2015.24.13-p-1080.png 1080w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/692dbc7b3a5c06985dfce7d4_Capture%20d%E2%80%99e%CC%81cran%202025-12-01%20a%CC%80%2015.24.13-p-1600.png 1600w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/692dbc7b3a5c06985dfce7d4_Capture%20d%E2%80%99e%CC%81cran%202025-12-01%20a%CC%80%2015.24.13.png 1904w"
                                            alt=""
                                            src="assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/692dbc7b3a5c06985dfce7d4_Capture%20d%E2%80%99e%CC%81cran%202025-12-01%20a%CC%80%2015.24.13.png"
                                            loading="lazy" 
                                            className="hero-dashboard-image" 
                                        />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="bubbles-holder">
                        <div className="left-content">
                            <div className="heading-holder">
                                <h2 className="title">Track Every Key Metric of <br /> Your Info-Business.
                                </h2>
                            </div>
                            <div className="paragraph-holder">
                                <p>Visualize every key metric of your info-business in one unified view: client value (LTV, AOV), sales performance, show-up and closing rates, call sources, and more. </p>
                                <p style={{ marginTop: '16px' }}>Track exactly how much cash each YouTube video (and every piece of content) generates — including revenue per view — so you always know what to double down on. No more guesswork — just clarity.</p>
                            </div>
                        </div>
                        <div data-w-id="04241158-ad09-068c-06fc-285cb2a27ade" className="bubble-grid-holder">
                            <div className="w-layout-grid bubble-grid">
                                <div id="w-node-e618bb64-4848-6fc3-e678-393578cc00b2-a9826b99" className="circle-holder">
                                    <div className="circle-container">
                                        <div className="bubble">
                                            <div className="circle _01">
                                                <div className="circle-active"></div>
                                            </div>
                                            <div className="tip-tool-holder">
                                                <div className="tip-tool-container">
                                                    <p className="no-margins">See every payments in a single place</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="w-node-f980c1bb-9d51-7f66-5a3d-9066585d0fb9-a9826b99" className="circle-holder">
                                    <div className="circle-container">
                                        <div className="bubble">
                                            <div className="circle _05">
                                                <h1 className="title">%</h1>
                                                <div className="circle-info">Closing</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="w-node-_889d8abf-40e1-e465-9cff-eb09508fcb2b-a9826b99" className="circle-holder">
                                    <div className="circle-container">
                                        <div className="bubble">
                                            <div data-w-id="889d8abf-40e1-e465-9cff-eb09508fcb2e" className="circle _04">
                                                <div className="circle-active"></div>
                                            </div>
                                            <div className="tip-tool-holder">
                                                <div className="tip-tool-container">
                                                    <p className="no-margins">Track your organic content</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="w-node-c2f51d86-4073-af58-30f5-62fe6e768684-a9826b99" className="circle-holder">
                                    <div className="circle-container">
                                        <div className="bubble">
                                            <div className="circle _07">
                                                <div className="circle-active"></div>
                                            </div>
                                            <div className="tip-tool-holder">
                                                <div className="tip-tool-container">
                                                    <p className="no-margins">Each leads link to a specific source</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="w-node-_60f809d7-2cf7-4496-4b6a-6fc9b383d714-a9826b99" className="circle-holder">
                                    <div className="circle-container">
                                        <div className="bubble">
                                            <div className="circle _14">
                                                <h1 className="title">%</h1>
                                                <div className="circle-info">Show-up</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="w-node-_11b44b41-291c-9f21-de22-76defb4e3564-a9826b99" className="circle-holder">
                                    <div className="circle-container">
                                        <div className="bubble">
                                            <div className="circle _08">
                                                <div className="circle-active"></div>
                                            </div>
                                            <div className="tip-tool-holder">
                                                <div className="tip-tool-container">
                                                    <p className="no-margins">Organize team meetings</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="w-node-_909a071c-226e-cf00-9b94-2b3d9af98031-a9826b99" className="circle-holder">
                                    <div className="circle-container">
                                        <div className="bubble">
                                            <div className="circle _09">
                                                <div className="circle-active"></div>
                                            </div>
                                            <div className="tip-tool-holder">
                                                <div className="tip-tool-container">
                                                    <p className="no-margins">Create competitors cards</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="w-node-fc5240ef-26ff-1296-3e27-260b47b86876-a9826b99" className="circle-holder">
                                    <div className="circle-container">
                                        <div className="bubble">
                                            <div className="circle _16">
                                                <h1 className="title">AOV</h1>
                                                <div className="circle-info">Clients</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="w-node-c3fa82c7-a524-52fd-3ef6-e6bcc7aad784-a9826b99" className="circle-holder">
                                    <div className="circle-container _02">
                                        <div className="bubble">
                                            <div className="circle _06">
                                                <div className="circle-active"></div>
                                            </div>
                                            <div className="tip-tool-holder">
                                                <div className="tip-tool-container">
                                                    <p className="no-margins">Let your content team know about every piece of
                                                        content to edit.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="w-node-c3fa82c7-a524-52fd-3ef6-e6bcc7aad784-a9826b99" className="circle-holder">
                                    <div className="circle-container _02">
                                        <div className="bubble">
                                            <div className="circle _06">
                                                <div className="circle-active"></div>
                                            </div>
                                            <div className="tip-tool-holder">
                                                <div className="tip-tool-container">
                                                    <p className="no-margins">Let your content team know about every piece of
                                                        content to edit.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="w-node-_4a0abaa9-2d7a-7a7c-c47a-51c73a0d905f-a9826b99" className="circle-holder">
                                    <div className="circle-container">
                                        <div className="bubble">
                                            <div className="circle _10">
                                                <div className="circle-active"></div>
                                            </div>
                                            <div className="tip-tool-holder">
                                                <div className="tip-tool-container">
                                                    <p className="no-margins">Deliver top-tier client experiences with our CRM</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="w-node-_95470791-48d0-6617-8f4c-31f05ee53274-a9826b99" className="circle-holder">
                                    <div className="circle-container">
                                        <div className="bubble">
                                            <div className="circle _15">
                                                <h2 className="title">Calls</h2>
                                                <div className="circle-info">By sources</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="w-node-b665dec7-0281-a517-8dab-57d78fd3100d-a9826b99" className="circle-holder">
                                    <div className="circle-container">
                                        <div className="bubble">
                                            <div className="circle _06">
                                                <div className="circle-active"></div>
                                            </div>
                                            <div className="tip-tool-holder">
                                                <div className="tip-tool-container">
                                                    <p className="no-margins">Keep every lead on track with a automated pipeline<br />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="w-node-_7d01d5d7-80d1-f5fb-b831-7bc4287800d4-a9826b99" className="circle-holder">
                                    <div className="circle-container">
                                        <div className="bubble">
                                            <div className="circle _12">
                                                <div className="circle-active"></div>
                                            </div>
                                            <div className="tip-tool-holder">
                                                <div className="tip-tool-container">
                                                    <p className="no-margins">Track your setters and closers daily — with full
                                                        visibility on every key metric<br /></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="w-node-_39a76b2b-d3b5-dbf9-4f6e-1633317a7762-a9826b99" className="circle-holder">
                                    <div className="circle-container">
                                        <div className="bubble">
                                            <div className="circle _02">
                                                <h2 className="title">LTV</h2>
                                                <div className="circle-info">Clients</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="w-node-_3a4c544a-dd87-cba6-05dd-9da1c9d5c5a1-a9826b99" className="circle-holder">
                                    <div className="circle-container">
                                        <div className="bubble">
                                            <div className="circle _13">
                                                <div className="circle-active"></div>
                                            </div>
                                            <div className="tip-tool-holder">
                                                <div className="tip-tool-container">
                                                    <p className="no-margins">Stock your teams docs in a single place</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Main bubble: $ / Content */}
                                <div className="circle-holder">
                                    <div className="circle-container">
                                        <div className="bubble">
                                            <div className="circle _05">
                                                <h1 className="title">$</h1>
                                                <div className="circle-info">/ Content</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Secondary bubble: $ / YouTube Video - positioned in center */}
                                <div className="circle-holder video-bubble-center">
                                    <div className="circle-container">
                                        <div className="bubble">
                                            <div className="circle _04">
                                                <div className="circle-active"></div>
                                            </div>
                                            <div className="tip-tool-holder">
                                                <div className="tip-tool-container">
                                                    <p className="no-margins">$ / Video - How much cash each YouTube video generates</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="feature-grid-holder">
                        <div className="w-layout-grid _3x-grid">
                            <div className="feature-item">
                                <div className="fetaure-icon-container"><img
                                    src="https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cfc_Icons%2005.svg"
                                    loading="lazy" alt="" className="fetaure-icon" /></div>
                                <div className="feature-content-holder">
                                    <h5 className="title">Leads Overview</h5>
                                    <p>Know who’s hot, who’s not.<br /><strong>‍</strong>Instantly access lead details, deal
                                        stages, and qualification status — all in one unified view.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="fetaure-icon-container"><img
                                    src="https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cfe_Icons%2002.svg"
                                    loading="lazy" alt="" className="fetaure-icon" /></div>
                                <div className="feature-content-holder">
                                    <h5 className="title">Payments</h5>
                                    <p>Real-time cashflow tracking.<br /><strong>‍</strong>See what came in today, or at any
                                        specific date. No more jumping between platforms.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="fetaure-icon-container"><img
                                    src="https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826d09_Icons%20(2).png"
                                    loading="lazy" alt="" className="fetaure-icon" /></div>
                                <div className="feature-content-holder">
                                    <h5 className="title">CRM</h5>
                                    <p>Manage every client like a pro.<br /><strong>‍</strong>Keep all your client data, coaching
                                        status, and progress in a single, searchable interface.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-layout-grid _3x-grid">
                            <div className="feature-item">
                                <div className="fetaure-icon-container"><img
                                    src="assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cef_White%20Icon%20(1).png"
                                    loading="lazy" sizes="(max-width: 837px) 100vw, 837px"
                                    srcSet="https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cef_White%2520Icon%2520(1)-p-500.png 500w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cef_White%2520Icon%2520(1)-p-800.png 800w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cef_White%20Icon%20(1).png 837w"
                                    alt="" className="fetaure-icon" /></div>
                                <div className="feature-content-holder">
                                    <h5 className="title"><strong>Sales Team Tracker</strong></h5>
                                    <p><strong>Monitor your setters &amp; closers. </strong>Track show-up rate, close rate,
                                        commission earned, and more — per rep, per week.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="fetaure-icon-container"><img
                                    src="https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826d00_Icons%2003.svg"
                                    loading="lazy" alt="" className="fetaure-icon" /></div>
                                <div className="feature-content-holder">
                                    <h5 className="title">Slack notifications</h5>
                                    <p><strong>Stay in the loop, automatically. </strong>Get notified instantly when a lead
                                        books a call, makes a payment, or changes status.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="fetaure-icon-container"><img
                                    src="https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cee_White%20Icon%20(5).png"
                                    loading="lazy" alt="" className="fetaure-icon" /></div>
                                <div className="feature-content-holder">
                                    <h5 className="title">Content Performance</h5>
                                    <p>Track every content metric that matters.<br /><strong>‍</strong>See exactly which posts and YouTube videos generate the most leads, calls, and cash — so you can double down on what works and scale faster.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="new-features-holder">
                        <div className="w-layout-grid new-features-grid">
                            <div id="w-node-aff8d657-c26a-b880-f10a-62c9ad718d5b-a9826b99" className="feature-grid-content">
                                <div className="feature-grid-content-holder-2">
                                    <div className="fade-in-on-scroll">
                                        <h3 className="title">4 Dashboards</h3>
                                    </div>
                                    <div className="fade-in-on-scroll">
                                        <p>Get a complete view of your business.
                                            Track your <strong>sales</strong>, <strong>cashflow</strong>, <strong>traffic</strong>, <strong>sales team
                                                KPIs</strong>, and <strong>content performance</strong> in real time — all in one place, with zero confusion and zero
                                            spreadsheets.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div id="w-node-aff8d657-c26a-b880-f10a-62c9ad718d63-a9826b99" className="feature-graphic-holder">
                                <div data-w-id="aff8d657-c26a-b880-f10a-62c9ad718d64" className="feature-image-container _02">
                                    <div className="feature-image-wrapper">
                                        <img className="feature-image-full"
                                        src="/scalefeature3.png"
                                        alt="" style={{ opacity: 0 }} sizes="(max-width: 1068px) 100vw, 1068px"
                                        data-w-id="aff8d657-c26a-b880-f10a-62c9ad718d65" loading="lazy"
                                        srcSet="/scalefeature3.png 500w, /scalefeature3.png 800w, /scalefeature3.png 1068w" />
                                    </div>
                                    <div className="cube-rotate-holder">
                                        <img className="cube-image"
                                            src="assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206.png"
                                            alt=""
                                            style={{ WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)', MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)', msTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)', transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)' }}
                                            sizes="(max-width: 2066px) 100vw, 2066px"
                                            data-w-id="6a80a126-dd78-85da-5898-50e6e4619731" loading="lazy"
                                            srcSet="https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206-p-500.png 500w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206-p-800.png 800w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206-p-1080.png 1080w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206-p-1600.png 1600w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206-p-2000.png 2000w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206.png 2066w" />
                                    </div>
                                </div>
                                <div className="feature-image-blur"></div>
                            </div>
                        </div>
                        <div className="w-layout-grid new-features-grid-phone">
                            <div id="w-node-_66bfc9f7-cc07-eb22-9e88-5737a113d2dd-a9826b99" className="feature-graphic-holder">
                                <div data-w-id="66bfc9f7-cc07-eb22-9e88-5737a113d2de" className="feature-image-container _02">
                                    <div className="feature-image-wrapper"><img className="feature-image-full"
                                        src="/scalefeature5.png"
                                        alt="" style={{ opacity: 0 }} sizes="(max-width: 1068px) 100vw, 1068px"
                                        data-w-id="66bfc9f7-cc07-eb22-9e88-5737a113d2e0" loading="lazy"
                                        srcSet="/scalefeature5.png 500w, /scalefeature5.png 800w, /scalefeature5.png 1068w" />
                                    </div>
                                    <div className="cube-rotate-holder">
                                        <img className="cube-image"
                                            src="assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206.png"
                                            alt=""
                                            style={{ WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)', MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)', msTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)', transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)' }}
                                            sizes="(max-width: 2066px) 100vw, 2066px"
                                            data-w-id="66bfc9f7-cc07-eb22-9e88-5737a113d2e2" loading="lazy"
                                            srcSet="https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206-p-500.png 500w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206-p-800.png 800w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206-p-1080.png 1080w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206-p-1600.png 1600w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206-p-2000.png 2000w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206.png 2066w" />
                                    </div>
                                </div>
                                <div className="feature-image-blur"></div>
                            </div>
                            <div className="feature-grid-content">
                                <div className="feature-grid-content-holder-2">
                                    <div className="fade-in-on-scroll">
                                        <h3 className="title"><strong>Keep Your Sales Organized
                                        </strong></h3>
                                    </div>
                                    <div className="fade-in-on-scroll">
                                        <p>From first touch to payment — track every step of your sales process in one place. Easily visualize your pipeline, manage appointments, track payments, and keep every contact within reach.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-layout-grid new-features-grid">
                            <div id="w-node-_0c183a05-9162-9e2a-c293-ceaaabefc7ed-a9826b99" className="feature-grid-content">
                                <div className="feature-grid-content-holder-2">
                                    <div className="fade-in-on-scroll">
                                        <h3 className="title"><strong>Know What Your Content Really Generates.
                                        </strong></h3>
                                    </div>
                                    <div className="fade-in-on-scroll">
                                        <p>Track the performance and revenue of every post in one dashboard. See views, leads, calls, and cash generated per piece of content — including exactly how much each YouTube video brings in. Scale by doubling down on what actually pays.</p>
                                    </div>
                                </div>
                            </div>
                            <div id="w-node-_0c183a05-9162-9e2a-c293-ceaaabefc7f5-a9826b99" className="feature-graphic-holder">
                                <div data-w-id="0c183a05-9162-9e2a-c293-ceaaabefc7f6" className="feature-image-container _02">
                                    <div className="feature-image-wrapper"><img className="feature-image-full"
                                        src="/scalefeature2.png"
                                        alt="" style={{ opacity: 0 }} sizes="(max-width: 1068px) 100vw, 1068px"
                                        data-w-id="0c183a05-9162-9e2a-c293-ceaaabefc7f8" loading="lazy"
                                        srcSet="/scalefeature2.png 500w, /scalefeature2.png 800w, /scalefeature2.png 1068w" />
                                    </div>
                                    <div className="cube-rotate-holder">
                                        <img className="cube-image"
                                        src="assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206.png"
                                        alt=""
                                        style={{ WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)', MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)', msTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)', transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)' }}
                                        sizes="(max-width: 2066px) 100vw, 2066px"
                                        data-w-id="0c183a05-9162-9e2a-c293-ceaaabefc7fa" loading="lazy"
                                        srcSet="https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206-p-500.png 500w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206-p-800.png 800w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206-p-1080.png 1080w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206-p-1600.png 1600w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206-p-2000.png 2000w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206.png 2066w" />
                                   
                                    </div>
                                </div>
                                <div className="feature-image-blur"></div>
                            </div>
                        </div>
                        <div className="w-layout-grid new-features-grid-phone">
                        <div id="w-node-_0c183a05-9162-9e2a-c293-ceaaabefc7f5-a9826b99" className="feature-graphic-holder">
                                <div data-w-id="0c183a05-9162-9e2a-c293-ceaaabefc7f6" className="feature-image-container _02">
                                    <div className="feature-image-wrapper">
                                        <img className="feature-image-full"
                                            src="/content.png"
                                            alt="" 
                                            style={{ opacity: 0 }} 
                                            sizes="(max-width: 1068px) 100vw, 1068px"
                                            data-w-id="0c183a05-9162-9e2a-c293-ceaaabefc7f8" 
                                            loading="lazy"
                                            srcSet="/content.png 500w, /content.png 800w, /content.png 1068w" />
                                    </div>
                                    <div className="cube-rotate-holder"><img className="cube-image"
                                        src="assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206.png"
                                        alt=""
                                        style={{ WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)', MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)', msTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)', transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)' }}
                                        sizes="(max-width: 2066px) 100vw, 2066px"
                                        data-w-id="0c183a05-9162-9e2a-c293-ceaaabefc7fa" loading="lazy"
                                        srcSet="https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206-p-500.png 500w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206-p-800.png 800w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206-p-1080.png 1080w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206-p-1600.png 1600w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206-p-2000.png 2000w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206.png 2066w" />
                                    </div>
                                </div>
                                <div className="feature-image-blur"></div>
                            </div>
                            <div id="w-node-_3849909d-7672-604f-4f6e-e1d39bdbca7a-a9826b99" className="feature-grid-content">
                                <div className="feature-grid-content-holder-2">
                                    <div className="fade-in-on-scroll">
                                        <h3 className="title"><strong>Your Content System — Fully Organized.</strong></h3>
                                    </div>
                                    <div className="fade-in-on-scroll">
                                        <p>From planning to publishing, centralize your entire content workflow. Manage your calendar, store ideas, track tasks in a Slack-integrated pipeline, monitor competitors, and keep every asset in one place.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-layout-grid new-features-grid">
                            <div id="w-node-f98726bf-3213-24ab-c75f-e87cb8a73736-a9826b99" className="feature-grid-content">
                                <div className="feature-grid-content-holder-2">
                                    <div className="fade-in-on-scroll">
                                        <h3 className="title"><strong>Teamwork, Systemized.</strong></h3>
                                    </div>
                                    <div className="fade-in-on-scroll">
                                        <p>Assign, track, and deliver — without the chaos. Plan tasks in the calendar, move them through a team pipeline, centralize key resources, and keep everyone aligned. With Slack integration, your team gets instantly notified the moment a task is assigned or updated.</p>
                                    </div>
                                </div>
                            </div>
                            <div id="w-node-f98726bf-3213-24ab-c75f-e87cb8a73745-a9826b99" className="feature-graphic-holder">
                                <div data-w-id="f98726bf-3213-24ab-c75f-e87cb8a73746" className="feature-image-container _02">
                                    <div className="feature-image-wrapper"><img className="feature-image-full"
                                        src="assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/692dc15d800a6976045238c9_Teamclarity.png"
                                        alt="" style={{ opacity: 0 }} sizes="(max-width: 1068px) 100vw, 1068px"
                                        data-w-id="f98726bf-3213-24ab-c75f-e87cb8a73748" loading="lazy"
                                        srcSet="https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/692dc15d800a6976045238c9_Teamclarity-p-500.png 500w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/692dc15d800a6976045238c9_Teamclarity-p-800.png 800w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/692dc15d800a6976045238c9_Teamclarity.png 1068w" />
                                    </div>
                                    <div className="cube-rotate-holder"><img className="cube-image"
                                        src="assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206.png"
                                        alt=""
                                        style={{ WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)', MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)', msTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)', transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)' }}
                                        sizes="(max-width: 2066px) 100vw, 2066px"
                                        data-w-id="f98726bf-3213-24ab-c75f-e87cb8a7374a" loading="lazy"
                                        srcSet="https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206-p-500.png 500w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206-p-800.png 800w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206-p-1080.png 1080w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206-p-1600.png 1600w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206-p-2000.png 2000w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6883fea00a351bcab0c9a0b4_LogoClarity%206.png 2066w" />
                                    </div>
                                </div>
                                <div className="feature-image-blur"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container"></div>
            </div>
            <div data-wf--footer--variant="base" className="section overflow-hidden">
                <div className="container">
                    <div className="cta-holder">
                        <div className="cta-content">
                            <div className="fade-in-on-scroll">
                                <h1>The #1 All-in-One System <br/> for Infopreneurs.
                                </h1>
                            </div>
                            <div className="form"><a href="https://app.youform.com/forms/esb5dhlr"
                                className="submit-button-url w-button">Apply to ScaleOS</a></div>
                        </div>
                        <CTASection />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};


export default Features;