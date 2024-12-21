// src/pages/HomePage.tsx

import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';

const HomePage: React.FC = () => {
    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', py: 8 }}>
            {/* Hero Section */}
            <Container maxWidth="lg" sx={{ textAlign: 'center', mb: 6 }}>
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
                >
                    Get Started
                </Button>
            </Container>

            {/* Features Section */}
            <Container maxWidth="md">
                <Typography variant="h2" component="h2" color="primary" gutterBottom textAlign="center">
                    Why Polarius Hub?
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom color="primary">
                                    Real-Time Fact Checking
                                </Typography>
                                <Typography variant="body1">
                                    Stay informed with consolidated, unbiased sources that help Ana fight fake news
                                    and keep elves united. Our platform verifies posts, identifies misinformation,
                                    and provides credible references.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom color="primary">
                                    Community Engagement
                                </Typography>
                                <Typography variant="body1">
                                    Build meaningful discussions with your community of elves.
                                    Share verified updates, create polls, and encourage transparent
                                    decision-making—just what Ana needs to foster trust and unity.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom color="primary">
                                    Personalized Alerts
                                </Typography>
                                <Typography variant="body1">
                                    Focus on the news that matters. Our AI automatically flags relevant topics
                                    and urgent updates, ensuring you never miss a crucial story or potential threat.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom color="primary">
                                    Misinformation Radar
                                </Typography>
                                <Typography variant="body1">
                                    Identify patterns and tactics used by polarizing sources. With Polarius Hub,
                                    you can track disinformation campaigns, analyze sources, and safeguard elf communities.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

            {/* Hackathon Festive Note (Optional) */}
            <Box sx={{ textAlign: 'center', mt: 6 }}>
                <Typography variant="body1" color="text.secondary">
                    <em>
                        — Proudly built at XMAS FAF Hackathon 2024,
                        bringing truth and festive cheer to Laplandia and beyond —
                    </em>
                </Typography>
            </Box>
        </Box>
    );
};

export default HomePage;
