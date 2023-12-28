import React, { useState } from 'react';
import SalaryForm from '../components/SalaryForm';
import LoanResult from '../components/LoanResult';
import MortgageForm from '../components/MortgageForm';

const CalculatorContainer = () => {

    const [affordableAmount, setAffordableAmount] = useState(0);


    const calculateLoan = (salary) => {
        const sal1 = parseInt(salary.mainSalary);
        const sal2 = parseInt(salary.secondSalary);
        const modifier = salary.modifier;
        const deposit = parseInt(salary.deposit);

        const salSum = sal1 + sal2;
        const maxMortgage = salSum * modifier;
        const mortgageWithDeposit = maxMortgage + deposit;
        setAffordableAmount(mortgageWithDeposit);
    }


    return (

        <>
            <h1>Mortgage Calculator</h1>
            <div style={{ maxWidth: '600px' }}>
                <h3>Calculate the total amount you can afford</h3>
                <SalaryForm onSalarySubmit={calculateLoan} />
                <LoanResult mortgage={affordableAmount} />
            </div>
            <br />
            <div style={{ maxWidth: '600px' }}>
                <h3>Calculate your monthly mortgage repayment amount</h3>
                <MortgageForm />

            </div>
        </>
    )
}

export default CalculatorContainer;