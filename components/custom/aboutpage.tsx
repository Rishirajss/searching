import {
  VerifiedIcon,
  ShoppingCart,
  NewspaperIcon,
  CheckCircle,
  Search,
} from "lucide-react";

const AboutPage = () => {
  return (
    <div className="container mx-auto p-2 sm:p-6">
      <div className="p-2 md:p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-600">
          About iBharat.org
        </h1>
        <p className="mb-6 text-gray-700 leading-relaxed">
          We gave rise to iBharat.org, a swadeshi search engine, to help the
          Indians with a personalized internet experience. We have always
          evolved the patriotic essence to every action, and now our iBharat.org
          is prepared to greet the Indians with a swadeshi touch even in the
          search results.
        </p>
        <p className="mb-6 text-gray-700 leading-relaxed">
          A search engine is designed to gather millions of answers within
          microseconds in return to the phrases placed in the search bar. Most
          of the web crawlers are programmed to dig out results from both the
          national and international sources, but iBharat.org is here with some
          customized features to provide outcomes related to India. We have
          categorized the search engine for the users to have smooth internet
          research.
        </p>
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">
          How does iBharat.org serve the web surfers?
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          We have designed iBharat.org in a more straightforward way that
          connects even the non-tech-savvy users. Our expert team has divided
          the search bars into 5 categories such as,
        </p>
        <ul className="list-disc list-inside mb-8 space-y-4">
          <li className="flex items-center">
            <Search className="inline-block mr-2 text-indigo-600" /> All
          </li>
          <li className="flex items-center">
            <VerifiedIcon className="inline-block mr-2 text-indigo-600" />{" "}
            Swadeshi
          </li>
          <li className="flex items-center">
            <ShoppingCart className="inline-block mr-2 text-indigo-600" />{" "}
            Shopping
          </li>
          <li className="flex items-center">
            <NewspaperIcon className="inline-block mr-2 text-indigo-600" /> News
          </li>
          <li className="flex items-center">
            <CheckCircle className="inline-block mr-2 text-indigo-600" />{" "}
            Verified
          </li>
        </ul>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">
            1. All:
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            In this searching option, you can get any type of searching
            experience irrespective of national and international.
          </p>
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">
            2. Swadeshi:
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            This is a personalized searching option to receive results relating
            to Indian companies, start-ups, commercial sectors, and small
            businesses. We have prepared this searching option to support the
            Indians.
          </p>
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">
            3. Shopping:
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            This is our sponsored searching option, where you are directed
            straight to the eCommerce sites for shopping. We know that people
            will lean more on online marketing platforms other than physical
            stores in the future. Keeping that in mind, we have focused on this
            searching category.
          </p>
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">
            4. News:
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            In this search category, you can receive results related to news and
            current affairs.
          </p>
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">
            5. Verified:
          </h3>
          <p className="text-gray-700 leading-relaxed">
            This is perhaps the best category of all in iBharat.org. You can use
            this verified category to skip the fraudulent activities. We only
            allow the verified websites under this searching option to keep our
            users safe. Our experienced engineers validate the well-known
            websites and keep them in the verified section. You can blindly rely
            on the search results regarding the authenticity under this search
            engine category.
          </p>
        </div>
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">
          Why choose our iBharat.org?
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          iBharat.org is not just a search engine; instead, it is a way to
          motivate the Indians to unite and grow together. With this
          personalized search engine, we have tried to shed light on the small
          businesses and start-ups so that they get a chance to fight the
          international market. The seamlessly genuine outcomes will help you
          filter your search and get hold of the exact information you are
          looking for.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Therefore, feel free to join our community and take steps forward to
          highlight this proud nation, India. Support us; encourage us so that
          we can boost up our services to the next level to add new feathers in
          the cap.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
