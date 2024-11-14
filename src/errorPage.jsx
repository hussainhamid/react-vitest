import { Link } from "react-router-dom";
import "./App.css";

const ErrorPage = () => {
  return (
    <div>
      <h1>oh no , this route does not exist!</h1>
      <Link to="/profile/popeye" className="err">
        you can click here to go to the popeye page.
      </Link>
      <Link to="/profile/spinach" className="err">
        Or you can click here to go to the spinach page.
      </Link>
      <Link to="/" className="err">
        Or if you wanna go to the main page you can click here.
      </Link>
    </div>
  );
};

export default ErrorPage;
