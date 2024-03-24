import styled from "styled-components";

export const Cinema = styled.section`
    background-color: #1d1d1d;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding-top: 8vh;
`

export const Filmes = styled.div`
    width: 40vh;
    height: 60vh;
    margin: 0.5rem;
    padding: 2rem;
    border: 2px solid #8B0000;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color: #ffffff;
    background-color: #000000;
`

export const titulos = styled.h2`
    font-size: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`