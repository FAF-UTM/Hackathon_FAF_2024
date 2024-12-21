// src/pages/HomePage.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
    const navigate = useNavigate(); // React Router's navigation hook

    return (
        <div className="home">
            <Navbar />

           <div className="home_hero">
                <Typography variant="h1" component="h1" color="primary" gutterBottom>
                    Polarius Hub
                </Typography>
                <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
                    Navigating clarity and truth for Ana’s mission against misinformation
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    sx={{ px: 4, py: 1.5 }}
                    onClick={() => navigate('/login')} // Navigate to /login on click
                >
                    Get Started
                </Button>
           </div>



            {/* Hackathon Festive Note (Optional) */}
            <Box sx={{ textAlign: 'center', mt: 6 }}>
                <Typography variant="body1" color="text.secondary">
                    <em>
                        — Proudly built at XMAS FAF Hackathon 2024,
                        bringing truth and festive cheer to Laplandia and beyond —
                    </em>
                </Typography>
            </Box>

            <Footer />
        </div>
    );
};

export default HomePage;
