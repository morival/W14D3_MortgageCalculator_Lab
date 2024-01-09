import { Box, Divider, FormControl, FormControlLabel, InputAdornment, InputLabel, MenuItem, Select, Switch, TextField, Typography } from "@mui/material";
import React from "react";


export default function AffordabilityForm(props) {


    return (
        <Box sx={{ width: '100%' }}>

            <div>
                <Typography variant='subtitle1' gutterBottom>Do you apply with someone?</Typography>
                <FormControl>
                    <FormControlLabel
                        label={props.jointMortgage ? 'yes' : 'no'}
                        control={
                            <Switch
                                checked={props.jointMortgage}
                                onChange={(e) => props.setJointMortgage(e.target.checked)} />
                        } />
                </FormControl>
            </div>

            <br />
            <Divider />
            <br />

            <div>
                <Typography variant='subtitle1' gutterBottom>What's your annual income?</Typography>
                <TextField
                    id='mainSalary'
                    label='Main Salary'
                    type='number'
                    value={props.mainSalary}
                    onChange={(e) => props.setMainSalary(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">£</InputAdornment>
                        ),
                        inputProps: { min: 0, required: true }
                    }} />

                {props.jointMortgage ? <TextField
                    id='secondSalary'
                    label='Second Salary'
                    type='number'
                    value={props.secondSalary}
                    onChange={(e) => props.setSecondSalary(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">£</InputAdornment>
                        ),
                        inputProps: { min: 0 }
                    }} /> : null}
            </div>

            <br />
            <Divider />
            <br />

            <div>
                <Typography variant='subtitle1' gutterBottom></Typography>
                <FormControl sx={{ width: 130 }}>
                    <InputLabel id='multiplier-helper-label'>Multiplier</InputLabel>
                    <Select
                        labelId='multiplier-helper-label'
                        id='multiplier'
                        value={props.salaryMultiplier}
                        label='Multiplier'
                        onChange={(e) => props.setSalaryMultiplier(e.target.value)}
                    >
                        <MenuItem value={4}>x4</MenuItem>
                        <MenuItem value={4.1}>x4.1</MenuItem>
                        <MenuItem value={4.2}>x4.2</MenuItem>
                        <MenuItem value={4.3}>x4.3</MenuItem>
                        <MenuItem value={4.4}>x4.4</MenuItem>
                        <MenuItem value={4.5}>x4.5</MenuItem>
                        <MenuItem value={4.6}>x4.6</MenuItem>
                        <MenuItem value={4.7}>x4.7</MenuItem>
                        <MenuItem value={4.8}>x4.8</MenuItem>
                        <MenuItem value={4.9}>x4.9</MenuItem>
                        <MenuItem value={5}>x5</MenuItem>
                    </Select>
                </FormControl >
            </div>

            <br />
            <Divider />
            <br />

            <div>
            <Typography variant='subtitle1' gutterBottom>How much do you have for a deposit?</Typography>
                <TextField
                    id='deposit'
                    label='Deposit'
                    type='number'
                    value={props.deposit}
                    onChange={(e) => props.setDeposit(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">£</InputAdornment>
                        ),
                        inputProps: { min: 0 }
                    }} />
            </div>

        </Box>
    )
}