
import { Grid, GridItem, Show } from '@chakra-ui/react';
import logo from '../src/assets/logo.webp'
import './App.css'
import NavBar from './components/NavBar';
import GridView from './components/GridView';

function App() {
  return( 
    <Grid templateAreas={{
      base:`"nav" "main"`,
      lg: `"nav nav","aside main"`
     }}>
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above='lg'>
      <GridItem area="aside">
       Aside
      </GridItem>
      </Show>
      <GridItem area="main">
       <GridView/>
      </GridItem>
    </Grid>
  );
}

export default App
