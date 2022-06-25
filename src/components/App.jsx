import React, { useState } from "react";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  function updateFname(event) {
    setFname(event.target.value);
  }
  function updateLname(event) {
    setLname(event.target.value);
  }
  return (
    <div className="container">
      <h1>Hello {fname} {lname}</h1>
      <form>
        <input
        onChange={updateFname}
         name="fName"
          placeholder="First Name"
           value={fname}
            />
        <input
        onChange={updateLname} 
        name="lName" 
        placeholder="Last Name" 
        value={lname} 

        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
