import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from "./pages/landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
