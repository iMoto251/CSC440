import styled, { keyframes } from 'styled-components'

const rotateSecondHand = props => keyframes`
    from {
      transform: translate(20px, 20px) rotate(${(props.startSeconds-15)*6}deg);
    }
    to {
      transform: translate(20px, 20px) rotate(${(props.startSeconds-15)*6+360}deg);
    }
`


const Second = styled.line`
    transform: ${props => `translate(20px, 20px) rotate(${(props.seconds-15)*6}deg)`};
    stroke-width: 0.3;
    animation: ${props => {const kf = rotateSecondHand(props); console.log(kf); return kf}} 60s steps(60) infinite;
    stroke: #d00505;
`

export default Second;
