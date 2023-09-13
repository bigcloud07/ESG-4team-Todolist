import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';
import './App.css';
import Weather from './Weather';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  const [isRendered, setIsRendered] = useState(false);
  useEffect(() => {
    if (isRendered) {
      scrollTodo();
    }
  }, [isRendered]);
  const scrollTodo = () => {
    const todoElement = document.querySelector('.todo'); // Todo 컨테이너의 클래스명을 사용합니다.
    if (todoElement) {
      todoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <Weather/>
    <div className="app">
      {isRendered ? (
        <div className='todo'>
          <TodoProvider>
            <GlobalStyle />
            <TodoTemplate>
            <TodoHead />
            <TodoList />
            <TodoCreate />
            </TodoTemplate>
          </TodoProvider>
        </div>
      ) : (
      <div className="center-button-container">
        <button className='btn1' onClick={() => setIsRendered(true)}>오늘의 할일 Start</button>
      </div>
      )}
    </div>
    
    </>
  );
}

export default App;