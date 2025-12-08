// // import PropTypes from "prop-types";

// // ActionButtons.propTypes = {
// //   onMastered: PropTypes.func.isRequired,
// //   onReset: PropTypes.func.isRequired,
// // };

// // export default function ActionButtons({ onMastered, onReset }) {
// //   return (
// //     <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
// //       <button
// //         onClick={onMastered}
// //         className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-yellow-300 text-gray-900 font-semibold rounded-full hover:bg-yellow-400 transition text-sm md:text-base"
// //       >
// //         <span className="text-lg">😊</span>I Know This
// //       </button>

// //       <button
// //         onClick={onReset}
// //         className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition text-sm md:text-base"
// //       >
// //         <span className="text-lg">↻</span>
// //         Reset Progress
// //       </button>
// //     </div>
// //   );
// // }
// import PropTypes from "prop-types";

// ActionButtons.propTypes = {
//   onMastered: PropTypes.func.isRequired,
//   onReset: PropTypes.func.isRequired,
// };

// export default function ActionButtons({ onMastered, onReset }) {
//   return (
//     <div className="flex items-center justify-center gap-4 mb-6">
//       <button
//         onClick={onMastered}
//         className="flex items-center gap-2 px-6 py-3 bg-yellow-300 text-gray-900 font-semibold rounded-full hover:bg-yellow-400 transition text-sm md:text-base"
//       >
//         <span className="text-lg">😊</span>I Know This
//       </button>

//       <button
//         onClick={onReset}
//         className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition text-sm md:text-base"
//       >
//         <span className="text-lg">↻</span>
//         Reset Progress
//       </button>
//     </div>
//   );
// }
import PropTypes from "prop-types";

ActionButtons.propTypes = {
  onMastered: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default function ActionButtons({ onMastered, onReset }) {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6">
      <button
        onClick={onMastered}
        className="flex items-center justify-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-yellow-300 text-gray-900 font-semibold rounded-full hover:bg-yellow-400 transition text-xs sm:text-sm md:text-base"
      >
        <span className="text-base sm:text-lg">😊</span>I Know This
      </button>

      <button
        onClick={onReset}
        className="flex items-center justify-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition text-xs sm:text-sm md:text-base"
      >
        <span className="text-base sm:text-lg">↻</span>
        Reset Progress
      </button>
    </div>
  );
}
