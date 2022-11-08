import styled, {css} from "styled-components"
import instagram from '@mui/icons-material/Instagram'
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
    padding-left: 10%;
    padding-right: 10%;
    @media only screen and (max-width: 1024px) {
      height: 60px;
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
    width: 22rem;
    height: 22rem;
    position: relative;
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
  position: relative;
  @media only screen and (min-width: 426px) {
      display: none;
  }
`

export const Block = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    position: relative;
    @media only screen and (max-width: 425px) {
      display: none;
    }
`; 

export const Menu = styled.div`
    width: 100%;
    max-width: 464px;
    height: 250px;
    background-color: white;
    align-items: center;
    border-radius: 38px;
    margin-right: -5.9%;
    margin-top: 180px;
    position: relative;
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
  margin-right: 100px;
  position: relative;
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

export const IconX = styled(close)`
  color:var(--background_blue);
`

export const  BlockThree = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 30px;
  margin-top: -20px;
  margin-bottom: 20px;
`
