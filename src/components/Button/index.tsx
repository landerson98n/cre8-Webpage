import React from 'react'
import {Container, Text} from './styles'
import { motion } from "framer-motion";

interface Props{
    title : String
}

export function Button({title, ...rest}:Props){
    return(
        <Container
            as={motion.button}
            whileHover={{scale:1.1}}
            whileTap={{scale:1.12}}
        >
            <Text><h1>{title}</h1></Text>
        </Container>
    )
}