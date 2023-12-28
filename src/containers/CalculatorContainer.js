import React, {useState} from 'react';
import SalaryForm from '../components/SalaryForm';
import LoanResult from '../components/LoanResult';

const CalculatorContainer = () => {

    const [mortgage, setMortgage] = useState(0);


    const calculateLoan = (salary) => {
        const sal1 = parseInt(salary.mainSalary);
        const sal2 = parseInt(salary.secondSalary);
        const modifier = salary.modifier;
        const deposit = parseInt(salary.deposit);
        
        const salSum = sal1 + sal2;
        const maxMortgage = salSum * modifier;
        const mortgageWithDeposit = maxMortgage + deposit;
        setMortgage(mortgageWithDeposit);
    }
    

    return(

        <>
            <h1>Mortgage Calculator</h1>
            <SalaryForm onSalarySubmit={calculateLoan}/>
            <LoanResult mortgage={mortgage} />
        </>
    )
}

export default CalculatorContainer;