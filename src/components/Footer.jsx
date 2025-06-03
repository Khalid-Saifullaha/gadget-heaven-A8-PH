import { FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa"; // Using react-icons

// Assuming your Heading component might look something like this or is styled elsewhere.
// If you don't have it or it's very different, this part might need adjustment.
const Heading = ({
  title,
  subtitle,
  titleClassName,
  subtitleClassName,
  containerClassName,
}) => {
  return (
    <div className={containerClassName || "text-center mb-8"}>
      <h2 className={titleClassName || "text-3xl font-bold text-gray-900"}>
        {title}
      </h2>
      {subtitle && (
        <p className={subtitleClassName || "mt-2 text-md text-gray-600"}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

const Footer = () => {
  const primaryColor = "#9538E2"; // Your primary color

  // Placeholder links - replace with your actual URLs
  const socialLinks = {
    twitter: "https://twitter.com/yourprofile",
    youtube: "https://youtube.com/yourchannel",
    facebook: "https://facebook.com/yourpage",
  };

  const footerLinkStyle = `hover:text-[${primaryColor}] transition-colors duration-300 ease-in-out`;
  // Note: For dynamic hover colors like this with Tailwind, true JIT mode might be needed,
  // or you might prefer inline styles for the hover effect as shown below for broader compatibility.

  return (
    <div className="bg-slate-900 text-gray-400">
      {" "}
      {/* Dark background for the footer */}
      <section className="container mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        {/* Re-integrating a styled Heading section if desired */}
        <Heading
          title="Gadget Heaven"
          subtitle="Leading the way in cutting-edge technology and innovation."
          containerClassName="mb-12 text-center"
          titleClassName={`text-3xl sm:text-4xl font-bold text-white`}
          subtitleClassName={`mt-3 text-lg text-gray-300`}
        />

        {/* Divider */}
        <div className="border-t border-slate-700 mb-12"></div>

        <footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
          {/* Column 1: Brand/About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h6
              className="font-semibold mb-4 uppercase tracking-wider"
              style={{ color: primaryColor }} // Using primary color for this title
            >
              Gadget Heaven
            </h6>
            <p className="mb-4">
              Your one-stop shop for the latest and greatest in tech. We are
              committed to providing top-quality gadgets and exceptional
              customer service.
            </p>
          </div>

          {/* Column 2: Services */}
          <nav>
            <h6 className="font-semibold text-white mb-4 uppercase tracking-wider">
              Services
            </h6>
            <ul className="space-y-3">
              <li>
                <a href="#" className={footerLinkStyle}>
                  Branding
                </a>
              </li>
              <li>
                <a href="#" className={footerLinkStyle}>
                  Design
                </a>
              </li>
              <li>
                <a href="#" className={footerLinkStyle}>
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" className={footerLinkStyle}>
                  Advertisement
                </a>
              </li>
            </ul>
          </nav>

          {/* Column 3: Company */}
          <nav>
            <h6 className="font-semibold text-white mb-4 uppercase tracking-wider">
              Company
            </h6>
            <ul className="space-y-3">
              <li>
                <a href="#" className={footerLinkStyle}>
                  About us
                </a>
              </li>
              <li>
                <a href="#" className={footerLinkStyle}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className={footerLinkStyle}>
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className={footerLinkStyle}>
                  Press kit
                </a>
              </li>
            </ul>
          </nav>

          {/* Column 4: Social */}
          <nav>
            <h6 className="font-semibold text-white mb-4 uppercase tracking-wider">
              Connect With Us
            </h6>
            <div className="flex space-x-5">
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className={`text-gray-400 hover:text-[${primaryColor}] transition-colors duration-300`}
              >
                <FaTwitter size={22} />
              </a>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className={`text-gray-400 hover:text-[${primaryColor}] transition-colors duration-300`}
              >
                <FaYoutube size={22} />
              </a>
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={`text-gray-400 hover:text-[${primaryColor}] transition-colors duration-300`}
              >
                <FaFacebookF size={22} />
              </a>
            </div>
            <p className="mt-6 text-xs">
              Stay updated with our latest news and offers!
            </p>
          </nav>
        </footer>

        {/* Bottom Bar with Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-700 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Gadget Heaven. All Rights
            Reserved.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
