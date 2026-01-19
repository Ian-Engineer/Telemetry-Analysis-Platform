import { Box, AppBar, Toolbar, IconButton, useTheme, Typography, Tooltip } from "@mui/material";
import { CalendarMonth, Email, Home } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import DarkModeSwitch from './DarkModeSwitch'

function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();

    function clickLogo() {
        if (location.pathname !== "/") navigate("/")
    }

    return (
        <Box>
            <AppBar position="static">
                <Toolbar className='w-full'>
                    <Box className='flex flex-row justify-between align-center w-full h-18'>
                        <div id="left side of menu" className="flex items-center align-center">
                            <Typography variant="h4" color="textPrimary" onClick={clickLogo} className="hover:cursor-pointer">
                                Telemetry Data Analysis
                            </Typography>
                        </div>
                        <div id='right side of menu' className="flex flex-row items-center align-center sm:gap-8 gap-4">
                        <DarkModeSwitch />
                        <Tooltip title="Home">
                            <IconButton onClick={()=>navigate("/")}>
                                <Home />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Missions">
                            <IconButton onClick={() => navigate("/missions" )}>
                                <CalendarMonth />
                            </IconButton>
                        </Tooltip>
                        {/* <Tooltip title="Contact Us">
                            <IconButton onClick={()=>navigate('/contact')}>
                                <Email />
                            </IconButton>
                        </Tooltip> */}
                        </div>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar;