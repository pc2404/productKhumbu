"use client";

import { useEffect } from "react";
import { useErrorBoundary } from "react-error-boundary";
import ReactGA from "react-ga";

export function ProdunctFetchingError({ error }) {
  const { resetBoundary } = useErrorBoundary();

  useEffect(()=>{
    ReactGA.exception({
      description: `${error.message}`,
      fatal: true
    });
  },[])

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

