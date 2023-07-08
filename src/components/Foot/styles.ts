import styled, {css} from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 71px;
  background-color: var(--background_blue);
  @media only screen and (max-width: 425px) {
    height: 30px;
  }

`
export const SubTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & h1{
      font-family: 'Be Vietnam Pro';
      font-size: 15px;
      font-weight: 400;
      color: white;
      text-align: center;
      @media only screen and (max-width: 425px) {
        font-size: 12px;
      }
    }  
`