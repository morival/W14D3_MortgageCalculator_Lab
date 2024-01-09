import { Divider, FormControl, FormControlLabel, InputAdornment, InputLabel, MenuItem, Select, Switch, TextField } from "@mui/material";
import React from "react";


export default function SalaryForm(props) {


    return (
        <div>

            <div>
                <FormControl>
                    <FormControlLabel
                        label='joint mortgage'
                        control={
                            <Switch checked={props.jointMortgage} onChange={(e) => props.setJointMortgage(e.target.checked)} />
                        } />
                </FormControl>
            </div>

            <br />
            <Divider />
            <br />

            <div>
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
                <InputLabel id="multiplier">Multiplier</InputLabel>
                <Select
                    labelId="multiplier"
                    value={props.salaryMultiplier}
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
            </div>

            <br />
            <Divider />
            <br />

            <div>
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

        </div>
    )
}