import React from 'react';
import './LoanCards.css'

const LoanCards = ({ borrower, borrowDate, itemName, returnDate}) => {
  return (
    <div className='loan-card'>
      <div className='top-row'>
        <p className='loan-to-name'>Loaned to: {borrower}</p>
        <p>Loaned on {borrowDate}</p>
      </div>
      <div className='second-row'>
        <p>{itemName}</p>
        <p>Return Date: {returnDate}</p>
      </div>
      <button>Item Returned</button>
    </div>
  )
}

export default LoanCards;
