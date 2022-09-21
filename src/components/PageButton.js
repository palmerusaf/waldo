import { Link } from "react-router-dom";
import Button from "./Button";

export default function PageButton({ page, children }) {
  return (
    <Link to={page}>
      <Button className="m-10">{children}</Button>
    </Link>
  );
}
