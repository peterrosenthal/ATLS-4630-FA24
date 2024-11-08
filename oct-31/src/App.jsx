import MyButton from './MyButton'
import MyList from './MyList'

function App() {
  return (
    <>
      <h1>Welcome to my app!</h1>
      <p>What will happen if you press my button?</p>
      <MyButton isSpecial={false} text="button 1" />
      <MyButton isSpecial={true} text="other button" />
      <MyList />
    </>
  )
}

export default App
