import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="relative">
      <SearchIcon className="w-4 h-4 text-grayColor/80 absolute top-1/2 -translate-y-1/2 left-2" />
      <input
        type="text"
        placeholder="Search"
        className="w-full outline-0 bg-transparent text-white pl-8 px-4 py-1 border-1  border-grayColor rounded-lg text-sm"
      />
    </div>
  );
};

export default Search;
