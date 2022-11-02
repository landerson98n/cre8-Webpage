import styled, {css} from "styled-components"
import { RFValue } from 'react-native-responsive-fontsize';
import instagram from '@mui/icons-material/Instagram'
import star from '@mui/icons-material/Star'

export const Container = styled.div`
  flex:1;
 `; 

export const Header = styled.div`
    width: 100%;
    max-height: 89px;
    background-color: var(--background_blue);
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding-top: 35px;
    padding-bottom: 35px;
    padding-left: 79px;
    padding-right: 79px;
`; 

export const Logo = styled.img`
    width: 220px;
    height: 220px;
`; 
const iconCSS = css`
  width: 32px;
  height: 32px;
  color:white;
`;
export const IconInsta = styled(instagram)`
    ${iconCSS}
`; 
export const IconStar = styled(star)`
    ${iconCSS}
`; 
export const Text = styled.div`
  display: inline;
  align-items: center;
  margin-right: 460px;
  font-size: 25px;
  >a{
    font-family: 'Be Vietnam Pro';
    font-size: 20px;
    color: white;
    padding: 30px;
    text-decoration: none;
  }
`; 

export const Hero = styled.div`
    width: 100%;
    max-height: 755px;
    height: 570px;
    background-color: var(--background_blue);
    align-items: center;
    display: grid;
    padding-top: 35px;
    padding-bottom: 35px;
    padding-left: 79px;
    padding-right: 79px;
`
export const Title = styled.div`
  & h1{
      font-family: 'Baloo 2';
      font-size: 60px;
      font-weight: 700;
      color: white;
      text-align: center;
    }
`
export const TitleBlue = styled.div`
  margin-top: 80px;
  & h1{
      width: 500px;
      font-family: 'Baloo 2';
      font-size: 60px;
      font-weight: 700;
      color: var(--background_blue);
      text-align: left;
    }
`
export const TitleOt= styled.div`
  margin-top: 80px;
  & h1{
      width: 600px;
      font-family: 'Baloo 2';
      font-size: 60px;
      font-weight: 700;
      color: var(--background_blue);
      text-align: left;
    }
`
export const SubTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & h1{
      width: 724px;
      font-family: 'Be Vietnam Pro';
      font-size: 30px;
      font-weight: 400;
      color: white;
      text-align: center;
    }
`
export const SubTitleBlue = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  & h1{
      width: 664px;
      font-family: 'Be Vietnam Pro';
      font-size: 30px;
      font-weight: 400;
      color: var(--background_blue);
      text-align: left;
    }
`

export const ButtonAlign = styled.div`
  width: 100%;
  display: flex;
  padding-top: 30px;
  padding-bottom: 30px;
  justify-content: center;
`
export const Testimonial = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & h1{
      width: 724px;
      font-family: 'Be Vietnam Pro';
      font-size: 25px;
      font-weight: 400;
      color: white;
      text-align: center;
    }
`
export const Stars = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  width: 100%;
  height: 1280px;
  background-color: white;
  padding-left: 79px;
  padding-right: 79px;
  justify-content: space-between;
`

export const Image = styled.img`
  width: 480px;
  height: 480px;
  margin-right: 30px;
`

export const TextBlock = styled.div`
  width: 688px;
`
export const FirstContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
