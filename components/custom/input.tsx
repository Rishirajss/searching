"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { MicIcon, SearchX } from "lucide-react";
import React, { FormEvent, useState } from "react";
import { Button } from "../ui/button";

interface BtnProps {
  btnText: string;
}

// Define the SpeechRecognition type
interface SpeechRecognition extends EventTarget {
  new (): SpeechRecognition;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onaudiostart: ((this: SpeechRecognition, ev: Event) => any) | null;
  onsoundstart: ((this: SpeechRecognition, ev: Event) => any) | null;
  onspeechstart: ((this: SpeechRecognition, ev: Event) => any) | null;
  onspeechend: ((this: SpeechRecognition, ev: Event) => any) | null;
  onsoundend: ((this: SpeechRecognition, ev: Event) => any) | null;
  onaudioend: ((this: SpeechRecognition, ev: Event) => any) | null;
  onresult:
    | ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any)
    | null;
  onnomatch:
    | ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any)
    | null;
  onerror:
    | ((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => any)
    | null;
  onstart: ((this: SpeechRecognition, ev: Event) => any) | null;
  onend: ((this: SpeechRecognition, ev: Event) => any) | null;
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  serviceURI: string;
}

// Define the SpeechRecognitionEvent type
interface SpeechRecognitionEvent extends Event {
  readonly resultIndex: number;
  readonly results: SpeechRecognitionResultList;
}

// Define the SpeechRecognitionErrorEvent type
interface SpeechRecognitionErrorEvent extends Event {
  readonly error: string;
  readonly message: string;
}

// Extend the Window interface to include webkitSpeechRecognition
declare global {
  interface Window {
    webkitSpeechRecognition: {
      new (): SpeechRecognition;
    };
    SpeechRecognition: {
      new (): SpeechRecognition;
    };
  }
}

export const UserInput: React.FC<BtnProps> = ({ btnText }) => {
  const search = useSearchParams();
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(
    search ? search.get("q") || "" : "",
  );
  const [isListening, setIsListening] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      return;
    }

    const encodedSearchQuery = encodeURI(inputValue);
    router.push(`/search?q=${encodedSearchQuery}`);
  };

  const handleMicClick = () => {
    if (
      !("webkitSpeechRecognition" in window) &&
      !("SpeechRecognition" in window)
    ) {
      alert("Speech recognition is not supported in your browser.");
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition: SpeechRecognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      setInputValue(transcript);
      setIsListening(false);

      setInputValue(transcript);
      setIsListening(false);
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  return (
    <div
      className={`relative flex flex-col items-center gap-4 sm:gap-10 ${isListening ? "blur-sm" : ""}`}
    >
      {isListening && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`w-2 h-10 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full animate-wavy`}
                style={{ animationDelay: `${index * 0.15}s` }}
              ></div>
            ))}
          </div>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="relative max-w-3xl w-full flex flex-col items-center gap-4 sm:gap-10"
      >
        <Input
          type="text"
          placeholder="What are you looking for?"
          className="h-10 px-3 pr-9 sm:px-4 text-sm sm:text-base"
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <div className="absolute bottom-0 right-0 z-10 flex items-center justify-center gap-1.5 text-gray-600 dark:text-gray-500">
          <div className="flex items-center">
            {inputValue && (
              <span className="flex gap-1">
                <SearchX
                  className="cursor-pointer"
                  onClick={() => setInputValue("")}
                />
                <span className="hidden sm:block">|</span>
              </span>
            )}
            <MicIcon
              className={`cursor-pointer hover:text-gray-500 hover:dark:text-gray-300 ${
                isListening ? "animate-pulse" : ""
              }`}
              onClick={handleMicClick}
            />
            <Button className="h-10 ml-1 font-semibold rounded-none rounded-r-md">
              {btnText ? btnText : "Go"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
