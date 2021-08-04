import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, handleItemSubmit, itemNameInput, setItemNameInput, itemCategoryInput, setItemCategoryInput }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedWord, setSearchedWord] = useState("")

  

//  console.log(itemNameInput)
//  console.log(itemCategoryInput)

 function handleNameInputChange(e){
  setItemNameInput(e.target.value)
 }

 function handleCategoryInputChange(e){
  setItemCategoryInput(e.target.value)
 }

function handleSearchChange(e){
  setSearchedWord(e.target.value)
}

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const searchedItems = items.filter((item) => {
    if (searchedWord === "") return true;
    return item.name == searchedWord;
  })

  const itemsToDisplay = searchedItems.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm 
      handleItemSubmit= {handleItemSubmit} 
      itemNameInput ={itemNameInput} 
      itemCategoryInput ={itemCategoryInput} 
      handleCategoryInputChange ={handleCategoryInputChange}
      handleNameInputChange = {handleNameInputChange}

      />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange = {handleSearchChange} searchedWord = {searchedWord} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
