import React from 'react'
import { Header } from '../../Header'
import { Foot } from '../../Foot'
import landerson from '../../assets/Landerson.webp'
import {
    Container,
    Title,
    Equipes,
    ImagePerson,
    SubTitleOne,
    SubTitleTwo,
    Lista
} from './styles'

export function Equipe(){
    return(
        <>
         <Header/>
            <Container>
                <Title>
                    <h1>Conheça a nossa equipe!</h1>
                </Title>
                <Equipes>
                    <ImagePerson src={landerson} alt="Landerson Miguel"/>
                    <Title>
                        <h1>Teacher Saulo</h1>
                        
                    </Title>
                    <SubTitleOne>Professor do Curso Regular, 1 to 1 e Preparatórios</SubTitleOne>
                    <Lista>
                                    <ul>
                                        <li>6 anos de experiência Mestrando em Língua, Literatura e Cultura Inglesas</li>
                                        <li>C2 Proficiency (University of Cambridge) </li>
                                        <li>Teaching Knowledge Test 1, 2, 3, YL & CLIL (University of Cambridge)</li>
                                        <li>TESOL Specialization (Arizona State University) </li>
                                        <li>Teaching IELTS Exam Prep (Bridge Education Group)</li>
                                    </ul>
                            </Lista>
                </Equipes>
            </Container>
            <Foot/>
        </>
       
    )
}