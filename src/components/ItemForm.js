import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({handleItemSubmit, itemCategoryInput, itemNameInput, handleNameInputChange, handleCategoryInputChange }) {
  return (
    <form className="NewItem" onSubmit = {handleItemSubmit}>
      <label>
        Name:
        <input type="text" name="name"  onChange = {handleNameInputChange} value = {itemNameInput}/>
      </label>

      <label>
        Category:
        <select name="category" onChange = {handleCategoryInputChange} value = {itemCategoryInput} >
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
