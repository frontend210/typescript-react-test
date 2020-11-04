import React from "react";

type ErrorDisplayProps = {
  error?: Error | null;
};

const ErrorDetails: React.FC<ErrorDisplayProps> = ({
  error,
}) => (
  <div style={{ color: "red" }}>
    <h1>Oops, an error occurred</h1>
    <h2>{error?.message}</h2>
    <hr />
    <pre>{error?.stack}</pre>
  </div>
);

export default ErrorDetails;
