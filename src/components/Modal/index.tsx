import { Tilt } from "react-tilt"
import { MODAL_WRAPPER_CLASSES, MODAL_MOTION_CLASSES, MODAL_CLASSES } from "./contants"
import React from "react"

const Modal = ({children}) => {
    return (
        <Tilt className={MODAL_WRAPPER_CLASSES}>
            <div
            className={MODAL_MOTION_CLASSES}
            >
            <div
                data-options={{
                max: 45,
                scale: 1,
                speed: 450
                }}
                onClick={(e) => e.stopPropagation()} 
                className={MODAL_CLASSES}>
                {children}
            </div>
            </div>
        </Tilt>
    )
}

export default Modal