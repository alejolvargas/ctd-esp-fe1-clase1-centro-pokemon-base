import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Formulario from "./components/Formulario/Formulario";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const clientProvider = new QueryClient();
  return (
    <QueryClientProvider client={clientProvider}>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/formularioIngreso1" element={<Formulario />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
