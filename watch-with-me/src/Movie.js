export default function Movie({ movie, onselect }) {
  return (
    <li
      key={movie.imdbID}
      onClick={() => onselect(movie.imdbID)}
      className="movie"
    >
      <img
        src={movie.Poster}
        alt={`${movie.Title} poster`}
        className="movie-poster"
      />
      <h3>{movie.Title}</h3>
      <div>
        <p style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <svg
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 122.88 122.88"
              enable-background="new 0 0 122.88 122.88"
              height="20px"
              fill="white"
            >
              <g>
                <path d="M81.61,4.73c0-2.61,2.58-4.73,5.77-4.73c3.19,0,5.77,2.12,5.77,4.73v20.72c0,2.61-2.58,4.73-5.77,4.73 c-3.19,0-5.77-2.12-5.77-4.73V4.73L81.61,4.73z M66.11,103.81c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2H81.9 c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H66.11L66.11,103.81z M15.85,67.09c-0.34,0-0.61-1.43-0.61-3.2 c0-1.77,0.27-3.2,0.61-3.2h15.79c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H15.85L15.85,67.09z M40.98,67.09 c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2h15.79c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H40.98 L40.98,67.09z M66.11,67.09c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2H81.9c0.34,0,0.61,1.43,0.61,3.2 c0,1.77-0.27,3.2-0.61,3.2H66.11L66.11,67.09z M91.25,67.09c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2h15.79 c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H91.25L91.25,67.09z M15.85,85.45c-0.34,0-0.61-1.43-0.61-3.2 c0-1.77,0.27-3.2,0.61-3.2h15.79c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H15.85L15.85,85.45z M40.98,85.45 c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2h15.79c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H40.98 L40.98,85.45z M66.11,85.45c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2H81.9c0.34,0,0.61,1.43,0.61,3.2 c0,1.77-0.27,3.2-0.61,3.2H66.11L66.11,85.45z M91.25,85.45c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2h15.79 c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H91.25L91.25,85.45z M15.85,103.81c-0.34,0-0.61-1.43-0.61-3.2 c0-1.77,0.27-3.2,0.61-3.2h15.79c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H15.85L15.85,103.81z M40.98,103.81 c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2h15.79c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H40.98 L40.98,103.81z M29.61,4.73c0-2.61,2.58-4.73,5.77-4.73s5.77,2.12,5.77,4.73v20.72c0,2.61-2.58,4.73-5.77,4.73 s-5.77-2.12-5.77-4.73V4.73L29.61,4.73z M6.4,45.32h110.07V21.47c0-0.8-0.33-1.53-0.86-2.07c-0.53-0.53-1.26-0.86-2.07-0.86H103 c-1.77,0-3.2-1.43-3.2-3.2c0-1.77,1.43-3.2,3.2-3.2h10.55c2.57,0,4.9,1.05,6.59,2.74c1.69,1.69,2.74,4.02,2.74,6.59v27.06v65.03 c0,2.57-1.05,4.9-2.74,6.59c-1.69,1.69-4.02,2.74-6.59,2.74H9.33c-2.57,0-4.9-1.05-6.59-2.74C1.05,118.45,0,116.12,0,113.55V48.52 V21.47c0-2.57,1.05-4.9,2.74-6.59c1.69-1.69,4.02-2.74,6.59-2.74H20.6c1.77,0,3.2,1.43,3.2,3.2c0,1.77-1.43,3.2-3.2,3.2H9.33 c-0.8,0-1.53,0.33-2.07,0.86c-0.53,0.53-0.86,1.26-0.86,2.07V45.32L6.4,45.32z M116.48,51.73H6.4v61.82c0,0.8,0.33,1.53,0.86,2.07 c0.53,0.53,1.26,0.86,2.07,0.86h104.22c0.8,0,1.53-0.33,2.07-0.86c0.53-0.53,0.86-1.26,0.86-2.07V51.73L116.48,51.73z M50.43,18.54 c-1.77,0-3.2-1.43-3.2-3.2c0-1.77,1.43-3.2,3.2-3.2h21.49c1.77,0,3.2,1.43,3.2,3.2c0,1.77-1.43,3.2-3.2,3.2H50.43L50.43,18.54z" />
              </g>
            </svg>{" "}
            Year:{" "}
          </span>
          <span>{movie.Year}</span>
        </p>
        <p>
          <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <svg
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 120.71 122.88"
              enable-background="new 0 0 120.71 122.88"
              fill-rule="evenodd"
              clip-rule="evenodd"
              height="20px"
              fill="white"
            >
              <g>
                <path
                  class="st0"
                  d="M59.97,0c33.11,0,59.96,26.85,59.96,59.97c0,16.04-6.3,30.62-16.57,41.38c3.34,9.99,4.44,6.97,17.36,8.88v12.5 c-19.28,0.78-15.44-1.14-27.55-12.83c-9.51,6.34-20.92,10.03-33.2,10.03C26.85,119.93,0,93.08,0,59.97C0,26.85,26.86,0,59.97,0 L59.97,0z M27.63,44.25c8.91,0,16.14,7.22,16.14,16.14c0,8.91-7.22,16.13-16.14,16.13c-8.91,0-16.13-7.22-16.13-16.13 C11.5,51.47,18.72,44.25,27.63,44.25L27.63,44.25z M93.08,44.25c8.91,0,16.14,7.22,16.14,16.14c0,8.91-7.22,16.13-16.14,16.13 c-8.91,0-16.13-7.22-16.13-16.13C76.95,51.47,84.17,44.25,93.08,44.25L93.08,44.25z M60.83,10.86c8.91,0,16.13,7.22,16.13,16.14 c0,8.91-7.22,16.13-16.13,16.13c-8.91,0-16.14-7.22-16.14-16.13C44.69,18.09,51.92,10.86,60.83,10.86L60.83,10.86L60.83,10.86z M60.26,51.71c4.58,0,8.3,3.72,8.3,8.3c0,4.58-3.72,8.3-8.3,8.3c-4.58,0-8.3-3.72-8.3-8.3C51.96,55.42,55.68,51.71,60.26,51.71 L60.26,51.71L60.26,51.71z M60.83,78.38c8.91,0,16.13,7.22,16.13,16.14c0,8.91-7.22,16.13-16.13,16.13 c-8.91,0-16.14-7.22-16.14-16.13C44.69,85.61,51.92,78.38,60.83,78.38L60.83,78.38L60.83,78.38z"
                />
              </g>
            </svg>
            {movie.Type}
          </span>
        </p>
      </div>
    </li>
  );
}
