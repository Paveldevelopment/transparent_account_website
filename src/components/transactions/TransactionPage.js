import React, { useState } from 'react'
import './transactionPage.css'
import { useParams } from 'react-router'
import TransactionsList from './TransactionsList'
import AccountBalance from './AccountBalance'
import TransactionFilter from './TransactionFilter'



function TransactionPage() {
  const [ filterData, setFilterData] = useState('')
  const { id } = useParams()

  const dataFiltered = (dat) => {
    setFilterData(dat)
  }
  
  console.log('FILTERDATA', id,  filterData)

  return (
    <div>
        <div className='account_name'>
             <div className='account_name_text'>Transparentní účet: {id}</div>
        </div>
        <AccountBalance/>
        <TransactionFilter dataFiltered={dataFiltered}/>
        <div className='transaction_list_parent_flex'>
          <div className='transaction_list_header'>
            <div className='header_children date'>Datum</div>
            <div className='header_children' >Zpráva</div>
            <div className='header_children'>Protistrana </div>
            <div className='header_children'>Detail transakce</div>
            <div className='header_children'>Částka</div>
          </div>
          <div>
            <TransactionsList filterData={filterData}/>
          </div>
        </div>
       
    </div>
  )
}

export default TransactionPage