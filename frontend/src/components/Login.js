// src/components/Login.js
import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button, Link, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import Icon1 from '../assets/icons/Barber Scissors.svg'
import Register from './Register';

const Login = () => {
    const [open, setOpen] = useState(false);
    const [role, setRole] = useState('student');
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
        // 登录逻辑，暂时不连接到后端
        alert("登录成功");
        setOpen(false);
    };
  
    return (
      <div>
        <div onClick={handleClickOpen}>
            登入
        </div>
        <Dialog open={open} onClose={handleClose}>
            <div className="text-center my-4">
              <img src={Icon1} alt="login" />
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
                <FormControl component="fieldset" className="mt-4">
                    <FormLabel component="legend">身分</FormLabel>
                    <RadioGroup
                        row
                        aria-label="role"
                        name="role"
                        value={role}
                        onChange={handleRoleChange}
                    >
                        <FormControlLabel value="teacher" control={<Radio />} label="老師" />
                        <FormControlLabel value="student" control={<Radio />} label="學生" />
                    </RadioGroup>
                </FormControl>
                <DialogContentText className="mt-4">
                    還沒有帳號嗎？<Link component="button" ><Register>註冊</Register></Link>
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
