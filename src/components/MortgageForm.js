import React from 'react';
import { Button, Divider, InputAdornment, TextField, Typography } from '@mui/material';


export default function MortgageForm(props) {
    // export default function MortgageForm({ onMortgageSubmit }) {

    // const [mortgageDebt, setMortgageDebt] = useState("170000");
    // const [interestRate, setInterestRate] = useState("5.5");
    // const [mortgageTerm, setMortgageTerm] = useState("35");

    // const handleMortgageDeptChange = e => setMortgageDebt(e.target.value);
    // const handleInterestRateChange = e => setInterestRate(e.target.value);
    // const handleMortgageTermChange = e => setMortgageTerm(e.target.value);

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     const debt = mortgageDebt;
    //     const rate = interestRate;
    //     const term = mortgageTerm;

    //     onMortgageSubmit({
    //         mortgageDebt: debt,
    //         interestRate: rate,
    //         mortgageTerm: term
    //     })
    // }
    const handleSubmit = e => {
        e.preventDefault();
        props.onMortgageSubmit();
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* <form onSubmit={handleSubmit}> */}

            <div>
                <Typography variant='subtitle1' gutterBottom>How much do you want to borrow?</Typography>
                <TextField
                    id='mortgageDebt'
                    label='Mortgage debt'
                    type='number'
                    value={props.mortgageDebt}
                    onChange={(e) => props.setMortgageDebt(e.target.value)}
                    // onChange={handleMortgageDeptChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>£</InputAdornment>
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
                    value={props.interestRate}
                    onChange={(e) => props.setInterestRate(e.target.value)}
                    // onChange={handleInterestRateChange}
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
                    onChange={(e) => props.setMortgageTerm(e.target.value)}
                    // onChange={handleMortgageTermChange}
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