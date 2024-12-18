import { ItemDetailContainer } from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/navbar";
import { Item } from "./components/Item";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
          </Routes>
        </BrowserRouter>
      </div>

    </>
  );
}

export default App;
