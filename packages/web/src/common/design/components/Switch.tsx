import React from "react"

import {
    LabelSwitch,
    InputSwitch,
    SpanSwitch
} from "../../../modules/core/styles/switchStyle"

/*
    To do:
    That goddamn interfaace that I dont know how to do it to mention the props (I think)
*/
const Switch = props => {
    return (
        <LabelSwitch {...props}>
            <InputSwitch type="checkbox" />
            <SpanSwitch />
        </LabelSwitch>
    )
}

export default Switch
