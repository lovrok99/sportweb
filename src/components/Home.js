import { Link } from "react-router-dom";
import "./../style/home.css";
const vijesti = [
  {
    id: "1",
    naslov: "Doue novi princ Parisa",
    tekst: "Najnovija i najvažnija informacija dana...",
    slika: "/images/douee.webp",
  },
  {
    id: "2",
    naslov:
      "Dinamo gubi velikog talenta tek što je stigao? Gigant se sprema platiti otkupnu klauzulu",
    tekst: "Mladi Portugalac potpisao ugovor.",
    slika: "/homeimg/dinamogubi.jpg",
  },
  {
    id: "3",
    naslov: "New York Knicksi otpustili trenera",
    tekst: "TOM THIBODEAU (67) više nije trener New York Knicksa",
    slika: "/homeimg/knicksi.jpg",
  },
  {
    id: "4",
    naslov:
      "Zubac: Žao mi je što u najboljim godinama propuštam velika natjecanja",
    tekst: "Atmosfera kakvu rijetko viđamo!",
    slika: "/homeimg/zubac.jpg",
  },
  {
    id: "5",
    naslov:
      "Boksački stručnjaci imenovali najboljih 10 teškaša svijeta. Evo gdje je Hrgović",
    tekst: "Prvi trening odrađen uspješno.",
    slika: "/homeimg/hrgovic.jpg",
  },
  {
    id: "6",
    naslov:
      "Show u finalu SHMNL-a. Makarani napustili teren pa se vratili i izgubili od Osijeka",
    tekst: "Luda zavrsnica.",
    slika: "/homeimg/futsal.jpg",
  },
  {
    id: "7",
    naslov:
      "Najbolja skijašica svijeta ne zna hoće li nastupiti na Olimpijskim igrama",
    tekst: "Možda zadnja sezona za nju.",
    slika: "/homeimg/skija.jpg",
  },
  {
    id: "8",
    naslov:
      "Dembele ukrao šou na Roland Garrosu: Jednim potezom digao 10 tisuća ljudi na noge",
    tekst: "Atmosfera kakvu rijetko viđamo!",
    slika: "/homeimg/tenis.jpg",
  },
];

function Home() {
  const [najvaznija, ...ostale] = vijesti;

  return (
    <div className="pocetna-container">
      <Link to={`/vijesti/${najvaznija.id}`} className="najvaznija-vijest">
        <img src={najvaznija.slika} alt={najvaznija.naslov} />
        <div className="overlay">
          <h1 className="najvhead">{najvaznija.naslov}</h1>
          <p>{najvaznija.tekst}</p>
        </div>
      </Link>

      <div className="grid-vijesti">
        {ostale.map((v) => (
          <Link key={v.id} to={`/vijesti/${v.id}`} className="vijest-grid-item">
            <img src={v.slika} alt={v.naslov} />
            <h3>{v.naslov}</h3>
            <p>{v.tekst.slice(0, 60)}...</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
