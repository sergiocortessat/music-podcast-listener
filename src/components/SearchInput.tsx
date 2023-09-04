import React, { useState } from "react";

interface SearchInputProps {
  onSearchTermChange: (newTerm: string) => void;
}

const SearchInput = ({ onSearchTermChange }: SearchInputProps) => {
  const [localSearchTerm, setLocalSearchTerm] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTerm = e.target.value;
    setLocalSearchTerm(newTerm);
    onSearchTermChange(newTerm);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={localSearchTerm}
      onChange={handleInputChange}
      className="w-1/4 h-10 px-3 text-base placeholder-gray-600 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600 mx-10 placeholder:text-white"
    />
  );
};

export default SearchInput;
