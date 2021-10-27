import styled from "styled-components";

export const Main = styled.main`
    padding-bottom: 30px;
    max-width: 500px;
    margin: 0 auto;
    position: relative;
    
    .pizzaImg{
        .imagem-pizza{
            position: absolute;
            border-radius: 100%;
            left: -23px;
            top: -23px;
            width: 128px;
        }
    }

    .container-list{
        margin-bottom: 32px;
    }
    .itens-pizzas{
        color: #fff;
        font-family: 'Poppins', sans-serif;
        max-width: 279px;
        margin: 0 auto;
        

        ul{
            margin-bottom: 16px;
        }
        ul li{
            display: flex;
            justify-content:space-between;
            align-items:center;

            div{
                display: flex;
            }
        }

        .quantidade{

            .valor{
                margin-right: 16px;
            }
            p{
                color: #fff;
                margin: 0 16px;
            }
            img{
                cursor: pointer;
            }
        }
    }

    .line1,.line2{
        position: fixed;
        top: 60%;
        transform: translateY(-50%);
    }

    .line1{
        left: 15px;
    }

    .line2{
        right: 15px;
    }


    .ponto-massa{
        display: flex;
        width:207px;
        margin: 0 auto;
        justify-content: space-between;
        margin-bottom: 32px;
        div{
            color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;

            input{
                margin-top: 5px;
            }
        }
    }

    a{
        background-color: red;
        color: #fff;
        
        padding: 0 12px;
        height:34px;
        width: 200px;
        margin: 0 auto;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 5px;

    }

`