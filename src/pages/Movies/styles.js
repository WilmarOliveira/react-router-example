import styled from 'styled-components'

export const ContainerMovies = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
   height: 100vh;
`
export const List = styled.ul`
   list-style: none;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   width: 80%;
`

export const ListItem = styled.li`
   transition: filter 0.2s;

   &:hover {
      filter: brightness(0.9);
   }
`
