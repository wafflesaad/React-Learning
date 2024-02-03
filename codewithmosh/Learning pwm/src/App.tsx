import Btn from "./components/btn";
import Alert from "./components/alert";
import {useState} from "react";


function App() {
  let [showAlert, setShowAlert] = useState(0);

  let handleClick = () => {
    setShowAlert(1);
  };

  let handleClose = () => {
    setShowAlert(0);
  }

  return (
    <div>
      {!(showAlert === 0) && <Alert onClick={handleClose}>Alert!</Alert>}
      <Btn btntxt="Btn1" color="secondary" onClick={handleClick} />
    </div>
  );
}

export default App;
