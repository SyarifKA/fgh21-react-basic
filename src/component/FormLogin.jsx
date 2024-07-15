import React from 'react'

function FormLogin() {
    function doLogin(event) {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        if (email === 'admin@gmail.com' && password === '123') {
            window.alert('login success')
        } else {
            window.alert('salah')
        }
    }
    return (
        <form action="" className='form-login' onSubmit={doLogin}>
            <h1>DotPlus</h1>
            <h3>Event Manager</h3>
            <div>
                <div>
                <label htmlFor="name">Username</label>
                <input type="text" id='name' name='email'/>
                </div>
                <div>
                <label htmlFor="pass">Password</label>
                <input type="password" id='pass' name='password' />
                </div>
                <div>
                    <a href="#">forgot password?</a></div>
                <div>
                <button type='submit'>Sign In</button>
                </div>
            </div>
        </form>
    )
}

export default FormLogin