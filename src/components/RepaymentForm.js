import React from 'react';
import { Box, Divider, InputAdornment, TextField, Typography } from '@mui/material';


export default function RepaymentForm(props) {


    return (
        <Box sx={{ width: '100%' }}>

            <div>
                <Typography variant='subtitle1' gutterBottom>How much do you want to borrow?</Typography>
                <TextField
                    id='mortgageDebt'
                    label='Mortgage debt'
                    type='number'
                    value={props.mortgageDebt}
                    onChange={(e) => props.setMortgageDebt(e.target.valueAsNumber)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>£</InputAdornment>
                        ),
                        inputProps: { min: 0, required: true }
                    }} />
            </div>

            <br />
            <Divider/>
            <br />

            <div>
                <Typography variant='subtitle1' gutterBottom>What interest rate can you get?</Typography>
                <TextField
                    id='interestRate'
                    label='Initial interest rate'
                    type='number'
                    value={props.interestRate}
                    onChange={(e) => props.setInterestRate(e.target.valueAsNumber)}
                    sx={{ width: 130 }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">%</InputAdornment>
                        ),
                        inputProps: { min: 0, step: .01, required: true }
                    }} />
            </div>

            <br />
            <Divider />
            <br />

            <div>
                <Typography variant='subtitle1' gutterBottom>How many years do you need to pay this mortgage off?</Typography>
                <TextField
                    id='mortgageTerm'
                    label='Mortgage term'
                    type='number'
                    value={props.mortgageTerm}
                    onChange={(e) => props.setMortgageTerm(e.target.valueAsNumber)}
                    sx={{ width: 130 }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">years</InputAdornment>
                        ),
                        inputProps: { min: 0, required: true }
                    }} />
            </div>

        </Box>
    )
};