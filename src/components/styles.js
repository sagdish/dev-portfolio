import { animated } from 'react-spring'
import styled from 'styled-components'

const Container = styled(animated.div)`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(3, minmax(120px, 1fr));
  grid-gap: 25px;
  padding: 25px;
  background: white;
  border-radius: 5px;
  // cursor: pointer;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height;
`

const Item = styled(animated.div)`
  // position: absolute;
  cursor: pointer;
  width: 100%;
  height: 50px;
  background: pink;
  border-radius: 5px;
  will-change: transform, opacity;
  // border: 1px solid red;
`

export { Container, Item }
