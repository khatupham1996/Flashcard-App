import { useState } from "react";

export default function useMastery(addToast) {
  const [masteryLevel, setMasteryLevel] = useState(0);

  const markMastered = () => {
    if (masteryLevel < 5) {
      addToast("Progress updated!");
    } else {
      addToast("Card mastered! 🎉");
    }
  };

  const resetMastery = () => {
    setMasteryLevel(0);
    addToast("Progress reset.");
  };

  return { masteryLevel, markMastered, resetMastery, setMasteryLevel };
}
