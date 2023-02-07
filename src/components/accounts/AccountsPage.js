import React from 'react'
import useFetchJSON from '../../hooks/useFetchJSON'
import './accountspage.css'



import AccountsList from './AccountsList'

function Accounts() {
  const { data } = useFetchJSON('../data/ta-accounts-response.json')

  console.log('Accountss', data)

  return (
    <div>
      <div className='title'>
        <h1>Přehled transparentních účtů</h1>
      </div>
 

        
          <div className='header_container' >
            <div className='account_marker'>Název účtu</div>
            <div className='account_marker'>IBAN</div>
          </div>
        
      
        
          <AccountsList data={data}/> 
        
        
   

      

    </div>
  )
}

export default Accounts