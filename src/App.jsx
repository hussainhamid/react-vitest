import "./App.css";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>hello from the main page of the app</h1>
      <p>here are some links:</p>
      <nav>
        <ul>
          <li>
            <Link to="profile">profile page</Link>
          </li>
          <li>
            <Link to="image">image</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
