import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from './AllRoutes';
// import LeftSidebar from './components/LeftSidebar/LeftSidebar';
// import RightSidebar from './components/RightSidebar/RightSidebar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
