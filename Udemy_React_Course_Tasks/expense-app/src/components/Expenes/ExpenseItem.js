// import ExpenseDate from './ExpenseDate';
// import './ExpenseItem.css';
// import Card from './Card';

// function ExpenseItem(props) {

//     // const expenseDate = new Date(2021,11,10);
//     // const expenseTitle = "Car Insurance";
//     // const expenseAmount = 294.47; 

//     // const month = props.date.toLocaleString("en-US", { month: "long" });
//     // const day = props.date.toLocaleString("en-US", { day: "2-digit" });
//     // const year = props.date.getFullYear();

//     return (
//         <Card className="expense-item">

//             {/* <div>{props.date.toLocaleString("en-US", {month:"long"})}</div>
//                 <div>year</div>
//                 <div>day</div> */}
//             {/* <div>{month}</div>
//                 <div>{year}</div>
//                 <div>{day}</div> */}
//             <ExpenseDate date={props.date} />
//             <div className="expense-item_description">
//                 <h2>{props.title}</h2>
//                 <div className="expense-item_price">${props.amount}</div>
//             </div>
//         </Card>
//     );
// }

// export default ExpenseItem;


import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {



  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;