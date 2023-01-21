import styled from "styled-components";

export default function Header({ name, onClick }) {
  return <HeaderTag>
    <NameTag>{name}</NameTag>
    <LoginButtonTag onClick={onClick}>Вхід</LoginButtonTag>
  </HeaderTag>;
}

const LoginButtonTag = styled.div`
  color: #fff;
  padding: 8px 32px;
  border: 2px solid #000;
  border-radius: 4px;
  cursor: pointer; 
`
const NameTag = styled.div`
  color: #fff;
`
const HeaderTag = styled.div`
  background: #1e1e1e;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;
