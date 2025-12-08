import { FlashcardProvider } from "./features/studyMode/context/FlashcardContext";
import StudyMode from "./features/studyMode/StudyMode";

function App() {
  return (
    <FlashcardProvider>
      <StudyMode />
    </FlashcardProvider>
  );
}

export default App;
