import { Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Footer() {
    const navigate = useNavigate();
    
    return (
        <div className="flex flex-col items-center gap-4 p-4 w-full">
            <Divider className="w-5/6" sx={{backgroundColor: 'primary.main'}} />
            <div className="flex flex-row gap-12 w-full justify-center">
                <Typography variant="body2" className="hover:cursor-pointer" color="primary" onClick={()=>{navigate('/privacy-policy')}}>Privacy Policy</Typography>
                <Typography variant="body2" className="hover:cursor-pointer" color="primary" onClick={()=>{navigate('/terms')}}>Terms & Conditions</Typography>
                <Typography variant="body2" className="hover:cursor-pointer" color='primary' onClick={()=>{navigate('/contact')}}>Contact</Typography>
            </div>
        </div>
    )
}

Footer;