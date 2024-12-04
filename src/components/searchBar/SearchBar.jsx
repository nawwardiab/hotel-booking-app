import React, { useContext } from "react";
import Select from "react-select";
import { SearchContext } from "../../context/SearchContext";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const { searchParams, setSearchParams, locationOptions, roomTypeOptions } =
    useContext(SearchContext);
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/search");
  };

  return (
    <div className="search-box">
      <Select
        options={roomTypeOptions}
        placeholder="Room type"
        onChange={(option) =>
          setSearchParams({ ...searchParams, roomType: option?.value })
        }
      />
      <Select
        options={locationOptions}
        placeholder="Location"
        onChange={(option) =>
          setSearchParams({ ...searchParams, location: option?.value })
        }
      />
      <input
        type="date"
        placeholder="Check-in date"
        onChange={(e) =>
          setSearchParams({ ...searchParams, checkIn: e.target.value })
        }
      />
      <input
        type="date"
        placeholder="Check-out date"
        onChange={(e) =>
          setSearchParams({ ...searchParams, checkOut: e.target.value })
        }
      />
      <button className="search-button" onClick={handleSearchClick}>
        <span>Search</span>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}

export default SearchBar;
