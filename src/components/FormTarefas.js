import React, { useState } from "react";

const FormTarefas = ({ onSubmit }) => {
  const [novaTarefa, setNovaTarefa] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({
      id: Math.floor(Math.random() * 10000),
      descricao: novaTarefa,
      concluida: false,
    });
    setNovaTarefa("");
  }

  const handleChange = e => {
    setNovaTarefa(e.target.value);
  }

  return (
    <form className="tarefa-form" onSubmit={handleSubmit}>
      <>  
        <input 
          type="text"
          placeholder="Adicionar uma tarefa"
          value={novaTarefa}
          className="tarefa-input"
          onChange={handleChange}
        />      
        <button className="tarefa-button"> + </button>        
      </> 
    </form>
  );
}

export default FormTarefas;