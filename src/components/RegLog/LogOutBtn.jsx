import { Button } from "react-bootstrap";

export default function LogoutBtn() {
  function logOut() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("profileName");
  }

  return (
    <Button variant="dark" onClick={logOut}>
      Log out
    </Button>
  );
}
