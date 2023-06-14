"use client";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryComponent from "./errorHandling/myComponent";
import { ProdunctFetchingError } from "./components/errors/ErroeBoundaryComponent";
// import ErrorBoundary, { MyClassComponent } from "./errorHandling/myClassComponent";


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
{/* <ErrorBoundary>
  <MyClassComponent />
</ErrorBoundary> */}
