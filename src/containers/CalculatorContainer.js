import React, { useState } from 'react';
import SalaryForm from '../components/SalaryForm';
import LoanResult from '../components/LoanResult';
import MortgageForm from '../components/MortgageForm';
import { Card, CardActions, CardContent, CardHeader, Container } from '@mui/material';
import MortgageResult from '../components/MortgageResult';


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
    // const [monthlyPayment, setMonthlyPayment] = useState(0);
    
    const countMonthlyPayment = () => {
        const numberOfPayments = mortgageTerm * 12;
        const monthlyRate = interestRate / 100 / 12;
        const power = Math.pow(1 + monthlyRate, numberOfPayments);
        const payment = mortgageDebt * (monthlyRate * power / (power - 1));
        return payment;
    }
    const [monthlyPayment, setMonthlyPayment] = useState(countMonthlyPayment().toFixed(2));

    const calculateMortgage = () => {
        const paymentRoundedUp = countMonthlyPayment().toFixed(2)
        // const totalRepayment = payment * numberOfPayments;
        setMonthlyPayment(paymentRoundedUp);

        console.log(paymentRoundedUp)
        // console.log(totalRepayment.toFixed(2))
    }


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
                        onMortgageSubmit={calculateMortgage} />
                </CardActions>
                <CardContent>
                    <MortgageResult
                        monthlyPayment={monthlyPayment}
                        mortgageDebt={mortgageDebt}
                    //  totalRepayment={totalRepayment} 
                    />
                </CardContent>
            </Card>
        </Container>
    )
}