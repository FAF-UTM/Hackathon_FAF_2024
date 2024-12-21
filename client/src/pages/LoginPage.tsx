// src/pages/LoginPage.tsx

import React from 'react';
import { Box, Container, Typography, TextField, Button, Paper } from '@mui/material';

const LoginPage: React.FC = () => {
    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', bgcolor: 'background.default' }}>
            <Container maxWidth="sm">
                <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                    <Typography variant="h4" color="primary" gutterBottom align="center">
                        Polarius Hub Login
                    </Typography>
                    <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 4 }}>
                        Secure access to real-time fact-checking and community tools
                    </Typography>

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
                </Paper>
            </Container>
        </Box>
    );
};

export default LoginPage;
