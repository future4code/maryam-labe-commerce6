// import React from 'react';
// import styled from 'styled-components';

// const Div = styled.div `
//     display: flex;
//     -webkit-box-align: center;
//     align-items: center;
//     -webkit-box-pack: justify;
//     justify-content: space-between;
//     padding: 0px 16px;
// }
// `

// class Produtos extends React.Component {

//   render(){
//         return (
//         <Div>
//             <div><p> Quantidade de produtos:</p></div>
//             <label> Ordenação:
//                 <select>
//                     <option>Crescente</option>
//                     <option>Decrescente</option>
//                 </select>
//             </label>
//         </Div>
//     );
//   }
// }

// export default Produtos;

import React from 'react'
import styled from 'styled-components'


// import {IconeComContador} from '../IconeComContador/IconeComContador'

// import iconeCoracaoBranco from '../../img/favorite-white.svg'
// import iconeCoracaoPreto from '../../img/favorite.svg'
// import iconeComentario from '../../img/comment_icon.svg'
// import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

const CardContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
  
`

const EstiloCarrinho = styled.button`
  height: 40px;
  display: flex;
  padding-left: 10px;
  border-radius: 12px;
  align-content: center;
  align-items: center;
  justify-content: space-between;
`

const PostMain = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: center;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Produtos extends React.Component {
//   state = {
//     curtido: false,
//     numeroCurtidas: 1,
//     comentando: false,
//     numeroComentarios: 0
//   }

//   onClickCurtida = () => {
//     let novoNumeroCurtidas

//     if(this.state.curtido) {
//       novoNumeroCurtidas = this.state.numeroCurtidas - 1
//     } else {
//       novoNumeroCurtidas = this.state.numeroCurtidas + 1
//     }

//     this.setState({
//       curtido: !this.state.curtido,
//       numeroCurtidas: novoNumeroCurtidas

//     })
//     console.log('Curtiu!')
//   }


  render() {
    // let iconeCurtida

    // if(this.state.curtido) {
    //   iconeCurtida = iconeCoracaoPreto
    // } else {
    //   iconeCurtida = iconeCoracaoBranco
    // }

    // let componenteComentario

    // if(this.state.comentando) {
    //   componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    // }

    return <CardContainer>
      {/* <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader> */}

      <PostPhoto src={this.props.fotoProduto} alt={'Imagem do post'}/>

      <PostMain>
          <div>   {this.props.nomeProduto} </div>
          <div>   {this.props.precoProduto} </div>
            
      </PostMain>
      <div>
        <EstiloCarrinho>Adicionar ao carrinho</EstiloCarrinho>
      </div>
    </CardContainer>
  }
}

export default Produtos

