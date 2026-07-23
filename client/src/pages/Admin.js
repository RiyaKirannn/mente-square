import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/dashboard.css"
import AdminTab from '../components/AdminTab';
import { Icon } from '@iconify/react';
import useUsersContext from '../hooks/use-users-context';

export default function Admin() {
    const {updatePrivileges} = useUsersContext()

    const [tab, setTab] = useState("Dashboard")

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("uid")
        localStorage.removeItem("auth")
        localStorage.removeItem("aname")
        localStorage.removeItem("privilege")
        updatePrivileges(0)
        navigate("/", { replace: true })
    }

    // Side Pane
    const [sidePane, setSidePane] = useState(false)
    const [sideAnimation, setSideAnimation] = useState({})
    const [btn, setBtn] = useState(<Icon icon="mdi:code-greater-than" width="38" />)

    const openSideBar = () => {
        setSideAnimation({
            animation: "open 0.4s ease-in",
        })
        setTimeout(() => {
            setSideAnimation({
                ...sideAnimation,
                left: "0"
            })
            setSidePane(true)
        }, 380)

        setTimeout(() => setBtn(<Icon icon="mdi:code-less-than" width="38" />), 420)
    }

    const closeSideBar = () => {
        setSideAnimation({
            animation: "close 0.4s ease-out",
        })
        setTimeout(() => {
            setSideAnimation({
                ...sideAnimation,
                left: "-200px"
            })
            setBtn(<Icon icon="mdi:code-greater-than" width="38" />)
            setSidePane(false)
        }, 400)
    }

    window.onresize = function () {
        if (window.innerWidth > 768) {
            setSideAnimation({
                left: "0"
            })
            setBtn(<Icon icon="mdi:code-less-than" width="38" />)
            setSidePane(true)
        }
        else {
            setSideAnimation({
                left: "-200px"
            })
            setBtn(<Icon icon="mdi:code-greater-than" width="38" />)
            setSidePane(false)
        }
    }

    const touchToClose = () => {
        if (sidePane && window.innerWidth <= 768) {
            closeSideBar()
        }
    }


    return (
        <>
            <div className="sidepane" style={sideAnimation}>
                <div className="toggle">
                    <span onClick={() => !sidePane ? openSideBar() : closeSideBar()}>{btn}</span>
                </div>

                {/* Image */}
                <div className="logo-wrapper">
                    <img src={process.env.PUBLIC_URL + '/assets/images/msq_logo.png'} alt="logo" id="logo" className='img-fluid' />
                </div>

                <div className="menu-list">
                    <div className="menu-item" onClick={() => setTab("Dashboard")}>
                        <span className="menu-item-name">Dashboard</span>
                        <Icon icon="material-symbols:chevron-right-rounded" width="32" />
                    </div>
                    <div className="menu-item" onClick={() => setTab("Mentee")}>
                        <span className="menu-item-name">Mentee</span>
                        <Icon icon="material-symbols:chevron-right-rounded" width="32" />
                    </div>
                    <div className="menu-item" onClick={() => setTab("NewMentee")}>
                        <span className="menu-item-name">New Mentee</span>
                        <Icon icon="material-symbols:chevron-right-rounded" width="32" />
                    </div>
                </div>

            </div>
            <div className="dashboard pb-4" onClick={touchToClose}>
                <div id="navbar">
                    <div>Welcome {localStorage.getItem('aname')}!</div>
                    <Icon icon="ri:logout-circle-r-line" onClick={logout} className='text-danger' width="24" id='logout' />
                </div>
                <div id="main" className='container'>
                    <AdminTab tabname={tab} />
                </div>
            </div>
        </>
    )
}