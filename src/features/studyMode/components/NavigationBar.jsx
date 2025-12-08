import { ChevronLeft, ChevronRight } from "lucide-react";
import PropTypes from "prop-types";

NavigationBar.propTypes = {
  currentCard: PropTypes.number.isRequired,
  totalCards: PropTypes.number.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default function NavigationBar({
  currentCard,
  totalCards,
  onPrevious,
  onNext,
}) {
  return (
    <div className="flex items-center justify-between gap-2">
      <button
        onClick={onPrevious}
        disabled={currentCard === 1}
        className="flex items-center justify-center gap-2 w-10 h-10 sm:w-auto sm:h-auto sm:px-4 sm:py-2 border border-black rounded-full sm:rounded-full text-black-700 font-medium hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm md:text-base"
      >
        <ChevronLeft size={18} className="sm:w-4.5 sm:h-4.5" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      <span className="text-gray-600 font-medium text-xs sm:text-sm md:text-base whitespace-nowrap">
        Card {currentCard} of {totalCards}
      </span>

      <button
        onClick={onNext}
        disabled={currentCard === totalCards}
        className="flex items-center justify-center gap-2 w-10 h-10 sm:w-auto sm:h-auto sm:px-4 sm:py-2 border border-black rounded-full sm:rounded-full text-black-700 font-medium hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm md:text-base"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight size={18} className="sm:w-4.5 sm:h-4.5" />
      </button>
    </div>
  );
}
