'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <div data-w-id="39b80f7e-f18f-dad7-8c15-1a4ce38b91c9" className="hero-section-wrapper">
            <div className="container">
                <div className="home-text-holder">
                    <div className="home-text-container">
                        <div className="animate-on-load-01">
                            <motion.h1
                                className="hero-title animate-me"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                            >
                                Stop Losing Time &amp; Money. <br />Scale based on Real Data.
                            </motion.h1>
                        </div>
                    </div>
                    <div className="home-pragraph-holder">
                        <div className="animate-on-load-02">
                            <motion.p
                                className="paragraph-l animate-me"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.4 }}
                            >
                                Everything centralized.<br />No more guesswork — just clarity.
                            </motion.p>
                        </div>
                        <div className="animate-on-load-03">
                            <div className="button-holder">
                                <motion.a
                                    href="https://form.typeform.com/to/rJ7fFgTY"
                                    className="button w-button animate-me"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3, delay: 0.8 }}
                                >
                                    Private launch access
                                </motion.a>
                                <motion.a
                                    href="/demo"
                                    className="button outline w-button animate-me"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3, delay: 0.8 }}
                                >
                                    View demo
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-dashboard-wrapper">
                    <div className="animate-on-load-04 center">
                        <div className="hero-dashbord-holder">
                            <motion.img
                                sizes="(max-width: 1904px) 100vw, 1904px"
                                alt=""
                                src="https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/692dbc7b3a5c06985dfce7d4_Capture%20d%E2%80%99e%CC%81cran%202025-12-01%20a%CC%80%2015.24.13-p-1600.png"
                                loading="lazy"
                                className="hero-dashboard-image animate-me"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 1.0 }}
                            />
                        </div>
                    </div>
                    <div className="blue-blur"></div>
                    <div className="hero-icons-holder">
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
                            <img sizes="(max-width: 588px) 100vw, 588px" loading="lazy" className="hero-logo" />
                            <img sizes="(max-width: 588px) 100vw, 588px" loading="lazy" className="hero-logo blured" />
                        </div>
                    </div>
                </div>
                <div className="hero-text-holder">
                    <div className="hero-text-container">
                        <div className="blue-blur _02"></div>
                        <motion.h2
                            className="title animate-me"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.6 }}
                        >
                            Say goodbye to scattered spreadsheets, disconnected CRMs and guessing games. Say hello to clarity, control, and cash collected.
                        </motion.h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
