import {useState} from 'react'
import {AppContainer, Heading, Caption, CustomInput} from './styledComponents'

// Write your code here
const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => {
    setPassword(event.target.value)
  }
  return (
    <AppContainer>
      <Heading>Password Validator</Heading>
      <Caption>Check how strong and secure is your password</Caption>
      <CustomInput
        type="password"
        value={password}
        onChange={onChangePassword}
      />
      {password.length < 8 && (
        <Caption>Your password must be at least 8 characters</Caption>
      )}
    </AppContainer>
  )
}

export default PasswordValidator
