import React, { useState } from "react";

export default function SalaryForm({ onSalarySubmit }) {

    const [jointMortgage, setJointMortgage] = useState(false)
    const [mainSalary, setMainSalary] = useState(0);
    const [secondSalary, setSecondSalary] = useState(0);
    const [modifier, setModifier] = useState(4.5);
    const [deposit, setDeposit] = useState(0);

    const onOptionChange = e => setJointMortgage(e.target.value === "yes")

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
            <label>joint mortgage?</label>
            <label>
                <input
                    type='radio'
                    value='no'
                    checked={jointMortgage === false}
                    onChange={onOptionChange} />
                no
            </label>
            <label>
                <input
                    type='radio'
                    value='yes'
                    checked={jointMortgage === true}
                    onChange={onOptionChange} />
                yes
            </label>

            <div>
                <label>Main Salary
                    <input
                        type='number'
                        min='0'
                        value={mainSalary}
                        onChange={handleMainSalaryChange} />
                </label>

                {jointMortgage ? <label>Second Salary
                    <input
                        type='number'
                        min='0'
                        value={secondSalary}
                        onChange={handleSecondSalaryChange} />
                </label> : null}
            </div>

            <div>
                <label>Modifier</label>
                <select
                    name='modifier'
                    id='modifier'
                    value={modifier}
                    onChange={e => setModifier(e.target.value)}
                >
                    <option value={3}>x3</option>
                    <option value={3.5}>x3.5</option>
                    <option value={4}>x4</option>
                    <option value={4.5}>x4.5</option>
                    <option value={5}>x5</option>
                </select>

                <label>Deposit</label>
                <input
                    type='number'
                    min='0'
                    value={deposit}
                    onChange={handleDeposit} />

                <input
                    type='submit'
                    value='Calculate Loan' />
            </div>

        </form>
    )
}