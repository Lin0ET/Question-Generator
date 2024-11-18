import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Link, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import loginImg from '../assets/icons/icon1.svg';
import { Register } from './Register';

export const Login = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState('student');
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: ""
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

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            email: data.email,
            password: data.password
        };

        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', userData);
            console.log("响应数据:", response.data);  

            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userId', response.data.id);

            alert("登入成功!");
            setOpen(false);
            setData({
                email: "",
                password: ""
            });
            navigate("/upload"); // 登入成功後可以重定向到 /upload 或其他頁面
        } catch (error) {
            alert("登入失敗 請確認帳號密碼");
            console.error(error.response ? error.response.data : error.message);
        }
    };

    return (
        <div>
            <>  
                <div onClick={handleClickOpen}>
                    登入
                </div>
            </>
            <Dialog open={open} onClose={handleClose}>
                <div>
                    <img src={loginImg} alt="Login" />
                </div>
                <DialogTitle>登入</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
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
                        autoFocus
                        margin="dense"
                        id="password"
                        label="請填入密碼"
                        type="password"
                        name="password"
                        value={data.password}
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                    />
                    <FormControl>
                        <FormLabel id="role">身分</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="role"
                            name="role"
                            value={role}
                            onChange={handleRoleChange}
                        >
                            <FormControlLabel value="teacher" control={<Radio />} label="老師" />
                            <FormControlLabel value="student" control={<Radio />} label="學生" />
                        </RadioGroup>
                    </FormControl>
                    <DialogContentText>
                        還沒有帳號嗎？<Link component="button" underline="none"><Register>註冊</Register></Link>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button type="submit" onClick={handleSubmit}>登入</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Login;
