import React, { useState } from 'react';
import './App.css';
import AddItemForm from './components/AddItemForm';
import List from './components/List';

export interface IState {
  items: {
    name: string,
    amount: number,
    note?: string
  }[]
}

function App() {
  const [items, setitems] = useState<IState["items"]>([
    {
      name: "eggs",
      amount: 12,
      note: "great deal!"
    }
  ])
  
  return (
    <div className="App">
      <h1>Shopping Lists</h1>
      <List items={items} />
      <AddItemForm items={items} setitems={setitems} />
    </div>
  );
}

export default App;
