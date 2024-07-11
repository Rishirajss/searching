import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const generalLinks = [
    { label: "Feedback", href: "feedback" },
    { label: "Advertising", href: "advertisement" },
    { label: "Submit URL", href: "submiturl" },
  ];

  const companyLinks = [
    { label: "About Us", href: "about" },
    { label: "Contact Us", href: "contact" },
    { label: "Blog", href: "#" },
  ];

  const legalLinks = [
    { label: "Terms of Use", href: "termsofuse" },
    { label: "Privacy Policy", href: "policies" },
    { label: "Disclaimer", href: "disclaimer" },
  ];

  const followUsLinks = [
    { label: "Koo", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "More Links", href: "#" },
  ];

  return (
    <footer className="border-t border-gray-500/30 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-0 md:gap-8">
        <div className="flex items-center justify-center  lg:col-span-2">
          <div className="mb-8">
            <div className="flex items-center justify-center">
              <Image
                src="/ibharat.jpg"
                alt="iBharat"
                width={100}
                height={100}
                className="w-[90px] sm:w-[150px] mb-4"
              />
            </div>
            <div className="flex gap-2">
              <div className="mb-4">
                <Link href="#">
                  <Image
                    src="/google-play.png"
                    alt="Download on Google Play"
                    width={100}
                    height={40}
                  />
                </Link>
              </div>
              <div>
                <Link href="#">
                  <Image
                    src="/app-store.png"
                    alt="Download on App Store"
                    width={100}
                    height={40}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center place-content-center">
          <div>
            <h3 className="text-lg font-bold mb-4">GENERAL</h3>
            {generalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block mb-2 hover:underline dark:text-white text-gray-800"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">COMPANY</h3>
            {companyLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block mb-2 hover:underline dark:text-white text-gray-800"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">LEGAL</h3>
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block mb-2 hover:underline dark:text-white text-gray-800"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">FOLLOW US</h3>
            {followUsLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block mb-2 hover:underline dark:text-white text-gray-800"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm">© 2024 iBharat.org, Made in India.</p>
      </div>
    </footer>
  );
};

export default Footer;
