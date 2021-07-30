import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   body {
    height: 100vh;
    margin: 0 auto;
    overflow:hidden;
    background:#f9f9f9;
    width: 100%;
   opacity: ${props => (props.blur ? 0.9 : 1)}     
        }
    div#root {
    overflow: hidden;
    }
    .ring {
    position: absolute;
    z-index: 5;
    top: 60%;
    left: 50%;
}
button:disabled {
    background-color: #cccccc;
  color: #666666; 
}
`
