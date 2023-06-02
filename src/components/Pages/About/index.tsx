import React from 'react'
import {
    Container,
    Logo,
    SubTitle,
    Block,
    IconInsta,
    BlockTwo,
    BlockTrhee
} from './style'
import { Header } from '../../Header'
import LogoBranca from "../../assets/logo_branca.webp"
import { Foot } from '../../Foot'

export function About(){
    return(
        <div style={{overflow: 'hidden'}}>
         <Header/>
            <Container>
                <Block>
                    <Logo src={LogoBranca}/>
                </Block>
                <SubTitle>
                    <h1>A Cre8 Language School foi fundada em 2021, como uma escola de Inglês acessível, prática, e de qualidade! Com menos de um ano de existência, já possuímos alunos em 5 países e em 7 estados do Brasil. Oferecemos opções de cursos focadas nas necessidades dos alunos, que vão de Inglês para Negócios a Preparatórios para Exames de Proficiência, além do nosso curso com o maior número de alunos: o Curso Regular, que como o nome sugere, é um curso que funciona exatamente igual a outros cursos de escolas de idioma, mas de forma completamente online. Assim, você tem a chance de estudar com pessoas de diferentes lugares do Brasil, ou que vivem no exterior!</h1>
                </SubTitle>
                <BlockTwo>
                        <SubTitle>
                            <h1>Compartilhe!</h1>
                        </SubTitle>
                        <BlockTrhee>
                        <a href='https://www.instagram.com/cre8language/' ><IconInsta sx={{ fontSize: 30 }}/> </a>
                    </BlockTrhee>
                </BlockTwo>
            </Container>
            <Foot/>
        </div>
       
    )
}