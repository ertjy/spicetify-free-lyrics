
import { getLyrics, getSong, searchSong } from 'genius-lyrics-api'

async function main() {

  const options = {
    apiKey: 'uY602sSAANTG2FZHaofCivl2sRqt0t4zsDwo1jcvhG3HSdcPZO1tr1cLkv7t2RCn',
    title: 'Sarah',
    artist: 'alex g',
    optimizeQuery: true,
    authHeader: true
  };

  getLyrics(options).then((lyrics) => {
    console.log(lyrics);

  });
  console.log("vvv");
  Spicetify.PopupModal.display({
    title: 'Hello World',
    content: 'This is a simple text',
});
}

export default main;
