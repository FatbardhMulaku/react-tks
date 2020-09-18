import React, { Suspense } from "react";
import Route from "./route/route";
import "./App.css";
import Spinner from "./components/UI/Spinner/Spinner";

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Route />
    </Suspense>
  );
}

export default App;
