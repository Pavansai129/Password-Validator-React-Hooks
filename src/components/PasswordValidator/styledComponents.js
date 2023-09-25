// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 40px;
  color: #edeeff;
`

export const Caption = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
  color: #383a4e;
`

export const CustomInput = styled.input`
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 30px;
  border-radius: 5px;
  outline: none;
  width: 300px;
`
