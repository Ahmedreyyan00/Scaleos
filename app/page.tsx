"use client";

import { useEffect, useRef } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CTASection from "../components/CTASection";
import Footer from "@/components/Footer";
import FeatureSlider from "@/components/FeatureSlider";

export default function Home() {
  const featureImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (featureImageRef.current) {
      observer.observe(featureImageRef.current);
    }

    return () => {
      if (featureImageRef.current) {
        observer.unobserve(featureImageRef.current);
      }
    };
  }, []);
  return (
    <>
      <Header />
      <div className="section" style={{ paddingTop: '90px' }}>
        <Hero />
      </div>
      <div className="section grid-section">
        <div className="container">
          <div className="grid-holder">
            <div className="w-layout-grid grid">
              <div className="grid-item">
                <img className="grid-image" src="/feat_fur-removebg-preview.png" alt="" sizes="(max-width: 1710px) 100vw, 1710px" data-w-id="489ae30c-d1da-3634-9042-73948da8383a" loading="lazy" />
                <div className="grid-content">
                  <div className="grid-title">Become a real CEO</div>
                  <p className="no-margins-2">Track cash collected, calls booked, leads, team KPIs, client LTV, and revenue per YouTube video — all in real time.</p>
                </div>
              </div>
              <div className="grid-item">
                <img className="grid-image" src="/fin.png" alt="" sizes="(max-width: 1710px) 100vw, 1710px" data-w-id="489ae30c-d1da-3634-9042-73948da83841" loading="lazy" />
                <div className="grid-content">
                  <div className="grid-title">Built-in automations</div>
                  <p className="no-margins-2">Sales pipeline automation : automated onboading, slack &amp; payments notifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section overflow-hidden allow-shadow-overflow" style={{ overflow: 'visible', overflowX: 'visible', overflowY: 'visible' }}>
        <div className="container allow-shadow-overflow-container" style={{ overflow: 'visible' }}>
          <div className="new-features-holder">
            <div className="w-layout-grid new-features-grid">
              <div id="w-node-_0f6e4690-5961-adb5-bb42-4dc31a841c65-a9826b02" className="feature-graphic-holder">
                <div ref={featureImageRef} data-w-id="639747d7-0671-e4e3-a159-8254f321ed2c" className="feature-image-container _02 premium-animation">
                  <div className="feature-image-wrapper">
                    <img className="feature-image-full" src="/trackflow.png" alt="" sizes="(max-width: 1068px) 100vw, 1068px" data-w-id="cbaa7d5c-4c57-c18b-0453-b641d1bfe125" loading="lazy" srcSet="/trackflow.png 500w, /trackflow.png 800w, /trackflow.png 1068w" />
                  </div>
                  <div className="premium-border-shine"></div>
                </div>
                <div className="feature-image-blur"></div>
              </div>
              <div id="w-node-_0f6e4690-5961-adb5-bb42-4dc31a841c5d-a9826b02" className="feature-grid-content">
                <div className="feature-grid-content-holder-2">
                  <div className="fade-in-on-scroll">
                    <h3 className="title">Track Your Cashflow in Real Time
                    </h3>
                  </div>
                  <div className="fade-in-on-scroll">
                    <p>See every dollar entering your business — from low-ticket payments to high-ticket sales. ScaleOS gives you a live view of your revenue, so you always know what’s working and what to optimize.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-layout-grid new-features-grid">
              <div id="w-node-a51ee462-90d5-4d0e-0787-d5d125b71d67-a9826b02" className="feature-grid-content">
                <div className="feature-grid-content-holder-2">
                  <div className="fade-in-on-scroll">
                    <h3 className="title">Create Tasks for you and your team</h3>
                  </div>
                  <div className="fade-in-on-scroll">
                    <p>No more hassle—add tasks in seconds<br />Quickly jot down what needs to be done, organize them by team member, and stay on track without the overwhelm. Your to-do list, but smarter.</p>
                  </div>
                </div>
              </div>
              <div id="w-node-a51ee462-90d5-4d0e-0787-d5d125b71d7d-a9826b02" data-w-id="a51ee462-90d5-4d0e-0787-d5d125b71d7d" className="card-image-holder">
                <div className="grey-card-holder">
                  <div className="card-image-rotation _01">
                    <div style={{ WebkitTransform: "translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", filter: "blur(8px)" }} className="feature-image-holder _01">
                      <img src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826ce7_Task%2520Gray%252002.svg" loading="lazy" alt="" className="gray-card-holder grey" />
                      <img src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826ce5_Task%2520Blue%252002.svg" loading="lazy" alt="" className="gray-card-holder blue" />
                    </div>
                  </div>
                  <div className="card-image-rotation main-card">
                    <div style={{ WebkitTransform: "translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", filter: "blur(8px)" }} className="feature-image-holder _02">
                      <img src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826ce4_Task%2520Gray%252001.svg" loading="lazy" alt="" className="gray-card-holder grey" />
                      <img src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826ce6_Task%2520Blue%252001.svg" loading="lazy" alt="" className="gray-card-holder blue" />
                    </div>
                  </div>
                  <div className="card-image-rotation _03">
                    <div style={{ WebkitTransform: "translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", filter: "blur(8px)" }} className="feature-image-holder _03">
                      <img src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826ce7_Task%2520Gray%252002.svg" loading="lazy" alt="" className="gray-card-holder grey" />
                      <img src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826ce5_Task%2520Blue%252002.svg" loading="lazy" alt="" className="gray-card-holder blue" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-pragraph-holder"><div className="hero-text-container-2"><div className="blue-blur-2-copy _022-phone"></div><h2 className="title">More than a dashboard.<br />Your entire info business, centralized.</h2><div style={{opacity: 1, transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d", filter: "blur(0px)"}} className="animate-on-load-03"><div className="button-holder"><a href="/features" className="button w-button">Explore more features</a></div></div></div></div>

          </div>
        </div>
      </div>
      <div className="section overflow-hidden">
        <div className="container">
          <div className="section-inside">
            <div className="center-text">
              <div className="heading-holder">
                <h2 className="title"><strong>Your entire business.<br />Crystal clear.</strong></h2>
              </div>
            </div>
            <FeatureSlider />
          </div>
        </div>
      </div>

      <div data-wf--footer--variant="base" className="section overflow-hidden">
        <div className="container">
          <div className="cta-holder ">
            <div className="cta-content">
              <div className="fade-in-on-scroll">
                <h1>The #1 All-in-One System <br /> for Infopreneurs.
                </h1>
              </div>
              <div className="form">
                <a href="https://app.youform.com/forms/esb5dhlr" className="submit-button-url w-button">Apply to ScaleOS
                </a>
              </div>
            </div>
            <CTASection />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
