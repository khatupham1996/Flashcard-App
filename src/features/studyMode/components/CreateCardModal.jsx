import { useState } from "react";
import PropTypes from "prop-types";
import plusIcon from "../../../assets/images/icon-circle-plus.svg";
CreateCardModal.propTypes = {
  onCreateCard: PropTypes.func.isRequired,
};

export default function CreateCardModal({ onCreateCard }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    if (question.trim() && answer.trim() && category.trim()) {
      onCreateCard({ question, answer, category });
      setQuestion("");
      setAnswer("");
      setCategory("");
    }
  };

  return (
    <div className="border border-black shadow-custom  rounded-2xl p-6 bg-white">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Question
          </label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="e.g., What is the capital of France?"
            className="w-full px-4 py-2.5 border border-black rounded-lg text-sm focus:outline-none focus:border-yellow-300"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Answer
          </label>
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="e.g., Paris"
            className="w-full px-4 py-2.5 border border-black rounded-lg text-sm focus:outline-none focus:border-yellow-300 resize-none"
            rows="3"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Category
          </label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="e.g., Geography"
            className="w-full px-4 py-2.5 border border-black rounded-lg text-sm focus:outline-none focus:border-yellow-300"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="px-6 py-2.5 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-400 transition flex items-center justify-center gap-2 text-sm border border-black"
        >
          <span className="text-base ">
            <img src={plusIcon} alt="plus icon" />
          </span>
          Create Card
        </button>
      </div>
    </div>
  );
}
