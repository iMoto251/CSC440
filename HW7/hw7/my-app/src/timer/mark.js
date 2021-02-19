import styled from 'styled-components'

const Mark = styled.line`
  transform: ${props => `translate(20px, 20px) rotate(${props.hour_pos}*30deg)`}
  stroke-width: ${props => props.stroke_width};
`

const Mark1 = styled.line`
  transform: ${props => `translate(20px, 20px) rotate(${(props.hour_pos-3)*30}deg)`};
  stroke-width: ${props => props.stroke_width};
  stroke: red;
`

export default Mark1;
