import PropTypes from "prop-types";
import checkbutton from "../../../assets/images/icon-check.svg";
import resetbutton from "../../../assets/images/icon-reset.svg";
ActionButtons.propTypes = {
  onMastered: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default function ActionButtons({ onMastered, onReset }) {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6">
      <button
        onClick={onMastered}
        className="flex items-center justify-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-yellow-300 border border-black shadow-custom text-gray-900 font-semibold rounded-full hover:bg-yellow-400 transition text-xs sm:text-sm md:text-base"
      >
        <span className="text-base sm:text-lg">
          <img
            src={checkbutton}
            alt=""
            className="border p-1 rounded-full border-black"
          />
        </span>
        I Know This
      </button>

      <button
        onClick={onReset}
        className="flex items-center justify-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 border border-black text-black font-semibold rounded-full hover:bg-gray-50 transition text-xs sm:text-sm md:text-base shadow-custom"
      >
        <span className="text-base sm:text-lg">
          <img src={resetbutton} alt="" />
        </span>
        Reset Progress
      </button>
    </div>
  );
}
