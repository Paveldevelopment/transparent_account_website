import React, { useState, useEffect } from 'react'


function useFetchJSON(path) {
    const [data, setData] = useState('')


    const getData = () => {
        fetch(path,
          {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          }
        )
          .then(function(response){
            console.log('response', response)
            return response.json();
          })
          .then(function(myJson) {
            setData(myJson);
          });
      }

      useEffect(()=>{
        getData()
      }, [])


  return { data }
}


export default useFetchJSON