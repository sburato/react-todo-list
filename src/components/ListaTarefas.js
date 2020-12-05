import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";

const ListaTarefas = ({ tarefas, removerTarefa, atualizarTarefa, atualizarTarefaParaConcluida }) => {
  return (
    tarefas.map((tarefa, index) => (
      <div 
        key={index} 
        className={tarefa.concluida ? "tarefa-row risca-tarefa-concluida" : "tarefa-row"}
      >      
        <input      
          type="checkbox" 
          className="tarefa-checkbox" 
          checked={tarefa.concluida}
          onChange={() => atualizarTarefaParaConcluida(tarefa.id)}
        /> 

        <input 
          type="text"          
          value={tarefa.descricao}          
          onChange={(e) => atualizarTarefa(tarefa.id, e.target.value)}
          className={
            tarefa.descricao.toUpperCase().includes("LER") || tarefa.descricao.toUpperCase().includes("ESTUDAR") ? 
            "tarefa-item-input-blue" : 
            "tarefa-item-input"}                     
        />         

        <div className="icons">
          <RiCloseCircleLine onClick={() => removerTarefa(tarefa.id)} />
        </div>
      </div>
    ))
  )
}

export default ListaTarefas;