import React, {CSSProperties} from "react";
import RcDialog from 'rc-dialog';
import IDialogPropTypes from "rc-dialog/es/IDialogPropTypes";

interface IProps extends IDialogPropTypes {

}

const dialogStyle: CSSProperties = {
    marginTop: '277px',
    border: '1px solid #9696A0',
    boxSizing: 'border-box',
boxShadow: '0px 1px 4px rgba(90, 91, 106, 0.24), 0px 1px 2px rgba(58, 58, 68, 0.25)',
borderRadius: '2px',
}

const Dialog: React.FunctionComponent<IProps> = ({children, style, ...props}) => {
    return <RcDialog style={{...dialogStyle, ...style}} {...props} mask={false} visible>
        {children}
    </RcDialog>
}

export default Dialog
