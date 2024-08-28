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
import { Foot } from '../../Foot'

export function About() {
    return (
        <div style={{ overflow: 'hidden' }}>
            <Header />
            <Container>
                <Block>
                    <Logo src='https://ik.imagekit.io/6zjortsiwu/logo_branca.webp' />
                </Block>
                <SubTitle>
                    <h1>A Cre8 Language School foi fundada em 2021, como uma escola de Inglês acessível, prática, e de qualidade! Hoje estamos em 18 estados do Brasil e 8 países, e mais de 275 alunos fazem parte da nossa história!
                        Oferecemos opções de cursos focadas nas necessidades do alunos, que vão de Inglês para Negócios a preparatórios para Exames de Proficiência, além de aulas individuais ou em turmas.
                        Se você deseja ampliar seus horizontes profissionais, como trabalhar em uma empresa global, trabalhar ou viver no exterior, aplicar para bolsas de estudo, ou aprender Inglês para qualquer objetivo, a Cre8 é a solução! 😉
                        Quer saber mais como funciona? Entre em contato agora!​ Temos a opção certa pra você 💙
                    </h1>
                </SubTitle>
                <BlockTwo>
                    <SubTitle>
                        <h1>Compartilhe!</h1>
                    </SubTitle>
                    <BlockTrhee>
                        <a href='https://www.instagram.com/cre8language/' ><IconInsta sx={{ fontSize: 30 }} /> </a>
                    </BlockTrhee>
                </BlockTwo>
            </Container>
            <Foot />
        </div>

    )
}