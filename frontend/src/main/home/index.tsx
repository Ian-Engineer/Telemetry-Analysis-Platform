import { Box, Paper, Typography } from "@mui/material";
import { AppButton } from "../_sharedComponents";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="w-full flex flex-col gap-8">
            <Box sx={{bgcolor: 'primary.main'}} className='w-full flex flex-row'>
                <div id="left-side" className="w-full sm:w-1/3 m-6 sm:m-12 text-left flex flex-col gap-8">
                    <Typography variant="h2" fontWeight={'900'}>
                        Turn miles into donations.
                    </Typography>
                    <Typography variant='body1'>
                        Run4Rights hosts community events that raise money for rotating nonprofits. The more we raise together, the more miles our team runs.
                    </Typography>
                    <AppButton text={"See Missions"} onClick={()=>navigate('/missions')}/>
                </div>
                <div id='right-side' className="w-1/2 sm:flex grow items-center justify-center text-center p-5 hidden">
                    <Paper sx={{bgcolor: 'secondary.main'}} className='w-full h-full flex items-center justify-center'>
                        <Typography fontWeight={'900'}>Graphic</Typography>
                    </Paper>
                </div>
            </Box>
        </div>
    )
}

export default HomePage;