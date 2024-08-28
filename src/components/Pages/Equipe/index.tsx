import React from 'react'
import { Header } from '../../Header'
import { Foot } from '../../Foot'
import {
    Container,
    Title,
    Equipes,
    ImagePerson,
    SubTitleTwo,
    Lista,
    Person,
    BlockFive,
    Block,
    TitleClass
} from './styles'

export function Equipe() {
    return (
        <div style={{ overflow: 'hidden' }}>
            <Header />
            <Container id='equipe'>
                <Block>
                    <Title>
                        <h1>Conheça a nossa equipe!</h1>
                    </Title>
                    <Equipes>
                        <Person>
                            <BlockFive>
                                <ImagePerson alt="saulo" src='https://ik.imagekit.io/6zjortsiwu/tr:w-300/saulo.webp' />
                                <Block>
                                    <TitleClass><h1>Teacher Saulo</h1></TitleClass>
                                    <SubTitleTwo><h1>Diretor Acadêmico</h1></SubTitleTwo>
                                </Block>
                            </BlockFive>
                            <Lista>
                                <ul>
                                    <li>9 anos de experiência</li>
                                    <li>Mestrando em Língua, Literatura e Cultura Inglesas</li>
                                    <li>Especialista em Linguagens e Tecnologias</li>
                                    <li>Graduado em Letras e Pedagogia</li>
                                    <li>MBA em Management (cursando) </li>
                                    <li>C2 Proficiency (University of Cambridge) </li>
                                    <li>Teaching Knowledge Test 1, 2, 3, YL & CLIL (University of Cambridge)</li>
                                    <li>TESOL Specialization (Arizona State University) </li>
                                    <li>Master Certificate in TEFL (Bridge Education Group)</li>
                                    <li>Certificate in Teaching Business English (Bridge Education Group)</li>
                                    <li>Teaching IELTS Exam Prep (Bridge Education Group)</li>
                                    <li>Curiosidade: Já viveu um ano na Irlanda, e hoje estuda em Portugal. É viciado em música, voluntariado, e natureza.</li>
                                </ul>
                            </Lista>
                        </Person>

                        <Person>
                            <BlockFive>
                                <ImagePerson alt="Teacher Fabiana" src='https://ik.imagekit.io/6zjortsiwu/tr:w-300/fabiana.webp' />
                                <Block>
                                    <TitleClass><h1>Teacher Fabiana</h1></TitleClass>
                                    <SubTitleTwo><h1>Experiência com ambiente corporativo internacional</h1></SubTitleTwo>
                                </Block>
                            </BlockFive>
                            <Lista>
                                <ul>
                                    <li>6 anos de experiência como professora</li>
                                    <li>C1 Certificate (The Gallery London)</li>
                                    <li>Psicologia(Cursando)</li>

                                    <li>Curiosidade: Já viveu na Áustria e na Espanha, trabalhando na maior organização jovem do mundo. Ama basquete, música e o cérebro humano.</li>
                                </ul>
                            </Lista>
                        </Person>

                        <Person>
                            <BlockFive>
                                <ImagePerson alt="Teacher Werllison" src='https://ik.imagekit.io/6zjortsiwu/tr:w-300/werllison.webp' />
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
                                    <li>Experiência como Supervisor de Exames de Cambridge</li>
                                    <li>Curiosidade:
                                        É apaixonado por viagens, aviação, estudar outros idiomas e é um ótimo jogador de vôlei.</li>
                                </ul>
                            </Lista>
                        </Person>

                        <Person>
                            <BlockFive>
                                <ImagePerson alt="Teacher Lucas" src='https://ik.imagekit.io/6zjortsiwu/tr:w-300/lucas.jpeg' />
                                <Block>
                                    <TitleClass><h1>Teacher Lucas</h1></TitleClass>
                                    <SubTitleTwo><h1>Experiência com Inglês Acadêmico</h1></SubTitleTwo>
                                </Block>
                            </BlockFive>
                            <Lista>
                                <ul>
                                    <li>5 anos de experiência como professor</li>
                                    <li>Graduado em Inglês</li>
                                    <li>Experiência com pesquisa acadêmica, publicação de artigos, e tem um livro publicado</li>
                                    <li>Curiosidade: Ama jogos, cultura geek, literatura clássica, teatro grego e estuda latim clássico.</li>
                                </ul>
                            </Lista>
                        </Person>

                        <Person>
                            <BlockFive>
                                <ImagePerson alt="Teacher Weslley" src='https://ik.imagekit.io/6zjortsiwu/tr:w-300/wesley.jpeg' />
                                <Block>
                                    <TitleClass><h1>Teacher Weslley</h1></TitleClass>
                                    <SubTitleTwo><h1>Experiência com Educação Internacional</h1></SubTitleTwo>
                                </Block>
                            </BlockFive>
                            <Lista>
                                <ul>
                                    <li>10 anos de experiência</li>
                                    <li>Graduado em Inglês</li>
                                    <li>Certificado internacionalmente em Sign Language e Drama</li>
                                    <li>Experiência como Supervisor de Exames de Cambridge</li>
                                    <li>Curiosidade: Ama cozinhar, viajar e canta, e já morou nos Estados Unidos e na Holanda.</li>
                                </ul>
                            </Lista>
                        </Person>

                        <Person>
                            <BlockFive>
                                <ImagePerson alt="Teacher Carolina" src='https://ik.imagekit.io/6zjortsiwu/tr:w-300/carolina.jpeg' />
                                <Block>
                                    <TitleClass><h1>Teacher Carolina</h1></TitleClass>
                                    <SubTitleTwo><h1>Experiência em Educação Internacional e Corporativa
                                    </h1></SubTitleTwo>
                                </Block>
                            </BlockFive>
                            <Lista>
                                <ul>
                                    <li>5 anos de experiência como professora de Inglês</li>
                                    <li>Experiência em educação internacional</li>
                                    <li>Doutoranda em Engenharia da Computação no ITA</li>
                                    <li>Curiosidade: Já viveu três anos na Ásia ensinando Inglês, fazendo doutorado e é mestre nos chopsticks</li>
                                </ul>
                            </Lista>
                        </Person>

                        <Person>
                            <BlockFive>
                                <ImagePerson alt="Teacher Caroline" src='https://ik.imagekit.io/6zjortsiwu/tr:w-300/caroline.jpeg' />
                                <Block>
                                    <TitleClass><h1>Teacher Caroline</h1></TitleClass>
                                    <SubTitleTwo><h1>Experiência com Inglês Acadêmico
                                    </h1></SubTitleTwo>
                                </Block>
                            </BlockFive>
                            <Lista>
                                <ul>
                                    <li>12 anos de experiência como professora de Inglês
                                    </li>
                                    <li>Graduada em Francês</li>
                                    <li>Relações Internacionais (Cursando)
                                    </li>
                                    <li>Tradutora e revisora</li>
                                    <li>Teaching Knowledge</li>
                                    <li>Test 1, 2, 3 & CLIL (University of Cambridge)
                                    </li>
                                    <li>TOEFL iTP B2</li>
                                    <li>TOEFL iTP B2
                                    </li>
                                    <li>Curiosidade: Adora viajar, sambar e comer bem. Fã da Queen Bey e apaixonada pelo som dos anos 80.
                                    </li>
                                </ul>
                            </Lista>
                        </Person>

                        <Person>
                            <BlockFive>
                                <ImagePerson alt="Teacher Matheus" src='https://ik.imagekit.io/6zjortsiwu/tr:w-300/matheus.jpeg' />
                                <Block>
                                    <TitleClass><h1>Teacher Matheus</h1></TitleClass>
                                    <SubTitleTwo><h1>Experiência com Inglês Corporativo

                                    </h1></SubTitleTwo>
                                </Block>
                            </BlockFive>
                            <Lista>
                                <ul>
                                    <li>4 anos de experiência como professor
                                    </li>
                                    <li>Tradutor e Engenheiro civil
                                    </li>
                                    <li>Experiência com Business English
                                    </li>
                                    <li>Curiosidade:
                                        Já viveu 3 anos na Espanha, toca guitarra, surfa e tem um canal de jogos no Youtube.
                                    </li>

                                </ul>
                            </Lista>
                        </Person>

                        <Person>
                            <BlockFive>
                                <ImagePerson alt="Letícia Rocha" src='https://ik.imagekit.io/6zjortsiwu/tr:w-300/leticia.jpeg' />
                                <Block>
                                    <TitleClass><h1>Letícia Rocha</h1></TitleClass>
                                    <SubTitleTwo><h1>Designer do time

                                    </h1></SubTitleTwo>
                                </Block>
                            </BlockFive>
                            <Lista>
                                <ul>
                                    <li>5 anos de experiência como designer freelancer com foco em redes sociais

                                    </li>
                                    <li>Graduada em Comunicação Social
                                        (Universidade Federal do Piauí)

                                    </li>
                                    <li>Design Gráfico
                                        (Opa! Escola de Design)

                                    </li>
                                    <li>Adobe Illustrator
                                        (EBAC)

                                    </li>
                                    <li>Curiosidade:Além de designer, também trabalha como ilustradora freelancer e é apaixonada por arte.


                                    </li>

                                </ul>
                            </Lista>
                        </Person>
                    </Equipes>
                </Block>
            </Container>
            <Foot />
        </div>

    )
}