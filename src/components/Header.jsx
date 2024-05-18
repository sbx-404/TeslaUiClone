import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import {AllCars} from "../store/carslice"
import {useSelector} from "react-redux"

function Header() {
  const [activeMenu, setActiveMenu] = useState(false) 
console.log(activeMenu)

  const cars = useSelector(AllCars)
  console.log(cars)

  return (
    <Container>
      <a>
        <img src="/public/images/logo.svg" alt="" />
      </a>
    <Menu>
      {cars?.map((items,index) => ( <a href="#" key={index}>{items}</a>))}

    </Menu>
    <RightMenu>
    <a href="#">Shop</a>
    <a href="#">Tesla Account</a>

    <Hamburger onClick={() => setActiveMenu(true)} />
    </RightMenu>
    <ThreeLines CheckProp={activeMenu}>
      <ClearBtn >
      <CustomClose  onClick={() => setActiveMenu(false)}/>
      </ClearBtn>
      <li><a href="#">Existing Inventory</a></li>
      <li><a href="#">Used Inventory</a></li>
      <li><a href="#">CyberTruck</a></li>
      <li><a href="#">Roadster</a></li>
      <li><a href="#">New Arriaval</a></li>
      <li><a href="#">New Arriaval</a></li>
      <li><a href="#">New Arriaval</a></li>
      <li><a href="#">New Arriaval</a></li>
    </ThreeLines>
    </Container>

  )
}

export default Header

const Container = styled.div`
  z-index:1;
  min-height:50px;
  position:fixed;
  display:flex;
  justify-content:space-between;
  align-items:center;
  right:0;
  left:0;
  top:0;
  padding:0 25px;
  `

const Menu = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex:1;

  a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
  }
  @media (max-width:900px){
    display:none;
  }

`
const RightMenu = styled.div`
  display:flex;
  a{
    font-weight:600;
    text-transform:uppercase;
    margin-right:10px;
  }
`

const Hamburger = styled(MenuIcon)`
cursor:pointer;
`
const ThreeLines = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
list-style:none;
display:flex;
flex-direction:column;
text-align:center;
padding:1rem 2rem;
background-color:white;
cursor:pointer;
z-index:100;
width:300px;
transform: ${props => props.CheckProp? 'translateX(0)':'translateX(100%)'};

li{
  padding:1rem 0;
  border-bottom:1px solid rgba(0,0,0,.2);
  a{
    font-weight:600;
  }}

@media(max-width:768px){
width:100vw;
font-size:17px;
}
`

const ClearBtn = styled.div`
  display:flex;
  justify-content:flex-end;
  cursor:pointer;
`

const CustomClose = styled(ClearIcon)``

