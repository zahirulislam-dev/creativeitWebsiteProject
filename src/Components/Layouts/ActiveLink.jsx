import React from 'react'
import { NavLink } from 'react-router-dom'

const ActiveLink = ({ to, children }) => {
    return (
        <div>
            <NavLink
                to={to}
                className={({ isActive }) => isActive ? "border-b-2 border-four py-[2px]" : ""}>
                {children}
            </NavLink>
        </div>
    )
}

export default ActiveLink