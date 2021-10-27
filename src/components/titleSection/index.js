import React from 'react'
import * as S from "./styled"
function TituloSecao({titulo}) {
    return (
        <S.TitleSection>
        <img src="/images/icon-vermelho-bars.svg" alt="barras vermelhas" />
            {titulo}
        <img src="/images/icon-vermelho-bars.svg" alt="barras vermelhas" />
        </S.TitleSection>
    )
}

export default TituloSecao
