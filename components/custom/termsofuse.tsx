"use client";
import { useState } from "react";
import {
  Shield,
  Globe,
  Database,
  Cookie,
  Mail,
  Cpu,
  Heart,
} from "lucide-react";

const sections = [
  {
    id: "privacy",
    title: "Privacy Policy",
    icon: <Shield className="w-5 h-5 text-indigo-700" />,
  },
  {
    id: "collection",
    title: "Collection of Information",
    icon: <Database className="w-5 h-5 text-indigo-700" />,
  },
  {
    id: "non-personal",
    title: "Non-Personally Identifiable Information",
    icon: <Globe className="w-5 h-5 text-indigo-700" />,
  },
  {
    id: "cookies",
    title: "Internet Browser Cookies",
    icon: <Cookie className="w-5 h-5 text-indigo-700" />,
  },
  {
    id: "reasons",
    title: "Notable Reasons to Collect Data",
    icon: <Mail className="w-5 h-5 text-indigo-700" />,
  },
  {
    id: "ai",
    title: "Implementation of Artificial Intelligence",
    icon: <Cpu className="w-5 h-5 text-indigo-700" />,
  },
  {
    id: "conclusion",
    title: "Be with us",
    icon: <Heart className="w-5 h-5 text-indigo-700" />,
  },
];

const TermsOfUse = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-700">
        Terms of Use
      </h1>
      <div className="flex flex-col md:flex-row">
        <nav className="md:w-1/4 mb-8 md:mb-0">
          <ul className="space-y-4 border-r md:mr-4 md:ml-3">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => handleScroll(section.id)}
                  className={`flex space-x-2 text-md font-semibold text-gray-700 hover:text-indigo-700 transition ${
                    activeSection === section.id ? "text-indigo-700" : ""
                  }`}
                >
                  {section.icon}
                  <p className="text-start">{section.title}</p>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:w-3/4 space-y-8">
          <section id="privacy">
            <h2 className="text-3xl font-bold mb-4 text-indigo-600">
              The privacy policy of iBharat
            </h2>
            <p className="mb-4">
              We have prepared this privacy policy to explain the security terms
              to our visitors. In recent times, the chances of cybercrime have
              multiplied, and people remain doubtful before clicking on the
              links. To keep the surfers safe, we maintain a high marketing
              standard with Artificial Intelligence and organic search results.
            </p>
          </section>
          <section id="collection">
            <h2 className="text-3xl font-bold mb-4 text-indigo-600">
              Collection of Information
            </h2>
            <p className="mb-4">
              The collection of information plays a vital role when you surf the
              internet. The data let us get familiar with the traffic. We gather
              information on our visitors in the following process,
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Non-personally identifiable Information</li>
              <li>Internet browser cookies</li>
            </ul>
          </section>
          <section id="non-personal">
            <h2 className="text-3xl font-bold mb-4 text-indigo-600">
              Non-Personally Identifiable Information
            </h2>
            <p className="mb-4">
              We collect non-personally identifiable information from our
              website visitors. Our team doesn’t gather personal data but the
              technical identification information such as,
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>The IP address</li>
              <li>The computer type</li>
              <li>Browser name</li>
              <li>The purpose</li>
              <li>Operating system</li>
            </ul>
            <p className="mb-4">
              Apart from the data mentioned above, we highlight other similar
              activities to ensure website security.
            </p>
          </section>
          <section id="cookies">
            <h2 className="text-3xl font-bold mb-4 text-indigo-600">
              Internet Browser Cookies
            </h2>
            <p className="mb-4">
              To uplift user-experience, we implement web browser cookies. These
              cookies monitor, track, and gather information about the visitors
              and notify us about the visits. However, internet surfers are free
              to ignore the cookies, but in such a case, they won’t experience
              some particular functions of the website.
            </p>
          </section>
          <section id="reasons">
            <h2 className="text-3xl font-bold mb-4 text-indigo-600">
              Notable Reasons to Collect Data
            </h2>
            <p className="mb-4">
              You may wonder, that why we collect the information as thousands
              of internet surfers use the search engine for several purposes. We
              have sorted some strong reasons that justify our call to gather
              data.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>To improve the experience:</strong> The moment we
                receive your information, we understand your needs, demands, and
                purposes. This information motivates us to improve our customer
                care service. Without having these data, we will be at sea
                regarding the flaws of our website designing and performance.
              </li>
              <li>
                <strong>To deliver emails or newsletters occasionally:</strong>{" "}
                This is a brilliant idea to remain connected with our visitors.
                If your email address is registered with us, we will be able to
                deliver company updates, important notifications, offers,
                discounts, and other exciting news. The receivers are free to
                unsubscribe the emails; in such cases, the user has to directly
                contact us through our website. If you stay registered with our
                email, you can instantly convey your messages to us.
              </li>
            </ul>
          </section>
          <section id="ai">
            <h2 className="text-3xl font-bold mb-4 text-indigo-600">
              Implementation of Artificial Intelligence
            </h2>
            <p className="mb-4">
              With each passing day, technological advancement is flying higher.
              We implement AI to track visitors’ web activity, last searched
              item, and other related terms to enhance the personalized
              experience. As a start-up agency, we try to monitor the search
              engine performance, client feedback, UX, and UI to elevate online
              traffic.
            </p>
            <p className="mb-4">
              If you search through iBharat, we will watch the website you
              visit, the time you spend on a website, the links you clicked, and
              the pages you visit. With this data, we will provide you with a
              better-customized experience through our search engine.
            </p>
          </section>
          <section id="conclusion">
            <h2 className="text-3xl font-bold mb-4 text-indigo-600">
              Be with us
            </h2>
            <p className="mb-4">
              To conclude, iBharat, is perhaps the 1st personalized swadeshi
              search engine to support small-scale Indian start-ups. Hence, be
              with us and rate our performance so that we can boost our services
              up. We are waiting for your visit.
            </p>
            <p className="text-gray-500">Last Updated: 05/11/2020</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
