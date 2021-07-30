import styled from 'styled-components'

export const LogosWrapper = styled.div`
background:#EC5056;
height:50vh;
margin-top:-10%;
  justify-content: center;
  align-items: center;
  box-shadow: -50px -5px 0 0 red;
  @media (min-width: 450px) {
    height:450px;
  }
`
export const Family = styled.img`
display:block;
width:50%;
margin:10% auto 5%;
padding-top:10%;
@media (min-width: 450px) {
  width:200px;
  margin:4px auto 10px;
  }
`
export const Logo = styled.img`
height:10%;
margin:0 auto 5%;
display:block;
@media (min-width: 450px) {
  height:60px;
  }
`
export const LoginWrapper = styled.div`
overflow:hidden;
height:50vh;
margin-top:10%;
  justify-content: center;
  align-items: center;
  @media (min-width: 450px) {
    margin-top:10px;
  }

`
export const WhiteShape = styled.div`
        height: 289px;
    margin-left: 83px;
    margin-top: -34px;
    width: 492px;
    background: white;
    border-radius: 100%;
    @media (min-width: 450px) {
  display:none;
  }
`
export const RedShape = styled.div`
     height: 289px;
      margin-left: -231px;
    margin-top: -512px;
    width:500px;
    background: #ec5056;
    border-radius: 100%;
    @media (min-width: 450px) {
  display:none;
  }
`

export const Input = styled.input`
border-top:none;
border-left:none;
border-right:none;
border-color:#c5b7b78c;
display:block;
width:70%;
max-width:260px;
margin:5% auto;
padding-top:1%;
@media (min-width: 450px) {
  margin:20px auto;
  }
`
export const Password = styled.input`
border-top:none;
border-left:none;
border-right:none;
`
export const Button = styled.button`
display:block;
margin:5% auto;
width:50%;
max-width:200px;
height:30px;
cursor: pointer;
color:white;
background:#EC5056;
border-radius:50px;
border:none;
`

export const PopupContainer = styled.div`
    width: 200px;
    height: 148px;
    background: white;
    position: fixed;
    left: 0;
    top: 40%;
    right: 0;
    margin: 0 auto;
    border-radius:14px;
    text-align:center;
    cursor:pointer;
    border:#00000017 solid 3px;
    &:hover {
     background-color: #ededed;
    }
    /* display:${props => props.visible ? 'block' : 'none'} */
`

export const Okay = styled.div`
border-top:#0000003d solid 1px;
margin:10px 0;
padding:6px;
`
