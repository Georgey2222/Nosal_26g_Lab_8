import { useEffect, useRef, useState } from "react";
import "./App.css"

function App() {
  const [visible, setVisible] = useState(false)
  const [wasOpened, setWasOpened] =useState(false)

  useEffect(() => {
    if (wasOpened) {
      console.log("Перше відкриття модального вікна")
    }
  }, [wasOpened])

  function show() {
    setVisible(true)
    if (!wasOpened) {
      setWasOpened(true)
    }
  }

  function hide() {
    setVisible(false)
  }

  return (
    <div className="task">
      {visible?
        <div className="modal">
          <div className="back" onClick={hide}></div>
          <div className="container">
            <p>Модальне вікно</p>
            <button className="hide" onClick={hide}>Закрити</button>
          </div>
        </div>
      : null}
      <div className="content">
        <p>Відкрити модальне вікно</p><br/><br/><br/>
        <button className="show" onClick={show}>Відкрити</button>
      </div>
    </div>
  );
}

export default App;
