import { Card, CardActions, CardContent, CardHeader } from '@mui/material';
import React, { useState } from 'react';
import AffordabilityForm from '../components/AffordabilityForm';
import AffordabilityResult from '../components/AffordabilityResult';


export default function AffordabilityContainer(params) {


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

    return (
        <Card variant='sm'>
            <CardHeader title='Mortgage affordibility calculator' />
            <CardActions>
                <AffordabilityForm onSalarySubmit={calculateLoan} />
            </CardActions>
            <CardContent>
                <AffordabilityResult houseValue={affordableAmount} />
            </CardContent>
        </Card>
    )
};
