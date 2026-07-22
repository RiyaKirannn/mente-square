import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/login.css"
import useUsersContext from '../hooks/use-users-context'

export default function Login() {

    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')
    const [err, setErr] = useState('')

    const navigate = useNavigate();

    const { updatePrivileges } = useUsersContext()

    const login = (e) => {
        //Authentication
        e.preventDefault()
        //****************API req res****************//
        axios.post(process.env.REACT_APP_SERVER + "/admin/login", {
            username: username,
            pass: pass
        })
            .then((res) => {
                if (res.data.status === "success") {
                    localStorage.setItem("uid", res.data.uid)
                    localStorage.setItem("auth", res.data.auth)
                    localStorage.setItem("aname", res.data.name)
                    localStorage.setItem("privilege", res.data.privilege)
                    localStorage.setItem("status", res.data.acc_status)
                    updatePrivileges(res.data.privilege)

                    navigate('/', { replace: true })
                    return
                }
                else {
                    setErr("Invalid Credentials!")
                    return
                }
            })
            .catch(function (error) {
                console.log(error);
                setErr("503 | Internal Server error!")
                return;
            });
    }

    useEffect(() => {
        localStorage.getItem("uid") ? navigate("/dashboard", { replace: true }) : navigate("/login", { replace: true })
    }, [navigate])

    return (
        <div className="login">
            <form className="login-form pt-1" onSubmit={login}>
                <div className='logo-img pb-0'>
                    <img src={process.env.PUBLIC_URL + '/assets/images/msq_logo.png'} alt="logo" id="logo" />
                </div>
                <div className="title mb-4">Mentee Square</div>
                <div className="mt-4 input">
                    <input autoFocus={true} type="text" className="form-control text" placeholder='username' onInput={(e) => setUsername(e.target.value)} value={username} />
                </div>
                <div className="mt-4 input">
                    <input type="password" className="form-control text" placeholder='password' onInput={(e) => setPass(e.target.value)} value={pass} />
                </div>
                <div className="mt-4 login-btn">
                    <input type="submit" value="Login" className="btn submit-btn text-light" />
                </div>
                <div className="mt-4 text-center text-danger">
                    {err ? <p>{err}</p> : ""}
                </div>
            </form>
        </div>
    )
}