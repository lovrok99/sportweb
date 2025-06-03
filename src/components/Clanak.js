import { useParams } from "react-router-dom";
import "./../style/clanak.css";
const sadrzaj = {
  1: {
    naslov: "Doue najpoznatiji teenager",
    tekst:
      "NOGOMETAŠI PSG-a večeras su u Münchenu ostvarili povijesnu pobjedu nad Interom rezultatom 5:0 i tako osvojili prvi naslov prvaka Europe u povijesti kluba. Parižani su već do 20. minute imali dva gola prednosti zahvaljujući Achrafu Hakimiju i Desireu Doueu, da bi u drugom dijelu svoj drugi pogodak zabio Doue, a pridružili su mu se Khvicha Kvaratskhelia i Senny Mayulu.",
    tekst2:
      "Ovo je najuvjerljivija pobjeda u povijesti finala Lige prvaka, a PSG-u je donijela prvi trofej Lige prvaka u povijesti, nakon što su 2020. izgubili finale od Bayerna. Za Inter je ovo treći poraz u finalima, a prethodno su gubili od Manchester Cityja 2023. i Ajaxa 1972. godine.",
    tekst3:
      "Ova pobjeda ima dodatnu težinu jer je PSG tek drugi francuski klub koji je osvojio najprestižniji europski trofej, nakon Marseillea 1993. godine. Trener Luis Enrique i njegova mlada momčad ispisali su povijest.",
    slika: "/images/douee.webp",
  },
  2: {
    naslov: "Dinamo doveo novog napadača",
    tekst:
      "Mladi Portugalac potpisao je četverogodišnji ugovor s Dinamom. Očekuje se da debituje već u sljedećoj utakmici.",
    tekst2:
      "Plavi su u ugovor s njim ugradili klauzulu prema kojoj klub koji uplati pet milijuna eura može s njim sjesti na pregovore, a talijanski insajderi sad tvrde kako je Barcelona spremna isplatiti toliko.",
    tekst3:
      "Taj posao iznenadio je mnoge, a Modri su pretekli Barcu i City dovevši perspektivnog mladog Portugalca. Modri su dobili zeleno svjetlo FIFA-e i potpisali 16-godišnjaka, kojem se predviđa zvjezdana karijera.",
    slika: "/homeimg/dinamogubi.jpg",
  },
  3: {
    naslov: "New York Knicksi otpustili trenera",
    tekst:
      "Thibodeau je preuzeo Knickse 2020. godine, u trenutku kada franšiza nije izborila doigravanje čak sedam sezona zaredom. Već u prvoj sezoni (2020./21.) odveo ih je do omjera 41-31 i povratka u playoff, za što je nagrađen titulom NBA trenera godine. U pet sezona na klupi Knicksa ostvario je ukupno 250 pobjeda u regularnoj sezoni i doigravanju uz 197 poraza.",
    tekst2:
      "Pod njegovim vodstvom Knicksi su u nekoliko navrata nadmašili očekivanja, uključujući i povijesne preokrete protiv Bostona u ovogodišnjem doigravanju. No, unatoč velikim ulaganjima u zvijezde poput Mikal Bridgesa i Karla-Anthonyja Townsa, Knicksi nisu uspjeli kapitalizirati najbolju priliku za naslov u posljednjih četvrt stoljeća.",
    tekst3:
      "Prije dolaska u New York, Thibodeau je bio glavni trener Minnesota Timberwolvesa (2016.-2019.), gdje je prekinuo 13-godišnji post bez doigravanja i postavio brojne klupske rekorde. Najveći trag ostavio je u Chicago Bullsima (2010.-2015.), gdje je u pet sezona ostvario 255 pobjeda i 139 poraza, te 2011. godine primio nagradu za trenera godine. Pod njegovim vodstvom Bullsi su 2011. stigli do finala Istočne konferencije.",
    slika: "/homeimg/knicksi.jpg",
  },
  4: {
    naslov:
      "Zubac: Žao mi je što u najboljim godinama propuštam velika natjecanja",
    tekst:
      "HRVATSKI košarkaški reprezentativac Ivica Zubac vratio se u Hrvatsku nakon kraja NBA sezone. Njegovi LA Clippersi zaustavljeni su u prvoj rundi doigravanja Zapadne konferencije od Denver Nuggetsa, koji su slavili s 4:3 nakon pobjede u majstorici. Iza Zupca je najbolja NBA sezona u karijeri u kojoj je uvršten u drugu najbolju obrambenu petorku, dok je zauzeo drugo mjesto u izboru za igrača koji je najviše napredovao.",
    tekst2:
      "Nije krio razočaranje nakon ispadanja u doigravanju. Razočarani smo, ispustili smo prvu utakmicu, kao i četvrtu, da smo jednu utakmicu od tih dvije dobili, mislim da smo mogli proći. Puno smo bolji od ekipe koja inače ispada u prvoj rundi, rekao je pa se osvrnuo na zahtjevnost čuvanja Nikole Jokića u toj seriji:",
    tekst3:
      "Dosta je drukčije od drugih igrača koji su centri. On napada licem i leđima, ne postavlja blokove, već za njega postavljaju, kroz blokove prolaziš i pindownove, on igra u pick and rollu i pick and popu i moraš se jako dobro pripremiti za njega",
    slika: "/homeimg/zubac.jpg",
  },
  5: {
    naslov:
      "Boksački stručnjaci imenovali najboljih 10 teškaša svijeta. Evo gdje je Hrgović",
    tekst:
      "VODITELJI talkSPORT-a, Adam Catterall i Gareth A. Davies, odradili su emisiju kako bi uoči subotnje borbe Fabija Wardleyja i Justisa Hunija raspravili tko su trenutačno najbolji teškaši svijeta, a jedan od njih spomenuo je i filipa Hrgovića. Meč će se održati na stadionu Portman Road u Ipswichu, a diskusija je poslužila kao uvod u raspravu o stanju elitne teškaške scene.",
    tekst2:
      "No već na drugom mjestu dolazi do razilaženja. Catterall je to mjesto ostavio praznim jer Furyja smatra umirovljenim, a ne vidi nijednog borca koji trenutno zaslužuje to mjesto. Davies je, s druge strane, kao broj dva stavio Daniela Duboisa, što obojica objašnjavaju njegovim impresivnim nastupom protiv Usika",
    tekst3:
      "Zanimljivo, među deset najboljih Catterall nije uvrstio Filipa Hrgovića, dok ga Davies drži na šestom mjestu, ispred boksača poput Zhileija Zhanga i Fabija Wardleyja. Mladi britanski teškaš Moses Itauma, koji je tek ušao u seniorske vode, također se našao na obje ljestvice, a sam je nedavno izjavio da bi rado u ringu odmjerio snage upravo s Hrgovićem.",
    slika: "/homeimg/hrgovic.jpg",
  },
  6: {
    naslov:
      "Show u finalu SHMNL-a. Makarani napustili teren pa se vratili i izgubili od Osijeka",
    tekst:
      "ČETVRTA utakmica finala SuperSport HMNL-a između Osijek Kandita i Novog Vremena završila je pobjedom Osječana rezultatom 3:2. Napeti dvoboj završio je tek nakon produžetaka, a gol pobjede zabio je Marin Sesar. Osijek je tako izjednačio na 2:2 u seriji, a novi prvak Hrvatske u futsalu bit će poznat u majstorici koja će se odigrati u subotu u Makarskoj",
    tekst2:
      "Osječani su poveli u četvrtoj minuti golom kapetana Andreja Pandurevića, no pet minuta kasnije Savio je izjednačio rezultat na 1:1. Bio je to i konačni rezultat prvog dijela. Vitor Lima je u 29. minuti, otprilike dvije minute nakon što mu je poništen gol zbog prerano izvedenog auta, poentirao za prednost Makarani. Ona je trajala svega par sekundi jer je Gordan Duvančić nakon kontranapada izjednačio na 2:2",
    tekst3:
      "Do kraja utakmice rezultat se nije mijenjao i Osijek je slavio s 3:2. Osječani će u subotu loviti prvi povijesni naslov prvaka Hrvatske, a Novo Vrijeme svoj četvrti.",
    slika: "/homeimg/futsal.jpg",
  },
  7: {
    naslov:
      "Najbolja skijašica svijeta ne zna hoće li nastupiti na Olimpijskim igrama",
    tekst:
      "TALIJANSKA skijašica Federica Brignone, osvajačica Velikog kristalnog globusa, u utorak je izjavila da još uvijek ne zna hoće li moći nastupiti na Zimskim olimpijskim igrama u Italiji koje će se održati od 6. do 22. veljače 2026",
    tekst2:
      "Talijanka, koja je dominirala ove zime s deset pobjeda i malim Kristalnim globusom u veleslalomu, također ne zna kada će moći nastaviti s treninzima na snijegu.",
    tekst3:
      "Nemamo nikakve usporedbe: malo je ljudi pretrpjelo takvu ozljedu, pa je teško utvrditi vremenski okvir. Sve dok ne mogu staviti nogu na tlo, teško je reći. Skije ću ponovno staviti tek kada mi bude ugodno, a ne da budem na jednoj nozi",
    slika: "/homeimg/skija.jpg",
  },
  8: {
    naslov:
      "Dembele ukrao šou na Roland Garrosu: Jednim potezom digao 10 tisuća ljudi na noge",
    tekst:
      "Napadač Paris Saint Germaina Ousmane Dembele dobio je gromoglasan doček, koji je obično rezerviran za teniske prvake, kad je na pariški središnji teren donio svježe osvojeni trofej nogometne Lige prvaka.",
    tekst2:
      "Francuski nogometni klub pobijedio je Inter 5-0 u utakmici u Münchenu u subotu i prvi put osvojio trofej prije nego što su igrači i osoblje u nedjelju u francuskoj prijestolnici dočekani kao heroji.",
    tekst3:
      "Organizatori nisu mogli bolje tempirati kratku ceremoniju, a trofej najprestižnijeg europskog nogometnog kluba stigao je nekoliko minuta nakon što je 361. igračica svijeta i wild card Francuskinja Lois Boisson iznenadila trećeplasiranu Amerikanku Jessicu Pegula u tri seta i plasirala se u četvrtfinale turnira.",
    slika: "/homeimg/tenis.jpg",
  },
  9: {
    naslov: "Izasli detalji prepirke Perisica i Gatussa",
    tekst:
      "Briljatna dva duela protiv Juventusa u Ligi prvaka glavni su razlog zašto su njemački mediji u petak posvetili dosta pažnje Ivanu Perišiću uz naglasak na njegov neuspjeh u Hajduku",
    tekst2:
      "Perišić je značajan dio svoje karijere proveo u Njemačkoj. S Borussiom Dortmund je osvojio duplu krunu, bio je član Wolfsburga, dok je s Bayernom stigao do Lige prvaka.",
    tekst3:
      "Posebno je zanimljiv odlomak u kojem se govori o Perišićemo neuspješnom povratku u Hajduk te svađi s trenerom Gennarom Gattusom, a na kraju i odlaskom.",
    slika: "/images/ivan-perisic.jpg",
  },
  10: {
    naslov: "Neredi u Parizu",
    tekst:
      "Došlo je i do sukoba s policijom na pariškoj obilaznici, a najmanje dva automobila su zapaljena u blizini PSG-ovog stadiona Parka prinčeva.",
    tekst2:
      "Ludo slavlje izbilo je diljem francuske prijestolnice u subotu navečer nakon što je PSG uništio Inter u finalu Lige prvaka, ali su kasniji sukobi s policijom donekle pokvarili zabavu.  Na aveniji Champs Elysees razbijeno je nekoliko autobusnih stanica, a pripadnici interventne policije zasuti su raznim projektilima. Policija je na koncu suzavcem i vodenim topovima morala smiriti masu navijača. ",
    tekst3:
      "Unutar stadiona, koji je za ovu priliku pretvoren u golemu navijačku zonu, 48.000 ljudi ispustilo je ekstatičan urlik nakon zadnjeg sučeva zvižduka na finalu u Muenchenu. ",
    slika: "/images/neredi-u-parizu.jpg",
  },
  11: {
    naslov: "Mbappe ima za cime zaliti nakon odlaska iz PSG",
    tekst:
      "U središtu pozornosti ove sezone je Luis Enrique koji je vrlo brzo složio momčad za najviše domete čim su otišle razmažene zvijezde (Mbappe, Messi, Neymar...) koje španjolski stručnjak ne podnosi.",
    tekst2:
      "Sjećam se da sam na svom predstavljanju rekao da je najvažniji trofej koji nedostaje Paris Saint-Germainu Liga prvaka. To znači da postoji dodatni pritisak, jer postoji toliko mnogo očekivanja oko momčadi. Imamo želju i samopouzdanje i ako smo ovdje stigli igrajući na određeni način, trebali bismo nastaviti tako igrati, kazao je Enrique.",
    tekst3:
      "- Već sam mnogo puta rekao da sam sretan u ovom klubu, imam sve što želim da ovdje dobro radim. U subotu je finale Lige prvaka. Nakon toga ćemo se sastati i mirno razgovarati o tome što je najbolje za Inter, kaže Inzaghi.",
    slika: "/images/63091411-kylian-mbappe-i-luis-enrique.jpg",
  },
  12: {
    naslov: "Vatreni se spremaju za SP u Americi",
    tekst:
      "Iako je dio medijskog prostora zaokupljen potragom za njegovim nasljednikom (kao potencijalni kandidati ističu se Matjaž Kek, Ivan Jurić, Slaven Bilić, Nenad Bjelica, Igor Tudor...), čelništvo HNS-a uopće ne razmišlja o novom čovjeku. Konačno, Zlatko Dalić ugovorno je vezan uz HNS do kraja lipnja 2026. (uključujući i eventualni nastup hrvatske reprezentacije na Svjetskom prvenstvu).",
    tekst2:
      "Opcija raskida ugovora niti njemu trenutačno nije u fokusu. Štoviše, izbornik je mislima već usredotočen na krajnji cilj svog mandata - plasman Hrvatske na Svjetsko prvenstvo.",
    tekst3:
      "Dalić već ima strateški plan glede plasmana na SP. Kao svojevrsna priprema za kvalifikacijski ciklus poslužit će mu ovogodišnja Liga nacija.",
    slika: "/images/repka.jpg",
  },
};

function Clanak() {
  const { id } = useParams();
  const podatak = sadrzaj[id];

  if (!podatak) return <p className="greska-vijest">Vijest nije pronađena.</p>;

  return (
    <div className="clanak-container">
      <h2 className="clanak-naslov">{podatak.naslov}</h2>
      <img src={podatak.slika} alt={podatak.naslov} className="clanak-slika" />
      <p className="clanak-tekst">{podatak.tekst}</p>
      <br />
      <br />
      <p className="clanak-tekst">{podatak.tekst2}</p>
      <br />
      <br />
      <p className="clanak-tekst">{podatak.tekst3}</p>
    </div>
  );
}

export default Clanak;
