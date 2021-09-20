import "./App.css";
import Tiptap from './component/Tiptap/Tiptap.jsx'

function App() {
  return (
    <div className="App">
      <Tiptap buttons={['bold', 'italic']} buttonsClassName={'buttons-scss-class-name'} editorClassName={'editor-container-scss-class-name'} />
    </div>
  );
}

export default App;