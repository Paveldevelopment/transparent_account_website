import React from 'react'
import './transaction.css'

function Transaction(prop) {

  const postingDate = prop.data.postingDate;
  

  return (
    <div className='transaction_list_data'>
        <div className='data_children'>{postingDate} </div>
        <div className='data_children'>{prop.data.details.detail1}</div>
        <div className='data_children'>{prop.data.counterPartyAccount.accountNumber}</div>
        <div className='data_children'>-</div>
        <div className='data_children'>{prop.data.amount.value}</div>
    </div>
  )
}

export default Transaction