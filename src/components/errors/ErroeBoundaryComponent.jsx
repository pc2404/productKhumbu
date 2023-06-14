"use client";

import { useErrorBoundary } from "react-error-boundary";

export function ProdunctFetchingError({ error }) {
  const { resetBoundary } = useErrorBoundary();

  return (
    <div className=" h-screen flex flex-col justify-center items-center bg-slate-400">
    <div className=" flex flex-col justify-center items-center bg-slate-600">
      <p>Something went wrong:</p>
      <pre className=' m-auto text-red-600 text-center text-2xl'>{error.message}</pre>
      <button onClick={resetBoundary}>Try again</button>
    </div>

    </div>
  );
}

