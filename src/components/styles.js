import { animated } from 'react-spring'
import styled from 'styled-components'

const Container = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(3, minmax(80px, 1fr));
  grid-gap: 25px;
  padding: 20px;
  // background: white;
  border-radius: 5px;
  // cursor: pointer;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height;
  // border: 0.5px solid #ffffff;
`

const Item = styled(animated.div)`
  // position: absolute;
  cursor: pointer;
  width: 100%;
  height: 45px;
  background: #343538;
  text-decoration: none;
  color: white;
  font-size: 20px;
  text-align: center;
  line-height: 45px;
  vertical-align: middle;
  border-radius: 5px;
  will-change: transform, opacity;
  // border: 1px solid red;
`

export { Container, Item }
