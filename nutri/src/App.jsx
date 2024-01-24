import React from "react";
import { useState } from "react";
import FoodData from "./resources/FoodData.js";
import Search from "./Component/Search.jsx";
import Foodbox from "./component/FoodBox.jsx";
import './App.css'

function App() {
  const [search, setSearch] = useState("");

  const filteredSearch = FoodData.filter((e) => {
    return e.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <h1>Pro-nutrition App</h1>
      <Search setSearch={setSearch} />
      {filteredSearch.length <= 0 ? (
        <h3>No data found</h3>
      ) : (
        filteredSearch.map((e, i) => <Foodbox key={i} ele={e} index={i} />)
      )}
    </>
  );
}

export default App;