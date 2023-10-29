import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = (props) => {
  return (
    <div>
      <footer id="footer" className="bg-[#1c75bc] text-white text-xl text-left">
        <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
          <address>
            <h2>ForEV Technology Inc.</h2>8888 Mountain view
            <br />
            California,United States.
            <br />
            Email: <a href="mailto:inquiries@forev.com"></a>
            <br />
            Phone:{" "}
            <a href="tel:+15-1234-5678-9090-8888">(+15) 1234-5678-9012-8888</a>
          </address>
          <nav className="hidden md:flex flex-col gap-2" aria-label="footer">
            <a href="#technology" className="hover:opacity-90">Technology </a>
            <a href="#downloads" className="hover:opacity-90">Downloads</a>
            <a href="#contactus" className="hover:opacity-90">Contact us</a>
          </nav>

          <div className="flex flex-col text-xs py-4 sm:gap-2">
            <p className="text-left">
              CopyRight &copy;
              <span id="year">2023</span>
            </p>
            <p className="text-left">All Rights Reserved</p>
          </div>
          <div className="flex text-xl gap-2">
            <FaFacebook/>
            <FaInstagram/>
            <FaLinkedinIn/>
            <FaTwitter/>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
