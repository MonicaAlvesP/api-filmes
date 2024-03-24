import React from "react";
import Enigmax from '../../assets/EnigmaxCine.png'
import * as S from './StyleHeader'

export default function Header() {
    return (
        <S.Headerbg>
            <a href="#">
                <S.Img src={Enigmax} alt="Logo tipo CineMeu" />
            </a>

            <S.List>
                <S.Li>
                    <S.Ancora href="">Novidades</S.Ancora>
                </S.Li>
                <S.Li>
                    <S.Ancora href="">Filmes</S.Ancora>
                </S.Li>
                <S.Li>
                    <S.Ancora href="">Séries</S.Ancora>
                </S.Li>
            </S.List>

            <S.BarradeBuscar>
                <S.Buscar type="text" placeholder="Pesquisar..." />
                <S.Bt type="submit">enviar</S.Bt>
            </S.BarradeBuscar>
        </S.Headerbg>
    )
}