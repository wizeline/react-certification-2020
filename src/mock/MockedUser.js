import  {useContext} from "react"; 
import UserInformation from '../GlobalVars/UserInformation';
import { useHistory } from "react-router-dom";

// login.api.js

const mockedUser = {
    id: '123',
    name: 'Wizeline',
    avatarUrl: 'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
  };
  
  export default async function LoginApi(username, password) {   

    return new Promise((resolve, reject) => {
        
      setTimeout(() => {
        if (username === 'wizeline' && password === 'Rocks') {
            console.log(mockedUser);
                     
          return resolve(mockedUser);
        }
        return reject(new Error('Username or password invalid'));
      }, 0);
    }) 
  }
