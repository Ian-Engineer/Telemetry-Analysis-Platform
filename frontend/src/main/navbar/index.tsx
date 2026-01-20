import { Box, AppBar, Toolbar, IconButton, useTheme, Typography, Tooltip } from "@mui/material";
import { CalendarMonth, Email, Home, AccountCircle, RocketLaunch, Analytics, AdminPanelSettings, Settings } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import DarkModeSwitch from './DarkModeSwitch'

function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();

    function clickLogo() {
        if (location.pathname !== "/") navigate("/")
    }

    const navigationOptions = [
        { name: "Home", icon: <Home />, path: "/" },
        { name: "Missions", icon: <RocketLaunch />, path: "/missions" },
        { name: "Dashboard", icon: <Analytics />, path: "/dashboard" },
        { name: "Settings", icon: <Settings />, path: "/settings" },
        { name: "Login", icon: <AccountCircle />, path: "/login" },
        { name: "Admin", icon: <AdminPanelSettings />, path: "/admin" },
    ];

    return (
        <Box>
            <AppBar position="static">
                <Toolbar className='w-full'>
                    <Box className='flex flex-row-reverse justify-between align-center w-full h-18'>
                        <div id="left side of menu" className="flex items-center align-center">
                            <Typography variant="h4" color="textPrimary" onClick={clickLogo} className="hover:cursor-pointer">
                                Telemetry Data Analysis
                            </Typography>
                        </div>
                        <div id='right side of menu' className="flex flex-row items-center align-center sm:gap-8 gap-4">
                            {navigationOptions.map((option) => (
                                <Tooltip title={option.name} key={option.name}>
                                    <IconButton onClick={() => navigate(option.path)}>
                                        {option.icon}
                                    </IconButton>
                                </Tooltip>
                            ))}
                            <DarkModeSwitch />
                        </div>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar;