import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from React Router
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import WhatshotIcon from '@mui/icons-material/Whatshot'; // Import the fire icon
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import './Navbar.css'; 

const Navbar = () => {
    const [isBurning, setIsBurning] = useState(false);
    const location = useLocation(); // Get the current location using useLocation

    const handleFireClick = () => {
        setIsBurning(!isBurning);
    };

    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#769FCD' }} className='appbar'>
            <Toolbar className='toolbar'>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/" className="nav-link">Finzo</Link>
                </Typography>
                {/* Resourse Library */}
                <Button color="inherit">
                    <Link to="/news" className={`nav-link ${location.pathname === "/news" ? "selected1" : ""}`}>Learn</Link>
                </Button> 
                {/* News Section */}
                <Button color="inherit" >
                    <Link to="/news" className={`nav-link ${location.pathname === "/news" ? "selected" : ""}`}>News</Link>
                </Button>
                {/* Quiz Section */}
                <Button color="inherit">
                    <Link to="/news" className={`nav-link ${location.pathname === "/news" ? "selected1" : ""}`}>Quiz</Link>
                </Button>
                {/* Discuss Section */}
                <Button color="inherit">
                    <Link to="/news" className={`nav-link ${location.pathname === "/news" ? "selected1" : ""}`}>Discuss</Link>
                </Button>
                {/* Streak Section */}
                <IconButton color="inherit" component={Link} to="/some-url" onClick={handleFireClick}>
                    {isBurning ? 
                        <LocalFireDepartmentIcon style={{ color: '#fedf17' }} /> :
                        <WhatshotIcon />
                    }
                </IconButton>
                <Button color="inherit">
                    <Link to="/news" className={`nav-link ${location.pathname === "/news" ? "selected1" : ""}`}>Login/Sign Up</Link>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
