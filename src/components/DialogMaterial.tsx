import React from "react";
import Dialog from '@material-ui/core/Dialog';
import {makeStyles} from "@material-ui/core/styles";

export interface IDialogProps {
    open: boolean;
    onClose: (value: string) => void;
}
const useStyles = makeStyles({
    root: {

        background: 'none',
        boxSizing: 'border-box',
        boxShadow: '0 1px 4px rgba(90, 91, 106, 0.24), 0 1px 2px rgba(58, 58, 68, 0.25)',
        },
    container:{border: '1px solid #9696A0',borderRadius: '2px'},
    paper:{padding: '25px 28px',}
})
const DialogMaterial: React.FunctionComponent<IDialogProps> = ({children, open, onClose}) =>{
    const classes = useStyles();
    return <Dialog open={open} onClose={onClose} classes={classes}>
        {children}
    </Dialog>
}
export default DialogMaterial;