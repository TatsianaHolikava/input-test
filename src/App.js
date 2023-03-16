import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function App() {
  const [period, setPeriod] = useState("current period");
  const [form, setForm] = useState(["64A", "64B", "64C"]);
  const [demoYear, setDemoYear] = useState("");

  const handlePeriodChange = (e) => {
    const value = e.target.value;
    setPeriod(value);
    setForm(value === "current period" ? form === "64A" : "");
  };

  // код выглядит правильно и должен работать, но инпуты вообще не печаются
  // const handleChange = (e) => {
  //   const inputValue = e.target.value;
  //   if(form === "64A") {
  //     if(inputValue === "NA") {
  //       setDemoYear("NA");
  //     } else {
  //       setDemoYear(inputValue);
  //     }
  //   } else if(form === "64B" || form === "64C") {
  //     if(/^\d+$/.test(inputValue)) { // проверяем, что inputValue состоит только из цифр
  //       if (inputValue >= 1 && inputValue <= 9) {
  //         setDemoYear(`0${inputValue}`);
  //       } else {
  //         setDemoYear(inputValue);
  //       }
  //     }
  //   }
  // };

//работает нормально, только NA вписывается не в зависимости от выбранного form
  // const handleChange = (e) => {
  //   const inputValue = e.target.value;
  //   if(form === "64A" && inputValue === "NA") {
  //     setDemoYear("NA") 
  //     if(form === "64A" && Number(inputValue) >= 1 && Number(inputValue) <= 9)
  //     setDemoYear(`0${inputValue}`);
  //   } else if (form !== "64A" && Number(inputValue) >= 1 && Number(inputValue) <= 9) {
  //     setDemoYear(`0${inputValue}`);
  //   } else {
  //     setDemoYear(inputValue);
  //   }
  // };

  const handleChange = (event) => {
    const demoYear = event.target.value;
    if (form === "64A") {
      if (demoYear === "NA") {
        setDemoYear(demoYear);
      }else if(Number(demoYear) >= 1 && Number(demoYear) <= 9){
        setDemoYear(`0${demoYear}`);
      }
      else {
        setDemoYear("");
      }
    } else if (form === "64B" || form === "64C") {
      if (Number(demoYear) >= 1 && Number(demoYear) <= 9) {
        setDemoYear(`0${demoYear}`);
      } else {
        setDemoYear("");
      }
    }
  };


  const handleInputChange = demoYear => {
    setDemoYear({demoYear, wasAddFormPermormed: false})
  }
//пока самый рабочий вариант, но без NA
  // const handleChange = (e) => {
  //   let value = e.target.value;
  //   if (value !== "NA") {
  //     value = parseInt(value, 10);
  //     if (!isNaN(value) && value >= 1 && value <= 99) {
  //       value = value.toString().padStart(2, "0");
  //     } else {
  //       value = "";
  //     }
  //   }
  //   setDemoYear(value);
  // };


  return (
    <div className="App">1
      <h1>Input Test</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection:'column',
        }}
      >
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Period
          </InputGroup.Text>
          <Form.Control
            as="select"
            aria-label="Period"
            aria-describedby="inputGroup-sizing-default"
            onChange={handlePeriodChange}
            value={period}
          >
            <option>Select period</option>
            <option value="current period">current period</option>
            <option value="prior period">prior period</option>
          </Form.Control>
        </InputGroup>
        {period === "current period" && (
          <InputGroup 
          
          className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Form
            </InputGroup.Text>
            <Form.Control
              as="select"
              aria-label="Form"
              aria-describedby="inputGroup-sizing-default"
              onChange={(e) => setForm(e.target.value)}
              value={form}
            >
              <option>Select form</option>
              <option value="64">
                64A
              </option>
              <option value="64 Base">64B</option>
              <option value="64I Expendute">64C</option>
            </Form.Control>
          </InputGroup>
        )}
        {period === "prior period" && (
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Form
            </InputGroup.Text>
            <Form.Control
              as="select"
              aria-label="Form"
              aria-describedby="inputGroup-sizing-default"
            >
              <option>Select form</option>
              <option>Option1</option>
              <option>Option2</option>
              <option>Option3</option>
            </Form.Control>
          </InputGroup>
        )}
      </div>
      {period === "current period" && <InputGroup className="mb-3">
       <InputGroup.Text id="inputGroup-sizing-default">
          Demo Year
        </InputGroup.Text>
        <Form.Control
          type="text"
          aria-label="Demo Year"
          maxLength="2"
          aria-describedby="inputGroup-sizing-default"
          onChange={handleChange}
          value={demoYear}
        />
      
      </InputGroup>
}
       {/* {period === "current period" && <InputGroup className="mb-3">
       <InputGroup.Text id="inputGroup-sizing-default">
          Demo Year
        </InputGroup.Text>
        <Form.Control
          type="text"
          aria-label="Demo Year"
          maxLength="2"
          aria-describedby="inputGroup-sizing-default"
          onChange={handleChange}
          value={demoYear}
        />
      </InputGroup>

      } */}
      
    </div>
  );
}

export default App;
























