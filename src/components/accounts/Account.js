import React from 'react'
import { Link } from 'react-router-dom'
import './account.css'

function Account({data}) {

  return (
      <div className='list_parent'>
          <Link className='content_text' to={`/transactionpage/${data.identification.iban}`}>{data.name}</Link>
          <div className='content_text'>{data.identification.iban}</div>
      </div>
  )
}


export default Account