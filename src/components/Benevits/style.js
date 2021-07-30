import styled from 'styled-components'

export const Aside = styled.aside`
  font-size: 1.5rem;
  transition: all 300ms ease-in-out;
  background: #ee6167;
  display:flex;
  justify-content: space-between;
  
`

export const Nav = styled.nav`
 background: #EC5056;
  color: #fff;
  height: 100%;
  width: 0;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.9;
  overflow-x: hidden;
  padding-top: 60px;
  &.opneSidebar{
    transition: 0.7s;
  width: 230px;
  }

`

export const Button = styled.button`
color:white;
background:#c50008;
border-radius:15px;
cursor:pointer;
`
export const Img = styled.img`
height:25px;
margin:0;
vertical-align:middle;
`

export const Wallet = styled.div`
display:flex;
margin:15px;
height:150px;
overflow: scroll;
@media (max-width: 600px) {
  &::-webkit-scrollbar {
    display: none;
  }
  }
  
width:100%;
`
export const Title = styled.h6`
margin:10px 20px;
`
export const LockedCard = styled.div`
background:white;
display:flex;
justify-content:center;
flex-direction:column;
height:115px;
width:115px;
border-radius:15px;
margin:20px 10px;

`

export const UnlockedCard = styled.div`
border:solid 1px red;
background:white;
display:flex;
justify-content:center;
flex-direction:column;
height:115px;
width:115px;
border-radius:15px;
margin:20px 10px;
`
export const LockedImg = styled.img`
height:60px;
margin:0 auto;
`
export const UnlockedImg = styled.img`
width:115px;
margin:0 auto;
`
export const Banner = styled.div`
    margin-top: -31px;
    background-color: ${props => props.color ? props.color : 'white'};
    border-radius: 15px 15px 0 0;
    height: 42px;
`
export const P = styled.p`
font-size:10px;

`

export const Wanted = styled.button`
background:#EC5056;
color:white;
border:none;
height:25px;
width:80px;
margin:15px 18px;
border-radius:10px;
`
