import AddEmployee from "./component/AddEmployee";
import Footer from "./component/Footer";
import Header from "./component/Header";
import ListEmployee from "./component/ListEmployee";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<ListEmployee />} />
          <Route path="/employee" element={<ListEmployee />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/add-employee/:id" element={<AddEmployee />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

