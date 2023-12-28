import { Button, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Switch, TextField } from "@mui/material";
import React, { useState } from "react";

export default function SalaryForm({ onSalarySubmit }) {

    const [jointMortgage, setJointMortgage] = useState(false)
    const [mainSalary, setMainSalary] = useState("");
    const [secondSalary, setSecondSalary] = useState("");
    const [modifier, setModifier] = useState(4.5);
    const [deposit, setDeposit] = useState("");

    const onOptionChange = e => setJointMortgage(e.target.checked)

    const handleMainSalaryChange = e => setMainSalary(e.target.value);

    const handleSecondSalaryChange = e => setSecondSalary(e.target.value);

    const handleDeposit = e => setDeposit(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        const mainSalaryToSubmit = mainSalary;
        const secondSalaryToSubmit = secondSalary;
        const modifierToSubmit = modifier;
        const depositToSubmit = deposit;

        onSalarySubmit({
            mainSalary: mainSalaryToSubmit,
            secondSalary: secondSalaryToSubmit,
            modifier: modifierToSubmit,
            deposit: depositToSubmit
        })
    }


    return (
        <form onSubmit={handleSubmit}>
            <FormControl>
                <FormControlLabel
                    label='joint mortgage'
                    control={
                        <Switch checked={jointMortgage} onChange={onOptionChange} />
                    } />
            </FormControl>

            <div>
                <TextField
                    id='mainSalary'
                    label='Main Salary'
                    type='number'
                    value={mainSalary}
                    onChange={handleMainSalaryChange}
                    InputProps={{ inputProps: { min: 0 } }} />

                {jointMortgage ? <TextField
                    id='secondSalary'
                    label='Second Salary'
                    type='number'
                    value={secondSalary}
                    onChange={handleSecondSalaryChange}
                    InputProps={{ inputProps: { min: 0 } }} /> : null}
            </div>
            <br />
            <div>
                <InputLabel id="modifier">modifier</InputLabel>
                <Select
                    labelId="modifier"
                    value={modifier}
                    onChange={e => setModifier(e.target.value)}
                >
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={4.1}>4.1</MenuItem>
                    <MenuItem value={4.2}>4.2</MenuItem>
                    <MenuItem value={4.3}>4.3</MenuItem>
                    <MenuItem value={4.4}>4.4</MenuItem>
                    <MenuItem value={4.5}>4.5</MenuItem>
                    <MenuItem value={4.6}>4.6</MenuItem>
                    <MenuItem value={4.7}>4.7</MenuItem>
                    <MenuItem value={4.8}>4.8</MenuItem>
                    <MenuItem value={4.9}>4.9</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                </Select>
            </div>
            <br />
            <div>
                <TextField
                    id='deposit'
                    label='Deposit'
                    type='number'
                    value={deposit}
                    onChange={handleDeposit}
                    InputProps={{ inputProps: { min: 0 } }} />
            </div>
            <br />
            <div>
                <Button variant="contained" type='submit'>Calculate</Button>
            </div>

        </form>
    )
}