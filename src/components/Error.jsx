import useCotizador from "../hooks/useCotizador";

function Error() {
  const { error } = useCotizador();
  return (
    <div className="border text-center border-red-400 text-red-700 bg-red-100 p-2">
      {error}
    </div>
  );
}

export default Error;
