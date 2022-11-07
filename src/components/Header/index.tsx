import{
    Logo,
    Container,
    Text,
    IconInsta,
    Block,
    IconMenu,
    BlockMenu
} from './styles'
import LogoBranca from "../assets/logo_branca.webp"

export function Header(){
    return(
        <Container>
                <Logo src={LogoBranca} alt="Logo Cre8"/>
                <Block>
                    <Text>
                        <a href="#">Início</a>
                        <a href="#">Equipe</a>
                        <a href="#">Sobre</a>
                    </Text>
                    <IconInsta sx={{ fontSize: 25 }}/>  
                </Block>
                <BlockMenu>
                    <IconMenu sx={{ fontSize: 40 }}/>
                </BlockMenu>
        </Container>
            
    )
}