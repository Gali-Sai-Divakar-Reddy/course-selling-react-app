import { Typography } from "@mui/material"
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"

export default function Appbar(){
    const navigate = useNavigate()
    return <div style={{display: "flex", justifyContent: "space-between", padding: 10}}>
        <div>
            <Typography variant="h6" style={{paddingLeft: 5}}>Coursera</Typography>
        </div>
        <div >
            
            <Button variant="outlined" 
                style={{marginRight: 10}}
                onClick={() => {
                   navigate("/signup")
                }}
            >Signup</Button>
            <Button variant="outlined" 
                style={{marginRight: 10}}
                onClick={() => {
                    navigate("/signin")
                }}
            >Signin</Button>
        </div>
        
    </div>
}