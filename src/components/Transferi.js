import "./../style/transferi.css";

const rumours = [
  {
    igrac: "Joško Gvardiol",
    iz: "Manchester City",
    u: "Real Madrid",
    cijena: 90,
    slika: "/images/joskos.webp",
  },
  {
    igrac: "Victor Osimhen",
    iz: "Napoli",
    u: "Chelsea",
    cijena: 100,
    slika: "/images/osimhenn.png",
  },
  {
    igrac: "Frenkie de Jong",
    iz: "Barcelona",
    u: "Man United",
    cijena: 80,
    slika: "/images/dejong.png",
  },
  {
    igrac: "Florian Wirtz",
    iz: "Bayer Leverkusen",
    u: "Manchester City",
    cijena: 120,
    slika: "/images/wirtz.webp",
  },
  {
    igrac: "Viktor Gyokeres",
    iz: "Sporting",
    u: "Arsenal",
    cijena: 65,
    slika: "/images/gyokeres.png",
  },
];

const transferi = [
  {
    igrac: "Alexander Arnold",
    iz: "Liverpool",
    u: "Real Madrid",
    cijena: 10,
    slika: "/images/arnold-removebg-preview.png",
  },
  {
    igrac: "Matheus Cunha",
    iz: "Wolves",
    u: "Man United",
    cijena: 65,
    slika: "/images/cunha-removebg-preview.png",
  },
  {
    igrac: "Jeremie Frimpong",
    iz: "Bayer Leverkusen",
    u: "Liverpool",
    cijena: 40,
    slika: "/images/frimpong-removebg-preview.png",
  },
  {
    igrac: "Jonathan Tah",
    iz: "Bayer Leverkusen",
    u: "Bayern Munich",
    cijena: 0,
    slika: "/images/tahjonat-removebg-preview.png",
  },
  {
    igrac: "Estevao",
    iz: "Palmeiras",
    u: "Chelsea",
    cijena: 35,
    slika: "/images/estevao-removebg-preview.png",
  },
];
const sortiraniRumours = [...rumours].sort((a, b) => b.cijena - a.cijena);

const sortiraniTransferi = [...transferi].sort((a, b) => b.cijena - a.cijena);

function Transferi() {
  return (
    <div className="transferi-container">
      <h2 className="transferi-naslov">TRANSFERI</h2>
      <div className="transferi-sadrzaj">
        <div className="rumours">
          <h3 className="transferi-head">Transfer Glasine</h3>
          {sortiraniRumours.map((r, i) => (
            <div key={i} className="transfer-kartica kartica-lijeva">
              <img src={r.slika} alt={r.igrac} className="slika-transfera" />
              <div>
                <p>
                  <strong>{r.igrac}</strong>
                </p>
                <p>
                  {r.iz} → {r.u}
                </p>
                <p>Cijena: {r.cijena}M €</p>
              </div>
            </div>
          ))}
        </div>
        <div className="gotovi-transferi">
          <h3 className="transferi-head">Završeni Transferi</h3>
          {sortiraniTransferi.map((t, i) => (
            <div key={i} className="transfer-kartica kartica-desna">
              <div>
                <p>
                  <strong>{t.igrac}</strong>
                </p>
                <p>
                  {t.iz} → {t.u}
                </p>
                <p>Cijena: {t.cijena}M €</p>
              </div>
              <img src={t.slika} alt={t.igrac} className="slika-transfera" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Transferi;
