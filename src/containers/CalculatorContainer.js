import React from 'react';
import { Container } from '@mui/material';
import AffordabilityContainer from './AffordabilityContainer';
import RepaymentContainer from './RepaymentContainer';


export default function CalculatorContainer() {


    return (
        <Container maxWidth='sm'>
            <AffordabilityContainer />
            <br />
            <RepaymentContainer />
        </Container>
    )
}