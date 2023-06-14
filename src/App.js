"use client";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryComponent from "./errorHandling/myComponent";
import { ProdunctFetchingError } from "./components/errors/ErroeBoundaryComponent";
import ReactGA from 'react-ga';
// import ErrorBoundary, { MyClassComponent } from "./errorHandling/myClassComponent";

ReactGA.initialize('UA-273526478-1');

function App() {
  return (
    <div>

      <ErrorBoundary 
        FallbackComponent={ProdunctFetchingError}
        onError={()=>console.log("Error happended")}
        >
        <ErrorBoundaryComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;

