import React from 'react'

import { IState as Props } from "../App";

const List: React.FC<Props> = ({ items }) => {

  const defaultUrl: string = 'https://as1.ftcdn.net/v2/jpg/02/61/30/98/1000_F_261309854_8agY8DEyEr0xo9gVjqFp3DPv4NmfmiGl.jpg'

  const renderList = (): JSX.Element[] => {
    return items.map((item, index) => {
      return (
        <li className="list" key={index}>
          <div className="list-header">
            <img
              src={defaultUrl}
              alt=""
              className="list-img"
            />
            <h2>{item.name}</h2>
          </div>
          <p>amount: {item.amount}</p>
          <p className="list-note">{item.note}</p>
        </li>
      )
    })
  }

  return (
    <ul>
      { renderList()}
    </ul>
  )
}

export default List
