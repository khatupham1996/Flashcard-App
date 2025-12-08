import { useFlashcard } from "../context/FlashcardContext";
import PropTypes from "prop-types";
EditForm.propTypes = {
  onEdit: PropTypes.func.isRequired,
};
function EditForm({ onEdit }) {
  const {
    question,
    answer,
    category,
    setQuestion,
    setAnswer,
    setCategory,
    closeEditModal,
    handleUpdateCard,
  } = useFlashcard();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="border-2 border-gray-900 rounded-2xl p-6 bg-white max-w-md w-full">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Edit Card</h2>
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

          <div className="flex gap-2">
            <button
              onClick={() => handleUpdateCard(onEdit)}
              className="flex-1 px-6 py-2.5 bg-yellow-300 text-gray-900 font-semibold rounded-full hover:bg-yellow-400 transition text-sm"
            >
              Update Card
            </button>
            <button
              onClick={closeEditModal}
              className="flex-1 px-6 py-2.5 bg-gray-200 text-gray-900 font-semibold rounded-full hover:bg-gray-300 transition text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditForm;
