import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }
  body{
    font-family: "Cinzel Decorative", sans-serif;
    font-style: normal;
    font-weight: 100;
  }
`

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  )
}