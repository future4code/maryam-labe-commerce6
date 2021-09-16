import React from 'react';

class Produtos extends React.Component {
    // state = {
    //     cardProdutos: [
    //         {
    //         id: 1,
    //         name: "Produto 1",
    //         value: 100.0,
    //         imageUrl: "https://picsum.photos/200/200",
    //         },
    //         {
    //         id: 2,
    //         name: "Produto 2",
    //         value: 150.0,
    //         imageUrl: "https://picsum.photos/200/200",
    //         },
    //         {
    //         id: 1,
    //         name: "Produto 3",
    //         value: 200.0,
    //         imageUrl: "https://picsum.photos/200/200",
    //         },
  
    //     ]};
    

  render(){

        return (
        <div>
            <div> 
                <p> Quantidade de produtos:</p>
                <label> Ordenação:
                    <select>
                        <option>Crescente</option>
                        <option>Decrescente</option>
                    </select>
                </label>
            <div><cardProdutos/></div>
            </div>
            <div></div>
        </div>
    
    );
  }
}

export default Produtos;
