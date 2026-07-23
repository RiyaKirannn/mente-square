import React from 'react'
import Dashboard from '../pages/Dashboard'
import NewMentee from '../pages/NewMentee'
import Mentee from '../pages/Mentee'

export default function AdminTab({ tabname }) {
    if (tabname === "Mentee")
        return <Mentee />
    else if (tabname === "NewMentee")
        return <NewMentee />
    else
        return <Dashboard />
}