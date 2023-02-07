import React from 'react'
import './transaction.css'

function Transaction(prop) {

  const postingDate = prop.data.postingDate;
  const message = prop.data.details.detail1;
  const accountNumber = prop.data.counterPartyAccount.accountNumber;
  const amount = prop.data.amount.value

  return (
    <div className='transaction_list_data'>
        <div className='data_children'>{postingDate} </div>
        <div className='data_children'>{message}</div>
        <div className='data_children'>{accountNumber}</div>
        <div className='data_children'>-</div>
        <div className='data_children'>{amount}</div>
    </div>
  )
}

export default Transaction