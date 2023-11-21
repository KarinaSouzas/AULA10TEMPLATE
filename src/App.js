import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Login  from "./pages/tarefa/login";
import Senha  from "./pages/tarefa/login";

function App() {
  return (
    <div className="App">
      <Header />
      <ListarTarefa />
      <>Login  </>
     <Login />
     <>Senha  </>
     <Senha />
    </div>
  );
}

export default App;
