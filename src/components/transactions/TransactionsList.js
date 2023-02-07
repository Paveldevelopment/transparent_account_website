import React from 'react'
import useFetchJSON from '../../hooks/useFetchJSON'
import Transaction from './Transaction'
import './transactionList.css'



function TransactionsList({filterData}) {
    const { data }  = useFetchJSON('../data/ta-2002222222-transactions-response.json')

    return (
      <div className='transactionList_parent'>

          {data && ( data.filter(filt =>  filt.details.detail1.includes(filterData) ||
              filt.postingDate.includes(filterData) ||
              filt.counterPartyAccount.accountNumber.includes(filterData)))
              .map((dat, index ) => {
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