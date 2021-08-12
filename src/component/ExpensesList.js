import React from 'react';
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
    if (props.items.length === 0) {
      return <h2 className='expenses-list__fallback'> no expenses found.</h2>;
    }
  
    return (
      <ul className='expenses-list'>
        {props.items.map((value) => (
          <ExpenseItem
            key={value.id}
            title={value.title}
            amount={value.amount}
            date={value.date}
          />
        ))}
      </ul>
    );
  };
  
  export default ExpensesList;