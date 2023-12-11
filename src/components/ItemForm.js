import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm( {onItemFormSubmit, search, setSearch}) {

  const [formData, setFormData] = useState({name: "", category:"Produce"});

  function handleSubmit(event){
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: formData.name,
      category:formData.category,
    }
    onItemFormSubmit(newItem);
    
  }

  function handleformData(event) {
    setFormData({...formData, name: event.target.value})
  }
  function handleCategorySub(event) {
    setFormData({...formData, category: event.target.value})
  }
  
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleformData}  />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategorySub}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
