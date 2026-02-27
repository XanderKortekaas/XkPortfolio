import FrontPage from "./components/FrontPage";
import Navbar from "./components/Navbar";
import Style from "./components/StyleGuide";
import logo from "./assets/YE.png";
function App() {
  return (
    <div className="App">
      <FrontPage logo={logo} />
      <Navbar />
      <Style />
    </div>
  );
}

export default App;
