export default function MainContainer({ children, className }) {
  return (
    <main className={`mx-auto max-w-7xl px-4 ${className}`}>
      {children}
    </main>
  );
}
