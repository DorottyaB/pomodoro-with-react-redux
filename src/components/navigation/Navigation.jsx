import './navigation.styles.css';

export function Navigation() {
  const handleChange = e => {
    console.log(e.target.value);
  };

  return (
    <div className='navigation-container'>
      <input type='radio' name='timer' id='pomodoro' value='pomodoro' onChange={handleChange} />
      <label htmlFor='pomodoro'>pomodoro</label>
      <input type='radio' name='timer' id='shortBreak' value='shortBreak' onChange={handleChange} />
      <label htmlFor='shortBreak'>short break</label>
      <input type='radio' name='timer' id='longBreak' value='longBreak' onChange={handleChange} />
      <label htmlFor='longBreak'>long break</label>
    </div>
  );
}
