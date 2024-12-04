import React, { useContext } from "react";
import Select from "react-select";
import { SearchContext } from "../../context/SearchContext";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const { searchParams, setSearchParams, locationOptions, roomTypeOptions } =
    useContext(SearchContext);
  const navigate = useNavigate();

  const handleSearchClick = () => {
    if (
      !searchParams.location ||
      !searchParams.checkIn ||
      !searchParams.checkOut
    ) {
      alert("Please fill in location and dates");
      return;
    }

    const checkInDate = new Date(searchParams.checkIn);
    const checkOutDate = new Date(searchParams.checkOut);

    if (checkOutDate <= checkInDate) {
      alert("Check-out date must be after check-in date");
      return;
    }

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
