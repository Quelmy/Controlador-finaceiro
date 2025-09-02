import React, { useState } from 'react'
import Grid from "../Grid"; // ajuste o caminho correto
import * as C from "./styles";

const Form = ({ handleAdd, TransactionsList, setTransactionsList }) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false); // default false = entrada

    const generateID = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        const amountNumber = Number(amount);

        if (!desc || !amount) {
            alert("Informe a descrição e o valor!");
            return;
        } else if (amountNumber < 1) {
            alert("O valor tem que ser positivo!");
            return;
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amountNumber,
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
                    <C.Label>Descrição</C.Label>
                    <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
                </C.InputContent>

                <C.InputContent>
                    <C.Label>Valor</C.Label>
                    <C.Input
                        value={amount}
                        type="number"
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </C.InputContent>

                <C.RadioGroup>
                    <C.Input
                        type="radio"
                        id="rIncome"
                        defaultChecked
                        name="group1"
                        onChange={() => setExpense(false)}
                    />
                    <C.Label htmlFor="rIncome">Entrada</C.Label>

                    <C.Input
                        type="radio"
                        id="rExpenses"
                        name="group1"
                        onChange={() => setExpense(true)}
                    />
                    <C.Label htmlFor="rExpenses">Saída</C.Label>
                </C.RadioGroup>

                <C.Button onClick={handleSave}>ADICIONAR</C.Button>
            </C.Container>

            <Grid itens={TransactionsList} setTransactionsList={setTransactionsList} />
        </>
    );
};

export default Form;
