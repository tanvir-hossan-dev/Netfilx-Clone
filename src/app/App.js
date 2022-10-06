import Video from "../components/Row/Video";
import { Requests } from "../Requests";

function App() {
  return (
    <>
      <Video title="Netfilx Originals" fetchUrl={Requests.fetchNetflixOriginals} />
      <Video title="Top Trending" fetchUrl={Requests.fetchTrending} />
    </>
  );
}

export default App;
