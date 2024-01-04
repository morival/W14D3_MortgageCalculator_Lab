import React, { useState } from 'react';
import SalaryForm from '../components/SalaryForm';
import LoanResult from '../components/LoanResult';
import MortgageForm from '../components/MortgageForm';
import { Card, CardActions, CardContent, CardHeader, Container, Typography } from '@mui/material';

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

        const numberOfPayments = term * 12;
        const monthlyRate = rate / 100 / 12;
        const power = Math.pow(1 + monthlyRate, numberOfPayments);
        const payment = debt * (monthlyRate * power / (power - 1));
        const paymentRoundedUp = payment.toFixed(2)
        const totalRepayment = payment * numberOfPayments;
        console.log(paymentRoundedUp)
        console.log(totalRepayment.toFixed(2))
    }


    return (

        <>
            <Typography variant='h2' gutterBottom>Mortgage Calculator</Typography>
            <Container maxWidth='sm'>
                <Card variant='outlined'>
                    <CardHeader title='Calculate the total amount you can afford' />
                    <CardActions>
                        <SalaryForm onSalarySubmit={calculateLoan} />
                    </CardActions>
                    <CardContent>
                        <LoanResult houseValue={affordableAmount} />
                    </CardContent>
                </Card>
            </Container>
            <br />
            <Container maxWidth='sm'>
                <Card variant='outlined'>
                    <CardHeader title='Calculate your monthly mortgage repayment amount' />
                    <CardActions>
                        <MortgageForm onMortgageSubmit={calculateMortgage} />
                    </CardActions>
                    <CardContent>
                        
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}

export default CalculatorContainer;