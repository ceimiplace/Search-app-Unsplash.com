export default function Button({
  children,
  setPage,
  whichPageToSet,
  setImages,
}) {
  return (
    <button
      onClick={() => {
        setPage(whichPageToSet);
      }}
      className="border-2 border-black p-4 text-lg rounded"
    >
      {children}
    </button>
  );
}
