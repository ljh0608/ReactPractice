// import { Suspense } from "react";
// import { RecoilRoot } from "recoil";
// import Users from "./components/Users";
// import { ErrorBoundary } from "react-error-boundary";
// import "./App.css";
// function App() {
//   return (
//     <>
// <div>
//   <RecoilRoot>
//     <ErrorBoundary fallback={<div>Error!</div>}>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Users />
//       </Suspense>
//     </ErrorBoundary>
//   </RecoilRoot>
// </div>
//     </>
//   );
// }

// export default App;

import { Suspense } from "react";
import { RecoilRoot, useRecoilValueLoadable } from "recoil";
import Users from "./components/Users";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
function App() {
  return (
    <>
      <div>
        <RecoilRoot>
          <Users />
        </RecoilRoot>
      </div>
    </>
  );
}

export default App;
