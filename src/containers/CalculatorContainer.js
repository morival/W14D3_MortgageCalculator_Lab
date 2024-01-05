import React, { useState } from 'react';
import SalaryForm from '../components/SalaryForm';
import LoanResult from '../components/LoanResult';
import MortgageForm from '../components/MortgageForm';
import { Card, CardActions, CardContent, CardHeader, Container } from '@mui/material';
import MortgageResult from '../components/MortgageResult';
import { useEffect } from 'react';


export default function CalculatorContainer() {


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


    const [mortgageDebt, setMortgageDebt] = useState("170000");
    const [interestRate, setInterestRate] = useState("5.5");
    const [mortgageTerm, setMortgageTerm] = useState("35");

    const [monthlyPayment, setMonthlyPayment] = useState(0);
    // const [totalRepayment, setTotalRepayment] = useState(0);

    useEffect(() => {
        const numberOfPayments = mortgageTerm * 12;
        const monthlyRate = interestRate / 100 / 12;
        const power = Math.pow(1 + monthlyRate, numberOfPayments);
        const payment = mortgageDebt * (monthlyRate * power / (power - 1));
        setMonthlyPayment(payment);
        // const totalPayment = payment * numberOfPayments;
        // setTotalRepayment(totalPayment.toFixed(2))
        console.log(mortgageDebt)
    }, [mortgageTerm, interestRate, mortgageDebt])

    return (
        <Container maxWidth='sm'>
            <Card variant='outlined'>
                <CardHeader title='Mortgage affordibility calculator' />
                <CardActions>
                    <SalaryForm onSalarySubmit={calculateLoan} />
                </CardActions>
                <CardContent>
                    <LoanResult houseValue={affordableAmount} />
                </CardContent>
            </Card>
            <br />
            <Card variant='outlined'>
                <CardHeader title='Mortgage repayment calculator' />
                <CardActions>
                    <MortgageForm
                        mortgageDebt={mortgageDebt}
                        setMortgageDebt={setMortgageDebt}
                        interestRate={interestRate}
                        setInterestRate={setInterestRate}
                        mortgageTerm={mortgageTerm}
                        setMortgageTerm={setMortgageTerm}
                    />
                </CardActions>
                <CardContent>
                    <MortgageResult
                        monthlyPayment={monthlyPayment}
                        monthlyInterest={mortgageDebt * interestRate / 1200}
                        mortgageDebt={mortgageDebt.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}
                        totalRepayment={monthlyPayment * mortgageTerm * 12}
                    />
                </CardContent>
            </Card>
        </Container>
    )
}