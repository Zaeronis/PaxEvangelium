import './App.css'
import EphesiansSix from "./assets/pages/landing/com/EphesiansSix.jsx";

function App() {

  return (
    <>
      <div>
        <img
            src="/pax.png"
            alt="Pax Evangelium Logo"
            className="logo"
        />
        <h1 className="title">Pax Evangelium</h1>
        <br/>
        <br/>
        <EphesiansSix />
        <br/>
        <br/>
        <p>An all-in-one platform for spiritual utility and community.</p>
        <p><em>Coming Soon.</em></p>
      </div>
    </>
  )
}

export default App
