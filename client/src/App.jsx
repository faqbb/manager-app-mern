import { useEffect, useState } from 'react'
import './App.css'
import LoginForm from './components/LoginForm/LoginForm.jsx'
import RegisterForm from './components/RegisterForm/RegisterForm.jsx'
import { io, Socket } from 'socket.io-client'

function App() {
  // states
  let [userList, setUserList] = useState([])
  let [logList, setLogList] = useState([])
  let [loginFormData, setLoginFormData] = useState({ username: '', email: '', password: '' })
  let [registerFormData, setRegisterFormData] = useState({ username: '', email: '', mobile: '', password: '' })

  const getUsers = async () => {
    fetch('/users')
    .then((res) => (res.json()))
    .then((data) => setUserList(data))
    .catch((error) => console.log(error))
  }

  const getLogs = async () => {
    fetch('/logs')
    .then((res) => (res.json()))
    .then((data) => setLogList(data))
    .catch((error) => console.log(error))
  }

  const checkBackConnection = async () => {
    fetch('/sayhitofront')
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log('Couldnt say hi :( ' + error))
  }

  useEffect(() => {
    const socket = io('http://localhost:2020')
    checkBackConnection()
    getUsers()
    getLogs() 
    socket.on('usersUpdated', () => {
      getUsers()
    })
    socket.on('logsUpdated', () => {
      getLogs()
    })
    // cleanup function
    return () => {socket.disconnect()}
  }, [])

  return (
    <div className="flex flex-col">
    <h1 className='py-5 text-center'>My user manager!</h1>
      <div className='flex w-full justify-around gap-10'>
        <div>
          <h4 className=' font-bold text-lg center  py-2'>Log In</h4>
          <LoginForm
            formData={loginFormData}
            setFormData={setLoginFormData}
          />
        </div>
        <div>
        <h4 className=' font-bold text-lg center  py-2'>Register</h4>
          <RegisterForm
          formData={registerFormData}
          setFormData={setRegisterFormData}
          />
        </div>
        <div>
        <h4 className=' font-bold text-lg center  py-2'>User List</h4>
          <ul>
          {userList ? userList.map((user, index) => {
            return (
              <li key={index} className=' border-y-2  border-white'>Usuario: {user.username} <p>
                Email: {user.email}</p>
                </li>
            )}) : null }
            </ul>
        </div>
        <div>
        <h4 className=' font-bold text-lg center py-2'>Database messages</h4>
        <ul>
        {logList ? logList.map((log, index) => {
            return (
              <li key={index} className=' border-y-2  border-white'>{log.name} <p>{log.date}</p>
                </li>
            )}) : null }
            </ul>
        </div>
      </div>
    </div>
  )
}

export default App
