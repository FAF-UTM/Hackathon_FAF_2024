// src/pages/LoginPage.tsx

import React from 'react';
import { Box, Container, Typography, TextField, Button, Paper } from '@mui/material';

const LoginPage: React.FC = () => {
    return (

               <div className="login_page">
                 <div className="login_form">

                           <div className="login_form_title">
                               Polarius Hub Login
                           </div>



                       <Box component="form" noValidate autoComplete="off">
                           <TextField
                               margin="normal"
                               required
                               fullWidth
                               id="email"
                               label="Email Address"
                               type="email"
                               variant="outlined"
                           />
                           <TextField
                               margin="normal"
                               required
                               fullWidth
                               id="password"
                               label="Password"
                               type="password"
                               variant="outlined"
                           />
                           <Button
                               style={{borderRadius:"10px", height:"54px", marginTop:"10px"}}
                               variant="contained"
                               color="primary"
                               fullWidth
                               sx={{ mt: 3, mb: 2 }}
                           >
                               Sign In
                           </Button>
                       </Box>
                       <Typography variant="body2" color="text.secondary" align="center">
                           <em>New to Polarius Hub? Contact the elves for an invitation!</em>
                       </Typography>
                   </div>
                   <img className="login_img" src="/images/login_image.png" alt="Polarius_hub"/>
               </div>


    );
};

export default LoginPage;
