import Home from "./pages/Home";
import Navbar from './components/Navbar'
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
