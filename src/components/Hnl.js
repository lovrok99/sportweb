import "./../style/hnl.css";

import { useState } from "react";

const klubovi = [
  {
    klub: "Rijeka",
    utakmice: 36,
    pobjede: 18,
    nerijeseni: 11,
    porazi: 7,
    golRazlika: 28,
    bodovi: 65,
  },
  {
    klub: "Dinamo",
    utakmice: 36,
    pobjede: 19,
    nerijeseni: 8,
    porazi: 9,
    golRazlika: 28,
    bodovi: 65,
  },
  {
    klub: "Hajduk",
    utakmice: 36,
    pobjede: 17,
    nerijeseni: 12,
    porazi: 7,
    golRazlika: 15,
    bodovi: 63,
  },
  {
    klub: "Varazdin",
    utakmice: 36,
    pobjede: 11,
    nerijeseni: 16,
    porazi: 9,
    golRazlika: 4,
    bodovi: 49,
  },
  {
    klub: "Slaven Belupo",
    utakmice: 36,
    pobjede: 13,
    nerijeseni: 9,
    porazi: 14,
    golRazlika: -3,
    bodovi: 48,
  },
  {
    klub: "Istra",
    utakmice: 36,
    pobjede: 11,
    nerijeseni: 15,
    porazi: 10,
    golRazlika: -3,
    bodovi: 48,
  },
  {
    klub: "Osijek",
    utakmice: 36,
    pobjede: 11,
    nerijeseni: 9,
    porazi: 16,
    golRazlika: -6,
    bodovi: 42,
  },
  {
    klub: "Lokomotiva",
    utakmice: 36,
    pobjede: 10,
    nerijeseni: 9,
    porazi: 17,
    golRazlika: -9,
    bodovi: 39,
  },
  {
    klub: "Gorica",
    utakmice: 36,
    pobjede: 9,
    nerijeseni: 10,
    porazi: 17,
    golRazlika: -22,
    bodovi: 37,
  },
  {
    klub: "Sibenik",
    utakmice: 36,
    pobjede: 7,
    nerijeseni: 9,
    porazi: 20,
    golRazlika: -32,
    bodovi: 30,
  },
];

const igraci = [
  { ime: "Marko Livaja", golovi: 19, asistencije: 5, crveni: 1 },
  { ime: "MSandro Kulenovic", golovi: 15, asistencije: 7, crveni: 0 },
  { ime: "Robert Mudrazija", golovi: 14, asistencije: 9, crveni: 2 },
  { ime: "Toni Fruk", golovi: 10, asistencije: 6, crveni: 1 },
  { ime: "Duje Cop", golovi: 9, asistencije: 4, crveni: 3 },
  { ime: "Arnel Jakupovic", golovi: 9, asistencije: 10, crveni: 0 },
  { ime: "Dimitar Mitrovski", golovi: 8, asistencije: 3, crveni: 1 },
  { ime: "Niko Jankovic", golovi: 8, asistencije: 5, crveni: 0 },
  { ime: "Ilija Nestorovski", golovi: 5, asistencije: 8, crveni: 2 },
  { ime: "Ivan Santini", golovi: 4, asistencije: 2, crveni: 1 },
];

function Hnl() {
  const [filter, setFilter] = useState("tablica");

  const sortiraniIgraci = [...igraci.sort((a, b) => b[filter] - a[filter])];

  return (
    <div className="statistika-container">
      <h2 className="statistika-naslov">1. HNL</h2>
      <div className="filter-gumbi">
        <button onClick={() => setFilter("tablica")}>Tablica</button>
        <button onClick={() => setFilter("golovi")}>Golovi</button>
        <button onClick={() => setFilter("asistencije")}>Asistencije</button>
        <button onClick={() => setFilter("crveni")}>Crveni kartoni</button>
      </div>

      {filter === "tablica" && (
        <table className="statistika-tablica">
          <thead className="tablica-red">
            <tr className="tablica-red">
              <th className="tablica-red">#</th>
              <th>Klub</th>
              <th>Utakmice</th>
              <th>Pob</th>
              <th>Ner</th>
              <th>Por</th>
              <th>Gol razlika</th>
              <th>Bodovi</th>
            </tr>
          </thead>
          <tbody>
            {klubovi.map((tim, index) => (
              <tr key={tim.klub}>
                <td>{index + 1}.</td>
                <td>{tim.klub}</td>
                <td>{tim.utakmice}</td>
                <td>{tim.pobjede}</td>
                <td>{tim.nerijeseni}</td>
                <td>{tim.porazi}</td>
                <td>{tim.golRazlika}</td>
                <td>{tim.bodovi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {filter !== "tablica" && (
        <table className="statistika-tablica">
          <thead>
            <tr>
              <th>#</th>
              <th>Igrač</th>
              <th>Golovi</th>
              <th>Asistencije</th>
              <th>Crveni kartoni</th>
            </tr>
          </thead>
          <tbody>
            {sortiraniIgraci.map((igrac, index) => (
              <tr key={igrac.ime}>
                <td>{index + 1}</td>
                <td>{igrac.ime}</td>
                <td>{igrac.golovi}</td>
                <td>{igrac.asistencije}</td>
                <td>{igrac.crveni}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Hnl;
