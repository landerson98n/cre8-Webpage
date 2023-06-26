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
                    <h1><em>Uma escola de Inglês acessível, prática e de qualidade!</em><br/><br/>
                        Em apenas um ano e meio de funcionamento, já ajudamos alunos a conquistar
                        as melhores vagas
                        do mercado, promoções no trabalho, ingresso nos melhores programas de pósgraduação no exterior, aprovações em exames de proficiência, e o mais
                        importante: independência e segurança ao falar Inglês.
                        <br/><br/>
                        Hoje possuímos alunos em 5 países e em 13 estados do Brasil. Oferecemos
                        opções de cursos focadas nas necessidades dos alunos e empresas, que vão
                        de Inglês para Negócios a Preparatórios para Exames de Proficiência. </h1>
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