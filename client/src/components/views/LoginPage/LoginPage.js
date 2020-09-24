import React, {useState} from 'react'

function LoginPage() {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    
    const onEmailHandler = (evnet) => {
        setEmail(event.currentTarget.value)
    }
    
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
          <form style={{
            display: 'flex', flexDirection: 'column' 
        }}>
                <label>Email</label>
                <input type="email" vlaue={Email} onChange={onEmailHandler} />
                <label>Passsword</label>
                <input type="Passsword" vlaue={Password} onChange={onPasswordHandler} />
          
          
                <br />
                <button>Login</button>
          </form>

        </div>
    )
}

export default LoginPage
