import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from "./Component/Contact";


function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Contact />
      </BrowserRouter>
    </div>
  );
}

export default App;
