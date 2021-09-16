import React from 'react';
import Produtos from './components/Produtos';
import Carrinho from './components/Carrinho';
import Inicio from './compoments/Inicio.js';
import Filtrar from './compoments/Filtrar.js';
import Fim from './compoments/Fim';
import styled from 'styled-components';


  // state = {
  //   cardProdutos: [
  //       {
  //       id: 1,
  //       name: "Produto 1",
  //       value: 100.0,
  //       imageUrl: "https://picsum.photos/200/200",
  //       },
  //       {
  //       id: 2,
  //       name: "Produto 2",
  //       value: 150.0,
  //       imageUrl: "https://picsum.photos/200/200",
  //       },
  //       {
  //       id: 1,
  //       name: "Produto 3",
  //       value: 200.0,
  //       imageUrl: "https://picsum.photos/200/200",
  //       },

  //   ]};
  const Header = styled.div`

  *{
    margin: 0;
    padding: 0;
  }
    display: flex;
    background-color: aqua;
    border-radius: 14px;
    margin: 15px;
    padding: 4px;
    box-shadow: 2px 2px 5px #fff ;

  `


 class App extends React.Component { 
  render() {
    return (
      <div>
        <Header> 
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdribbble.com%2Fshots%2F5926397-Ecommerce-Logo-Design&psig=AOvVaw3IqVCAUuvohjqCSHkh01bt&ust=1631837775030000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjzivWbgvMCFQAAAAAdAAAAABAD" />
        <h1>Labe E-commerce</h1>
        </Header>
        <nav>
         <Filtrar />
        </nav>
        <div> 
         <Produtos/> 
         <cardProdutos/>
       </div>
        <main>
         <img src ="https://picsum.photos/200/200" ></img>
         <p>PRODUTO X</p>
         <img src ="https://picsum.photos/200/200" ></img>
         <p>PRODUTO X</p>
         <img src ="https://picsum.photos/200/200" ></img>
         <p>PRODUTO X</p>
       </main>
       <div> <Carrinho/> </div>
        <footer>
          <Fim />
        </footer>
        
      </div>
    );
}
}
export default App ;