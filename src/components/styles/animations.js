import styled, { css, keyframes } from "styled-components"
import { Ring } from 'react-awesome-spinners'

export const fadeIn = ({ time = '3s', type = 'ease' } = {}) =>
    css`animation:${time} ${fadeInKeyframes} ${type};`

export const fadeInKeyframes = keyframes`
from {
filter: blur(5px);
opacity: 0;
}
to{
filter:blur(0);
opacity:1;
}`

export const fadeOut = ({ time = '3s', type = 'ease' } = {}) =>
    css`animation:${time} ${fadeOutKeyframes} ${type};`

export const fadeOutKeyframes = keyframes`
from {
filter:blur(0);
opacity:1;
}
to{
filter: blur(5px);
opacity: 0;

}`

export const Loading = () => {
    return (
        <div className="ring">
             <Ring />
        </div>
        )
}