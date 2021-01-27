import React, {useState} from "react";

const SalaryForm = ({onSalarySubmit}) =>{

    const [mainSalary, setMainSalary] = useState(0);
    const [secondSalary, setSecondSalary] = useState(0);
    const [deposit, setDeposit] = useState(0);

    const handleMainSalaryChange = (evt) => {
        setMainSalary(evt.target.value);
    }

    const handleSecondSalaryChange = (evt) => {
        setSecondSalary(evt.target.value);
    }

    const handleDeposit = (evt) => {
        setDeposit(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const mainSalaryToSubmit = mainSalary;
        const secondSalaryToSubmit = secondSalary;
        const depositToSubmit = deposit;
        
        onSalarySubmit({
            mainSalary: mainSalaryToSubmit,
            secondSalary: secondSalaryToSubmit,
            deposit: depositToSubmit
        })
        setMainSalary(0);
        setSecondSalary(0);
        setDeposit(0);
    }

    
    return(
        <form onSubmit={handleSubmit}>

            <label >First Salary</label>
            <input type="number"
            min="0"
            value={mainSalary}
            onChange={handleMainSalaryChange}/>

            <label>Second Salary</label>
            <input type="number"
            min="0"
            value={secondSalary}
            onChange={handleSecondSalaryChange}/>

            <label>Deposit</label>
            <input type="number"
            min="0"
            value={deposit}
            onChange={handleDeposit}/>

            <input type="submit"
            value="Calculate Loan"/>

        </form>
    )
}

export default SalaryForm;