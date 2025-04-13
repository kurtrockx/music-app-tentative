export default function ErrorPage({ message }) {
  return (
    <div className="mx-auto my-24 text-center">
      <h3 className="text-xl font-medium text-white">Error</h3>
      <h1 className="text-3xl font-bold text-white">{message}</h1>
    </div>
  );
}
