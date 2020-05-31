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

    const [charge, setCharge] = useState('')

    const [amount, setAmount] = useState('')
    const [edit, setEdit] = useState(false)
    const [id, setId] = useState(0)
    const [alert, setAlert] = useState({show: false})

    const handleCharge = e => {
        setCharge(e.target.value);
    }
    const handleAmount = e => {
        setAmount(e.target.value);
    }
    const handleAlert = ({type,text}) => {
        setAlert({show: true, type, text})
        setTimeout(() => {
            setAlert({show: false})
        }, 3000)
    }
    const clearItems = () => {
        setExpenses([])
    }
    const handleDelete = id => {
        const exp = expenses.filter(item => item.id !== id)
        setExpenses(exp)
        handleAlert({type: 'danger', text: 'item deleted'})

    }
    const handleEdit = id => {

    }

    const handleSubmit = e => {
        e.preventDefault();
        if (charge !== '' && amount > 0) {
            const singleExpenses = {id: uuid(), charge: charge, amount: amount }
            setExpenses([...expenses, singleExpenses])
            handleAlert({type: 'success', text: 'Budget added'})
            setCharge('')
            setAmount('')
        } else {
            handleAlert({type:'danger', text: `Charge ang aount cant be empy`})
        }
    }

    return (
        <>
            {alert.show && <Alert type={alert.type} text={alert.text}/>}
            <div className="container-lg">
                <Title title="Budget calculator"/>
                <ExpenseForm charge={charge} amount={amount} handleAmount={handleAmount}
                handleCharge={handleCharge} handleSubmit={handleSubmit}/>
                <ExpenseList handleEdit={handleEdit} handleDelete={handleDelete}
                             expenses={expenses}/>
                <Footer clearItems={clearItems} expenses={expenses}/>
            </div>
        </>
    );
}

export default App;
