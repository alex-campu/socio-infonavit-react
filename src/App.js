import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import { alreadyLogIn, LoggedOut } from './features/axios/LoginReq'
import { Login } from './components/Login'
import { useSelector, useDispatch } from 'react-redux'
import { LaunchScreen } from './components/LaunchScreen/index'
import { GlobalStyle } from './components/styles/GlobalStyles'
import { Ring } from 'react-awesome-spinners'
import { Benevits } from './components/Benevits/'
function App () {
  const Dispatch = useDispatch()
  const [pageOnLoad, setPageOnLoad] = useState(true)
  const [fakeLoading, setFakeLoading] = useState(true)
  const auth = useSelector((state) => state.authenticated)

  useEffect(() => {
    setTimeout(() =>
      setFakeLoading(false), 2000)
  }, [])

  window.onload = function () {
    setPageOnLoad(false)
  }
  const logged = () => Dispatch(alreadyLogIn())
  const notLogged = () => Dispatch(LoggedOut())
  useEffect(() => {
    const auth = window.localStorage.getItem('access')
    if (auth !== null) {
      logged()
    } else {
      notLogged()
    }
  }, [])
  return (
    <>
      <GlobalStyle />
      {pageOnLoad !== false && fakeLoading !== false && auth === false
        ? (
          <>
            <LaunchScreen />
          </>
          )
        : !auth && <Login />}
      {auth && <Benevits />}
    </>
  )
}

export default App
