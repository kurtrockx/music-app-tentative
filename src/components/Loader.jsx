export default function Loader() {
  return (
    <div className="mx-auto mt-24 flex size-48 flex-col items-center">
      <p className="text-center text-sm text-white">loading</p>
      <img src="loading.svg" alt="loading" className="animate-loading w-28" />
    </div>
  );
}
