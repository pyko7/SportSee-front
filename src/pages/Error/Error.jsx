import "./Error.css";
const Error = ({ error }) => {
  const apiError = error === "NetworkError when attempting to fetch resource.";
  return (
    <div className={`error-page ${apiError && "error-api-page"}`}>
      {apiError ? (
        <p>Impossible de se connecter au serveur.</p>
      ) : (
        <p>Une erreur est survenue lors de la récupération des données.</p>
      )}
    </div>
  );
};

export default Error;
