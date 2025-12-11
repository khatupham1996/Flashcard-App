import PropTypes from "prop-types";
import logo from "../../../assets/images/logo-small.svg";

function Header({ setViewMode, viewMode }) {
  return (
    <div className="flex items-center justify-between gap-2 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-400 rounded-full flex items-center justify-center">
          <span className="text-lg sm:text-xl">
            <img src={logo} alt="logo" />
          </span>
        </div>
        <span className="text-lg sm:text-xl font-semibold text-gray-900">
          Flashcard
        </span>
      </div>
      <div className="border border-black p-1 rounded-full shadow-custom bg-gray-50">
        <div className="flex gap-1">
          <button
            className={`px-4 sm:px-6 py-2 font-semibold rounded-full transition text-sm sm:text-base ${
              viewMode === "study"
                ? "border border-black bg-yellow-300 text-gray-900 hover:bg-yellow-400"
                : "bg-transparent text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setViewMode("study")}
          >
            Study Mode
          </button>
          <button
            className={`px-4 sm:px-6 py-2 font-semibold rounded-full transition text-sm sm:text-base ${
              viewMode === "all"
                ? "border border-black bg-yellow-300 text-gray-900 hover:bg-yellow-400"
                : "bg-transparent text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setViewMode("all")}
          >
            All Cards
          </button>
        </div>
      </div>
    </div>
  );
}
Header.propTypes = {
  setViewMode: PropTypes.func.isRequired,
  viewMode: PropTypes.string.isRequired,
};
export default Header;
