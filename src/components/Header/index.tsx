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
    BlockThree,
    Blockv,
    Blockx,
    IconWhats
} from './styles'
import LogoBranca from "../assets/logo_branca.webp"
import { useState } from 'react'
import { motion } from "framer-motion";
import { BrowserRouter as Router, Link } from "react-router-dom";
export function Header(){
    const [show, setShow] = useState(false)
    return(

        <Container>
                <motion.div whileHover={{scale:1.07}} whileTap={{scale:1.1}}><Link to={`/`}><Blockv><Logo src={LogoBranca} alt="Logo Cre8"/></Blockv></Link> </motion.div>
                <Block>
                        <Text>
                            <motion.div
                                whileHover={{scale:1.08}}
                                whileTap={{scale:1.09}}
                            >
                                <Link to={`/`}>Início</Link>
                                </motion.div>
                                <motion.div
                                whileHover={{scale:1.08}}
                                whileTap={{scale:1.09}}
                            ><Link to={`/Equipe`}>Equipe</Link></motion.div>
                            <motion.div
                                whileHover={{scale:1.08}}
                                whileTap={{scale:1.09}}
                            ><Link to={`/About`}>Sobre</Link></motion.div>
                        </Text>
                        <div style={{width:'20%'}}><a href='https://www.instagram.com/cre8language/' ><IconInsta sx={{ fontSize: 30 }}/> </a> 
                             <a href='https://api.whatsapp.com/message/YMMTW2V3I5YWP1?autoload=1&app_absent=0' style={{marginLeft:'10%'}}><IconWhats sx={{ fontSize: 30 }}/> </a> 
                        </div>
                </Block>
                        <Blockx 
                            as={motion.div} 
                            animate={{x:show?0:300, opacity:show?1:0}}
                            transition={{
                                duration:0.5,
                            }}
                        >
                            <Menu>
                                <BlockTwo>
                                    <BlockThree>
                                   <motion.div whileTap={{scale:1.5, rotate:180}}><IconX sx={{ fontSize: 40 }} onClick={()=>{setShow(false)}}/></motion.div> 
                                    </BlockThree>
                                    <TextMenu style={{marginTop:0}}> 
                                    <motion.div whileTap={{scale:1.2}}><Link to="/">Início</Link></motion.div>   
                                    </TextMenu>
                                    <TextMenu>
                                    <motion.div whileTap={{scale:1.2}}><Link to="/Equipe">Equipe</Link></motion.div>  
                                    </TextMenu>
                                    <TextMenu>
                                    <motion.div whileTap={{scale:1.2}}><Link to="/About">Sobre</Link></motion.div> 
                                    </TextMenu>  
                                </BlockTwo>
                            </Menu> 
                        </Blockx>  
                    <BlockMenu
                        as={motion.div} 
                        animate={{x:!show?0:400}}
                        initial={{x:0,}}
                        transition={{
                            duration:0.4
                        }}
                        exit={{opacity:0}}
                    >
                       <motion.div whileTap={{scale:1.2, rotate:60}}><IconMenu sx={{ fontSize: 40 }} onClick={()=>{setShow(true)}}/></motion.div> 
                    </BlockMenu>
        </Container>
    )
}