
import './App.css';
import TextField from "@material-ui/core/TextField"

function App() {
  return (
    <div className="App" 
    style={{
      display: "flex",  
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
      }}>
      <h1>CCL To DO APP!</h1>
      <TextField 
      id="outlined-basic" 
      label="Write a Todo" 
      style={{maxWidth: "300px", width: "90vw "}}
      />
    </div>
  );
}

export default App;
