import { X } from "lucide-react";
import PropTypes from "prop-types";
import { useFlashcard } from "../context/FlashcardContext";

DeleteCard.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

function DeleteCard({ onDelete }) {
  const { deleteCard, setShowDeleteModal } = useFlashcard();

  const handleConfirmDelete = () => {
    if (deleteCard) {
      onDelete(deleteCard.id);
      setShowDeleteModal(false);
    }
  };

  const handleCancel = () => {
    setShowDeleteModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="border-2 border-gray-900 rounded-2xl p-6 bg-white max-w-md w-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">Delete Card</h2>
          <button
            onClick={handleCancel}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mb-6">
          <p className="text-sm text-black-600 mt-3">
            This action cannot be undone.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleCancel}
            className="flex-1 px-6 py-2.5 bg-gray-200 text-gray-900 font-semibold rounded-full hover:bg-gray-300 transition text-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmDelete}
            className="flex-1 px-6 py-2.5 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-400  transition text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteCard;
