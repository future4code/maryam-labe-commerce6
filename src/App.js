import React from 'react';
import Produtos from './components/Produtos';
import Carrinho from './components/Carrinho';
import Filtrar from './compoments/Filtrar.js';
import Fim from './compoments/Fim';
import styled from 'styled-components';
import {Cabecalho} from './compoments/Cabecalho';





  const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 16px;
  border-radius: 14px;

  `
  const Img = styled.img`
  width: 200px ;
  height: 200px;

  `
  
  const Footer = styled.footer `
   *{
    margin: 0;
    padding: 0;
  }
    display: flex;
    background-color: aqua;
    border-radius: 8px;
    margin: 10px;
    padding: 10px;
    box-shadow: 2px 2px 5px #fff ;
  `
  const Carrinhoo = styled.div `
  *{
    padding: 0;
    margin: 0;
  }
  background-color: aqua;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 15px;
  margin: 12px;
  border-radius: 12px;
  `

 class App extends React.Component { 
     
   state= {
    cards: [
      {
        id: 1,
        fotoProduto: 'https://i.pinimg.com/originals/3f/4e/84/3f4e84c4c7e88c2f968f527912a5094d.png',
        nomeProduto: 'Camisa dos Planetas',
        precoProduto: 'R$80,00',
      },
      {
        id: 2,
        fotoProduto: 'https://a-static.mlcdn.com.br/1500x1500/calca-de-bebe-masculino-suedine-espacial-up-baby/babyshoponline/52664/fb80f4f558609ca547a5cc2d7ba4e2b5.jpg',
        nomeProduto: 'Calça Espacial',
        precoProduto: 'R$110.90',
      },
      {
        id: 3,
        fotoProduto: 'https://th.bing.com/th/id/OIP.eNTiUYDhQ7OaZypBoA_YdwHaHa?pid=ImgDet&rs=1',
        nomeProduto: 'Mochila Universo',
        precoProduto: ' R$149,99',
      },
      {
        id: 4,
        fotoProduto: 'https://ae01.alicdn.com/kf/Hfbce6ec25a5a48bd8f0a929ad98fa8bbR/Casacos-com-capuz-qnpqyx-mulheres-homens-inverno-tops-3d-astronauta-traje-espacial-pul-ver-moletom-terror.jpg_q50.jpg',
        nomeProduto: 'Casaco Astronauta - Nasa',
        precoProduto: 'R$250.50',
      },
      {
        id: 5,
        fotoProduto: 'https://cdn.awsli.com.br/600x700/809/809830/produto/57318954/42934e4cee.jpg',
        nomeProduto: 'Meia Extraterrestre',
        precoProduto: 'R$25.67',
      },
      {
        id: 6,
        fotoProduto: 'https://th.bing.com/th/id/R.4e6e30892208f21453fdf6f5cfee0b85?rik=ygXtIq%2bspkaKUg&pid=ImgRaw&r=0',
        nomeProduto: 'Sapato Constelação',
        precoProduto: 'R$190,00',
      },
    ],
    filtro:'',
  };


  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  };

  render() {
    const listaDeProdutos = this.state.cards.map((card) => {
      return (
        <Produtos
          fotoProduto = {card.fotoProduto} nomeProduto = {card.nomeProduto} precoProduto = {card.precoProduto}
        />
      );
    });
    return <>
      <div>
       <Cabecalho/>

        <nav>
         <Filtrar />
        </nav>

        <p> Quantidade de produtos:{listaDeProdutos.length}</p>
        <label> Ordenação:
          <select
          name = "ordem"
          value = {this.state}
          onChange = {this.updateOrdem}

          >
            <option value = "asc" >Crescente</option>
            <option value = "desc">Decrescente</option>
          </select>
        </label>

        <main>
           <Main> {listaDeProdutos} </Main>
        </main>
           
       <Carrinhoo> <Carrinho/> </Carrinhoo>
        <Footer>
          <Fim />
        </Footer>
        
      </div>
    </>
}
}
export default App ;