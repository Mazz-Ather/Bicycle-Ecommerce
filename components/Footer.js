import Link from "next/link";
const Footer = () => {
  return (
    <footer>
      <div className="section-content">
        <div className="row">
          <div className="col-4">
            <Link href="#" className="logo">
              <h1
                style={{
                  fontSize: "3rem",
                  fontWeight: "900",
                  letterSpacing: "2px",
                }}
              >
                Mazz Bikes
              </h1>
            </Link>
            <p className="footer-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, consequuntur obcaecati. Debitis sed velit, aliquid
              nihil, omnis illo dignissimos, quod vitae repellat quo nam quas
              similique cum molestias et fugiat.
            </p>
            <ul className="socials">
              <li>
                <Link href="https://www.facebook.com/profile.php?id=100078787718681">
                  <i className="bx bxl-facebook-circle"></i>
                </Link>
              </li>
              <li>
                <Link href="https://github.com/Mazz-Ather">
                  <i className="bx bxl-github"></i>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/maaz-ather-a8252b291/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><circle cx="4.983" cy="5.009" r="2.188" fill="currentColor"/><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" fill="currentColor"/></svg>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <ul className="footer-menu">
              <li>
                <Link href="#">about</Link>
              </li>
              <li>
                <Link href="#">service</Link>
              </li>
              <li>
                <Link href="#">product</Link>
              </li>
              <li>
                <Link href="#">contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <ul className="footer-menu">
              <li>
                <Link href="#">gallery</Link>
              </li>
              <li>
                <Link href="#">gears</Link>
              </li>
              <li>
                <Link href="#">faq</Link>
              </li>
              <li>
                <Link href="#">contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <h3 className="footer-header">news letter</h3>
            <p className="footer-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              quibusdam enim quaerat natus sit beatae. Corrupti error explicabo
              commodi beatae non. Aut ipsam nemo quibusdam quia molestias, non
              maiores reprehenderit.
            </p>
            <div className="subscribe-form">
              <input type="text" name="" placeholder="Your Email..." />
              <button className="btn">subscribe now</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
