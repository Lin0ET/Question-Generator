import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Link } from '@mui/material';
import registerImg from '../assets/icons/icon1.svg';
import { Login } from './Login';
import url from '../url.json';
import config from '../config.json';

export const Register = () => {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            name: data.name,
            email: data.email,
            password: data.password,
            passwordConf: data.passwordConf,
            school: data.school,
            city: data.city
        };
        try {
            await axios.post(url.backendHost + config[0].registerUrl, userData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            setOpen(false);
            setData({
                name: "",
                email: "",
                password: "",
                passwordConf: "",
                school: "",
                city: ""
            });
            alert("註冊成功！");
        } catch (error) {
            console.error("註冊失敗", error);
            alert("註冊失敗，请重试。");
        }
    };
    

    return (
        <div>
            <div onClick={handleClickOpen}>
            註冊
            </div>
            <Dialog open={open} onClose={handleClose}>
                <div>
                    <img className='modal-image' src={registerImg} alt="Register Illustration" />
                </div>
                <DialogTitle>註冊帳號</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="您的姓名"
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
                        label="信箱"
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
                        label="密碼"
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
                        label="密碼"
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
                        label="學校"
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
                        label="城市"
                        type="text"
                        name="city"
                        value={data.city}
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                    />
                    <DialogContentText>
                        已經有帳號了吗？<Link component="button" underline="none"><Login>登入</Login></Link>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button type="submit" onClick={handleSubmit}>註冊</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
