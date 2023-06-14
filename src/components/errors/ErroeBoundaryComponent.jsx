"use client";

import { useEffect } from "react";
import { useErrorBoundary } from "react-error-boundary";
import ReactGA from "react-ga";
import useGAEventTracker from "../../hooks/useGAEventTracker";

export function ProdunctFetchingError({ error }) {
  const { resetBoundary } = useErrorBoundary();
  const GAEventsTracker = useGAEventTracker("Product items");


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
      <pre className=' m-auto text-red-600 text-center text-2xl' onClick={(e) =>GAEventsTracker("error found", `${error.message}`)}>{error.message}</pre>
      <button onClick={resetBoundary}>Try again</button>
    </div>

    </div>
  );
}

