import { Edit, Trash2 } from "lucide-react";
import PropTypes from "prop-types";
FlashcardMenu.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default function FlashcardMenu({ onEdit, onDelete }) {
  return (
    <div className="absolute top-full right-0 mt-2 w-40 bg-white border-2 border-gray-200 rounded-lg shadow-lg">
      <button
        onClick={onEdit}
        className="w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-50"
      >
        <Edit size={16} />
        Edit
      </button>

      <button
        onClick={onDelete}
        className="w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-50 text-red-600"
      >
        <Trash2 size={16} />
        Delete
      </button>
    </div>
  );
}
