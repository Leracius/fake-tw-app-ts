import { FC } from 'react';
import { Layout } from './components/Layout/Layout';
import { Container } from '@mui/material';

export const App: FC = () => {
  return (
    <Container>
      <Layout/>
    </Container>
  )
}

export default App