import { animated } from 'react-spring'
import styled, { css } from 'styled-components'


/*  items for multifunctional button: Container and Item */

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
  @media (max-width: 1149px) {
    grid-template-columns: repeat(2, minmax(80px, 1fr));
    will-change: width, height;
    padding: 20px;
  }
`
const Item = styled(animated.div)`
  // position: absolute;
  cursor: pointer;
  width: 105%;
  height: 45px;
  background: #343538;
  text-decoration: none;
  color: white;
  font-size: 19px;
  text-align: center;
  line-height: 45px;
  vertical-align: middle;
  border-radius: 5px;
  will-change: transform, opacity;
  // border: 1px solid red;

  @media (max-width: 1149px) {
    font-size: 17px;
    width: 106%;
  }
`

// bellow components for contact form:
const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  /* min-height: 500px; */
  padding: 0 20px;
  font-weight: lighter;
  font-size: 16px;
  /* border: 1px solid red; */
  `
const sharedStyles = css`
  /* background-color: #eee; */
  background-color: #343538;
  color: #fff;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #4d4f54;
  margin: 10px 0 15px 0;
  padding: 10px;
  box-sizing: border-box;
`
const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 15px 40px 20px;
  background-color: #212224;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  /* border: 1px solid yellow; */
  /* font-weight: lighter; */
`
const StyledInput = styled.input`
  display: 'block';
  width: 100%;
  ${sharedStyles}
`
const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`
const StyledButton = styled.button`
  display: block;
  background-color: #343538;
  color: #fff;
  font-size: 16px;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 15px;
  cursor: pointer;
  box-sizing: border-box;
`

const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0 20px;

  legend {
    padding: 0 10px;
  }

  label {
    padding-right: 20px;
  }

  input {
    margin-right: 5px;
  }

`
const StyledError = styled.div`
  color: red;
  font-weight: 500;
  margin: 0 0 20px 0;
  min-height: 20px;
`


export { 
  Container, Item, StyledFormWrapper,
  StyledForm, StyledInput, StyledTextArea,
  StyledButton, StyledFieldset, StyledError
}
