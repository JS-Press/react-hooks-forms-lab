import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [itemNameInput, setItemNameInput] = useState('')
  const [itemCategoryInput, setItemCategoryInput] = useState("Produce")

  function handleItemSubmit(e){
    e.preventDefault()
    // const newName = e.target.name.value
    // const newCategory = e.target.category.value
    const newItem = {id: itemNameInput, name: itemNameInput, category: itemCategoryInput}
    const newItemData = [...items, newItem]
    // console.log(newItemData)
    setItems(newItemData)
    
  }

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList 
      items={items} 
      handleItemSubmit={handleItemSubmit} 
      itemNameInput ={itemNameInput}
      setItemNameInput = {setItemNameInput}
      itemCategoryInput = {itemCategoryInput}
      setItemCategoryInput = {setItemCategoryInput}
      />
    </div>
  );
}

export default App;
