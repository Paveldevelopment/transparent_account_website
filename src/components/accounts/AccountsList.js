import React from 'react'
import Account from './Account'

function AccountsList({data}) {
  return (
    <>
      {data && 
        data.map(dat => {
          return (
            <Account data={dat}/>
          )
          
        })
      }
        
    </>
  )
}

export default AccountsList