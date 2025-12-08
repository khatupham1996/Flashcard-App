import PropTypes from "prop-types";
import starBlue from "../../../assets/images/pattern-star-blue.svg";
import starYellow from "../../../assets/images/pattern-star-yellow.svg";

Flashcard.propTypes = {
  showAnswer: PropTypes.bool.isRequired,
  setShowAnswer: PropTypes.func.isRequired,
  masteryLevel: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default function Flashcard({
  showAnswer,
  setShowAnswer,
  masteryLevel,
  question,
  answer,
  category,
}) {
  return (
    <div
      className={`relative rounded-2xl p-8 sm:p-12 md:p-14 mb-4 sm:mb-5 md:mb-6 min-h-[280px] sm:min-h-[300px] md:min-h-[320px] flex flex-col items-center justify-center cursor-pointer transition-all duration-700 border border-black shadow-custom ${
        showAnswer
          ? "bg-gradient-to-br from-blue-300 to-blue-400"
          : "bg-gradient-to-br from-pink-300 to-pink-400"
      }`}
      style={{
        transformStyle: "preserve-3d",
        transform: showAnswer ? "rotateY(180deg)" : "rotateY(0deg)",
      }}
      onClick={() => setShowAnswer(!showAnswer)}
    >
      <div
        className="absolute top-3 sm:top-3 md:top-4 flex items-center gap-2"
        style={{ transform: showAnswer ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        <span className="px-2.5 sm:px-3 md:px-4 py-1 bg-white rounded-full text-xs sm:text-xs md:text-sm font-medium text-gray-800">
          {category}
        </span>
      </div>
      <div
        className="absolute top-5 sm:top-6 right-5 sm:right-6 md:right-8"
        style={{ transform: showAnswer ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        <span>
          <img src={starBlue} alt="starBlue" />
        </span>
      </div>
      <div
        className="absolute bottom-10 sm:bottom-10 left-5 sm:left-6 md:left-8"
        style={{ transform: showAnswer ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        <span>
          <img src={starYellow} alt="starYellow" />
        </span>
      </div>

      <div
        className="text-center px-4"
        style={{ transform: showAnswer ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {!showAnswer ? (
          <>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-3 md:mb-4">
              {question}
            </h2>
            <p className="text-gray-800 text-xs sm:text-sm">
              Click to reveal answer
            </p>
          </>
        ) : (
          <>
            <p className="text-xs sm:text-sm text-gray-800 mb-2">Answer:</p>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
              {answer}
            </p>
          </>
        )}
      </div>

      {/* Mastery Bar */}
      <div
        className="absolute bottom-3 sm:bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 flex flex-wrap items-center justify-center gap-2 px-4"
        style={{
          transform: showAnswer
            ? "translateX(-50%) rotateY(180deg)"
            : "translateX(-50%) rotateY(0deg)",
        }}
      >
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
