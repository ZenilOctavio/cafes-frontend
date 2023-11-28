import { Button } from '@/components/ui/button'
import { InputWithLabel } from '@/mycomponents/InputWithLabel'
import { useState } from 'react'
import { login } from '@/services/loginService'
import './login.css'
import { saveTokenSessionStorage } from '@/helpers/tokenActions'

export default function LogIn(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  
  const handleClick = () => {
    login(email, password)
    .then((json_object) => {
      saveTokenSessionStorage(json_object.access_token)
    })
  }
  
  return (
      <main className='login_container'>
        <section className="wrapper">
          
          <h1 className='text-3xl font-bold'>Iniciar sesion</h1>
          
          <InputWithLabel
            labelContent='Email'
            fieldId='email'
            inputType='email'
            placeholder='admin@gmail.com'
            contentState={email}
            setContent={setEmail}
          />
          <InputWithLabel
            labelContent='Contraseña'
            fieldId='password'
            inputType='password'
            placeholder='Admin12!'
            contentState={password}
            setContent={setPassword}
          />

          <Button onClick={handleClick}>Iniciar sesion</Button>
          
        </section>
      </main>
  )
}

