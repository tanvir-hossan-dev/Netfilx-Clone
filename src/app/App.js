import Banner from "../components/Banner/Banner";
import Navbar from "../components/navbar/Navbar";
import Video from "../components/Row/Video";
import { Requests } from "../Requests";

function App() {
  return (
    <div className="bg-[#111]">
      <Navbar />
      <Banner />
      <Video title="NETFLIX ORIGINALS" fetchUrl={Requests.fetchNetflixOriginals} isSmall />
      <Video title="Trending Now" fetchUrl={Requests.fetchTrending} />
      <Video title="Top Rated" fetchUrl={Requests.fetchTopRated} />
      <Video title="Action Movies" fetchUrl={Requests.fetchActionMovies} />
      <Video title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />
      <Video title="Horor Movies" fetchUrl={Requests.fetchHorrorMovies} />
      <Video title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} />
      <Video title="Documantaries" fetchUrl={Requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
