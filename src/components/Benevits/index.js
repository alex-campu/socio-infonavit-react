import React, { useState, useEffect } from 'react'
import { currentWallets, loading, success } from '../../features/axios/BenevitsReq'
import { useSelector, useDispatch } from 'react-redux'
import { Menu } from 'styled-icons/feather/'
import {
  Title, Aside, Nav, Button, Img, Wallet, LockedCard, UnlockedCard,
  LockedImg, Wanted, UnlockedImg, Banner, P
} from './style'
import './pure.css'
import logo from '../../logo.png'
import { logInError, serverError } from '../../features/axios/LoginReq'
import { Loading } from '../styles/animations'

import Axios from '../../features/axios/configAxios'
const config = {
  headers: { Authorization: `Bearer ${window.localStorage.getItem('access')}` }
}

const SideBar = ({ openClass }) => {
  const Dispatch = useDispatch()
  const closeSession = () => Dispatch(logInError())
  const logOut = () => {
    Axios.delete('/logout')
      .then((res) => {
        closeSession()
      })
      .catch((error) => {
        console.log(error)
        closeSession()
      })
  }
  return (
    <Nav className={openClass === 'open' ? 'opneSidebar' : ''}>
      <Button onClick={logOut}>Cerrar sesion</Button>
    </Nav>
  )
}

export const Benevits = () => {
  const onLoading = useSelector((state) => state.loading)
  const [on, setOn] = useState(false)
  const [loader, setLoader] = useState(false)
  const [wallets, setWallets] = useState([])
  const [locked, setLocked] = useState([])
  const [unLocked, setUnLocked] = useState([])
  const handleOn = () => {
    setOn(!on)
  }
  const Dispatch = useDispatch()
  const error = useSelector((state) => state.error)
  const received = () => Dispatch(success())
  const logErr = () => Dispatch(logInError())
  const serErr = () => Dispatch(serverError())
  const onLoad = () => Dispatch(loading())
  useEffect(() => {
    onLoad()
    Axios.get('/member/wallets')
      .then((res) => {
        received()
        setWallets(res.data)
      })
      .catch((error) => {
        received()
        console.log(error)
        error.response.status === 401 ? logErr() : serErr()
      })
  }, [])
  useEffect(() => {
    onLoad()
    Axios.get('/member/landing_benevits', config)
      .then((res) => {
        received()
        setLocked(res.data.locked)
        setUnLocked(res.data.unlocked)
        console.log(res.data)
      })
      .catch((error) => {
        received()
        console.log(error)
        logErr()
      })
  }, [])

  useEffect(() => {
    if (onLoading === true) {
      setLoader(true)
    }
    if (onLoading === false) {
      setLoader(false)
    }
  }, [onLoading])
  return (
    <>
      {loader && <Loading />}
      <Aside className={on ? 'to-right' : ''}>
        <a href='#' onClick={handleOn}>
          <Menu size='35' />
        </a>
        <Img src={logo} />
        <div />
      </Aside>
      {on && <SideBar openClass='open' />}

      {wallets.map(item =>
        <div key={item.id}>
          <Title>{item.name}</Title>
          <Wallet>
            {locked.map(card =>
              item.name === card.wallet.name
                ? <LockedCard key={card.id}>
                  <LockedImg src={card.vector_full_path} />
                  <Wanted>Lo quiero</Wanted>
                  </LockedCard>
                : ''
            )}
            {unLocked.map(card =>
              item.name === card.wallet.name
                ? <UnlockedCard key={item.id}>
                  <Banner color={card.primary_color}>
                    <UnlockedImg src={card.ally.mini_logo_full_path} />
                  </Banner>
                  <P>40% en Análisis Clínicos y de Gabinete"</P>
                </UnlockedCard>
                : ''
            )}
          </Wallet>
        </div>
      )}

    </>
  )
}
