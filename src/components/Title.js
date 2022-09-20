import styled from "styled-components";

export default function Title() {
  const H1 = styled.h1`
    text-shadow: 0 3px 5px rgba(0, 0, 0, .7);
  `;
  return (
    <div className="font-mono w-fit p-1 px-4 shadow-lg text-center -rotate-12 mt-5 font-extrabold text-4xl bg-white">
      <H1 className=" text-blue-500">WHERE'S</H1>
      <H1 className=" text-red-600">WALDO</H1>
    </div>
  );
}
