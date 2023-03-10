import React from 'react'
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu'
import ProductCards from '../../components/ProductsCards/ProductCards'
import Search from '../../components/Search/Search'
import './index.scss'


const Home = ({data}) => {
  console.log(data);
  // console.log("testando branch home");
  // console.log("testando branch teste");
  // console.log("testando branch teste");
  // console.log("testando branch home");
  // console.log("testando branch home");
  return (
    <div className="home">
        <HeaderMenu />
        <Search />
           {/* exeutando a logica de MAP */}
      <div className="home__products">
      { data.map((product) => (
      <ProductCards  key={product.id} data={product}/>
      ))}
      </div>       
    </div>
  );
}

export default Home
// para retornar um HTML no react usamos o () na funçao
// key , faz com que o elemento seja unico , para referencia cada elemento chamamos pelo ID