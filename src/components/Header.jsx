import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };

  return (
    <>
      <h1 onClick={redirectToHome}>GabNBar Times</h1>
    </>
  );
}
