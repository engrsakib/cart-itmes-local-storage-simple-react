import React, { useEffect, useState } from 'react';
import Botol from './Botol'

const Botols = () => {
    const [botols, setbotols] = useState([]);
    useEffect(()=>{
        fetch(
          "https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/refs/heads/main/public/bottles.json"
        )
        .then(res => res.json())
        .then(data => setbotols(data));
    },[]);

    return (
      <div className="flex flex-wrap gap-8 items-center justify-center">
        {/* <h1>{botols.length}</h1> */}
        {botols.map((botol) => (
          <Botol key={botol.id} botol={botol}></Botol>
        ))}
      </div>
    );
};

export default Botols;