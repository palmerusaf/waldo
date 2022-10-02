import { getErrorMsg } from "../utils/FormUtils";

export default function ErrorBox(props) {
  const { input } = props;
  return <em className="text-red-800 font-mono font-bold">{getErrorMsg(input)}</em>;
}
