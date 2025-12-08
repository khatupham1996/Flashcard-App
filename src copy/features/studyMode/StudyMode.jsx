// // import { useState } from "react";

// // import useFlashcardNavigation from "./hooks/useFlashcardNavigation";
// // import useMastery from "./hooks/useMastery";
// // import useToast from "./services/toastService";

// // import Flashcard from "./components/Flashcard";
// // import FlashcardFilters from "./components/FlashcardFilters";
// // import ActionButtons from "./components/ActionButtons";
// // import NavigationBar from "./components/NavigationBar";
// // import StatisticsSidebar from "./components/StatisticsSidebar";
// // import ToastContainer from "./components/ToastContainer";

// // export default function StudyMode() {
// //   const totalCards = 40;
// //   const mastered = 11;
// //   const inProgress = 21;
// //   const notStarted = 8;

// //   const { toasts, addToast, removeToast } = useToast();
// //   const { currentCard, handleNext, handlePrevious } =
// //     useFlashcardNavigation(totalCards);

// //   const { masteryLevel, markMastered, resetMastery, setMasteryLevel } =
// //     useMastery(addToast);

// //   const [showAnswer, setShowAnswer] = useState(false);
// //   const [showCardMenu, setShowCardMenu] = useState(false);
// //   const [hideMastered, setHideMastered] = useState(false);
// //   const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

// //   return (
// //     <div className="min-h-screen bg-gray-100 p-4 md:p-8">
// //       <div className="max-w-7xl mx-auto">
// //         {/* Header */}
// //         <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-4 md:mb-6">
// //           <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
// //             Study Mode
// //           </h1>
// //         </div>

// //         <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
// //           {/* Main Content */}
// //           <div className="flex-1 bg-white rounded-lg shadow-sm p-4 md:p-8">
// //             {/* Top Bar */}
// //             <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 md:mb-8">
// //               <div className="flex items-center gap-3">
// //                 <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
// //                   <span className="text-xl">📚</span>
// //                 </div>
// //                 <span className="text-xl font-semibold text-gray-900">
// //                   Flashcard
// //                 </span>
// //               </div>
// //               <div className="flex gap-2 w-full sm:w-auto">
// //                 <button className="flex-1 sm:flex-initial px-4 md:px-6 py-2 bg-yellow-300 text-gray-900 font-semibold rounded-full hover:bg-yellow-400 transition text-sm md:text-base">
// //                   Study Mode
// //                 </button>
// //                 <button className="flex-1 sm:flex-initial px-4 md:px-6 py-2 bg-white border-2 border-gray-300 text-gray-900 font-semibold rounded-full hover:bg-gray-50 transition text-sm md:text-base">
// //                   All Cards
// //                 </button>
// //               </div>
// //             </div>

// //             <FlashcardFilters
// //               hideMastered={hideMastered}
// //               setHideMastered={setHideMastered}
// //               showCategoryDropdown={showCategoryDropdown}
// //               setShowCategoryDropdown={setShowCategoryDropdown}
// //             />

// //             <Flashcard
// //               showAnswer={showAnswer}
// //               setShowAnswer={setShowAnswer}
// //               showCardMenu={showCardMenu}
// //               setShowCardMenu={setShowCardMenu}
// //               masteryLevel={masteryLevel}
// //               onEdit={() => addToast("Card updated successfully.")}
// //               onDelete={() => addToast("Card deleted.")}
// //             />

// //             <ActionButtons
// //               onMastered={markMastered}
// //               onReset={() => {
// //                 resetMastery();
// //                 setShowAnswer(false);
// //               }}
// //             />

// //             <NavigationBar
// //               currentCard={currentCard}
// //               totalCards={totalCards}
// //               onPrevious={() => {
// //                 handlePrevious();
// //                 setShowAnswer(false);
// //                 setMasteryLevel(0);
// //               }}
// //               onNext={() => {
// //                 handleNext();
// //                 setShowAnswer(false);
// //                 setMasteryLevel(0);
// //               }}
// //             />
// //           </div>

// //           <StatisticsSidebar
// //             totalCards={totalCards}
// //             mastered={mastered}
// //             inProgress={inProgress}
// //             notStarted={notStarted}
// //           />
// //         </div>
// //       </div>

// //       <ToastContainer toasts={toasts} removeToast={removeToast} />
// //     </div>
// //   );
// // }
// import { useState } from "react";

// import useFlashcardNavigation from "./hooks/useFlashcardNavigation";
// import useMastery from "./hooks/useMastery";
// import useToast from "./services/toastService";

// import Flashcard from "./components/Flashcard";
// import FlashcardFilters from "./components/FlashcardFilters";
// import ActionButtons from "./components/ActionButtons";
// import NavigationBar from "./components/NavigationBar";
// import StatisticsSidebar from "./components/StatisticsSidebar";
// import ToastContainer from "./components/ToastContainer";

// export default function StudyMode() {
//   const totalCards = 40;
//   const mastered = 11;
//   const inProgress = 21;
//   const notStarted = 8;

//   const { toasts, addToast, removeToast } = useToast();
//   const { currentCard, handleNext, handlePrevious } =
//     useFlashcardNavigation(totalCards);

//   const { masteryLevel, markMastered, resetMastery, setMasteryLevel } =
//     useMastery(addToast);

//   const [showAnswer, setShowAnswer] = useState(false);
//   const [showCardMenu, setShowCardMenu] = useState(false);
//   const [hideMastered, setHideMastered] = useState(false);
//   const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 md:p-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-4 md:mb-6">
//           <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
//             Study Mode
//           </h1>
//         </div>

//         <div className="flex flex-col md:flex-row gap-4 md:gap-6">
//           {/* Main Content */}
//           <div className="flex-1 bg-white rounded-lg shadow-sm p-4 md:p-8">
//             {/* Top Bar */}
//             <div className="flex items-center justify-between gap-4 mb-6 md:mb-8">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
//                   <span className="text-xl">📚</span>
//                 </div>
//                 <span className="text-xl font-semibold text-gray-900">
//                   Flashcard
//                 </span>
//               </div>
//               <div className="flex gap-2">
//                 <button className="px-4 md:px-6 py-2 bg-yellow-300 text-gray-900 font-semibold rounded-full hover:bg-yellow-400 transition text-sm md:text-base">
//                   Study Mode
//                 </button>
//                 <button className="px-4 md:px-6 py-2 bg-white border-2 border-gray-300 text-gray-900 font-semibold rounded-full hover:bg-gray-50 transition text-sm md:text-base">
//                   All Cards
//                 </button>
//               </div>
//             </div>

//             <FlashcardFilters
//               hideMastered={hideMastered}
//               setHideMastered={setHideMastered}
//               showCategoryDropdown={showCategoryDropdown}
//               setShowCategoryDropdown={setShowCategoryDropdown}
//             />

//             <Flashcard
//               showAnswer={showAnswer}
//               setShowAnswer={setShowAnswer}
//               showCardMenu={showCardMenu}
//               setShowCardMenu={setShowCardMenu}
//               masteryLevel={masteryLevel}
//               onEdit={() => addToast("Card updated successfully.")}
//               onDelete={() => addToast("Card deleted.")}
//             />

//             <ActionButtons
//               onMastered={markMastered}
//               onReset={() => {
//                 resetMastery();
//                 setShowAnswer(false);
//               }}
//             />

//             <NavigationBar
//               currentCard={currentCard}
//               totalCards={totalCards}
//               onPrevious={() => {
//                 handlePrevious();
//                 setShowAnswer(false);
//                 setMasteryLevel(0);
//               }}
//               onNext={() => {
//                 handleNext();
//                 setShowAnswer(false);
//                 setMasteryLevel(0);
//               }}
//             />
//           </div>

//           {/* Statistics Sidebar - Shows on right for desktop, below for tablet */}
//           <StatisticsSidebar
//             totalCards={totalCards}
//             mastered={mastered}
//             inProgress={inProgress}
//             notStarted={notStarted}
//           />
//         </div>
//       </div>

//       <ToastContainer toasts={toasts} removeToast={removeToast} />
//     </div>
//   );
// }
import { useState } from "react";

import useFlashcardNavigation from "./hooks/useFlashcardNavigation";
import useMastery from "./hooks/useMastery";
import useToast from "./services/toastService";

import Flashcard from "./components/Flashcard";
import FlashcardFilters from "./components/FlashcardFilters";
import ActionButtons from "./components/ActionButtons";
import NavigationBar from "./components/NavigationBar";
import StatisticsSidebar from "./components/StatisticsSidebar";
import ToastContainer from "./components/ToastContainer";

export default function StudyMode() {
  const totalCards = 40;
  const mastered = 11;
  const inProgress = 21;
  const notStarted = 8;

  const { toasts, addToast, removeToast } = useToast();
  const { currentCard, handleNext, handlePrevious } =
    useFlashcardNavigation(totalCards);

  const { masteryLevel, markMastered, resetMastery, setMasteryLevel } =
    useMastery(addToast);

  const [showAnswer, setShowAnswer] = useState(false);
  const [showCardMenu, setShowCardMenu] = useState(false);
  const [hideMastered, setHideMastered] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-3 sm:p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header - Hidden on mobile */}
        <div className="hidden sm:block bg-white rounded-lg shadow-sm p-4 md:p-6 mb-4 md:mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Study Mode
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-6">
          {/* Main Content */}
          <div className="flex-1 bg-white rounded-lg shadow-sm p-3 sm:p-4 md:p-8">
            {/* Top Bar */}
            <div className="flex items-center justify-between gap-2 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-lg sm:text-xl">📚</span>
                </div>
                <span className="text-lg sm:text-xl font-semibold text-gray-900">
                  Flashcard
                </span>
              </div>
              <div className="flex gap-2">
                <button className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 bg-yellow-300 text-gray-900 font-semibold rounded-full hover:bg-yellow-400 transition text-xs sm:text-sm md:text-base">
                  Study Mode
                </button>
                <button className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 bg-white border-2 border-gray-300 text-gray-900 font-semibold rounded-full hover:bg-gray-50 transition text-xs sm:text-sm md:text-base">
                  All Cards
                </button>
              </div>
            </div>

            <FlashcardFilters
              hideMastered={hideMastered}
              setHideMastered={setHideMastered}
              showCategoryDropdown={showCategoryDropdown}
              setShowCategoryDropdown={setShowCategoryDropdown}
            />

            <Flashcard
              showAnswer={showAnswer}
              setShowAnswer={setShowAnswer}
              showCardMenu={showCardMenu}
              setShowCardMenu={setShowCardMenu}
              masteryLevel={masteryLevel}
              onEdit={() => addToast("Card updated successfully.")}
              onDelete={() => addToast("Card deleted.")}
            />

            <ActionButtons
              onMastered={markMastered}
              onReset={() => {
                resetMastery();
                setShowAnswer(false);
              }}
            />

            <NavigationBar
              currentCard={currentCard}
              totalCards={totalCards}
              onPrevious={() => {
                handlePrevious();
                setShowAnswer(false);
                setMasteryLevel(0);
              }}
              onNext={() => {
                handleNext();
                setShowAnswer(false);
                setMasteryLevel(0);
              }}
            />
          </div>

          {/* Statistics Sidebar */}
          <StatisticsSidebar
            totalCards={totalCards}
            mastered={mastered}
            inProgress={inProgress}
            notStarted={notStarted}
          />
        </div>
      </div>

      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </div>
  );
}
