import React from 'react'
import moment from 'moment/moment'
import 'moment/locale/cs' 
import useFetchJSON from '../../hooks/useFetchJSON'
import './accountBalance.css'



function AccountBalance() {
    const { data }  = useFetchJSON('../data/ta-2002222222-balance-response.json')


    // Date
    const momentDate = moment(data.date).format('LLL')
    moment.locale('cs')
   

  return (
    <div className='account_balance_parent'>
        <h1>Stav účtu</h1>
        <p><strong>Aktuální zůstatek:</strong> {data ?  [data.amount.value, ' ', data.amount.currency]  : ''} </p>
        <p><strong>Poslední pohyb:</strong> {data ? momentDate : ''}</p>
    </div>
  )
}

export default AccountBalance