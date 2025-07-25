import React, { useState, useEffect } from "react";

export default function Tasklist() {
  const [tarefa, setTarefa] = useState("");
  const [listaTarefas, setListaTarefas] = useState([]);

  // Carregar tarefas do localStorage ao montar o componente
  useEffect(() => {
    const tarefasSalvas = localStorage.getItem("tarefas");
    if (tarefasSalvas) {
      setListaTarefas(JSON.parse(tarefasSalvas));
    }
  }, []);

  // Salvar tarefas no localStorage sempre que listaTarefas mudar
  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(listaTarefas));
  }, [listaTarefas]);

  const adicionarTarefa = () => {
    if (tarefa.trim() !== "") {
      setListaTarefas((prev) => [...prev, tarefa.trim()]);
      setTarefa("");
    }
  };

  const removerTarefa = (index) => {
    setListaTarefas((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Lista de Tarefas</h2>

      <input
        type="text"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
        placeholder="Digite uma tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul>
        {listaTarefas.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button
              onClick={() => removerTarefa(index)}
              style={{ color: "red" }}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
