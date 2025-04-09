export default function Button({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`block cursor-pointer rounded-full bg-white px-4 py-2 font-bold outline-0 duration-100 hover:-translate-y-px active:opacity-80 ${className}`}
    >
      {children}
    </button>
  );
}
