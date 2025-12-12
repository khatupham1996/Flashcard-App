import { MoreVertical } from "lucide-react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import FlashcardFilters from "./FlashcardFilters";
import FlashcardMenu from "./FlashcardMenu";
import EditForm from "../hooks/EditForm";
// import EditForm from "../hooks/editForm";
import { useFlashcard } from "../context/FlashcardContext";
import DeleteCard from "../hooks/DeleteCard";
import CreateCardModal from "./CreateCardModal";
import plusIcon from "../../../assets/images/icon-circle-plus.svg";
AllCardsView.propTypes = {
  flashcards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      mastery: PropTypes.number.isRequired,
    })
  ).isRequired,
  onCreateCard: PropTypes.func.isRequired,
  hideMastered: PropTypes.bool.isRequired,
  setHideMastered: PropTypes.func.isRequired,
  showCategoryDropdown: PropTypes.bool.isRequired,
  setShowCategoryDropdown: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default function AllCardsView({
  flashcards,
  onCreateCard,
  hideMastered,
  setHideMastered,
  showCategoryDropdown,
  setShowCategoryDropdown,
  selectedCategory,
  setSelectedCategory,
  onEdit,
  onDelete,
}) {
  const [showForm, setShowForm] = useState(true);
  const [openMenuId, setOpenMenuId] = useState(null);

  // Get context methods
  const {
    showEditModal,
    showDeleteModal,
    openEditModal,
    setShowDeleteModal,
    setDeleteCard,
  } = useFlashcard();

  const filteredCards = flashcards.filter((card) => {
    // Filter by category
    const categoryMatch =
      selectedCategory === "All Categories" ||
      card.category === selectedCategory;
    // Filter by mastery
    const masteryMatch = hideMastered ? card.mastery < 5 : true;
    return categoryMatch && masteryMatch;
  });

  useEffect(() => {
    const handleClose = (e) => {
      const isMenuButton = e.target.closest("button");
      const isMenu = e.target.closest(".flashcard-menu");
      if (!isMenuButton && !isMenu) {
        setOpenMenuId(null);
      }
    };
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setOpenMenuId(null);
      }
    };
    if (openMenuId) {
      document.addEventListener("mousedown", handleClose);
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("mousedown", handleClose);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [openMenuId]);

  function handleShowForm() {
    setShowForm((prev) => !prev);
  }
  const handleDeleteClick = (card) => {
    setDeleteCard(card);
    setShowDeleteModal(true);
    setOpenMenuId(null);
  };
  return (
    <div className="space-y-4">
      {showEditModal && <EditForm onEdit={onEdit} />}
      {showDeleteModal && <DeleteCard onDelete={onDelete} />}

      {/* Create Card Form */}
      <button
        onClick={handleShowForm}
        className="px-6 py-2.5 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-400 transition flex items-center justify-center gap-2 text-sm border border-black"
      >
        <span className="text-base">
          <img src={plusIcon} alt="plus icon" />
        </span>
        {showForm ? "Create Card" : "Hide Card"}
      </button>
      {!showForm && <CreateCardModal onCreateCard={onCreateCard} />}

      {/* Filters */}
      <FlashcardFilters
        hideMastered={hideMastered}
        setHideMastered={setHideMastered}
        showCategoryDropdown={showCategoryDropdown}
        setShowCategoryDropdown={setShowCategoryDropdown}
        onShuffle={() => {}}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        flashcards={flashcards}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="border border-black rounded-xl p-4 bg-white hover:shadow-md shadow-custom transition flex flex-col"
          >
            {/* Question */}
            <h3 className="font-bold text-gray-900 mb-3 text-sm border-b-2">
              {card.question}
            </h3>

            {/* Answer*/}
            <div className="mb-3 pb-3 border-b-2 border-gray-200 flex-grow">
              <p className="text-xs text-gray-600 mb-1">Answer:</p>
              <p className="text-sm text-gray-800 line-clamp-3">
                {card.answer}
              </p>
            </div>

            {/* Mastery*/}
            <div className="flex items-center justify-between mt-auto">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">
                {card.category}
              </span>

              <div className="flex items-center gap-2 flex-1 ml-4">
                {card.mastery === 5 ? (
                  <span className="px-2.5 py-1 bg-cyan-400 text-gray-900 rounded-full text-xs font-semibold flex items-center gap-1">
                    ✓ Mastered 5/5
                  </span>
                ) : (
                  <>
                    <div className="flex items-center gap-2 flex-1">
                      <div className="flex-1 h-1.5 bg-gray-200 rounded-full max-w-[100px]">
                        <div
                          className="h-full bg-gray-900 rounded-full transition-all"
                          style={{ width: `${(card.mastery / 5) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium text-gray-600">
                        {card.mastery}/5
                      </span>
                    </div>
                  </>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenMenuId(openMenuId === card.id ? null : card.id);
                  }}
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition"
                >
                  <MoreVertical size={16} className="sm:w-4.5 sm:h-4.5" />
                </button>

                {openMenuId === card.id && (
                  <FlashcardMenu
                    onEdit={(e) => {
                      e.stopPropagation();
                      openEditModal(card);
                      setOpenMenuId(null);
                    }}
                    onDelete={(e) => {
                      e.stopPropagation();
                      e.stopPropagation();
                      handleDeleteClick(card);
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
