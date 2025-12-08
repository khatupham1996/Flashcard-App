import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const FlashcardContext = createContext();

export const useFlashcard = () => {
  const context = useContext(FlashcardContext);
  if (!context) {
    throw new Error("useFlashcard must be used within FlashcardProvider");
  }
  return context;
};

export const FlashcardProvider = ({ children }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [category, setCategory] = useState("");
  const [deleteCard, setDeleteCard] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const openEditModal = (card) => {
    setEditingCard(card);
    setQuestion(card.question);
    setAnswer(card.answer);
    setCategory(card.category);
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
    setEditingCard(null);
    setQuestion("");
    setAnswer("");
    setCategory("");
  };

  const handleUpdateCard = (onEdit) => {
    if (question.trim() && answer.trim() && category.trim() && editingCard) {
      onEdit({
        ...editingCard,
        question,
        answer,
        category,
      });
      closeEditModal();
    }
  };

  const value = {
    showEditModal,
    editingCard,
    question,
    answer,
    category,
    deleteCard,
    showDeleteModal,
    setAnswer,
    setQuestion,
    setCategory,
    openEditModal,
    closeEditModal,
    handleUpdateCard,
    setShowDeleteModal,
    setDeleteCard,
  };

  return (
    <FlashcardContext.Provider value={value}>
      {children}
    </FlashcardContext.Provider>
  );
};

FlashcardProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
