import { Link } from "react-router-dom";
import Button from "./Button";
import React from "react";

export default function PageButton({ className, onClick, page, children }) {
  return (
    <Link to={page}>
      <Button className={"m-10 " + className} onClick={onClick}>
        {children}
      </Button>
    </Link>
  );
}
