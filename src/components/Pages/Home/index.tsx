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
    Information
} from "./styles"

import globo from '../../assets/globo.webp'
import exame from '../../assets/exame.webp'
import teste from '../../assets/teste.webp'
import landerson from '../../assets/Landerson.webp'
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
                        <Person>
                            <BlockFive>
                                <Block>
                                    <div>
                                        <TitleClass><h1>Lílian Carvalho 
                                        </h1></TitleClass>
                                        <SubTitleTwo><h1>Talent Management Specialist
                                        AB InBev, Campinas - SP</h1></SubTitleTwo>
                                        <div style={{width:'100%', display:'flex', justifyContent:'center'}}><ImagePerson alt="Lilian" src={lilian}/></div>
                                    </div>
                                    
                                    <SubTitleTwo><h2>“Prevendo uma necessidade, desde o ano passado retomei as aulas de Inglês. Sempre me comuniquei bem com o idioma mas achava necessário desenvolver melhor essa habilidade para o ambiente corporativo com uma linguagem mais formal. Encontro na Cre8 o fit perfeito para isso, já que a instituição se preocupa em entregar aulas coerentes com a necessidade dos seus alunos e alunas!”</h2></SubTitleTwo>
                                    <Stars>
                                    <IconStar/> 
                                    <IconStar/> 
                                    <IconStar/> 
                                    <IconStar/> 
                                    <IconStar/> 
                                    </Stars>
                                </Block>
                                
                            </BlockFive>
                        </Person> 
                                <Person>
                                        <BlockFive>
                                            <Block>
                                                <TitleClass><h1>Gabriela Xavier</h1></TitleClass>
                                                <SubTitleTwo><h1>Innovation Coordinator
                                                            Hospital Albert Einstein, São Paulo - SP </h1></SubTitleTwo>            
                                                <div style={{width:'100%', display:'flex', justifyContent:'center'}}><ImagePerson alt="Gabriela Xavier" src={gabriela}/></div>
                                                <SubTitleTwo><h2>“A Cre8 foi uma indicação maravilhosa de uma grande amiga e desde então recomendo sempre a escola e o Teacher Saulo para amigos. As aulas são bem organizadas, visuais e com um conteúdo super atual, tornando o aprendizado da língua aliado a temas relevantes e profundos! ”</h2></SubTitleTwo>
                                                <Stars>
                                                <IconStar/> 
                                                <IconStar/> 
                                                <IconStar/> 
                                                <IconStar/> 
                                                <IconStar/> 
                                                </Stars>
                                            </Block>
                                            
                                        </BlockFive>
                                </Person> 
                                <Person>
                                        <BlockFive>
                                            <Block>
                                                <TitleClass><h1>Ana Jéssica</h1></TitleClass>
                                                <SubTitleTwo><h1>Gestora de Compras
                                                                Grupo Vanguarda,
                                                                Teresina - PI</h1></SubTitleTwo>
                                                                <div style={{width:'100%', display:'flex', justifyContent:'center'}}><ImagePerson alt="Ana Jessica" src={ana}/></div>                       
                                                <SubTitleTwo><h2>“Antes de começar na Cre8 já tive algumas experiências (presenciais e on-line) em outras escolas, e apesar do contato com o inglês, nunca senti segurança de conversar com alguém e ainda morria de vergonha. Já estou há quase um ano e meio na Cre8 por me sentir à vontade para conversar, errar e aprender com as aulas que trazem tópicos diversos e situações em que podemos realmente praticar o inglês na vida. 
Feliz demais por me sentir motivada a aprender inglês e praticar esse conhecimento na vida profissional e pessoal.”</h2></SubTitleTwo>
                                                <Stars>
                                                <IconStar/> 
                                                <IconStar/> 
                                                <IconStar/> 
                                                <IconStar/> 
                                                <IconStar/> 
                                                </Stars>
                                            </Block>
                                            
                                        </BlockFive>
                                </Person> 
                                <Person>
                                        <BlockFive>
                                            <Block>
                                                <TitleClass><h1>Laise Paula</h1></TitleClass>
                                                <SubTitleTwo><h1>Assessora de Comunicação, Caxias - MA</h1></SubTitleTwo>
                                                <div style={{width:'100%', display:'flex', justifyContent:'center'}}><ImagePerson alt="Laise Paula" src={laise}/></div>                       
                                                <SubTitleTwo><h2>“Estudo na Cre8 desde o comecinho, já foram 4 semestres passando por diferentes fases e professores da instituição, posso falar com certeza que foi essencial para meu grande desenvolvimento, pois hoje me sinto muito mais segura para falar e escrever em inglês. Além disso, todos os professores são excelentes profissionais e tornam as aulas dinâmicas e interessantes. Amo demais estudar na Cre8 e indico sempre!”</h2></SubTitleTwo>
                                                <Stars>
                                                <IconStar/> 
                                                <IconStar/> 
                                                <IconStar/> 
                                                <IconStar/> 
                                                <IconStar/> 
                                                </Stars>
                                            </Block>
                                            
                                        </BlockFive>
                                </Person>
                                <Person>
                                        <BlockFive>
                                            <Block>
                                                <TitleClass><h1>Daniela Corrêa</h1></TitleClass>
                                                <SubTitleTwo><h1>Procurement Strategy
                                                Yara International,
                                                Oslo - Noruega</h1></SubTitleTwo>
                                                <div style={{width:'100%', display:'flex', justifyContent:'center'}}><ImagePerson alt="Daniela Cortes" src={daniela}/></div>                         
                                                <SubTitleTwo><h2>“Apesar de ter estudado inglês desde criança, eu era muito insegura em alguns aspectos do idioma, principalmente com relação à conversação e gramática, e sentia falta de ter um vocabulário mais formal e apropriado para o mundo
corporativo. As aulas individuais me fizeram ter mais confiança para assumir um dos maiores desafios da minha carreira até então me mudar para a Noruega pra
atuar gerenciando projetos globais! O material utilizado é excelente, e eu amei o método de ensino, com aulas dinâmicas e muita conversação!”</h2></SubTitleTwo>
                                                <Stars>
                                                <IconStar/> 
                                                <IconStar/> 
                                                <IconStar/> 
                                                <IconStar/> 
                                                <IconStar/> 
                                                </Stars>
                                            </Block>
                                            
                                        </BlockFive>
                                </Person> 
                                
                    </BlockX>
                        
                    </Persons>
            </Block>
            
        </Depoiments>
        

       <Content>   
       <Information >
            <TitleClass>
                <h1>Professores certificados internacionalmente</h1>  
            </TitleClass>
        </Information> 
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}> 
            <Information style={{backgroundColor:'#E15C54'}}>
                <TitleClass >
                    <h1>+100 Alunos</h1>      
                </TitleClass>
            </Information > 
            <Information style={{marginLeft:'2%',}}>
                <TitleClass>
                        <h1>6 países</h1>
                </TitleClass>
            </Information> 
        </div>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}> 
            <Information>
                <TitleClass>
                        <h1>12 estados do Brasil</h1>
                </TitleClass>
            </Information> 
            <Information style={{marginLeft:'2%'}}>
                <TitleClass>
                        <h1>Turmas pequenas</h1>
                </TitleClass>
            </Information> 
        </div>
        <Information style={{backgroundColor:'var(--background_blue)'}}>
            <TitleClass>
                    <h1>Aula individuais</h1>
            </TitleClass>
        </Information> 
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