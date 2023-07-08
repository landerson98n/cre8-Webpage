import React from 'react'
import {Container, Text} from './styles'
import { motion } from "framer-motion";

interface Props{
    title : String,
    onClick?: () => void,
    type?: "button" | "submit" | "reset" | undefined
}

export function Button({title,type, onClick }:Props){
    return(
        <Container
            as={motion.button}
            whileHover={{scale:1.03}}
            whileTap={{scale:1.04}}
            onClick={onClick}
            type={type}
        >
            <Text><h1>{title}</h1></Text>
        </Container>
    )
}