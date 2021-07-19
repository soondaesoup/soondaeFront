import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function JoinDialog(open1,JoinDialog) {
    const [open, setOpen] = React.useState(false);

    const JoinDiaOpen = () => {
        setOpen(true);
    };

    const JoinDiaClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={JoinDiaOpen}>
                회원가입
            </Button>
            <Dialog open={open} onClose={JoinDiaClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">회원가입</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                       빈칸에 정보를 입력해 주세요.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="Email"
                        fullWidth
                        type="email"/>
                    <br/>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        label="PassWord"
                        type="pw"
                        fullWidth
                    type="password"/>
                    <br/>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="nick"
                        label="NickName"
                        type="nick"
                        fullWidth
                    />
                    <br/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={JoinDiaClose} color="primary">
                        확인
                    </Button>
                    <Button onClick={JoinDiaClose} color="primary">
                        뒤로가기
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}