"use client";
import { useCommonContext } from "@/context_api/CommonContext";
import { useRef, useState, useEffect } from "react";
import ReactNiceSelect from "../../Inputs/ReactNiceSelect";

const ShopSortFilterWidget = () => {
  const { handleSort, handleSearch, searchTerm } = useCommonContext() || {};
  const [localSearch, setLocalSearch] = useState(searchTerm || "");
  const sortFilterContainerRef = useRef(null);

  // Debounce search to avoid too many updates
  useEffect(() => {
    const timer = setTimeout(() => {
      if (handleSearch) {
        handleSearch(localSearch);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [localSearch, handleSearch]);

  // Sync local state when external searchTerm changes
  useEffect(() => {
    if (searchTerm !== undefined && searchTerm !== localSearch) {
      setLocalSearch(searchTerm);
    }
  }, [searchTerm]);

  return (
    <div ref={sortFilterContainerRef} className="tj-shop-listing-popup">
      <style jsx>{`
        .search-sort-wrapper {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 15px;
          background: #ffffff;
          padding: 10px 15px;
          border-radius: 50px;
          border: 1px solid rgba(27, 58, 107, 0.1);
          transition: all 0.2s;
        }
        .search-sort-wrapper:hover {
          border-color: #29B6D8;
        }
        .search-input {
          flex: 1;
          min-width: 180px;
        }
        .search-input input {
          width: 100%;
          padding: 8px 16px;
          border: 1px solid #e2e8f0;
          border-radius: 30px;
          font-size: 0.9rem;
          outline: none;
          transition: 0.2s;
          color: #1B3A6B;
        }
        .search-input input:focus {
          border-color: #29B6D8;
          box-shadow: 0 0 0 2px rgba(41,182,216,0.2);
        }
        .search-input input::placeholder {
          color: #94a3b8;
        }
        /* Override ReactNiceSelect styles for brand */
        :global(.nice-select) {
          border: 1px solid #e2e8f0 !important;
          border-radius: 30px !important;
          padding: 0 30px 0 18px !important;
          height: 40px !important;
          line-height: 38px !important;
          background: #ffffff !important;
          color: #1B3A6B !important;
          font-size: 0.9rem !important;
        }
        :global(.nice-select:hover) {
          border-color: #29B6D8 !important;
        }
        :global(.nice-select .option.selected) {
          background: #29B6D8 !important;
          color: #1B3A6B !important;
          font-weight: 600;
        }
        :global(.nice-select .option:hover) {
          background: rgba(41,182,216,0.1) !important;
          color: #1B3A6B !important;
        }
        :global(.nice-select:active, .nice-select.open, .nice-select:focus) {
          border-color: #29B6D8 !important;
        }
        @media (max-width: 576px) {
          .search-sort-wrapper {
            flex-direction: column;
            align-items: stretch;
            border-radius: 20px;
          }
          .search-input {
            width: 100%;
          }
        }
      `}</style>

      <div className="search-sort-wrapper">
        <div className="search-input">
          <input
            type="text"
            placeholder="Search products..."
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
          />
        </div>
        <div className="sort-select">
          <ReactNiceSelect
            selectedIndex={2}
            options={[
              { value: "popularity", optionName: "Sort by popularity" },
              { value: "rating", optionName: "Sort by average rating" },
              { value: "new", optionName: "Sort by latest" },
              { value: "price-ascending", optionName: "Sort by price: low to high" },
              { value: "price-descending", optionName: "Sort by price: high to low" },
            ]}
            getSelectedOption={handleSort}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopSortFilterWidget;