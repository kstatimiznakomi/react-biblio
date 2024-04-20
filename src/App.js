
import './biblioOld.css';
import Header from './components/Header';
import Catalog from './pages/Catalog';
import React from 'react';
import axios from 'axios';
import AppContext from './context';
import { Route, Routes } from "react-router-dom"

import { createContext, useContext, useState } from "react";

function App() {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    async function getAuth(){

        const [] = await Promise.all([
          axios.get('http://localhost:8080/catalog/api/1')
              .then((response ) => {
                console.log(response.data);
              })
        ]);


    }
    //getAuth();
  }, []);
  React.useEffect(() => {
    async function fetchData(){
      try{
        const [itemsResponse] = await Promise.all([
          axios.get('http://localhost:8080/catalog/api/1')
        ]);
        setItems(itemsResponse.data);
      }
      catch (error){
        alert('Ошибка при запросе данных ;(');
        console.error(error);
      }
    }
    fetchData();
  }, []);
    
  
  return (
      <AppContext.Provider
      value={{
        items
      }}>
        <div className="App">

        <Header/>
        <Catalog

        />
        </div>
      </AppContext.Provider>

  );
}

export default App;
