import React from 'react';
import './TransferFund.scss'
const TransferFund = (props) => {
  return (
    <div className="container-Transfer">
    <form onSubmit={props.addMove}>
      <input type="text" required/>
      <button>Transfer</button>
    </form>
    </div>
  )
}

export default TransferFund;
