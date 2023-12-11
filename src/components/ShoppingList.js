import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

 

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleSearchChange(event) {
  setSearch(event.target.value)
  }

 
  
  const itemsToDisplay = items.filter((item) => {
    const categorySearch = selectedCategory === "All" ? true : item.category === selectedCategory
    const searchSearch = search.trim() === "" ? true : item.name.toLowerCase().includes(search.toLowerCase())

  return categorySearch && searchSearch
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onSearchChange={handleSearchChange} search={search} selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
