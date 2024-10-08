import styled, { css } from "styled-components"
import Close from '@mui/icons-material/Close'
import Right from '@mui/icons-material/Check'
import IMaskInput from "react-input-mask";
import whats from '@mui/icons-material/WhatsApp'

import star from '@mui/icons-material/Star'

export const Container = styled.div`
  flex:1;
  overflow: hidden;

 `;

const iconCSS = css`
color:white;
font-size: large;
`;

export const IconWhats = styled(whats)`
    ${css`
      color:green;
      font-size: large;
    `}
`;
export const Contact = styled.div`
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  margin-top: 5%;
  span{
      font-family: 'Be Vietnam Pro';
      font-size: 1.2rem;
      font-weight: 400;
      color: var(--button_color);
      margin-left: 1%;
  }
`;


export const TelInput = styled(IMaskInput)`
  width: 80%;
  padding-left: 3%;
  margin-top: 3%;
  border: solid 2px;
  border-radius: 30px;
  height: 8vh;
  border-color: var(--background_blue) ;
  color: var(--background_blue);
  font-size: 250%;
  :focus{
    text-decoration: none;
    outline: 0;
  }
  ::-webkit-input-placeholder {
    font-size: 65%;
    color: var(--schedule);
  }

  @media only screen and (max-width: 425px) {
    width: 100%;
    font-size: 170%;
  }


`
export const InputText = styled.input`
  width: 80%;
  padding-left: 3%;
  margin-top: 3%;
  border: solid 2px;
  border-radius: 30px;
  height: 8vh;
  border-color: var(--background_blue) ;
  color: var(--background_blue);
  font-size: 250%;
  :focus{
    text-decoration: none;
    outline: 0;
  }
  ::-webkit-input-placeholder {
    font-size: 65%;
    color: var(--schedule);
  }

  @media only screen and (max-width: 425px) {
    width: 100%;
    font-size: 170%;
  }
`;


export const BlockEi = styled.div`
  display: flex;
  justify-content: center;
  
  @media only screen and (max-width: 425px) {
      flex-direction: column;
      justify-content: flex-start;
  }
`

export const IconStar = styled(star)`
    ${iconCSS}
`;

export const Hero = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-height: 1480px;
    height: 44vw;
    background-color: var(--background_blue);
    align-items: center;
    display: grid;
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
    padding-left: 10%;
    padding-right: 10%;
    @media only screen and (max-width: 1196px) {
      height: 540px;
    }
    @media only screen and (max-width: 907px) {
      height: 470px;
    }
    @media only screen and (max-width: 425px) {
      padding-left: 5rem;
      padding-right: 5rem;
      padding-top: 0rem;
      height: 470px;
    }
    @media only screen and (max-width: 320px) {
      padding-left: 3rem;
      padding-right: 2rem;
    }
   
`

export const Title = styled.div`
  max-width: 1200px;

  & h1{
      font-family: 'Baloo 2';
      font-size: 6vw;
      font-weight: 700;
      color: white;
      text-align: center;
      font-display: swap;
    }
    & h2{
      font-family: 'Baloo 2';
      font-size: 6.0vw;
      font-weight: 700;
      color: var(--text_detail);
      text-align: center;
      font-display: swap;
    }
    
    @media only screen and (max-width: 425px) {
      h1{
        text-align: left;
      }
    }
`

export const TitleTwo = styled.div`
  max-width: 800px;
  font-display;
  & h1{
      font-family: 'Baloo 2';
      font-size: 3vw;
      font-weight: 700;
      color: white;
      text-align: left;
      font-display: swap;
    };
    & b{
      font-family: 'Baloo 2';
      font-size: 3vw;
      font-weight: 700;
      color: var(--text_detail);
      text-align: left;
      font-display: swap;
    }

   
`

export const TitleBlue = styled.div`
  width: 100%;
  & h1{
      font-family: 'Baloo 2';
      font-size: 4vw;
      font-weight: 700;
      color: var(--background_blue);
      text-align: left;
      font-display: swap;
    }
  
  @media only screen and (max-width: 425px) {
    display: table-header-group;
  }
`

export const SubTitle = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  & h1{
      font-family: 'Be Vietnam Pro';
      font-size: 2rem;
      font-weight: 400;
      color: white;
      text-align: center;
      font-display: swap;
    }
   & h2{
      font-family: 'Be Vietnam Pro';
      font-size: 3rem;
      font-weight: 400;
      color: white;
      text-align: center;
      margin-bottom: 35px;
      font-display: swap;
   } 
   iframe{
    width:30%;
    position:absolute; 
    margin-left:70%; 
    margin-top:10%; 
    height:40%;
   }
   @media only screen and (max-width: 1196px) {
      width: 60%;
      h2{
          font-size: 2.6rem;
      }
      iframe{
        margin-top:20%; 
      }
    }
    @media only screen and (max-width: 947px) {
       width: 50%;
    }


    @media only screen and (max-width: 907px) {
       width: 50%;
       h1{
        font-size:1.5rem;
       }
    }
    @media only screen and (max-width: 768px) {
      iframe{
        display: none;
      }
    }
    @media only screen and (max-width: 425px) {
      width: 80%;
      h1{
        font-family: 'Be Vietnam Pro';
        font-size: 1.2rem;
        font-weight: 400;
        color: white;
        text-align: left;
      }
      iframe{
        display: flex;
        width:100%;
        margin-left:10%; 
        margin-top:55%; 
        height:35%;
      }
    }

    @media only screen and (max-width: 375px) {
      iframe{
        margin-top:60%; 
        height:30%;
      }
    }

    @media only screen and (max-width: 320px) {
      iframe{
        margin-left:10%; 
        margin-top:65%; 
        height:30%;
      }
    }
    

`

export const SubTitleTwo = styled.div`
  width: 100%;
  padding-left: 1%;
  padding-right: 1%;
  b{
    margin-left: 5px;
    margin-right: 5px;
  }
  

  & h5{
      font-family: 'Be Vietnam Pro';
      font-size: 2vw;
      font-weight: 400;
      color: var(--background_blue);
      text-align: center;
      margin-bottom: 5%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  & h1{
      font-family: 'Be Vietnam Pro';
      font-size: 1.2vw;
      font-weight: 400;
      color: white;
      text-align: center;
      margin-bottom: 5%;
    }

    & h3{
      font-family: 'Be Vietnam Pro';
      font-size: 1.6vw;
      font-weight: 400;
      color: white;
      text-align: center;
      margin-top: -5%;
      margin-bottom: 5%;
    }
    & h2{
      font-family: 'Be Vietnam Pro';
      font-size: 1.3vw;
      font-weight: 400;
      color: white;
      text-align: center;
      margin-bottom: 5%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    @media only screen and (max-width: 425px) {
      h2, h3, h1, h5{
        font-size: 3vw;
      }
    }
   
`


export const SubTitleBlue = styled.div`
  width: 100%;
  
  & h1{
      font-family: 'Be Vietnam Pro';
      font-size: 2vw;
      font-weight: 400;
      color: var(--background_blue);
      text-align: left;
    }
    
  @media only screen and (max-width: 425px) {
    display: table-footer-group;
  }
`

export const ButtonAlign = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 3vw;
  justify-content: center;
  margin-top: 4vw;
  @media only screen and (max-width: 425px) {
    a{
     width: 100%;
    }
  }
`

export const Stars = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 11%;
`

export const Content = styled.div`
  width: 100%;
  height: 100vw;
  padding-left: 20%;
  padding-right: 20%;
  margin-top:10%
`



export const ImageCourse = styled.img`
  width: 100%;
  height:100%;
  max-width: 15vw;
  max-height: 15vw;
  margin-right: 10%;
  margin-left: 10%;
  
`

export const ImageInformation = styled.img`
  width: 15%;
  height: 100%;
  max-width: 380px;
  max-height: 380px;
`


export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 5vw;
  background-color: var(--background_blue);
  border-radius: 2vw;
  margin-top: 2vw;
  h1{
    text-align: center;
    margin-bottom: 0%;
  }
`


export const BlockX = styled.div`
  width: 100%;
  display: flex;
`
export const Persons = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  cursor: grab;
`
export const Explanation = styled.div`
  width: 100%;
  height: 70vw;
  padding-left: 10%;
  padding-right: 10%;
  margin-top: 5vw;
`


export const Schedule = styled.div`
  display: flex;
  margin-top: 100px;
  align-items: center;
  justify-items: center;
  background-color: var(--background_blue);
  width: 100%;
  height: 30vw;
  padding-left: 10%;
  padding-right: 10%;
  margin-top: 2%;

`
export const Block = styled.div`
    width: 100%;
`
export const Information = styled.div`
    width: 100%;
    background-color: white;
    height: 25vw;
    margin-bottom: 10%;
    border-radius: 20px;
`

export const BlockTwo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5vw;
  width: 100%;
  @media only screen and (max-width: 1196px) {
      margin-top: 3%;
  }
`


export const BlockThree = styled.div`
  margin-top: 50px;
  width: 100%;
`

export const BlockFive = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 5%;
  padding-left: 3%;
  padding-right: 3%;
  margin-top: 5%;
`
export const Curses = styled.div`
  display: flex;
  justify-items: center;
  background-color: white;
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  margin-top: 5%;
  height: 140vw;
  
`
export const ClassOne = styled.div`
  background-color: #2B69DB;
  width: 100%;
  height: 35vw;
  border-radius: 43px;
  margin-top: 10%;
  margin-bottom: 10%;
  @media only screen and (max-width: 425px) {
    border-radius: 14px;
  }
`
export const TitleClass = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 2%;
   & h1{
      font-family: 'Baloo 2';
      font-size: 4rem;
      font-weight: 700;
      color: white;
      text-align: center;
    }
    @media only screen and (max-width: 1196px) {
      h1{
          font-size: 3.6rem;
      }
    }
    @media only screen and (max-width: 947px) {
        h1{
            font-size: 2.9rem;
        }
   }
   @media only screen and (max-width: 907px) {
        h1{
            font-size: 2.2rem;
        }
    }
    @media only screen and (max-width: 425px) {
      h1{
            font-size: 2rem;
        }
    }
    @media only screen and (max-width: 370px) {
      h1{
            font-size: 1.8rem;
        }
    }

    @media only screen and (max-width: 350px) {
      h1{
            font-size: 1.4rem;
        }
    }

   
`
export const SubTitleBlueTwo = styled.div`
  width: 100%;
  & h1{
      font-family: 'Be Vietnam Pro';
      font-size: 3rem;
      font-weight: 400;
      color: var(--background_blue);
      text-align: justify;
      margin-right: 40px;
    }
    @media only screen and (max-width: 1196px) {
      h1{
          font-size: 2rem;
      }
  }
  @media only screen and (max-width: 907px) {
      h1{
          font-size: 1.8rem;
      }
  }
  @media only screen and (max-width: 425px) {
    h1{
          font-size: 1.2rem;
          margin-right: 10px;
      }
  }
  @media only screen and (max-width: 320px) {
    height: 140px;
  }
`
export const Foot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 71px;
  background-color: #2B69DB;
  border-top: 1px #fff;
`

export const TitleClassTwo = styled.div`
    width: 100%;
    margin-bottom:30px;
   & h1{
      font-family: 'Baloo 2';
      font-size: 4vw;
      font-weight: 700;
      color: #71A7ED;
      text-align: left;
    }
`
export const Lista = styled.div`
  width: 100%;
  margin-right: 2%;
  & li{ 
      font-family: 'Be Vietnam Pro';
      font-size: 1.5vw;
      font-weight: 400;
      color: white;
  }

`
export const ClassTwo = styled.div`
  background-color: #2B69DB;
  width: 100%;
  height: 35vw;
  border-radius: 43px;
  justify-content: center;
  margin-bottom: 10%;

  @media only screen and (max-width: 425px) {
    border-radius: 14px;
  }

`

export const ClassThree = styled.div`
  background-color: #2B69DB;
  width: 100%;
  height: 35vw;
  border-radius: 43px;
  justify-content: center;

  @media only screen and (max-width: 425px) {
    border-radius: 14px;
  }

`
export const ImageTwo = styled.img`
  width: 450px;
  height: 450px;
  margin-right: 30px;
`
export const Depoiments = styled.div`
  width: 100%;
  height: 20vw;
  padding-left: 10%;
  padding-right: 10%;
  margin-top: 10%;
  margin-bottom: 30%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 530px) {
    height: 85vw;
  }
  
`
export const Person = styled.div`
  width: 100%;  
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1300px;
  min-width: 93%;
  display: flex;
  justify-items: center;
  background-color:var(--background_blue);
  height: 46vw;
  border-radius: 2vw;
  margin-right: 4%;

  @media only screen and (max-width: 425px) {
      height: 100vw;
  }
`
export const ImagePerson = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  max-height: 12vw;
  max-width: 12vw;
  border-radius: 100%;
  margin-bottom: 3%;
  
`

export const Mission = styled.div`
width: 100%;
display: flex;
align-items: center;
background-color: white;
height: 782px;
padding-left: 100px;
padding-right: 100px;
@media only screen and (max-width: 1196px) {
    height: 482px;
    margin-top: 70px;
  }
  @media only screen and (max-width: 425px) {
    padding-left: 5rem;
    padding-right: 5rem;
    height: 320px;
    margin-top: 0px;
  }
  @media only screen and (max-width: 425px) {
    padding-left: 3rem;
    padding-right: 2.5rem;
  }
  @media only screen and (max-width: 320px) {
    height: 400px;
  }
`