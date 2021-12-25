import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';
import Button from '../../Button/Button';
const Modal = (props) => {
    return (
        <>
        <Backdrop />
        <div className={styles.modal}>
            <div className={styles.title}>
                <h2>{props.title}</h2>
            </div>
            <hr></hr>
            <div>{props.text}</div>
            <Button
                onClick={() => {
                    props.onCancel(false);
                }}
            >
                Cancel
            </Button>
        </div>
        </>
    );
};

const ShowModal = (props) => {
    return ReactDOM.createPortal(
        <Modal
            onCancel={props.onCancel}
            title={props.title}
            text={props.text}
        />,
        document.getElementById('modal-root')
    );
};
export default ShowModal;
