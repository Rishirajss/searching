"use client";
import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import { GlobeIcon } from "lucide-react";
import {
  FaFacebook,
  FaSquareInstagram,
  FaSquareThreads,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa6";

interface DropdownProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  icon?: string;
}

interface Link {
  label: string;
  href: string;
}

interface Content {
  [key: string]: {
    title: string;
    links: Link[];
  };
}

interface LanguageContent {
  [key: string]: Content;
}

const Footer: React.FC = () => {
  const [language, setLanguage] = useState<string>("english");

  const content: LanguageContent = {
    english: {
      aboutIBharat: {
        title: "ABOUT IBHARAT",
        links: [
          { label: "Who We Are", href: "/about" },
          { label: "Report Fraud", href: "/report-fraud" },
          { label: "Contact Us", href: "/contact" },
        ],
      },
      ibharatverse: {
        title: "IBHARATVERSE",
        links: [
          { label: "IBharat", href: "/ibharat" },
          { label: "Blog", href: "https://blog.ibharat.org" },
          { label: "Advertising", href: "/advertisement" },
        ],
      },
      forUsers: {
        title: "FOR USERS",
        links: [
          { label: "Privacy", href: "/policies" },
          { label: "Terms of Use", href: "/termsofuse" },
          { label: "Feedback", href: "/feedback" },
          { label: "Submit URL", href: "/submit-url" },
        ],
      },
    },
    hindi: {
      aboutIBharat: {
        title: "iBHARAT के बारे में",
        links: [
          { label: "हम कौन हैं", href: "/about" },
          { label: "ब्लॉग", href: "/blog" },
          { label: "संपर्क करें", href: "/contact" },
        ],
      },
      ibharatverse: {
        title: "iBHARATVERSE",
        links: [
          { label: "iBharat", href: "/ibharat" },
          { label: "ब्लॉग", href: "https://blog.ibharat.org" },
          { label: "विज्ञापन", href: "/advertisement" },
        ],
      },
      forUsers: {
        title: "उपयोगकर्ताओं के लिए",
        links: [
          { label: "गोपनीयता", href: "/policies" },
          { label: "शर्तें", href: "/termsofuse" },
          { label: "प्रतिक्रिया", href: "/feedback" },
          { label: "URL प्रस्तुत करें", href: "/submit" },
        ],
      },
    },
  };

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const currentContent = content[language];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com/ibharatorg",
      icon: <FaFacebook size={25} />,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/ibharatorg",
      icon: <FaSquareInstagram size={25} />,
    },
    {
      name: "Threads",
      href: "https://threads.ibharat.org",
      icon: <FaSquareThreads size={25} />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/ibharatorg",
      icon: <FaTwitter size={25} />,
    },
    {
      name: "Linkedin",
      href: "https://linkedin.com/company/ibharatorg",
      icon: <FaLinkedin size={25} />,
    },
    {
      name: "Youtube",
      href: "https://youtube.com/@ibharatorg",
      icon: <FaYoutube size={25} />,
    },
    {
      name: "Pinterest",
      href: "https://pinterest.com/ibharatorg",
      icon: <FaPinterest size={25} />,
    },
  ];

  return (
    <footer className="bg-gray-100 py-8 text-gray-600">
      <div className="container mx-auto px-4 md:px-14 lg:px-20">
        <div className="flex flex-wrap justify-between mb-8">
          <div className="w-full flex flex-col mb-5 sm:mb-0 sm:flex-row justify-between md:4 md:mb-10">
            <Image
              src="/ibharat.png"
              alt="IBharat"
              width={150}
              height={50}
              className="mb-4"
            />
            <div className="flex space-x-2">
              <div className="flex items-center justify-between gap-0.5 h-10 px-1 bg-white rounded-md border border-gray-300">
                <Image src="/india.png" alt="india" width={25} height={20} />
                <select className="w-full focus:outline-none bg-transparent focus:ring-indigo-500 focus:border-indigo-500">
                  <option value="india">India</option>
                </select>
              </div>
              <div className="flex items-center justify-center gap-0.5 h-10 px-1 bg-white rounded-md border border-gray-300">
                <GlobeIcon size={25} />
                <select
                  value={language}
                  onChange={handleLanguageChange}
                  className="w-full bg-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="english">English</option>
                  <option value="hindi">हिंदी</option>
                </select>
              </div>
            </div>
          </div>
          {Object.entries(currentContent).map(([key, section]) => (
            <div key={key} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6">
              <h3 className="font-bold mb-4">{section.title}</h3>
              <ul>
                {section.links.map((link) => (
                  <li key={link.label} className="mb-2">
                    <a href={link.href} className="hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="w-full flex flex-col sm:items-center sm:w-1/2 md:w-1/4 lg:w-1/5 sm:mb-6">
            <h3 className="font-bold mb-4">SOCIAL LINKS</h3>
            <div className="flex space-x-2 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-slate-800 hover:text-slate-600"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2 space-y-2">
              <Image
                src="/app-store.png"
                alt="Download on App Store"
                className="w-[170px] h-auto sm:h-[41.5px] sm: mt-[8.5px] sm:w-[150px]"
                width={120}
                height={50}
              />
              <Image
                src="/google-play.png"
                className="w-[130px] h-auto sm:w-[150px]"
                alt="Get it on Google Play"
                width={120}
                height={50}
              />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-8 text-center text-sm">
          <p>© 2024 iBharat.org. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
