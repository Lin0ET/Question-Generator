// src/components/Register.js
import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button, Link } from '@mui/material';
import Icon1 from '../assets/icons/Earring.svg'
import Login from './Login';

const Register = () => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        passwordConf: "",
        school: "",
        city: ""
    });
    
    const handleClickOpen = () => {
        setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 注册逻辑，暂时不连接到后端
        alert("註冊成功");
        setOpen(false);
    };
  
    return (
      <div>
        <div onClick={handleClickOpen}>
            註冊
        </div>
        <Dialog open={open} onClose={handleClose}>
            <div className="text-center my-4">
              <img src={Icon1} alt="register" />
            </div>
            <DialogTitle>註冊帳號</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="請填寫您的姓名"
                    type="text"
                    name="name"
                    value={data.name}
                    fullWidth
                    variant="standard"
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    id="email"
                    label="請填寫信箱"
                    type="email"
                    name="email"
                    value={data.email}
                    fullWidth
                    variant="standard"
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    id="password"
                    label="請填寫密碼"
                    type="password"
                    name="password"
                    value={data.password}
                    fullWidth
                    variant="standard"
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    id="passwordConf"
                    label="請填入確認密碼，確認密碼必須與上面的「密碼」相同"
                    type="password"
                    name="passwordConf"
                    value={data.passwordConf}
                    fullWidth
                    variant="standard"
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    id="school"
                    label="請填寫目前就讀的學校"
                    type="text"
                    name="school"
                    value={data.school}
                    fullWidth
                    variant="standard"
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    id="city"
                    label="請填寫所在城市"
                    type="text"
                    name="city"
                    value={data.city}
                    fullWidth
                    variant="standard"
                    onChange={handleChange}
                />
                <DialogContentText className="mt-4">
                    已經有帳號了嗎？<Link component="button"><Login>登入</Login></Link>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button type="submit" onClick={handleSubmit}>註冊</Button>
            </DialogActions>
        </Dialog>
      </div>
    );
};

export default Register;
