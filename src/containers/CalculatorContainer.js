import React, { useState } from 'react';
import SalaryForm from '../components/SalaryForm';
import LoanResult from '../components/LoanResult';
import MortgageForm from '../components/MortgageForm';
import { Container } from '@mui/material';

const CalculatorContainer = () => {

    const [affordableAmount, setAffordableAmount] = useState(0);


    const calculateLoan = (salary) => {
        const sal1 = parseInt(salary.mainSalary);
        const sal2 = parseInt(salary.secondSalary ? salary.secondSalary : 0);
        const modifier = salary.modifier;
        const deposit = parseInt(salary.deposit ? salary.deposit : 0);

        const salSum = sal1 + sal2;
        const maxMortgage = salSum * modifier;
        const mortgageWithDeposit = maxMortgage + deposit;
        setAffordableAmount(mortgageWithDeposit);
    }


    return (

        <>
            <h1>Mortgage Calculator</h1>
            <Container maxWidth='sm'>
                <h3>Calculate the total amount you can afford</h3>
                <SalaryForm onSalarySubmit={calculateLoan} />
                <LoanResult mortgage={affordableAmount} />
            </Container>
            <br />
            <Container maxWidth='sm'>
                <h3>Calculate your monthly mortgage repayment amount</h3>
                <MortgageForm />

            </Container>
        </>
    )
}

export default CalculatorContainer;