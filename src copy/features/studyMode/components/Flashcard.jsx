// // import { MoreVertical } from "lucide-react";
// // import FlashcardMenu from "./FlashcardMenu";
// // import PropTypes from "prop-types";
// // Flashcard.propTypes = {
// //   showAnswer: PropTypes.bool.isRequired,
// //   setShowAnswer: PropTypes.func.isRequired,
// //   showCardMenu: PropTypes.bool.isRequired,
// //   setShowCardMenu: PropTypes.func.isRequired,
// //   masteryLevel: PropTypes.number.isRequired,
// //   onEdit: PropTypes.func.isRequired,
// //   onDelete: PropTypes.func.isRequired,
// // };
// // export default function Flashcard({
// //   showAnswer,
// //   setShowAnswer,
// //   showCardMenu,
// //   setShowCardMenu,
// //   masteryLevel,
// //   onEdit,
// //   onDelete,
// // }) {
// //   return (
// //     <div
// //       className="relative bg-gradient-to-br from-pink-300 to-pink-400 rounded-2xl p-12 mb-6 min-h-[320px] flex flex-col items-center justify-center cursor-pointer"
// //       onClick={() => setShowAnswer(!showAnswer)}
// //     >
// //       <div className="absolute top-4 right-4 flex items-center gap-2">
// //         <span className="px-4 py-1 bg-white rounded-full text-sm font-medium text-gray-800">
// //           Web Development
// //         </span>

// //         <div className="relative">
// //           <button
// //             onClick={(e) => {
// //               e.stopPropagation();
// //               setShowCardMenu(!showCardMenu);
// //             }}
// //             className="w-8 h-8 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition"
// //           >
// //             <MoreVertical size={18} />
// //           </button>

// //           {showCardMenu && (
// //             <FlashcardMenu
// //               onEdit={(e) => {
// //                 e.stopPropagation();
// //                 onEdit();
// //               }}
// //               onDelete={(e) => {
// //                 e.stopPropagation();
// //                 onDelete();
// //               }}
// //             />
// //           )}
// //         </div>
// //       </div>

// //       {!showAnswer ? (
// //         <div className="text-center">
// //           <h2 className="text-4xl font-bold text-gray-900 mb-4">
// //             What does HTML stand for?
// //           </h2>
// //           <p className="text-gray-800 text-sm">Click to reveal answer</p>
// //         </div>
// //       ) : (
// //         <div className="text-center">
// //           <p className="text-sm text-gray-800 mb-2">Answer:</p>
// //           <p className="text-2xl font-semibold text-gray-900">
// //             HyperText Markup Language
// //           </p>
// //         </div>
// //       )}

// //       {/* Mastery Bar */}
// //       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
// //         <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-800">
// //           Web Development
// //         </span>

// //         <div className="flex items-center gap-2">
// //           <div className="w-32 h-1 bg-white/30 rounded-full">
// //             <div
// //               className="h-full bg-white rounded-full transition-all duration-300"
// //               style={{ width: `${(masteryLevel / 5) * 100}%` }}
// //             ></div>
// //           </div>
// //           <span className="text-xs text-gray-800 font-medium">
// //             {masteryLevel}/5
// //           </span>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// import { MoreVertical } from "lucide-react";
// import FlashcardMenu from "./FlashcardMenu";
// import PropTypes from "prop-types";

// Flashcard.propTypes = {
//   showAnswer: PropTypes.bool.isRequired,
//   setShowAnswer: PropTypes.func.isRequired,
//   showCardMenu: PropTypes.bool.isRequired,
//   setShowCardMenu: PropTypes.func.isRequired,
//   masteryLevel: PropTypes.number.isRequired,
//   onEdit: PropTypes.func.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

// export default function Flashcard({
//   showAnswer,
//   setShowAnswer,
//   showCardMenu,
//   setShowCardMenu,
//   masteryLevel,
//   onEdit,
//   onDelete,
// }) {
//   return (
//     <div
//       className="relative bg-gradient-to-br from-pink-300 to-pink-400 rounded-2xl p-8 md:p-12 mb-4 md:mb-6 min-h-[280px] md:min-h-[320px] flex flex-col items-center justify-center cursor-pointer"
//       onClick={() => setShowAnswer(!showAnswer)}
//     >
//       <div className="absolute top-3 md:top-4 right-3 md:right-4 flex items-center gap-2">
//         <span className="px-3 md:px-4 py-1 bg-white rounded-full text-xs md:text-sm font-medium text-gray-800">
//           Web Development
//         </span>

//         <div className="relative">
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               setShowCardMenu(!showCardMenu);
//             }}
//             className="w-8 h-8 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition"
//           >
//             <MoreVertical size={18} />
//           </button>

//           {showCardMenu && (
//             <FlashcardMenu
//               onEdit={(e) => {
//                 e.stopPropagation();
//                 onEdit();
//               }}
//               onDelete={(e) => {
//                 e.stopPropagation();
//                 onDelete();
//               }}
//             />
//           )}
//         </div>
//       </div>

//       <div className="absolute top-6 left-6 md:left-8">
//         <span className="text-2xl md:text-3xl">⭐</span>
//       </div>

//       <div className="absolute top-6 right-16 md:right-20">
//         <span className="text-2xl md:text-3xl">✨</span>
//       </div>

//       {!showAnswer ? (
//         <div className="text-center px-4">
//           <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
//             What does HTML stand for?
//           </h2>
//           <p className="text-gray-800 text-xs md:text-sm">
//             Click to reveal answer
//           </p>
//         </div>
//       ) : (
//         <div className="text-center px-4">
//           <p className="text-xs md:text-sm text-gray-800 mb-2">Answer:</p>
//           <p className="text-xl md:text-2xl font-semibold text-gray-900">
//             HyperText Markup Language
//           </p>
//         </div>
//       )}

//       {/* Mastery Bar */}
//       <div className="absolute bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 flex flex-wrap items-center justify-center gap-2 md:gap-4 px-4">
//         <span className="px-2 md:px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-800">
//           Web Development
//         </span>

//         {masteryLevel > 0 && (
//           <span className="px-2 md:px-3 py-1 bg-teal-400 rounded-full text-xs font-medium text-gray-900 flex items-center gap-1">
//             👍 Mastered {masteryLevel}/5
//           </span>
//         )}

//         <div className="flex items-center gap-2">
//           <div className="w-24 md:w-32 h-1 bg-white/30 rounded-full">
//             <div
//               className="h-full bg-white rounded-full transition-all duration-300"
//               style={{ width: `${(masteryLevel / 5) * 100}%` }}
//             ></div>
//           </div>
//           <span className="text-xs text-gray-800 font-medium">
//             {masteryLevel}/5
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }
import { MoreVertical } from "lucide-react";
import FlashcardMenu from "./FlashcardMenu";
import PropTypes from "prop-types";

Flashcard.propTypes = {
  showAnswer: PropTypes.bool.isRequired,
  setShowAnswer: PropTypes.func.isRequired,
  showCardMenu: PropTypes.bool.isRequired,
  setShowCardMenu: PropTypes.func.isRequired,
  masteryLevel: PropTypes.number.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default function Flashcard({
  showAnswer,
  setShowAnswer,
  showCardMenu,
  setShowCardMenu,
  masteryLevel,
  onEdit,
  onDelete,
}) {
  return (
    <div
      className="relative bg-gradient-to-br from-pink-300 to-pink-400 rounded-2xl p-8 sm:p-10 md:p-12 mb-4 sm:mb-5 md:mb-6 min-h-[280px] sm:min-h-[300px] md:min-h-[320px] flex flex-col items-center justify-center cursor-pointer"
      onClick={() => setShowAnswer(!showAnswer)}
    >
      <div className="absolute top-3 sm:top-3 md:top-4 right-3 sm:right-3 md:right-4 flex items-center gap-2">
        <span className="px-2.5 sm:px-3 md:px-4 py-1 bg-white rounded-full text-xs sm:text-xs md:text-sm font-medium text-gray-800">
          Web Development
        </span>

        <div className="relative">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowCardMenu(!showCardMenu);
            }}
            className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition"
          >
            <MoreVertical size={16} className="sm:w-4.5 sm:h-4.5" />
          </button>

          {showCardMenu && (
            <FlashcardMenu
              onEdit={(e) => {
                e.stopPropagation();
                onEdit();
              }}
              onDelete={(e) => {
                e.stopPropagation();
                onDelete();
              }}
            />
          )}
        </div>
      </div>

      <div className="absolute top-5 sm:top-6 left-5 sm:left-6 md:left-8">
        <span className="text-2xl sm:text-2xl md:text-3xl">⭐</span>
      </div>

      <div className="absolute top-5 sm:top-6 right-14 sm:right-16 md:right-20">
        <span className="text-2xl sm:text-2xl md:text-3xl">✨</span>
      </div>

      {!showAnswer ? (
        <div className="text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-3 md:mb-4">
            What does HTML stand for?
          </h2>
          <p className="text-gray-800 text-xs sm:text-sm">
            Click to reveal answer
          </p>
        </div>
      ) : (
        <div className="text-center px-4">
          <p className="text-xs sm:text-sm text-gray-800 mb-2">Answer:</p>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
            HyperText Markup Language
          </p>
        </div>
      )}

      {/* Mastery Bar */}
      <div className="absolute bottom-3 sm:bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 flex flex-wrap items-center justify-center gap-2 px-4">
        <span className="px-2 sm:px-2.5 md:px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-800">
          Web Development
        </span>

        <div className="flex items-center gap-2">
          <div className="w-20 sm:w-24 md:w-32 h-1 bg-white/30 rounded-full">
            <div
              className="h-full bg-white rounded-full transition-all duration-300"
              style={{ width: `${(masteryLevel / 5) * 100}%` }}
            ></div>
          </div>
          <span className="text-xs text-gray-800 font-medium">
            {masteryLevel}/5
          </span>
        </div>
      </div>
    </div>
  );
}
