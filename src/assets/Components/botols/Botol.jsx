import React from 'react';

const botol = ({botol}) => {
    const { category, id, img, name, price, quantity, ratings, ratingsCount, seller, shipping, stock} = botol;

    console.log(botol);
    return (
      <div className='col-span-4'>
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src={img}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-left">
            <h2 className="card-title">{name}</h2>
            <p>Stock: {stock}</p>
            <div className="card-actions justify-between">
                <button className='btn btn-outline hover:bg-transparent hover:text-black'>Price: {price}</button>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default botol;