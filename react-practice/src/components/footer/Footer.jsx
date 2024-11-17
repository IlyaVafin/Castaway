import React from "react";
import FooterSocials from "./subfooter/FooterSocials";
import './footer.css'
import FooterLinks from "./subfooter/FooterLinks";
import HeroSocials from "../hero/subhero/HeroSocials";
export default function Footer() {
  return (
    <>
      <div className="wrapper__footer">
        <div className="container">
          <section className="footer__inner">
            <nav className="footer__nav">
            <FooterSocials/>
              <FooterLinks/>
              <HeroSocials />
            </nav>
          </section>
        </div>
      </div>
    </>
  );
}
