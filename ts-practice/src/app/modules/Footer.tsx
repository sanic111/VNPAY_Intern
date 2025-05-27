import React from "react";
import logo from "../../assets/icons/logo.png";

function Footer() {
  return (
    <footer className="bg-theme-light/50 text-white">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo + Description */}
          <div>
            <img src={logo} alt="Logo" className="mb-4 h-12" />
            <p className="text-sm text-white/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis at,
              quae illo, rem, pariatur nam veritatis error et aut quos non.
              Veniam provident velit culpa voluptatibus, nam autem harum neque?
            </p>
          </div>

          {/* Socials */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Socials</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {["Facebook", "Instagram", "Twitter", "YouTube"].map((item) => (
                <li key={item}>
                  <a href="#" className="transition hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {["Home", "Programs", "Pricing", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="transition hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
            <p className="text-sm leading-relaxed text-white/80">
              123 Fitness Street
              <br />
              Ho Chi Minh City, Vietnam
              <br />
              Phone: +84 123 456 789
              <br />
              Email: support@fitnessevo.vn
            </p>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="bg-theme-light/70 border-t border-white/10 py-4 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Fitness Evolution. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
