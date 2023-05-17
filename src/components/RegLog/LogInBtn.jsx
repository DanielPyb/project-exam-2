import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LogInBtn() {
  return (
    <Link to="/login">
      <Button variant="dark">Log in</Button>
    </Link>
  );
}
