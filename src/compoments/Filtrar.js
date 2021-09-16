import React from "react";


class Filtrar extends React.Component {
    render() {
        return (
            <div>
                <h3>Filtros</h3>
                 <label>
                     "Valor mínimo:"
                     <br />
                     <input type="number" value="" />
                 </label>
                 <br />
                 <br />
                 <label>
                     "Valor máximo:"
                     <br />
                     <input type="number" value="" />
                 </label>
                 <br />
                 <br />
                 <label>
                     "Buscar por nome:"
                     <br />
                     <input type="number" value="" />
                 </label>
            </div>
        )
    }
}

export default Filtrar;