
import { Grid, GridItem, Image, Show, Text } from '@chakra-ui/react';
import logo from '../src/assets/logo.webp'
import './App.css'

function App() {
  return( 
    <Grid templateAreas={{
      base:`"nav" "main"`,
      lg: `"nav nav","aside main"`
     }}>
      <GridItem area="nav">
        <Image src={logo} boxSize='60px' />
        <Text>Nav</Text>
      </GridItem>
      <Show above='lg'>
      <GridItem area="aside" bg="gold">
       Aside
      </GridItem>
      </Show>
      <GridItem area="main" bg="skyblue">
       Main
      </GridItem>
    </Grid>
  );
}

export default App
