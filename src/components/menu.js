import React, {useState} from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";


function Menu() {
  
  const [isOpenMenu, setIsOpenMenu] = useState(false);
 

  const MenuButton = () => setIsOpenMenu(!isOpenMenu);
  const history = useHistory();

  const FavPage = () => {history.push("/favorite");}

  const renderMenu = () => {
      if (localStorage.getItem('session') != null) {
        return <NavLink type='button' onClick={FavPage}>Favorites</NavLink>
      } 
    }
  
    return(
    <Circle primary type='button' onClick={MenuButton}>
      {isOpenMenu && (
      <NavMenu>
        <SideMenu>
          <Option>
          <NavLink type='button' onClick={e => history.push("")} >Home</NavLink>
          </Option>
          <Option>
          
           {renderMenu()}
          
          </Option>
          
        </SideMenu>
      </NavMenu>
    )}
 
        <i>
            <Lines></Lines>
            <Lines></Lines>
            <Lines></Lines>
        </i>
    </Circle> 
    )
}

  const Circle = styled.div`
  
  border-radius: 999999px;
  height: 45px;
  z-index: -1;
  background: transparent ;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: .5rem .5rem;  
  float: left;
  padding: .5em ;
  margin: .4em;  
  @media (min-width: 600px){
    width: 5%;
  }
 
  `;
  const Lines = styled.div`
    width: 20px;
    height: 3px;
    background:white;
    margin: 3px ;
    transition: 0.3s;
    ${Circle}:hover & {
      background-color: #536162;
    opacity: .7;
    }
  `;
  const NavMenu = styled.div`{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
     
  }`;

  const SideMenu = styled.div`{
    background-color: white;
    border-radius: 5px;
    padding: 20px;
    position:absolute;
    top: 0%;
    left: 0%;
    height: 1000px;
    width: 200px;  
    z-index: 1;  
  }`;

  const Option = styled.div`
  font-color: black;
  padding: 15px;
  margin: 1px;
  background: white;
  
`;

  const NavLink = styled.div`
  width: 100%;
  margin-bottom: 16px;
  color: black;
  text-decoration: none;
  padding: 5px;
  font-size: 20px;
  ${Option}:hover & {
    background-color: #074b3db;
  opacity: 0.5;
  }

`;



export default Menu;