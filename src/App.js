import React from 'react';
import Produtos from './components/Produtos';
import Carrinho from './components/Carrinho';
import Filtrar from './compoments/Filtrar.js';
import Fim from './compoments/Fim';
import styled from 'styled-components';
import Logoo from './compoments/Img/logo.jpg'



  const Header = styled.div`

  *{
    margin: 0;
    padding: 0;
  }
    display: flex;
    background-color: black;
    color: white;
    border-radius: 14px;
    margin: 15px;
    padding: 10px;
    box-shadow: 2px 2px 5px #fff ;

  `
  const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 16px;

  `
  const Img = styled.img`
  width: 200px ;
  height: 200px;

  `
  const Logo = styled.img `
  width: 110px ;
  height: 90px;
  background-color: aqua;
  border-radius: 50px;
  padding: 0;

 

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
      
   }

  render() {
    return <>
      <div>
        <Header> 
        <Logo title="my-img" src={Logoo} alt="my-img" />
        <h1>Labe E-commerce</h1>
        </Header>

        <nav>
         <Filtrar />
        </nav>

        <div> 
         <Produtos/> 
         <cardProdutos/>
       </div>

        <Main>
           <Img src="https://i.pinimg.com/originals/3f/4e/84/3f4e84c4c7e88c2f968f527912a5094d.png"/>
           <div>
             <p>Camisa dos planetas </p>
             <p>
                R$80,00
             </p>
             <button>Adicionar ao Carrinho</button>
           </div>
       
       <Img src="https://a-static.mlcdn.com.br/1500x1500/calca-de-bebe-masculino-suedine-espacial-up-baby/babyshoponline/52664/fb80f4f558609ca547a5cc2d7ba4e2b5.jpg"/>
           <div>
             <p>Calça Espacial </p>
             <p>
                R$110.90
             </p>
             <button>Adicionar ao Carrinho</button>
           </div>
           <Img src="https://th.bing.com/th/id/OIP.eNTiUYDhQ7OaZypBoA_YdwHaHa?pid=ImgDet&rs=1"/>
           <div>
             <p>Bolsa Espacial </p>
             <p>
                R$150.34
             </p>
             <button>Adicionar ao Carrinho</button>
           </div>
           <Img src="https://ae01.alicdn.com/kf/Hfbce6ec25a5a48bd8f0a929ad98fa8bbR/Casacos-com-capuz-qnpqyx-mulheres-homens-inverno-tops-3d-astronauta-traje-espacial-pul-ver-moletom-terror.jpg_q50.jpg"/>
           <div>
             <p>Casaco Astronauta - Nasa </p>
             <p>
                R$250.50
             </p>
             <button>Adicionar ao Carrinho</button>
           </div>
           <Img src="https://cdn.awsli.com.br/600x700/809/809830/produto/57318954/42934e4cee.jpg"/>
           <div>
             <p>Meia Espacial </p>
             <p>
                R$25.67
             </p>
             <button>Adicionar ao Carrinho</button>
           </div>
           <Img src="https://th.bing.com/th/id/R.4e6e30892208f21453fdf6f5cfee0b85?rik=ygXtIq%2bspkaKUg&pid=ImgRaw&r=0"/>
           <div>
             <p>Sapato Espacial </p>
             <p>
                R$76.70
             </p>
             <button>Adicionar ao Carrinho</button>
           </div>
      </Main>
           
       <Carrinhoo> <Carrinho/> </Carrinhoo>
        <Footer>
          <Fim />
        </Footer>
        
      </div>
    </>
}
}
export default App ;