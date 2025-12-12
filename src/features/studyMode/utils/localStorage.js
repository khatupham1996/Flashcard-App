const STORAGE_KEY = "flashcards_data";
export const saveFlashcardsToStorage = (flashcards) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(flashcards));
  } catch (e) {
    console.error("Error saving to localStorage:", e);
  }
};
export const loadFlashcardsFromStorage = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch (e) {
    console.error("Error loading from localStorage:", e);
    return null;
  }
};
export const clearFlashcardsFromStorage = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error("Error clearing localStorage:", e);
  }
};
// Check if there's saved data in localStorage
export const hasStoredFlashcards = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) !== null;
  } catch (error) {
    console.error("Error checking localStorage:", error);
    return false;
  }
};
