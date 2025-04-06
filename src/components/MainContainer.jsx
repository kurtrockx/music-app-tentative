export default function MainContainer({ children }) {
  return (
    <main className="mx-auto flex min-h-dvh max-w-7xl flex-col px-4">
      {children}
    </main>
  );
}
