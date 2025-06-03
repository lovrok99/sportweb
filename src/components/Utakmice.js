import "./../style/utakmice.css";

const utakmice = [
  {
    liga: "Premier League",
    domacin: "Manchester City",
    gost: "Arsenal",
    vrijeme: "13:30",
  },
  {
    liga: "La Liga",
    domacin: "Real Madrid",
    gost: "Barcelona",
    vrijeme: "16:15",
  },
  { liga: "Serie A", domacin: "Juventus", gost: "Napoli", vrijeme: "18:00" },
  {
    liga: "Bundesliga",
    domacin: "Bayern München",
    gost: "Borussia Dortmund",
    vrijeme: "15:30",
  },
  { liga: "Ligue 1", domacin: "PSG", gost: "Marseille", vrijeme: "21:00" },
  {
    liga: "Premier League",
    domacin: "Liverpool",
    gost: "Chelsea",
    vrijeme: "18:30",
  },
  { liga: "Serie A", domacin: "AC Milan", gost: "Roma", vrijeme: "20:45" },
  { liga: "Serie A", domacin: "AC Milan", gost: "Roma", vrijeme: "20:45" },
  { liga: "Serie A", domacin: "AC Milan", gost: "Roma", vrijeme: "20:45" },
];

function Utakmice() {
  return (
    <div className="utakmice-container">
      <h2 className="utakmice-naslov">DANASNJE UTAKMICE</h2>
      <div className="utakmice-lista">
        {utakmice.map((u, index) => (
          <div className="utakmica-kartica" key={index}>
            <h3>{u.liga}</h3>
            <p>
              <strong>{u.domacin}</strong> vs <strong>{u.gost}</strong>
            </p>
            <p>Vrijeme: {u.vrijeme}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Utakmice;
