import styled, {css} from "styled-components"
import instagram from '@mui/icons-material/Instagram'
import whats from '@mui/icons-material/WhatsApp'
import menu from '@mui/icons-material/Menu'
import close from '@mui/icons-material/Close'

export const Container = styled.div`
    width: 100%;
    max-height: 89px;
    background-color: var(--background_blue);
    align-items: center;
    display: flex;
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
    padding-left: 5%;
    padding-right: 10%;

    @media only screen and (max-width: 1024px) {
      max-height: 60px;
    }
    @media only screen and (max-width: 425px) {
      padding-left: 3rem;
      padding-right: 5rem;
    }
    @media only screen and (max-width: 375px) {
      padding-left: 1rem;
      padding-right: 2rem;
  }
`; 
export const Logo = styled.img`
    width: 100%;
    height: 100%;
    width: 22rem;
    height: 22rem;
    position: relative;
    @media only screen and (max-width: 1024px) {
      max-height: 15rem;
      max-width: 15rem;
    }
    @media only screen and (max-width: 425px) {
      max-height: 13rem;
      max-width: 13rem;
    }
`; 

export const  BlockText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const  Blockx = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 53%;
  margin-right: -14.3%;
  display: flex;
  align-items: center;
  justify-content: end;
  position: relative;
  


  @media only screen and (min-width: 630px){
    display: none;
  }

  @media only screen and (max-width: 375px){
    margin-right: -5.3%;
  }
  @media only screen and (max-width: 320px){
    margin-right: -6.3%;
    margin-top: 63%;
  }
`
export const BlockMenu = styled.div`
  width: 0%;
  display: flex;
  align-items: center;
  justify-content: end;
  position: relative;
  @media only screen and (min-width: 630px) {
      display: none;
  }
`

export const Block = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    position: relative;
    @media only screen and (max-width: 630px) {
      display: none;
    }
`; 

export const Menu = styled.div`
    width: 80%;
    height: 250px;
    background-color: white;
    align-items: center;
    border-radius: 38px;
    position: relative;
    @media only screen and (max-width: 320px) {
      width: 100%;
    }
`
export const BlockTwo = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
`
export const TextMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  & a{
    font-family: 'Baloo 2';
    font-size: 2.5rem;
    font-weight: 700;
    color:  var(--background_blue);
    text-decoration: none;
  }
`

export const Text = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
   a{
    font-family: 'Be Vietnam Pro';
    font-size: 2rem;
    color: white;
    padding: 3rem;
    text-decoration: none;
  }
  h1{
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

export const IconWhats = styled(whats)`
    ${iconCSS}
`; 

export const IconMenu = styled(menu)`
    ${iconCSS}
`; 

export const IconX = styled(close)`
  color:var(--background_blue);
`

export const  BlockThree = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: right;
  padding-right: 40px;
  margin-top: -20px;
  margin-bottom: 20px;
`
export const  Blockv = styled.div`
  width: 100%;
`

