export function Details({ title, setTitle }) {
  return (
    <>
      <h1>{title}</h1>
      <div className="hello world">hello world</div>
      <button
        onClick={() =>
          setTitle((prev: string) => {
            return "new" + prev;
          })
        }
      >
        click
      </button>
    </>
  );
}
