export default function DisplayBox({ children }) {
  const border = " border-solid border-red-600 border-4 ";
  return (
    <div className={"bg-gray-500 py-5 mx-4 rounded-2xl text-center" + border}>
      {children}
    </div>
  );
}
