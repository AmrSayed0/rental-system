import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const FooterSection = () => {
  return (
    <footer className="border-t border-gray-200 py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="order-1 md:order-1">
            <Link
              href="/"
              className="text-xl font-bold hover:text-primary-600 transition-colors"
              scroll={false}
            >
              RENTIFUL
            </Link>
          </div>
          <nav className="order-3 md:order-2">
            <ul className="flex flex-wrap justify-center space-x-6">
              <li>
                <Link
                  href="#"
                  className="hover:text-primary-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary-600 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary-600 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary-600 transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary-600 transition-colors"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex space-x-4 order-2 md:order-3">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-primary-600 transition-colors"
            >
              <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-primary-600 transition-colors"
            >
              <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-primary-600 transition-colors"
            >
              <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label="Linkedin"
              className="hover:text-primary-600 transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label="Youtube"
              className="hover:text-primary-600 transition-colors"
            >
              <FontAwesomeIcon icon={faYoutube} className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <div className="text-sm text-gray-500 flex flex-wrap justify-center gap-4 mb-4">
            <span>© RENTiful. All rights reserved.</span>
            <Link href="#" className="hover:text-primary-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-primary-600 transition-colors">
              Cookie Policy
            </Link>
          </div>
          <p className="text-sm text-gray-500">
            Made by{" "}
            <Link
              href="https://amrs-portfolio.vercel.app/"
              className="hover:text-secondary-600 underline font-semibold transition-colors"
              target="_blank"
            >
              Amr Sayed
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
