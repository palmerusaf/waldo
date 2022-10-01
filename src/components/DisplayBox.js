export default function DisplayBox({ children, className }) {
  const border = " border-solid border-red-600 border-4 ";
  return (
    <div
      className={
        " bg-gray-500 py-1 max-w-md rounded-2xl text-center" + border + className
      }
    >
      {children}
    </div>
  );
}
