export default function DisplayBox({ children, content, heading }) {
  const border = " border-solid border-red-600 border-4 ";
  return (
    <div
      className={"bg-gray-500 p-3 py-5 mx-4 rounded-2xl text-center" + border}
    >
      <h2 className="font-bold text-2xl">{heading}</h2>
      {content}
      {children}
    </div>
  );
}
