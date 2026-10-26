/* ==========================================================================
   CHEMISTRY EXPLORER - Class 11 Chemistry
   Chapter 2: Structure of Atom
   Flashcard database: 15 sets x 15 cards = 225 hand-crafted cards
   Each set: 5 Easy (E) + 5 Medium (M) + 5 Hard (H)
   Read by buildDeck(ch, s) via window.FLASHCARD_SETS_DB[chId][setNum]
   ========================================================================== */
window.FLASHCARD_SETS_DB = window.FLASHCARD_SETS_DB || {};
window.FLASHCARD_SETS_DB.ch2 = {

  /* ---------- SET 1: Discovery of Subatomic Particles ---------- */
  1: [
    {
      d: 'E',
      q_en: 'Who discovered the electron, and using which rays?',
      q_hi: 'इलेक्ट्रॉन की खोज किसने की और किन किरणों द्वारा?',
      a_en: 'J.J. Thomson (1897), using cathode rays in a discharge tube.',
      a_hi: 'जे.जे. थॉमसन (1897), विसर्जन नली में कैथोड किरणों द्वारा।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What are cathode rays?',
      q_hi: 'कैथोड किरणें (cathode rays) क्या हैं?',
      a_en: 'Streams of electrons from the cathode in a discharge tube at low pressure and high voltage.',
      a_hi: 'निम्न दाब व उच्च वोल्टता पर विसर्जन नली में कैथोड से निकलने वाली इलेक्ट्रॉन धारा।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Which experiment gave the charge on the electron, and what is its value?',
      q_hi: 'इलेक्ट्रॉन का आवेश किस प्रयोग से मिला और उसका मान क्या है?',
      a_en: 'Millikan oil-drop experiment: e = -1.602 x 10^-19 C.',
      a_hi: 'मिलिकन का तेल-बूँद प्रयोग: e = -1.602 × 10⁻¹⁹ C।',
      formula: '$$e=-1.602\\times10^{-19}\\text{ C}$$'
    },
    {
      d: 'E',
      q_en: 'What is the charge-to-mass ratio (e/m) of the electron?',
      q_hi: 'इलेक्ट्रॉन का आवेश-द्रव्यमान अनुपात (e/m) क्या है?',
      a_en: '1.7588 x 10^11 C/kg (found by Thomson).',
      a_hi: '1.7588 × 10¹¹ C/kg (थॉमसन द्वारा ज्ञात)।',
      formula: '$$\\frac{e}{m_e}=1.7588\\times10^{11}\\text{ C kg}^{-1}$$'
    },
    {
      d: 'E',
      q_en: 'Who discovered the neutron and with which nuclear reaction?',
      q_hi: 'न्यूट्रॉन की खोज किसने की और किस नाभिकीय अभिक्रिया से?',
      a_en: 'James Chadwick (1932), by bombarding beryllium with alpha particles.',
      a_hi: 'जेम्स चैडविक (1932), बेरिलियम पर α-कणों की बौछार से।',
      formula: '$$^{9}_{4}\\text{Be}+^{4}_{2}\\text{He}\\rightarrow^{12}_{6}\\text{C}+^{1}_{0}n$$'
    },
    {
      d: 'M',
      q_en: 'What are canal rays and who discovered them?',
      q_hi: 'केनाल किरणें (canal rays) क्या हैं और किसने खोजीं?',
      a_en: 'Goldstein (1886): positive ions formed from gas atoms that move toward the perforated cathode.',
      a_hi: 'गोल्डस्टीन (1886): गैस परमाणुओं से बने धनायन जो छिद्रित कैथोड की ओर चलते हैं।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Why is e/m of cathode rays independent of the gas and electrode material?',
      q_hi: 'कैथोड किरणों का e/m गैस व इलेक्ट्रोड पदार्थ पर निर्भर क्यों नहीं करता?',
      a_en: 'Electrons are a universal constituent of all matter, so every source gives identical particles.',
      a_hi: 'इलेक्ट्रॉन सभी पदार्थों का सार्वत्रिक घटक है, इसलिए हर स्रोत से एक-से कण मिलते हैं।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Why does e/m of canal rays depend on the gas, and for which ion is it maximum?',
      q_hi: 'केनाल किरणों का e/m गैस पर क्यों निर्भर है और किस आयन के लिए अधिकतम है?',
      a_en: 'Different gases give cations of different mass; H+ has the lightest mass, so the highest e/m.',
      a_hi: 'भिन्न गैसों से भिन्न द्रव्यमान के धनायन बनते हैं; H⁺ सबसे हल्का है, अतः e/m सर्वाधिक।',
      formula: '$$\\left(\\frac{e}{m}\\right)_{\\text{H}^+}=9.58\\times10^{7}\\text{ C kg}^{-1}$$'
    },
    {
      d: 'M',
      q_en: 'Arrange e-, proton, neutron and alpha particle by decreasing e/m.',
      q_hi: 'e⁻, प्रोटॉन, न्यूट्रॉन व α-कण को घटते e/m क्रम में लिखिए।',
      a_en: 'Electron > proton > alpha particle > neutron (zero).',
      a_hi: 'इलेक्ट्रॉन > प्रोटॉन > α-कण > न्यूट्रॉन (शून्य)।',
      formula: '$$e^->p^+>\\alpha>n$$'
    },
    {
      d: 'M',
      q_en: 'What did Millikan find about the charge on oil drops?',
      q_hi: 'मिलिकन ने तेल-बूँदों के आवेश के बारे में क्या पाया?',
      a_en: 'It was always an integral multiple of 1.602 x 10^-19 C, so charge is quantised.',
      a_hi: 'आवेश सदैव 1.602 × 10⁻¹⁹ C का पूर्ण गुणज था, अतः आवेश क्वांटित है।',
      formula: '$$q=ne,\\ n=1,2,3\\ldots$$'
    },
    {
      d: 'H',
      q_en: 'Trap: does e/m of cathode rays change if the cathode is Pt instead of Fe?',
      q_hi: 'ट्रैप: कैथोड Fe की जगह Pt का हो तो क्या कैथोड किरणों का e/m बदलेगा?',
      a_en: 'No. The rays are electrons in both cases, so e/m is the same.',
      a_hi: 'नहीं। दोनों में किरणें इलेक्ट्रॉन ही हैं, इसलिए e/m समान रहता है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'What is the approximate ratio of proton mass to electron mass?',
      q_hi: 'प्रोटॉन व इलेक्ट्रॉन के द्रव्यमान का लगभग अनुपात क्या है?',
      a_en: 'About 1836; the neutron is slightly heavier than the proton.',
      a_hi: 'लगभग 1836; न्यूट्रॉन प्रोटॉन से थोड़ा भारी है।',
      formula: '$$\\frac{m_p}{m_e}\\approx1836$$'
    },
    {
      d: 'H',
      q_en: 'Find the ratio of specific charge of a proton to that of an alpha particle.',
      q_hi: 'प्रोटॉन व α-कण के विशिष्ट आवेश का अनुपात ज्ञात कीजिए।',
      a_en: '2 : 1, since alpha has charge 2e and mass about 4 m_p.',
      a_hi: '2 : 1, क्योंकि α का आवेश 2e व द्रव्यमान लगभग 4m_p है।',
      formula: '$$\\frac{e/m_p}{2e/4m_p}=2$$'
    },
    {
      d: 'H',
      q_en: 'Why was the neutron discovered much later than the electron and proton?',
      q_hi: 'न्यूट्रॉन की खोज इलेक्ट्रॉन व प्रोटॉन से बहुत बाद में क्यों हुई?',
      a_en: 'It is neutral, so electric and magnetic fields cannot deflect it; it was found via nuclear reactions.',
      a_hi: 'यह उदासीन है, विद्युत-चुंबकीय क्षेत्र इसे विक्षेपित नहीं करते; यह नाभिकीय अभिक्रिया से मिला।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Using e and e/m, calculate the mass of the electron.',
      q_hi: 'e व e/m की सहायता से इलेक्ट्रॉन का द्रव्यमान निकालिए।',
      a_en: '9.109 x 10^-31 kg.',
      a_hi: '9.109 × 10⁻³¹ kg.',
      formula: '$$m_e=\\frac{1.602\\times10^{-19}}{1.7588\\times10^{11}}=9.109\\times10^{-31}\\text{ kg}$$'
    }
  ],

  /* ---------- SET 2: Thomson & Rutherford Models ---------- */
  2: [
    {
      d: 'E',
      q_en: 'Describe the Thomson plum-pudding model.',
      q_hi: 'थॉमसन का प्लम-पुडिंग मॉडल समझाइए।',
      a_en: 'A positive sphere of uniform charge with electrons embedded like seeds in a watermelon; atom is neutral.',
      a_hi: 'एकसमान धनावेशित गोला जिसमें इलेक्ट्रॉन तरबूज के बीजों की तरह धँसे हैं; परमाणु उदासीन।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What was used in the Rutherford alpha-scattering experiment?',
      q_hi: 'रदरफ़ोर्ड के α-प्रकीर्णन प्रयोग में क्या प्रयुक्त हुआ?',
      a_en: 'A beam of alpha particles on a very thin gold foil, with a ZnS screen to detect scattering.',
      a_hi: 'बहुत पतली सोने की पन्नी पर α-कणों की बौछार; प्रकीर्णन देखने हेतु ZnS पर्दा।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Most alpha particles passed straight through the foil. What does this show?',
      q_hi: 'अधिकांश α-कण पन्नी से सीधे निकल गए। इससे क्या निष्कर्ष निकला?',
      a_en: 'The atom is mostly empty space.',
      a_hi: 'परमाणु का अधिकांश भाग रिक्त स्थान है।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'A few alpha particles rebounded at large angles. What does this show?',
      q_hi: 'कुछ α-कण बड़े कोण पर लौट आए। इससे क्या निष्कर्ष निकला?',
      a_en: 'Positive charge and mass are concentrated in a tiny dense nucleus (about 1 in 20,000 rebounded).',
      a_hi: 'धनावेश व द्रव्यमान एक अति सूक्ष्म सघन नाभिक में केंद्रित हैं (लगभग 1/20000 लौटे)।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'State the main features of the Rutherford nuclear model.',
      q_hi: 'रदरफ़ोर्ड नाभिकीय मॉडल की मुख्य बातें लिखिए।',
      a_en: 'A small positive nucleus holds nearly all mass; electrons revolve around it in circular paths.',
      a_hi: 'छोटा धनावेशित नाभिक लगभग पूरा द्रव्यमान रखता है; इलेक्ट्रॉन उसके चारों ओर वृत्ताकार पथ में घूमते हैं।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Write the nuclear radius formula and find R for A = 27 (R0 = 1.33 x 10^-15 m).',
      q_hi: 'नाभिकीय त्रिज्या का सूत्र लिखिए व A = 27 के लिए R ज्ञात कीजिए (R₀ = 1.33 × 10⁻¹⁵ m)।',
      a_en: 'R = R0 A^(1/3); R = 1.33 x 3 = 4.0 x 10^-15 m.',
      a_hi: 'R = R₀A^(1/3); R = 1.33 × 3 = 4.0 × 10⁻¹⁵ m।',
      formula: '$$R=R_0A^{1/3}$$'
    },
    {
      d: 'M',
      q_en: 'By what factor is the atomic radius larger than the nuclear radius?',
      q_hi: 'परमाणु त्रिज्या नाभिकीय त्रिज्या से लगभग कितने गुना बड़ी है?',
      a_en: 'About 10^5 times (10^-10 m vs 10^-15 m); by volume about 10^15.',
      a_hi: 'लगभग 10⁵ गुना (10⁻¹⁰ m बनाम 10⁻¹⁵ m); आयतन में लगभग 10¹⁵।',
      formula: '$$\\frac{10^{-10}}{10^{-15}}=10^5$$'
    },
    {
      d: 'M',
      q_en: 'Why was gold chosen for the foil?',
      q_hi: 'पन्नी के लिए सोना क्यों चुना गया?',
      a_en: 'Gold is highly malleable, so extremely thin foil is possible, and it has a heavy, highly charged nucleus.',
      a_hi: 'सोना अत्यंत आघातवर्ध्य है, बहुत पतली पन्नी बनती है, और इसका नाभिक भारी व उच्च आवेश वाला है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'If the KE of an alpha particle doubles, how does the distance of closest approach change?',
      q_hi: 'α-कण की गतिज ऊर्जा दोगुनी हो तो निकटतम पहुँच दूरी कैसे बदलेगी?',
      a_en: 'It becomes half, because r0 is inversely proportional to KE.',
      a_hi: 'आधी हो जाएगी, क्योंकि r₀ गतिज ऊर्जा के व्युत्क्रमानुपाती है।',
      formula: '$$r_0=\\frac{1}{4\\pi\\varepsilon_0}\\frac{2Ze^2}{\\text{KE}}$$'
    },
    {
      d: 'M',
      q_en: 'Why could the Thomson model not explain large-angle scattering?',
      q_hi: 'थॉमसन मॉडल बड़े कोण के प्रकीर्णन की व्याख्या क्यों नहीं कर सका?',
      a_en: 'Its positive charge is spread uniformly, so it cannot produce a strong enough local repulsion.',
      a_hi: 'इसका धनावेश समान रूप से फैला है, इसलिए पर्याप्त प्रबल स्थानीय प्रतिकर्षण नहीं बन सकता।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why does Rutherford model fail according to Maxwell electromagnetic theory?',
      q_hi: 'मैक्सवेल के विद्युतचुंबकीय सिद्धांत के अनुसार रदरफ़ोर्ड मॉडल क्यों विफल है?',
      a_en: 'A revolving electron accelerates, radiates energy and would spiral into the nucleus, making the atom unstable.',
      a_hi: 'घूमता इलेक्ट्रॉन त्वरित होकर ऊर्जा विकिरित करेगा और नाभिक में गिर जाएगा; परमाणु अस्थायी होगा।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'What type of spectrum would the Rutherford model plus Maxwell theory predict?',
      q_hi: 'रदरफ़ोर्ड मॉडल व मैक्सवेल सिद्धांत किस प्रकार के स्पेक्ट्रम की भविष्यवाणी करते?',
      a_en: 'A continuous spectrum, but atoms actually show discrete line spectra.',
      a_hi: 'सतत स्पेक्ट्रम, जबकि परमाणु वास्तव में रेखीय स्पेक्ट्रम देते हैं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'What is the approximate density of a nucleus?',
      q_hi: 'नाभिक का लगभग घनत्व कितना होता है?',
      a_en: 'About 10^17 kg m^-3.',
      a_hi: 'लगभग 10¹⁷ kg m⁻³।',
      formula: '$$\\rho\\approx\\frac{1.67\\times10^{-27}}{\\tfrac{4}{3}\\pi(1.3\\times10^{-15})^3}\\approx10^{17}\\text{ kg m}^{-3}$$'
    },
    {
      d: 'H',
      q_en: 'Why is nuclear density nearly the same for all nuclei?',
      q_hi: 'सभी नाभिकों का घनत्व लगभग समान क्यों होता है?',
      a_en: 'Volume is proportional to R^3, hence to A, and mass is also proportional to A; the ratio is constant.',
      a_hi: 'आयतन R³ ∝ A होता है और द्रव्यमान भी ∝ A; अतः अनुपात स्थिर रहता है।',
      formula: '$$\\rho=\\frac{A\\,m_p}{\\tfrac43\\pi R_0^3A}=\\text{const.}$$'
    },
    {
      d: 'H',
      q_en: 'Find the ratio of nuclear radii for mass numbers 64 and 8.',
      q_hi: 'द्रव्यमान संख्या 64 व 8 वाले नाभिकों की त्रिज्याओं का अनुपात ज्ञात कीजिए।',
      a_en: '2 : 1, since 64^(1/3) = 4 and 8^(1/3) = 2.',
      a_hi: '2 : 1, क्योंकि 64^(1/3) = 4 तथा 8^(1/3) = 2।',
      formula: '$$\\frac{R_{64}}{R_8}=\\left(\\frac{64}{8}\\right)^{1/3}=2$$'
    }
  ],

  /* ---------- SET 3: Z, A, Isotopes, Isobars, Isotones ---------- */
  3: [
    {
      d: 'E',
      q_en: 'Define atomic number (Z).',
      q_hi: 'परमाणु क्रमांक (Z) की परिभाषा लिखिए।',
      a_en: 'The number of protons in the nucleus; equals electrons in a neutral atom.',
      a_hi: 'नाभिक में प्रोटॉनों की संख्या; उदासीन परमाणु में इलेक्ट्रॉनों के बराबर।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Define mass number (A).',
      q_hi: 'द्रव्यमान संख्या (A) की परिभाषा लिखिए।',
      a_en: 'Total number of protons and neutrons (nucleons) in the nucleus.',
      a_hi: 'नाभिक में प्रोटॉनों व न्यूट्रॉनों (न्यूक्लिऑनों) की कुल संख्या।',
      formula: '$$A=Z+n$$'
    },
    {
      d: 'E',
      q_en: 'How many neutrons are in 23Na (Z = 11)?',
      q_hi: '²³Na (Z = 11) में कितने न्यूट्रॉन हैं?',
      a_en: '12.',
      a_hi: '12.',
      formula: '$$n=A-Z=23-11=12$$'
    },
    {
      d: 'E',
      q_en: 'Name the three isotopes of hydrogen.',
      q_hi: 'हाइड्रोजन के तीन समस्थानिकों के नाम बताइए।',
      a_en: 'Protium (1H), deuterium (2H or D) and tritium (3H or T, radioactive).',
      a_hi: 'प्रोटियम (¹H), ड्यूटीरियम (²H या D) और ट्राइटियम (³H या T, रेडियोधर्मी)।',
      formula: '$$^{1}_{1}\\text{H},\\ ^{2}_{1}\\text{H},\\ ^{3}_{1}\\text{H}$$'
    },
    {
      d: 'E',
      q_en: 'Which hydrogen isotope has no neutron?',
      q_hi: 'हाइड्रोजन के किस समस्थानिक में न्यूट्रॉन नहीं होता?',
      a_en: 'Protium (1H).',
      a_hi: 'प्रोटियम (¹H)।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What are isotopes? Give an example.',
      q_hi: 'समस्थानिक (isotopes) क्या हैं? उदाहरण दीजिए।',
      a_en: 'Atoms with the same Z but different A, e.g. 35Cl and 37Cl.',
      a_hi: 'समान Z पर भिन्न A वाले परमाणु, जैसे ³⁵Cl व ³⁷Cl।',
      formula: '$$^{35}_{17}\\text{Cl},\\ ^{37}_{17}\\text{Cl}$$'
    },
    {
      d: 'M',
      q_en: 'What are isobars? Give an example.',
      q_hi: 'समभारिक (isobars) क्या हैं? उदाहरण दीजिए।',
      a_en: 'Atoms with the same A but different Z: 40Ar, 40K and 40Ca.',
      a_hi: 'समान A पर भिन्न Z वाले परमाणु: ⁴⁰Ar, ⁴⁰K व ⁴⁰Ca।',
      formula: '$$^{40}_{18}\\text{Ar},\\ ^{40}_{19}\\text{K},\\ ^{40}_{20}\\text{Ca}$$'
    },
    {
      d: 'M',
      q_en: 'What are isotones? Give an example.',
      q_hi: 'समन्यूट्रॉनिक (isotones) क्या हैं? उदाहरण दीजिए।',
      a_en: 'Species with the same number of neutrons: 14C, 15N and 16O (8 neutrons each).',
      a_hi: 'समान न्यूट्रॉन संख्या वाले परमाणु: ¹⁴C, ¹⁵N व ¹⁶O (प्रत्येक में 8 न्यूट्रॉन)।',
      formula: '$$^{14}_{6}\\text{C},\\ ^{15}_{7}\\text{N},\\ ^{16}_{8}\\text{O}$$'
    },
    {
      d: 'M',
      q_en: 'Find the protons, neutrons and electrons in Al3+ (mass number 27).',
      q_hi: 'Al³⁺ (द्रव्यमान संख्या 27) में प्रोटॉन, न्यूट्रॉन व इलेक्ट्रॉन ज्ञात कीजिए।',
      a_en: '13 protons, 14 neutrons and 10 electrons.',
      a_hi: '13 प्रोटॉन, 14 न्यूट्रॉन तथा 10 इलेक्ट्रॉन।',
      formula: '$$e=13-3=10$$'
    },
    {
      d: 'M',
      q_en: 'What are isoelectronic species? Give examples with 10 electrons.',
      q_hi: 'समइलेक्ट्रॉनिक (isoelectronic) स्पीशीज़ क्या हैं? 10 इलेक्ट्रॉन वाले उदाहरण दीजिए।',
      a_en: 'Species with equal electrons: N3-, O2-, F-, Ne, Na+, Mg2+, Al3+.',
      a_hi: 'समान इलेक्ट्रॉन वाली स्पीशीज़: N³⁻, O²⁻, F⁻, Ne, Na⁺, Mg²⁺, Al³⁺।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'What are isodiaphers? Show that 9Be and 19F are isodiaphers.',
      q_hi: 'आइसोडायफर (isodiaphers) क्या हैं? दर्शाइए ⁹Be व ¹⁹F आइसोडायफर हैं।',
      a_en: 'Same value of (n - p). 9Be: 5 - 4 = 1; 19F: 10 - 9 = 1.',
      a_hi: '(n - p) का मान समान। ⁹Be: 5 - 4 = 1; ¹⁹F: 10 - 9 = 1।',
      formula: '$$n-p=1$$'
    },
    {
      d: 'H',
      q_en: 'What are isosteres? Give two pairs.',
      q_hi: 'आइसोस्टियर (isosteres) क्या हैं? दो युग्म बताइए।',
      a_en: 'Species with the same number of atoms and electrons: CO2 and N2O (22 e-), N2 and CO (14 e-).',
      a_hi: 'समान परमाणु व इलेक्ट्रॉन संख्या वाली स्पीशीज़: CO₂ व N₂O (22 e⁻), N₂ व CO (14 e⁻)।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why do isotopes show the same chemical properties but different physical properties?',
      q_hi: 'समस्थानिकों के रासायनिक गुण समान पर भौतिक गुण भिन्न क्यों होते हैं?',
      a_en: 'Same Z gives the same electron arrangement; different mass changes density, diffusion rate, etc.',
      a_hi: 'समान Z से समान इलेक्ट्रॉन विन्यास; द्रव्यमान भिन्न होने से घनत्व, विसरण दर आदि बदलते हैं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Find the protons, neutrons and electrons in 18O2- (Z = 8).',
      q_hi: '¹⁸O²⁻ (Z = 8) में प्रोटॉन, न्यूट्रॉन व इलेक्ट्रॉन ज्ञात कीजिए।',
      a_en: '8 protons, 10 neutrons and 10 electrons.',
      a_hi: '8 प्रोटॉन, 10 न्यूट्रॉन और 10 इलेक्ट्रॉन।',
      formula: '$$n=18-8=10,\\ e=8+2=10$$'
    },
    {
      d: 'H',
      q_en: 'Trap: is the mass number the same as the atomic mass of an element?',
      q_hi: 'ट्रैप: क्या द्रव्यमान संख्या व तत्व का परमाणु द्रव्यमान एक ही है?',
      a_en: 'No. A is a whole number of nucleons; atomic mass is a weighted average in u, usually fractional.',
      a_hi: 'नहीं। A न्यूक्लिऑनों की पूर्ण संख्या है; परमाणु द्रव्यमान u में भारित औसत है, प्रायः भिन्नात्मक।',
      formula: ''
    }
  ],

  /* ---------- SET 4: EM Radiation & Wave Parameters ---------- */
  4: [
    {
      d: 'E',
      q_en: 'What are electromagnetic waves?',
      q_hi: 'विद्युत-चुंबकीय तरंगें (EM waves) क्या हैं?',
      a_en: 'Oscillating electric and magnetic fields perpendicular to each other and to the direction of travel.',
      a_hi: 'दोलन करते विद्युत व चुंबकीय क्षेत्र जो आपस में तथा गति दिशा के लंबवत होते हैं।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Define wavelength and give its units.',
      q_hi: 'तरंगदैर्ध्य (wavelength) की परिभाषा व मात्रक लिखिए।',
      a_en: 'Distance between two successive crests; units m, nm, pm or angstrom.',
      a_hi: 'दो क्रमागत शीर्षों के बीच की दूरी; मात्रक m, nm, pm या Å।',
      formula: '$$\\lambda$$'
    },
    {
      d: 'E',
      q_en: 'Define frequency and give its SI unit.',
      q_hi: 'आवृत्ति (frequency) की परिभाषा व SI मात्रक लिखिए।',
      a_en: 'Number of waves passing a point per second; hertz, Hz = s^-1.',
      a_hi: 'प्रति सेकंड किसी बिंदु से गुज़रने वाली तरंगों की संख्या; हर्ट्ज़, Hz = s⁻¹।',
      formula: '$$\\nu\\ (\\text{Hz})$$'
    },
    {
      d: 'E',
      q_en: 'Relate speed, frequency and wavelength of light. What is the value of c?',
      q_hi: 'प्रकाश की चाल, आवृत्ति व तरंगदैर्ध्य का संबंध लिखिए। c का मान क्या है?',
      a_en: 'c = nu x lambda, with c = 3 x 10^8 m/s in vacuum.',
      a_hi: 'c = ν × λ, निर्वात में c = 3 × 10⁸ m/s।',
      formula: '$$c=\\nu\\lambda=3\\times10^{8}\\text{ m s}^{-1}$$'
    },
    {
      d: 'E',
      q_en: 'Define wavenumber and give its unit.',
      q_hi: 'तरंग संख्या (wavenumber) की परिभाषा व मात्रक लिखिए।',
      a_en: 'Number of wavelengths per unit length, 1/lambda; unit m^-1 or cm^-1.',
      a_hi: 'प्रति इकाई लंबाई में तरंगदैर्ध्यों की संख्या, 1/λ; मात्रक m⁻¹ या cm⁻¹।',
      formula: '$$\\bar{\\nu}=\\frac{1}{\\lambda}$$'
    },
    {
      d: 'M',
      q_en: 'Arrange the EM spectrum in increasing order of wavelength.',
      q_hi: 'EM स्पेक्ट्रम को तरंगदैर्ध्य के बढ़ते क्रम में लिखिए।',
      a_en: 'Gamma < X-rays < UV < visible < infrared < microwave < radio waves.',
      a_hi: 'गामा < X-किरणें < UV < दृश्य < अवरक्त < माइक्रोवेव < रेडियो तरंगें।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What is the visible range and which colour has the highest frequency?',
      q_hi: 'दृश्य प्रकाश का परास क्या है और किस रंग की आवृत्ति सर्वाधिक है?',
      a_en: 'About 400 to 750 nm; violet has the shortest wavelength and highest frequency.',
      a_hi: 'लगभग 400 से 750 nm; बैंगनी की तरंगदैर्ध्य सबसे कम व आवृत्ति सर्वाधिक।',
      formula: '$$400\\text{ nm (violet)}\\ \\text{to}\\ 750\\text{ nm (red)}$$'
    },
    {
      d: 'M',
      q_en: 'Find the frequency of light of wavelength 600 nm.',
      q_hi: '600 nm तरंगदैर्ध्य के प्रकाश की आवृत्ति ज्ञात कीजिए।',
      a_en: '5 x 10^14 Hz.',
      a_hi: '5 × 10¹⁴ Hz.',
      formula: '$$\\nu=\\frac{3\\times10^8}{600\\times10^{-9}}=5\\times10^{14}\\text{ Hz}$$'
    },
    {
      d: 'M',
      q_en: 'Why do EM waves not need a medium?',
      q_hi: 'EM तरंगों को माध्यम की आवश्यकता क्यों नहीं होती?',
      a_en: 'Changing electric and magnetic fields sustain each other, so they travel even through vacuum, unlike sound.',
      a_hi: 'परिवर्तनशील विद्युत व चुंबकीय क्षेत्र एक-दूसरे को बनाए रखते हैं; ये निर्वात में भी चलती हैं।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Compare the speeds of red and violet light in vacuum.',
      q_hi: 'निर्वात में लाल व बैंगनी प्रकाश की चाल की तुलना कीजिए।',
      a_en: 'Equal (c); they differ only in wavelength and frequency.',
      a_hi: 'समान (c); वे केवल तरंगदैर्ध्य व आवृत्ति में भिन्न हैं।',
      formula: '$$c_{\\text{red}}=c_{\\text{violet}}=c$$'
    },
    {
      d: 'H',
      q_en: 'Find the wavenumber (in m^-1 and cm^-1) of radiation of wavelength 400 nm.',
      q_hi: '400 nm तरंगदैर्ध्य के विकिरण की तरंग संख्या (m⁻¹ व cm⁻¹ में) ज्ञात कीजिए।',
      a_en: '2.5 x 10^6 m^-1 = 2.5 x 10^4 cm^-1.',
      a_hi: '2.5 × 10⁶ m⁻¹ = 2.5 × 10⁴ cm⁻¹।',
      formula: '$$\\bar{\\nu}=\\frac{1}{4\\times10^{-7}}=2.5\\times10^6\\text{ m}^{-1}$$'
    },
    {
      d: 'H',
      q_en: 'Trap: when light enters glass from air, which of c, lambda and nu stays constant?',
      q_hi: 'ट्रैप: हवा से काँच में जाने पर c, λ व ν में कौन स्थिर रहता है?',
      a_en: 'Frequency stays constant; speed and wavelength decrease.',
      a_hi: 'आवृत्ति स्थिर रहती है; चाल व तरंगदैर्ध्य घटती हैं।',
      formula: '$$v=\\nu\\lambda,\\ \\nu=\\text{const.}$$'
    },
    {
      d: 'H',
      q_en: 'Arrange radio, microwave and infrared in increasing photon energy.',
      q_hi: 'रेडियो, माइक्रोवेव व अवरक्त को फोटॉन ऊर्जा के बढ़ते क्रम में लिखिए।',
      a_en: 'Radio < microwave < infrared; energy rises as frequency rises.',
      a_hi: 'रेडियो < माइक्रोवेव < अवरक्त; आवृत्ति बढ़ने पर ऊर्जा बढ़ती है।',
      formula: '$$E=h\\nu$$'
    },
    {
      d: 'H',
      q_en: 'A radio station broadcasts at 91.2 MHz. Find the wavelength.',
      q_hi: 'एक रेडियो स्टेशन 91.2 MHz पर प्रसारित करता है। तरंगदैर्ध्य ज्ञात कीजिए।',
      a_en: 'About 3.29 m.',
      a_hi: 'लगभग 3.29 m.',
      formula: '$$\\lambda=\\frac{3\\times10^8}{91.2\\times10^6}=3.29\\text{ m}$$'
    },
    {
      d: 'H',
      q_en: 'Trap: are EM waves deflected by electric or magnetic fields, unlike cathode rays?',
      q_hi: 'ट्रैप: क्या कैथोड किरणों की तरह EM तरंगें विद्युत या चुंबकीय क्षेत्र में विक्षेपित होती हैं?',
      a_en: 'No. Photons carry no charge, so fields do not deflect them.',
      a_hi: 'नहीं। फोटॉन आवेशहीन होते हैं, इसलिए क्षेत्र उन्हें विक्षेपित नहीं करते।',
      formula: ''
    }
  ],

  /* ---------- SET 5: Planck Theory & Photoelectric Effect ---------- */
  5: [
    {
      d: 'E',
      q_en: 'State Planck quantum theory.',
      q_hi: 'प्लांक का क्वांटम सिद्धांत बताइए।',
      a_en: 'Energy is emitted or absorbed in discrete packets called quanta, E = h x nu.',
      a_hi: 'ऊर्जा का उत्सर्जन/अवशोषण क्वांटा नामक असतत पैकेटों में होता है, E = hν।',
      formula: '$$E=h\\nu=\\frac{hc}{\\lambda}$$'
    },
    {
      d: 'E',
      q_en: 'What is the value of the Planck constant?',
      q_hi: 'प्लांक स्थिरांक का मान क्या है?',
      a_en: '6.626 x 10^-34 J s.',
      a_hi: '6.626 × 10⁻³⁴ J s.',
      formula: '$$h=6.626\\times10^{-34}\\text{ J s}$$'
    },
    {
      d: 'E',
      q_en: 'What is the photoelectric effect?',
      q_hi: 'प्रकाश-विद्युत प्रभाव (photoelectric effect) क्या है?',
      a_en: 'Emission of electrons from a metal surface when light of suitable frequency falls on it.',
      a_hi: 'उपयुक्त आवृत्ति का प्रकाश पड़ने पर धातु की सतह से इलेक्ट्रॉनों का उत्सर्जन।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Define threshold frequency.',
      q_hi: 'देहली आवृत्ति (threshold frequency) की परिभाषा लिखिए।',
      a_en: 'The minimum frequency of light that can eject electrons from a metal; below it no emission occurs.',
      a_hi: 'प्रकाश की वह न्यूनतम आवृत्ति जो धातु से इलेक्ट्रॉन निकाल सके; इससे कम पर उत्सर्जन नहीं।',
      formula: '$$\\nu_0$$'
    },
    {
      d: 'E',
      q_en: 'Define work function.',
      q_hi: 'कार्य फलन (work function) की परिभाषा लिखिए।',
      a_en: 'Minimum energy needed to remove an electron from the metal surface.',
      a_hi: 'धातु की सतह से इलेक्ट्रॉन निकालने के लिए आवश्यक न्यूनतम ऊर्जा।',
      formula: '$$W_0=h\\nu_0$$'
    },
    {
      d: 'M',
      q_en: 'Write Einstein photoelectric equation.',
      q_hi: 'आइंस्टीन का प्रकाश-विद्युत समीकरण लिखिए।',
      a_en: 'Photon energy equals work function plus maximum kinetic energy of the electron.',
      a_hi: 'फोटॉन ऊर्जा = कार्य फलन + इलेक्ट्रॉन की अधिकतम गतिज ऊर्जा।',
      formula: '$$h\\nu=h\\nu_0+\\tfrac12m_ev^2$$'
    },
    {
      d: 'M',
      q_en: 'Find the energy in eV of a photon of wavelength 4000 angstrom.',
      q_hi: '4000 Å तरंगदैर्ध्य के फोटॉन की ऊर्जा eV में ज्ञात कीजिए।',
      a_en: '3.1 eV.',
      a_hi: '3.1 eV.',
      formula: '$$E(\\text{eV})\\approx\\frac{12400}{4000}=3.1$$'
    },
    {
      d: 'M',
      q_en: 'What does increasing intensity change, and what does increasing frequency change?',
      q_hi: 'तीव्रता बढ़ाने से क्या बदलता है और आवृत्ति बढ़ाने से क्या?',
      a_en: 'Intensity raises the number of electrons (photocurrent); frequency raises their maximum KE.',
      a_hi: 'तीव्रता से इलेक्ट्रॉनों की संख्या (प्रकाश-धारा) बढ़ती है; आवृत्ति से अधिकतम KE बढ़ती है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Define stopping potential.',
      q_hi: 'निरोधी विभव (stopping potential) की परिभाषा लिखिए।',
      a_en: 'The retarding potential that just stops the fastest photoelectrons, so eV0 = KEmax.',
      a_hi: 'वह मंदक विभव जो सबसे तेज़ फोटो-इलेक्ट्रॉन को रोक दे, अतः eV₀ = KEmax।',
      formula: '$$eV_0=h\\nu-W_0$$'
    },
    {
      d: 'M',
      q_en: 'What is a black body and why did it lead to quantum theory?',
      q_hi: 'कृष्णिका (black body) क्या है और इससे क्वांटम सिद्धांत कैसे आया?',
      a_en: 'An ideal absorber and emitter; classical physics failed to explain its radiation, so Planck proposed quanta.',
      a_hi: 'आदर्श अवशोषक व उत्सर्जक; चिरसम्मत भौतिकी इसके विकिरण की व्याख्या न कर सकी, तब प्लांक ने क्वांटा दिए।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'What are the slope and intercepts of the graph of KEmax versus frequency?',
      q_hi: 'KEmax बनाम आवृत्ति ग्राफ़ का ढाल व अंतःखंड क्या हैं?',
      a_en: 'Straight line with slope h, x-intercept nu0 and y-intercept -W0; the slope is the same for all metals.',
      a_hi: 'सरल रेखा; ढाल h, x-अंतःखंड ν₀, y-अंतःखंड -W₀; ढाल सभी धातुओं में समान।',
      formula: '$$\\text{KE}_{\\max}=h\\nu-h\\nu_0$$'
    },
    {
      d: 'H',
      q_en: 'Trap: if light intensity is doubled at fixed frequency, what happens to the stopping potential?',
      q_hi: 'ट्रैप: आवृत्ति स्थिर रखकर तीव्रता दोगुनी करने पर निरोधी विभव का क्या होगा?',
      a_en: 'No change. V0 depends only on frequency; saturation current doubles.',
      a_hi: 'कोई परिवर्तन नहीं। V₀ केवल आवृत्ति पर निर्भर; संतृप्त धारा दोगुनी होती है।',
      formula: '$$V_0=\\frac{h}{e}(\\nu-\\nu_0)$$'
    },
    {
      d: 'H',
      q_en: 'Light of 2000 angstrom falls on a metal of work function 4.0 eV. Find KEmax and V0.',
      q_hi: '2000 Å का प्रकाश 4.0 eV कार्य फलन वाली धातु पर पड़ता है। KEmax व V₀ ज्ञात कीजिए।',
      a_en: 'E = 6.2 eV, so KEmax = 2.2 eV and V0 = 2.2 V.',
      a_hi: 'E = 6.2 eV, अतः KEmax = 2.2 eV तथा V₀ = 2.2 V।',
      formula: '$$\\frac{12400}{2000}-4.0=2.2\\text{ eV}$$'
    },
    {
      d: 'H',
      q_en: 'Find the threshold wavelength of a metal with work function 2.48 eV.',
      q_hi: '2.48 eV कार्य फलन वाली धातु की देहली तरंगदैर्ध्य ज्ञात कीजिए।',
      a_en: '5000 angstrom.',
      a_hi: '5000 Å.',
      formula: '$$\\lambda_0=\\frac{12400}{2.48}=5000\\text{ \\AA}$$'
    },
    {
      d: 'H',
      q_en: 'Trap: light below threshold frequency but of very high intensity falls on a metal. Is any electron emitted?',
      q_hi: 'ट्रैप: देहली आवृत्ति से कम पर बहुत तीव्र प्रकाश पड़ता है। क्या इलेक्ट्रॉन निकलेंगे?',
      a_en: 'No. One photon ejects one electron and each photon lacks enough energy, whatever the intensity.',
      a_hi: 'नहीं। एक फोटॉन एक इलेक्ट्रॉन निकालता है व प्रत्येक की ऊर्जा कम है, तीव्रता कुछ भी हो।',
      formula: '$$h\\nu<W_0\\Rightarrow\\text{no emission}$$'
    }
  ],

  /* ---------- SET 6: Atomic Spectra & H Spectral Series ---------- */
  6: [
    {
      d: 'E',
      q_en: 'Differentiate emission and absorption spectra.',
      q_hi: 'उत्सर्जन व अवशोषण स्पेक्ट्रम में अंतर बताइए।',
      a_en: 'Emission: bright lines when excited atoms release energy. Absorption: dark lines where radiation is absorbed.',
      a_hi: 'उत्सर्जन: उत्तेजित परमाणुओं से चमकीली रेखाएँ। अवशोषण: विकिरण अवशोषित होने पर काली रेखाएँ।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Why is a line spectrum called the fingerprint of an element?',
      q_hi: 'रेखीय स्पेक्ट्रम को तत्व की अंगुलिछाप क्यों कहते हैं?',
      a_en: 'Each element gives its own unique set of lines, which is used to identify it.',
      a_hi: 'प्रत्येक तत्व की रेखाओं का अपना अद्वितीय समूह होता है, जिससे उसे पहचाना जाता है।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Which hydrogen series is in the UV region and what is n1?',
      q_hi: 'हाइड्रोजन की कौन-सी श्रेणी UV क्षेत्र में है और n₁ क्या है?',
      a_en: 'Lyman series, n1 = 1.',
      a_hi: 'लाइमन श्रेणी, n₁ = 1।',
      formula: '$$n_2\\rightarrow1$$'
    },
    {
      d: 'E',
      q_en: 'Which hydrogen series lies in the visible region and what is n1?',
      q_hi: 'हाइड्रोजन की कौन-सी श्रेणी दृश्य क्षेत्र में है और n₁ क्या है?',
      a_en: 'Balmer series, n1 = 2.',
      a_hi: 'बामर श्रेणी, n₁ = 2।',
      formula: '$$n_2\\rightarrow2$$'
    },
    {
      d: 'E',
      q_en: 'Give n1 for the Paschen, Brackett, Pfund and Humphrey series.',
      q_hi: 'पाश्चन, ब्रैकेट, फुंड व हम्फ्री श्रेणियों के लिए n₁ बताइए।',
      a_en: 'n1 = 3, 4, 5 and 6 respectively; all are in the infrared region.',
      a_hi: 'क्रमशः n₁ = 3, 4, 5 व 6; सभी अवरक्त क्षेत्र में हैं।',
      formula: '$$n_1=3,4,5,6$$'
    },
    {
      d: 'M',
      q_en: 'Write the Rydberg formula and the value of R_H.',
      q_hi: 'रिडबर्ग सूत्र व R_H का मान लिखिए।',
      a_en: 'R_H = 109677 cm^-1 (about 1.097 x 10^7 m^-1); Z = 1 for hydrogen.',
      a_hi: 'R_H = 109677 cm⁻¹ (लगभग 1.097 × 10⁷ m⁻¹); हाइड्रोजन के लिए Z = 1।',
      formula: '$$\\bar{\\nu}=R_HZ^2\\left(\\frac{1}{n_1^2}-\\frac{1}{n_2^2}\\right)$$'
    },
    {
      d: 'M',
      q_en: 'What is the series limit and which wavelength does it give?',
      q_hi: 'श्रेणी सीमा (series limit) क्या है व कौन-सी तरंगदैर्ध्य देती है?',
      a_en: 'Transition from n2 = infinity; it gives the shortest wavelength of that series.',
      a_hi: 'n₂ = ∞ से संक्रमण; यह श्रेणी की सबसे छोटी तरंगदैर्ध्य देती है।',
      formula: '$$\\bar{\\nu}_{\\max}=\\frac{R_HZ^2}{n_1^2}$$'
    },
    {
      d: 'M',
      q_en: 'Find the longest wavelength in the Lyman series.',
      q_hi: 'लाइमन श्रेणी की सबसे लंबी तरंगदैर्ध्य ज्ञात कीजिए।',
      a_en: 'About 1216 angstrom (n2 = 2 to n1 = 1).',
      a_hi: 'लगभग 1216 Å (n₂ = 2 से n₁ = 1)।',
      formula: '$$\\frac{1}{\\lambda}=R_H\\left(1-\\frac14\\right)=\\frac{3R_H}{4}$$'
    },
    {
      d: 'M',
      q_en: 'Find the shortest wavelength of the Balmer series.',
      q_hi: 'बामर श्रेणी की सबसे छोटी तरंगदैर्ध्य ज्ञात कीजिए।',
      a_en: 'About 364.7 nm (n2 = infinity to n1 = 2).',
      a_hi: 'लगभग 364.7 nm (n₂ = ∞ से n₁ = 2)।',
      formula: '$$\\lambda=\\frac{4}{R_H}=3.647\\times10^{-5}\\text{ cm}$$'
    },
    {
      d: 'M',
      q_en: 'How many spectral lines arise for transitions from n2 down to n1?',
      q_hi: 'n₂ से n₁ तक संक्रमण में कुल कितनी वर्णक्रम रेखाएँ बनती हैं?',
      a_en: 'Total lines = (n2 - n1)(n2 - n1 + 1)/2; for n = 5 to 1 this is 10.',
      a_hi: 'कुल रेखाएँ = (n₂ - n₁)(n₂ - n₁ + 1)/2; n = 5 से 1 के लिए 10।',
      formula: '$$N=\\frac{(n_2-n_1)(n_2-n_1+1)}{2}$$'
    },
    {
      d: 'H',
      q_en: 'Find the ratio of the longest wavelength of the Lyman series to that of the Balmer series.',
      q_hi: 'लाइमन की सबसे लंबी तरंगदैर्ध्य व बामर की सबसे लंबी तरंगदैर्ध्य का अनुपात ज्ञात कीजिए।',
      a_en: '5 : 27, from 3R/4 for Lyman and 5R/36 for Balmer.',
      a_hi: '5 : 27, लाइमन के लिए 3R/4 व बामर के लिए 5R/36 से।',
      formula: '$$\\frac{\\lambda_L}{\\lambda_B}=\\frac{5R/36}{3R/4}=\\frac{5}{27}$$'
    },
    {
      d: 'H',
      q_en: 'Find the ratio of the shortest wavelengths of the Lyman and Balmer series.',
      q_hi: 'लाइमन व बामर श्रेणियों की सबसे छोटी तरंगदैर्ध्यों का अनुपात ज्ञात कीजिए।',
      a_en: '1 : 4, since the limits give R and R/4 respectively.',
      a_hi: '1 : 4, क्योंकि सीमाएँ क्रमशः R व R/4 देती हैं।',
      formula: '$$\\lambda_L:\\lambda_B=\\frac1R:\\frac4R$$'
    },
    {
      d: 'H',
      q_en: 'Which He+ transition gives the same wavelength as the H atom n = 2 to 1 line?',
      q_hi: 'He⁺ का कौन-सा संक्रमण H परमाणु के n = 2 से 1 वाली रेखा के समान तरंगदैर्ध्य देता है?',
      a_en: 'n = 4 to n = 2, since Z^2 = 4 scales the wavenumber by 4.',
      a_hi: 'n = 4 से n = 2, क्योंकि Z² = 4 तरंग संख्या को 4 गुना करता है।',
      formula: '$$4\\left(\\frac14-\\frac1{16}\\right)=\\frac34$$'
    },
    {
      d: 'H',
      q_en: 'Trap: how many lines can ONE hydrogen atom emit falling from n = 4 to ground, and how many a sample?',
      q_hi: 'ट्रैप: n = 4 से निम्नतम अवस्था तक एक H परमाणु कितनी रेखाएँ देगा और एक नमूना कितनी?',
      a_en: 'One atom: at most 3 (4 to 3 to 2 to 1). A sample: 6 lines.',
      a_hi: 'एक परमाणु: अधिकतम 3 (4→3→2→1)। एक नमूना: 6 रेखाएँ।',
      formula: '$$\\frac{n(n-1)}{2}=6$$'
    },
    {
      d: 'H',
      q_en: 'Calculate the wavelength of the Balmer H-alpha line (n = 3 to 2).',
      q_hi: 'बामर की H-अल्फा रेखा (n = 3 से 2) की तरंगदैर्ध्य ज्ञात कीजिए।',
      a_en: 'About 656 nm (red), from 15233 cm^-1.',
      a_hi: 'लगभग 656 nm (लाल), 15233 cm⁻¹ से।',
      formula: '$$\\bar{\\nu}=109677\\left(\\frac14-\\frac19\\right)=15233\\text{ cm}^{-1}$$'
    }
  ],

  /* ---------- SET 7: Bohr Model ---------- */
  7: [
    {
      d: 'E',
      q_en: 'State the first postulate of the Bohr model.',
      q_hi: 'बोर मॉडल का पहला अभिगृहीत बताइए।',
      a_en: 'Electrons move in fixed circular stationary orbits of definite energy without radiating.',
      a_hi: 'इलेक्ट्रॉन निश्चित ऊर्जा की स्थिर वृत्ताकार कक्षाओं में बिना विकिरण के घूमते हैं।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'State the Bohr quantisation condition for angular momentum.',
      q_hi: 'कोणीय संवेग के लिए बोर का क्वांटीकरण प्रतिबंध लिखिए।',
      a_en: 'The angular momentum of the electron is an integral multiple of h/2 pi.',
      a_hi: 'इलेक्ट्रॉन का कोणीय संवेग h/2π का पूर्ण गुणज होता है।',
      formula: '$$m_evr=\\frac{nh}{2\\pi}$$'
    },
    {
      d: 'E',
      q_en: 'What happens when an electron jumps between Bohr orbits?',
      q_hi: 'बोर कक्षाओं के बीच इलेक्ट्रॉन के कूदने पर क्या होता है?',
      a_en: 'It absorbs or emits a photon whose energy equals the energy difference of the two orbits.',
      a_hi: 'यह दोनों कक्षाओं के ऊर्जा अंतर के बराबर ऊर्जा का फोटॉन अवशोषित या उत्सर्जित करता है।',
      formula: '$$\\Delta E=E_2-E_1=h\\nu$$'
    },
    {
      d: 'E',
      q_en: 'Write the energy of the electron in the nth orbit of a H-like species.',
      q_hi: 'H-सदृश स्पीशीज़ की n-वीं कक्षा में इलेक्ट्रॉन की ऊर्जा लिखिए।',
      a_en: 'E_n = -13.6 Z^2/n^2 eV, which is -2.18 x 10^-18 Z^2/n^2 J.',
      a_hi: 'E_n = -13.6 Z²/n² eV, अर्थात -2.18 × 10⁻¹⁸ Z²/n² J।',
      formula: '$$E_n=-13.6\\,\\frac{Z^2}{n^2}\\text{ eV}$$'
    },
    {
      d: 'E',
      q_en: 'What is the radius of the first Bohr orbit of hydrogen?',
      q_hi: 'हाइड्रोजन की प्रथम बोर कक्षा की त्रिज्या कितनी है?',
      a_en: '0.529 angstrom (52.9 pm), called the Bohr radius a0.',
      a_hi: '0.529 Å (52.9 pm), जिसे बोर त्रिज्या a₀ कहते हैं।',
      formula: '$$a_0=0.529\\text{ \\AA}$$'
    },
    {
      d: 'M',
      q_en: 'Write the radius formula and find r for the 2nd orbit of Li2+.',
      q_hi: 'त्रिज्या का सूत्र लिखिए व Li²⁺ की द्वितीय कक्षा की त्रिज्या ज्ञात कीजिए।',
      a_en: 'r = 0.529 n^2/Z angstrom; for Li2+ (n = 2, Z = 3) r = 0.705 angstrom.',
      a_hi: 'r = 0.529 n²/Z Å; Li²⁺ (n = 2, Z = 3) के लिए r = 0.705 Å।',
      formula: '$$r_n=0.529\\,\\frac{n^2}{Z}\\text{ \\AA}$$'
    },
    {
      d: 'M',
      q_en: 'Write the velocity formula of the electron in Bohr orbit n.',
      q_hi: 'बोर कक्षा n में इलेक्ट्रॉन के वेग का सूत्र लिखिए।',
      a_en: 'v_n = 2.18 x 10^6 x Z/n m/s; in H ground state it is 2.18 x 10^6 m/s.',
      a_hi: 'v_n = 2.18 × 10⁶ × Z/n m/s; H की निम्नतम अवस्था में 2.18 × 10⁶ m/s।',
      formula: '$$v_n=2.18\\times10^{6}\\,\\frac{Z}{n}\\text{ m s}^{-1}$$'
    },
    {
      d: 'M',
      q_en: 'Relate KE, PE and total energy of the electron in a Bohr orbit.',
      q_hi: 'बोर कक्षा में इलेक्ट्रॉन की KE, PE व कुल ऊर्जा का संबंध लिखिए।',
      a_en: 'KE = -E and PE = 2E. For H ground state: KE = +13.6 eV, PE = -27.2 eV.',
      a_hi: 'KE = -E तथा PE = 2E। H की निम्नतम अवस्था: KE = +13.6 eV, PE = -27.2 eV।',
      formula: '$$\\text{KE}=-E,\\quad\\text{PE}=2E$$'
    },
    {
      d: 'M',
      q_en: 'Give the ionisation energies of H, He+ and Li2+.',
      q_hi: 'H, He⁺ व Li²⁺ की आयनन ऊर्जाएँ बताइए।',
      a_en: '13.6 eV, 54.4 eV and 122.4 eV, i.e. 13.6 x Z^2.',
      a_hi: '13.6 eV, 54.4 eV तथा 122.4 eV, अर्थात 13.6 × Z²।',
      formula: '$$\\text{IE}=13.6\\,Z^2\\text{ eV}$$'
    },
    {
      d: 'M',
      q_en: 'How much energy excites a hydrogen electron from n = 1 to n = 2?',
      q_hi: 'हाइड्रोजन के इलेक्ट्रॉन को n = 1 से n = 2 में उत्तेजित करने में कितनी ऊर्जा लगेगी?',
      a_en: '10.2 eV.',
      a_hi: '10.2 eV.',
      formula: '$$\\Delta E=13.6\\left(1-\\tfrac14\\right)=10.2\\text{ eV}$$'
    },
    {
      d: 'H',
      q_en: 'How does the time period of revolution vary with n and Z? Find T(n=2)/T(n=1) for H.',
      q_hi: 'परिक्रमण काल n व Z के साथ कैसे बदलता है? H के लिए T(n=2)/T(n=1) ज्ञात कीजिए।',
      a_en: 'T is proportional to n^3/Z^2, so the ratio is 8.',
      a_hi: 'T ∝ n³/Z², अतः अनुपात 8 है।',
      formula: '$$T\\propto\\frac{n^3}{Z^2}$$'
    },
    {
      d: 'H',
      q_en: 'State the limitations of the Bohr model.',
      q_hi: 'बोर मॉडल की सीमाएँ बताइए।',
      a_en: 'Fails for multi-electron atoms, cannot explain Zeeman and Stark effects or fine structure, violates uncertainty principle.',
      a_hi: 'बहु-इलेक्ट्रॉन परमाणुओं हेतु विफल; ज़ीमान व स्टार्क प्रभाव व सूक्ष्म संरचना नहीं समझाता; अनिश्चितता सिद्धांत का उल्लंघन।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Which He+ orbit has the same speed and energy as the H ground state?',
      q_hi: 'He⁺ की कौन-सी कक्षा का वेग व ऊर्जा H की निम्नतम अवस्था के समान है?',
      a_en: 'n = 2, since both v and E depend on Z/n, and 2/2 = 1.',
      a_hi: 'n = 2, क्योंकि v व E, Z/n पर निर्भर हैं और 2/2 = 1।',
      formula: '$$\\frac{Z}{n}=\\frac{2}{2}=\\frac11$$'
    },
    {
      d: 'H',
      q_en: 'Trap: find the angular momentum of the electron in the 2nd orbit of He+.',
      q_hi: 'ट्रैप: He⁺ की द्वितीय कक्षा में इलेक्ट्रॉन का कोणीय संवेग ज्ञात कीजिए।',
      a_en: 'h/pi (that is 2h/2 pi). It depends only on n, not on Z.',
      a_hi: 'h/π (अर्थात 2h/2π)। यह केवल n पर निर्भर है, Z पर नहीं।',
      formula: '$$L=\\frac{nh}{2\\pi}=\\frac{2h}{2\\pi}$$'
    },
    {
      d: 'H',
      q_en: 'Find the total energy of the electron in the second excited state of Li2+.',
      q_hi: 'Li²⁺ की द्वितीय उत्तेजित अवस्था में इलेक्ट्रॉन की कुल ऊर्जा ज्ञात कीजिए।',
      a_en: '-13.6 eV; the second excited state is n = 3.',
      a_hi: '-13.6 eV; द्वितीय उत्तेजित अवस्था n = 3 है।',
      formula: '$$E=-13.6\\cdot\\frac{3^2}{3^2}=-13.6\\text{ eV}$$'
    }
  ],

  /* ---------- SET 8: de Broglie ---------- */
  8: [
    {
      d: 'E',
      q_en: 'State the de Broglie relation.',
      q_hi: 'डी-ब्रोग्ली संबंध लिखिए।',
      a_en: 'Every moving particle has a wavelength lambda = h/mv = h/p.',
      a_hi: 'प्रत्येक गतिमान कण की तरंगदैर्ध्य λ = h/mv = h/p होती है।',
      formula: '$$\\lambda=\\frac{h}{mv}=\\frac{h}{p}$$'
    },
    {
      d: 'E',
      q_en: 'What is meant by the dual nature of matter?',
      q_hi: 'द्रव्य की द्वैत प्रकृति (dual nature) का क्या अर्थ है?',
      a_en: 'Matter shows both particle and wave behaviour (proposed by de Broglie, 1924).',
      a_hi: 'द्रव्य कण व तरंग दोनों का व्यवहार दर्शाता है (डी-ब्रोग्ली, 1924)।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Which experiment confirmed the wave nature of the electron?',
      q_hi: 'किस प्रयोग ने इलेक्ट्रॉन की तरंग प्रकृति की पुष्टि की?',
      a_en: 'Davisson-Germer electron diffraction by a nickel crystal (1927).',
      a_hi: 'निकल क्रिस्टल द्वारा इलेक्ट्रॉन विवर्तन का डेविसन-जर्मर प्रयोग (1927)।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Express the de Broglie wavelength in terms of kinetic energy.',
      q_hi: 'डी-ब्रोग्ली तरंगदैर्ध्य को गतिज ऊर्जा के पदों में लिखिए।',
      a_en: 'lambda = h / sqrt(2 m KE).',
      a_hi: 'λ = h / √(2m·KE)।',
      formula: '$$\\lambda=\\frac{h}{\\sqrt{2m\\,(\\text{KE})}}$$'
    },
    {
      d: 'E',
      q_en: 'Why is the wave nature of a cricket ball never noticed?',
      q_hi: 'क्रिकेट गेंद की तरंग प्रकृति कभी क्यों नहीं दिखती?',
      a_en: 'Its mass is large, so lambda is extremely small and unmeasurable.',
      a_hi: 'इसका द्रव्यमान बहुत अधिक है, इसलिए λ अत्यंत सूक्ष्म व अमापनीय है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Give the de Broglie wavelength of an electron accelerated through V volts.',
      q_hi: 'V वोल्ट से त्वरित इलेक्ट्रॉन की डी-ब्रोग्ली तरंगदैर्ध्य लिखिए।',
      a_en: 'lambda is about 12.27/sqrt(V) angstrom; for 100 V it is 1.227 angstrom.',
      a_hi: 'λ ≈ 12.27/√V Å; 100 V के लिए 1.227 Å।',
      formula: '$$\\lambda\\approx\\frac{12.27}{\\sqrt V}\\text{ \\AA}$$'
    },
    {
      d: 'M',
      q_en: 'Write lambda for a particle of charge q accelerated through potential V.',
      q_hi: 'आवेश q वाले कण के लिए, जो विभव V से त्वरित हो, λ लिखिए।',
      a_en: 'KE = qV, so lambda = h / sqrt(2 m q V).',
      a_hi: 'KE = qV, अतः λ = h / √(2mqV)।',
      formula: '$$\\lambda=\\frac{h}{\\sqrt{2mqV}}$$'
    },
    {
      d: 'M',
      q_en: 'How does the Bohr quantisation condition arise from de Broglie waves?',
      q_hi: 'डी-ब्रोग्ली तरंगों से बोर का क्वांटीकरण प्रतिबंध कैसे आता है?',
      a_en: 'A stable orbit holds a whole number of standing waves: 2 pi r = n lambda, giving mvr = nh/2 pi.',
      a_hi: 'स्थायी कक्षा में तरंगें पूर्ण संख्या में फिट होती हैं: 2πr = nλ, जिससे mvr = nh/2π।',
      formula: '$$2\\pi r=n\\lambda\\Rightarrow mvr=\\frac{nh}{2\\pi}$$'
    },
    {
      d: 'M',
      q_en: 'Compare lambda of a proton and an alpha particle moving at the same speed.',
      q_hi: 'समान चाल से चलते प्रोटॉन व α-कण की λ की तुलना कीजिए।',
      a_en: 'lambda is inversely proportional to mass, so proton : alpha = 4 : 1.',
      a_hi: 'λ द्रव्यमान के व्युत्क्रमानुपाती है, अतः प्रोटॉन : α = 4 : 1।',
      formula: '$$\\lambda\\propto\\frac1m$$'
    },
    {
      d: 'M',
      q_en: 'Find lambda of a 0.1 kg ball moving at 10 m/s.',
      q_hi: '10 m/s से चलती 0.1 kg की गेंद की λ ज्ञात कीजिए।',
      a_en: 'About 6.6 x 10^-34 m, far too small to detect.',
      a_hi: 'लगभग 6.6 × 10⁻³⁴ m, जो पहचानने के लिए बहुत छोटी है।',
      formula: '$$\\lambda=\\frac{6.626\\times10^{-34}}{0.1\\times10}=6.6\\times10^{-34}\\text{ m}$$'
    },
    {
      d: 'H',
      q_en: 'Find lambda(proton) : lambda(alpha) when both have the same kinetic energy.',
      q_hi: 'समान गतिज ऊर्जा पर λ(प्रोटॉन) : λ(α) ज्ञात कीजिए।',
      a_en: '2 : 1, since lambda is proportional to 1/sqrt(m) and m_alpha = 4 m_p.',
      a_hi: '2 : 1, क्योंकि λ ∝ 1/√m तथा m_α = 4m_p।',
      formula: '$$\\frac{\\lambda_p}{\\lambda_\\alpha}=\\sqrt{\\frac{4m_p}{m_p}}=2$$'
    },
    {
      d: 'H',
      q_en: 'Find lambda(proton) : lambda(alpha) when both are accelerated through the same potential.',
      q_hi: 'समान विभवांतर से त्वरित होने पर λ(प्रोटॉन) : λ(α) ज्ञात कीजिए।',
      a_en: '2 sqrt2 : 1, as lambda is proportional to 1/sqrt(mq) and alpha has m q = 8 times that of proton.',
      a_hi: '2√2 : 1, क्योंकि λ ∝ 1/√(mq) और α का mq प्रोटॉन से 8 गुना है।',
      formula: '$$\\frac{\\lambda_p}{\\lambda_\\alpha}=\\sqrt{\\frac{4m\\cdot2e}{m\\cdot e}}=\\sqrt8$$'
    },
    {
      d: 'H',
      q_en: 'How many de Broglie wavelengths fit in the 3rd Bohr orbit?',
      q_hi: 'तीसरी बोर कक्षा में कितनी डी-ब्रोग्ली तरंगदैर्ध्य समाती हैं?',
      a_en: '3; the nth orbit holds n wavelengths.',
      a_hi: '3; n-वीं कक्षा में n तरंगदैर्ध्य समाती हैं।',
      formula: '$$2\\pi r_3=3\\lambda$$'
    },
    {
      d: 'H',
      q_en: 'Find lambda of an electron moving at 10^6 m/s.',
      q_hi: '10⁶ m/s से चलते इलेक्ट्रॉन की λ ज्ञात कीजिए।',
      a_en: 'About 7.27 x 10^-10 m (7.27 angstrom).',
      a_hi: 'लगभग 7.27 × 10⁻¹⁰ m (7.27 Å)।',
      formula: '$$\\lambda=\\frac{6.626\\times10^{-34}}{9.109\\times10^{-31}\\times10^{6}}$$'
    },
    {
      d: 'H',
      q_en: 'Why are electron beams used to study crystal structure?',
      q_hi: 'क्रिस्टल संरचना के अध्ययन में इलेक्ट्रॉन पुंज क्यों प्रयुक्त होते हैं?',
      a_en: 'Their lambda is about 1 angstrom, comparable to interatomic spacing, so crystals diffract them.',
      a_hi: 'इनकी λ लगभग 1 Å है, जो अंतरापरमाणुक दूरी के तुल्य है, अतः क्रिस्टल इन्हें विवर्तित करता है।',
      formula: ''
    }
  ],

  /* ---------- SET 9: Heisenberg Uncertainty Principle ---------- */
  9: [
    {
      d: 'E',
      q_en: 'State the Heisenberg uncertainty principle.',
      q_hi: 'हाइजेनबर्ग का अनिश्चितता सिद्धांत बताइए।',
      a_en: 'It is impossible to know exactly both position and momentum of a microscopic particle at the same time.',
      a_hi: 'सूक्ष्म कण की स्थिति व संवेग दोनों को एक साथ यथार्थ रूप से जानना असंभव है।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Who proposed the uncertainty principle and when?',
      q_hi: 'अनिश्चितता सिद्धांत किसने और कब दिया?',
      a_en: 'Werner Heisenberg, in 1927.',
      a_hi: 'वर्नर हाइजेनबर्ग, 1927 में।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Write the mathematical form using position and momentum.',
      q_hi: 'स्थिति व संवेग के पदों में गणितीय रूप लिखिए।',
      a_en: 'The product of the uncertainties is at least h/4 pi.',
      a_hi: 'अनिश्चितताओं का गुणनफल कम से कम h/4π होता है।',
      formula: '$$\\Delta x\\cdot\\Delta p_x\\ge\\frac{h}{4\\pi}$$'
    },
    {
      d: 'E',
      q_en: 'Write the uncertainty relation using velocity.',
      q_hi: 'वेग के पदों में अनिश्चितता संबंध लिखिए।',
      a_en: 'Since p = mv, Delta x . Delta v >= h/4 pi m.',
      a_hi: 'p = mv होने से Δx·Δv ≥ h/4πm।',
      formula: '$$\\Delta x\\cdot\\Delta v\\ge\\frac{h}{4\\pi m}$$'
    },
    {
      d: 'E',
      q_en: 'State the energy-time uncertainty relation.',
      q_hi: 'ऊर्जा-समय अनिश्चितता संबंध लिखिए।',
      a_en: 'The product of uncertainty in energy and in time is at least h/4 pi.',
      a_hi: 'ऊर्जा व समय की अनिश्चितताओं का गुणनफल कम से कम h/4π होता है।',
      formula: '$$\\Delta E\\cdot\\Delta t\\ge\\frac{h}{4\\pi}$$'
    },
    {
      d: 'M',
      q_en: 'Why does the uncertainty principle rule out definite Bohr orbits?',
      q_hi: 'अनिश्चितता सिद्धांत निश्चित बोर कक्षाओं को क्यों नकारता है?',
      a_en: 'A definite orbit needs exact position and velocity together, which the principle forbids; only probabilities exist.',
      a_hi: 'निश्चित कक्षा के लिए स्थिति व वेग साथ-साथ यथार्थ चाहिए, जो वर्जित है; केवल प्रायिकता संभव है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Why is the uncertainty principle negligible for a cricket ball?',
      q_hi: 'क्रिकेट गेंद के लिए अनिश्चितता सिद्धांत नगण्य क्यों है?',
      a_en: 'Large mass makes h/4 pi m extremely small, so the uncertainties are far below any measurement.',
      a_hi: 'बड़े द्रव्यमान से h/4πm अत्यंत छोटा हो जाता है; अनिश्चितताएँ किसी माप से बहुत कम हैं।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'An electron is located within 1 angstrom. Find the minimum uncertainty in velocity.',
      q_hi: 'इलेक्ट्रॉन 1 Å के भीतर स्थित है। वेग की न्यूनतम अनिश्चितता ज्ञात कीजिए।',
      a_en: 'About 5.8 x 10^5 m/s.',
      a_hi: 'लगभग 5.8 × 10⁵ m/s.',
      formula: '$$\\Delta v=\\frac{6.626\\times10^{-34}}{4\\pi(9.109\\times10^{-31})(10^{-10})}$$'
    },
    {
      d: 'M',
      q_en: 'If Delta x = 10^-10 m, find the minimum Delta p.',
      q_hi: 'यदि Δx = 10⁻¹⁰ m हो तो Δp का न्यूनतम मान ज्ञात कीजिए।',
      a_en: 'About 5.27 x 10^-25 kg m/s.',
      a_hi: 'लगभग 5.27 × 10⁻²⁵ kg m/s.',
      formula: '$$\\Delta p=\\frac{h}{4\\pi\\Delta x}=5.27\\times10^{-25}$$'
    },
    {
      d: 'M',
      q_en: 'If the position of a particle were known exactly, what would the uncertainty in momentum be?',
      q_hi: 'यदि कण की स्थिति ठीक-ठीक ज्ञात हो तो संवेग की अनिश्चितता क्या होगी?',
      a_en: 'Infinite, because Delta p >= h/4 pi Delta x as Delta x tends to 0.',
      a_hi: 'अनंत, क्योंकि Δx → 0 पर Δp ≥ h/4πΔx अनंत हो जाता है।',
      formula: '$$\\Delta x\\to0\\Rightarrow\\Delta p\\to\\infty$$'
    },
    {
      d: 'H',
      q_en: 'A 0.1 kg ball has position known to 10^-6 m. Find the minimum Delta v.',
      q_hi: '0.1 kg की गेंद की स्थिति 10⁻⁶ m तक ज्ञात है। Δv का न्यूनतम मान ज्ञात कीजिए।',
      a_en: 'About 5.3 x 10^-28 m/s, utterly negligible.',
      a_hi: 'लगभग 5.3 × 10⁻²⁸ m/s, जो पूर्णतः नगण्य है।',
      formula: '$$\\Delta v=\\frac{h}{4\\pi m\\Delta x}$$'
    },
    {
      d: 'H',
      q_en: 'Trap: is the uncertainty due to faulty instruments or poor technique?',
      q_hi: 'ट्रैप: क्या अनिश्चितता दोषपूर्ण उपकरण या खराब तकनीक के कारण है?',
      a_en: 'No. It is a fundamental property of nature arising from wave-particle duality, not experimental error.',
      a_hi: 'नहीं। यह प्रकृति का मूलभूत गुण है जो तरंग-कण द्वैत से आता है, प्रायोगिक त्रुटि नहीं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'If uncertainties in position and momentum are equal, find the uncertainty in velocity.',
      q_hi: 'यदि स्थिति व संवेग की अनिश्चितताएँ बराबर हों तो वेग की अनिश्चितता ज्ञात कीजिए।',
      a_en: 'Delta v = (1/2m) sqrt(h/pi), from (Delta p)^2 = h/4 pi.',
      a_hi: 'Δv = (1/2m)√(h/π), (Δp)² = h/4π से।',
      formula: '$$\\Delta v=\\frac{1}{2m}\\sqrt{\\frac{h}{\\pi}}$$'
    },
    {
      d: 'H',
      q_en: 'An electron and a proton are confined to the same Delta x. Which has the larger Delta v?',
      q_hi: 'इलेक्ट्रॉन व प्रोटॉन समान Δx में सीमित हैं। किसका Δv अधिक होगा?',
      a_en: 'The electron, by about 1836 times, since Delta v is proportional to 1/m.',
      a_hi: 'इलेक्ट्रॉन का, लगभग 1836 गुना, क्योंकि Δv ∝ 1/m।',
      formula: '$$\\frac{\\Delta v_e}{\\Delta v_p}=\\frac{m_p}{m_e}\\approx1836$$'
    },
    {
      d: 'H',
      q_en: 'An excited state lives for 10^-8 s. Find the minimum uncertainty in its energy.',
      q_hi: 'एक उत्तेजित अवस्था का जीवनकाल 10⁻⁸ s है। इसकी ऊर्जा की न्यूनतम अनिश्चितता ज्ञात कीजिए।',
      a_en: 'About 5.3 x 10^-27 J.',
      a_hi: 'लगभग 5.3 × 10⁻²⁷ J.',
      formula: '$$\\Delta E=\\frac{h}{4\\pi\\Delta t}=\\frac{6.626\\times10^{-34}}{4\\pi\\times10^{-8}}$$'
    }
  ],

  /* ---------- SET 10: Quantum Mechanical Model & Wave Function ---------- */
  10: [
    {
      d: 'E',
      q_en: 'Write the Schrodinger equation in its operator form.',
      q_hi: 'श्रोडिंगर समीकरण का संकारक रूप लिखिए।',
      a_en: 'H-hat psi = E psi: the Hamiltonian operator acting on psi gives the total energy times psi.',
      a_hi: 'Ĥψ = Eψ: हैमिल्टोनियन संकारक ψ पर लगकर कुल ऊर्जा × ψ देता है।',
      formula: '$$\\hat{H}\\psi=E\\psi$$'
    },
    {
      d: 'E',
      q_en: 'What is the physical meaning of the wave function psi?',
      q_hi: 'तरंग फलन ψ का भौतिक अर्थ क्या है?',
      a_en: 'psi is the amplitude of the electron wave; by itself it has no direct physical meaning.',
      a_hi: 'ψ इलेक्ट्रॉन तरंग का आयाम है; स्वयं इसका कोई प्रत्यक्ष भौतिक अर्थ नहीं।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What does |psi|^2 represent?',
      q_hi: '|ψ|² क्या दर्शाता है?',
      a_en: 'The probability density of finding the electron at a point in space.',
      a_hi: 'अंतरिक्ष में किसी बिंदु पर इलेक्ट्रॉन मिलने की प्रायिकता घनत्व।',
      formula: '$$|\\psi|^2$$'
    },
    {
      d: 'E',
      q_en: 'Define an atomic orbital.',
      q_hi: 'परमाणु कक्षक (atomic orbital) की परिभाषा लिखिए।',
      a_en: 'A one-electron wave function; the 3D region around the nucleus where the electron is most likely (about 90%) found.',
      a_hi: 'एक-इलेक्ट्रॉन तरंग फलन; नाभिक के चारों ओर वह 3D क्षेत्र जहाँ इलेक्ट्रॉन मिलने की प्रायिकता लगभग 90%।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Differentiate orbit and orbital.',
      q_hi: 'कक्षा (orbit) व कक्षक (orbital) में अंतर बताइए।',
      a_en: 'Orbit: fixed circular path (Bohr). Orbital: 3D probability region from wave mechanics.',
      a_hi: 'कक्षा: निश्चित वृत्ताकार पथ (बोर)। कक्षक: तरंग यांत्रिकी से प्राप्त 3D प्रायिकता क्षेत्र।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What do H-hat and E stand for in the Schrodinger equation?',
      q_hi: 'श्रोडिंगर समीकरण में Ĥ व E क्या हैं?',
      a_en: 'H-hat is the Hamiltonian operator (kinetic plus potential energy terms); E is the total energy.',
      a_hi: 'Ĥ हैमिल्टोनियन संकारक (गतिज + स्थितिज ऊर्जा पद) है; E कुल ऊर्जा है।',
      formula: '$$\\hat H=-\\frac{h^2}{8\\pi^2m}\\nabla^2+V$$'
    },
    {
      d: 'M',
      q_en: 'What is a nodal surface?',
      q_hi: 'नोडल पृष्ठ (nodal surface) क्या है?',
      a_en: 'A region where |psi|^2 = 0, so the probability of finding the electron there is zero.',
      a_hi: 'वह क्षेत्र जहाँ |ψ|² = 0 हो, अतः वहाँ इलेक्ट्रॉन मिलने की प्रायिकता शून्य है।',
      formula: '$$|\\psi|^2=0$$'
    },
    {
      d: 'M',
      q_en: 'Why can psi be negative while |psi|^2 cannot?',
      q_hi: 'ψ ऋणात्मक हो सकता है पर |ψ|² क्यों नहीं?',
      a_en: 'psi carries a sign (phase) like a wave amplitude; the square is a probability, which is never negative.',
      a_hi: 'ψ में तरंग आयाम की तरह चिह्न (कला) होता है; वर्ग प्रायिकता है जो कभी ऋणात्मक नहीं होती।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'List the conditions an acceptable wave function must satisfy.',
      q_hi: 'स्वीकार्य तरंग फलन की शर्तें बताइए।',
      a_en: 'Single-valued, continuous, finite and normalisable.',
      a_hi: 'एकमानी, सतत, परिमित तथा सामान्यीकरण योग्य।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'How do quantum numbers arise in the quantum mechanical model?',
      q_hi: 'क्वांटम यांत्रिक मॉडल में क्वांटम संख्याएँ कैसे उत्पन्न होती हैं?',
      a_en: 'They appear naturally as boundary-condition solutions of the Schrodinger equation, not as assumptions.',
      a_hi: 'ये श्रोडिंगर समीकरण के सीमा-प्रतिबंध हलों से स्वतः आती हैं, मान्यता के रूप में नहीं।',
      formula: '$$\\psi_{n,l,m_l}$$'
    },
    {
      d: 'H',
      q_en: 'What does the normalisation condition mean physically?',
      q_hi: 'सामान्यीकरण प्रतिबंध का भौतिक अर्थ क्या है?',
      a_en: 'The total probability of finding the electron somewhere in all space is exactly 1.',
      a_hi: 'संपूर्ण अंतरिक्ष में कहीं भी इलेक्ट्रॉन मिलने की कुल प्रायिकता ठीक 1 होती है।',
      formula: '$$\\int|\\psi|^2\\,d\\tau=1$$'
    },
    {
      d: 'H',
      q_en: 'How many electrons can one orbital hold and why?',
      q_hi: 'एक कक्षक में कितने इलेक्ट्रॉन आ सकते हैं और क्यों?',
      a_en: 'Maximum 2, with opposite spins, by the Pauli exclusion principle.',
      a_hi: 'अधिकतम 2, विपरीत चक्रण के साथ, पाउली अपवर्जन सिद्धांत के अनुसार।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why is an orbital drawn with a 90% probability boundary and not a sharp edge?',
      q_hi: 'कक्षक को 90% प्रायिकता सीमा से क्यों दर्शाते हैं, तीखे किनारे से क्यों नहीं?',
      a_en: '|psi|^2 never becomes exactly zero at finite distance, so a sharp boundary does not exist.',
      a_hi: 'परिमित दूरी पर |ψ|² कभी ठीक शून्य नहीं होता, इसलिए तीखी सीमा संभव नहीं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Differentiate |psi|^2 from the radial probability 4 pi r^2 R^2. Where is each maximum for 1s?',
      q_hi: '|ψ|² व त्रिज्य प्रायिकता 4πr²R² में अंतर बताइए। 1s में प्रत्येक का अधिकतम कहाँ है?',
      a_en: '|psi|^2 is per unit volume, maximum at the nucleus; radial probability is per shell, maximum at r = a0.',
      a_hi: '|ψ|² प्रति इकाई आयतन है, नाभिक पर अधिकतम; त्रिज्य प्रायिकता प्रति कोश है, r = a₀ पर अधिकतम।',
      formula: '$$P(r)=4\\pi r^2R^2(r)$$'
    },
    {
      d: 'H',
      q_en: 'For which species can the Schrodinger equation be solved exactly?',
      q_hi: 'किन स्पीशीज़ के लिए श्रोडिंगर समीकरण यथार्थ रूप से हल हो सकता है?',
      a_en: 'Only one-electron species (H, He+, Li2+); multi-electron atoms need approximations because of electron repulsion.',
      a_hi: 'केवल एक-इलेक्ट्रॉन स्पीशीज़ (H, He⁺, Li²⁺); बहु-इलेक्ट्रॉन में इलेक्ट्रॉन प्रतिकर्षण से सन्निकटन चाहिए।',
      formula: ''
    }
  ],

  /* ---------- SET 11: Quantum Numbers ---------- */
  11: [
    {
      d: 'E',
      q_en: 'What does the principal quantum number n tell us?',
      q_hi: 'मुख्य क्वांटम संख्या n क्या बताती है?',
      a_en: 'The shell, orbital size and (mainly) energy; n = 1, 2, 3 ... (K, L, M ...).',
      a_hi: 'कोश, कक्षक का आकार व (मुख्यतः) ऊर्जा; n = 1, 2, 3 ... (K, L, M ...)।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What values can l take, and which subshells do they denote?',
      q_hi: 'l के मान क्या हो सकते हैं और ये किन उपकोशों को दर्शाते हैं?',
      a_en: 'l = 0 to n-1; l = 0, 1, 2, 3 are s, p, d, f.',
      a_hi: 'l = 0 से n-1; l = 0, 1, 2, 3 क्रमशः s, p, d, f।',
      formula: '$$l=0,1,\\ldots,n-1$$'
    },
    {
      d: 'E',
      q_en: 'What values can m_l take?',
      q_hi: 'm_l के मान क्या हो सकते हैं?',
      a_en: 'From -l to +l including 0, giving (2l + 1) orbitals in the subshell.',
      a_hi: '-l से +l तक (0 सहित), अर्थात उपकोश में (2l + 1) कक्षक।',
      formula: '$$m_l=-l,\\ldots,0,\\ldots,+l$$'
    },
    {
      d: 'E',
      q_en: 'What are the allowed values of the spin quantum number?',
      q_hi: 'चक्रण क्वांटम संख्या के अनुमत मान क्या हैं?',
      a_en: '+1/2 and -1/2.',
      a_hi: '+1/2 तथा -1/2.',
      formula: '$$m_s=\\pm\\tfrac12$$'
    },
    {
      d: 'E',
      q_en: 'How many orbitals and electrons does shell n hold?',
      q_hi: 'कोश n में कितने कक्षक व इलेक्ट्रॉन होते हैं?',
      a_en: 'n^2 orbitals and 2n^2 electrons.',
      a_hi: 'n² कक्षक तथा 2n² इलेक्ट्रॉन।',
      formula: '$$\\text{orbitals}=n^2,\\ e^-=2n^2$$'
    },
    {
      d: 'M',
      q_en: 'Give the orbital angular momentum of an electron. Evaluate it for a p electron.',
      q_hi: 'इलेक्ट्रॉन का कक्षीय कोणीय संवेग लिखिए। p इलेक्ट्रॉन के लिए मान ज्ञात कीजिए।',
      a_en: 'sqrt(l(l+1)) h/2 pi; for p (l = 1) it is sqrt2 h/2 pi.',
      a_hi: '√(l(l+1)) h/2π; p (l = 1) के लिए √2 h/2π।',
      formula: '$$L=\\sqrt{l(l+1)}\\,\\frac{h}{2\\pi}$$'
    },
    {
      d: 'M',
      q_en: 'Give the spin angular momentum of an electron.',
      q_hi: 'इलेक्ट्रॉन का चक्रण कोणीय संवेग लिखिए।',
      a_en: 'sqrt(s(s+1)) h/2 pi with s = 1/2, i.e. (sqrt3/2) h/2 pi.',
      a_hi: '√(s(s+1)) h/2π, s = 1/2 के साथ, अर्थात (√3/2) h/2π।',
      formula: '$$S=\\sqrt{s(s+1)}\\,\\frac{h}{2\\pi}$$'
    },
    {
      d: 'M',
      q_en: 'Which quantum number gives size, shape, orientation and spin respectively?',
      q_hi: 'आकार, आकृति, अभिविन्यास व चक्रण क्रमशः किस क्वांटम संख्या से मिलते हैं?',
      a_en: 'n (size and energy), l (shape), m_l (orientation), m_s (spin).',
      a_hi: 'n (आकार व ऊर्जा), l (आकृति), m_l (अभिविन्यास), m_s (चक्रण)।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'How many orbitals and electrons are in the d and f subshells?',
      q_hi: 'd व f उपकोशों में कितने कक्षक व इलेक्ट्रॉन हैं?',
      a_en: 'd: 5 orbitals, 10 electrons. f: 7 orbitals, 14 electrons.',
      a_hi: 'd: 5 कक्षक, 10 इलेक्ट्रॉन। f: 7 कक्षक, 14 इलेक्ट्रॉन।',
      formula: '$$2(2l+1)$$'
    },
    {
      d: 'M',
      q_en: 'For n = 3 list the allowed l values and count the orbitals.',
      q_hi: 'n = 3 के लिए अनुमत l मान लिखिए व कक्षकों की संख्या गिनिए।',
      a_en: 'l = 0, 1, 2 (3s, 3p, 3d): 1 + 3 + 5 = 9 orbitals, holding 18 electrons.',
      a_hi: 'l = 0, 1, 2 (3s, 3p, 3d): 1 + 3 + 5 = 9 कक्षक, 18 इलेक्ट्रॉन।',
      formula: '$$n^2=9$$'
    },
    {
      d: 'H',
      q_en: 'Is the set n = 2, l = 2, m_l = 0, m_s = +1/2 possible?',
      q_hi: 'क्या n = 2, l = 2, m_l = 0, m_s = +1/2 संभव है?',
      a_en: 'No. l must be at most n - 1 = 1, so 2d does not exist.',
      a_hi: 'नहीं। l ≤ n - 1 = 1 होना चाहिए, इसलिए 2d का अस्तित्व नहीं।',
      formula: '$$l\\le n-1$$'
    },
    {
      d: 'H',
      q_en: 'Is n = 3, l = 1, m_l = -2, m_s = -1/2 possible?',
      q_hi: 'क्या n = 3, l = 1, m_l = -2, m_s = -1/2 संभव है?',
      a_en: 'No. For l = 1, m_l can only be -1, 0 or +1.',
      a_hi: 'नहीं। l = 1 के लिए m_l केवल -1, 0 या +1 हो सकता है।',
      formula: '$$|m_l|\\le l$$'
    },
    {
      d: 'H',
      q_en: 'Is n = 1, l = 0, m_l = 0, m_s = 0 possible?',
      q_hi: 'क्या n = 1, l = 0, m_l = 0, m_s = 0 संभव है?',
      a_en: 'No. m_s can only be +1/2 or -1/2, never 0.',
      a_hi: 'नहीं। m_s केवल +1/2 या -1/2 हो सकता है, कभी 0 नहीं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'What is the maximum number of electrons in shell n = 3 having m_s = +1/2?',
      q_hi: 'कोश n = 3 में m_s = +1/2 वाले अधिकतम इलेक्ट्रॉन कितने हो सकते हैं?',
      a_en: '9, one in each of the 9 orbitals.',
      a_hi: '9, प्रत्येक के 9 कक्षकों में एक-एक।',
      formula: '$$n^2=9$$'
    },
    {
      d: 'H',
      q_en: 'How many electrons can have n = 4, l = 3 and m_l = -2?',
      q_hi: 'n = 4, l = 3 व m_l = -2 वाले कितने इलेक्ट्रॉन हो सकते हैं?',
      a_en: '2; these three values fix one 4f orbital, which holds two electrons of opposite spin.',
      a_hi: '2; ये तीन मान एक 4f कक्षक निश्चित करते हैं, जिसमें विपरीत चक्रण के 2 इलेक्ट्रॉन आते हैं।',
      formula: '$$(4,3,-2,\\pm\\tfrac12)$$'
    }
  ],

  /* ---------- SET 12: Shapes of Orbitals & Nodes ---------- */
  12: [
    {
      d: 'E',
      q_en: 'What is the shape of an s orbital?',
      q_hi: 's कक्षक की आकृति क्या होती है?',
      a_en: 'Spherical and non-directional; it grows larger as n increases.',
      a_hi: 'गोलाकार व अदिशात्मक; n बढ़ने पर आकार बढ़ता है।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What is the shape of a p orbital and how many p orbitals are there?',
      q_hi: 'p कक्षक की आकृति क्या है और कितने p कक्षक होते हैं?',
      a_en: 'Dumbbell-shaped; three orbitals px, py, pz along the axes.',
      a_hi: 'डम्बल आकृति; अक्षों के अनुदिश तीन कक्षक px, py, pz।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Describe the five d orbitals.',
      q_hi: 'पाँचों d कक्षकों का वर्णन कीजिए।',
      a_en: 'Four are cloverleaf (dxy, dyz, dxz, dx2-y2); dz2 is a dumbbell with a doughnut ring in the xy plane.',
      a_hi: 'चार चतुर्पर्णी (dxy, dyz, dxz, dx²-y²); dz² डम्बल है जिसके xy तल में वलय होता है।',
      formula: '$$d_{xy},\\,d_{yz},\\,d_{xz},\\,d_{x^2-y^2},\\,d_{z^2}$$'
    },
    {
      d: 'E',
      q_en: 'Give the formula for the number of radial nodes.',
      q_hi: 'त्रिज्य नोडों की संख्या का सूत्र लिखिए।',
      a_en: 'Radial (spherical) nodes = n - l - 1.',
      a_hi: 'त्रिज्य (गोलीय) नोड = n - l - 1।',
      formula: '$$n_{\\text{radial}}=n-l-1$$'
    },
    {
      d: 'E',
      q_en: 'Give the formulas for angular nodes and total nodes.',
      q_hi: 'कोणीय नोड व कुल नोड के सूत्र लिखिए।',
      a_en: 'Angular nodes = l; total nodes = n - 1.',
      a_hi: 'कोणीय नोड = l; कुल नोड = n - 1।',
      formula: '$$n_{\\text{angular}}=l,\\quad n_{\\text{total}}=n-1$$'
    },
    {
      d: 'M',
      q_en: 'Find the radial and angular nodes of the 3s orbital.',
      q_hi: '3s कक्षक के त्रिज्य व कोणीय नोड ज्ञात कीजिए।',
      a_en: '2 radial nodes and 0 angular nodes.',
      a_hi: '2 त्रिज्य नोड तथा 0 कोणीय नोड।',
      formula: '$$3-0-1=2$$'
    },
    {
      d: 'M',
      q_en: 'Find the radial, angular and total nodes of the 3p orbital.',
      q_hi: '3p कक्षक के त्रिज्य, कोणीय व कुल नोड ज्ञात कीजिए।',
      a_en: '1 radial, 1 angular, 2 total.',
      a_hi: '1 त्रिज्य, 1 कोणीय, कुल 2।',
      formula: '$$3-1-1=1,\\ l=1$$'
    },
    {
      d: 'M',
      q_en: 'Find the radial, angular and total nodes of the 3d orbital.',
      q_hi: '3d कक्षक के त्रिज्य, कोणीय व कुल नोड ज्ञात कीजिए।',
      a_en: '0 radial, 2 angular, 2 total.',
      a_hi: '0 त्रिज्य, 2 कोणीय, कुल 2।',
      formula: '$$3-2-1=0,\\ l=2$$'
    },
    {
      d: 'M',
      q_en: 'Which d orbitals are axial and which are non-axial?',
      q_hi: 'कौन-से d कक्षक अक्षीय व कौन-से अनअक्षीय हैं?',
      a_en: 'Non-axial (lobes between axes): dxy, dyz, dxz. Axial (lobes on axes): dx2-y2 and dz2.',
      a_hi: 'अनअक्षीय (अक्षों के बीच पालियाँ): dxy, dyz, dxz। अक्षीय (अक्षों पर पालियाँ): dx²-y² व dz²।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What is the nodal plane of the 2px orbital?',
      q_hi: '2px कक्षक का नोडल तल कौन-सा है?',
      a_en: 'The yz plane, where the probability is zero; the nucleus also lies on it.',
      a_hi: 'yz तल, जहाँ प्रायिकता शून्य है; नाभिक भी इसी तल में स्थित है।',
      formula: '$$2p_x:\\ \\text{yz plane}$$'
    },
    {
      d: 'H',
      q_en: 'Find the radial, angular and total nodes of the 4f orbital.',
      q_hi: '4f कक्षक के त्रिज्य, कोणीय व कुल नोड ज्ञात कीजिए।',
      a_en: '0 radial, 3 angular, 3 total.',
      a_hi: '0 त्रिज्य, 3 कोणीय, कुल 3।',
      formula: '$$4-3-1=0,\\ l=3$$'
    },
    {
      d: 'H',
      q_en: 'How many nodal planes does the dxy orbital have? Name them.',
      q_hi: 'dxy कक्षक के कितने नोडल तल हैं? नाम बताइए।',
      a_en: 'Two: the xz and yz planes.',
      a_hi: 'दो: xz तथा yz तल।',
      formula: '$$d_{xy}:\\ xz,\\ yz$$'
    },
    {
      d: 'H',
      q_en: 'How many peaks does the radial probability curve of 2s show, and where is the node?',
      q_hi: '2s के त्रिज्य प्रायिकता वक्र में कितने शिखर हैं और नोड कहाँ है?',
      a_en: 'Two maxima (the outer one is larger) separated by 1 radial node, where the probability is zero.',
      a_hi: 'दो शिखर (बाहरी बड़ा) जो 1 त्रिज्य नोड से अलग हैं, जहाँ प्रायिकता शून्य है।',
      formula: '$$4\\pi r^2R^2(r)$$'
    },
    {
      d: 'H',
      q_en: 'How many maxima appear in the radial distribution of ns, np and nd orbitals?',
      q_hi: 'ns, np व nd कक्षकों के त्रिज्य वितरण में कितने शिखर होते हैं?',
      a_en: 'ns: n maxima; np: n - 1; nd: n - 2. So 3p has 2.',
      a_hi: 'ns: n शिखर; np: n - 1; nd: n - 2। अतः 3p में 2।',
      formula: '$$n_{\\max}=n-l$$'
    },
    {
      d: 'H',
      q_en: 'What are the angular nodes of the dz2 orbital?',
      q_hi: 'dz² कक्षक के कोणीय नोड क्या हैं?',
      a_en: 'Two conical surfaces (l = 2), not planes; the doughnut ring lies between them in the xy plane.',
      a_hi: 'दो शंक्वाकार पृष्ठ (l = 2), तल नहीं; वलय xy तल में इनके बीच स्थित है।',
      formula: '$$n_{\\text{angular}}=l=2$$'
    }
  ],

  /* ---------- SET 13: Orbital Energies & (n + l) Rule ---------- */
  13: [
    {
      d: 'E',
      q_en: 'On what does orbital energy depend in a hydrogen atom?',
      q_hi: 'हाइड्रोजन परमाणु में कक्षक की ऊर्जा किस पर निर्भर करती है?',
      a_en: 'Only on n: 1s < 2s = 2p < 3s = 3p = 3d < 4s = 4p = 4d = 4f.',
      a_hi: 'केवल n पर: 1s < 2s = 2p < 3s = 3p = 3d < 4s = 4p = 4d = 4f।',
      formula: '$$E_n=-13.6\\frac{Z^2}{n^2}\\text{ eV}$$'
    },
    {
      d: 'E',
      q_en: 'What are degenerate orbitals?',
      q_hi: 'समऊर्जक (degenerate) कक्षक क्या हैं?',
      a_en: 'Orbitals of equal energy, such as the three 2p orbitals.',
      a_hi: 'समान ऊर्जा वाले कक्षक, जैसे तीनों 2p कक्षक।',
      formula: '$$2p_x=2p_y=2p_z$$'
    },
    {
      d: 'E',
      q_en: 'On what does orbital energy depend in a multi-electron atom?',
      q_hi: 'बहु-इलेक्ट्रॉन परमाणु में कक्षक की ऊर्जा किन पर निर्भर करती है?',
      a_en: 'On both n and l, because of electron-electron repulsion and shielding.',
      a_hi: 'n तथा l दोनों पर, इलेक्ट्रॉन-इलेक्ट्रॉन प्रतिकर्षण व परिरक्षण के कारण।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'State the (n + l) rule.',
      q_hi: '(n + l) नियम बताइए।',
      a_en: 'The orbital with the lower (n + l) value has lower energy and fills first.',
      a_hi: 'जिस कक्षक का (n + l) मान कम हो उसकी ऊर्जा कम होती है और वह पहले भरता है।',
      formula: '$$E\\ \\uparrow\\ \\text{as}\\ (n+l)\\ \\uparrow$$'
    },
    {
      d: 'E',
      q_en: 'What is the tie-breaker when two orbitals have the same (n + l)?',
      q_hi: 'दो कक्षकों का (n + l) समान हो तो निर्णय कैसे होता है?',
      a_en: 'The orbital with the lower n has lower energy.',
      a_hi: 'जिसका n कम हो उसकी ऊर्जा कम होती है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Which is lower in energy, 4s or 3d, and why?',
      q_hi: '4s व 3d में किसकी ऊर्जा कम है और क्यों?',
      a_en: '4s: (n + l) = 4 against 5 for 3d, so 4s fills first.',
      a_hi: '4s: (n + l) = 4 जबकि 3d का 5; अतः 4s पहले भरता है।',
      formula: '$$4s\\ (4)<3d\\ (5)$$'
    },
    {
      d: 'M',
      q_en: 'Compare 3d and 4p using the (n + l) rule.',
      q_hi: '(n + l) नियम से 3d व 4p की तुलना कीजिए।',
      a_en: 'Both have (n + l) = 5; 3d has the lower n, so 3d is lower in energy.',
      a_hi: 'दोनों का (n + l) = 5; 3d का n कम है, अतः 3d की ऊर्जा कम है।',
      formula: '$$3d<4p$$'
    },
    {
      d: 'M',
      q_en: 'Compare 5s, 4d and 5p in energy.',
      q_hi: '5s, 4d व 5p की ऊर्जाओं की तुलना कीजिए।',
      a_en: '5s (5) < 4d (6) < 5p (6); 4d and 5p tie, and 4d has lower n.',
      a_hi: '5s (5) < 4d (6) < 5p (6); 4d व 5p बराबर हैं, 4d का n कम है।',
      formula: '$$5s<4d<5p$$'
    },
    {
      d: 'M',
      q_en: 'Arrange s, p, d, f of the same shell by shielding and by energy.',
      q_hi: 'एक ही कोश के s, p, d, f को परिरक्षण व ऊर्जा के क्रम में रखिए।',
      a_en: 'Penetration s > p > d > f, so Zeff is highest for s and energy ns < np < nd < nf.',
      a_hi: 'भेदन s > p > d > f, अतः Zeff s का सर्वाधिक; ऊर्जा ns < np < nd < nf।',
      formula: '$$Z_{\\text{eff}}:\\ s>p>d>f$$'
    },
    {
      d: 'M',
      q_en: 'Write the energy-order of filling up to 5p.',
      q_hi: '5p तक भरने का ऊर्जा-क्रम लिखिए।',
      a_en: '1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p.',
      a_hi: '1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'JEE trap: is 2s lower than 2p in hydrogen? In lithium?',
      q_hi: 'JEE ट्रैप: क्या हाइड्रोजन में 2s, 2p से कम ऊर्जा का है? लिथियम में?',
      a_en: 'In H, 2s = 2p (same n). In Li, 2s < 2p because 2s penetrates better and feels higher Zeff.',
      a_hi: 'H में 2s = 2p (समान n)। Li में 2s < 2p, क्योंकि 2s का भेदन अधिक है व Zeff अधिक।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'In a hydrogen atom, which has higher energy: 3s or 3d?',
      q_hi: 'हाइड्रोजन परमाणु में 3s व 3d में किसकी ऊर्जा अधिक है?',
      a_en: 'Neither; both have the same energy because only n matters in a one-electron system.',
      a_hi: 'किसी की नहीं; दोनों की ऊर्जा समान है क्योंकि एक-इलेक्ट्रॉन तंत्र में केवल n मायने रखता है।',
      formula: '$$E_{3s}=E_{3p}=E_{3d}$$'
    },
    {
      d: 'H',
      q_en: 'Define effective nuclear charge.',
      q_hi: 'प्रभावी नाभिकीय आवेश (effective nuclear charge) की परिभाषा लिखिए।',
      a_en: 'The net positive charge felt by an electron after screening by other electrons: Zeff = Z - sigma.',
      a_hi: 'अन्य इलेक्ट्रॉनों के परिरक्षण के बाद इलेक्ट्रॉन द्वारा अनुभव किया गया शुद्ध धनावेश: Zeff = Z - σ।',
      formula: '$$Z_{\\text{eff}}=Z-\\sigma$$'
    },
    {
      d: 'H',
      q_en: 'Why is a 2s electron lower in energy than a 2p electron in a multi-electron atom?',
      q_hi: 'बहु-इलेक्ट्रॉन परमाणु में 2s इलेक्ट्रॉन की ऊर्जा 2p से कम क्यों है?',
      a_en: '2s has an inner radial peak, so it penetrates the 1s core and is less shielded.',
      a_hi: '2s का एक आंतरिक त्रिज्य शिखर होता है, यह 1s क्रोड में प्रवेश करता है और कम परिरक्षित रहता है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Arrange 6s, 4f and 5d in increasing energy.',
      q_hi: '6s, 4f व 5d को ऊर्जा के बढ़ते क्रम में लिखिए।',
      a_en: '6s (6) < 4f (7) < 5d (7); 4f and 5d tie and 4f has lower n.',
      a_hi: '6s (6) < 4f (7) < 5d (7); 4f व 5d बराबर हैं, 4f का n कम है।',
      formula: '$$6s<4f<5d$$'
    }
  ],

  /* ---------- SET 14: Aufbau, Pauli, Hund ---------- */
  14: [
    {
      d: 'E',
      q_en: 'State the Aufbau principle.',
      q_hi: 'ऑफबाऊ सिद्धांत बताइए।',
      a_en: 'Electrons fill orbitals in order of increasing energy, lowest first.',
      a_hi: 'इलेक्ट्रॉन कक्षकों को बढ़ती ऊर्जा के क्रम में भरते हैं, सबसे कम ऊर्जा पहले।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'State the Pauli exclusion principle.',
      q_hi: 'पाउली का अपवर्जन सिद्धांत बताइए।',
      a_en: 'No two electrons in an atom can have all four quantum numbers equal; an orbital holds at most 2 electrons of opposite spin.',
      a_hi: 'किसी परमाणु में दो इलेक्ट्रॉनों की चारों क्वांटम संख्याएँ समान नहीं हो सकतीं; कक्षक में अधिकतम 2 विपरीत चक्रण।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'State Hund rule of maximum multiplicity.',
      q_hi: 'हुंड का अधिकतम बहुलता नियम बताइए।',
      a_en: 'Degenerate orbitals each get one electron with parallel spin before any pairing starts.',
      a_hi: 'समऊर्जक कक्षकों में युग्मन से पहले प्रत्येक में समानांतर चक्रण का एक इलेक्ट्रॉन भरा जाता है।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Give the maximum electrons in a subshell and in the s, p, d, f subshells.',
      q_hi: 'उपकोश में अधिकतम इलेक्ट्रॉन का सूत्र व s, p, d, f के मान लिखिए।',
      a_en: '2(2l + 1): s = 2, p = 6, d = 10, f = 14.',
      a_hi: '2(2l + 1): s = 2, p = 6, d = 10, f = 14।',
      formula: '$$e^-_{\\max}=2(2l+1)$$'
    },
    {
      d: 'E',
      q_en: 'Give the maximum electrons in the shell n.',
      q_hi: 'कोश n में अधिकतम इलेक्ट्रॉन कितने होते हैं?',
      a_en: '2n^2: 2, 8, 18, 32 for n = 1 to 4.',
      a_hi: '2n²: n = 1 से 4 के लिए 2, 8, 18, 32।',
      formula: '$$2n^2$$'
    },
    {
      d: 'M',
      q_en: 'Define spin multiplicity and find it for nitrogen (2p3).',
      q_hi: 'चक्रण बहुलता परिभाषित कीजिए व नाइट्रोजन (2p³) के लिए ज्ञात कीजिए।',
      a_en: '2S + 1 with S = sum of spins; N has three parallel spins, S = 3/2, so multiplicity = 4.',
      a_hi: '2S + 1, S = चक्रणों का योग; N में तीन समानांतर चक्रण, S = 3/2, अतः बहुलता = 4।',
      formula: '$$2S+1=2\\left(\\tfrac32\\right)+1=4$$'
    },
    {
      d: 'M',
      q_en: 'Why does Hund rule give the most stable arrangement?',
      q_hi: 'हुंड का नियम सर्वाधिक स्थायी व्यवस्था क्यों देता है?',
      a_en: 'Parallel spins in separate orbitals reduce electron repulsion and maximise exchange energy.',
      a_hi: 'अलग कक्षकों में समानांतर चक्रण से इलेक्ट्रॉन प्रतिकर्षण घटता है व विनिमय ऊर्जा अधिकतम होती है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Which principle is violated by 2p4 written as (up-down)(up-down)( )?',
      q_hi: '2p⁴ को (↑↓)(↑↓)( ) लिखने पर कौन-सा सिद्धांत भंग होता है?',
      a_en: "Hund's rule; the correct arrangement is (up-down)(up)(up).",
      a_hi: 'हुंड का नियम; सही व्यवस्था (↑↓)(↑)(↑) है।',
      formula: '$$2p^4:\\ \\uparrow\\downarrow\\ \\uparrow\\ \\uparrow$$'
    },
    {
      d: 'M',
      q_en: 'Which principle is violated if both electrons of an orbital have spin up?',
      q_hi: 'यदि कक्षक के दोनों इलेक्ट्रॉनों का चक्रण ऊपर हो तो कौन-सा सिद्धांत भंग होता है?',
      a_en: 'The Pauli exclusion principle; all four quantum numbers would be identical.',
      a_hi: 'पाउली का अपवर्जन सिद्धांत; चारों क्वांटम संख्याएँ समान हो जाएँगी।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Scandium is written as [Ar] 3d3. Which principle is violated?',
      q_hi: 'स्कैंडियम को [Ar] 3d³ लिखा गया। कौन-सा सिद्धांत भंग हुआ?',
      a_en: 'Aufbau principle; the correct ground state is [Ar] 3d1 4s2.',
      a_hi: 'ऑफबाऊ सिद्धांत; सही निम्नतम अवस्था [Ar] 3d¹ 4s² है।',
      formula: '$$\\text{Sc}\\ (Z=21):\\ [\\text{Ar}]3d^14s^2$$'
    },
    {
      d: 'H',
      q_en: 'Find the unpaired electrons in N, O and F.',
      q_hi: 'N, O व F में अयुग्मित इलेक्ट्रॉन ज्ञात कीजिए।',
      a_en: 'N: 3 (2p3), O: 2 (2p4), F: 1 (2p5).',
      a_hi: 'N: 3 (2p³), O: 2 (2p⁴), F: 1 (2p⁵)।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'What is the maximum number of electrons with the same spin in a d subshell?',
      q_hi: 'd उपकोश में समान चक्रण वाले अधिकतम इलेक्ट्रॉन कितने हो सकते हैं?',
      a_en: '5; one in each of the five d orbitals (half-filled d5).',
      a_hi: '5; पाँचों d कक्षकों में एक-एक (अर्धपूर्ण d⁵)।',
      formula: '$$d^5:\\ \\uparrow\\ \\uparrow\\ \\uparrow\\ \\uparrow\\ \\uparrow$$'
    },
    {
      d: 'H',
      q_en: 'Why does the second period contain only 8 elements?',
      q_hi: 'दूसरे आवर्त में केवल 8 तत्व ही क्यों हैं?',
      a_en: '2s (2) and 2p (6) fill before 3s begins, so n = 2 holds 8 electrons.',
      a_hi: '3s शुरू होने से पहले 2s (2) व 2p (6) भर जाते हैं, इसलिए n = 2 में 8 इलेक्ट्रॉन।',
      formula: '$$2+6=8$$'
    },
    {
      d: 'H',
      q_en: 'How many electrons in calcium (Z = 20) have l = 1?',
      q_hi: 'कैल्शियम (Z = 20) में कितने इलेक्ट्रॉनों के लिए l = 1 है?',
      a_en: '12; 2p6 and 3p6.',
      a_hi: '12; 2p⁶ तथा 3p⁶।',
      formula: '$$1s^22s^22p^63s^23p^64s^2$$'
    },
    {
      d: 'H',
      q_en: 'Find the spin multiplicity of Mn2+ (3d5).',
      q_hi: 'Mn²⁺ (3d⁵) की चक्रण बहुलता ज्ञात कीजिए।',
      a_en: '6, since S = 5/2 for five parallel spins.',
      a_hi: '6, क्योंकि पाँच समानांतर चक्रणों के लिए S = 5/2।',
      formula: '$$2S+1=2\\left(\\tfrac52\\right)+1=6$$'
    }
  ],

  /* ---------- SET 15: Configurations, Exceptions, Magnetic Moment ---------- */
  15: [
    {
      d: 'E',
      q_en: 'Write the electronic configuration of sodium (Z = 11).',
      q_hi: 'सोडियम (Z = 11) का इलेक्ट्रॉनिक विन्यास लिखिए।',
      a_en: '1s2 2s2 2p6 3s1, or [Ne] 3s1.',
      a_hi: '1s² 2s² 2p⁶ 3s¹, या [Ne] 3s¹।',
      formula: '$$[\\text{Ne}]3s^1$$'
    },
    {
      d: 'E',
      q_en: 'Write the configuration of chromium (Z = 24).',
      q_hi: 'क्रोमियम (Z = 24) का विन्यास लिखिए।',
      a_en: '[Ar] 3d5 4s1, not 3d4 4s2.',
      a_hi: '[Ar] 3d⁵ 4s¹, न कि 3d⁴ 4s²।',
      formula: '$$[\\text{Ar}]3d^54s^1$$'
    },
    {
      d: 'E',
      q_en: 'Write the configuration of copper (Z = 29).',
      q_hi: 'कॉपर (Z = 29) का विन्यास लिखिए।',
      a_en: '[Ar] 3d10 4s1, not 3d9 4s2.',
      a_hi: '[Ar] 3d¹⁰ 4s¹, न कि 3d⁹ 4s²।',
      formula: '$$[\\text{Ar}]3d^{10}4s^1$$'
    },
    {
      d: 'E',
      q_en: 'Differentiate diamagnetic and paramagnetic species.',
      q_hi: 'प्रतिचुंबकीय व अनुचुंबकीय स्पीशीज़ में अंतर बताइए।',
      a_en: 'Diamagnetic: all electrons paired, repelled by a field. Paramagnetic: one or more unpaired, attracted.',
      a_hi: 'प्रतिचुंबकीय: सभी इलेक्ट्रॉन युग्मित, क्षेत्र से प्रतिकर्षित। अनुचुंबकीय: एक या अधिक अयुग्मित, आकर्षित।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Write the spin-only magnetic moment formula.',
      q_hi: 'चक्रण-मात्र चुंबकीय आघूर्ण का सूत्र लिखिए।',
      a_en: 'mu = sqrt(n(n + 2)) BM, where n is the number of unpaired electrons.',
      a_hi: 'μ = √(n(n + 2)) BM, जहाँ n अयुग्मित इलेक्ट्रॉनों की संख्या है।',
      formula: '$$\\mu=\\sqrt{n(n+2)}\\ \\text{BM}$$'
    },
    {
      d: 'M',
      q_en: 'Why are Cr and Cu exceptions to the Aufbau filling?',
      q_hi: 'Cr व Cu ऑफबाऊ भरण के अपवाद क्यों हैं?',
      a_en: 'Half-filled d5 and fully filled d10 are extra stable due to symmetrical distribution and higher exchange energy.',
      a_hi: 'अर्धपूर्ण d⁵ व पूर्ण d¹⁰ सममित वितरण व अधिक विनिमय ऊर्जा के कारण अतिरिक्त स्थायी हैं।',
      formula: '$$3d^44s^2\\rightarrow3d^54s^1$$'
    },
    {
      d: 'M',
      q_en: 'Write the configuration of Fe2+ (Fe: Z = 26).',
      q_hi: 'Fe²⁺ (Fe: Z = 26) का विन्यास लिखिए।',
      a_en: '[Ar] 3d6; the two 4s electrons are removed first.',
      a_hi: '[Ar] 3d⁶; पहले दोनों 4s इलेक्ट्रॉन निकलते हैं।',
      formula: '$$\\text{Fe}^{2+}:\\ [\\text{Ar}]3d^6$$'
    },
    {
      d: 'M',
      q_en: 'Write the configurations of Fe3+ and Mn2+ and state the unpaired electrons.',
      q_hi: 'Fe³⁺ व Mn²⁺ के विन्यास लिखिए व अयुग्मित इलेक्ट्रॉन बताइए।',
      a_en: 'Both are [Ar] 3d5 with 5 unpaired electrons.',
      a_hi: 'दोनों [Ar] 3d⁵ हैं व 5 अयुग्मित इलेक्ट्रॉन हैं।',
      formula: '$$\\text{Fe}^{3+},\\ \\text{Mn}^{2+}:\\ 3d^5$$'
    },
    {
      d: 'M',
      q_en: 'Find the unpaired electrons and magnetic moment of Cr3+.',
      q_hi: 'Cr³⁺ के अयुग्मित इलेक्ट्रॉन व चुंबकीय आघूर्ण ज्ञात कीजिए।',
      a_en: '[Ar] 3d3 gives 3 unpaired electrons; mu = sqrt15 = 3.87 BM.',
      a_hi: '[Ar] 3d³ से 3 अयुग्मित इलेक्ट्रॉन; μ = √15 = 3.87 BM।',
      formula: '$$\\mu=\\sqrt{3\\times5}=3.87\\text{ BM}$$'
    },
    {
      d: 'M',
      q_en: 'Compare the magnetic behaviour of Cu+ and Cu2+.',
      q_hi: 'Cu⁺ व Cu²⁺ के चुंबकीय व्यवहार की तुलना कीजिए।',
      a_en: 'Cu+ is 3d10, diamagnetic. Cu2+ is 3d9 with 1 unpaired electron, paramagnetic (1.73 BM).',
      a_hi: 'Cu⁺ 3d¹⁰ प्रतिचुंबकीय। Cu²⁺ 3d⁹ में 1 अयुग्मित, अनुचुंबकीय (1.73 BM)।',
      formula: '$$\\mu=\\sqrt{1\\times3}=1.73\\text{ BM}$$'
    },
    {
      d: 'H',
      q_en: 'Trap: which electrons are removed first when a transition metal forms a cation?',
      q_hi: 'ट्रैप: संक्रमण धातु से धनायन बनने पर पहले कौन-से इलेक्ट्रॉन निकलते हैं?',
      a_en: 'The outermost ns (4s) electrons go first, even though 4s fills before 3d.',
      a_hi: 'सबसे बाहरी ns (4s) इलेक्ट्रॉन पहले निकलते हैं, भले ही 4s, 3d से पहले भरता है।',
      formula: '$$\\text{Fe}:\\ 3d^64s^2\\rightarrow\\text{Fe}^{2+}:\\ 3d^6$$'
    },
    {
      d: 'H',
      q_en: 'Find the spin-only magnetic moment of Fe3+.',
      q_hi: 'Fe³⁺ का चक्रण-मात्र चुंबकीय आघूर्ण ज्ञात कीजिए।',
      a_en: '5.92 BM (5 unpaired electrons).',
      a_hi: '5.92 BM (5 अयुग्मित इलेक्ट्रॉन)।',
      formula: '$$\\mu=\\sqrt{5\\times7}=\\sqrt{35}=5.92\\text{ BM}$$'
    },
    {
      d: 'H',
      q_en: 'Find the spin-only magnetic moment of Ni2+ (Ni: Z = 28).',
      q_hi: 'Ni²⁺ (Ni: Z = 28) का चक्रण-मात्र चुंबकीय आघूर्ण ज्ञात कीजिए।',
      a_en: '2.83 BM; Ni2+ is 3d8 with 2 unpaired electrons.',
      a_hi: '2.83 BM; Ni²⁺, 3d⁸ में 2 अयुग्मित इलेक्ट्रॉन।',
      formula: '$$\\mu=\\sqrt{2\\times4}=2.83\\text{ BM}$$'
    },
    {
      d: 'H',
      q_en: 'Give the configuration of Zn2+ and its magnetic nature.',
      q_hi: 'Zn²⁺ का विन्यास व उसकी चुंबकीय प्रकृति बताइए।',
      a_en: '[Ar] 3d10: all paired, diamagnetic, mu = 0.',
      a_hi: '[Ar] 3d¹⁰: सभी युग्मित, प्रतिचुंबकीय, μ = 0।',
      formula: '$$\\text{Zn}^{2+}:\\ [\\text{Ar}]3d^{10}$$'
    },
    {
      d: 'H',
      q_en: 'How many unpaired electrons does a Cr atom have and what is its magnetic moment?',
      q_hi: 'Cr परमाणु में कितने अयुग्मित इलेक्ट्रॉन हैं और चुंबकीय आघूर्ण क्या है?',
      a_en: '6 unpaired (3d5 4s1); mu = sqrt48 = 6.93 BM.',
      a_hi: '6 अयुग्मित (3d⁵ 4s¹); μ = √48 = 6.93 BM।',
      formula: '$$\\mu=\\sqrt{6\\times8}=6.93\\text{ BM}$$'
    }
  ]
};
