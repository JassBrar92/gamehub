import { Game } from '../hooks/useGames';
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import PlatformList from './PlatformList';
import CriticScore from './CriticScore';
import getCropppedImageURL from '../services/imageURL';
interface Props{
  game:Game
}
const GameCard = ({game}:Props) => {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      <Image src={getCropppedImageURL(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize='2xl'>
        {game.name}
        </Heading >
        <HStack justifyContent='space-between'>
        <PlatformList platforms={game.parent_platforms.map(p=>p.platform)}></PlatformList>
        <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  )
}

export default GameCard