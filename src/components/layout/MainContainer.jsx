export default function MainContainer({ children, className = "" }) {
  return (
    <main
      className={`mx-auto flex h-full max-w-7xl flex-col px-4 ${className}`}
    >
      {children}
    </main>
  );
}
