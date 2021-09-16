import React from 'react';
import Produtos from './components/Produtos';
import Carrinho from './components/Carrinho';

class App extends React.Component {
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

  render(){

  return (
    <div id ='div-root' >
      <div>
  
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

      </div>
    </div>
    );
  }
}

export default App;
