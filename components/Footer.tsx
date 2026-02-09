export default function Footer() {
  return (
    <div className="footer-holder">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-brand-holder">
            <a href="/" aria-current="page" className="footer-brand w-inline-block w--current">
              <img src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/6882a9e95dcd0d3fa9826cd2_Logo.svg" loading="lazy" alt="" className="footer-brand-image" />
            </a>
            <div className="footer-paragraph-holder">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
          </div>
          <div className="footer-content">
            <div id="w-node-e92bf484-a605-4132-f141-4518468af7e2-468af7d9" className="footer-block">
              <div className="title-small">Main Pages</div>
              <div className="menu-link-wrapper">
                <div className="menu-links-holder">
                  <a href="/" aria-current="page" className="grey-link w--current">Home</a>
                  <a href="/features" className="grey-link">Features</a>
                  <a href="/demo" className="grey-link">Blog</a>
                </div>
                <div className="menu-links-holder">
                  <a href="https://ovo-glossy.webflow.io/post/how-to-build-strong-relationships-in-a-digital-age" className="grey-link">Blog Post</a>
                  <a href="/contact" className="grey-link">Contact</a>
                  <a href="/pricing" className="grey-link">Pricing</a>
                </div>
              </div>
            </div>
            <div id="w-node-e92bf484-a605-4132-f141-4518468af7ef-468af7d9" className="footer-block">
              <div className="title-small">Social Media</div>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="grey-link">Instagram</a>
              <a href="https://fb.com" target="_blank" rel="noopener noreferrer" className="grey-link">Facebook</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="grey-link">Linkedin</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="grey-link">Twitter</a>
            </div>
            <div id="w-node-e92bf484-a605-4132-f141-4518468af7fa-468af7d9" className="footer-block">
              <div className="title-small">Useful Stuff</div>
              <a href="/template/style-guide" className="grey-link">Style Guide</a>
              <a href="/template/licensing" className="grey-link">Licensing</a>
              <a href="/template/instructions" className="grey-link">Instructions</a>
              <a href="/template/change-log" className="grey-link">Change Log</a>
            </div>
          </div>
        </div>
        <div className="footer-form-holder">
          <div className="footer-heading">
            <h4 className="title">Join our newsletter</h4>
            <p>Keep up to date with everything Blues.</p>
          </div>
          <div className="form-block w-form">
            <form id="Early-Access-Emails" name="wf-form-Early-Access-Emails" data-name="Early Access Emails" method="get" className="form-holder" data-wf-page-id="6882a9e95dcd0d3fa9826b02" data-wf-element-id="98dea2fc-9d9e-e04a-7263-f8b96a03e4e1">
              <div className="form">
                <input className="text-field w-input" maxLength={256} name="email" data-name="Email" placeholder="Enter email here" type="email" id="Early-Access-Emails" required />
                <input type="submit" data-wait="..." className="submit-button w-button" value="Get Started" />
              </div>
            </form>
            <div className="thank-you-message w-form-done">
              <div><span className="white-text">Thank you! </span><br />Your submission has been received!</div>
            </div>
            <div className="error-message w-form-fail">
              <div><span className="white-text">Oops! <br /></span>Something went wrong! Try again later</div>
            </div>
          </div>
        </div>
        <div className="footer-divider">
          <div className="footer-copyright-holder">
            <div className="footer-copyright-center">Created by <a href="http://madebyoversight.com/" target="_blank" rel="noopener noreferrer" className="white-link">OVERSIGHT</a></div>
          </div>
          <div className="footer-copyright-holder">
            <div className="footer-copyright-center">Powered by <a href="https://webflow.com/" target="_blank" rel="noopener noreferrer" className="white-link">WEBFLOW</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}

