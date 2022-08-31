import { Suspense } from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 56px; /* header height */
`;

function App() {
  return (
    <Suspense fallback={<></>}>
      <Wrapper></Wrapper>
    </Suspense>
  );
}

export default App;
