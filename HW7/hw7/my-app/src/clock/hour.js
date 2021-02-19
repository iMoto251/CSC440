import styled, { keyframes } from 'styled-components'

const rotateHourHand = props => keyframes`
    from {
      transform: translate(20px, 20px) rotate(${(props.startHours - 3) * 30}deg);
    }
    to {
      transform: translate(20px, 20px) rotate(${(props.startHours - 3) * 30 + 360}deg);
    }
`

const Hour = styled.line`
    transform: ${props => `translate(20px, 20px) rotate(${(props.hours - 3) * 30}deg)`};
    stroke-width: 1;
    animation: ${props => { const kf = rotateHourHand(props); console.log(kf); return kf }} linear infinite;
    stroke: black;
`

export default Hour;