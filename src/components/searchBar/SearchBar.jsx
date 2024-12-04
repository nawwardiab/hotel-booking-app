import React, { useContext } from "react";
import Select from "react-select";
import { SearchContext } from "../../context/SearchContext";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

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

  // Custom styles for react-select components
  const customSelectStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#3a3b40",
      borderRadius: "8px",
      border: state.isFocused ? "2px solid #6366f1" : "1px solid #444",
      boxShadow: state.isFocused
        ? "0 0 0 3px rgba(99, 102, 241, 0.3)"
        : "none",
      "&:hover": {
        borderColor: "rgba(255, 255, 255, 0.3)",
        backgroundColor: "#3a3b40",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#3a3b40" : "white",
      color: state.isFocused ? "#f0e3e2" : "#000",
      padding: 10,
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#f0e3e2",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#f0e3e2",
      fontStyle: "italic",
    }),
  };

  return (
    <div className="search-box">
      <Select
        options={roomTypeOptions}
        placeholder="Room type"
        styles={customSelectStyles}
        onChange={(option) =>
          setSearchParams({ ...searchParams, roomType: option?.value })
        }
      />
      <Select
        options={locationOptions}
        placeholder="Location"
        styles={customSelectStyles}
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
