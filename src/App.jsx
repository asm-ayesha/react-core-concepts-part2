import Counter from './counter'
import Baller from './baller'
import Users from './users'
import './App.css'
import { Suspense } from 'react'
import Friends from './friends'
import Posts from './post'




const fetchPosts = async() =>{ 
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}


const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())


const fetchFrinds = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}


function App() {
  function handleClick(){
    alert("I am Clicked")
  }

  const handleClick2 = () =>{
    alert("click 2")
  }

  const friendsPromise = fetchFrinds()
  const postsProimise = fetchPosts()

  return (
    <>

    <Suspense fallback={<h1>Posts are coming here......</h1>}>
      <Posts postsProimise={postsProimise}></Posts>
    </Suspense>

    <Suspense fallback={<h3>Friends are coming for treat..</h3>}>
      <Friends friendsPromise={friendsPromise}></Friends>
    </Suspense>

    <Suspense fallback={<h3>Loading...</h3>}>
      <Users fetchUsers={fetchUsers}></Users>
    </Suspense>
    

      <Baller></Baller>

    <h1>React Core Conceptss </h1>
    <Counter></Counter>

    <h3>0</h3>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me2</button>
      <button onClick={() => alert('click3')}>Click Me3</button>
    </>
  )
}

export default App
