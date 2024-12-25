import { useContext, useState ,useEffect } from 'react';
import './App.css';
import Login from './Components/Auth/Login';
import Admin from './Components/Dashboard/Admin';
import Employee from './Components/Dashboard/Employee';
import { Authcontext } from './Context/Authprovider';

function App() {
  const [user, setUser] = useState(null);
  const [userdata,Setuserdata] = useContext(Authcontext)
  const [LoggedInUserData, setLoggedInUserData] = useState(null)
  
  useEffect(() => {
  const Loggedinuser = localStorage.getItem('Loggedinuser')
   if(Loggedinuser){
    const userData = JSON.parse(Loggedinuser)
    setUser(userData.role)
    setLoggedInUserData(userData.data)
   }
   
  }, [])
  



  

  const Loginhandler = (Email, Password) => {
    if (Email === 'admin1@example.com' && Password === 'password123') {
      setUser('admin')
      
      localStorage.setItem('Loggedinuser',JSON.stringify({role:'admin',}))
    } else if ( userdata ) {
      const employee =  userdata.find((e) => e.email === Email && e.password === Password)
      if(employee){
        setUser('employee');
        setLoggedInUserData(employee)
        localStorage.setItem('Loggedinuser',JSON.stringify({role:'employee', data:employee}))
      }
    } else {
      alert('Invalid credentials');
    }
  };
  return (
    <>
      {!user && <Login handleLogin={Loginhandler} />}
  {user === 'admin' && <Admin changeuser={setUser} />}
  {user && user !== 'admin' && (user === 'employee' ? <Employee changeuser={setUser}  data={LoggedInUserData} /> : null)}
  
    </>
  );
}

export default App;
