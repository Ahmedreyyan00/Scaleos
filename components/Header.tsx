'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();
    const contactUrl = 'https://app.youform.com/forms/esb5dhlr';
    const [menuOpen, setMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => { setMounted(true); }, []);

    const mobileMenu = menuOpen && mounted ? createPortal(
        <div style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            zIndex: 9999,
            background: 'rgba(13, 13, 13, 0.97)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            padding: '16px 24px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
        }}>
            {[
                { href: '/', label: 'Home' },
                { href: '/demo', label: 'Demo' },
                { href: '/features', label: 'Features' },
                { href: contactUrl, label: 'Contact' },
            ].map((item, i, arr) => (
                <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                        display: 'block',
                        color: pathname === item.href ? '#fff' : 'rgba(255,255,255,0.7)',
                        textDecoration: 'none',
                        padding: '14px 0',
                        fontSize: '16px',
                        fontWeight: pathname === item.href ? 600 : 400,
                        borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                    }}
                >
                    {item.label}
                </a>
            ))}
        </div>,
        document.body
    ) : null;

    return (
        <>
            <motion.div
                data-animation="default"
                data-collapse="medium"
                data-duration="400"
                data-easing="ease"
                data-easing2="ease"
                data-no-scroll="1"
                role="banner"
                className="navbar w-nav"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0 }}
            >
                <div className="container navbar-container">
                    <div className="navbar-holder">
                        <div className="navbar-container">
                            <div className="brand-holder">
                                <a href="/" className={`brand w-nav-brand ${pathname === '/' ? 'w--current' : ''}`}>
                                    <img src="/logobg.png" loading="lazy" alt="ClarityScale Logo" className="brand-image" />
                                </a>
                            </div>
                            <nav role="navigation" className="nav-menu w-nav-menu">
                                <div className="nav-menu-link-holder">
                                    <div className="nav-menu-link-container">
                                        <div className="nav-links">
                                            <a href="/" className={`nav-link w-nav-link ${pathname === '/' ? 'w--current' : ''}`}>Home</a>
                                            <a href="/demo" className={`nav-link w-nav-link ${pathname === '/demo' ? 'w--current' : ''}`}>Demo</a>
                                            <a href="/features" className={`nav-link w-nav-link ${pathname === '/features' ? 'w--current' : ''}`}>Features</a>
                                            <a href={contactUrl} className="nav-link w-nav-link">Contact</a>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                            <div className="menu-cart-holder">
                                <button
                                    className="menu-button w-nav-button"
                                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                                    aria-expanded={menuOpen}
                                    onClick={() => { const next = !menuOpen; console.log('[Header] menu button clicked — menuOpen will be:', next); setMenuOpen(next); }}
                                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
                                >
                                    <div className="w-icon-nav-menu"></div>
                                </button>
                                <div className="nav-menu-button-holder">
                                    <a href={contactUrl} className="button outline nav-btn w-button">Apply to ScaleOS</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            {mobileMenu}
        </>
    );
}
