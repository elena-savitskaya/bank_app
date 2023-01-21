import styled from "styled-components";

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  background: linear-gradient(90deg, #30ec 47%, #45fef7 100%);
  width: 100%;
`;
