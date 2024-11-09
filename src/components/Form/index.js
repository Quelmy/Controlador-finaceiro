import React, { useState } from 'react'
import * as C from "./styles";

const Form = ({handleAdd, TransactionsList, setTransactionsList}) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState("");

    const generateID = () => Math.round(Math.random() * 1000);

    const hanleSave = () => {
        if(!desc || !amount) {
            alert("informe a descrição e o valor!");
            return;
        } else if (amount < 1) {
            alert("o valor tem que ser positivo!");
            return
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        };

        handleAdd(transaction);

        setDesc("");
        setAmount("");
    };

    return (
       <>
         <C.Container>
            <C.InputContent>
                <C.label>descrição</C.label>
                <C.input value={desc} onChange={(e) => setDesc(e.target)} />
            </C.InputContent>
            <C.InputContent>
                <C.label>valor</C.label>
                <C.input
                    value={amount}
                    type="number"
                    onChange={(e) => setAmount(e.target.value)}
                />
            </C.InputContent>
            <C.RadioGroup>
                <C.input
                    type="radio"
                    id="rIncome"
                    defaultChecked
                    name="group1"
                    onChange={() => setExpense(!isExpense)}
                />    
                <C.label htmlFor="rIcome">Entrada</C.label>
                <C.input
                    type="radio"
                    id="rExpenses"
                    name="group1"
                    onChange={() => setExpense(!isExpense)}
                />   
                <C.label htmlFor="rExpenses">Saida</C.label>
            </C.RadioGroup>
            <C.Button onClick={hanleSave}>ADICIONAR</C.Button>
         </C.Container>
         <Grid itens={TransactionsList} setTransactionsList={setTransactionsList} />
       </>
    )
}

export default Form;