export const SearchBox = ({ onChange, value }) => {
  return (
    <div className="movies">
      <h1>Find the movie</h1>
      {/* <form onSubmit={onSubmit}> */}
        <input
          type="text"
          value={value}
          placeholder="Tipe film"
          onChange={e => onChange(e.target.value)}
        />
        {/* <button type="submit">Search</button> */}
     
    </div>
  );
};
