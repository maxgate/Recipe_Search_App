// import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import FilterOptions from "./components/FilterOptions";
import RecipeCard from "./components/RecipeCard";
import RecipeList from "./components/RecipeList";

function App() {
  // const [count, setCount] = useState(0);
  interface SearchBarProps {
    onSearch: (query: string) => void;
  }

  return (

    <div>
      <Navbar />
     <SearchBar /> 
     <FilterOptions /> 
      <RecipeCard /> 
      <RecipeList/> 
    </div>
  );
}

export default App;
