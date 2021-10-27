import React from 'react'
import styled from 'styled-components'

function ItemRefrigerante({tipo, valor, index}) {
    return (
        <ContainerItemRefri>
            <div className="item-refri">
                <input type="radio" name="refrigerante" value={tipo} id={tipo}/>
                <label for={tipo}>{tipo}</label>
            </div>

            <p className="valor-refri">${valor}</p>
        </ContainerItemRefri>
    )
}

export const ContainerItemRefri = styled.div`

    display: flex;
    justify-content: space-between;
    width: 279px;
    margin: 0 auto;
    color: #fff;
    margin-bottom: 16px;
    .item-refri{
        display: flex;
        input{
            margin-right: 18px;
        }
    }
`

export default ItemRefrigerante
