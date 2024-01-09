import Display from '../Display/Display'
import Button from '../Button/Button'
import useLocalStorage from '../../hooks/useLocalStorage';

const STORAGE_COUNTER_KEY = "counter";

const App = () => {
  const [counter, setCounter] = useLocalStorage(STORAGE_COUNTER_KEY, 0)

  function changeCount(delta){
    setCounter(counter + delta);
  }

  return (
    <div>
      <Display counter={counter} />
      <Button changeCount={changeCount} delta={1} text='plus'/>
      <Button changeCount={changeCount} delta={-1} text = 'minus'/>
      <Button changeCount={changeCount} delta={-counter} text = 'zero'/>
    </div>
  )
}

export default App
