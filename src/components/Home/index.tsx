import {
    Container, 
    Header, 
    Logo, 
    Text, 
    IconInsta,
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
    TitleOt
} from "./styles"
import LogoBranca from "../../assets/logo_branca.png"
import estudando from '../../assets/estudando.png'
import educacao from '../../assets/educacao.png'
import livro from '../../assets/livro.png'
import { Button } from "../Button"

export function Home(){
    return (
    <Container> 
       <Header>
            <Logo src={LogoBranca}/>
            <Text>
                <a href="#">Início</a>
                <a href="#">Equipe</a>
                <a href="#">Sobre</a>
            </Text>
            <IconInsta/>  
       </Header>
       <Hero>
            <Title>
                <h1>Aprenda falar  inglês com professores certificados internacionalmente!</h1>
            </Title>
            <SubTitle>
                <h1>Aprenda inglês com professores certificados internacionalmente. Conquiste sua fluencia e domine o mundo dos negócios.</h1>
            </SubTitle>
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
       </Hero>
       <Content>
        <FirstContent>
            <TextBlock>
                <TitleBlue>
                    <h1>Aprenda inglês de forma flexível!</h1>
                </TitleBlue>
                <SubTitleBlue>
                    <h1>A Cre8 possui cursos para todos os tipos de necessidades. Do iniciante ao avançado, até mesmo aulas exclusivas, com horários que melhor se adequem ao dia a dia do aluno. Confira nossos cursos!</h1>
                </SubTitleBlue>
            </TextBlock>
            <Image src={estudando}/>
        </FirstContent>
        <FirstContent>
        <Image src={educacao}/>
            <TextBlock>
                <TitleBlue>
                    <h1>Com professores certificados internacionalmente!</h1>
                </TitleBlue>
                <SubTitleBlue>
                    <h1>A Cre8 possui professores com mais de 5 anos de experiência, com certificação na University of Cambridge,  Arizona State University e Bridge Education Group. Quer saber mais? veja mais sobre nossa equipe.</h1>
                </SubTitleBlue>
            </TextBlock>
        </FirstContent>
        <FirstContent>
            <TextBlock>
                <TitleOt>
                    <h1>Por que falar inglês?</h1>
                </TitleOt>
                <SubTitleBlue>
                    <h1>Segundo uma pesquisa realizada pela Catho, profissionais que dominam o idioma possuem salário até 60% maior. Além disso, é a lingua internacional dos negócios</h1>
                </SubTitleBlue>
            </TextBlock>
            <Image src={livro}/>
        </FirstContent>
       </Content>
    </Container>
    )
}