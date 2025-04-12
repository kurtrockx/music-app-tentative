export default function ErrorPage({ message }) {
  return (
    <div>
      <h3 className="font-medium">Error</h3>
      <h1 className="font-bold">{message}</h1>
    </div>
  );
}
