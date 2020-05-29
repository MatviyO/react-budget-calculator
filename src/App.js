import React, {useState} from 'react';
import './App.css';
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";
import {v4 as uuid} from 'uuid'
import Title from "./components/Title";
import Footer from "./components/Footer";

const initialExpenses = [
    {id: uuid(), charge: "rent", amount: 1600},
    {id: uuid(), charge: "car payment", amount: 400},
    {id: uuid(), charge: "credit card bill", amount: 1200}

];

function App() {
    const [expenses, setExpenses] = useState(initialExpenses)
    return (
        <>
            <Alert/>
            <div className="container-lg">
                <Title title="Budget calculator"/>
                <ExpenseForm />
                <ExpenseList expenses={expenses}/>
                <Footer expenses={expenses}/>
            </div>
        </>
    );
}

export default App;
