export default function Button({ children, className }) {
  return (
    <button
      className={`block outline-0 cursor-pointer rounded-full bg-white px-4 py-2 font-bold duration-200 hover:-translate-y-px active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}
