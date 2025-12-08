// // import { Shuffle, ChevronRight } from "lucide-react";
// // import { categories } from "../utils/categories";
// // import PropTypes from "prop-types";
// // FlashcardFilters.propTypes = {
// //   hideMastered: PropTypes.bool.isRequired,
// //   setHideMastered: PropTypes.func.isRequired,
// //   showCategoryDropdown: PropTypes.bool.isRequired,
// //   setShowCategoryDropdown: PropTypes.func.isRequired,
// // };
// // export default function FlashcardFilters({
// //   hideMastered,
// //   setHideMastered,
// //   showCategoryDropdown,
// //   setShowCategoryDropdown,
// // }) {
// //   return (
// //     <div className="flex items-center justify-between mb-6">
// //       <div className="flex items-center gap-4">
// //         <div className="relative">
// //           <button
// //             onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
// //             className="px-4 py-2 border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition flex items-center gap-2"
// //           >
// //             All Categories
// //             <ChevronRight
// //               size={16}
// //               className={`transform transition-transform ${
// //                 showCategoryDropdown ? "rotate-90" : ""
// //               }`}
// //             />
// //           </button>

// //           {showCategoryDropdown && (
// //             <div className="absolute top-full left-0 mt-2 w-64 bg-white border-2 border-gray-200 rounded-lg shadow-lg z-10 max-h-80 overflow-y-auto">
// //               {categories.map((cat, idx) => (
// //                 <label
// //                   key={idx}
// //                   className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer"
// //                 >
// //                   <input type="checkbox" className="w-4 h-4" />
// //                   <span className="flex-1 text-gray-700">{cat.name}</span>
// //                   <span className="text-gray-500 text-sm">({cat.count})</span>
// //                 </label>
// //               ))}
// //             </div>
// //           )}
// //         </div>

// //         <label className="flex items-center gap-2 cursor-pointer">
// //           <input
// //             type="checkbox"
// //             checked={hideMastered}
// //             onChange={(e) => setHideMastered(e.target.checked)}
// //             className="w-4 h-4"
// //           />
// //           <span className="text-gray-700 font-medium">Hide Mastered</span>
// //         </label>
// //       </div>

// //       <button className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition">
// //         <Shuffle size={18} />
// //         Shuffle
// //       </button>
// //     </div>
// //   );
// // }
// import { Shuffle, ChevronRight } from "lucide-react";
// import { categories } from "../utils/categories";
// import PropTypes from "prop-types";

// FlashcardFilters.propTypes = {
//   hideMastered: PropTypes.bool.isRequired,
//   setHideMastered: PropTypes.func.isRequired,
//   showCategoryDropdown: PropTypes.bool.isRequired,
//   setShowCategoryDropdown: PropTypes.func.isRequired,
// };

// export default function FlashcardFilters({
//   hideMastered,
//   setHideMastered,
//   showCategoryDropdown,
//   setShowCategoryDropdown,
// }) {
//   return (
//     <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-6">
//       <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
//         <div className="relative w-full sm:w-auto">
//           <button
//             onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
//             className="w-full sm:w-auto px-4 py-2 border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition flex items-center justify-between gap-2 text-sm md:text-base"
//           >
//             <span>All Categories</span>
//             <ChevronRight
//               size={16}
//               className={`transform transition-transform ${
//                 showCategoryDropdown ? "rotate-90" : ""
//               }`}
//             />
//           </button>

//           {showCategoryDropdown && (
//             <div className="absolute top-full left-0 mt-2 w-full sm:w-64 bg-white border-2 border-gray-200 rounded-lg shadow-lg z-10 max-h-80 overflow-y-auto">
//               {categories.map((cat, idx) => (
//                 <label
//                   key={idx}
//                   className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer"
//                 >
//                   <input type="checkbox" className="w-4 h-4" />
//                   <span className="flex-1 text-gray-700 text-sm md:text-base">
//                     {cat.name}
//                   </span>
//                   <span className="text-gray-500 text-sm">({cat.count})</span>
//                 </label>
//               ))}
//             </div>
//           )}
//         </div>

//         <label className="flex items-center gap-2 cursor-pointer">
//           <input
//             type="checkbox"
//             checked={hideMastered}
//             onChange={(e) => setHideMastered(e.target.checked)}
//             className="w-4 h-4"
//           />
//           <span className="text-gray-700 font-medium text-sm md:text-base">
//             Hide Mastered
//           </span>
//         </label>
//       </div>

//       <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition text-sm md:text-base">
//         <Shuffle size={18} />
//         Shuffle
//       </button>
//     </div>
//   );
// }
import { Shuffle, ChevronRight } from "lucide-react";
import { categories } from "../utils/categories";
import PropTypes from "prop-types";

FlashcardFilters.propTypes = {
  hideMastered: PropTypes.bool.isRequired,
  setHideMastered: PropTypes.func.isRequired,
  showCategoryDropdown: PropTypes.bool.isRequired,
  setShowCategoryDropdown: PropTypes.func.isRequired,
};

export default function FlashcardFilters({
  hideMastered,
  setHideMastered,
  showCategoryDropdown,
  setShowCategoryDropdown,
}) {
  return (
    <div className="flex flex-col gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
        <div className="relative flex-1 sm:flex-initial">
          <button
            onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
            className="w-full sm:w-auto px-3 sm:px-4 py-2 border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition flex items-center justify-between gap-2 text-xs sm:text-sm md:text-base"
          >
            <span>All Categories</span>
            <ChevronRight
              size={14}
              className={`sm:w-4 sm:h-4 transform transition-transform ${
                showCategoryDropdown ? "rotate-90" : ""
              }`}
            />
          </button>

          {showCategoryDropdown && (
            <div className="absolute top-full left-0 mt-2 w-full sm:w-64 bg-white border-2 border-gray-200 rounded-lg shadow-lg z-10 max-h-80 overflow-y-auto">
              {categories.map((cat, idx) => (
                <label
                  key={idx}
                  className="flex items-center gap-3 px-3 sm:px-4 py-2 hover:bg-gray-50 cursor-pointer"
                >
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="flex-1 text-gray-700 text-xs sm:text-sm md:text-base">
                    {cat.name}
                  </span>
                  <span className="text-gray-500 text-xs sm:text-sm">
                    ({cat.count})
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-3 sm:px-4 py-2 border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition text-xs sm:text-sm md:text-base">
          <Shuffle size={16} className="sm:w-4.5 sm:h-4.5" />
          Shuffle
        </button>
      </div>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={hideMastered}
          onChange={(e) => setHideMastered(e.target.checked)}
          className="w-4 h-4"
        />
        <span className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">
          Hide Mastered
        </span>
      </label>
    </div>
  );
}
