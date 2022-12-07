import { Button } from "bootstrap";
import { useState } from "react";
import Test from "./Test";

function App() {

  const [show,setShow] = useState(false)
  return(
    <>
      <button onClick={() => setShow(show => !show)}>
        {show ? 'Gizle' : 'Göster'}
      </button>
      {show && <Test></Test>}
    </>
  )
}

export default App;