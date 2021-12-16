import React, { useState } from 'react'

import { IState as Props } from "../App";

interface IProps {
  items: Props["items"],
  setitems: React.Dispatch<React.SetStateAction<Props["items"]>>
}
const AddItemForm: React.FC<IProps> = ({ items, setitems }) => {
  
  const [input, setInput] = useState({
    name: "",
    amount: "",
    note: ""
  })

  const handleCange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (!input.name || !input.amount) return
    setitems([
      ...items,
      {
        name: input.name,
        amount: parseInt(input.amount),
        note: input.note
      }
    ])
    setInput({
      name: "",
      amount: "",
      note:""
    })
  }

  return (
    <div className='add-item-form'>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type="text"
          value={input.name}
          name="name"
          placeholder="Name"
          className="add-item-form-input"
          onChange={handleCange}
        />
        <input
          type="number"
          value={input.amount}
          name="amount"
          placeholder="Amount"
          className="add-item-form-input"
          onChange={handleCange}
        />
        <textarea
          value={input.note}
          name="note"
          placeholder="Note"
          className="add-item-form-input"
          onChange={handleCange}
        />
        <input
          type="submit"
          value="Add to List"
          className="add-item-form-btn"
        />
      </form>
    </div>
  )
}

export default AddItemForm