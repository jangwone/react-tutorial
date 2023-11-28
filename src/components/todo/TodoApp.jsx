import { useState } from 'react'
import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <LoginComponent />
            {/* <WelcomeComponent /> */}
        </div>
    )
}

function LoginComponent() {

    const[useranme, setUsername] = useState('wone')

    function handleUsernameChange(event) {
        setUsername(event.useranme)
    }

    return (
        <div className="Login">
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={useranme} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Passowrd</label>
                    <input type="password" name="password" />
                </div>
                <div>
                    <button type="button" nam="login" >login </button>
                </div>
            </div>
        </div>
    )
}

function WelcomeComponent() {
    return (
        <div className="Welcome">
            Welcome Component
        </div>
    )
}