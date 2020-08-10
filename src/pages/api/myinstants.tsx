import microCors from 'micro-cors';
import { NextApiRequest, NextApiResponse } from 'next';
import Axios from 'axios';

const cors = microCors();

const CACHE_CONTROL_HEADER_VALUE =
  'max-age=0, s-maxage=43200, stale-while-revalidate, public';

const handlerHeroes = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Cache-Control', CACHE_CONTROL_HEADER_VALUE);

  const response = await Axios.get(
    'https://www.myinstants.com/media/sounds/faustao-errou.mp3',
    {
      responseType: 'stream',
    }
  );

  const { data } = response;

  res.setHeader('Content-Type', 'audio/mpeg');
  data.pipe(res);
};

export default cors(handlerHeroes);
