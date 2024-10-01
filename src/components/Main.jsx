import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';


function Main() {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const response = await fetch(
        'https://fakestoreapi.com/products',
        {mode: "cors"}
      );
      const fullData = await response.json();
      setData(fullData);
    } catch(err){
      console.log(err);
      return;
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <main className="bg-slate-900 py-10 px-5 flex flex-col items-center">
      <Outlet context={{data}}/>
    </main>
  )
  
}

export default Main;