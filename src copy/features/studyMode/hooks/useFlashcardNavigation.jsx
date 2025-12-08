import { useState } from "react";

export default function useFlashcardNavigation(totalCards) {
  const [currentCard, setCurrentCard] = useState(1);

  const handlePrevious = () => {
    setCurrentCard((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentCard((prev) => Math.min(prev + 1, totalCards));
  };

  return { currentCard, handlePrevious, handleNext };
}
