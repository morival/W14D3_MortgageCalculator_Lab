import { Button, Divider, FormControl, FormControlLabel, InputAdornment, InputLabel, MenuItem, Select, Switch, TextField } from "@mui/material";
import React, { useState } from "react";

export default function SalaryForm({ onSalarySubmit }) {

    const [jointMortgage, setJointMortgage] = useState(false)
    const [mainSalary, setMainSalary] = useState("");
    const [secondSalary, setSecondSalary] = useState("");
    const [salaryMultiplier, setSalaryMultiplier] = useState(4.5);
    const [deposit, setDeposit] = useState("");

    const handleSwitchJointMortgage = e => setJointMortgage(e.target.checked)

    const handleMainSalaryChange = e => setMainSalary(e.target.value);

    const handleSecondSalaryChange = e => setSecondSalary(e.target.value);

    const handleSelectSalaryMultiplier = e => setSalaryMultiplier(e.target.value);

    const handleDeposit = e => setDeposit(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        const mainSalaryToSubmit = mainSalary;
        const secondSalaryToSubmit = secondSalary;
        const salaryMultiplierToSubmit = salaryMultiplier;
        const depositToSubmit = deposit;

        onSalarySubmit({
            mainSalary: mainSalaryToSubmit,
            secondSalary: secondSalaryToSubmit,
            salaryMultiplier: salaryMultiplierToSubmit,
            deposit: depositToSubmit
        })
    }


    return (
        <form onSubmit={handleSubmit}>

            <div>
                <FormControl>
                    <FormControlLabel
                        label='joint mortgage'
                        control={
                            <Switch checked={jointMortgage} onChange={handleSwitchJointMortgage} />
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
                    value={mainSalary}
                    onChange={handleMainSalaryChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">£</InputAdornment>
                        ),
                        inputProps: { min: 0, required: true }
                    }} />

                {jointMortgage ? <TextField
                    id='secondSalary'
                    label='Second Salary'
                    type='number'
                    value={secondSalary}
                    onChange={handleSecondSalaryChange}
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
                    value={salaryMultiplier}
                    onChange={handleSelectSalaryMultiplier}
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
                    value={deposit}
                    onChange={handleDeposit}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">£</InputAdornment>
                        ),
                        inputProps: { min: 0 }
                    }} />
            </div>

            <br />
            <Divider />
            <br />

            <Button variant="contained" type='submit'>Calculate</Button>
        </form>
    )
}