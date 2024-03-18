import "./App.css";
import CreateForm from "./components/CreateForm";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />

        <Routes>
          <Route path='/create' element={<CreateForm />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
