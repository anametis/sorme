import { Search } from "lucide-react";
import React from "react";

interface SearchBarProps {
  placeholder: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, className }) => {
  return (
    <div className={`flex items-center rounded-md bg-gray-200 ${className}`}>
      <div className="flex items-center justify-center w-10 h-10 rounded-full">
        <Search className="bg-pink-300 rounded-md w-10 p-2 h-full" />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 p-2 ml-1 bg-transparent border-none outline-none"
      />
    </div>
  );
};

export default SearchBar;
