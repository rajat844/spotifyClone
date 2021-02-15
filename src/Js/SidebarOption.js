import React from 'react'
import "../Css/SidebarOption.css"


function SidebarOption({ title, Icon }) {
    return (
        <div className="sidebarOption" >
            {Icon && <Icon className="sidebarOption__Icon"></Icon>}
            { Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SidebarOption
