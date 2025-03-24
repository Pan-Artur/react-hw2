import './App.css';
import { Greeting } from "./components/Greeting";
import { Message } from "./components/Message";
import { Button } from "./components/Button";

import "./Components.module.scss";

function App() {
  const showMessage = () => {
    console.log("Обробник кліку був успішно спрацьований.");
  }

  return (
    <div className="App">
      <Greeting name="користувач" />
      <Message text="Користувач зайшов на сайт." />
      <Button onClick={showMessage}/>
    </div>
  );
}

export default App;
