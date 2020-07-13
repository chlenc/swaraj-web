/** @jsx jsx */
import React, {CSSProperties} from "react";
import RcDialog from 'rc-dialog';
import IDialogPropTypes from "rc-dialog/es/IDialogPropTypes";
import styled from "@emotion/styled";
import {css, jsx} from "@emotion/core";

interface IProps extends IDialogPropTypes {

}

const dialogStyle: CSSProperties = {
border: '1px #000 solid'
}

const Dialog: React.FunctionComponent<IProps> = ({children, style, ...props}) => {
    return <RcDialog style={{...dialogStyle, ...style}} {...props} mask={false} visible>
        {children}
    </RcDialog>
}

export default Dialog
