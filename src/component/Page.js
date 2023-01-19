import styled from "styled-components";

export default function Page({ children }) {
    return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  /* робимо фон градієнтом */
  background: linear-gradient(90deg, #30ec 47%, #45fef7 100%);

  /* робимо фон на всю ширину */
  width: 100%;
`;
