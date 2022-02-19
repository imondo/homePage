import React from "react"
import './index.less'

function Highlight(props) {
    return (
        <div className="highlight">
            {
                props.icon.map(icon => <i className={'iconfont icon-' + icon} key={icon}></i>)
            }
            <span className={props.highlightClass}>{props.children}</span>
        </div>
    )
}

export default Highlight