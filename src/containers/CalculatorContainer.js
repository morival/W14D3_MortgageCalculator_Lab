import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import AffordabilityContainer from './AffordabilityContainer';
import RepaymentContainer from './RepaymentContainer';


export default function CalculatorContainer() {


    return (
        <Container>
            <Typography variant='h2' align='center'>Mortgage Calculator</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <AffordabilityContainer />
                <RepaymentContainer />
            </Box>
        </Container>
    )
}