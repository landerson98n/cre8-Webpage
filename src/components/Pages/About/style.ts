import styled, {css} from "styled-components"
import instagram from '@mui/icons-material/Instagram'

export const Container = styled.div`
    background-color: var(--background_blue);
    width: 100%;
    height: 1100px;
    padding-left: 10%;
    padding-right: 10%;
    @media only screen and (max-width: 768px){
      height: 900px;
    }
    @media only screen and (max-width: 425px){
      height: 750px;
    }
 `; 

export const Logo = styled.img`
    width: 880px;
    height: 880px;
    @media only screen and (max-width: 768px){
      width: 480px;
      height: 480px;
    }
    @media only screen and (max-width: 425px){
      width: 310px;
      height: 310px;
    }
`; 

const iconCSS = css`
  color:white;
  width: 100px;
`;
export const IconInsta = styled(instagram)`
    ${iconCSS}
`; 

export const SubTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  & h1{
      font-family: 'Be Vietnam Pro';
      font-size: 30px;
      font-weight: 400;
      color: white;
      text-align: justify;
    }
    @media only screen and (max-width: 768px) {
      h1{
        font-size: 20px;
      }
    }
    @media only screen and (max-width: 425px){
        h1{
          font-size: 15px;
        }
    }
`
export const Block = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  @media only screen and (max-width: 425px){
      height: 200px;
    }
`
export const BlockTwo = styled.div`
  margin-top: 60px;
  width: 100%;
`
export const BlockTrhee = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`