import React from 'react'
import utilStyles from '../../styles/utils/tooltip.module.css'



export default function Tooltip(props) {
    return (
        <div className={`${utilStyles.tooltip}`}>
            <button className={`${utilStyles.tooltip_button} ${props.type}`}></button>


            <div className={utilStyles.tooltipContainer}>
                <div className={utilStyles.tooltipTitle}>
                    <div className={utilStyles.starIconContainer}>
                        ✨
                    </div>
                    <div className={utilStyles.tooltipTitleText}>
                        <h3>{props.title}</h3>
                    </div>
                </div>
                <div className={utilStyles.tooltipContent}>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}
