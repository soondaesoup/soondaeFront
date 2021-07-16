import React, {useState} from 'react';
import {makeStyles, withStyles} from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import fileService from "../service/fileService";

/* 모달창 설정 시작 */
const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(2),
        top: theme.spacing(2),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);
/* 모달 설정 끝 */

/* 셀렉트 설정 */
const selectStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));
/* 셀렉트 설정 끝*/

/* initData */
const initData = {
    btitle:"",
    bstate:false,
    bcategory:"",
    bcontent:"",
    bprice:"",
    bdeleted:false,
    mno:"",
    imageDTOS:[],
}
/* End initData */

const BoardRegisterModal = ({modalTrigger, open}) => {

    /* 셀렉트 박스 */
    const classes = selectStyles();
    const [selectVal, setSelectVal] = useState('');
    const [selectOpen, setSelectOpen] = useState(false);
    const handleSelectChange = (event) => {
        setSelectVal(event.target.value);
    };
    const handleSelectOpen = () => {
        setSelectOpen(!selectOpen);
    };
    /* end 셀렉트 박스 */

    const [registerData, setRegisterData] = useState(initData);

    const changeValue = (e) => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        let files = e.target.files[0];
        // const config = {
        //     headers: {
        //         "content-type": "multipart/form-data",
        //     },
        // };
        if(e.target.files !== null) {
            // const fd = new FormData();
            // fd.append("files", files);
            // fileService.fileUpload(files, 2).then((value =>
            // const fileUrl = new URL("C:\\ztemp\\"+value.data.fuuid)
            // ))
        }
    }

    console.log("======== registerData",registerData)

    return (
        <div>
            <Dialog
                onClose={modalTrigger}
                open={open}
                aria-labelledby="customized-dialog-title"
                fullWidth={true}
                maxWidth="lg"
            >
                <DialogTitle id="customized-dialog-title" onClose={modalTrigger}>
                    <div className='titleInsertBox'>
                        <div>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-controlled-open-select-label">카테고리</InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={selectOpen}
                                onClose={handleSelectOpen}
                                onOpen={handleSelectOpen}
                                value={selectVal}
                                onChange={handleSelectChange}
                            >
                                <MenuItem value={"팝니다"}>팝니다</MenuItem>
                                <MenuItem value={"삽니다"}>삽니다</MenuItem>
                            </Select>
                        </FormControl>
                        </div>
                        <div>
                            <input
                                type='number'
                                className='insertPrice'
                                name='price'
                                placeholder='가격'
                                onChange={changeValue}
                                autoFocus
                            /> 원
                        </div>
                    </div>
                    <div>
                        <input
                            type='text'
                            className='insertTitle'
                            name='title'
                            placeholder='글 제목'
                            onChange={changeValue}
                        />
                    </div>
                    <div className="fileUploadBox">
                        <input
                            className='fileUpload'
                            type='file'
                            accept='image/jpeg, image/jpg, image/png'
                            onChange={handleFileOnChange2}
                        />
                    </div>
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <div>
                            <input
                                type='text'
                                className='insertContent'
                                name='content'
                                placeholder='글 내용'
                                onChange={changeValue}
                            />
                        </div>
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <button>글 쓰기</button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default BoardRegisterModal;