import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    div {
        background: rgb(23, 18, 101);
        background: linear-gradient(
        90deg,
        rgba(23, 18, 101, 1) 28%,
        rgba(220, 220, 226, 1) 100%,
        rgba(0, 212, 255, 1) 100%
        );
    }

    a {
        color: #fff;
    }
`
