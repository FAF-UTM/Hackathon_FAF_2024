// src/components/Footer.tsx

import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: 'primary.main',
                color: 'white',
                py: 3,
                mt: 4,
                textAlign: 'center',
            }}
        >
            <Grid container spacing={3} justifyContent="center">
                {/* Navigation Links */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        Quick Links
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                        <Link href="#" color="inherit" underline="none">
                            About Us
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="none">
                            Features
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="none">
                            Contact
                        </Link>
                    </Box>
                </Grid>

                {/* Contact Info */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        Contact
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                        <Typography variant="body2">
                            📧 Email: support@polariushub.com
                        </Typography>
                        <Typography variant="body2">
                            📍 Location: Laplandia, North Pole
                        </Typography>
                    </Box>
                </Grid>

                {/* Social Media */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        Follow Us
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                        <Link href="#" color="inherit" underline="none">
                            Facebook
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="none">
                            Twitter
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="none">
                            LinkedIn
                        </Link>
                    </Box>
                </Grid>
            </Grid>

            {/* Copyright Notice */}
            <Typography variant="body2" sx={{ mt: 3 }}>
                © {new Date().getFullYear()} Polarius Hub. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
