import React from 'react'
import Account from './Account'

function AccountsList({data}) {
  return (
    <>
      {data && 
        data.map((dat, index) => {
          return (
            <React.Fragment key={index}>
               <Account data={dat}/>
            </React.Fragment>
          )
          
        })
      }
        
    </>
  )
}

export default AccountsList