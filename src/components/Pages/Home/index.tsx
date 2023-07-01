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
    IconWhats,
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
    Explanation,
    BlockX,
    Information,
    ImageInformation,
    ContentContainer,
    IconClose,
    IconAccepted
} from "./styles"

import Lottie from "lottie-react";
import mundo from '../../assets/mundo.json'
import emailAnimation from '../../assets/email.json'
import papo from '../../assets/bater-papo (1).png'
import pencil from '../../assets/pencil.png'
import distintivo from '../../assets/distintivo.png'
import globo2 from '../../assets/globo.png'
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
    const isMobile = useMediaQuery({ query: '(max-width: 425px)' })
    const [width, setWidth] = useState(0)
    const slide_wrapper : any = useRef()
    const informations = [
        {
            src: distintivo,
            title:'Qualidade',
            subtitle:'<h5>Ensino de alta qualidade com nossa equipe de professores certificados internacionalmente.</h5>'
        },
        {
            src: diplomado,
            title:'+100 Alunos',
            subtitle:'<h5>Mais de 100 alunos em 12 estados do Brasil e 6 países.</h5>'
        },
        {
            src: lampada,
            title:'Soluções',
            subtitle:'<div><h5>Curso regular, aulas de conversação, inglês para negócios, e o que mais você precisar.</h5></div>'
        }
    ]
    const depoiments = [
        {
            name:"Lílian Carvalho ",
            sub:'Talent Management Specialist',
            sub1: "AB InBev",
            city: "Campinas - SP",
            text:'Sempre me comuniquei bem em Inglês, mas senti a necessidade de focar em Inglês corporativo com uma linguagem mais formal. Encontro na Cre8 o fit perfeito para isso, já que a instituição se preocupa em entregar aulas coerentes com suas necessidades!',
            image:lilian,
        },
        {
            name:"Gabriela Xavier",
            sub:'Innovation Coordinator ',
            sub1: "Hospital Albert Einstein",
            city: "São Paulo - SP",
            text:'A Cre8 foi uma indicação maravilhosa de uma grande amiga e desde então recomendo sempre a escola e o Teacher Saulo para amigos. As aulas são bem organizadas, visuais e com um conteúdo super atual, tornando o aprendizado da língua aliado a temas relevantes e profundos! ',
            image:gabriela,
        },
        {
            name:"Ana Jéssica",
            sub:'Gestora de Compras',
            sub1: "Grupo Vanguarda",
            city: "Teresina - PI",
            text:'Já tive experiências em outras escolas, e apesar do contato com inglês, nunca senti segurança ao falar. Estou há quase um ano e meio na Cre8 por me sentir à vontade para conversar, errar e aprender com aulas que trazem tópicos e situações em que podemos praticar o inglês na vida real!',
            image:ana,
        },
        {
            name:"Laise Paula",
            sub:'Assessora de Comunicação',
            sub1: " ",
            city: "Caxias - MA",
            text:'Estudo na Cre8 desde o comecinho. Posso falar com certeza que foi essencial para meu grande desenvolvimento! Hoje me sinto muito mais segura ao falar e escrever em inglês. Além disso, os professores são excelentes profissionais e as aulas dinâmicas e interessantes. Amo estudar na Cre8 e indico sempre!',
            image:laise,
        },
        {
            name:"Daniela Corrêa ",
            sub:'Procurement Strategy',
            sub1: "Yara Internationa",
            city: "Oslo - Noruega",
            text:'Apesar de ter estudado inglês desde criança, me sentia muito insegura com relação a conversação e gramática. As aulas individuais me fizeram ter confiança para assumir um dos maiores desafios da minha carreira: me mudar para a Noruega! Amei o método da Cre8, com aulas dinâmicas e muita conversação!',
            image:daniela,
        },
        {
            name:"Kleber Ferbones",
            sub:'Especialista em Projeto e Desenvolvimento',
            sub1: "Ambev",
            city: "São José dos Campos - SP",
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
                    {isMobile? <h1>Conquiste o <br/> mundo com <br/><b>fluência em inglês</b></h1>: <h1>Conquiste o mundo com <br/><b>fluência em inglês</b></h1>}
                    </Title>
                    
                </BlockEi>
                <BlockEi>
                    <SubTitle>                   
                        <h1>Aprenda inglês com quem sabe e
                            desbloqueie um mundo de oportunidades</h1>
                            
                    </SubTitle>
                    {isMobile?  <div style={{width:'100%', marginTop:'6vw'}}><Lottie animationData={mundo} loop={true} /></div>  : null}
                </BlockEi>
                <ButtonAlign>
                    <a style={{textDecoration:'none'}} href={'#form'}><Button title="Quero falar Inglês!"/></a>
                </ButtonAlign>
            </Block>
       </Hero>

       <Content>   
        {informations.map((information) => {
                return (
                    <Information>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '2%' }}>
                        <ImageInformation src={information.src} alt="Globo, livro de inglês e uma maçã" />
                    </div>
                    <TitleClass>
                        <h1 style={{backgroundColor:'var(--schedule)'}}>{information.title}</h1>  
                    </TitleClass>
                    <div style={{marginTop:'5%'}}>
                        <SubTitleTwo dangerouslySetInnerHTML={{__html: information.subtitle}} />
                    </div>
                    
                    </Information>
                );
            })}
    
       </Content>

        

        <Depoiments>
            <Block>
                <TitleClassTwo><h1 style={{color:'#457cc4'}}>Depoimentos</h1></TitleClassTwo>
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
                                                <SubTitleTwo><h3><em>{depoiment.sub1}</em></h3></SubTitleTwo>
                                                <SubTitleTwo><h1>{depoiment.city}</h1></SubTitleTwo>
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
    
        <Explanation>
            <TitleBlue><h1 style={{fontSize:'6vw'}}>Por que escolher a cre8?</h1></TitleBlue>
            <SubTitleBlue >
                    <h1 style={{fontSize:'3vw'}}><em>Fale Inglês desde sua primeira aula!</em></h1>
            </SubTitleBlue>

            <div style={{width:'100%', marginTop:'5vw'}}>

                <div style={{width:'100%', height:'20vw', display:'flex', flexDirection:'column', alignItems:'end', marginTop:'0.5vw', justifyContent:'space-between'}}>
                    
                    <div style={{display:'flex', marginTop:'0.3vw'}}>
                        <SubTitleBlue>
                                <h1 style={{fontSize:'2.5vw'}}>Sem fórmula mágica, sem método milagroso, sem plataforma que você vai
                                    parar de acessar no primeiro mês.</h1>
                        </SubTitleBlue>
                    </div>
            
                    
                </div>

                <div style={{width:'100%', height:'300vw', marginTop:'-8vw'}}>
                    <ContentContainer>
                        <SubTitleTwo><h1>Professores certificados internacionalmente</h1></SubTitleTwo>
                    </ContentContainer>
                    <ContentContainer>
                        <SubTitleTwo><h1>Turmas pequenas</h1></SubTitleTwo>
                    </ContentContainer>
                    <ContentContainer>
                        <SubTitleTwo><h1>Valores competitivos</h1></SubTitleTwo>
                    </ContentContainer>
                    <ContentContainer>
                    <SubTitleTwo><h1>Horários flexíveis</h1></SubTitleTwo>
                    </ContentContainer>
                </div> 
            </div>
        </Explanation>
      

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
                    <h1>Opções de cursos que se adequam às suas necessidades</h1>
                </SubTitleBlue>
                <BlockThree>
                    <ClassOne>
                            <TitleClass><h1>Turmas Regulares</h1></TitleClass>
                            <Lista style={{listStyleType:'none', textAlign:'center', paddingLeft:'10%', paddingRight:'10%', marginBottom:'5%'}}><li>Estude com pessoas de diversos lugares do Brasil e até do mundo</li></Lista>
                            <BlockTwo>
                                <ImageCourse src={globo2} alt="Globo, livro de inglês e uma maçã"/>
                                <Lista>
                                        <ul>
                                            <li>Até 5 alunos por turma </li>
                                            <li>2 aulas por semana</li>
                                            <li>Turmas dos níveis Iniciante ao Avançado</li>
                                            <li>Material de Cambridge, moderno e atualizado</li>
                                        </ul>
                                </Lista>
                            </BlockTwo>
                        
                    </ClassOne>

                    <ClassTwo>
                        <TitleClass><h1>Aulas VIP</h1></TitleClass>
                        <Lista style={{listStyleType:'none', textAlign:'center', paddingLeft:'10%', paddingRight:'10%', marginBottom:'5%'}}><li>O curso 1 to 1 foi feito para quem:</li></Lista>
                        <BlockTwo>
                            <ImageCourse src={papo} alt="Nota máxima prova"/>
                            <Lista>
                                    <ul>
                                        <li>Prefere aulas exclusivas </li>
                                        <li>Possui uma necessidades particular com inglês</li>
                                        <li>Precisa de um estudo intensivo da língua</li>
                                    </ul>
                            </Lista>
                        </BlockTwo>
                    </ClassTwo>

                    <ClassThree>
                        <TitleClass><h1>Preparatório IELTS/Toefl</h1></TitleClass>
                        <Lista style={{listStyleType:'none', textAlign:'center', paddingLeft:'10%', paddingRight:'10%', marginBottom:'5%'}}><li>Exames de Proficiência são a porta de entrada para inúmeras oportunidades:</li></Lista>

                        <BlockTwo>
                            <ImageCourse src={pencil} alt="Teste ou prova de inglês"/>
                            <Lista>
                                    <ul>
                                        <li>Imigrar para outro país</li>
                                        <li>Bolsas de estudo</li>
                                        <li>Vagas de trabalho no exterior</li>
                                        <li>IELTS, Toefl, Cambridge, Toeic</li>
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
                    <Lottie animationData={emailAnimation} loop={true} />
                </div>
            </div>
            : 
            <form
                onSubmit={handleSubmit(sendEmail)}
                id="form"
            >
                <div>
                    <TitleBlue>
                        <h1>Quer saber mais?</h1>
                    </TitleBlue>
                    <div style={{width:'100%'}}>
                        <InputText {...register('nome')} placeholder='Nome' onChange={(event)=>setName(event.target.value)}></InputText>
                        
                        {errors.nome && <> <br/><br/><span>{errors.nome.message}</span><br/></>}
                        
                        <InputText {...register('email')} placeholder='Email' onChange={(event)=>setEmail(event.target.value)} type="email" required  ></InputText>
                        <TelInput {...register('telefone')} value={phone}
                                mask="(99) 9999-99999"
                                placeholder="Celular"
                                onChange={(event)=>setPhone(event.target.value)}>
                        </TelInput>
                        <br/><br/> 
                        {errors.telefone && <span>{errors.telefone.message}</span>}
                    </div>
                    <div style={{width:'100%', marginTop:'3%', marginBottom:'10%'}} >
                        <Button type='submit' onClick={()=>{}} title="Enviar"/> 
                      {isMobile? 
                        <>  
                            <a href='https://api.whatsapp.com/message/YMMTW2V3I5YWP1?autoload=1&app_absent=0' style={{width:'100%', display:'flex', justifyContent:'center', marginTop:'10%', textDecorationColor:'green'}}><IconWhats sx={{ fontSize: 30 }}/> 
                            <h1 style={{width:'50%', fontFamily: 'Be Vietnam Pro', fontSize:'4vw', color:'green', marginLeft:'2vw'}}>
                                Enviar Whatsapp
                            </h1></a>
                        </>: null}  
                    </div>
                </div> 
            </form>
            
            }
        </Contact>

        <Foot/>

    </Container>
    )
}