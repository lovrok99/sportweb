import { Link } from "react-router-dom";
import "./../style/vijesti.css";

const vijesti = [
  {
    id: "1",
    naslov: "Doue ispisao povijest Lige Prvaka",
    tekst: "U spektakularnoj utakmici Paris je svladao Intera rezultatom 5:0.",
    slika: "/images/douee.webp",
  },
  {
    id: "9",
    naslov: "Izasli detalji prepirke Perisica i Gatussa",
    tekst: "Tenzije su se mogle predvidjeti.",
    slika: "/images/ivan-perisic.jpg",
  },
  {
    id: "10",
    naslov: "Neredi u Parizu",
    tekst: "Puno ozljedenih",
    slika: "/images/neredi-u-parizu.jpg",
  },
  {
    id: "11",
    naslov: "Mbappe ima za cime zaliti nakon odlaska iz PSG",
    tekst: "Karma nakon nepune godine",
    slika: "/images/63091411-kylian-mbappe-i-luis-enrique.jpg",
  },
  {
    id: "12",
    naslov: "Vatreni se spremaju za SP u Americi",
    tekst: "Reprezentacija odradila prvi trening pred Europsko prvenstvo.",
    slika: "/images/repka.jpg",
  },
];

function Vijesti() {
  return (
    <div className="container-vijesti">
      <h2 className="najvijesti">Najnovije vijesti</h2>
      <div className="vijesti-sve">
        {vijesti.map((v) => (
          <Link key={v.id} to={`/vijesti/${v.id}`} className="vijest-container">
            <img src={v.slika} alt={v.naslov} className="slikaVijesti" />
            <h3 className="slikaVijestiNaslov">{v.naslov}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Vijesti;
