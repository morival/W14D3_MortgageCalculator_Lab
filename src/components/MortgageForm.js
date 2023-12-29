import { Button, Divider, InputAdornment, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';


export default function MortgageForm({ onMortgageSubmit }) {

    const [mortgageDebt, setMortgageDebt] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [mortgageTerm, setMortgageTerm] = useState("");

    const handleMortgageDeptChange = e => setMortgageDebt(e.target.value);
    const handleInterestRateChange = e => setInterestRate(e.target.value);
    const handleMortgageTermChange = e => setMortgageTerm(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        const debt = mortgageDebt;
        const rate = interestRate;
        const term = mortgageTerm;

        onMortgageSubmit({
            mortgageDebt: debt,
            interestRate: rate,
            mortgageTerm: term
        })
    }

    return (
        <form onSubmit={handleSubmit}>

            <div>
                <Typography variant='subtitle1' gutterBottom>How much do you want to borrow?</Typography>
                <TextField
                    id='mortgageDebt'
                    label='Mortgage debt'
                    type='number'
                    value={mortgageDebt}
                    onChange={handleMortgageDeptChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">£</InputAdornment>
                        ),
                        inputProps: { min: 0, required: true }
                    }} />
            </div>

            <br />
            <Divider />
            <br />

            <div>
                <Typography variant='subtitle1' gutterBottom>What interest rate can you get?</Typography>
                <TextField
                    id='interestRate'
                    label='Initial interest rate'
                    type='number'
                    value={interestRate}
                    onChange={handleInterestRateChange}
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
                    value={mortgageTerm}
                    onChange={handleMortgageTermChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">years</InputAdornment>
                        ),
                        inputProps: { min: 0, required: true }
                    }} />
            </div>

            <br />
            <Divider />
            <br />

            <Button variant="contained" type='submit'>Calculate</Button>
        </form>
    )
};