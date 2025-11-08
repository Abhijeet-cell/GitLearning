import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 py-10 sm:py-12 border-t bg-muted/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        {/* GRID LAYOUT */}
        <div className="grid gap-8 sm:gap-10 md:grid-cols-4 text-center md:text-left">
          {/* BRAND SECTION */}
          <div className="space-y-4">
            <div className="flex justify-center md:justify-start items-center gap-2">
              <Image
                src="/logo.png"
                alt="DentWise Logo"
                width={36}
                height={36}
                className="w-9 h-9"
              />
              <span className="font-semibold text-lg">DentWise</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto md:mx-0">
              AI-powered dental assistance that actually helps.
            </p>
          </div>

          {/* PRODUCT LINKS */}
          <div>
            <h4 className="font-medium text-foreground mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* SUPPORT LINKS */}
          <div>
            <h4 className="font-medium text-foreground mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Status
                </a>
              </li>
            </ul>
          </div>

          {/* LEGAL LINKS */}
          <div>
            <h4 className="font-medium text-foreground mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="border-t mt-10 pt-6 text-center text-xs sm:text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} DentWise — Built for real people with
            real dental questions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
