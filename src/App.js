import React from "react";
import styled from "styled-components";
import Page from "./component/Page";
import Header from "./component/Header";
import Balance from "./component/Balance";
import Menu from "./component/Menu";
import Payment from "./component/Payment";
import get from "./icon/get.svg"
import paymenti from "./icon/payment.svg"
import send from "./icon/send.svg"


// КОНФІГУРАЦІЯ ========================================

const START_BALANCE = 10000;
const LIMIT_BALANCE = 100000;
const GET_MONEY = 100;
const SALARY_AMOUNT = 1000;
const COURSE_PRICE = 850;


export default function App() {
  // ФУНКЦІОНАЛ БАЛАНСУ ========================

  // Ось тут тримаємо актуальне значення балансу
  const [balance, setBalance] = React.useState(START_BALANCE);

  // Функція для прямого поповнення балансу
  const getMoney = () => setBalance(balance + GET_MONEY);

  // Функція яка виконується кожен раз коли наш баланс змінився
  React.useEffect(() => {
    // Перевірка на ліміт балансу
    if (balance > LIMIT_BALANCE) {
      alert(`Ваш ліміт балансу: ${LIMIT_BALANCE}`);
      setBalance(START_BALANCE);
    }

    // Перевірка на мінусовий баланс
    if (balance < 0) {
      alert(`Ви використали усі свої гроші. Поповніть картку`);
      // setBalance(0);
    }
    // Сюди записуються змінні при оновленні яких буде виконуватися функція
  }, [balance]);


  // ФУНКЦІОНАЛ ТРАНЗАКЦІЙ =======================================

  const [payment, setPayment] = React.useState([]);
  const getSalary = () => {
    setBalance(balance + SALARY_AMOUNT)

    setPayment([
      {
        name: 'Зарплата',
        amount: SALARY_AMOUNT,
        type: "+"
      },
      ...payment,
    ])
  }

  const buyCourse = () => {
    setBalance(balance - COURSE_PRICE)

    setPayment([
      {
        name: 'Оплата курсу',
        amount: COURSE_PRICE,
        type: "-"
      },
      ...payment,
    ])
  }

  // ВЕРСТКА ІНТЕРФЕЙСУ ==========================================

  const LOGIN = 'Qwerty';
  const PASSWORD = '123';

  const [isLogged, setLogged] = React.useState(false)

  const doLogin = () => {
    const login = prompt('Ваш логін');
    const password = prompt('Ваш пароль');

    if (login === LOGIN && password === PASSWORD) {
      alert('Вхід успішний')
      setLogged(true)
    } else {
      if (login !== LOGIN && password !== PASSWORD) {
        return alert('Помилка в логіні та паролі')
      }
      if (login !== LOGIN) {
        return alert('Логін не вірний')
      }
      if (password !== PASSWORD) {
        return alert('Пароль не вірний')
      }
    }
  };

  return (
    <Page>
      <Header name="MY-BANK" onClick={doLogin} />
      {isLogged && <Balance balance={balance} />}
      {isLogged && <Menu
        config={[
          {
            name: "Поповнити баланс",
            onClick: getMoney,
            img: get,
          },
          {
            name: "Oтримати зарплату",
            onClick: getSalary,
            img: send,
          },
          {
            name: "Купити курс",
            onClick: buyCourse,
            img: paymenti,
          }
        ]}
      />}
      {isLogged && <Payment payment={payment} />}
      {isLogged === false && (
        <NotLogged>Вам потрібно увійти в акаунт (LOGIN: Qwerty, PASSWORD: 123)</NotLogged>
      )}
    </Page>
  );
}

const NotLogged = styled.div`
  padding: 50px 30px;
  background: #1e1e1e;
  color: #fff;
  text-align: center;
  margin-top: 100px;

`