import React, {useState} from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton';


export default function Navbar() {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }
  return (
    <>
      <NavContainer>
          <h2>Navbar <span>Responsive</span></h2>
            <div className={`links ${clicked ? 'active': ''}`}>
              <a onClick = { handleClick } href="#">Home</a>
              <a onClick = { handleClick } href="#">Shop</a>
              <a onClick = { handleClick } href="#">About</a>
              <a onClick = { handleClick } href="#">Contact</a>
              <a onClick = { handleClick } href="#">Blog</a>
            </div>
            <div className='burguer'>
              <BurguerButton clicked = {clicked} handleClick={handleClick} />
            </div>
            <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
      </NavContainer>

    </>

  );
}


const NavContainer = styled.nav`
    h2{
        color: #fff;
        font-weight:400;
        span{
            font-weight:bold;
        }
        
    }
    padding: .4rem;
    background-color:#333;
    display:flex;
    align-items: center;
    justify-content: space-between;
    z-index:100;
    a{
        color: #fff;
        text-decoration:none;
        margin-right: 1rem;
        z-index:10;
    }
    .links{
        position:absolute;
        top: 30%;
        left: 0;
        right:0;
        margin:0 auto;
        text-align:center;
        transition: opacity ease 1s;
        display:none;
        
        a{
            color: #555;
            font-size: 2rem;
            display:block;
            margin-bottom:1rem;
            z-index:10;
        }
        @media (min-width: 768px){
            position: initial;
            margin:0;
            display:block;
            a{
                font-size: 1rem;
                color: #fff;
                display: inline;
                
            }
        }
    }
    .links.active{
        width: 100%;
        display:block;
        position:absolute;
        margin: 0 auto;
        top: 30%;
        left: 0;
        right:0;
        text-align: center;
        transition: all ease 1s;
        a{
            color: #fff;
            margin-bottom: 1rem;
            transition:all ease-in-out 0.5s;
        }
    }
    .burguer{
        @media (min-width: 768px){
            display: none;
        }
    }
`

const BgDiv = styled.div `
    background-color: #222;
    position:absolute;
    top:-100%;
    left:-100%;
    width:100%;
    height:100%;
    z-index: -1;
    transition: all ease-in-out .5s;
    

    &.active{
        width:100%;
        height:100%;
        border-radius:0 0 80% 0;
        top:0;
        left:0;
        z-index: -1;
    }
    
`