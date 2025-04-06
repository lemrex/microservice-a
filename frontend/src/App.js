import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // For styling

const services = [
  { name: "Date", url: "http://date.tf.work.gd" },
  { name: "Time", url: "http://time.tf.work.gd" },
  { name: "Random Number", url: "http://random.tf.work.gd" },
  { name: "UUID", url: "http://uuid.tf.work.gd" },
  { name: "IP Address", url: "http://ip.tf.work.gd" },
  { name: "Latency", url: "http://latency.tf.work.gd" }
];


function App() {
  const [responses, setResponses] = useState({});

  const fetchData = async (service) => {
    try {
      const response = await axios.get(service.url);
      setResponses((prev) => ({ ...prev, [service.name]: response.data }));
    } catch (error) {
      setResponses((prev) => ({
        ...prev,
        [service.name]: { error: "Failed to fetch data" },
      }));
    }
  };

  return (
    <div className="container">
      <h1>Service Dashboard</h1>
      <div className="buttons">
        {services.map((service) => (
          <button key={service.name} onClick={() => fetchData(service)}>
            Get {service.name}
          </button>
        ))}
      </div>
      <div className="results">
        {services.map((service) => (
          <div key={service.name} className="result-box">
            <h3>{service.name}:</h3>
            <pre>{JSON.stringify(responses[service.name] || "Click to fetch", null, 2)}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
