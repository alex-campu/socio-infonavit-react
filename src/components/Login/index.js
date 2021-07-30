import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  LogosWrapper, Family, Logo, LoginWrapper,
  Button, WhiteShape, RedShape, Input, PopupContainer,
  Okay
} from './style'
import { logIn } from '../../features/axios/LoginReq'
import logo from '../../logo.png'
import family from '../../familia.png'

const Popup = (props) => {
  return (
    props.open
      ? <PopupContainer onClick={() => { props.setOpen(false) }}>
        <h4>Usuario o contraseña incorrecto</h4>
        <h6>Intenta nuevamente</h6>
        <Okay>
          Ok
        </Okay>
        </PopupContainer>
      : ''
  )
}

export const Login = (props) => {
  const [userData, setUserData] = useState({ email: '', password: '' })
  const Dispatch = useDispatch()
  const doLogin = (user) => Dispatch(logIn(user))
  const error = useSelector((state) => state.error)
  const [visible, setVisible] = useState(true)
  const [data, setData] = useState(true)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (error === true) {
      setOpen(true)
    }
  }, [error, data])
  const handeForm = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }
  const postData = (userData) => {
    doLogin(userData)
    setData(userData)
    console.log(error)
    if (error === true) {
      setOpen(true)
    }
  }
  const em = useRef()
  const ps = useRef()
  const handleEnter = e => {
    e.which = e.which || e.keyCode
    if (e.which === 13) {
      if (e.target.name === 'email') {
        ps.current.focus()
      } else {
        postData(userData)
      }
    }
  }

  return (
    <>
      <Popup open={open} setOpen={setOpen} />
      <LogosWrapper>
        <Family src={family} />
        <Logo src={logo} />
      </LogosWrapper>
      <WhiteShape />
      <RedShape />
      <LoginWrapper>
        <Input
          ref={em} onKeyUp={handleEnter} type='email' name='email' placeholder='Email'
          onChange={handeForm} value={userData.email}
        />

        <Input
          ref={ps} onKeyUp={handleEnter} type='password' name='password' placeholder='Contraseña'
          onChange={handeForm} value={userData.password}
        />

        <Button
          onClick={() => {
            postData(userData)
          }}
          disabled={!(userData.email !== '' && userData.password !== '')}
        >
          Entrar
        </Button>
      </LoginWrapper>
    </>
  )
}
