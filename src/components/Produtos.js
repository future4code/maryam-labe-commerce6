import React from 'react';
import styled from 'styled-components';

const Div = styled.div `
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0px 16px;
}
`

class Produtos extends React.Component {

  render(){
        return (
        <Div>
            <div><p> Quantidade de produtos:</p></div>
            <label> Ordenação:
                <select>
                    <option>Crescente</option>
                    <option>Decrescente</option>
                </select>
            </label>
        </Div>
    );
  }
}

export default Produtos;
