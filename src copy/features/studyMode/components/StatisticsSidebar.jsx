// // import { Layers, Book, Inbox } from "lucide-react";
// // import PropTypes from "prop-types";

// // StatisticsSidebar.propTypes = {
// //   totalCards: PropTypes.number.isRequired,
// //   mastered: PropTypes.number.isRequired,
// //   inProgress: PropTypes.number.isRequired,
// //   notStarted: PropTypes.number.isRequired,
// // };

// // export default function StatisticsSidebar({
// //   totalCards,
// //   mastered,
// //   inProgress,
// //   notStarted,
// // }) {
// //   return (
// //     <div className="w-full lg:w-80 bg-white rounded-lg shadow-sm p-4 md:p-6">
// //       <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">
// //         Study Statistics
// //       </h2>

// //       <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
// //         {/* Total Cards */}
// //         <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-4 p-3 md:p-4 rounded-lg border-2 border-gray-200">
// //           <div className="flex-1 w-full">
// //             <div className="text-xs md:text-sm text-gray-600 mb-1">
// //               Total Cards
// //             </div>
// //             <div className="text-2xl md:text-3xl font-bold text-gray-900">
// //               {totalCards}
// //             </div>
// //           </div>
// //           <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-300 rounded-lg flex items-center justify-center self-end lg:self-center">
// //             <Layers size={24} className="text-gray-800 md:w-7 md:h-7" />
// //           </div>
// //         </div>

// //         {/* Mastered */}
// //         <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-4 p-3 md:p-4 rounded-lg border-2 border-gray-200">
// //           <div className="flex-1 w-full">
// //             <div className="text-xs md:text-sm text-gray-600 mb-1">
// //               Mastered
// //             </div>
// //             <div className="text-2xl md:text-3xl font-bold text-gray-900">
// //               {mastered}
// //             </div>
// //           </div>
// //           <div className="w-12 h-12 md:w-16 md:h-16 bg-cyan-300 rounded-lg flex items-center justify-center self-end lg:self-center">
// //             <div className="w-6 h-6 md:w-8 md:h-8 border-4 border-gray-800 border-t-transparent rounded-full"></div>
// //           </div>
// //         </div>

// //         {/* In Progress */}
// //         <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-4 p-3 md:p-4 rounded-lg border-2 border-gray-200">
// //           <div className="flex-1 w-full">
// //             <div className="text-xs md:text-sm text-gray-600 mb-1">
// //               In Progress
// //             </div>
// //             <div className="text-2xl md:text-3xl font-bold text-gray-900">
// //               {inProgress}
// //             </div>
// //           </div>
// //           <div className="w-12 h-12 md:w-16 md:h-16 bg-pink-300 rounded-lg flex items-center justify-center self-end lg:self-center">
// //             <Book size={24} className="text-gray-800 md:w-7 md:h-7" />
// //           </div>
// //         </div>

// //         {/* Not Started */}
// //         <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-4 p-3 md:p-4 rounded-lg border-2 border-gray-200">
// //           <div className="flex-1 w-full">
// //             <div className="text-xs md:text-sm text-gray-600 mb-1">
// //               Not Started
// //             </div>
// //             <div className="text-2xl md:text-3xl font-bold text-gray-900">
// //               {notStarted}
// //             </div>
// //           </div>
// //           <div className="w-12 h-12 md:w-16 md:h-16 bg-pink-200 rounded-lg flex items-center justify-center self-end lg:self-center">
// //             <Inbox size={24} className="text-gray-800 md:w-7 md:h-7" />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// import { Layers, Book, Inbox } from "lucide-react";
// import PropTypes from "prop-types";

// StatisticsSidebar.propTypes = {
//   totalCards: PropTypes.number.isRequired,
//   mastered: PropTypes.number.isRequired,
//   inProgress: PropTypes.number.isRequired,
//   notStarted: PropTypes.number.isRequired,
// };

// export default function StatisticsSidebar({
//   totalCards,
//   mastered,
//   inProgress,
//   notStarted,
// }) {
//   return (
//     <div className="w-full md:w-auto bg-white rounded-lg shadow-sm p-4 md:p-6">
//       <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">
//         Study Statistics
//       </h2>

//       {/* 2x2 Grid on tablet (≤768px), vertical stack on desktop (>768px) */}
//       <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-4">
//         {/* Total Cards */}
//         <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg border-2 border-gray-200">
//           <div className="flex-1">
//             <div className="text-xs md:text-sm text-gray-600 mb-1">
//               Total cards
//             </div>
//             <div className="text-2xl md:text-3xl font-bold text-gray-900">
//               {totalCards}
//             </div>
//           </div>
//           <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-300 rounded-lg flex items-center justify-center">
//             <Layers size={20} className="text-gray-800 md:w-7 md:h-7" />
//           </div>
//         </div>

//         {/* Mastered */}
//         <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg border-2 border-gray-200">
//           <div className="flex-1">
//             <div className="text-xs md:text-sm text-gray-600 mb-1">
//               Mastered
//             </div>
//             <div className="text-2xl md:text-3xl font-bold text-gray-900">
//               {mastered}
//             </div>
//           </div>
//           <div className="w-12 h-12 md:w-16 md:h-16 bg-cyan-300 rounded-lg flex items-center justify-center">
//             <div className="w-6 h-6 md:w-8 md:h-8 border-4 border-gray-800 border-t-transparent rounded-full"></div>
//           </div>
//         </div>

//         {/* In Progress */}
//         <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg border-2 border-gray-200">
//           <div className="flex-1">
//             <div className="text-xs md:text-sm text-gray-600 mb-1">
//               In Progress
//             </div>
//             <div className="text-2xl md:text-3xl font-bold text-gray-900">
//               {inProgress}
//             </div>
//           </div>
//           <div className="w-12 h-12 md:w-16 md:h-16 bg-pink-300 rounded-lg flex items-center justify-center">
//             <Book size={20} className="text-gray-800 md:w-7 md:h-7" />
//           </div>
//         </div>

//         {/* Not Started */}
//         <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg border-2 border-gray-200">
//           <div className="flex-1">
//             <div className="text-xs md:text-sm text-gray-600 mb-1">
//               Not Started
//             </div>
//             <div className="text-2xl md:text-3xl font-bold text-gray-900">
//               {notStarted}
//             </div>
//           </div>
//           <div className="w-12 h-12 md:w-16 md:h-16 bg-pink-200 rounded-lg flex items-center justify-center">
//             <Inbox size={20} className="text-gray-800 md:w-7 md:h-7" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { Layers, Book, Inbox } from "lucide-react";
import PropTypes from "prop-types";

StatisticsSidebar.propTypes = {
  totalCards: PropTypes.number.isRequired,
  mastered: PropTypes.number.isRequired,
  inProgress: PropTypes.number.isRequired,
  notStarted: PropTypes.number.isRequired,
};

export default function StatisticsSidebar({
  totalCards,
  mastered,
  inProgress,
  notStarted,
}) {
  return (
    <div className="w-full md:w-auto bg-white rounded-lg shadow-sm p-3 sm:p-4 md:p-6">
      <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
        Study Statistics
      </h2>

      {/* Mobile: 1 column, Tablet: 2x2 grid, Desktop: 1 column vertical */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2 sm:gap-3 md:gap-4">
        {/* Total Cards */}
        <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg border-2 border-gray-200">
          <div className="flex-1">
            <div className="text-xs sm:text-xs md:text-sm text-gray-600 mb-1">
              Total cards
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              {totalCards}
            </div>
          </div>
          <div className="w-12 h-12 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-blue-300 rounded-lg flex items-center justify-center flex-shrink-0">
            <Layers
              size={20}
              className="text-gray-800 sm:w-5 sm:h-5 md:w-7 md:h-7"
            />
          </div>
        </div>

        {/* Mastered */}
        <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg border-2 border-gray-200">
          <div className="flex-1">
            <div className="text-xs sm:text-xs md:text-sm text-gray-600 mb-1">
              Mastered
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              {mastered}
            </div>
          </div>
          <div className="w-12 h-12 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-cyan-300 rounded-lg flex items-center justify-center flex-shrink-0">
            <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 border-4 border-gray-800 border-t-transparent rounded-full"></div>
          </div>
        </div>

        {/* In Progress */}
        <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg border-2 border-gray-200">
          <div className="flex-1">
            <div className="text-xs sm:text-xs md:text-sm text-gray-600 mb-1">
              In Progress
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              {inProgress}
            </div>
          </div>
          <div className="w-12 h-12 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-pink-300 rounded-lg flex items-center justify-center flex-shrink-0">
            <Book
              size={20}
              className="text-gray-800 sm:w-5 sm:h-5 md:w-7 md:h-7"
            />
          </div>
        </div>

        {/* Not Started */}
        <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg border-2 border-gray-200">
          <div className="flex-1">
            <div className="text-xs sm:text-xs md:text-sm text-gray-600 mb-1">
              Not Started
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              {notStarted}
            </div>
          </div>
          <div className="w-12 h-12 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-pink-200 rounded-lg flex items-center justify-center flex-shrink-0">
            <Inbox
              size={20}
              className="text-gray-800 sm:w-5 sm:h-5 md:w-7 md:h-7"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
