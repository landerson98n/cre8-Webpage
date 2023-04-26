import React from 'react'
import {
    TelInput,
    Contact,
    InputText,
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
import {useForm} from 'react-hook-form'
import emailjs from '@emailjs/browser';
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
const createEmail = z.object({
    nome : z.string().nonempty('Seu nome é obrigatório'),
    email: z.string().nonempty('O email é obrigatório').email('Formato de email inválido'),
    telefone: z.string().min(11, "O número de telefone está incompleto"),
}) 

export function Home(){
    const {register, handleSubmit, formState: {errors}} = useForm(
        {
            resolver: zodResolver(createEmail)
        }
    )
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [enviar, setEnviar] = useState(false)
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const [width, setWidth] = useState(0)
    const slide_wrapper : any = useRef()

    useEffect(()=>{
        slide_wrapper.current?
        setWidth(slide_wrapper.current.scrollWidth - slide_wrapper.current.offsetWidth):undefined
    },[])

    function sendEmail(data: any){
        setEnviar(true)
        const params = {
            message: `Nome: ${name}, Telefone: ${phone}, Email: ${email} `
        }
        emailjs.send('service_xkzbnlg', 'template_rf5wgp9', params, '50tNXyTFF0JinzHnv')
    }
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
                        <iframe  src="https://embed.lottiefiles.com/animation/79960"></iframe>    
                    </SubTitle>
                </BlockEi>
                <ButtonAlign>
                    <a style={{textDecoration:'none'}} href={'#form'}><Button title="Começe a aprender!"/></a>
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
                    <iframe style ={{width:"100%", height:'300px'}} src="https://embed.lottiefiles.com/animation/90724"></iframe>
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
                    <iframe style ={{width:"100%", height:'500px'}} src="https://embed.lottiefiles.com/animation/90724"></iframe>
                    </BlockImage>     
                </FirstContent>
            }
           
            {isMobile?
                <FirstContent>
                    <BlockImageTwo>
                    <iframe style ={{width:"100%", height:'300px'}} src="https://embed.lottiefiles.com/animation/85352"></iframe>                    </BlockImageTwo>
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
                    <iframe style ={{width:"100%", height:'500px'}} src="https://embed.lottiefiles.com/animation/85352"></iframe>
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
                        <iframe style ={{width:"100%", height:'300px'}} src="https://embed.lottiefiles.com/animation/129404"></iframe>
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
                    <iframe style ={{width:"100%", height:'500px'}} src="https://embed.lottiefiles.com/animation/129404"></iframe>
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
                <a href='#form' style={{textDecoration:'none'}}><Button title="Agendar teste agora!"/></a> 
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
                
            </Block>
        </Curses>
    <Contact>
        {enviar ? 
        <div style={{width:'100%', marginTop:'10%', marginBottom:'10%'}}>
            <TitleBlue
            as={motion.div}
            initial={{opacity:0.2, x: -100}}
            animate={{x: 10, opacity: 1}}
            transition={{duration:0.6}}
            >
                <h1>Agradecemos sua mensagem! Entraremos em contato em breve</h1>
            </TitleBlue>
            <div style={{width:'100%',marginTop:'1%', display:'flex', justifyContent:'center'}}>
                <iframe src="https://embed.lottiefiles.com/animation/74623"></iframe>
            </div>
        </div>
        : 
        <form
            onSubmit={handleSubmit(sendEmail)}
            id="form"
        >
            <div>
                <TitleBlue>
                    <h1>Entre em contato com a gente</h1>
                </TitleBlue>
                <div style={{width:'100%'}}>
                    <div>
                        <InputText {...register('nome')} placeholder='Seu nome' onChange={(event)=>setName(event.target.value)}></InputText>
                        <br/>
                        <br/>
                        {errors.nome && <span>{errors.nome.message}</span>}
                    </div>
                    <InputText {...register('email')} placeholder='email@example.com' onChange={(event)=>setEmail(event.target.value)} type="email" required  ></InputText>
                    <TelInput {...register('telefone')} value={phone}
                            mask="(99) 9999-99999"
                            placeholder="Telefone"
                            onChange={(event)=>setPhone(event.target.value)}>
                    </TelInput>
                    <br/><br/> 
                    {errors.telefone && <span>{errors.telefone.message}</span>}
                </div>
                <div style={{width:'100%', marginTop:'3%', marginBottom:'10%'}} >
                    <Button type='submit' onClick={()=>{}} title="Enviar"/> 
                </div>
            </div> 
        </form>
        
        }
    </Contact>
        <Foot/>

    </Container>
    )
}