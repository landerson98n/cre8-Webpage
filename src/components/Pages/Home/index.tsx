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
    BlockX,
    Information,
    ImageInformation
} from "./styles"

import globo from '../../assets/globo.webp'
import exame from '../../assets/exame.webp'
import teste from '../../assets/teste.webp'
import distintivo from '../../assets/distintivo.png'
import diplomado from '../../assets/diplomado.png'
import Kleber from '../../assets/Kleber.jpeg'
import lampada from '../../assets/lampada.png'
import lilian from '../../assets/lilian.webp'
import laise from '../../assets/laise.webp'
import daniela from '../../assets/daniela.webp'
import ana from '../../assets/ana.webp'
import gabriela from '../../assets/gabriela.webp'
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
    const informations = [
        {
            src: distintivo,
            title:'Qualidade',
            subtitle:'<h2>Ensino de alta qualidade com nossa equipe de professores certificados internacionalmente.</h2>'
        },
        {
            src: diplomado,
            title:'+100 Alunos',
            subtitle:'<h2>Mais de 100 alunos em <b>12 estados</b> do Brasil e <b>6 países</b>.</h2>'
        },
        {
            src: lampada,
            title:'Soluções',
            subtitle:'<div><h2>Curso regular, aulas de conversação, inglês para negócios, e o que mais você precisar.</h2></div>'
        }
    ]
    const depoiments = [
        {
            name:"Lílian Carvalho ",
            sub:'Talent Management Specialist AB InBev, Campinas - SP',
            text:'Sempre me comuniquei bem em Inglês, mas senti a necessidade de focar em Inglês corporativo com uma linguagem mais formal. Encontro na Cre8 o fit perfeito para isso, já que a instituição se preocupa em entregar aulas coerentes com suas necessidades!',
            image:lilian,
        },
        {
            name:"Gabriela Xavier",
            sub:'Innovation Coordinator Hospital Albert Einstein, São Paulo - SP',
            text:'A Cre8 foi uma indicação maravilhosa de uma grande amiga e desde então recomendo sempre a escola e o Teacher Saulo para amigos. As aulas são bem organizadas, visuais e com um conteúdo super atual, tornando o aprendizado da língua aliado a temas relevantes e profundos! ',
            image:gabriela,
        },
        {
            name:"Ana Jéssica",
            sub:'Gestora de Compras Grupo Vanguarda, Teresina - PI',
            text:'A Cre8 foi uma indicação maravilhosa de uma grande amiga e desde então recomendo sempre a escola e o Teacher Saulo para amigos. As aulas são bem organizadas, visuais e com um conteúdo super atual, tornando o aprendizado da língua aliado a temas relevantes e profundos! ',
            image:ana,
        },
        {
            name:"Laise Paula",
            sub:'Assessora de Comunicação, Caxias - MA',
            text:'Estudo na Cre8 desde o comecinho. Posso falar com certeza que foi essencial para meu grande desenvolvimento! Hoje me sinto muito mais segura ao falar e escrever em inglês. Além disso, os professores são excelentes profissionais e as aulas dinâmicas e interessantes. Amo estudar na Cre8 e indico sempre!',
            image:laise,
        },
        {
            name:"Daniela Corrêa ",
            sub:'Procurement Strategy Yara International, Oslo - Noruega',
            text:'Apesar de ter estudado inglês desde criança, me sentia muito insegura com relação a conversação e gramática. As aulas individuais me fizeram ter confiança para assumir um dos maiores desafios da minha carreira: me mudar para a Noruega! Amei o método da Cre8, com aulas dinâmicas e muita conversação!',
            image:daniela,
        },
        {
            name:"Kleber Ferbones",
            sub:'Especialista em Projeto e Desenvolvimento Ambev, São José dos Campos - SP',
            text:'Tenho feito aulas desde o início de 2022, e tem sido uma ótima opção para mim que busco um aprendizado personalizado, focando nos pontos que preciso melhorar. Outra vantagem é a flexibilidade de horários, que me ajudam demais! Obrigado pela paciência e ensinamentos rs',
            image:Kleber,
        }
    ]
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

        <Depoiments>
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
                    {depoiments.map((depoiment)=>{
                        return(
                                <Person>
                                    <Stars>
                                        <IconStar/> 
                                        <IconStar/> 
                                        <IconStar/> 
                                        <IconStar/> 
                                        <IconStar/> 
                                    </Stars>
                                    <BlockFive>
                                        <Block>
                                            <div style={{width:'100%', display:'flex', justifyContent:'center'}}><ImagePerson alt="Lilian" src={depoiment.image}/></div>
                                            <SubTitleTwo><h2>{depoiment.text}</h2></SubTitleTwo>
                                            <div>
                                                <TitleClass><h1>{depoiment.name }
                                                </h1></TitleClass>
                                                <SubTitleTwo><h1>{depoiment.sub}</h1></SubTitleTwo>
                                                
                                            </div>
                                        </Block>
                                        
                                    </BlockFive>
                            </Person> 
                        );
                    })}
                            
                    </BlockX>
                        
                    </Persons>
            </Block>
            
        </Depoiments>
    
       <Content>   
        {informations.map((information) => {
                return (
                    <Information>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '2%' }}>
                        <ImageInformation src={information.src} alt="Globo, livro de inglês e uma maçã" />
                    </div>
                    <TitleClass>
                        <h1>{information.title}</h1>  
                    </TitleClass>
                    <SubTitleTwo dangerouslySetInnerHTML={{__html: information.subtitle}} />
                    </Information>
                );
            })}
       
        <BlockSeven>
            <Block>
            
                        
            {/* {isMobile?
                <FirstContent>
                    <TextBlock>
                        <TitleBlue>
                            <h1>Aprenda inglês de forma flexível!</h1>
                        </TitleBlue>
                        <SubTitleBlue>
                            <h1>A Cre8 possui cursos para todos os tipos de necessidades. Do iniciante ao avançado, até mesmo aulas exclusivas, com horários que melhor se adequem ao dia a dia do aluno.<a href='#courses'>Confira nossos cursos!</a> </h1>
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
                            <h1>A Cre8 possui cursos para todos os tipos de necessidades. Do iniciante ao avançado, até mesmo aulas exclusivas, com horários que melhor se adequem ao dia a dia do aluno. <a href='#courses'>Confira nossos cursos!</a></h1>
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
                                <h1>A Cre8 possui professores com mais de 5 anos de experiência, com certificação na University of Cambridge,  Arizona State University e Bridge Education Group. Quer saber mais? <a href='#equipe'>veja mais sobre nossa equipe.</a></h1>
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
                                <h1>A Cre8 possui professores com mais de 5 anos de experiência, com certificação na University of Cambridge,  Arizona State University e Bridge Education Group. Quer saber mais? <a href='/Equipe'>veja mais sobre nossa equipe.</a></h1>
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
                    <iframe style ={{width:"100%", height:'500px', marginTop:'5%'}} src="https://embed.lottiefiles.com/animation/129404"></iframe>
                    </BlockImage>
                </FirstContent>
            } */}

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
        
        <Curses id='courses'>
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
                    <InputText {...register('nome')} placeholder='Seu nome' onChange={(event)=>setName(event.target.value)}></InputText>
                    
                    {errors.nome && <> <br/><br/><span>{errors.nome.message}</span><br/></>}
                    
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