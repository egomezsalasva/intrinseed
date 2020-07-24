//IMPORTS
//-Modules
import React, {useRef, useEffect} from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import gsap from 'gsap'
//-Images
import logoText from './imgs/logoText.png'

//STYLED
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #F2F5F2;
  }
`
const LogoCircle = styled.div`
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  width: 140px;
  height: 140px;
  background: #F2F5F2;
  border: 0 solid rgba(247,250,246,0.50);
  box-shadow: -3px -3px 6px 0 #FAFCF9, 3px 3px 6px 0 #EBEDEA;
  border-radius: 50%;
`
const LogoText = styled.img`
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%) scale(0.425);
  
`

//MAIN COMPONENTS
function App() {

  let logoCirleRef = useRef()
  var tl = gsap.timeline({repeat: -1})
  useEffect(() => {
    tl.to(logoCirleRef, {duration: 50, rotate: 360})
  }, [tl])
  

  return (
    <>
      <GlobalStyle/>
      <LogoCircle ref={el => logoCirleRef = el}/>
      <LogoText src={logoText}/>
    </>
  )
}
export default App;
