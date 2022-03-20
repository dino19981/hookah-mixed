import React from 'react';

export default function App() {
  function func(num: string) {
    return num;
  }
  return <div className='class'>{func('qwe')}</div>;
}
