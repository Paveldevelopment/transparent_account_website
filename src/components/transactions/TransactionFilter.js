import React, {useEffect, useState} from 'react'
import './transactionFilter.css'

function TransactionFilter({dataFiltered}) {
    const [filterData, setFilterData] = useState('')

   
    useEffect(() => {
        dataFiltered(filterData)
    }, [filterData])



   
  return (
    <div>
        <form>
            <label>
                <input
                    className='transaction_page_filter'
                    type='text'
                    placeholder='Zadejte hledaný text'
                    onChange={(e) => setFilterData(e.target.value)}
                    value={filterData}
                />
            </label>
        </form>
      
    </div>
  )
}

export default TransactionFilter