import { useState } from "react";
import { ListItem } from "./Item";

export const PackingList = ({ items, onDeleteItem, onHandleToggleItem, onClearAll }) => {
    const [ sortBy, setSortBy ] = useState('input');
    let sortedItems;
    if(sortBy === 'input') sortedItems = items;
    if(sortBy === 'description') sortedItems = items
        .slice()
        .sort((a,b) => a.description.localeCompare(b.description));
    if(sortBy === 'packed') sortedItems = items
        .slice()
        .sort((a,b) => Number(a.packed) - Number(b.packed)
    );
    return (
    <div className="list">
    <ul>
        { sortedItems.map(item => <ListItem 
        item={ item } 
        key={ item.id } 
        onDeleteItem={ onDeleteItem }
        onHandleToggleItem={ onHandleToggleItem }/>
        ) 
        }
    </ul>
    <div className="actions">
        <select value={ sortBy } onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Sort by input order</option>
        <option value="description">Sort by description</option>
        <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={ onClearAll }>Clear list</button>
    </div>
    </div>
    )
}