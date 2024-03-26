"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { MicIcon, Search, XCircleIcon } from "lucide-react";
import React, { FormEvent, useState } from "react";

export const UserInput: React.FC = () => {
  const search = useSearchParams();
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState<string | null>(
    search ? search.get("q") : "",
  );
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (typeof inputValue !== "string") {
      return;
    }

    const encodedSearchQuery = encodeURI(inputValue);
    router.push(`/search?q=${encodedSearchQuery}`);
  };

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-10">
      <form
        onSubmit={handleSubmit}
        className="relative max-w-3xl w-full flex flex-col items-center gap-4 sm:gap-10"
      >
        <Input
          type="text"
          placeholder="What are you looking for?"
          className="h-11 sm:h-12 rounded-full px-3 pr-9 sm:px-4"
          value={inputValue || ""}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <div className="absolute bottom-2.5 right-3 z-100 flex itmes-center justify-center gap-1.5 text-gray-600 dark:text-gray-500">
          {inputValue && (
            <span className="flex gap-1">
              <XCircleIcon
                className="cursor-pointer"
                onClick={() => setInputValue("")}
              />{" "}
              <span className="hidden sm:block">|</span>
            </span>
          )}
          {isFocused || inputValue ? (
            <MicIcon className="hidden sm:block cursor-pointer hover:text-gray-500 hover:dark:text-gray-300" />
          ) : (
            <MicIcon className="cursor-pointer hover:text-gray-500 hover:dark:text-gray-300" />
          )}
          <span className="hidden sm:block cursor-pointer hover:text-gray-500 hover:dark:text-gray-300">
            <Search />
          </span>
        </div>
      </form>
    </div>
  );
};
