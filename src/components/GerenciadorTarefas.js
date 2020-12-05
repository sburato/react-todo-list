import React, { useState } from "react";
import Titulo from "./Titulo";
import FormTarefas from "./FormTarefas";
import ListaTarefas from "./ListaTarefas";

const GerenciadorTarefas = () => {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = tarefa => {
    if (!tarefa.descricao.replace(/\s/, "").length) {
      return;
    }            
    setTarefas([tarefa, ...tarefas]);
  }

  const removerTarefa = id => { 
    setTarefas([...tarefas].filter(tarefa => tarefa.id !== id)); 
  }

  const atualizarTarefa = (tarefaId, novaDescricao) => { 
    const tarefasAtualizadas = tarefas.map(tarefa => {
      if (tarefa.id === tarefaId) {
        tarefa.descricao = novaDescricao;
      }
      return tarefa;
    });    
    setTarefas(tarefasAtualizadas);    
  }  

  const atualizarTarefaParaConcluida = (tarefaId) => { 
    const tarefasAtualizadas = tarefas.map(tarefa => {
      if (tarefa.id === tarefaId) {
        tarefa.concluida = !tarefa.concluida;
      }
      return tarefa;
    });    
    setTarefas(tarefasAtualizadas);    
  }    

  return(
    <>
      <Titulo title="Lista de Tarefas"/>      
      <FormTarefas 
        onSubmit={adicionarTarefa} />
      <ListaTarefas 
        tarefas={tarefas}         
        removerTarefa={removerTarefa}
        atualizarTarefa={atualizarTarefa}
        atualizarTarefaParaConcluida={atualizarTarefaParaConcluida}
      />
    </>
  );
}

export default GerenciadorTarefas;