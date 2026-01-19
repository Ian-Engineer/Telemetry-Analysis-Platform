import { useEffect, useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

function ErrorPage() {
  const navigate = useNavigate();

  // useEffect(()=>{navigate("/")},[])

  return (
    <Typography color="primary">
      Error
    </Typography>
  )
}

export default ErrorPage
