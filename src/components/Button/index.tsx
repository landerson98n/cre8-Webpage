import {Container, Text} from './styles'

interface Props{
    title : String
}

export function Button({title, ...rest}:Props){
    return(
        <Container>
            <Text><h1>{title}</h1></Text>
        </Container>
    )
}