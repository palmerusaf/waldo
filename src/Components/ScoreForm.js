import SecondButton from "./SecondButton";

export default function ScoreForm(props) {
  const { setName, className } = props;
  return (
    <form className={"flex justify-center gap-2 " + className}>
      <label htmlFor="name" className="font-bold">
        Name:
      </label>
      <input
        id="name"
        type="text"
        className="rounded-full border-yellow-400 border-solid border-2 text-center"
      />
      <SecondButton
        onClick={(e) => {
          e.preventDefault();
          const inputName = document.getElementById("name");
          setName(inputName.value);
        }}
      >
        Submit
      </SecondButton>
    </form>
  );
}
