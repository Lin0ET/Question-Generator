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
            alert("注册成功！");
        } catch (error) {
            console.error("注册失败", error);
            alert("注册失败，请重试。");
        }
    };
    

    return (
        <div>
            <div onClick={handleClickOpen}>
                注册
            </div>
            <Dialog open={open} onClose={handleClose}>
                <div>
                    <img className='modal-image' src={registerImg} alt="Register Illustration" />
                </div>
                <DialogTitle>注册账户</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="请填写您的姓名"
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
                        label="请填写信箱"
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
                        label="请填写密码"
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
                        label="请填入确认密码"
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
                        label="请填写学校名称"
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
                        label="请填写所在城市"
                        type="text"
                        name="city"
                        value={data.city}
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                    />
                    <DialogContentText>
                        已经有账号了吗？<Link component="button" underline="none"><Login>登录</Login></Link>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button type="submit" onClick={handleSubmit}>注册</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
