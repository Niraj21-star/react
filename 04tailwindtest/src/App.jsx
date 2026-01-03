import './App.css'
import Signup from '../components/signup'
function App() {
  let myobj={
    name:"niraj",
    age:21
  }
  return (
  <><Signup channel="chaiaurcode" someobj={myobj} />
  </>
    
  )
}

export default App
