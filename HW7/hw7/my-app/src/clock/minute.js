import styled, { keyframes } from 'styled-components'

const rotateMinuteHand = props => keyframes`
    from {
      transform: translate(20px, 20px) rotate(${(props.startMinutes-15) * 6}deg);
    }
    to {
      transform: translate(20px, 20px) rotate(${(props.startMinutes-15) * 6 + 360}deg);
    }
`

const Minute = styled.line`
    transform: ${props => `translate(20px, 20px) rotate(${(props.minutes - 15) * 6}deg)`};
    stroke-width: 0.6;
    animation: ${props => { const kf = rotateMinuteHand(props); console.log(kf); return kf }} 3600s steps(60) infinite;
    stroke: black;
`

export default Minute;