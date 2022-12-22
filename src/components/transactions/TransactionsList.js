import React, { useEffect } from 'react'
import useFetchJSON from '../../hooks/useFetchJSON'
import Transaction from './Transaction'
import './transactionList.css'



function TransactionsList({filterData}) {
    const { data }  = useFetchJSON('../data/ta-2002222222-transactions-response.json')

    console.log('2Transactions', data )


  /*  data && data.filter(filt => filt.details.detail1.includes('pe')).map((dat, index ) => {
      console.log('filter loop', dat)
   }) */
 

  /*  
   <div className='data_children'>{postingDate} </div>
      
    
        <div className='data_children'></div>
        <div className='data_children'>{prop.data.amount.value}</div>


  || filt.amount.value.includes(filterData)  || filt.postingDate.includes(filterData)

  filt.details.detail1.includes(filterData) || filt.counterPartyAccount.accountNumber.includes(filterData)
  */




  return (
    <div className='transactionList_parent'>

        {data && ( data.filter(filt =>  filt.details.detail1.includes(filterData) || filt.postingDate.includes(filterData) || filt.counterPartyAccount.accountNumber.includes(filterData)  ) ).map((dat, index ) => {
          return (
            <>
            <Transaction key={index} data={dat}/>
          
            </>
          )    
        })}
    </div>
  )
}

export default TransactionsList