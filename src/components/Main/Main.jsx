// API: interface de aplicação de programação é um serviço que permite consumir dados de um outro local, como: imagens, titulos, descrição.
// AXIOS: é uma biblioteca que permite fazer a ligação entre o cliente (a gente) e o servidor (banco de dados) back.

import React, { useState, useEffect } from "react";
import axios from 'axios' // lib que vamos ultilizar para fazer a ponte do cliente para o servidor
import * as S from './StyleMain'


export default function Main() {
    // Esse array [] vai guardar as informações que forem puxadas da API
    const [data, setData] = useState([])

    // ASYNC é uma função assincrona com a página, ou seja, não depende da página 
    // para ser ativada, depende somente dos dados vindo da api
    const getData = async () => {
        const resp = await axios.get('https://api.sampleapis.com/movies/mystery')
        setData(resp.data)


        console.log(resp)
    }

    // await: espere
    // get: pegue/pegar
    // axios: vai ser a nossa ponte
    // espere o axios pegar os dados da API e guarde dentro da variável "resp"
    // SetData é a forma de atualizar o estado (data)
    // resp são as informações da api
    // Pegue os dados da API e coloque no meu ESTADO

    // O hook useEffect permite que executamos efeitos colaterais em nosso componente funcional
    // neste caso queremos carregar os dados assim que o componente for montado
    // o array vazio [] garante que o efeito seja executado apenas uma única vez
    useEffect(() => {
        getData();
    }, []);

    return (
        <S.Cinema>
            {data.map((item) => (

                <S.Filmes>
                    <S.titulos>{item.title}</S.titulos>
                    <img src={item.posterURL} alt="Titulos da categoria Mystery" />
                </S.Filmes>

            ))}
        </S.Cinema>
    )
}
