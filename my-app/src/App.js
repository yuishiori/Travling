import React from 'react';
const element = <h1>Hello, JSX!</h1>;
const aaa = <h1>12345</h1>

const string = <Welcome name="Chiu Yu" />;

function App() {

  return (
    <div>
    </div>
  );
}

// 類別組件
class xxxx extends React.Component {
  render() {
    return <h1>yes this is render, {this.props.name}</h1>;
  }
}

function Example() {
  // useState Hook
  const [count, setCount] = React.useState(0);

  // useEffect Hook
  React.useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

function ToggleColorButton() {
  const [isRed, setIsRed] = React.useState(true);
  
  const handleClick = () => setIsRed(prev => !prev);

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: isRed ? 'red' : 'green',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        cursor: 'pointer'
      }}
    >
      {isRed ? '紅色' : '綠色'}
    </button>
  );
}

function Counter() {
  const [count, setCount] = React.useState(3);

  return (
    <div>
      <h2 onClick={() => setCount(count - 1)} style={{cursor: 'pointer'}}>
        {count}
      </h2>
      <p>點擊數字讓它加一！</p>
    </div>
  );
}

function MyButton() {
  return (
    <button onClick={() => alert('你點了按鈕！')}>
      點我一下
    </button>
  );
}

function CountdownButton() {
  const [count, setCount] = React.useState(null);
  const [intervalId, setIntervalId] = React.useState(null);

  const startCountdown = () => {
    if (intervalId) return; // 防止重複啟動
    setCount(10);
    const id = setInterval(() => {
      setCount(prev => {
        if (prev === 1) {
          clearInterval(id);
          setIntervalId(null);
          return null;
        }
        return prev - 1;
      });
    }, 1000);
    setIntervalId(id);
  };

  return (
    <div>
      <button onClick={startCountdown}> 點我開始倒數計時</button>
      {count !== null && <h2>{count}</h2>}
    </div>
  );
}

function GoogleButton() {
  return (
    <button onClick={() => window.open('https://www.google.com', '_blank')}>
      開啟 Google 首頁
    </button>
  );
}

function Welcome(props) {
  return <h1>哈囉，{props.name}</h1>;
}


function HandleEvent() {
  const handleClick = (e) => {
    e.preventDefault();              
    console.log('按鈕被點擊');
    alert('你點擊了按鈕'); // 顯示一個彈跳視窗
  }

  return (
    <div>
      <h2>事件處理範例</h2>
      <button onClick={handleClick}>
        <Counter />
      </button>
    </div>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  
  return (
    <div>
      {isLoggedIn ? (
        <h1>歡迎回來！</h1>
      ) : (
        <h1>請登入。</h1>
      )}
    </div>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  
  return (
    <ul>{listItems}</ul>
  );
}


export default App;