import styled, { css } from "styled-components";

export default function Payment({ payment }) {
  // якщо в нас список платежів має
  // кількість (length) = 0
  // то тоді ми виводимо іншу верстку
  if (payment.length === 0) {
    return (
      <PaymentList>
        <Empty>Немає транзакцій</Empty>
      </PaymentList>
    );
  }
  // тут ми виводимо верстку блока всіх платежів
  // та за допомогою функції .map() яка приймає тег
  // ми для кожного платежу виводимо верстку
  return <PaymentList>{payment.map(PaymentItem)}</PaymentList>;
}

function PaymentItem({ name, amount, type }) {
  return (
    <PaymentBlock key={name}>
      <PaymentIcon>
        <img src="/icon/payment.svg" alt='payment' width="30px" height="30px" />
      </PaymentIcon>
      <PaymentText>{name}</PaymentText>
      <PaymentAmount type={type}>
        {type}${amount}
      </PaymentAmount>
    </PaymentBlock>
  );
}

const Empty = styled.div`
  font-size: 16px;
  color: #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PaymentAmount = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${({ type }) => {
    if (type === "+")
      return css`
        color: green;
      `;

    if (type === "-")
      return css`
        color: red;
      `;

    if (type === "*")
      return css`
            color: blue;
          `;

    // якщо ніякий if() не виконався
    // то буде повертатися цей колір #fff
    return css`
      color: #fff;
    `;
  }};
`;

const PaymentIcon = styled.div`
  background: linear-gradient(90deg, #51545b 0%, #767a85 90.71%);
  min-width: 60px;
  min-height: 60px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PaymentText = styled.div`
  font-size: 18px;
  color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
`;

const PaymentList = styled.div`
  background: #1e1e1e;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 40px;
  margin-top: 40px;
  min-height: 120px;
  display: grid;
  gap: 24px;
`;

const PaymentBlock = styled.div`
  display: grid;
  grid-template-columns: 60px 4fr 1fr;
  gap: 0px 20px;
  width: 100%;
`;
