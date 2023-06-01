import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  return (
    <div className="d-flex align-items-center">
      <div
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
      >
        <span className="navbar-toggler-icon"></span>
      </div>
      <p className="mb-0">Our Story</p>
      <div className="ms-3 date">
        {new Date().toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
        })}
      </div>
      <Button variant="dark" className="ms-auto">
        Login
      </Button>
    </div>
  );
}
