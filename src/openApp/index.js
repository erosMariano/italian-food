import React from 'react'
import { Link } from 'react-router-dom';

import * as S from "./styled";


function OpenApp() {
    return (
        <S.Main>
            <div className="container-logo">
                <img src="/images/logo.png" alt="logo da Italian Food" />
            </div>

            <S.TextMain>
                <p>Pressione o botão abaixo para acessar o cardápio.</p>  
            </S.TextMain>

            <S.ContainerBtn>
                <S.Line></S.Line>
                <S.ButtonMenu>
                    <Link to="/cardapio">Menu</Link>
                </S.ButtonMenu>
                <S.Line></S.Line>
            </S.ContainerBtn>

            <img src="/images/icons/folha.png" alt="Icone folha" className="folha-direita"/>
            <img src="/images/icons/folha.png" alt="Icone folha" className="folha-esquerda"/>
        </S.Main>
    )
}

export default OpenApp
