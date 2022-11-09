import React from 'react'
import {
    Container,  
    Hero,
    Title,
    SubTitle,
    ButtonAlign,
    Testimonial,
    IconStar,
    Stars,
    Content,
    TitleBlue,
    SubTitleBlue,
    Image,
    FirstContent,
    TextBlock,
    TitleOt,
    Schedule,
    TitleTwo,
    Block,
    Curses,
    ClassOne,
    TitleClass,
    Lista,
    ImageCourse,
    BlockTwo,
    ClassTwo,
    ClassThree,
    BlockThree,
    BlockFour,
    Depoiments,
    Person,
    ImagePerson,
    BlockFive,
    TitleClassTwo,
    BlockSix,
    BlockSeven,
    BlockEi,
    SubTitleTwo,
    BlockImage,
    BlockImageTwo,
    Persons,
    BlockX
} from "./styles"

import estudando from '../../assets/estudando.webp'
import educacao from '../../assets/educacao.webp'
import livro from '../../assets/livro.webp'
import globo from '../../assets/globo.webp'
import exame from '../../assets/exame.webp'
import teste from '../../assets/teste.webp'
import landerson from '../../assets/Landerson.webp'
import { motion } from "framer-motion";
import { Button } from "../../Button"
import { Header } from "../../Header"
import { Foot } from "../../Foot"
import {useMediaQuery} from 'react-responsive'
import {useRef, useEffect, useState} from 'react'

export function Home(){
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const [width, setWidth] = useState(0)
    const slide_wrapper : any = useRef()

    useEffect(()=>{
        slide_wrapper.current?
        setWidth(slide_wrapper.current.scrollWidth - slide_wrapper.current.offsetWidth):undefined
    },[])

    return (
    <Container> 
       <Header/>
      
       <Hero>
            <Block>
                <BlockEi>
                    <Title>
                        <motion.h1 
                        >Aprenda falar  inglês com professores certificados internacionalmente!</motion.h1>
                    </Title>
                </BlockEi>
                <BlockEi>
                    <SubTitle>  
                        <h1>Aprenda inglês com professores certificados internacionalmente. Conquiste sua fluencia e domine o mundo dos negócios.</h1>
                    </SubTitle>
                </BlockEi>
                <ButtonAlign>
                    <Button title="Começe a aprender!"/> 
                </ButtonAlign>
                <Testimonial>
                    <h1>Somos aprovados por todos os nossos alunos</h1>
                </Testimonial>
                <Stars>
                    <IconStar/> 
                    <IconStar/> 
                    <IconStar/> 
                    <IconStar/> 
                    <IconStar/> 
                </Stars>
            </Block>
       </Hero>

 
        <Depoiments
            as={motion.div}
            initial={{opacity:isMobile?1:0.5}}
            whileHover={{scale:1.02,opacity:1}}
            transition={{duration:0.4}}
        >
            <Block>
                <TitleClassTwo><h1>Depoimentos</h1></TitleClassTwo>
                <Persons
                    as={motion.div} 
                    ref={slide_wrapper}
                >
                    <BlockX
                        as={motion.div} 
                        drag='x'
                        dragConstraints={{
                            left: -width,
                            right:0
                        }}
                    >
                        <Person>
                            <BlockFive>
                                <Block>
                                    <TitleClass><h1>Landerson Miguel</h1></TitleClass>
                                    <SubTitleTwo><h1>“Ótimos professores e excelentes aulas. Realizei meu sonho de falar inglês!”</h1></SubTitleTwo>
                                    <Stars>
                                    <IconStar/> 
                                    <IconStar/> 
                                    <IconStar/> 
                                    <IconStar/> 
                                    <IconStar/> 
                                    </Stars>
                                </Block>
                                <ImagePerson alt="Landerson Miguel" src={landerson}/>
                            </BlockFive>
                                </Person> 
                                <Person>
                                        <BlockFive>
                                            <Block>
                                                <TitleClass><h1>Landerson Miguel</h1></TitleClass>
                                                <SubTitleTwo><h1>“Ótimos professores e excelentes aulas. Realizei meu sonho de falar inglês!”</h1></SubTitleTwo>
                                                <Stars>
                                                <IconStar/> 
                                                <IconStar/> 
                                                <IconStar/> 
                                                <IconStar/> 
                                                <IconStar/> 
                                                </Stars>
                                            </Block>
                                            <ImagePerson alt="Landerson Miguel" src={landerson}/>
                                        </BlockFive>
                                </Person> 
                    </BlockX>
                        
                    </Persons>
            </Block>
            
        </Depoiments>
        

       <Content>    
        <BlockSeven>
            <Block>

            {isMobile?
                <FirstContent>
                    <TextBlock>
                        <TitleBlue>
                            <h1>Aprenda inglês de forma flexível!</h1>
                        </TitleBlue>
                        <SubTitleBlue>
                            <h1>A Cre8 possui cursos para todos os tipos de necessidades. Do iniciante ao avançado, até mesmo aulas exclusivas, com horários que melhor se adequem ao dia a dia do aluno. Confira nossos cursos!</h1>
                        </SubTitleBlue>
                    </TextBlock>
                    <BlockImage>
                        <Image src={estudando} alt="garota estudando inglês"/>
                    </BlockImage>     
                </FirstContent>
            :
                <FirstContent
                    as={motion.div}
                    initial={{opacity:0.5}}
                    whileHover={{scale:1.09, x:0,opacity:1}}
                    transition={{duration:0.4}}
                >
                    <TextBlock>
                        <TitleBlue>
                            <h1>Aprenda inglês de forma flexível!</h1>
                        </TitleBlue>
                        <SubTitleBlue>
                            <h1>A Cre8 possui cursos para todos os tipos de necessidades. Do iniciante ao avançado, até mesmo aulas exclusivas, com horários que melhor se adequem ao dia a dia do aluno. Confira nossos cursos!</h1>
                        </SubTitleBlue>
                    </TextBlock>
                    <BlockImage>
                        <Image src={estudando} alt="garota estudando inglês"/>
                    </BlockImage>     
                </FirstContent>
            }
           
            {isMobile?
                <FirstContent>
                    <BlockImageTwo>
                        <Image src={educacao} alt="certificados e diplomas internacionais"/>
                    </BlockImageTwo>

                    <TextBlock>
                        <BlockSix>
                            <TitleBlue>
                                <h1>Com professores certificados internacionalmente!</h1>
                            </TitleBlue>
                            <SubTitleBlue>
                                <h1>A Cre8 possui professores com mais de 5 anos de experiência, com certificação na University of Cambridge,  Arizona State University e Bridge Education Group. Quer saber mais? veja mais sobre nossa equipe.</h1>
                            </SubTitleBlue>
                        </BlockSix>
                    </TextBlock>
                
                </FirstContent>
            :
                <FirstContent 
                    as={motion.div}
                    initial={{opacity:0.5}}
                    whileHover={{scale:1.09, x:0,opacity:1}}
                    transition={{duration:0.4}}
                    >
                    <BlockImageTwo>
                        <Image src={educacao} alt="certificados e diplomas internacionais"/>
                    </BlockImageTwo>

                    <TextBlock>
                        <BlockSix>
                            <TitleBlue>
                                <h1>Com professores certificados internacionalmente!</h1>
                            </TitleBlue>
                            <SubTitleBlue>
                                <h1>A Cre8 possui professores com mais de 5 anos de experiência, com certificação na University of Cambridge,  Arizona State University e Bridge Education Group. Quer saber mais? veja mais sobre nossa equipe.</h1>
                            </SubTitleBlue>
                        </BlockSix>
                    </TextBlock>
                
                </FirstContent>
            }
            
            {isMobile?
                <FirstContent>
                    <TextBlock>
                        <TitleOt>
                            <h1>Por que falar inglês?</h1>
                        </TitleOt>
                        <SubTitleBlue>
                            <h1>Segundo uma pesquisa realizada pela Catho, profissionais que dominam o idioma possuem salário até 60% maior. Além disso, é a lingua internacional dos negócios</h1>
                        </SubTitleBlue>
                    </TextBlock>
                    <BlockImage>
                        <Image src={livro} alt="garoto falando inglês"/>
                    </BlockImage>
                </FirstContent>
            :
                <FirstContent
                    as={motion.div}
                    initial={{opacity:0.5}}
                    whileHover={{scale:1.09,opacity:1}}
                    transition={{duration:0.4}}
                >
                    <TextBlock>
                        <TitleOt>
                            <h1>Por que falar inglês?</h1>
                        </TitleOt>
                        <SubTitleBlue>
                            <h1>Segundo uma pesquisa realizada pela Catho, profissionais que dominam o idioma possuem salário até 60% maior. Além disso, é a lingua internacional dos negócios</h1>
                        </SubTitleBlue>
                    </TextBlock>
                    <BlockImage>
                        <Image src={livro} alt="garoto falando inglês"/>
                    </BlockImage>
                </FirstContent>
            }

            </Block>
        </BlockSeven>
       </Content>

        <Schedule>
            <Block>
                <TitleTwo>
                    <h1>Agende um teste de nivelamento <b>gratuito</b> e descubra seu nível de inglês!</h1>
                </TitleTwo>
                <Button title="Agendar teste agora!"/>
            </Block>
        </Schedule>
        
        <Curses>
            <Block>
                <TitleBlue>
                    <h1>Nossos cursos</h1>
                </TitleBlue>
                <SubTitleBlue>
                    <h1>A Cre8 conta com aulas diversificados que melhor se adequam à situação de cada aluno!</h1>
                </SubTitleBlue>
                <BlockThree>
                    <ClassOne>
                        <TitleClass><h1>Turmas Regulares</h1></TitleClass>
                        <BlockTwo>
                            <ImageCourse src={globo} alt="Globo, livro de inglês e uma maçã"/>
                            <Lista>
                                    <ul>
                                        <li>Até 4 alunos por turma </li>
                                        <li>2 aulas por semana (1h cada)</li>
                                        <li>Turmas dos níveis Iniciante ao avançado</li>
                                        <li>Material de Cambridge, moderno,atualizado</li>
                                    </ul>
                            </Lista>
                        </BlockTwo>
                    </ClassOne>

                    <ClassTwo>
                        <TitleClass><h1>Aulas VIP</h1></TitleClass>
                        <BlockTwo>
                            <ImageCourse src={exame} alt="Nota máxima prova"/>
                            <Lista>
                                    <ul>
                                        <li>Aulas exclusivas </li>
                                        <li>Focado em quem tem necessidades especiais com inglês</li>
                                        <li>Estudo intensivo da língua</li>
                                    </ul>
                            </Lista>
                        </BlockTwo>
                    </ClassTwo>

                    <ClassThree>
                        <TitleClass><h1>Preparatório IELTS/Toefl</h1></TitleClass>
                        <BlockTwo>
                            <ImageCourse src={teste} alt="Teste ou prova de inglês"/>
                            <Lista>
                                    <ul>
                                        <li>Cursos preparatórios para exames de proficência.</li>
                                    </ul>
                            </Lista>
                        </BlockTwo>
                    </ClassThree>
                    
                </BlockThree>
                <BlockFour>
                    <Button title="Saiba mais"/>
                </BlockFour>
            </Block>
        </Curses>

        <Foot/>

    </Container>
    )
}