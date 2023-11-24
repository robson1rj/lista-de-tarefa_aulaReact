import  {useState} from 'react';


function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    "Fazer o trabalho de SO2",
    "Estudar para a prova de APC2"
  ]);
  function botao(event){
    event.preventDefault();

    setTarefas([...tarefas, input]);
    setInput('');
  }

  return (
    <div>
      <h1>Cadastrando Usuario</h1> 

      <form onSubmit={botao}>
        <label>Nome da tarefa:</label><br/>
        <input 
        placeholder='Digite uma tarefa'
        value={input}
        onChange={(event) => setInput(event.target.value)}
        /><br/>

        <button type="submit">Registrar</button>
      </form>

      <br/>
      <br/>

      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
