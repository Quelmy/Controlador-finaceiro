import React from "react";
import * as C from "./styles";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaTrash } from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
  return (
    <C.Tr>
      <C.Td>{item.desc}</C.Td>
      <C.Td>
        {Number(item.amount).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </C.Td>
      <C.Td alignCenter>
        {item.expense ? <FaRegArrowAltCircleDown color="red" aria-label="Saída" /> 
                      : <FaRegArrowAltCircleUp color="green" aria-label="Entrada" />}
      </C.Td>
      <C.Td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} style={{ cursor: "pointer" }} aria-label="Excluir transação" />
      </C.Td>
    </C.Tr>
  );
};

export default GridItem;
