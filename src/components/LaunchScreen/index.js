import React from 'react'
import { Launch, Img } from './style'
import Logo from '../../logo.png'
import { Loading } from '../styles/animations'
export const LaunchScreen = () => {
  return (
    <>
      <Launch>
        <Img src={Logo} alt='' />
        <Loading />
      </Launch>
    </>
  )
}
