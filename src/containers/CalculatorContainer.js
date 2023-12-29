import React, { useState } from 'react';
import SalaryForm from '../components/SalaryForm';
import LoanResult from '../components/LoanResult';
import MortgageForm from '../components/MortgageForm';
import { Container, Typography } from '@mui/material';

const CalculatorContainer = () => {

    const [affordableAmount, setAffordableAmount] = useState(0);


    const calculateLoan = (salary) => {
        const sal1 = parseInt(salary.mainSalary);
        const sal2 = parseInt(salary.secondSalary ? salary.secondSalary : 0);
        const salaryMultiplier = salary.salaryMultiplier;
        const deposit = parseInt(salary.deposit ? salary.deposit : 0);

        const salSum = sal1 + sal2;
        const maxMortgage = salSum * salaryMultiplier;
        const mortgageWithDeposit = maxMortgage + deposit;
        setAffordableAmount(mortgageWithDeposit);
    }

    const calculateMortgage = (mortgage) => {
        const debt = mortgage.mortgageDebt;
        const rate = mortgage.interestRate;
        const term = mortgage.mortgageTerm;

        
    }


    return (

        <>
            <Typography variant='h2' gutterBottom>Mortgage Calculator</Typography>
            <Container maxWidth='sm'>
                <Typography variant='h5' gutterBottom>Calculate the total amount you can afford</Typography>
                <SalaryForm onSalarySubmit={calculateLoan} />
                <LoanResult houseValue={affordableAmount} />
            </Container>
            <br />
            <Container maxWidth='sm'>
                <Typography variant='h5' gutterBottom>Calculate your monthly mortgage repayment amount</Typography>
                <MortgageForm onMortgageSubmit={calculateMortgage}/>

            </Container>
        </>
    )
}

export default CalculatorContainer;