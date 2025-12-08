import PropTypes from "prop-types";
import master from "../../../assets/images/icon-stats-mastered.svg";
import totalIcon from "../../../assets/images/icon-stats-total.svg";
import progressIcon from "../../../assets/images/icon-stats-in-progress.svg";
import startedIcon from "../../../assets/images/icon-stats-not-started.svg";
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
    <div className="w-full md:w-80 bg-white rounded-lg  p-4 md:p-6 border border-gray-900 shadow-custom flex flex-col">
      <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">
        Study Statistics
      </h2>

      {/* Mobile: 1 column, Tablet: 2x2 grid, Desktop: 1 column vertical with space-between */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3 md:gap-0 md:flex md:flex-col md:justify-between md:flex-1">
        {/* Total Cards */}
        <div className="flex items-stretch gap-0 rounded-xl border-2 border-gray-900 overflow-hidden">
          <div className="flex-1 flex flex-col justify-center p-4 bg-white">
            <div className="text-sm text-gray-700 mb-1 font-medium">
              Total Cards
            </div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900">
              {totalCards}
            </div>
          </div>
          <div className="w-20 md:w-24 bg-blue-300 flex items-center justify-center flex-shrink-0">
            <img
              src={totalIcon}
              alt="totalIcon"
              className="w-8 h-8 md:w-8 md:h-8"
            />
          </div>
        </div>

        {/* Mastered */}
        <div className="flex items-stretch gap-0 rounded-xl border-2 border-gray-900 overflow-hidden">
          <div className="flex-1 flex flex-col justify-center p-4 bg-white">
            <div className="text-sm text-gray-700 mb-1 font-medium">
              Mastered
            </div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900">
              {mastered}
            </div>
          </div>
          <div className="w-20 md:w-24 bg-cyan-400 flex items-center justify-center flex-shrink-0">
            {/* <div className="w-9 h-9 md:w-10 md:h-10 border-[5px] border-gray-900 border-t-transparent rounded-full"></div> */}
            <img src={master} alt="master" className="w-8 h-8 md:w-8 md:h-8" />
          </div>
        </div>

        {/* In Progress */}
        <div className="flex items-stretch gap-0 rounded-xl border-2 border-gray-900 overflow-hidden">
          <div className="flex-1 flex flex-col justify-center p-4 bg-white">
            <div className="text-sm text-gray-700 mb-1 font-medium">
              In Progress
            </div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900">
              {inProgress}
            </div>
          </div>
          <div className="w-20 md:w-24 bg-pink-400 flex items-center justify-center flex-shrink-0">
            <img
              src={progressIcon}
              alt="progressIcon"
              className="w-8 h-8 md:w-8 md:h-8"
            />
          </div>
        </div>

        {/* Not Started */}
        <div className="flex items-stretch gap-0 rounded-xl border-2 border-gray-900 overflow-hidden">
          <div className="flex-1 flex flex-col justify-center p-4 bg-white">
            <div className="text-sm text-gray-700 mb-1 font-medium">
              Not Started
            </div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900">
              {notStarted}
            </div>
          </div>
          <div className="w-20 md:w-24 bg-pink-300 flex items-center justify-center flex-shrink-0">
            <img
              src={startedIcon}
              alt="startedIcon"
              className="w-8 h-8 md:w-8 md:h-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
