'use client';

import { motion } from 'framer-motion';

export default function Header() {
    return (
        <motion.div
            data-animation="default"
            data-collapse="medium"
            data-duration="400"
            data-easing="ease"
            data-easing2="ease"
            data-no-scroll="1"
            role="banner"
            className="navbar w-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
        >
            <div className="container navbar-container">
                <div className="navbar-holder">
                    <div className="navbar-container">
                        <div className="brand-holder">
                            <a href="/" aria-current="page" className="brand w-nav-brand w--current">
                                <img src="/logobg.png" loading="lazy" alt="ClarityScale Logo" className="brand-image" />
                            </a>
                        </div>
                        <nav role="navigation" className="nav-menu w-nav-menu">
                            <div className="nav-menu-link-holder">
                                <div className="nav-menu-link-container">
                                    <div className="nav-links">
                                        <a href="/" aria-current="page" className="nav-link w-nav-link w--current">Home</a>
                                        <a href="/demo" className="nav-link w-nav-link">Demo</a>
                                        <a href="/features" className="nav-link w-nav-link">Features</a>
                                        <a href="https://form.typeform.com/to/rJ7fFgTY" className="nav-link w-nav-link">Contact</a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <div className="menu-cart-holder">
                            <div className="menu-button w-nav-button">
                                <div className="w-icon-nav-menu"></div>
                            </div>
                            <div className="nav-menu-button-holder">
                                <a href="https://form.typeform.com/to/rJ7fFgTY" className="button outline nav-btn w-button">Access to ScaleOS</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
