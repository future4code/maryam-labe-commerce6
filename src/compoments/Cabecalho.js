import React from "react";
import styled from "styled-components";
import Logoo from "./Img/logo.jpg"

const Header = styled.h1`
display: flex;
align-items: center;
background-color: agua;
border-radius: 14px;
margin: 15px;
padding: 1px 20px;
box-shadow: 2px 2px 5px #fff ;

 *{
     margin: 0;
     padding: 0;
 }
`
const Logo = styled.img `
width: 120px;
height: 90px;
background-color: aqua;
border-radius: 50px;
padding: 0;
`

export function Cabecalho() {
    return (
    <Header>
        <span> <Logo title="my-img" src={Logoo} alt="my-img" /> </span>
        <span> <i>Labe E-commerce</i></span>
    </Header>
    )
}