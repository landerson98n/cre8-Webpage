import styled, {css} from "styled-components"

export const Container = styled.div`
    background-color: var(--background_blue);
    width: 100%;
    height: 100%;
    padding-bottom:5%;
    padding-top:5%;
    padding-left: 10%;
    padding-right: 10%;
    display: flex;
    align-items: center;
 `; 


export const Equipes = styled.div`
  width: 100%;
  margin-top: 5%;
`

export const ImagePerson = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
  height: 100%;
  width: 100%;
  max-height: 280px;
  max-width: 280px;
  border-radius: 100%;
  margin-right: 8%;
  @media only screen and (max-width: 1196px) {
    object-fit: cover;
    height: 100%;
    width: 100%;
    max-height: 250px;
    max-width: 250px;
    }
    @media only screen and (max-width: 907px) {
      object-fit: cover;
      height: 100%;
      width: 100%;
      max-height: 180px;
      max-width: 180px;
    }
    @media only screen and (max-width: 425px) {
      object-fit: cover;
      height: 100%;
      width: 100%;
      max-height: 100px;
      max-width: 100px;
  }
  @media only screen and (max-width: 320px) {
      max-height: 90px;
      max-width: 90px;
  }
`
export const SubTitleTwo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3.5%;
  & h1{
      font-family: 'Be Vietnam Pro';
      font-size: 3rem;
      font-weight: 400;
      color: white;
      text-align: left;
    }
   @media only screen and (max-width: 1196px) {
      h1{
          font-size: 2.4rem;
      }
    }
    @media only screen and (max-width: 947px) {
        h1{
            font-size: 2.2rem;
        }
   }
   @media only screen and (max-width: 907px) {
        h1{
            font-size: 1.4rem;
        }
    }
    @media only screen and (max-width: 425px) {
      h1{
            font-size: 1rem;
        }
    }
`

export const Lista = styled.div`
  width: 100%;
  padding-left: 12%;
  padding-right: 6%;
  & li{ 
      font-family: 'Be Vietnam Pro';
      font-size: 2rem;
      font-weight: 400;
      color: white;
  }
  @media only screen and (max-width: 1196px) {
      li{
          font-size: 1.6rem;
      }
  }
  @media only screen and (max-width: 947px) {
      li{
          font-size: 1.2rem;
      }
  }
`

export const Person = styled.div`
  width: 100%;  
  height: 100%;
  display: block;
  justify-content: center;
  max-width: 1300px;
  display: block;
  justify-items: center;
  background-color: #71A7ED;
  height: 580px;
  border-radius: 27px;
  align-items: center;
  margin-top: 5%;
  @media only screen and (max-width: 1196px) {
    height: 500px;
  }
  @media only screen and (max-width: 907px) {
    height: 400px;
  }
  @media only screen and (max-width: 425px) {
      height: 306px;
      border-radius: 8px;
  }
`


export const BlockFive = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 6%;
  padding-left: 10%;
  padding-right: 11%;
  padding-top: 5%;
`
export const Curses = styled.div`
  display: flex;
  justify-items: center;
  background-color: white;
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  margin-top: 5%;
  margin-bottom: 5%;
  @media only screen and (max-width: 425px) {
    padding-left: 5rem;
    padding-right: 5rem;
    height: 800px;
  }
  @media only screen and (max-width: 375px) {
    padding-left: 3rem;
    padding-right: 2.5rem;
  }
  @media only screen and (max-width: 320px) {
    height: 760px;
  }
`
export const  TitleClass = styled.div`
    width: 100%;
    margin-top: 5%;
   & h1{
      font-family: 'Baloo 2';
      font-size: 5rem;
      font-weight: 700;
      color: white;
      text-align: left;
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
            font-size: 1.7rem;
        }
    }
    @media only screen and (max-width: 320px) {
          h1{
                font-size: 1.4rem;
            }
      }
`


export const Block = styled.div`
    width: 100%;
`

export const SubTitleOne = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & h1{
      font-family: 'Be Vietnam Pro';
      font-size: 3rem;
      font-weight: 400;
      color: white;
      text-align: center;
      margin-bottom: 35px;
    }
   @media only screen and (max-width: 1196px) {
      h1{
          font-size: 2.4rem;
      }
    }
    @media only screen and (max-width: 947px) {
        h1{
            font-size: 2.2rem;
        }
   }
   @media only screen and (max-width: 907px) {
        h1{
            font-size: 1.4rem;
        }
    }
    @media only screen and (max-width: 425px) {
      h1{
            font-size: 1.2rem;
        }
    }
`


export const Title = styled.div`
max-width: 1200px;
& h1{
    font-family: 'Baloo 2';
    font-size: 6.0rem;
    font-weight: 700;
    color: white;
    text-align: center;
  }
  & h2{
    font-family: 'Baloo 2';
    font-size: 6.0rem;
    font-weight: 700;
    color: var(--text_detail);
    text-align: center;
  }
  @media only screen and (max-width: 1207px) {
    width: 100%;
    h1{
        font-size: 3.6rem;
    }
  }
  @media only screen and (max-width: 1196px) {
    max-width: 90%;
    h1{
        font-size: 4rem;
    }
  }
  @media only screen and (max-width: 947px) {
      max-width: 95%;
      h1{
          font-size: 4rem;
      }
 }
 @media only screen and (max-width: 907px) {
     width: 100%;
     h1{
          font-size: 3rem;
      }
  }
  @media only screen and (max-width: 425px) {
    h1{
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 700;
    color: white;
    text-align: left;
  }
  }
`
