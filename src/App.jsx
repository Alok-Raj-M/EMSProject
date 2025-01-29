import React, { useContext, useEffect, useState } from 'react'
import Login from './component/Auth/Login'
import EmployeeDashboard from './component/Dashboard/EmployeeDashboard'
import AdminDashboard from './component/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user , setUser] =useState(null)
  const [loggedInUserData , setLoggedInUserData] = useState(null)
  const [userData,setUserData] = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUserData = localStorage.getItem('loggedInUserData')

    if(loggedInUserData){
      const userData = JSON.parse(loggedInUserData)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])
  


  const handleLogin = (email,password) =>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      setLoggedInUserData(admin)
      localStorage.setItem('loggedInUserData',JSON.stringify({role:admin }))
    }
    else if( userData){
      const employee = userData.find((e)=>email== e.email && password == e.password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUserData',JSON.stringify({role:employee ,data:employee }))
      }
    }
    else{
      alert("Invalid Credentals")
    }
  }
  
  return (
    <div>
      <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user=='employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
      </>
    </div>
  )
}
export default App
