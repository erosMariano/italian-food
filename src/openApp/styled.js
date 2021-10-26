import styled from "styled-components";

export const Main = styled.main`
   width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    height: 100vh;

    justify-content: center;

    .folha-direita{
        position: absolute;
        left: 20px;
        bottom: 80px;
        animation: animateFolhaDireita 5s alternate infinite;
    }

    .folha-esquerda{
        position: absolute;
        right: 60px;
        bottom: 0px;
        animation: animateFolhaEsquerda 5s alternate infinite;
    }
    overflow-x: hidden;

    @keyframes animateFolhaEsquerda{
        from{
            bottom: 200px;
            transform: rotate(0deg);
        }
        to{
            bottom:500px;
            transform: rotate(180deg);
        }
    }

    @keyframes animateFolhaDireita{
        from{
            bottom: 200px;
            transform: rotate(0deg);
        }
        to{
            bottom:400px;
            transform: rotate(180deg);
        }
    }
`

export const TextMain = styled.div`
    font-family: 'Oleo Script', cursive;
    font-size: 1.875rem;
    color: #fff;
    margin-top:47px;
    width: 318.05px;
`

export const ButtonMenu = styled.button`
    font-family: 'Oleo Script', cursive;
    background: #ff1a00;
    font-size: 2.375rem;
    color: #fff;
    padding: 10px 25px;
    border-radius: 30px;

    margin-right: 18px;
    margin-left: 18px;
`

export const Line = styled.div`
    width: 68.15px;
    height: 5px;
    background: #fff;
`
export const ContainerBtn = styled.div`
    margin-top: 41px;
    display: flex;
    justify-content: center;
    align-items: center;
`