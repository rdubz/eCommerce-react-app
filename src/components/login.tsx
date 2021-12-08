import React, {useState} from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function checkForSuccess() {
        let token = localStorage.getItem('token');

        if (token != "" && token != null)
        {
            console.log('redirect');
        }
    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: email, password: password})
        };

        fetch('http://127.0.0.1:8000/api/login/', requestOptions)
        .then(response => response.json())
        .then(response => {
            localStorage.setItem('token', response.token)
        })
        .then(response => checkForSuccess())
        .catch(error => {
            localStorage.removeItem('token');
        })

    }

    return (
        <div className="LoginForm">
            <form onSubmit={handleSubmit}>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="User Name"></input>
                <br/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
                <br/>
                <br/>
                <button type="submit" disabled={!validateForm()}>Login</button>
            </form>
        </div>
    );

}

export default Login;