import { useState } from "react";
import { Search } from "react-bootstrap-icons";
import "../styles/components/Searchbar.css";

export default function Searchbar() {
  const [searchString, setSearchString] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Testing if: ${searchString} is working`); // Replace this with your search logic
  };

  return (
    <form id="header-search" className="d-flex justify-content-left align-items-center" onSubmit={handleSearch}>
      <input
        className="p-29"
        type="search"
        placeholder="Search ShopMeMart..."
        onChange={handleChange}
        value={searchString}
        name="search"
      />
      <button type="submit">
        <Search />
      </button>
    </form>
  );
}
