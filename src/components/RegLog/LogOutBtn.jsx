import { Button } from "react-bootstrap";

export default function LogoutBtn({ handleLogout = { handleLogout } }) {
  return (
    <Button variant="dark" onClick={handleLogout}>
      Log out
    </Button>
  );
}
