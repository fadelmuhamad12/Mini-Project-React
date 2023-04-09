import React from 'react'
import { Container } from 'react-bootstrap'

const Login = () => {
  return (
    <div>
      <Container>
          <div className='Form-Login'>
              <label>
                  <input type="text" placeholder='Masukkan Username'></input>
              </label>
          </div>
      </Container>
    </div>
  )
}

export default Login
