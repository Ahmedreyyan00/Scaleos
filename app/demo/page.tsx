'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CTASection from '../../components/CTASection';
import FOMOBadge from '../../components/FOMOBadge';
import { useBlurFadeIn } from '../../hooks/useBlurFadeIn';

const Demo = () => {
    useBlurFadeIn();

    return (
        <div className="wrapper demo">
            <Header />
            <div className="section hero-section">
                <div className="hero-section">
                    <div className="container">
                        <div className="hero-section-center-holder-phone">
                            <div className="animate-on-load-01">
                                <div className="hero-center-text">
                                    <h2 className="title"><strong>Scaling With Real Data Starts Now
                                    </strong></h2>
                                </div>
                            </div>
                            <div className="animate-on-load-02">
                                <div className="center-hero-paragraph-holder">
                                    <div>
                                        <p className="paragraph-2">Discover how top infopreneurs scale faster with clarity.</p>
                                        <p className="paragraph-2">Watch the demo.</p>
                                    </div>
                                </div>
                            </div>
                            <div data-w-id="d008a59a-2a66-aa99-9c66-ed23f253757b" style={{ opacity: 0 }}
                                className="blue-blur-holder">
                                <div className="blue-blur-blog"></div>
                            </div>
                        </div>
                        <div className="w-layout-blockcontainer container-4 w-container">
                            <div style={{ paddingTop: '56.17021276595745%' }} className="w-embed-youtubevideo youtube"><iframe
                                src="https://www.youtube.com/embed/ODNuldPIb0o?rel=0&amp;controls=1&amp;autoplay=1&amp;mute=0&amp;start=0"
                                frameBorder="0"
                                style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', pointerEvents: 'auto' }}
                                allow="autoplay; encrypted-media" allowFullScreen={true}
                                title="ClarityScale | The First All-In-One for High-Ticket Businesses"></iframe></div>
                        </div>
                        <div className="button-holder-phone"><a href="https://app.youform.com/forms/esb5dhlr"
                            className="button w-button">Apply to ScaleOS</a></div>
                    </div>
                    <section className="section-2">
                        <div className="hero-section-center-holder-2">
                            <div className="animate-on-load-01">
                                <div className="hero-center-text">
                                    <h2 className="title"><strong>Apply to ScaleOS Now</strong></h2>
                                </div>
                            </div>
                            <div className="animate-on-load-02">
                                <div className="center-hero-paragraph-holder">
                                    <div>
                                        <p className="paragraph-2">We only onboard a few businesses per month.</p>
                                    </div>
                                </div>
                                <FOMOBadge />
                            </div>
                            {/* <div style={{ opacity: 0, WebkitTransform: 'translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', filter: 'blur(11px)' }}
                                className="animate-on-load-03">
                                <div className="hero-blog-holder">
                                    <div className="blog-grid-twos-wrapper w-dyn-list">
                                        <div role="list" className="blog-grid-3x w-dyn-items">
                                            <div role="listitem" className="blog-grid-twos-item w-dyn-item"><a
                                                href="/post/how-to-build-strong-relationships-in-a-digital-age"
                                                className="blog-item w-inline-block">
                                                <div className="blog-grid-3x-image-holder">
                                                    <img
                                                        src="assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826b4d/6882a9e95dcd0d3fa9826b51_Blog%20Image%2001.jpg"
                                                        loading="lazy" alt="" sizes="100vw"
                                                        srcSet="https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826b4d/6882a9e95dcd0d3fa9826b51_Blog%2520Image%252001-p-500.jpg 500w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826b4d/6882a9e95dcd0d3fa9826b51_Blog%2520Image%252001-p-800.jpg 800w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826b4d/6882a9e95dcd0d3fa9826b51_Blog%2520Image%252001-p-1080.jpg 1080w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826b4d/6882a9e95dcd0d3fa9826b51_Blog%20Image%2001.jpg 1516w"
                                                        className="blog-grid-2x-image" /></div>
                                                <div className="content">
                                                    <div className="blog-date">April 8, 2023</div>
                                                    <div className="blog-title-holder">
                                                        <div className="blog-grid-2x-title">How to Build Strong
                                                            Relationships in a Digital Age</div><img
                                                            src="assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826be9_Blog%20Icon.svg"
                                                            loading="lazy" alt="" className="blog-arrow" />
                                                    </div>
                                                    <p>Aut omnis repudiandae et.
                                                        Minima et deleniti et.
                                                        Ut aut voluptatibus corporis aliquam in praesentium a officiis
                                                        aut.</p>
                                                </div>
                                            </a></div>
                                            <div role="listitem" className="blog-grid-twos-item w-dyn-item"><a
                                                href="/post/7-ways-to-improve-website-usability-and-accessibility"
                                                className="blog-item w-inline-block">
                                                <div className="blog-grid-3x-image-holder"><img
                                                    src="assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826b4d/6882a9e95dcd0d3fa9826b8c_Blog%20Image%203.jpg"
                                                    loading="lazy" alt="" sizes="100vw"
                                                    srcSet="https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826b4d/6882a9e95dcd0d3fa9826b8c_Blog%2520Image%25203-p-500.jpg 500w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826b4d/6882a9e95dcd0d3fa9826b8c_Blog%2520Image%25203-p-800.jpg 800w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826b4d/6882a9e95dcd0d3fa9826b8c_Blog%2520Image%25203-p-1080.jpg 1080w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826b4d/6882a9e95dcd0d3fa9826b8c_Blog%20Image%203.jpg 1516w"
                                                    className="blog-grid-2x-image" /></div>
                                                <div className="content">
                                                    <div className="blog-date">April 8, 2023</div>
                                                    <div className="blog-title-holder">
                                                        <div className="blog-grid-2x-title">7 Ways To Improve Website
                                                            Usability And Accessibility</div><img
                                                            src="assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826be9_Blog%20Icon.svg"
                                                            loading="lazy" alt="" className="blog-arrow" />
                                                    </div>
                                                    <p>Aut omnis repudiandae et.
                                                        Minima et deleniti et.
                                                        Ut aut voluptatibus corporis aliquam in praesentium a officiis
                                                        aut.</p>
                                                </div>
                                            </a></div>
                                            <div role="listitem" className="blog-grid-twos-item w-dyn-item"><a
                                                href="/post/14-common-misconceptions-about-web-design"
                                                className="blog-item w-inline-block">
                                                <div className="blog-grid-3x-image-holder"><img
                                                    src="assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826b4d/6882a9e95dcd0d3fa9826bad_Blog%20Image%204.jpg"
                                                    loading="lazy" alt="" sizes="100vw"
                                                    srcSet="https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826b4d/6882a9e95dcd0d3fa9826bad_Blog%2520Image%25204-p-500.jpg 500w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826b4d/6882a9e95dcd0d3fa9826bad_Blog%2520Image%25204-p-800.jpg 800w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826b4d/6882a9e95dcd0d3fa9826bad_Blog%2520Image%25204-p-1080.jpg 1080w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826b4d/6882a9e95dcd0d3fa9826bad_Blog%20Image%204.jpg 1516w"
                                                    className="blog-grid-2x-image" /></div>
                                                <div className="content">
                                                    <div className="blog-date">April 8, 2023</div>
                                                    <div className="blog-title-holder">
                                                        <div className="blog-grid-2x-title">14 Common Misconceptions About
                                                            Web Design</div><img
                                                            src="assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826be9_Blog%20Icon.svg"
                                                            loading="lazy" alt="" className="blog-arrow" />
                                                    </div>
                                                    <p>Cupiditate autem exercitationem numquam ipsum recusandae ducimus
                                                        enim quaerat.
                                                        Perferendis laboriosam recusandae</p>
                                                </div>
                                            </a></div>
                                            <div role="listitem" className="blog-grid-twos-item w-dyn-item"><a
                                                href="/post/10-web-design-blogs-you-cant-miss"
                                                className="blog-item w-inline-block">
                                                <div className="blog-grid-3x-image-holder"><img
                                                    src="assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826b4d/6882a9e95dcd0d3fa9826b6b_Blog%20Image%202.jpg"
                                                    loading="lazy" alt="" sizes="100vw"
                                                    srcSet="https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826b4d/6882a9e95dcd0d3fa9826b6b_Blog%2520Image%25202-p-500.jpg 500w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826b4d/6882a9e95dcd0d3fa9826b6b_Blog%2520Image%25202-p-800.jpg 800w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826b4d/6882a9e95dcd0d3fa9826b6b_Blog%2520Image%25202-p-1080.jpg 1080w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826b4d/6882a9e95dcd0d3fa9826b6b_Blog%20Image%202.jpg 1516w"
                                                    className="blog-grid-2x-image" /></div>
                                                <div className="content">
                                                    <div className="blog-date">April 8, 2023</div>
                                                    <div className="blog-title-holder">
                                                        <div className="blog-grid-2x-title">10 Web Design Blogs You Can't
                                                            Miss</div><img
                                                            src="assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826be9_Blog%20Icon.svg"
                                                            loading="lazy" alt="" className="blog-arrow" />
                                                    </div>
                                                    <p>Aut omnis repudiandae et.Minima et deleniti et.Ut aut
                                                        voluptatibus corporis aliquam in praesentium a officiis aut.</p>
                                                </div>
                                            </a></div>
                                            <div role="listitem" className="blog-grid-twos-item w-dyn-item"><a
                                                href="/post/10-things-nobody-told-you-about-being-a-web-designer"
                                                className="blog-item w-inline-block">
                                                <div className="blog-grid-3x-image-holder"><img
                                                    src="assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826b4d/6882a9e95dcd0d3fa9826bc3_Blog%20Image%205.jpg"
                                                    loading="lazy" alt="" sizes="100vw"
                                                    srcSet="https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826b4d/6882a9e95dcd0d3fa9826bc3_Blog%2520Image%25205-p-500.jpg 500w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826b4d/6882a9e95dcd0d3fa9826bc3_Blog%2520Image%25205-p-800.jpg 800w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826b4d/6882a9e95dcd0d3fa9826bc3_Blog%2520Image%25205-p-1080.jpg 1080w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826b4d/6882a9e95dcd0d3fa9826bc3_Blog%20Image%205.jpg 1516w"
                                                    className="blog-grid-2x-image" /></div>
                                                <div className="content">
                                                    <div className="blog-date">April 8, 2023</div>
                                                    <div className="blog-title-holder">
                                                        <div className="blog-grid-2x-title">10 Things Nobody Told You About
                                                            Being a Web Designer</div><img
                                                            src="assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826be9_Blog%20Icon.svg"
                                                            loading="lazy" alt="" className="blog-arrow" />
                                                    </div>
                                                    <p>Voluptates maxime nobis modi porro.
                                                        Ea repellendus earum.
                                                        Et rerum eos quas voluptat</p>
                                                </div>
                                            </a></div>
                                            <div role="listitem" className="blog-grid-twos-item w-dyn-item"><a
                                                href="/post/10-great-examples-of-responsive-websites"
                                                className="blog-item w-inline-block">
                                                <div className="blog-grid-3x-image-holder"><img
                                                    src="assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826b4d/6882a9e95dcd0d3fa9826bc4_Blog%20Image%206.jpg"
                                                    loading="lazy" alt="" sizes="100vw"
                                                    srcSet="https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826b4d/6882a9e95dcd0d3fa9826bc4_Blog%2520Image%25206-p-500.jpg 500w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826b4d/6882a9e95dcd0d3fa9826bc4_Blog%2520Image%25206-p-800.jpg 800w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826b4d/6882a9e95dcd0d3fa9826bc4_Blog%2520Image%25206-p-1080.jpg 1080w, https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826b4d/6882a9e95dcd0d3fa9826bc4_Blog%20Image%206.jpg 1516w"
                                                    className="blog-grid-2x-image" /></div>
                                                <div className="content">
                                                    <div className="blog-date">April 8, 2023</div>
                                                    <div className="blog-title-holder">
                                                        <div className="blog-grid-2x-title">10 Great Examples of Responsive
                                                            Websites</div><img
                                                            src="assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826be9_Blog%20Icon.svg"
                                                            loading="lazy" alt="" className="blog-arrow" />
                                                    </div>
                                                    <p>Quis voluptatem placeat quasi.
                                                        Ut vel non placeat enim tempora exercitationem tenetur.</p>
                                                </div>
                                            </a></div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div data-w-id="dbfaa4a9-8465-0ef6-1fa3-d86a70928ffa" style={{ opacity: 0 }}
                                className="blue-blur-holder">
                                <div className="blue-blur-blog"></div>
                            </div>
                        </div>
                        <div className="w-layout-blockcontainer container-2 w-container">
                            <div className="youform-embed-container" style={{ width: '100%', minHeight: '600px', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                <iframe
                                    src="https://app.youform.com/forms/esb5dhlr"
                                    width="100%"
                                    height="600"
                                    frameBorder="0"
                                    style={{ border: 'none', width: '100%', minHeight: '600px' }}
                                    title="Apply to ScaleOS"
                                    allow="clipboard-read; clipboard-write"
                                ></iframe>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div data-wf--footer--variant="base" className="section overflow-hidden">
                <div className="container">
                    <div className="cta-holder">
                        <div className="cta-content">
                            <div className="fade-in-on-scroll">
                                <h1>The #1 All-in-One System <br /> for Infopreneurs.
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

export default Demo;