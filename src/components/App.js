import { useState } from "react";
import { Logo } from "./Logo";
import { Forms } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

export default function App() {
  /* This being here is lifting the state as the app component is the closest 
  parent component for the form and packing components. */
  const [ items, setItems ] = useState([]); 
  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  }
  const handleDeleteItem = (id) => {
    setItems((items) => items.filter(item=>item.id !== id));
  }
  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  const handleClearAll = () => {
    const confirm = window.confirm('Are you sure you want to clear all items?');
    if(confirm) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Forms onAddItems={ handleAddItems }/>
      <PackingList 
        items={ items } 
        onDeleteItem={ handleDeleteItem } 
        onHandleToggleItem={ handleToggleItem }
        onClearAll= { handleClearAll }/>
      <Stats 
        items={ items }/>
    </div>
  )
}