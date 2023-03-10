import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./components/home/Home";
import AccountsPage from "./components/accounts/AccountsPage";
import TransactionPage from "./components/transactions/TransactionPage";
import Header from "./components/header/Header";

function App() {

    return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/accountspage" element={<AccountsPage/>}/>
          <Route path='/transactionpage/:id' element={<TransactionPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
