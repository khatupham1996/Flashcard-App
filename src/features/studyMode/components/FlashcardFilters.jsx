import { Shuffle, ChevronRight } from "lucide-react";
// import { categories } from "../utils/categories";
// import { initialFlashcards } from "../utils/flashcardsData";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

FlashcardFilters.propTypes = {
  hideMastered: PropTypes.bool.isRequired,
  setHideMastered: PropTypes.func.isRequired,
  showCategoryDropdown: PropTypes.bool.isRequired,
  setShowCategoryDropdown: PropTypes.func.isRequired,
  onShuffle: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
  flashcards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      mastery: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default function FlashcardFilters({
  hideMastered,
  setHideMastered,
  showCategoryDropdown,
  setShowCategoryDropdown,
  onShuffle,
  selectedCategory,
  setSelectedCategory,
  flashcards,
}) {
  const dropDownRef = useRef(null);
  useEffect(() => {
    const handleClose = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setShowCategoryDropdown(false);
      }
      if (e.key === "Escape") {
        setShowCategoryDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClose);
    document.addEventListener("keydown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
      document.removeEventListener("keydown", handleClose);
    };
  }, []);
  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
    setShowCategoryDropdown(false);
  };

  const handleAllCategories = () => {
    setSelectedCategory("All Categories");
    setShowCategoryDropdown(false);
  };

  return (
    <div className="mb-4 sm:mb-5 md:mb-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 items-center">
        <div className="relative col-span-1">
          <button
            onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
            className="w-full px-3 sm:px-4 py-2 border border-black rounded-full font-medium hover:bg-gray-50 transition flex flex-row items-center justify-between gap-2 text-xs sm:text-sm md:text-base"
          >
            <span className="truncate">{selectedCategory}</span>
            <ChevronRight
              size={14}
              className={`sm:w-4 sm:h-4 transform transition-transform flex-shrink-0 ${
                showCategoryDropdown ? "rotate-90" : ""
              }`}
            />
          </button>
          {showCategoryDropdown && (
            <div
              className="absolute top-full left-0 mt-2 w-full bg-white border border-black rounded-lg shadow-lg z-10 max-h-80 overflow-y-auto"
              ref={dropDownRef}
            >
              {/* All Categories Option */}
              <button
                onClick={handleAllCategories}
                className={`w-full flex items-center gap-3 px-3 sm:px-4 py-2 hover:bg-gray-50 cursor-pointer text-left ${
                  selectedCategory === "All Categories"
                    ? "bg-yellow-50 font-semibold"
                    : ""
                }`}
              >
                <span className="flex-1 text-black-700 text-xs sm:text-sm md:text-base">
                  All Categories
                </span>
              </button>

              {/* Individual Categories */}
              {flashcards &&
                Array.from(new Set(flashcards.map((card) => card.category)))
                  .sort()
                  .map((category) => {
                    const categoryCount = flashcards.filter(
                      (card) => card.category === category
                    ).length;
                    return (
                      <button
                        key={category}
                        onClick={() => handleCategorySelect(category)}
                        className={`w-full flex items-center gap-3 px-3 sm:px-4 py-2 hover:bg-gray-50 cursor-pointer text-left ${
                          selectedCategory === category
                            ? "bg-yellow-50 font-semibold"
                            : ""
                        }`}
                      >
                        <span className="flex-1 text-gray-700 text-xs sm:text-sm md:text-base">
                          {category}
                        </span>
                        <span className="text-gray-500 text-xs sm:text-sm">
                          {categoryCount}
                        </span>
                      </button>
                    );
                  })}
            </div>
          )}
        </div>

        <button
          className="col-span-1 sm:col-start-3 px-3 sm:px-4 py-2 border border-black rounded-full text-black-700 font-medium hover:bg-gray-50 transition flex items-center justify-center gap-2 sm:text-sm md:text-base whitespace-nowrap"
          onClick={onShuffle}
        >
          <Shuffle size={16} className="w-4 h-4" />
          <span>Shuffle</span>
        </button>

        <label className="col-span-2 sm:col-span-1 sm:col-start-2 sm:row-start-1 flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={hideMastered}
            onChange={(e) => setHideMastered(e.target.checked)}
            className="w-4 h-4"
          />
          <span className="text-black-700 font-medium text-xs sm:text-sm md:text-base">
            Hide Mastered
          </span>
        </label>
      </div>
    </div>
  );
}
