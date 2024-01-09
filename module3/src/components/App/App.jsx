import { useState } from 'react'
import '../../App.css'
import Button from '../Button/Button'
import Display from '../Display/Display'

// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0,
//     right: 0,
//   });

//   const handleLeftClick = () => //façon plus simple d'écrire
//   setClicks({ ...clicks, left: clicks.left + 1 })

//   const handleRightClick = () => {
//     const newClicks = {
//       ...clicks,
//       right: clicks.right + 1,
//     }
//     setClicks(newClicks)
//   }

//   return (
//     <>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </>
//   )
// }

const App = () => {
  const [value, setValue] = useState(0)

  const hello = (who) => () => console.log('hello', who)
  
  const setToValue = (newValue) =>{
    console.log(newValue)
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(value + 1000)} text="Add one thousand"/>
      <Button handleClick={() => setToValue(0)} text ="Reset"/>
      <Button handleClick={() => setToValue(value + 1)} text="Add one" />
      <Button handleClick={() => hello('React')} />
    </div>
  )
}
export default App
