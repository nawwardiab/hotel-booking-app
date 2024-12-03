import React, { useContext } from "react";
import Select from "react-select";
import { SearchContext } from "../../context/SearchContext";

function SearchBar() {
  const { searchParams, setSearchParams, locationOptions, roomTypeOptions } =
    useContext(SearchContext);

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
    </div>
  );
}

export default SearchBar;
