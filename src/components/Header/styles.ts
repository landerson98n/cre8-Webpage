import styled, {css} from "styled-components"
import instagram from '@mui/icons-material/Instagram'
import menu from '@mui/icons-material/Menu'

export const Container = styled.div`
    width: 100%;
    max-height: 89px;
    background-color: var(--background_blue);
    align-items: center;
    display: flex;
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
    padding-left: 100px;
    padding-right: 100px;
    
    @media only screen and (max-width: 1024px) {
      height: 60px;
    }
    @media only screen and (max-width: 425px) {
      padding-left: 3rem;
      padding-right: 5rem;
    }
    @media only screen and (max-width: 425px) {
      padding-left: 1rem;
      padding-right: 2rem;
  }
`; 
export const Logo = styled.img`
    width: 22rem;
    height: 22rem;
    @media only screen and (max-width: 1024px) {
      height: 15rem;
      width: 15rem;
    }
    @media only screen and (max-width: 425px) {
      height: 13rem;
      width: 13rem;
    }
`; 


export const BlockMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  @media only screen and (min-width: 426px) {
      display: none;
  }
`

export const Block = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 425px) {
      display: none;
    }
`; 

export const Text = styled.div`
  margin-right: 100px;
  >a{
    font-family: 'Be Vietnam Pro';
    font-size: 2rem;
    color: white;
    padding: 3rem;
    text-decoration: none;
  }
  @media only screen and (max-width: 1024px) {
      a{
        font-size: 1.5rem;
      }
    }
  @media only screen and (max-width: 425px) {
      a{
        font-size: 1.2rem;
      }
  }
  @media only screen and (max-width: 425px) {
      margin-right: 1%;
  }
`; 

const iconCSS = css`
  color:white;
  font-size: large;
`;

export const IconInsta = styled(instagram)`
    ${iconCSS}
`; 

export const IconMenu = styled(menu)`
    ${iconCSS}
`; 
