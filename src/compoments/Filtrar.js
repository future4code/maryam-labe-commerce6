import React from "react";
import styled from "styled-components";

const Div = styled.div`background-color: aqua;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
padding: 15px;
margin: 12px;
border-radius: 12px;
*{
    padding: 0;
    margin: 0;

}`





class Filtrar extends React.Component {
    render() {
        return (
            <Div>
                <h3>Filtros</h3>
                <div>
                <label>
                     "Valor mínimo:"
                     <input type="number" value="" />
                 </label>
                </div>
                
                 <div>
                 <label>
                     "Valor máximo:"
                    
                     <input type="number" value="" />
                 </label>
                 </div>
                
                 <div>
                 <label>
                     "Buscar por nome:"
                     <input type="number" value="" />
                 </label>
                 </div>
            </Div>
        )
    }
}

export default Filtrar;