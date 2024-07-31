import React from 'react'

const App = () => {

  const name = 'John';
  const names = ['Brad', 'Mary', 'Joe', 'Sara'];
  let loggedIn = null;
  // loggedIn = true;
  const styles = {
    color: 'red',
    fontSize: '55px'
  };

  if(loggedIn){
    return (<h1>Hello Member</h1>);
  }

  return (
    <>
      <div className='text-5xl'>App</div>
      <p style={{color: 'red', fontSize: '24px'}}>Hello {name} </p>
      <ul style = {styles}>
        { names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </>
  )
}

export default App;