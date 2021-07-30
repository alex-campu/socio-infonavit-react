import styled from 'styled-components'
import { fadeIn } from '../styles/animations'

export const Launch = styled.div`
position:relative;
  background: #EC5056;
  width:90%;
  margin:5%;
  height:95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5% solid #ffffff;
  @media (min-width: 900px) {
    width:96%;
    margin:2%;
    border: 2% solid #ffffff;
  }
`

export const Img = styled.img`
${fadeIn({ time: '1.5s' })}
  display:block;
  margin:auto;
  width: 65%;
`
