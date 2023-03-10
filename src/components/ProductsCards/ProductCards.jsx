import React from 'react'
import { Link } from 'react-router-dom';
import "./index.scss"


const ProductCards = ({data}) => {
      console.log(data.title);
  return (
   
    <div className="home__card">
        <img src={data.imgPath} alt="model" className="img__card" />
      <div className="home__card-description">
        <p>{data.title}</p>
        <button>
          <Link to={`/products/${data.id}`}>Comprar Look</Link>
        </button>
      </div>
    </div>

  );
};

export default ProductCards