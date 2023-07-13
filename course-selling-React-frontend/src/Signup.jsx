import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function Signup(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return <div>
        <div style={{display: "flex", justifyContent: "center"}}>
            <div style={{paddingTop: 150, marginBottom:10}}>
                <Typography variant='h6'>
                    Welcome to the Coursera, Signup below
                </Typography>
            </div>
            
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
            <Card variant="outlined" style={{width:400, padding:20}}>
                <TextField 
                    fullWidth={true} 
                    id="username" 
                    label="Username" 
                    variant="outlined" 
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}
                />
                <br />
                <br />
                <TextField 
                fullWidth={true} 
                    id="password" 
                    label="Password" 
                    variant="outlined" 
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
                <br />
                <br />
                <Button 
                    size={"large"} 
                    variant="contained"
                    onClick={() => {
                        fetch("http://localhost:3000/admin/signup",{
                            method: "POST", 
                            body: JSON.stringify({username, password}),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data)
                            localStorage.setItem("token", data.token)
                        })
                    }}
                >Signup</Button>
            </Card>
        </div>
       
    </div>
}