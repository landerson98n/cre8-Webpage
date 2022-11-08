import React from 'react';
import{
    Logo,
    Container,
    Text,
    IconInsta,
    Block,
    IconMenu,
    BlockMenu,
    Menu,
    TextMenu,
    BlockTwo,
    IconX,
    BlockThree
} from './styles'
import LogoBranca from "../assets/logo_branca.webp"
import { useState } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
export function Header(){
    const [show, setShow] = useState(false)
    return(
        <Container>
               <Link to={`/`}><Logo src={LogoBranca} alt="Logo Cre8"/></Link> 
                    <Block>
                        <Text>
                            <Link to={`/`}>Início</Link>
                            <Link to={`/Equipe`}>Equipe</Link>
                            <Link to={`/About`}>Sobre</Link>
                        </Text>
                        <a href='https://www.instagram.com/cre8language/' ><IconInsta sx={{ fontSize: 30 }}/> </a> 
                    </Block>
                    {show?  
                    <Menu>
                        <BlockTwo>
                            <BlockThree>
                            <IconX sx={{ fontSize: 40 }} onClick={()=>{setShow(false)}}/>
                            </BlockThree>
                            <TextMenu style={{marginTop:0}}> 
                                <Link to="/">Início</Link>
                            </TextMenu>
                            <TextMenu>
                                <Link to="/Equipe">Equipe</Link>
                            </TextMenu>
                            <TextMenu>
                                <Link to="/About">Sobre</Link>
                            </TextMenu>  
                        </BlockTwo>
                    </Menu> 
                    :
                    <BlockMenu>
                        <IconMenu sx={{ fontSize: 40 }} onClick={()=>{setShow(true)}}/>
                    </BlockMenu>}
        </Container>
    )
}