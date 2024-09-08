// src/pages/index.tsx
import { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Additional() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold my-8 text-center">
        भारत का अपना स्वदेशी सर्च इंजन
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center px-6 sm:px-32 mt-6 py-4 sm:py-10">
        {/* Swadeshi Section */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/img/swadeshinewlogo.jpg" // Replace with your flag icon path
            alt="Swadeshi"
            width={80}
            height={80}
            className="w-20 h-20 mb-4"
          />
          <h2 className="text-xl font-bold">स्वदेशी</h2>
          <p className="text-gray-600 mt-2">
            स्वदेशी सर्च इंजन जो राष्ट्रीय और अंतर्राष्ट्रीय वेबसाइटों को खोजने
            के लिए बनाया गया है।
          </p>
        </div>

        {/* Verified Section */}
        <div className="flex flex-col items-center text-center">
          <Image
            alt="check-circle"
            src="/img/verified.png"
            width={80}
            height={80}
            className="w-20 h-20 text-blue-500 mb-4"
          />

          <h2 className="text-xl font-bold">सत्यापित</h2>
          <p className="text-gray-600 mt-2">
            इंटरनेट पर हर प्रकार के वेबसाइट उपलब्ध हैं, हमारा प्रयास है की हर
            वेबसाइट सत्यापित हो।
          </p>
        </div>

        {/* Local Section */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/img/localicon.png" // Replace with your local icon path
            alt="Local"
            width={80}
            height={80}
            className="w-20 h-20 mb-4"
          />
          <h2 className="text-xl font-bold">लोकल</h2>
          <p className="text-gray-600 mt-2">
            भारत को आत्मनिर्भर बनाने के लिए लोकल व्यवसायों को आगे बढ़ाने के लिए
            प्रयास रथ हैं।
          </p>
        </div>
      </div>
      <div className="cursor-pointer max-w-5xl w-full text-center px-6 py-8 ">
        <Link
          href="/submiturl"
          className="bg-blue-500 rounded-md block w-full py-2"
        >
          अपनी वेबसाइट को लिस्ट करें
        </Link>
      </div>

      {/* First Section */}
      <div className="px-8 max-w-6xl mt-4 sm:mt-20">
        <h2 className="text-2xl font-bold text-center mb-4">
          स्वदेशी सर्च इंजन के बारे में
        </h2>
        <p className="text-gray-600 text-justify leading-relaxed">
          हमने उपयोगकर्ताओं के लिए सुगम इंटरनेट की सुविधा के लिए स्वदेशी सर्च
          इंजन को डिज़ाइन किया है। हमने हमेशा प्रत्येक कार्य के लिए देशभक्ति का
          सार विकसित किया है, और अब हमारा स्वदेशी सर्च इंजन के परिणामों में भी
          स्वदेशी का बड़वा देने के लिए भारतीयों का अभिवादन करने के लिए तैयार है।
          हमारे स्वदेशी सर्च इंजन का सर्च बार में रखे गए वाक्यांशों के बदले में
          माइक्रोसेकंड्स के अन्तराल वाले उत्तरों को इकठ्ठा करने के लिए डिज़ाइन
          किया गया है। हमारे वेब क्रॉलर को राष्ट्रीय और अंतराष्ट्रीय दोनों
          स्रोतों से परिणाम निकालने के लिए डिज़ाइन किया गया है, और हम परिणामों
          को सत्यापित करके परदान करने के लिए कुछ अनुकूलित सुविधाओं के साथ प्रयास
          कर रहे हैं, ताकि सटीक जानकारी प्रदान करने में आपकी सहायता कर सके।
        </p>
      </div>

      {/* Second Section */}
      <div className="px-8 mt-8 max-w-6xl">
        <h2 className="text-2xl font-bold text-center mb-4">
          स्वदेशी सर्च इंजन क्यों चुनें
        </h2>
        <p className="text-gray-600 text-justify leading-relaxed">
          यह सिर्फ एक सर्च इंजन नहीं है; इसके बजाए, यह भारतीयों की फुहक़त होने
          और एक साथ बढ़ने के लिए परिषित करने का एक तरीका है। इस व्यक्तिगत सर्च
          इंजन के साथ, हम छोटे व्यवसायों और स्टार्ट-अप पर प्रकाश डालने की कोशिश
          कर रहे हैं ताकि उन्हें अंतर्राष्ट्रीय बाजार से लड़ने का मौका मिल सके।
          मूल रूप से वास्तविक परिणाम आपकी खोज को फिल्टर कर सही उत्तर खोजने में
          मदद करेंगे। इसलिए, बेझिझक हमारे स्वदेशी सर्च इंजन को अपनाइए और इसका
          उपयोग राष्ट्र, समाज को आत्मनिर्भर बनाने के लिए करें। हमें सहयोग दीजिए;
          हमें प्रयासहित कीजिए और हमारे सेवाओं को अपने स्तर तक बढ़ा सकें।
        </p>
      </div>

      {/* Third Section */}

      {/* Android App Download Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full bg-gray-200 mt-16 p-8">
        <div className="flex-1 sm:ml-14 sm:px-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            एंड्राइड ऐप को डाउनलोड करे
          </h2>
          <p className="text-gray-600 text-xl mb-4 leading-relaxed">
            एंड्राइड ऐप को डाउनलोड करे और भारत में बन रहे इस स्वदेशी सर्च इंजन
            को उपयोग करे। आप इसे उपयोग करेंगे तो हमें इसे और बेहतर बनाने के लिए
            प्रेरणा मिलेगी।
            <br />
            <span className="font-bold ml-2">- iBharat team</span>
          </p>
          <a
            href="https://play.google.com/store/apps"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/play.webp"
              className="w-[130px] h-auto sm:w-[150px]"
              alt="Get it on Google Play"
              width={120}
              height={50}
            />
          </a>
        </div>

        <div className="flex-1 mt-8 md:mt-0">
          <Image
            src="/img/app.jpg" // Replace with the smartphone screen image path
            width={500}
            height={400}
            alt="iBharat App"
            className="w-[520px] h-auto rounded-xl"
          />
        </div>
      </div>
    </main>
  );
}
