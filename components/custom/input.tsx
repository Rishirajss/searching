"use client"
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { MicIcon, Search, XCircleIcon } from "lucide-react";

export function UserInput() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-10">
      <h1 className="text-4xl sm:text-6xl font-bold">
        <span className="bg-gradient-to-r from-red-500 to-green-500 bg-clip-text text-transparent">ibharat</span>
      </h1>
      <div className="relative max-w-2xl w-full flex justify-center">
        <Input
          type="text"
          placeholder="Ask your query"
          className="h-11 sm:h-12 rounded-full px-3 pr-9 sm:px-4"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <div className="absolute bottom-2.5 right-3 z-100 flex itmes-center justify-center gap-1.5 text-gray-600 dark:text-gray-500">
        {inputValue && (
            <span className='flex gap-1'><XCircleIcon
            className="cursor-pointer"
            onClick={() => setInputValue('')} 
          /> <span className='hidden sm:block'>|</span></span>
          )}
          {isFocused || inputValue ? (
            <MicIcon className="hidden sm:block cursor-pointer hover:text-gray-500 hover:dark:text-gray-300" />
          ) : <MicIcon className='cursor-pointer hover:text-gray-500 hover:dark:text-gray-300' />}
            <span className="hidden sm:block cursor-pointer hover:text-gray-500 hover:dark:text-gray-300">
              <Search />
            </span>
        </div>
      </div>
    </div>
  );
}

