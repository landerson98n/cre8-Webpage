import styled, {css} from "styled-components"
import instagram from '@mui/icons-material/Instagram'

export const Container = styled.div`
    background-color: #2B69DB;
    width: 100%;
    height: 1000px;
    padding-left: 100px;
    padding-right: 100px;
 `; 

export const Logo = styled.img`
    width: 880px;
    height: 880px;
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
`
export const Block = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`
export const BlockTwo = styled.div`
  margin-top: 60px;
  width: 100%;
`
export const BlockTrhee = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`