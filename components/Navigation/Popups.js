import React, { useState } from "react";
import { Nav, Modal } from "react-bootstrap";
import Register from "../Cards/Register";
import SignIn from "../Cards/SignIn";

const Popups = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div>
      <Nav>
        {/* <Link href="/hello" passHref> */}
        <Nav.Link onClick={() => setShowSignIn(true)}>SignIn</Nav.Link>
        {/* </Link> */}
        {/* <Link href="/hello" passHref> */}
        <Nav.Link onClick={() => setShowRegister(true)}>Register</Nav.Link>
        {/* </Link> */}
      </Nav>

      <Modal
        show={showSignIn}
        onHide={() => setShowSignIn(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <SignIn />
      </Modal>

      <Modal
        show={showRegister}
        onHide={() => setShowRegister(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Register />
      </Modal>
    </div>
  );
};

export default Popups;
