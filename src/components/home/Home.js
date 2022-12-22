import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

function Home() {
  return (
    <>
    <div className='home_page_text'>
    <Link to='/accountspage'>Přehled transparentních účtů</Link>
    </div>
    </>
  )
}

export default Home