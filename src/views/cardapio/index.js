import React from 'react'
import { Link } from 'react-router-dom'
import ItemPizza from '../../components/itemPizza'
import ItemRefrigerante from '../../components/itemRefrigerante'
import TituloSecao from '../../components/titleSection'
import * as S from "./styled"


function Cardapio() {

    const pizzas = {
        itemPizza: [
            {sabor: "Brócolis", valor: 25},
            {sabor: "Calabresa", valor: 20},
            {sabor: "Calaqueijo", valor: 25},
            {sabor: "Califórnia", valor: 25},
            {sabor: "Escarola", valor: 25},
            {sabor: "Frango com catupiry", valor: 25},
            {sabor: "Marguerita", valor: 25},
            {sabor: "Mineira", valor: 25},
            {sabor: "Mussarela", valor: 20},
            {sabor: "Tarantela", valor: 25},
            {sabor: "Toscana", valor: 25},
        
        ],
    }

    const bebidas = {
        tipoBebida: [
            {tipo: "Coca Cola 2L", valor: 14},
            {tipo: "Coca Cola 2,5L", valor: 15},
            {tipo: "Coca Cola 350ml", valor: 5},
            {tipo: "Guaraná Antártica 2L", valor: 12},
            {tipo: "Guaraná Antártica 350ml", valor: 5},
            {tipo: "Sukita Uva 2L", valor: 10},
            {tipo: "Sukita Laranja 2L", valor: 10},

        ]
    }





    return (
        <S.Main>

            <img src="/images/line-vertical.svg" alt="Line" className="line1"/>
            <img src="/images/line-vertical.svg" alt="Line" className="line2"/>
            <div className="pizzaImg">
                <img src="/images/circle-pizza.png" alt="imagem de pizza" className="circle-pizza"/>
                <img src="/images/circle.png" alt="imagem de pizza" className="imagem-pizza"/>
            </div>

            <TituloSecao titulo="Menu de pizzas"/>

            <div className="container-list">
                {pizzas.itemPizza.map((pizza, index) => {
                    return(
                        <ItemPizza sabor={pizza.sabor} valor={pizza.valor}  key={index}/>  
                    ); 
                })}
            </div>

            <TituloSecao titulo="Ponto da massa"/>
            
            <div className="ponto-massa">
                <div>
                    <label for="crocante">Crocante</label>
                    <input type="radio" id="crocante" value="Crocante" name="ponto-massa"/>
                </div>

                <div>
                    <label for="aoPonto">Ao ponto</label>
                    <input type="radio" value="Ao ponto" name="ponto-massa" id="aoPonto"/>
                </div>
            </div>


            <TituloSecao titulo="Ponto de bebidas"/>

            <div className="container-list">
                {bebidas.tipoBebida.map((bebida, index) => {
                    return(
                        <ItemRefrigerante tipo={bebida.tipo} valor={bebida.valor}  key={index}/>  
                    ); 
                })}
            </div>

            <Link to="/confirmarPedido">Confirmar Pedido</Link> 
        </S.Main>
    )
}

export default Cardapio
