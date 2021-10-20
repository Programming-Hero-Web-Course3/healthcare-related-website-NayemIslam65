import './App.css'
import {AuthProvider} from "./context/AuthState"
import Routes from "./components/Routes";

function App() {
 
  return (
      <AuthProvider>
        <div className="App">
            <Routes/>
        </div>
      </AuthProvider>
  );
}

export default App;
