import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function App() {
    const periods = ['current period', 'prior period']
    const forms = ['64A', '64B', '64C'];

    const [period, setPeriod] = useState('');
    const [form, setForm] = useState('');
    const [demoYear, setDemoYear] = useState("");
    


    const handlePeriodChange = (e) => {
        const value = e.target.value;
        setPeriod(value);
    };

// const handleValidation = enteredValue => {
//   const newRegExp = new RegExp('^([NA]|[0-9][1-9]?)$');
//   if (newRegExp.test(enteredValue)) {
//     setDemoYear(enteredValue);
// }
// }

// const handleInputDemoYear = demonstrationYear => {
// setState({demonstrationYear, wasAddFormPermormed: false})
// }


    const handleChange = (e) => {
      let value = e.target.value;
      if (form === "64A") {
  
          if (/^\d{1,2}$/.test(value) && value >= 1 && value <= 99) {
              if (value.length === 1) {
                  value = "0" + value;
              }
          }
  
          if (typeof value === "string" && value.length === 1) {
              value = 'NA';
          }
  
          if (demoYear === "NA") {
              value = '';
              setDemoYear('');
          }
      }
      if (form === "64B" || form === "64C") {
          if (typeof value === "string" && isNaN(value)) {
              value = '';
          }
          if (/^\d{1,2}$/.test(value) && value >= 1 && value <= 99) {
              if (value.length <= 1) {
                  value = "0" + value;
              }
          }
      }
      setDemoYear(value);
  };


    return (
        <div className="App">1
            <h1>Input Test</h1>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: 'column',
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
                    //input Form for current period
                    <InputGroup className="mb-3">
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
                            <option value="64A">
                                64A
                            </option>
                            <option value="64B">64B</option>
                            <option value="64C">64C</option>
                        </Form.Control>
                    </InputGroup>
                )}

                {period === "prior period" && (
                    //input Form for prior period
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
        </div>
    );
}


export default App;






















