import { useEffect, useMemo, useState } from "react";

import useFlashcardNavigation from "./hooks/useFlashcardNavigation";
import useMastery from "./hooks/useMastery";
import useToast from "./services/toastService";
import Flashcard from "./components/Flashcard";
import FlashcardFilters from "./components/FlashcardFilters";
import ActionButtons from "./components/ActionButtons";
import NavigationBar from "./components/NavigationBar";
import StatisticsSidebar from "./components/StatisticsSidebar";
import ToastContainer from "./components/ToastContainer";
import AllCardsView from "./components/AllCardsView";
import { initialFlashcards } from "./utils/flashcardsData";
import Header from "./components/Header";
import {
  loadFlashcardsFromStorage,
  saveFlashcardsToStorage,
} from "./utils/localStorage";

export default function StudyMode() {
  // Load flashcards from localStorage on initial render
  const [flashcards, setFlashcards] = useState(() => {
    const stored = loadFlashcardsFromStorage();
    return stored || initialFlashcards;
  });
  // const [flashcards, setFlashcards] = useState(initialFlashcards);

  const [viewMode, setViewMode] = useState("study");
  const [showAnswer, setShowAnswer] = useState(false);
  const [showCardMenu, setShowCardMenu] = useState(false);
  const [hideMastered, setHideMastered] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  // Filter flashcards based on selected category
  const filteredFlashcards = useMemo(() => {
    let filtered = flashcards;
    console.log(filtered);
    //filter by category
    if (selectedCategory !== "All Categories") {
      filtered = filtered.filter((card) => card.category === selectedCategory);
    }
    //Filter by mastery
    if (hideMastered) {
      filtered = filtered.filter((card) => card.mastery < 5);
    }
    return filtered;
  }, [flashcards, selectedCategory, hideMastered]);

  const { toasts, addToast, removeToast } = useToast();
  const { currentCard, handleNext, handlePrevious, setCurrentCard } =
    useFlashcardNavigation(filteredFlashcards.length);

  const { markMastered, resetMastery, setMasteryLevel } = useMastery(addToast);

  // Get current flashcard data
  const currentFlashcard = filteredFlashcards[currentCard - 1];

  //Reset to first card when filters change
  useEffect(() => {
    if (
      filteredFlashcards.length > 0 &&
      currentCard > filteredFlashcards.length
    ) {
      setCurrentCard(1);
    }
  }, [currentCard, setCurrentCard, filteredFlashcards.length]);

  // Sync mastery level when card changes
  useEffect(() => {
    if (currentFlashcard) {
      setMasteryLevel(currentFlashcard.mastery);
    }
  }, [currentCard, setMasteryLevel]);

  // Save flashcards to localStorage whenever they change
  useEffect(() => {
    saveFlashcardsToStorage(flashcards);
  }, [flashcards]);

  // Calculate statistics
  const statistics = useMemo(() => {
    return {
      totalCards: flashcards.length,
      mastered: flashcards.filter((card) => card.mastery === 5).length,
      inProgress: flashcards.filter(
        (card) => card.mastery > 0 && card.mastery < 5
      ).length,
      notStarted: flashcards.filter((card) => card.mastery === 0).length,
    };
  }, [flashcards]);
  const { totalCards, mastered, inProgress, notStarted } = statistics;
  // Shuffle card
  const shuffleCard = () => {
    if (filteredFlashcards.length === 0) return;
    const randomIndex = Math.floor(Math.random() * filteredFlashcards.length);
    setCurrentCard(randomIndex + 1);
    setShowAnswer(false);
  };
  // Handle mastered button
  const handleMasteredClick = () => {
    if (!currentFlashcard) return;

    const updatedFlashcards = flashcards.map((card) => {
      if (card.id === currentFlashcard.id && card.mastery < 5) {
        return { ...card, mastery: card.mastery + 1 };
      }
      return card;
    });

    setFlashcards(updatedFlashcards);

    const updatedCard = updatedFlashcards.find(
      (card) => card.id === currentFlashcard.id
    );
    if (updatedCard) {
      setMasteryLevel(updatedCard.mastery);
    }
    markMastered();
  };

  // Handle reset button
  const handleResetClick = () => {
    if (!currentFlashcard) return;

    const updatedFlashcards = flashcards.map((card) => {
      if (card.id === currentFlashcard.id) {
        return { ...card, mastery: 0 };
      }
      return card;
    });

    setFlashcards(updatedFlashcards);
    resetMastery();
    setShowAnswer(false);
  };

  // Handle navigation with mastery sync
  const handleNavigationNext = () => {
    handleNext();
    setShowAnswer(false);
    if (currentCard < flashcards.length) {
      setMasteryLevel(flashcards[currentCard].mastery);
    }
  };

  const handleNavigationPrevious = () => {
    handlePrevious();
    setShowAnswer(false);
    if (currentCard > 1) {
      setMasteryLevel(flashcards[currentCard - 2].mastery);
    }
  };

  // Handle create card
  const handleCreateCard = (newCard) => {
    const newFlashcard = {
      ...newCard,
      id: Date.now(),
      mastery: 0,
    };
    setFlashcards([...flashcards, newFlashcard]);
    addToast("Card created successfully!");
  };
  // Handle Edit card
  const handleEditCard = (updatedCard) => {
    setFlashcards((prevCards) =>
      prevCards.map((card) => (card.id === updatedCard.id ? updatedCard : card))
    );
    addToast("Card updated sucessfully.");
  };
  // Handle delete card
  const handleDeleteCard = (cardId) => {
    setFlashcards((prevCards) =>
      prevCards.filter((card) => card.id !== cardId)
    );
    addToast("Card deleted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center p-3 sm:p-4 md:p-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="bg-orange-50 max-w-[1440px] min-h-[960px] px-8 md:px-32 py-4 rounded-3xl">
          <Header setViewMode={setViewMode} viewMode={viewMode} />
          <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-6">
            {/* Main Content */}
            <div className="flex-1 bg-white rounded-lg p-3 sm:p-4 md:p-8 border border-black shadow-custom">
              {viewMode === "study" ? (
                <>
                  <FlashcardFilters
                    hideMastered={hideMastered}
                    setHideMastered={setHideMastered}
                    showCategoryDropdown={showCategoryDropdown}
                    setShowCategoryDropdown={setShowCategoryDropdown}
                    onShuffle={shuffleCard}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    flashcards={flashcards}
                  />

                  {filteredFlashcards.length > 0 && currentFlashcard ? (
                    <>
                      <Flashcard
                        showAnswer={showAnswer}
                        setShowAnswer={setShowAnswer}
                        showCardMenu={showCardMenu}
                        setShowCardMenu={setShowCardMenu}
                        masteryLevel={currentFlashcard.mastery}
                        question={currentFlashcard.question}
                        answer={currentFlashcard.answer}
                        category={currentFlashcard.category}
                        onEdit={() => addToast("Card updated successfully.")}
                        onDelete={() => addToast("Card deleted.")}
                      />

                      <ActionButtons
                        onMastered={handleMasteredClick}
                        onReset={handleResetClick}
                      />

                      <NavigationBar
                        currentCard={currentCard}
                        totalCards={filteredFlashcards.length}
                        onPrevious={handleNavigationPrevious}
                        onNext={handleNavigationNext}
                      />
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                      <p className="text-xl font-semibold text-gray-900 mb-2">
                        No cards available
                      </p>
                      <p className="text-sm text-gray-600">
                        {selectedCategory !== "All Categories"
                          ? `No cards found in "${selectedCategory}" category`
                          : "Try adjusting your filters or create new cards"}
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <AllCardsView
                  flashcards={flashcards}
                  onCreateCard={handleCreateCard}
                  hideMastered={hideMastered}
                  setHideMastered={setHideMastered}
                  showCategoryDropdown={showCategoryDropdown}
                  setShowCategoryDropdown={setShowCategoryDropdown}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  onEdit={handleEditCard}
                  onDelete={handleDeleteCard}
                />
              )}
            </div>

            {/* Statistics Sidebar */}
            {viewMode === "study" && (
              <StatisticsSidebar
                totalCards={totalCards}
                mastered={mastered}
                inProgress={inProgress}
                notStarted={notStarted}
              />
            )}
          </div>
        </div>
      </div>

      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </div>
  );
}
