import React from 'react';
import Inicio from './compoments/Inicio.js';
import Filtrar from './compoments/Filtrar.js';
import Fim from './compoments/Fim';


 class App extends React.Component { 
  render() {
    return (
      <div>
        <header> 
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdribbble.com%2Fshots%2F5926397-Ecommerce-Logo-Design&psig=AOvVaw3IqVCAUuvohjqCSHkh01bt&ust=1631837775030000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjzivWbgvMCFQAAAAAdAAAAABAD" />
        <Inicio/>
        </header>
        <nav>
         <Filtrar />
        </nav>
        <footer>
          <Fim />
        </footer>
        
      </div>
    );
}
}
export default App ;