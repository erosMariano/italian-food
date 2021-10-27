import React, { useState } from 'react'



function ItemPizza({sabor, valor}) {
    const [quantidadePizzas, setQuantidadePizzas] = useState(0)

    function handleAddValor(){
        setQuantidadePizzas(quantidadePizzas + 1)
    }
    

    function handleRemoverValor(){
        setQuantidadePizzas(quantidadePizzas - 1)
        if(quantidadePizzas <= 0){
            setQuantidadePizzas(0)
        }
    }

    
    return (
            <div className="itens-pizzas">
                <ul>
                    <li>
                        <span>{sabor}</span>

                        <div className="quantidade">
                            <div className="valor">R${valor}</div>
                            <img src="/images/icons/plus.svg" alt="icone plus" onClick={handleAddValor}/>
                            <p>{quantidadePizzas}</p>
                            <img src="/images/icons/menos.svg" alt="icone menos" onClick={handleRemoverValor}/>
                        </div>
                    </li>
                </ul>
            </div>
    )
}

export default ItemPizza
