import React from "react";
import SignIn from "./body/mainPage/SignIn";
import Dialog from 'rc-dialog;


interface IProps {

}

interface IState {
    visible: boolean
    destroyOnClose: boolean
}
export default class ModalWindow extends React.Component<IProps,IState>{
    state = {
        visible: false,
        destroyOnClose: false,
    };
    onClick = () => {
        this.setState({
            visible: true,
        });
    }
    onClose = () => {
        this.setState({
            visible: false,
        });
    }
    onDestroyOnCloseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            destroyOnClose: e.target.checked,
        });
    }
    render(): React.ReactNode {
        let dialog;
        if (this.state.visible || !this.state.destroyOnClose) {
            dialog = (
                <Dialog
                    visible={this.state.visible}
                    animation="slide-fade"
                    maskAnimation="fade"
                    onClose={this.onClose}
                    style={{ width: 600 }}
                    title={<SignIn/>}
                    ></Dialog>);}
        return <div style={{ margin: 20 }}>
            <p>
                <button onClick={this.onClick}>show dialog</button>
                &nbsp;
                <label>destroy on close:
                    <input
                        type="checkbox"
                        checked={this.state.destroyOnClose}
                        onChange={this.onDestroyOnCloseChange}
                    />
                </label>
            </p>
            {dialog}
        </div>;
    }
}