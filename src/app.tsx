// @ts-ignore
import { getLyrics, getSong } from 'genius-lyrics-api'

async function main() {

  const options = {
    apiKey: 'uY602sSAANTG2FZHaofCivl2sRqt0t4zsDwo1jcvhG3HSdcPZO1tr1cLkv7t2RCn',
    title: 'Sarah',
    artist: 'Aelx G',
    optimizeQuery: true
  };

  getLyrics(options).then((lyrics: any) => {
    console.log(lyrics);

  });
  console.log("Hello !!");
}

export default main;
