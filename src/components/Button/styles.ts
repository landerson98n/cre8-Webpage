import styled from "styled-components"

export const Container = styled.div`
    background-color: var(--button_color) ;
    display: flex;
    width: 386px;
    height: 96px;
    align-items: center;
    justify-content: center;
    border-radius: 11px;
 `; 

export const Text = styled.div`
    & h1{
      width: 238px;
      font-family: 'Be Vietnam Pro';
      font-size: 23px;
      font-weight: 400;
      color: white;
      text-align: left;
    }
`; 
