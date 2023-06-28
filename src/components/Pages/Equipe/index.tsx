import React from 'react'
import { Header } from '../../Header'
import { Foot } from '../../Foot'
import landerson from '../../assets/Landerson.webp'
import saulo from '../../assets/saulo.webp'
import sara from '../../assets/sara.webp'
import fabiana from '../../assets/fabiana.webp'
import lorena from '../../assets/lorena.webp'
import werllison from '../../assets/werllison.webp'
import camilo from '../../assets/camilo.webp'
import {
    Container,
    Title,
    Equipes,
    ImagePerson,
    SubTitleOne,
    SubTitleTwo,
    Lista,
    Person,
    BlockFive,
    Block,
    TitleClass
} from './styles'

export function Equipe(){
    return(
        <div style={{overflow: 'hidden'}}>
         <Header/>
            <Container id='equipe'>
                <Block>
                <Title>
                    <h1>Conheça a nossa equipe!</h1>
                </Title>
                    <Equipes>
                        <Person>
                            <BlockFive>
                            <ImagePerson alt="saulo" src={saulo}/>
                                <Block>
                                    <TitleClass><h1>Teatcher Saulo</h1></TitleClass>
                                    <SubTitleTwo><h1>Professor do Curso Regular, 1 to 1 e Preparatórios</h1></SubTitleTwo> 
                                </Block>  
                            </BlockFive>
                            <Lista>
                                <ul>
                                    <li>6 anos de experiência Mestrando em Língua, Literatura e Cultura Inglesas</li>
                                    <li>C2 Proficiency (University of Cambridge) </li>
                                    <li>Teaching Knowledge Test 1, 2, 3, YL & CLIL (University of Cambridge)</li>
                                    <li>TESOL Specialization (Arizona State University) </li>
                                    <li>Teaching IELTS Exam Prep (Bridge Education Group)</li>
                                    <li>Curiosidade: Já viveu um ano na Irlanda, e hoje estuda em Portugal. É viciado em música, voluntariado, e natureza.</li>
                                </ul>
                            </Lista>
                        </Person>

                        <Person>
                            <BlockFive>
                            <ImagePerson alt="Teacher Camilo" src={camilo}/>
                                <Block>
                                    <TitleClass><h1>Teacher Camilo</h1></TitleClass>
                                    <SubTitleTwo><h1>Experiência como professor em diversos níveis e contextos.</h1></SubTitleTwo> 
                                </Block>  
                            </BlockFive>
                            <Lista>
                                <ul>
                                    <li>8 anos de experiência</li>
                                    <li>Graduado em Inglês</li>
                                    <li>Mestrando em Linguística Aplicada</li>
                                    <li>C1 Proficiency (University of Cambridge)</li>
                                    <li>Curiosidade: 
O que mais lhe traz prazer é ver o mar, viajar e cozinhar como um exercício de mindfulness.</li>
                                </ul>
                            </Lista>
                        </Person>

                        <Person>
                            <BlockFive>
                            <ImagePerson alt="Teacher Lorena" src={lorena}/>
                                <Block>
                                    <TitleClass><h1>Teacher Lorena</h1></TitleClass>
                                    <SubTitleTwo><h1>Experiência com educação internacional</h1></SubTitleTwo> 
                                </Block>  
                            </BlockFive>
                            <Lista>
                                <ul>
                                    <li>4 anos de experiência</li>
                                    <li>Graduada em Inglês</li>
                                    <li>Certificada TEP (Teacher Education Program)</li>
                                    <li>Curiosidade:
Tem um estilo vintage, ama a cultura francesa, sabe dirigir caminhões, e é provavelmente a pessoa mais indecisa do mundo.</li>
                                </ul>
                            </Lista>
                        </Person>

                        <Person>
                            <BlockFive>
                            <ImagePerson alt="Teacher Fabiana" src={fabiana}/>
                                <Block>
                                    <TitleClass><h1>Teacher Fabiana</h1></TitleClass>
                                </Block>  
                            </BlockFive>
                            <Lista>
                                <ul>
                                    <li>6 anos de experiência como professora</li>
                                    <li>C1 Certificate (The Gallery London)</li>
                                    <li>Psicologia(Cursando)</li>
                                    <li>Experiência com ambiente corporativo internacional</li>
                                    <li>Curiosidade: Já viveu na Áustria e na Espanha, trabalhando na maior organização jovem do mundo. Ama basquete, música e o cérebro humano.</li>
                                </ul>
                            </Lista>
                        </Person>

                        <Person>
                            <BlockFive>
                            <ImagePerson alt="Teacher Werllison" src={werllison}/>
                                <Block>
                                    <TitleClass><h1>Teacher Werllison</h1></TitleClass>
                                    <SubTitleTwo><h1>Experiência como Supervisor de Exames de Cambridge</h1></SubTitleTwo> 
                                </Block>  
                            </BlockFive>
                            <Lista>
                                <ul>
                                    <li>10 anos de experiência</li>
                                    <li>Teaching Knowledge Test 1, 2, 3(University of Cambridge)</li>
                                    <li>Letras - Inglês</li>
                                </ul>
                            </Lista>
                        </Person>

                        <Person>
                            <BlockFive>
                            <ImagePerson alt="Sara Xavier" src={sara}/>
                                <Block>
                                    <TitleClass><h1>Sara Xavier</h1></TitleClass>
                                </Block>  
                            </BlockFive>
                            <Lista>
                                <ul>
                                    <li>2 anos de experiência como designer freelancer com foco em redes sociais
Graduada em Comunicação Social (Universidade Federal do Piauí)</li>
                                    <li>Design Gráfico(Escola Britânica de Artes Criativas)</li>
                                    <li>Design Gráfico(FIAP On)</li>
                                </ul>
                            </Lista>
                        </Person> 

                        
                        <Person>
                            <BlockFive>
                            <ImagePerson alt="Sara Xavier" src={sara}/>
                                <Block>
                                    <TitleClass><h1>Teacher Gustavo</h1></TitleClass>
                                </Block>  
                            </BlockFive>
                            <Lista>
                                <ul>
                                    <li>7 anos de experiência </li>
                                    <li>Graduado em geologia</li>
                                    <li>TOEIC C1 (ETS)</li>
                                    <li>Curiosidade: ama vôlei, ficar em casa e viajar.</li>
                                </ul>
                            </Lista>
                        </Person> 
                    </Equipes>
                </Block>
            </Container>
            <Foot/>
        </div>
       
    )
}