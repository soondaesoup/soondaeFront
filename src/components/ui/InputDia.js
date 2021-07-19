import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputItem from '../ex01/InPutItem'
export default function InputDia(open2,InputDialog) {
    const [open, setOpen] = React.useState(false);

    const InputDiaOpen = () => {
        setOpen(true);
    };

    const InputDiaClose = () => {
        setOpen(false);
    };

    return (
        <div style=''>
            <Button variant="outlined" color="primary" onClick={InputDiaOpen}>
                회원가입
            </Button>
            <Dialog open={open} onClose={InputDiaClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">상품등록</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        공란없이 입력해주세요
                    </DialogContentText>
                <InputItem></InputItem>
                </DialogContent>
                <DialogActions>
                    <Button onClick={InputDiaClose} color="primary">
                        확인
                    </Button>
                    <Button onClick={InputDiaClose} color="primary">
                        뒤로가기
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
