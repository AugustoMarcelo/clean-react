import React, { FormEvent, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { LoginHeader, Footer, Input, FormStatus, SubmitButton } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import Styles from './signup-styles.scss'
import { Validation } from '@/presentation/protocols/validation'
import { AddAccount, SaveAccessToken } from '@/domain/usecases'

type Props = {
  validation: Validation
  addAccount: AddAccount
  saveAccessToken: SaveAccessToken
}

const SignUp: React.FC<Props> = ({ validation, addAccount, saveAccessToken }: Props) => {
  const history = useHistory()
  const [state, setState] = useState({
    isLoading: false,
    isFormInvalid: true,
    name: '',
    nameError: '',
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    passwordConfirmation: '',
    passwordConfirmationError: '',
    mainError: ''
  })

  useEffect(() => {
    const nameError = validation.validate('name', state.name)
    const emailError = validation.validate('email', state.email)
    const passwordError = validation.validate('password', state.password)
    const passwordConfirmationError = validation.validate('passwordConfirmation', state.passwordConfirmation)

    setState(oldState => ({
      ...oldState,
      nameError,
      emailError,
      passwordError,
      passwordConfirmationError,
      isFormInvalid: !!nameError || !!emailError || !!passwordError || !!passwordConfirmationError
    }))
  }, [state.name, state.email, state.password, state.passwordConfirmation])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    try {
      if (state.isLoading || state.isFormInvalid) {
        return
      }

      setState({ ...state, isLoading: true })

      const account = await addAccount.add({
        name: state.name,
        email: state.email,
        password: state.password,
        passwordConfirmation: state.passwordConfirmation
      })

      await saveAccessToken.save(account.accessToken)
      history.replace('/')
    } catch (error) {
      setState({
        ...state,
        isLoading: false,
        mainError: error.message
      })
    }
  }

  return (
    <div className={Styles.signup}>
      <LoginHeader />

      <Context.Provider value={{ state, setState }}>
        <form className={Styles.form} data-testid="form" onSubmit={handleSubmit}>
          <h2>Criar conta</h2>

          <Input type="text" name="name" placeholder="Digite seu nome" />
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input type="password" name="password" placeholder="Digite sua senha" />
          <Input type="password" name="passwordConfirmation" placeholder="Repetia sua senha" />

          <SubmitButton text="Cadastrar" />

          <Link to="/login" data-testid="login-link" replace className={Styles.link}>Voltar ao Login</Link>

          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default SignUp
