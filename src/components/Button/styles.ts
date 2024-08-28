import styled from "styled-components"

export const Container = styled.button`
    background-color: var(--button_color) ;
    display: flex;
    width: 386px;
    height: 5vw;
    align-items: center;
    justify-content: center;
    border-radius: 11px;
    cursor: pointer;
    @media only screen and (max-width: 1024px) {
      width: 286px;
    }
    @media only screen and (max-width: 425px) {
      width: 100%;
      height: 39px;
      border-radius: 8px;
    }

 `; 

export const Text = styled.div`
    width: 100%;
    & h1{
      font-family: 'Be Vietnam Pro';
      font-size: 23px;
      font-weight: 400;
      color: white;
      text-align: center;
      @media only screen and (max-width: 1024px) {
        font-size: 16px;
      }
      @media only screen and (max-width: 425px) {
        font-size: 15px;
      }
    }
`; 
