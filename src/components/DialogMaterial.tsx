import React from "react";
import Dialog from '@material-ui/core/Dialog';
import {makeStyles} from "@material-ui/core/styles";

export interface IDialogProps {
    open: boolean;
    onClose: (value: string) => void;
}
const useStyles = makeStyles({
    paper: {
        padding: '25px 28px',
        border: '1px solid #9696A0',
        boxSizing: 'border-box',
        },
})
const DialogMaterial: React.FunctionComponent<IDialogProps> = ({children, open, onClose}) =>{
    const classes = useStyles();
    return <Dialog open={open} onClose={onClose} classes={classes} BackdropProps={{
        style: {
            backgroundColor: 'transparent',
            boxShadow: '0 1px 4px rgba(90, 91, 106, 0.24), 0 1px 2px rgba(58, 58, 68, 0.25)',
        },
    }}>
            {children}
    </Dialog>
}
export default DialogMaterial;