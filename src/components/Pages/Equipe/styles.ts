import styled, {css} from "styled-components"

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


export const Equipes = styled.div`
  background-color: #99CBFF;
  width: 100%;
  height: 590px;
  border-radius: 43px;
  justify-content: center;
  @media only screen and (max-width: 1196px) {
    height: 460px;
  }
  @media only screen and (max-width: 907px) {
    height: 300px;
  }
  @media only screen and (max-width: 425px) {
    height: 180px;
    border-radius: 14px;
  }
  @media only screen and (max-width: 320px) {
    height: 140px;
  }
`

export const ImagePerson = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  max-height: 350px;
  max-width: 350px;
  border-radius: 100%;
  margin-left: 90px;
  margin-right: 60px;
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
      margin-left: 5%;
      margin-right: 5%;
  }
  @media only screen and (max-width: 425px) {
    max-height: 90px;
      max-width: 90px;
  }
`
export const SubTitleTwo = styled.div`
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

export const Lista = styled.div`
  width: 100%;
  margin-right: 20px;
  & li{ 
      font-family: 'Be Vietnam Pro';
      font-size: 3.6rem;
      font-weight: 400;
      color: white;
  }
  @media only screen and (max-width: 1196px) {
      li{
          font-size: 2.6rem;
      }
  }
  @media only screen and (max-width: 947px) {
      li{
          font-size: 2.2rem;
      }
  }
  @media only screen and (max-width: 1196px) {
    li{
          font-size: 1.8rem;
      }
  }
  @media only screen and (max-width: 425px) {
      li{
        font-size: 1.2rem;
        }
  }
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
