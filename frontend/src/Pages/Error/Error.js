import React from 'react';
import './Error.css';

const Error = () => {
  return (
    <div className="error-page">
      <h1 className="err1">Error 404 </h1>
      <h4 className="err2">
        La page que vous avez demandée n'a pas été trouvée
      </h4>
      <h4 className="err2">
        Si vous avez saisi l'URL directement, assurez-vous que l'orthographe est
        correcte.
      </h4>
    </div>
  );
};

export default Error;
