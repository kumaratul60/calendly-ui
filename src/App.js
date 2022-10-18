import { useState } from "react";
import {
  ClockCircleFilled,
  CalendarOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import "./style.css";

function App() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleName = (e) => {
    setName(e.target.value.split(" ").join(""));
  };

  function handleSubmit(e) {
    e.preventDefault();
    alert(`email: ${email}, name: ${name}`);
  }

  return (
    <main className="app">
      <section className="app_left">
        <p className="app_left_name">Gaurav Garg</p>
        <h1 className="app_left_heading">15 Minute Meeting</h1>
        <p className="app_clock">
          {" "}
          <ClockCircleFilled />
          <span style={{ marginLeft: "5px" }}>15 min</span>
        </p>
        <p className="app_calender">
          <CalendarOutlined />
          <span style={{ marginLeft: "5px" }}>
            {" "}
            9.30am-9.45am, Friday,
            <span style={{ marginLeft: "25px", display: "block" }}>
              {" "}
              September 16, 2022
            </span>
          </span>
        </p>
        <p className="app_worldClock">
          <GlobalOutlined />
          <span style={{ marginLeft: "5px" }}>Indian Standard Time</span>
        </p>
        <br />
      </section>
      <section className="app_right">
        <h2 className="right_header">Enter Details</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nameInput">
            <p className="right_label">
              Name <span>*</span>
            </p>
          </label>
          <input
            type="text"
            className="nameInput"
            placeholder="Name"
            value={name}
            onChange={handleName}
            required
          />
          <label htmlFor="emailInput">
            <p className="right_label">
              Email <span>*</span>
            </p>
          </label>
          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button className="app_btn">Add Guest</button>
          <p className="right_label">
            Please share anything that will help prepare for our meeting
          </p>
          <textarea className="app_textArea"></textarea>
          <button className="event_btn" type="submit">
            Schedule event
          </button>
        </form>
      </section>
    </main>
  );
}

export default App;
