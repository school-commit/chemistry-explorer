/* ==========================================================================
   CHEMISTRY EXPLORER - Class 11 Chemistry
   Chapter 7: Redox Reactions
   Flashcard database: 15 sets x 15 cards = 225 hand-crafted cards
   Each set: 5 Easy (E) + 5 Medium (M) + 5 Hard (H)
   Read by buildDeck(ch, s) via window.FLASHCARD_SETS_DB[chId][setNum]
   ========================================================================== */
window.FLASHCARD_SETS_DB = window.FLASHCARD_SETS_DB || {};
window.FLASHCARD_SETS_DB.ch7 = {

  /* ---------- SET 1: Classical & Electronic Concepts of Oxidation and Reduction ---------- */
  1: [
    {
      d: 'E',
      q_en: 'Define oxidation and reduction in the classical sense.',
      q_hi: 'शास्त्रीय संकल्पना में ऑक्सीकरण व अपचयन को परिभाषित कीजिए।',
      a_en: 'Oxidation: addition of O/electronegative element or removal of H/electropositive element. Reduction is the reverse.',
      a_hi: 'ऑक्सीकरण: O/विद्युत-ऋणात्मक तत्व का योग या H/विद्युत-धनात्मक तत्व का निष्कासन। अपचयन इसका उलटा।',
      formula: '$$2\\text{Mg}+\\text{O}_2\\rightarrow2\\text{MgO}$$'
    },
    {
      d: 'E',
      q_en: 'State the electronic concept of oxidation and reduction (OIL RIG).',
      q_hi: 'ऑक्सीकरण व अपचयन की इलेक्ट्रॉनिक संकल्पना (OIL RIG) बताइए।',
      a_en: 'Oxidation Is Loss of electrons; Reduction Is Gain of electrons.',
      a_hi: 'ऑक्सीकरण = इलेक्ट्रॉनों का त्याग; अपचयन = इलेक्ट्रॉनों का ग्रहण।',
      formula: '$$\\text{M}\\rightarrow\\text{M}^{n+}+ne^-$$'
    },
    {
      d: 'E',
      q_en: 'What are an oxidising agent and a reducing agent?',
      q_hi: 'ऑक्सीकारक (oxidant) व अपचायक (reductant) क्या हैं?',
      a_en: 'Oxidant accepts electrons (gets reduced); reductant donates electrons (gets oxidised).',
      a_hi: 'ऑक्सीकारक इलेक्ट्रॉन ग्रहण करता है (स्वयं अपचयित); अपचायक इलेक्ट्रॉन देता है (स्वयं ऑक्सीकृत)।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'In 2Na + Cl2 → 2NaCl, identify oxidant, reductant and what is oxidised.',
      q_hi: '2Na + Cl2 → 2NaCl में ऑक्सीकारक, अपचायक व ऑक्सीकृत स्पीशीज़ पहचानिए।',
      a_en: 'Na loses e⁻ (oxidised, reductant); Cl2 gains e⁻ (reduced, oxidant).',
      a_hi: 'Na e⁻ त्यागता है (ऑक्सीकृत, अपचायक); Cl2 e⁻ ग्रहण करता है (अपचयित, ऑक्सीकारक)।',
      formula: '$$2\\text{Na}+\\text{Cl}_2\\rightarrow2\\text{Na}^++2\\text{Cl}^-$$'
    },
    {
      d: 'E',
      q_en: 'Can oxidation occur without reduction?',
      q_hi: 'क्या ऑक्सीकरण बिना अपचयन के हो सकता है?',
      a_en: 'No. Electrons lost by one species must be gained by another, so the two occur together as a redox reaction.',
      a_hi: 'नहीं। एक स्पीशीज़ द्वारा त्यागे गए e⁻ दूसरी ग्रहण करती है, अतः दोनों साथ होते हैं (रेडॉक्स)।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'In 2Na + H2 → 2NaH, which is oxidised and which is the oxidant?',
      q_hi: '2Na + H2 → 2NaH में कौन ऑक्सीकृत है और ऑक्सीकारक कौन?',
      a_en: 'Na is oxidised (reductant); H2 gains electrons forming H⁻, so it is the oxidant.',
      a_hi: 'Na ऑक्सीकृत (अपचायक); H2 e⁻ ग्रहण कर H⁻ बनाता है, अतः ऑक्सीकारक है।',
      formula: '$$2\\text{Na}+\\text{H}_2\\rightarrow2\\text{Na}^+\\text{H}^-$$'
    },
    {
      d: 'M',
      q_en: 'In Fe2O3 + 3CO → 2Fe + 3CO2, name the oxidant and reductant.',
      q_hi: 'Fe2O3 + 3CO → 2Fe + 3CO2 में ऑक्सीकारक व अपचायक बताइए।',
      a_en: 'Fe2O3 is the oxidant (loses O); CO is the reductant (gains O to give CO2).',
      a_hi: 'Fe2O3 ऑक्सीकारक (O त्यागता है); CO अपचायक (O ग्रहण कर CO2 बनाता है)।',
      formula: '$$\\text{Fe}_2\\text{O}_3+3\\text{CO}\\rightarrow2\\text{Fe}+3\\text{CO}_2$$'
    },
    {
      d: 'M',
      q_en: 'In 2H2S + SO2 → 3S + 2H2O, identify oxidant and reductant.',
      q_hi: '2H2S + SO2 → 3S + 2H2O में ऑक्सीकारक व अपचायक पहचानिए।',
      a_en: 'H2S is the reductant (H removed, S formed); SO2 is the oxidant (O removed).',
      a_hi: 'H2S अपचायक (H निकला, S बना); SO2 ऑक्सीकारक (O निकला)।',
      formula: '$$2\\text{H}_2\\text{S}+\\text{SO}_2\\rightarrow3\\text{S}+2\\text{H}_2\\text{O}$$'
    },
    {
      d: 'M',
      q_en: 'In MnO2 + 4HCl → MnCl2 + Cl2 + 2H2O, what is oxidised?',
      q_hi: 'MnO2 + 4HCl → MnCl2 + Cl2 + 2H2O में क्या ऑक्सीकृत होता है?',
      a_en: 'HCl is oxidised (Cl⁻ → Cl2, H removed); MnO2 is the oxidant.',
      a_hi: 'HCl ऑक्सीकृत होता है (Cl⁻ → Cl2); MnO2 ऑक्सीकारक है।',
      formula: '$$2\\text{Cl}^-\\rightarrow\\text{Cl}_2+2e^-$$'
    },
    {
      d: 'M',
      q_en: 'Why was the classical concept replaced by the electronic concept?',
      q_hi: 'शास्त्रीय संकल्पना के स्थान पर इलेक्ट्रॉनिक संकल्पना क्यों अपनाई गई?',
      a_en: 'Reactions like Zn + Cu²⁺ → Zn²⁺ + Cu involve no O or H, yet are redox; electron transfer explains all.',
      a_hi: 'Zn + Cu²⁺ → Zn²⁺ + Cu जैसी अभिक्रियाओं में O या H नहीं, फिर भी रेडॉक्स है; e⁻ स्थानांतरण सब समझाता है।',
      formula: '$$\\text{Zn}+\\text{Cu}^{2+}\\rightarrow\\text{Zn}^{2+}+\\text{Cu}$$'
    },
    {
      d: 'H',
      q_en: 'In 2HgCl2 + SnCl2 → Hg2Cl2 + SnCl4, which is oxidised in the classical sense?',
      q_hi: '2HgCl2 + SnCl2 → Hg2Cl2 + SnCl4 में शास्त्रीय अर्थ में कौन ऑक्सीकृत है?',
      a_en: 'SnCl2 (electronegative Cl added); HgCl2 is reduced (electropositive Hg fraction increases).',
      a_hi: 'SnCl2 (विद्युत-ऋणात्मक Cl जुड़ा); HgCl2 अपचयित (विद्युत-धनात्मक Hg अंश बढ़ा)।',
      formula: '$$2\\text{HgCl}_2+\\text{SnCl}_2\\rightarrow\\text{Hg}_2\\text{Cl}_2+\\text{SnCl}_4$$'
    },
    {
      d: 'H',
      q_en: 'TRAP: Does the oxidising agent get oxidised?',
      q_hi: 'ट्रैप: क्या ऑक्सीकारक स्वयं ऑक्सीकृत होता है?',
      a_en: 'No. An oxidising agent oxidises others and is itself reduced; a reducing agent is itself oxidised.',
      a_hi: 'नहीं। ऑक्सीकारक दूसरों को ऑक्सीकृत करता है और स्वयं अपचयित होता है; अपचायक स्वयं ऑक्सीकृत होता है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'H2 + Cl2 → 2HCl is covalent. Why is it still called redox?',
      q_hi: 'H2 + Cl2 → 2HCl सहसंयोजी है। फिर भी इसे रेडॉक्स क्यों कहते हैं?',
      a_en: 'Shared electrons shift toward more electronegative Cl, so H is oxidised (0 → +1) and Cl reduced (0 → −1).',
      a_hi: 'साझे e⁻ अधिक विद्युत-ऋणात्मक Cl की ओर खिसकते हैं: H ऑक्सीकृत (0 → +1), Cl अपचयित (0 → −1)।',
      formula: '$$\\text{H}_2^{\\,0}+\\text{Cl}_2^{\\,0}\\rightarrow2\\text{H}^{+1}\\text{Cl}^{-1}$$'
    },
    {
      d: 'H',
      q_en: 'In H2S + Cl2 → 2HCl + S, classify H2S and Cl2.',
      q_hi: 'H2S + Cl2 → 2HCl + S में H2S व Cl2 को वर्गीकृत कीजिए।',
      a_en: 'H2S is oxidised (H removed, S⁻² → S) and is the reductant; Cl2 gains H and electrons: oxidant.',
      a_hi: 'H2S ऑक्सीकृत (H निकला, S⁻² → S), अपचायक; Cl2 e⁻ ग्रहण करता है: ऑक्सीकारक।',
      formula: '$$\\text{S}^{2-}\\rightarrow\\text{S}+2e^-$$'
    },
    {
      d: 'H',
      q_en: 'In 4NH3 + 5O2 → 4NO + 6H2O, name oxidant, reductant and electrons exchanged.',
      q_hi: '4NH3 + 5O2 → 4NO + 6H2O में ऑक्सीकारक, अपचायक व स्थानांतरित e⁻ बताइए।',
      a_en: 'NH3 is the reductant (N −3 → +2, 5e⁻ each); O2 is the oxidant (0 → −2). Total 20 e⁻ are transferred.',
      a_hi: 'NH3 अपचायक (N −3 → +2, प्रति N 5e⁻); O2 ऑक्सीकारक (0 → −2)। कुल 20 e⁻ स्थानांतरित।',
      formula: '$$\\text{N}^{-3}\\rightarrow\\text{N}^{+2}+5e^-$$'
    }
  ],

  /* ---------- SET 2: Competitive Electron Transfer Reactions ---------- */
  2: [
    {
      d: 'E',
      q_en: 'What is observed when a Zn strip is placed in CuSO4 solution?',
      q_hi: 'CuSO4 विलयन में Zn की पट्टी डालने पर क्या दिखता है?',
      a_en: 'Blue colour fades and reddish Cu deposits on Zn, as Zn gives electrons to Cu²⁺.',
      a_hi: 'नीला रंग फीका पड़ता है व Zn पर लाल Cu जमता है, क्योंकि Zn, Cu²⁺ को e⁻ देता है।',
      formula: '$$\\text{Zn}+\\text{Cu}^{2+}\\rightarrow\\text{Zn}^{2+}+\\text{Cu}$$'
    },
    {
      d: 'E',
      q_en: 'Why does no reaction occur when a Cu strip is placed in ZnSO4?',
      q_hi: 'ZnSO4 में Cu की पट्टी डालने पर अभिक्रिया क्यों नहीं होती?',
      a_en: 'Cu has a lower tendency to lose electrons than Zn, so it cannot reduce Zn²⁺.',
      a_hi: 'Cu की e⁻ त्यागने की प्रवृत्ति Zn से कम है, अतः वह Zn²⁺ को अपचयित नहीं कर सकता।',
      formula: '$$\\text{Cu}+\\text{Zn}^{2+}\\nrightarrow$$'
    },
    {
      d: 'E',
      q_en: 'What happens when a Cu strip is placed in AgNO3 solution?',
      q_hi: 'AgNO3 विलयन में Cu की पट्टी डालने पर क्या होता है?',
      a_en: 'Solution turns blue (Cu²⁺ forms) and silver deposits on the strip.',
      a_hi: 'विलयन नीला हो जाता है (Cu²⁺ बनता है) और पट्टी पर Ag जमता है।',
      formula: '$$\\text{Cu}+2\\text{Ag}^+\\rightarrow\\text{Cu}^{2+}+2\\text{Ag}$$'
    },
    {
      d: 'E',
      q_en: 'Give the order of electron-releasing tendency of Zn, Cu and Ag.',
      q_hi: 'Zn, Cu व Ag की e⁻ त्यागने की प्रवृत्ति का क्रम लिखिए।',
      a_en: 'Zn > Cu > Ag; each metal reduces ions of the metals below it.',
      a_hi: 'Zn > Cu > Ag; प्रत्येक धातु अपने से नीचे की धातुओं के आयनों को अपचयित करती है।',
      formula: '$$\\text{Zn}>\\text{Cu}>\\text{Ag}$$'
    },
    {
      d: 'E',
      q_en: 'What is meant by competitive electron transfer?',
      q_hi: 'प्रतिस्पर्धी इलेक्ट्रॉन स्थानांतरण (competitive electron transfer) क्या है?',
      a_en: 'Two species compete for electrons; the one with the greater tendency to lose them gives them to the other.',
      a_hi: 'दो स्पीशीज़ e⁻ के लिए प्रतिस्पर्धा करती हैं; जिसकी त्यागने की प्रवृत्ति अधिक है वह दूसरी को देती है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'A Co strip in NiSO4 reacts but Ni in CoSO4 does not. What does this show?',
      q_hi: 'NiSO4 में Co अभिक्रिया करता है पर CoSO4 में Ni नहीं। यह क्या दर्शाता है?',
      a_en: 'Co has a greater tendency to lose electrons than Ni, so Co is the stronger reductant.',
      a_hi: 'Co की e⁻ त्यागने की प्रवृत्ति Ni से अधिक है, अतः Co प्रबल अपचायक है।',
      formula: '$$\\text{Co}+\\text{Ni}^{2+}\\rightarrow\\text{Co}^{2+}+\\text{Ni}$$'
    },
    {
      d: 'M',
      q_en: 'Give the order of oxidising power of halogens.',
      q_hi: 'हैलोजनों की ऑक्सीकरण क्षमता का क्रम लिखिए।',
      a_en: 'F2 > Cl2 > Br2 > I2; a stronger halogen displaces a weaker one from its halide.',
      a_hi: 'F2 > Cl2 > Br2 > I2; प्रबल हैलोजन दुर्बल हैलोजन को उसके हैलाइड से विस्थापित करता है।',
      formula: '$$\\text{F}_2>\\text{Cl}_2>\\text{Br}_2>\\text{I}_2$$'
    },
    {
      d: 'M',
      q_en: 'Why does Cl2 displace Br⁻ and I⁻ but not F⁻?',
      q_hi: 'Cl2, Br⁻ व I⁻ को विस्थापित करता है पर F⁻ को क्यों नहीं?',
      a_en: 'Cl2 is a stronger oxidant than Br2 and I2, but weaker than F2, so it cannot oxidise F⁻.',
      a_hi: 'Cl2, Br2 व I2 से प्रबल ऑक्सीकारक है पर F2 से दुर्बल, अतः F⁻ को ऑक्सीकृत नहीं कर सकता।',
      formula: '$$\\text{Cl}_2+2\\text{Br}^-\\rightarrow2\\text{Cl}^-+\\text{Br}_2$$'
    },
    {
      d: 'M',
      q_en: 'Why does F2 oxidise water to O2?',
      q_hi: 'F2 जल को O2 में क्यों ऑक्सीकृत करता है?',
      a_en: 'F2 is such a strong oxidant that it oxidises O in water (−2 → 0) while itself becoming F⁻.',
      a_hi: 'F2 इतना प्रबल ऑक्सीकारक है कि जल के O (−2 → 0) को ऑक्सीकृत कर स्वयं F⁻ बनता है।',
      formula: '$$2\\text{F}_2+2\\text{H}_2\\text{O}\\rightarrow4\\text{HF}+\\text{O}_2$$'
    },
    {
      d: 'M',
      q_en: 'What is observed when an iron nail is placed in CuSO4 solution?',
      q_hi: 'CuSO4 विलयन में लोहे की कील डालने पर क्या दिखता है?',
      a_en: 'Blue colour changes to pale green and reddish Cu deposits (Fe → Fe²⁺).',
      a_hi: 'नीला रंग हल्के हरे में बदलता है व लाल Cu जमता है (Fe → Fe²⁺)।',
      formula: '$$\\text{Fe}+\\text{Cu}^{2+}\\rightarrow\\text{Fe}^{2+}+\\text{Cu}$$'
    },
    {
      d: 'H',
      q_en: 'In Cu + 2AgNO3, how many Ag atoms deposit per Cu atom and why?',
      q_hi: 'Cu + 2AgNO3 में प्रति Cu परमाणु कितने Ag जमते हैं और क्यों?',
      a_en: 'Two. Each Cu gives 2 electrons, and each Ag⁺ accepts only one.',
      a_hi: 'दो। प्रत्येक Cu 2 e⁻ देता है और प्रत्येक Ag⁺ केवल एक ग्रहण करता है।',
      formula: '$$\\text{Cu}\\rightarrow\\text{Cu}^{2+}+2e^-;\\ 2\\text{Ag}^++2e^-\\rightarrow2\\text{Ag}$$'
    },
    {
      d: 'H',
      q_en: 'Will Br2 displace Cl⁻ from NaCl solution?',
      q_hi: 'क्या Br2, NaCl विलयन से Cl⁻ को विस्थापित करेगा?',
      a_en: 'No. Br2 is a weaker oxidant than Cl2, so it cannot oxidise Cl⁻.',
      a_hi: 'नहीं। Br2, Cl2 से दुर्बल ऑक्सीकारक है, अतः Cl⁻ को ऑक्सीकृत नहीं कर सकता।',
      formula: '$$\\text{Br}_2+2\\text{Cl}^-\\nrightarrow$$'
    },
    {
      d: 'H',
      q_en: 'Which halide ion is the strongest reductant, and why?',
      q_hi: 'कौन-सा हैलाइड आयन प्रबलतम अपचायक है और क्यों?',
      a_en: 'I⁻: it is the largest, loosely held anion, so it loses its electron most easily.',
      a_hi: 'I⁻: यह सबसे बड़ा, शिथिल बंधित आयन है, अतः e⁻ सबसे आसानी से त्यागता है।',
      formula: '$$\\text{I}^->\\text{Br}^->\\text{Cl}^->\\text{F}^-$$'
    },
    {
      d: 'H',
      q_en: 'Why does Zn liberate H2 from dilute HCl while Cu does not?',
      q_hi: 'Zn तनु HCl से H2 मुक्त करता है पर Cu क्यों नहीं?',
      a_en: 'Zn loses electrons more readily than H2 does (it lies above H), whereas Cu loses them less readily.',
      a_hi: 'Zn, H2 से अधिक सरलता से e⁻ त्यागता है (H से ऊपर), जबकि Cu कम सरलता से।',
      formula: '$$\\text{Zn}+2\\text{H}^+\\rightarrow\\text{Zn}^{2+}+\\text{H}_2$$'
    },
    {
      d: 'H',
      q_en: 'Will Cl2 react with a solution of KF? Explain with electron tendency.',
      q_hi: 'क्या Cl2, KF विलयन से अभिक्रिया करेगा? e⁻ प्रवृत्ति के आधार पर समझाइए।',
      a_en: 'No. F⁻ holds its electron more strongly than Cl⁻, and Cl2 is too weak an oxidant to take it.',
      a_hi: 'नहीं। F⁻ अपना e⁻ Cl⁻ से अधिक दृढ़ता से रखता है और Cl2 उसे लेने में असमर्थ है।',
      formula: '$$\\text{Cl}_2+2\\text{F}^-\\nrightarrow$$'
    }
  ],

  /* ---------- SET 3: Oxidation Number: Rules & Standard Calculations ---------- */
  3: [
    {
      d: 'E',
      q_en: 'Define oxidation number.',
      q_hi: 'ऑक्सीकरण संख्या (oxidation number) परिभाषित कीजिए।',
      a_en: 'The apparent charge on an atom if all bonds were 100% ionic, with shared electrons given to the more electronegative atom.',
      a_hi: 'किसी परमाणु पर आभासी आवेश यदि सभी बंध 100% आयनिक माने जाएँ और साझे e⁻ अधिक विद्युत-ऋणात्मक को दिए जाएँ।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'State oxidation numbers of free elements, alkali metals, alkaline earth metals, Al and F.',
      q_hi: 'मुक्त तत्व, क्षार धातु, क्षारीय मृदा धातु, Al व F की ऑक्सीकरण संख्याएँ बताइए।',
      a_en: 'Free element 0; alkali metals +1; alkaline earth +2; Al +3; fluorine always −1.',
      a_hi: 'मुक्त तत्व 0; क्षार धातुएँ +1; क्षारीय मृदा +2; Al +3; फ्लोरीन सदैव −1।',
      formula: '$$\\text{Na}^{+1},\\ \\text{Ca}^{+2},\\ \\text{Al}^{+3},\\ \\text{F}^{-1}$$'
    },
    {
      d: 'E',
      q_en: 'What is the usual oxidation number of hydrogen, and its exception?',
      q_hi: 'हाइड्रोजन की सामान्य ऑक्सीकरण संख्या व उसका अपवाद क्या है?',
      a_en: '+1 normally; −1 in ionic metal hydrides such as NaH, CaH2 and LiAlH4.',
      a_hi: 'सामान्यतः +1; आयनिक धात्विक हाइड्राइडों (NaH, CaH2, LiAlH4) में −1।',
      formula: '$$\\text{Na}\\text{H}^{-1}$$'
    },
    {
      d: 'E',
      q_en: 'What is the usual oxidation number of oxygen, and its exceptions?',
      q_hi: 'ऑक्सीजन की सामान्य ऑक्सीकरण संख्या व अपवाद क्या हैं?',
      a_en: '−2 normally; −1 in peroxides (H2O2, Na2O2); −½ in superoxides (KO2); +1 in O2F2; +2 in OF2.',
      a_hi: 'सामान्यतः −2; परॉक्साइडों में −1; सुपरऑक्साइड (KO2) में −½; O2F2 में +1; OF2 में +2।',
      formula: '$$\\text{O}^{-2},\\ \\text{O}^{-1},\\ \\text{O}^{-1/2}$$'
    },
    {
      d: 'E',
      q_en: 'What must the sum of oxidation numbers equal in a neutral compound and in an ion?',
      q_hi: 'उदासीन यौगिक व आयन में ऑक्सीकरण संख्याओं का योग क्या होता है?',
      a_en: 'Zero for a neutral compound; equal to the net charge for an ion.',
      a_hi: 'उदासीन यौगिक में शून्य; आयन में उसके कुल आवेश के बराबर।',
      formula: '$$\\sum\\text{O.N.}=\\text{charge}$$'
    },
    {
      d: 'M',
      q_en: 'Find the oxidation number of Mn in KMnO4.',
      q_hi: 'KMnO4 में Mn की ऑक्सीकरण संख्या ज्ञात कीजिए।',
      a_en: '+1 + x + 4(−2) = 0, so x = +7.',
      a_hi: '+1 + x + 4(−2) = 0, अतः x = +7।',
      formula: '$$1+x-8=0\\Rightarrow x=+7$$'
    },
    {
      d: 'M',
      q_en: 'Find the oxidation number of Cr in K2Cr2O7.',
      q_hi: 'K2Cr2O7 में Cr की ऑक्सीकरण संख्या ज्ञात कीजिए।',
      a_en: '2(+1) + 2x + 7(−2) = 0, so x = +6.',
      a_hi: '2(+1) + 2x + 7(−2) = 0, अतः x = +6।',
      formula: '$$2+2x-14=0\\Rightarrow x=+6$$'
    },
    {
      d: 'M',
      q_en: 'Find the oxidation number of S in H2SO4, N in HNO3 and Cl in HClO4.',
      q_hi: 'H2SO4 में S, HNO3 में N व HClO4 में Cl की ऑक्सीकरण संख्या ज्ञात कीजिए।',
      a_en: 'S = +6, N = +5, Cl = +7 (each equals its group valence).',
      a_hi: 'S = +6, N = +5, Cl = +7 (प्रत्येक अपनी समूह संयोजकता के बराबर)।',
      formula: '$$\\text{H}_2\\text{S}^{+6}\\text{O}_4,\\ \\text{HN}^{+5}\\text{O}_3,\\ \\text{HCl}^{+7}\\text{O}_4$$'
    },
    {
      d: 'M',
      q_en: 'Find the oxidation number of P in H4P2O7.',
      q_hi: 'H4P2O7 में P की ऑक्सीकरण संख्या ज्ञात कीजिए।',
      a_en: '4(+1) + 2x + 7(−2) = 0, so x = +5.',
      a_hi: '4(+1) + 2x + 7(−2) = 0, अतः x = +5।',
      formula: '$$4+2x-14=0\\Rightarrow x=+5$$'
    },
    {
      d: 'M',
      q_en: 'Find the oxidation number of B in NaBH4.',
      q_hi: 'NaBH4 में B की ऑक्सीकरण संख्या ज्ञात कीजिए।',
      a_en: 'Na = +1 and H = −1 (hydride), so +1 + x − 4 = 0 and x = +3.',
      a_hi: 'Na = +1 व H = −1 (हाइड्राइड), अतः +1 + x − 4 = 0 और x = +3।',
      formula: '$$1+x+4(-1)=0\\Rightarrow x=+3$$'
    },
    {
      d: 'H',
      q_en: 'Find the oxidation number of O in KO2, O2F2 and OF2.',
      q_hi: 'KO2, O2F2 व OF2 में O की ऑक्सीकरण संख्या ज्ञात कीजिए।',
      a_en: 'KO2: −½ (superoxide); O2F2: +1; OF2: +2 (F is more electronegative).',
      a_hi: 'KO2: −½ (सुपरऑक्साइड); O2F2: +1; OF2: +2 (F अधिक विद्युत-ऋणात्मक)।',
      formula: '$$\\text{K}\\text{O}_2^{-1/2},\\ \\text{O}_2^{+1}\\text{F}_2,\\ \\text{O}^{+2}\\text{F}_2$$'
    },
    {
      d: 'H',
      q_en: 'What is the maximum oxidation number, and the general range of oxidation numbers?',
      q_hi: 'अधिकतम ऑक्सीकरण संख्या क्या है और ऑक्सीकरण संख्याओं की सामान्य परास क्या है?',
      a_en: 'Maximum +8 (OsO4, XeO4). For a p-block group G, range is (G − 8) to G.',
      a_hi: 'अधिकतम +8 (OsO4, XeO4)। p-ब्लॉक समूह G के लिए परास (G − 8) से G।',
      formula: '$$(G-8)\\ \\text{to}\\ G$$'
    },
    {
      d: 'H',
      q_en: 'Find the oxidation numbers of H and Al in LiAlH4.',
      q_hi: 'LiAlH4 में H व Al की ऑक्सीकरण संख्याएँ ज्ञात कीजिए।',
      a_en: 'Li = +1, H = −1 (hydride), so Al = +3.',
      a_hi: 'Li = +1, H = −1 (हाइड्राइड), अतः Al = +3।',
      formula: '$$+1+x+4(-1)=0\\Rightarrow x=+3$$'
    },
    {
      d: 'H',
      q_en: 'Find the oxidation number of Fe in K4[Fe(CN)6].',
      q_hi: 'K4[Fe(CN)6] में Fe की ऑक्सीकरण संख्या ज्ञात कीजिए।',
      a_en: '4(+1) + x + 6(−1) = 0, so Fe = +2.',
      a_hi: '4(+1) + x + 6(−1) = 0, अतः Fe = +2।',
      formula: '$$4+x-6=0\\Rightarrow x=+2$$'
    },
    {
      d: 'H',
      q_en: 'What are the oxidation numbers of the metal in Ni(CO)4 and Fe(CO)5?',
      q_hi: 'Ni(CO)4 व Fe(CO)5 में धातु की ऑक्सीकरण संख्याएँ क्या हैं?',
      a_en: 'Zero for both, because CO is a neutral ligand.',
      a_hi: 'दोनों में शून्य, क्योंकि CO उदासीन लिगैंड है।',
      formula: '$$\\text{Ni}^{0}(\\text{CO})_4,\\ \\text{Fe}^{0}(\\text{CO})_5$$'
    }
  ],

  /* ---------- SET 4: Special Oxidation Number Paradoxes & Structure-Based Traps ---------- */
  4: [
    {
      d: 'E',
      q_en: 'Caro\'s acid H2SO5: formula gives S = +8. What is the true oxidation number?',
      q_hi: 'कैरो अम्ल H2SO5: सूत्र से S = +8 आता है। वास्तविक ऑक्सीकरण संख्या क्या है?',
      a_en: '+6. It has one peroxide (–O–O–) linkage, so two O are −1 and the rest −2.',
      a_hi: '+6। इसमें एक परॉक्साइड (–O–O–) बंध है, अतः दो O −1 व शेष −2 हैं।',
      formula: '$$2+x+2(-1)+3(-2)=0\\Rightarrow x=+6$$'
    },
    {
      d: 'E',
      q_en: 'Marshall\'s acid H2S2O8: what is the true oxidation number of S?',
      q_hi: 'मार्शल अम्ल H2S2O8 में S की वास्तविक ऑक्सीकरण संख्या क्या है?',
      a_en: '+6. One –O–O– peroxide linkage (two O at −1); the formula-only calculation wrongly gives +7.',
      a_hi: '+6। एक –O–O– परॉक्साइड बंध (दो O −1); केवल सूत्र से गणना करने पर गलत +7 आता है।',
      formula: '$$2+2x+2(-1)+6(-2)=0\\Rightarrow x=+6$$'
    },
    {
      d: 'E',
      q_en: 'Why does the calculated oxidation number of CrO5 come out as +10?',
      q_hi: 'CrO5 में गणना से ऑक्सीकरण संख्या +10 क्यों आती है?',
      a_en: 'Because all five O are wrongly taken as −2; Cr cannot exceed +6 as it has only 6 valence electrons.',
      a_hi: 'क्योंकि पाँचों O को गलती से −2 माना गया; Cr के 6 संयोजी e⁻ हैं, अतः +6 से अधिक नहीं हो सकता।',
      formula: '$$x+5(-2)=0\\Rightarrow x=+10\\ (\\text{wrong})$$'
    },
    {
      d: 'E',
      q_en: 'Why can a calculated oxidation number exceed the group number?',
      q_hi: 'गणना से प्राप्त ऑक्सीकरण संख्या समूह संख्या से अधिक क्यों हो सकती है?',
      a_en: 'Peroxide linkages put O at −1, not −2; assuming −2 everywhere overstates the central atom\'s oxidation number.',
      a_hi: 'परॉक्साइड बंध में O −1 होता है, −2 नहीं; सभी O को −2 मानने से केंद्रीय परमाणु की संख्या बढ़कर आती है।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What is the difference between average and individual oxidation numbers?',
      q_hi: 'औसत व वैयक्तिक ऑक्सीकरण संख्या में अंतर क्या है?',
      a_en: 'Individual numbers are for atoms in different environments (from structure); the average is their mean and may be fractional.',
      a_hi: 'वैयक्तिक संख्या भिन्न परिवेश के परमाणुओं की (संरचना से) होती है; औसत उनका माध्य है, जो भिन्नात्मक हो सकता है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Give the individual oxidation numbers of Fe in Fe3O4.',
      q_hi: 'Fe3O4 में Fe की वैयक्तिक ऑक्सीकरण संख्याएँ दीजिए।',
      a_en: 'Fe3O4 = FeO·Fe2O3: Fe is +2, +3, +3 (average +8/3).',
      a_hi: 'Fe3O4 = FeO·Fe2O3: Fe +2, +3, +3 (औसत +8/3)।',
      formula: '$$\\text{FeO}\\cdot\\text{Fe}_2\\text{O}_3\\Rightarrow+2,+3,+3$$'
    },
    {
      d: 'M',
      q_en: 'Give the individual oxidation numbers of Pb in Pb3O4.',
      q_hi: 'Pb3O4 में Pb की वैयक्तिक ऑक्सीकरण संख्याएँ दीजिए।',
      a_en: 'Pb3O4 = 2PbO·PbO2: Pb is +2, +2, +4 (average +8/3).',
      a_hi: 'Pb3O4 = 2PbO·PbO2: Pb +2, +2, +4 (औसत +8/3)।',
      formula: '$$2\\text{PbO}\\cdot\\text{PbO}_2\\Rightarrow+2,+2,+4$$'
    },
    {
      d: 'M',
      q_en: 'What are the oxidation numbers of Cl in bleaching powder Ca(OCl)Cl?',
      q_hi: 'विरंजक चूर्ण Ca(OCl)Cl में Cl की ऑक्सीकरण संख्याएँ क्या हैं?',
      a_en: 'Cl is +1 in OCl⁻ and −1 in Cl⁻ (two different Cl atoms).',
      a_hi: 'OCl⁻ में Cl +1 तथा Cl⁻ में −1 (दो भिन्न Cl परमाणु)।',
      formula: '$$\\text{Ca}(\\text{O}\\text{Cl}^{+1})\\text{Cl}^{-1}$$'
    },
    {
      d: 'M',
      q_en: 'What are the oxidation numbers of N in NH4NO3?',
      q_hi: 'NH4NO3 में N की ऑक्सीकरण संख्याएँ क्या हैं?',
      a_en: 'N is −3 in NH4⁺ and +5 in NO3⁻; the average is +1.',
      a_hi: 'NH4⁺ में N −3 तथा NO3⁻ में +5; औसत +1।',
      formula: '$$\\text{N}^{-3}\\text{H}_4^+\\ ,\\ \\text{N}^{+5}\\text{O}_3^-$$'
    },
    {
      d: 'M',
      q_en: 'Compare oxidation numbers in HCN and its isomer HNC.',
      q_hi: 'HCN व उसके समावयवी HNC में ऑक्सीकरण संख्याओं की तुलना कीजिए।',
      a_en: 'Both give H = +1, C = +2, N = −3. Oxidation numbers cannot tell isomers apart.',
      a_hi: 'दोनों में H = +1, C = +2, N = −3। ऑक्सीकरण संख्या से समावयवी अलग नहीं पहचाने जा सकते।',
      formula: '$$\\text{H}^{+1}\\text{C}^{+2}\\text{N}^{-3}$$'
    },
    {
      d: 'H',
      q_en: 'C3O2 (O=C=C=C=O): find each carbon\'s oxidation number and the average.',
      q_hi: 'C3O2 (O=C=C=C=O): प्रत्येक कार्बन की ऑक्सीकरण संख्या व औसत ज्ञात कीजिए।',
      a_en: 'Terminal C = +2, central C = 0, terminal C = +2; average = +4/3.',
      a_hi: 'सिरे का C = +2, मध्य C = 0, सिरे का C = +2; औसत = +4/3।',
      formula: '$$\\overset{+2}{\\text{C}}=\\overset{0}{\\text{C}}=\\overset{+2}{\\text{C}}\\Rightarrow\\tfrac{4}{3}$$'
    },
    {
      d: 'H',
      q_en: 'Br3O8: find individual oxidation numbers of Br and the average.',
      q_hi: 'Br3O8: Br की वैयक्तिक ऑक्सीकरण संख्याएँ व औसत ज्ञात कीजिए।',
      a_en: 'Br is +6, +4, +6 (average +16/3).',
      a_hi: 'Br +6, +4, +6 (औसत +16/3)।',
      formula: '$$\\text{Br}_3\\text{O}_8\\Rightarrow+6,+4,+6$$'
    },
    {
      d: 'H',
      q_en: 'Na2S4O6 (tetrathionate): give each S oxidation number and the average.',
      q_hi: 'Na2S4O6 (टेट्राथायोनेट): प्रत्येक S की ऑक्सीकरण संख्या व औसत दीजिए।',
      a_en: 'S atoms: +5, 0, 0, +5 (the two middle S are bonded only to S); average = +2.5.',
      a_hi: 'S परमाणु: +5, 0, 0, +5 (मध्य के दो S केवल S से बंधित); औसत = +2.5।',
      formula: '$$\\bar{x}=\\frac{5+0+0+5}{4}=+2.5$$'
    },
    {
      d: 'H',
      q_en: 'Describe the true oxidation states in CrO5 (butterfly structure).',
      q_hi: 'CrO5 (तितली संरचना) की वास्तविक ऑक्सीकरण अवस्थाएँ बताइए।',
      a_en: 'Cr = +6; two –O–O– peroxide groups (4 O at −1) and one oxo O at −2: 6 − 4 − 2 = 0.',
      a_hi: 'Cr = +6; दो –O–O– परॉक्साइड समूह (4 O पर −1) व एक ऑक्सो O (−2): 6 − 4 − 2 = 0।',
      formula: '$$x+4(-1)+1(-2)=0\\Rightarrow x=+6$$'
    },
    {
      d: 'H',
      q_en: 'Na2S2O3 (thiosulfate): find the individual and average oxidation numbers of S.',
      q_hi: 'Na2S2O3 (थायोसल्फेट): S की वैयक्तिक व औसत ऑक्सीकरण संख्याएँ ज्ञात कीजिए।',
      a_en: 'Central S = +6, terminal (sulphide-type) S = −2; average = +2.',
      a_hi: 'केंद्रीय S = +6, सिरे का (सल्फाइड प्रकार) S = −2; औसत = +2।',
      formula: '$$\\bar{x}=\\frac{+6-2}{2}=+2$$'
    }
  ],

  /* ---------- SET 5: Stock Notation & Oxidation/Reduction by Oxidation Number ---------- */
  5: [
    {
      d: 'E',
      q_en: 'Write HAuCl4 in Stock notation.',
      q_hi: 'HAuCl4 को स्टॉक संकेतन (Stock notation) में लिखिए।',
      a_en: 'HAu(III)Cl4: the Roman numeral in brackets shows Au in +3 state.',
      a_hi: 'HAu(III)Cl4: कोष्ठक में रोमन अंक Au की +3 अवस्था दर्शाता है।',
      formula: '$$\\text{HAuCl}_4\\rightarrow\\text{HAu(III)Cl}_4$$'
    },
    {
      d: 'E',
      q_en: 'Write FeO and Fe2O3 in Stock notation.',
      q_hi: 'FeO व Fe2O3 को स्टॉक संकेतन में लिखिए।',
      a_en: 'FeO = Fe(II)O; Fe2O3 = Fe2(III)O3.',
      a_hi: 'FeO = Fe(II)O; Fe2O3 = Fe2(III)O3।',
      formula: '$$\\text{Fe(II)O},\\ \\text{Fe}_2\\text{(III)O}_3$$'
    },
    {
      d: 'E',
      q_en: 'Write CuI and CuO in Stock notation.',
      q_hi: 'CuI व CuO को स्टॉक संकेतन में लिखिए।',
      a_en: 'CuI = Cu(I)I; CuO = Cu(II)O.',
      a_hi: 'CuI = Cu(I)I; CuO = Cu(II)O।',
      formula: '$$\\text{Cu(I)I},\\ \\text{Cu(II)O}$$'
    },
    {
      d: 'E',
      q_en: 'Write MnO2 and V2O5 in Stock notation.',
      q_hi: 'MnO2 व V2O5 को स्टॉक संकेतन में लिखिए।',
      a_en: 'MnO2 = Mn(IV)O2; V2O5 = V2(V)O5.',
      a_hi: 'MnO2 = Mn(IV)O2; V2O5 = V2(V)O5।',
      formula: '$$\\text{Mn(IV)O}_2,\\ \\text{V}_2\\text{(V)O}_5$$'
    },
    {
      d: 'E',
      q_en: 'Define oxidation, reduction, oxidant and reductant by oxidation number.',
      q_hi: 'ऑक्सीकरण संख्या के आधार पर ऑक्सीकरण, अपचयन, ऑक्सीकारक, अपचायक परिभाषित कीजिए।',
      a_en: 'Oxidation: O.N. increases. Reduction: O.N. decreases. Oxidant\'s O.N. decreases; reductant\'s increases.',
      a_hi: 'ऑक्सीकरण: O.N. बढ़ती है। अपचयन: घटती है। ऑक्सीकारक की O.N. घटती है; अपचायक की बढ़ती है।',
      formula: '$$\\text{Ox.}:\\uparrow\\text{O.N.};\\ \\text{Red.}:\\downarrow\\text{O.N.}$$'
    },
    {
      d: 'M',
      q_en: 'Write Tl2O in Stock notation.',
      q_hi: 'Tl2O को स्टॉक संकेतन में लिखिए।',
      a_en: 'Tl2(I)O, since thallium is +1.',
      a_hi: 'Tl2(I)O, क्योंकि थैलियम +1 है।',
      formula: '$$\\text{Tl}_2\\text{O}\\rightarrow\\text{Tl}_2\\text{(I)O}$$'
    },
    {
      d: 'M',
      q_en: 'Which compounds can act only as oxidising agents? Give examples.',
      q_hi: 'कौन-से यौगिक केवल ऑक्सीकारक की भाँति कार्य कर सकते हैं? उदाहरण दीजिए।',
      a_en: 'Those with the central atom at its highest O.N.: KMnO4, K2Cr2O7, HNO3, H2SO4, HClO4.',
      a_hi: 'जिनमें केंद्रीय परमाणु अपनी उच्चतम O.N. पर हो: KMnO4, K2Cr2O7, HNO3, H2SO4, HClO4।',
      formula: '$$\\text{Mn}^{+7},\\ \\text{Cr}^{+6},\\ \\text{N}^{+5},\\ \\text{S}^{+6},\\ \\text{Cl}^{+7}$$'
    },
    {
      d: 'M',
      q_en: 'Which compounds can act only as reducing agents?',
      q_hi: 'कौन-से यौगिक केवल अपचायक की भाँति कार्य कर सकते हैं?',
      a_en: 'Those with the central atom at its lowest O.N.: H2S, HI, HBr, NH3.',
      a_hi: 'जिनमें केंद्रीय परमाणु अपनी निम्नतम O.N. पर हो: H2S, HI, HBr, NH3।',
      formula: '$$\\text{S}^{-2},\\ \\text{I}^{-1},\\ \\text{Br}^{-1},\\ \\text{N}^{-3}$$'
    },
    {
      d: 'M',
      q_en: 'Which compounds can act as both oxidant and reductant?',
      q_hi: 'कौन-से यौगिक ऑक्सीकारक व अपचायक दोनों हो सकते हैं?',
      a_en: 'Those with the central atom in an intermediate O.N.: H2O2, SO2, HNO2, MnO2.',
      a_hi: 'जिनमें केंद्रीय परमाणु मध्यवर्ती O.N. पर हो: H2O2, SO2, HNO2, MnO2।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Why is MnO2 able to act as both oxidant and reductant?',
      q_hi: 'MnO2 ऑक्सीकारक व अपचायक दोनों क्यों हो सकता है?',
      a_en: 'Mn is +4, between its lowest (+2) and highest (+7) states, so it can be reduced or oxidised.',
      a_hi: 'Mn +4 पर है, जो निम्नतम (+2) व उच्चतम (+7) के बीच है; अतः अपचयित व ऑक्सीकृत दोनों हो सकता है।',
      formula: '$$\\text{Mn}^{+2}<\\text{Mn}^{+4}<\\text{Mn}^{+7}$$'
    },
    {
      d: 'H',
      q_en: 'Why do HNO2 and SO2 act as both, but HNO3 and H2SO4 only as oxidants?',
      q_hi: 'HNO2 व SO2 दोनों की भाँति पर HNO3 व H2SO4 केवल ऑक्सीकारक क्यों हैं?',
      a_en: 'N (+3) and S (+4) are intermediate; in HNO3 (+5) and H2SO4 (+6) they are at the maximum, so they can only decrease.',
      a_hi: 'N (+3) व S (+4) मध्यवर्ती हैं; HNO3 (+5) व H2SO4 (+6) में वे अधिकतम पर हैं, अतः केवल घट सकती हैं।',
      formula: '$$\\text{N}^{+3}\\ (\\text{both}),\\ \\text{N}^{+5}\\ (\\text{oxidant only})$$'
    },
    {
      d: 'H',
      q_en: 'Can F2 act as a reducing agent?',
      q_hi: 'क्या F2 अपचायक की भाँति कार्य कर सकता है?',
      a_en: 'No. F has no positive oxidation state (most electronegative), so F2 (0) can only be reduced to F⁻.',
      a_hi: 'नहीं। F की कोई धनात्मक अवस्था नहीं (सर्वाधिक विद्युत-ऋणात्मक), अतः F2 (0) केवल F⁻ में अपचयित हो सकता है।',
      formula: '$$\\text{F}_2+2e^-\\rightarrow2\\text{F}^-$$'
    },
    {
      d: 'H',
      q_en: 'Why can H2O2 act as both oxidant and reductant?',
      q_hi: 'H2O2 ऑक्सीकारक व अपचायक दोनों क्यों है?',
      a_en: 'O is −1, between −2 and 0. It is reduced to H2O (−2) or oxidised to O2 (0).',
      a_hi: 'O −1 पर है, −2 व 0 के बीच। यह H2O (−2) में अपचयित या O2 (0) में ऑक्सीकृत हो सकता है।',
      formula: '$$\\text{O}^{-1}\\rightarrow\\text{O}^{-2}\\ \\text{or}\\ \\text{O}^{0}$$'
    },
    {
      d: 'H',
      q_en: 'Classify NH3, N2, HNO2, HNO3 as only oxidant, only reductant or both.',
      q_hi: 'NH3, N2, HNO2, HNO3 को केवल ऑक्सीकारक, केवल अपचायक या दोनों में वर्गीकृत कीजिए।',
      a_en: 'NH3 (−3): only reductant. N2 (0) and HNO2 (+3): both. HNO3 (+5): only oxidant.',
      a_hi: 'NH3 (−3): केवल अपचायक। N2 (0) व HNO2 (+3): दोनों। HNO3 (+5): केवल ऑक्सीकारक।',
      formula: '$$-3<0<+3<+5$$'
    },
    {
      d: 'H',
      q_en: 'In 2KMnO4 + 16HCl → 2KCl + 2MnCl2 + 5Cl2 + 8H2O, what changes in oxidation number occur?',
      q_hi: 'इस अभिक्रिया में ऑक्सीकरण संख्या में क्या परिवर्तन होते हैं: KMnO4 + HCl → MnCl2 + Cl2?',
      a_en: 'Mn: +7 → +2 (reduced, gains 5e⁻); Cl: −1 → 0 (oxidised). KMnO4 is the oxidant, HCl the reductant.',
      a_hi: 'Mn: +7 → +2 (अपचयित, 5e⁻ ग्रहण); Cl: −1 → 0 (ऑक्सीकृत)। KMnO4 ऑक्सीकारक, HCl अपचायक।',
      formula: '$$\\text{Mn}^{+7}+5e^-\\rightarrow\\text{Mn}^{+2}$$'
    }
  ],

  /* ---------- SET 6: Types of Redox Reactions: Combination, Decomposition & Displacement ---------- */
  6: [
    {
      d: 'E',
      q_en: 'What condition makes a combination reaction a redox reaction?',
      q_hi: 'संयोजन अभिक्रिया रेडॉक्स कब होती है?',
      a_en: 'At least one reactant must be in elemental form, e.g. C + O2 → CO2.',
      a_hi: 'कम से कम एक अभिकारक तत्व रूप में होना चाहिए, जैसे C + O2 → CO2।',
      formula: '$$\\text{C}+\\text{O}_2\\rightarrow\\text{CO}_2$$'
    },
    {
      d: 'E',
      q_en: 'Why is CaO + CO2 → CaCO3 not a redox reaction?',
      q_hi: 'CaO + CO2 → CaCO3 रेडॉक्स क्यों नहीं है?',
      a_en: 'No element is in free form and no oxidation number changes (Ca +2, C +4, O −2 throughout).',
      a_hi: 'कोई तत्व मुक्त नहीं और किसी की ऑक्सीकरण संख्या नहीं बदलती (Ca +2, C +4, O −2 सर्वत्र)।',
      formula: '$$\\text{CaO}+\\text{CO}_2\\rightarrow\\text{CaCO}_3$$'
    },
    {
      d: 'E',
      q_en: 'Is the decomposition of water a redox reaction?',
      q_hi: 'क्या जल का अपघटन रेडॉक्स अभिक्रिया है?',
      a_en: 'Yes: H is reduced (+1 → 0) and O is oxidised (−2 → 0).',
      a_hi: 'हाँ: H अपचयित (+1 → 0) और O ऑक्सीकृत (−2 → 0)।',
      formula: '$$2\\text{H}_2\\text{O}\\rightarrow2\\text{H}_2+\\text{O}_2$$'
    },
    {
      d: 'E',
      q_en: 'Why is the decomposition of KClO3 called intramolecular redox?',
      q_hi: 'KClO3 के अपघटन को अंतराआण्विक रेडॉक्स क्यों कहते हैं?',
      a_en: 'Cl is reduced (+5 → −1) and O is oxidised (−2 → 0) within the same compound.',
      a_hi: 'एक ही यौगिक में Cl अपचयित (+5 → −1) और O ऑक्सीकृत (−2 → 0) होता है।',
      formula: '$$2\\text{KClO}_3\\rightarrow2\\text{KCl}+3\\text{O}_2$$'
    },
    {
      d: 'E',
      q_en: 'Is CaCO3 → CaO + CO2 a redox reaction?',
      q_hi: 'क्या CaCO3 → CaO + CO2 रेडॉक्स अभिक्रिया है?',
      a_en: 'No. No element changes its oxidation number; it is a simple decomposition.',
      a_hi: 'नहीं। किसी तत्व की ऑक्सीकरण संख्या नहीं बदलती; यह साधारण अपघटन है।',
      formula: '$$\\text{CaCO}_3\\rightarrow\\text{CaO}+\\text{CO}_2$$'
    },
    {
      d: 'M',
      q_en: 'Give a metal displacement redox reaction and identify the changes.',
      q_hi: 'धातु विस्थापन रेडॉक्स अभिक्रिया दीजिए और परिवर्तन पहचानिए।',
      a_en: 'Zn displaces Cu: Zn (0 → +2) oxidised; Cu²⁺ (+2 → 0) reduced.',
      a_hi: 'Zn, Cu को विस्थापित करता है: Zn (0 → +2) ऑक्सीकृत; Cu²⁺ (+2 → 0) अपचयित।',
      formula: '$$\\text{CuSO}_4+\\text{Zn}\\rightarrow\\text{Cu}+\\text{ZnSO}_4$$'
    },
    {
      d: 'M',
      q_en: 'What is the thermite reaction? Identify oxidant and reductant.',
      q_hi: 'थर्माइट अभिक्रिया क्या है? ऑक्सीकारक व अपचायक पहचानिए।',
      a_en: 'Al reduces Cr2O3 to Cr: Al is the reductant (0 → +3); Cr2O3 is the oxidant (+3 → 0).',
      a_hi: 'Al, Cr2O3 को Cr में अपचयित करता है: Al अपचायक (0 → +3); Cr2O3 ऑक्सीकारक (+3 → 0)।',
      formula: '$$\\text{Cr}_2\\text{O}_3+2\\text{Al}\\rightarrow\\text{Al}_2\\text{O}_3+2\\text{Cr}$$'
    },
    {
      d: 'M',
      q_en: 'Show TiCl4 + 2Mg → Ti + 2MgCl2 is a metal displacement redox reaction.',
      q_hi: 'दर्शाइए कि TiCl4 + 2Mg → Ti + 2MgCl2 धातु विस्थापन रेडॉक्स है।',
      a_en: 'Mg is oxidised (0 → +2) and Ti is reduced (+4 → 0); Mg is the reductant.',
      a_hi: 'Mg ऑक्सीकृत (0 → +2) व Ti अपचयित (+4 → 0); Mg अपचायक है।',
      formula: '$$\\text{Ti}^{+4}+4e^-\\rightarrow\\text{Ti}^{0}$$'
    },
    {
      d: 'M',
      q_en: 'How do Na, Mg and Fe differ in displacing hydrogen from water?',
      q_hi: 'जल से H2 विस्थापन में Na, Mg व Fe में क्या अंतर है?',
      a_en: 'Na (and K, Ca) react with cold water; Mg with hot water; Fe only with steam.',
      a_hi: 'Na (तथा K, Ca) ठंडे जल से; Mg गर्म जल से; Fe केवल भाप से अभिक्रिया करता है।',
      formula: '$$2\\text{Na}+2\\text{H}_2\\text{O}\\rightarrow2\\text{NaOH}+\\text{H}_2$$'
    },
    {
      d: 'M',
      q_en: 'Give a halogen displacement redox reaction.',
      q_hi: 'हैलोजन विस्थापन रेडॉक्स अभिक्रिया का उदाहरण दीजिए।',
      a_en: 'Cl2 oxidises Br⁻ to Br2 while it is reduced to Cl⁻.',
      a_hi: 'Cl2, Br⁻ को Br2 में ऑक्सीकृत करता है और स्वयं Cl⁻ में अपचयित होता है।',
      formula: '$$\\text{Cl}_2+2\\text{KBr}\\rightarrow2\\text{KCl}+\\text{Br}_2$$'
    },
    {
      d: 'H',
      q_en: 'Why must a combination redox reaction have an element as reactant?',
      q_hi: 'संयोजन रेडॉक्स अभिक्रिया में अभिकारक के रूप में तत्व क्यों आवश्यक है?',
      a_en: 'A free element has O.N. 0, which must change when it becomes part of a compound.',
      a_hi: 'मुक्त तत्व की O.N. 0 होती है, जो यौगिक बनने पर अवश्य बदलती है।',
      formula: '$$\\text{N}_2+\\text{O}_2\\rightarrow2\\text{NO}$$'
    },
    {
      d: 'H',
      q_en: 'Is every decomposition reaction a redox reaction? Give a contrast.',
      q_hi: 'क्या प्रत्येक अपघटन अभिक्रिया रेडॉक्स होती है? विरोधाभासी उदाहरण दीजिए।',
      a_en: 'No. 2KClO3 → 2KCl + 3O2 is redox; CaCO3 → CaO + CO2 is not, as no O.N. changes.',
      a_hi: 'नहीं। 2KClO3 → 2KCl + 3O2 रेडॉक्स है; CaCO3 → CaO + CO2 नहीं, क्योंकि कोई O.N. नहीं बदलती।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Show that NH4NO2 → N2 + 2H2O is an intramolecular redox reaction.',
      q_hi: 'दर्शाइए कि NH4NO2 → N2 + 2H2O अंतराआण्विक रेडॉक्स है।',
      a_en: 'N in NH4⁺ is oxidised (−3 → 0) and N in NO2⁻ is reduced (+3 → 0).',
      a_hi: 'NH4⁺ का N ऑक्सीकृत (−3 → 0) और NO2⁻ का N अपचयित (+3 → 0)।',
      formula: '$$\\text{N}^{-3}+\\text{N}^{+3}\\rightarrow2\\text{N}^{0}$$'
    },
    {
      d: 'H',
      q_en: 'Why does Cu react with HNO3 but not with dilute HCl?',
      q_hi: 'Cu, HNO3 से अभिक्रिया करता है पर तनु HCl से क्यों नहीं?',
      a_en: 'Cu cannot displace H2 (it lies below H), but NO3⁻ is an oxidant that oxidises Cu.',
      a_hi: 'Cu, H2 को विस्थापित नहीं कर सकता (H से नीचे), पर NO3⁻ ऑक्सीकारक है जो Cu को ऑक्सीकृत करता है।',
      formula: '$$\\text{Cu}+4\\text{HNO}_3\\rightarrow\\text{Cu(NO}_3)_2+2\\text{NO}_2+2\\text{H}_2\\text{O}$$'
    },
    {
      d: 'H',
      q_en: 'Iron reacts with steam: name the product and the oxidation number change of Fe.',
      q_hi: 'लोहा भाप से अभिक्रिया करता है: उत्पाद व Fe की O.N. में परिवर्तन बताइए।',
      a_en: 'Fe3O4 and H2 form; Fe goes 0 → +8/3 (oxidised) and H goes +1 → 0 (reduced).',
      a_hi: 'Fe3O4 व H2 बनते हैं; Fe 0 → +8/3 (ऑक्सीकृत) और H +1 → 0 (अपचयित)।',
      formula: '$$3\\text{Fe}+4\\text{H}_2\\text{O}\\rightarrow\\text{Fe}_3\\text{O}_4+4\\text{H}_2$$'
    }
  ],

  /* ---------- SET 7: Disproportionation & Comproportionation Reactions ---------- */
  7: [
    {
      d: 'E',
      q_en: 'Define a disproportionation reaction.',
      q_hi: 'असमानुपातन (disproportionation) अभिक्रिया परिभाषित कीजिए।',
      a_en: 'One element in a single oxidation state is simultaneously oxidised and reduced.',
      a_hi: 'एक ही ऑक्सीकरण अवस्था का तत्व एक साथ ऑक्सीकृत व अपचयित होता है।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'How many oxidation states must the element have to disproportionate?',
      q_hi: 'असमानुपातन के लिए तत्व की कितनी ऑक्सीकरण अवस्थाएँ आवश्यक हैं?',
      a_en: 'At least three: the starting state must lie between a lower and a higher state.',
      a_hi: 'कम से कम तीन: प्रारंभिक अवस्था एक निम्न व एक उच्च अवस्था के बीच होनी चाहिए।',
      formula: '$$\\text{lower}<\\text{initial}<\\text{higher}$$'
    },
    {
      d: 'E',
      q_en: 'Show that decomposition of H2O2 is disproportionation.',
      q_hi: 'दर्शाइए कि H2O2 का अपघटन असमानुपातन है।',
      a_en: 'O is −1 and goes to −2 (in H2O, reduced) and 0 (in O2, oxidised).',
      a_hi: 'O −1 से −2 (H2O में, अपचयित) और 0 (O2 में, ऑक्सीकृत) में जाता है।',
      formula: '$$2\\text{H}_2\\text{O}_2\\rightarrow2\\text{H}_2\\text{O}+\\text{O}_2$$'
    },
    {
      d: 'E',
      q_en: 'What happens to P4 in alkaline medium?',
      q_hi: 'क्षारीय माध्यम में P4 का क्या होता है?',
      a_en: 'P4 (0) disproportionates to PH3 (−3) and H2PO2⁻ (+1).',
      a_hi: 'P4 (0) असमानुपातित होकर PH3 (−3) व H2PO2⁻ (+1) बनाता है।',
      formula: '$$\\text{P}_4+3\\text{OH}^-+3\\text{H}_2\\text{O}\\rightarrow\\text{PH}_3+3\\text{H}_2\\text{PO}_2^-$$'
    },
    {
      d: 'E',
      q_en: 'What is formed when Cl2 reacts with cold dilute NaOH?',
      q_hi: 'Cl2 की ठंडे तनु NaOH से अभिक्रिया में क्या बनता है?',
      a_en: 'NaCl (Cl −1) and NaClO (Cl +1): Cl2 (0) disproportionates.',
      a_hi: 'NaCl (Cl −1) व NaClO (Cl +1): Cl2 (0) असमानुपातित होता है।',
      formula: '$$\\text{Cl}_2+2\\text{NaOH}\\rightarrow\\text{NaCl}+\\text{NaClO}+\\text{H}_2\\text{O}$$'
    },
    {
      d: 'M',
      q_en: 'What is formed when Cl2 reacts with hot concentrated NaOH?',
      q_hi: 'Cl2 की गर्म सांद्र NaOH से अभिक्रिया में क्या बनता है?',
      a_en: 'NaCl (−1) and NaClO3 (+5): Cl goes 0 → −1 and 0 → +5.',
      a_hi: 'NaCl (−1) व NaClO3 (+5): Cl 0 → −1 तथा 0 → +5।',
      formula: '$$3\\text{Cl}_2+6\\text{NaOH}\\rightarrow5\\text{NaCl}+\\text{NaClO}_3+3\\text{H}_2\\text{O}$$'
    },
    {
      d: 'M',
      q_en: 'How does S8 behave in alkali?',
      q_hi: 'क्षार में S8 कैसा व्यवहार करता है?',
      a_en: 'S8 (0) disproportionates to S²⁻ (−2) and S2O3²⁻ (+2).',
      a_hi: 'S8 (0) असमानुपातित होकर S²⁻ (−2) व S2O3²⁻ (+2) देता है।',
      formula: '$$\\text{S}_8\\rightarrow\\text{S}^{2-}+\\text{S}_2\\text{O}_3^{2-}$$'
    },
    {
      d: 'M',
      q_en: 'Why is Cu⁺ unstable in aqueous solution?',
      q_hi: 'जलीय विलयन में Cu⁺ अस्थायी क्यों है?',
      a_en: 'It disproportionates: Cu⁺ (+1) forms Cu²⁺ (+2) and Cu (0).',
      a_hi: 'यह असमानुपातित होता है: Cu⁺ (+1) से Cu²⁺ (+2) व Cu (0) बनते हैं।',
      formula: '$$2\\text{Cu}^+\\rightarrow\\text{Cu}^{2+}+\\text{Cu}$$'
    },
    {
      d: 'M',
      q_en: 'Which chlorine oxyanion cannot disproportionate and why?',
      q_hi: 'कौन-सा क्लोरीन ऑक्सीऋणायन असमानुपातित नहीं होता और क्यों?',
      a_en: 'ClO4⁻: Cl is at its maximum +7, so it can only be reduced, not oxidised.',
      a_hi: 'ClO4⁻: Cl अपनी अधिकतम +7 पर है, अतः केवल अपचयित हो सकता है, ऑक्सीकृत नहीं।',
      formula: '$$\\text{ClO}_4^-\\ (\\text{Cl}=+7)$$'
    },
    {
      d: 'M',
      q_en: 'Define comproportionation with an example.',
      q_hi: 'समानुपातन (comproportionation) उदाहरण सहित परिभाषित कीजिए।',
      a_en: 'Reverse of disproportionation: two states of one element form a single intermediate state, e.g. Ag²⁺ + Ag → 2Ag⁺.',
      a_hi: 'असमानुपातन का उलटा: एक तत्व की दो अवस्थाएँ एक मध्यवर्ती अवस्था बनाती हैं, जैसे Ag²⁺ + Ag → 2Ag⁺।',
      formula: '$$\\text{Ag}^{2+}+\\text{Ag}\\rightarrow2\\text{Ag}^+$$'
    },
    {
      d: 'H',
      q_en: 'Why does F2 never disproportionate in alkali?',
      q_hi: 'F2 क्षार में कभी असमानुपातित क्यों नहीं होता?',
      a_en: 'F cannot show a positive oxidation state, so 0 can only go to −1; it forms F⁻ and OF2 (O oxidised).',
      a_hi: 'F धनात्मक अवस्था नहीं दिखा सकता, अतः 0 केवल −1 तक जाता है; F⁻ व OF2 (O ऑक्सीकृत) बनते हैं।',
      formula: '$$2\\text{F}_2+2\\text{OH}^-\\rightarrow2\\text{F}^-+\\text{OF}_2+\\text{H}_2\\text{O}$$'
    },
    {
      d: 'H',
      q_en: 'ClO⁻ and ClO3⁻ both disproportionate. Write one reaction for each.',
      q_hi: 'ClO⁻ व ClO3⁻ दोनों असमानुपातित होते हैं। प्रत्येक की एक अभिक्रिया लिखिए।',
      a_en: '3ClO⁻ → 2Cl⁻ + ClO3⁻; and 4ClO3⁻ → Cl⁻ + 3ClO4⁻ (on heating).',
      a_hi: '3ClO⁻ → 2Cl⁻ + ClO3⁻; तथा 4ClO3⁻ → Cl⁻ + 3ClO4⁻ (गर्म करने पर)।',
      formula: '$$3\\text{ClO}^-\\rightarrow2\\text{Cl}^-+\\text{ClO}_3^-$$'
    },
    {
      d: 'H',
      q_en: 'How does MnO4²⁻ behave in acidic medium?',
      q_hi: 'अम्लीय माध्यम में MnO4²⁻ कैसा व्यवहार करता है?',
      a_en: 'It disproportionates: Mn (+6) gives MnO4⁻ (+7) and MnO2 (+4).',
      a_hi: 'यह असमानुपातित होता है: Mn (+6) से MnO4⁻ (+7) व MnO2 (+4) बनते हैं।',
      formula: '$$3\\text{MnO}_4^{2-}+4\\text{H}^+\\rightarrow2\\text{MnO}_4^-+\\text{MnO}_2+2\\text{H}_2\\text{O}$$'
    },
    {
      d: 'H',
      q_en: 'Why is I⁻ + IO3⁻ + H⁺ → I2 a comproportionation?',
      q_hi: 'I⁻ + IO3⁻ + H⁺ → I2 समानुपातन क्यों है?',
      a_en: 'I⁻ (−1) is oxidised and IO3⁻ (+5) is reduced, both to the same product I2 (0).',
      a_hi: 'I⁻ (−1) ऑक्सीकृत व IO3⁻ (+5) अपचयित होकर दोनों एक ही उत्पाद I2 (0) बनाते हैं।',
      formula: '$$5\\text{I}^-+\\text{IO}_3^-+6\\text{H}^+\\rightarrow3\\text{I}_2+3\\text{H}_2\\text{O}$$'
    },
    {
      d: 'H',
      q_en: 'Is 2NO2 + 2OH⁻ → NO2⁻ + NO3⁻ + H2O a disproportionation?',
      q_hi: 'क्या 2NO2 + 2OH⁻ → NO2⁻ + NO3⁻ + H2O असमानुपातन है?',
      a_en: 'Yes: N (+4) goes to +3 (in NO2⁻, reduced) and +5 (in NO3⁻, oxidised).',
      a_hi: 'हाँ: N (+4) से +3 (NO2⁻ में, अपचयित) और +5 (NO3⁻ में, ऑक्सीकृत)।',
      formula: '$$\\text{N}^{+4}\\rightarrow\\text{N}^{+3}+\\text{N}^{+5}$$'
    }
  ],

  /* ---------- SET 8: Balancing Redox Reactions: Oxidation Number Method ---------- */
  8: [
    {
      d: 'E',
      q_en: 'State the basic principle of the oxidation number method.',
      q_hi: 'ऑक्सीकरण संख्या विधि का मूल सिद्धांत बताइए।',
      a_en: 'Total increase in oxidation number of the reductant equals total decrease in that of the oxidant.',
      a_hi: 'अपचायक की ऑक्सीकरण संख्या में कुल वृद्धि = ऑक्सीकारक की ऑक्सीकरण संख्या में कुल कमी।',
      formula: '$$\\sum\\Delta\\text{O.N.}_{\\uparrow}=\\sum\\Delta\\text{O.N.}_{\\downarrow}$$'
    },
    {
      d: 'E',
      q_en: 'How are O and H balanced in acidic medium?',
      q_hi: 'अम्लीय माध्यम में O व H कैसे संतुलित किए जाते हैं?',
      a_en: 'Balance O by adding H2O, then balance H by adding H⁺.',
      a_hi: 'O को H2O जोड़कर, फिर H को H⁺ जोड़कर संतुलित करें।',
      formula: '$$\\text{O}\\rightarrow\\text{H}_2\\text{O};\\ \\text{H}\\rightarrow\\text{H}^+$$'
    },
    {
      d: 'E',
      q_en: 'How are O and H balanced in basic medium?',
      q_hi: 'क्षारीय माध्यम में O व H कैसे संतुलित किए जाते हैं?',
      a_en: 'Balance as in acid first, then add OH⁻ equal to H⁺ on both sides to turn H⁺ into H2O.',
      a_hi: 'पहले अम्लीय की तरह संतुलित करें, फिर दोनों ओर H⁺ के बराबर OH⁻ जोड़कर H⁺ को H2O बनाएँ।',
      formula: '$$\\text{H}^++\\text{OH}^-\\rightarrow\\text{H}_2\\text{O}$$'
    },
    {
      d: 'E',
      q_en: 'Find the total change in O.N. per Cr2O7²⁻ and per SO3²⁻ in their reaction.',
      q_hi: 'Cr2O7²⁻ व SO3²⁻ की अभिक्रिया में प्रति आयन O.N. का कुल परिवर्तन ज्ञात कीजिए।',
      a_en: 'Cr2O7²⁻: 2 × 3 = 6 decrease; SO3²⁻: +4 → +6 = 2 increase. Ratio 1 : 3.',
      a_hi: 'Cr2O7²⁻: 2 × 3 = 6 कमी; SO3²⁻: +4 → +6 = 2 वृद्धि। अनुपात 1 : 3।',
      formula: '$$\\text{Cr}_2\\text{O}_7^{2-}:3\\text{SO}_3^{2-}$$'
    },
    {
      d: 'E',
      q_en: 'Write the balanced equation for Cr2O7²⁻ with SO3²⁻ in acid.',
      q_hi: 'अम्ल में Cr2O7²⁻ व SO3²⁻ की संतुलित समीकरण लिखिए।',
      a_en: 'Cr2O7²⁻ + 3SO3²⁻ + 8H⁺ → 2Cr³⁺ + 3SO4²⁻ + 4H2O.',
      a_hi: 'Cr2O7²⁻ + 3SO3²⁻ + 8H⁺ → 2Cr³⁺ + 3SO4²⁻ + 4H2O।',
      formula: '$$\\text{Cr}_2\\text{O}_7^{2-}+3\\text{SO}_3^{2-}+8\\text{H}^+\\rightarrow2\\text{Cr}^{3+}+3\\text{SO}_4^{2-}+4\\text{H}_2\\text{O}$$'
    },
    {
      d: 'M',
      q_en: 'Balance MnO4⁻ + I⁻ → MnO2 + I2 in basic medium.',
      q_hi: 'क्षारीय माध्यम में MnO4⁻ + I⁻ → MnO2 + I2 संतुलित कीजिए।',
      a_en: 'Mn: +7 → +4 (3 each); 2I⁻ → I2 (2 each). Result: 2MnO4⁻ + 6I⁻ + 4H2O → 2MnO2 + 3I2 + 8OH⁻.',
      a_hi: 'Mn: +7 → +4 (प्रत्येक 3); 2I⁻ → I2 (2)। परिणाम: 2MnO4⁻ + 6I⁻ + 4H2O → 2MnO2 + 3I2 + 8OH⁻।',
      formula: '$$2\\text{MnO}_4^-+6\\text{I}^-+4\\text{H}_2\\text{O}\\rightarrow2\\text{MnO}_2+3\\text{I}_2+8\\text{OH}^-$$'
    },
    {
      d: 'M',
      q_en: 'Balance Cu + HNO3 (dilute) → Cu(NO3)2 + NO + H2O.',
      q_hi: 'Cu + HNO3 (तनु) → Cu(NO3)2 + NO + H2O संतुलित कीजिए।',
      a_en: 'Cu +2 (2e⁻), N +5 → +2 (3e⁻): 3Cu + 8HNO3 → 3Cu(NO3)2 + 2NO + 4H2O.',
      a_hi: 'Cu +2 (2e⁻), N +5 → +2 (3e⁻): 3Cu + 8HNO3 → 3Cu(NO3)2 + 2NO + 4H2O।',
      formula: '$$3\\text{Cu}+8\\text{HNO}_3\\rightarrow3\\text{Cu(NO}_3)_2+2\\text{NO}+4\\text{H}_2\\text{O}$$'
    },
    {
      d: 'M',
      q_en: 'Balance Cu + HNO3 (concentrated) → Cu(NO3)2 + NO2 + H2O.',
      q_hi: 'Cu + HNO3 (सांद्र) → Cu(NO3)2 + NO2 + H2O संतुलित कीजिए।',
      a_en: 'Cu +2 (2e⁻), N +5 → +4 (1e⁻): Cu + 4HNO3 → Cu(NO3)2 + 2NO2 + 2H2O.',
      a_hi: 'Cu +2 (2e⁻), N +5 → +4 (1e⁻): Cu + 4HNO3 → Cu(NO3)2 + 2NO2 + 2H2O।',
      formula: '$$\\text{Cu}+4\\text{HNO}_3\\rightarrow\\text{Cu(NO}_3)_2+2\\text{NO}_2+2\\text{H}_2\\text{O}$$'
    },
    {
      d: 'M',
      q_en: 'In MnO4⁻ + Fe²⁺ (acid), what is the mole ratio and the equation?',
      q_hi: 'अम्ल में MnO4⁻ + Fe²⁺ में मोल अनुपात व समीकरण क्या है?',
      a_en: 'Mn gains 5e⁻, Fe loses 1e⁻: MnO4⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H2O.',
      a_hi: 'Mn 5e⁻ ग्रहण, Fe 1e⁻ त्यागता है: MnO4⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H2O।',
      formula: '$$\\text{MnO}_4^-+5\\text{Fe}^{2+}+8\\text{H}^+\\rightarrow\\text{Mn}^{2+}+5\\text{Fe}^{3+}+4\\text{H}_2\\text{O}$$'
    },
    {
      d: 'M',
      q_en: 'Balance Cl2 → Cl⁻ + ClO3⁻ in hot alkali.',
      q_hi: 'गर्म क्षार में Cl2 → Cl⁻ + ClO3⁻ संतुलित कीजिए।',
      a_en: 'Cl gains 1e⁻ (to Cl⁻) and loses 5e⁻ (to ClO3⁻): 3Cl2 + 6OH⁻ → 5Cl⁻ + ClO3⁻ + 3H2O.',
      a_hi: 'Cl, 1e⁻ ग्रहण (Cl⁻) व 5e⁻ त्याग (ClO3⁻): 3Cl2 + 6OH⁻ → 5Cl⁻ + ClO3⁻ + 3H2O।',
      formula: '$$3\\text{Cl}_2+6\\text{OH}^-\\rightarrow5\\text{Cl}^-+\\text{ClO}_3^-+3\\text{H}_2\\text{O}$$'
    },
    {
      d: 'H',
      q_en: 'Balance Cr2O7²⁻ + Fe²⁺ in acid by the oxidation number method.',
      q_hi: 'ऑक्सीकरण संख्या विधि से अम्ल में Cr2O7²⁻ + Fe²⁺ संतुलित कीजिए।',
      a_en: 'Cr2O7²⁻ gains 6e⁻, Fe²⁺ loses 1e⁻: Cr2O7²⁻ + 6Fe²⁺ + 14H⁺ → 2Cr³⁺ + 6Fe³⁺ + 7H2O.',
      a_hi: 'Cr2O7²⁻ 6e⁻ ग्रहण, Fe²⁺ 1e⁻ त्यागता है: Cr2O7²⁻ + 6Fe²⁺ + 14H⁺ → 2Cr³⁺ + 6Fe³⁺ + 7H2O।',
      formula: '$$\\text{Cr}_2\\text{O}_7^{2-}+6\\text{Fe}^{2+}+14\\text{H}^+\\rightarrow2\\text{Cr}^{3+}+6\\text{Fe}^{3+}+7\\text{H}_2\\text{O}$$'
    },
    {
      d: 'H',
      q_en: 'Balance MnO4⁻ + Br⁻ → MnO2 + BrO3⁻ in basic medium.',
      q_hi: 'क्षारीय माध्यम में MnO4⁻ + Br⁻ → MnO2 + BrO3⁻ संतुलित कीजिए।',
      a_en: 'Mn gains 3e⁻, Br loses 6e⁻: 2MnO4⁻ + Br⁻ + H2O → 2MnO2 + BrO3⁻ + 2OH⁻.',
      a_hi: 'Mn 3e⁻ ग्रहण, Br 6e⁻ त्यागता है: 2MnO4⁻ + Br⁻ + H2O → 2MnO2 + BrO3⁻ + 2OH⁻।',
      formula: '$$2\\text{MnO}_4^-+\\text{Br}^-+\\text{H}_2\\text{O}\\rightarrow2\\text{MnO}_2+\\text{BrO}_3^-+2\\text{OH}^-$$'
    },
    {
      d: 'H',
      q_en: 'Balance P4 → PH3 + H2PO2⁻ in basic medium.',
      q_hi: 'क्षारीय माध्यम में P4 → PH3 + H2PO2⁻ संतुलित कीजिए।',
      a_en: 'P4 + 3OH⁻ + 3H2O → PH3 + 3H2PO2⁻ (3e⁻ gained, 3 × 1e⁻ lost).',
      a_hi: 'P4 + 3OH⁻ + 3H2O → PH3 + 3H2PO2⁻ (3e⁻ ग्रहण, 3 × 1e⁻ त्याग)।',
      formula: '$$\\text{P}_4+3\\text{OH}^-+3\\text{H}_2\\text{O}\\rightarrow\\text{PH}_3+3\\text{H}_2\\text{PO}_2^-$$'
    },
    {
      d: 'H',
      q_en: 'Why does N change +5 → +2 in dilute but +5 → +4 in conc. HNO3 with Cu?',
      q_hi: 'Cu के साथ तनु HNO3 में N +5 → +2 पर सांद्र में +5 → +4 क्यों?',
      a_en: 'Dilute acid is reduced further to NO (3e⁻); concentrated acid gives NO2 (1e⁻), so coefficients differ.',
      a_hi: 'तनु अम्ल NO तक (3e⁻) अपचयित होता है; सांद्र NO2 (1e⁻) देता है, अतः गुणांक भिन्न होते हैं।',
      formula: '$$\\text{NO}_3^-\\rightarrow\\text{NO}\\ (3e^-),\\ \\text{NO}_2\\ (1e^-)$$'
    },
    {
      d: 'H',
      q_en: 'In Cu + 4HNO3 → Cu(NO3)2 + 2NO2 + 2H2O, how much HNO3 acts as oxidant?',
      q_hi: 'Cu + 4HNO3 → Cu(NO3)2 + 2NO2 + 2H2O में कितना HNO3 ऑक्सीकारक है?',
      a_en: 'Only 2 of the 4 mol are reduced (to NO2); the other 2 mol act as acid forming nitrate.',
      a_hi: '4 mol में केवल 2 mol अपचयित (NO2 में); शेष 2 mol अम्ल की भाँति नाइट्रेट बनाते हैं।',
      formula: '$$2\\ \\text{mol oxidant}+2\\ \\text{mol acid}$$'
    }
  ],

  /* ---------- SET 9: Balancing Redox Reactions: Half-Reaction (Ion-Electron) Method ---------- */
  9: [
    {
      d: 'E',
      q_en: 'List the main steps of the ion-electron method.',
      q_hi: 'आयन-इलेक्ट्रॉन विधि के मुख्य चरण बताइए।',
      a_en: 'Split into two half-reactions; balance atoms (O with H2O, H with H⁺) and charge with e⁻; equalise electrons; add.',
      a_hi: 'दो अर्ध-अभिक्रियाएँ बनाएँ; परमाणु (O: H2O, H: H⁺) व आवेश (e⁻) संतुलित करें; e⁻ बराबर करें; जोड़ें।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Write the half-reaction for reduction of Cr2O7²⁻ to Cr³⁺ in acid.',
      q_hi: 'अम्ल में Cr2O7²⁻ के Cr³⁺ में अपचयन की अर्ध-अभिक्रिया लिखिए।',
      a_en: 'Cr2O7²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H2O.',
      a_hi: 'Cr2O7²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H2O।',
      formula: '$$\\text{Cr}_2\\text{O}_7^{2-}+14\\text{H}^++6e^-\\rightarrow2\\text{Cr}^{3+}+7\\text{H}_2\\text{O}$$'
    },
    {
      d: 'E',
      q_en: 'Write the half-reaction for reduction of MnO4⁻ to Mn²⁺ in acid.',
      q_hi: 'अम्ल में MnO4⁻ के Mn²⁺ में अपचयन की अर्ध-अभिक्रिया लिखिए।',
      a_en: 'MnO4⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H2O.',
      a_hi: 'MnO4⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H2O।',
      formula: '$$\\text{MnO}_4^-+8\\text{H}^++5e^-\\rightarrow\\text{Mn}^{2+}+4\\text{H}_2\\text{O}$$'
    },
    {
      d: 'E',
      q_en: 'Write the oxidation half-reaction of Fe²⁺.',
      q_hi: 'Fe²⁺ की ऑक्सीकरण अर्ध-अभिक्रिया लिखिए।',
      a_en: 'Fe²⁺ → Fe³⁺ + e⁻.',
      a_hi: 'Fe²⁺ → Fe³⁺ + e⁻।',
      formula: '$$\\text{Fe}^{2+}\\rightarrow\\text{Fe}^{3+}+e^-$$'
    },
    {
      d: 'E',
      q_en: 'Write the oxidation half-reaction of oxalate.',
      q_hi: 'ऑक्सेलेट की ऑक्सीकरण अर्ध-अभिक्रिया लिखिए।',
      a_en: 'C2O4²⁻ → 2CO2 + 2e⁻ (C: +3 → +4).',
      a_hi: 'C2O4²⁻ → 2CO2 + 2e⁻ (C: +3 → +4)।',
      formula: '$$\\text{C}_2\\text{O}_4^{2-}\\rightarrow2\\text{CO}_2+2e^-$$'
    },
    {
      d: 'M',
      q_en: 'Combine to get the Cr2O7²⁻ + Fe²⁺ equation.',
      q_hi: 'Cr2O7²⁻ + Fe²⁺ की समीकरण अर्ध-अभिक्रियाओं से प्राप्त कीजिए।',
      a_en: 'Multiply Fe half by 6 and add: Cr2O7²⁻ + 6Fe²⁺ + 14H⁺ → 2Cr³⁺ + 6Fe³⁺ + 7H2O.',
      a_hi: 'Fe अर्ध को 6 से गुणा कर जोड़ें: Cr2O7²⁻ + 6Fe²⁺ + 14H⁺ → 2Cr³⁺ + 6Fe³⁺ + 7H2O।',
      formula: '$$\\text{Cr}_2\\text{O}_7^{2-}+6\\text{Fe}^{2+}+14\\text{H}^+\\rightarrow2\\text{Cr}^{3+}+6\\text{Fe}^{3+}+7\\text{H}_2\\text{O}$$'
    },
    {
      d: 'M',
      q_en: 'Balance MnO4⁻ + C2O4²⁻ in acid.',
      q_hi: 'अम्ल में MnO4⁻ + C2O4²⁻ संतुलित कीजिए।',
      a_en: 'LCM of 5 and 2 is 10: 2MnO4⁻ + 5C2O4²⁻ + 16H⁺ → 2Mn²⁺ + 10CO2 + 8H2O.',
      a_hi: '5 व 2 का LCM 10: 2MnO4⁻ + 5C2O4²⁻ + 16H⁺ → 2Mn²⁺ + 10CO2 + 8H2O।',
      formula: '$$2\\text{MnO}_4^-+5\\text{C}_2\\text{O}_4^{2-}+16\\text{H}^+\\rightarrow2\\text{Mn}^{2+}+10\\text{CO}_2+8\\text{H}_2\\text{O}$$'
    },
    {
      d: 'M',
      q_en: 'Balance MnO4⁻ + I⁻ in acid.',
      q_hi: 'अम्ल में MnO4⁻ + I⁻ संतुलित कीजिए।',
      a_en: '2MnO4⁻ + 10I⁻ + 16H⁺ → 2Mn²⁺ + 5I2 + 8H2O.',
      a_hi: '2MnO4⁻ + 10I⁻ + 16H⁺ → 2Mn²⁺ + 5I2 + 8H2O।',
      formula: '$$2\\text{MnO}_4^-+10\\text{I}^-+16\\text{H}^+\\rightarrow2\\text{Mn}^{2+}+5\\text{I}_2+8\\text{H}_2\\text{O}$$'
    },
    {
      d: 'M',
      q_en: 'How is a half-reaction converted from acidic to basic medium?',
      q_hi: 'अर्ध-अभिक्रिया को अम्लीय से क्षारीय माध्यम में कैसे बदलते हैं?',
      a_en: 'Add as many OH⁻ to both sides as there are H⁺, combine H⁺ + OH⁻ into H2O and cancel extra water.',
      a_hi: 'दोनों ओर H⁺ के बराबर OH⁻ जोड़ें, H⁺ + OH⁻ को H2O बनाएँ व अतिरिक्त जल काटें।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Balance MnO4⁻ + SO3²⁻ → Mn²⁺ + SO4²⁻ in acid.',
      q_hi: 'अम्ल में MnO4⁻ + SO3²⁻ → Mn²⁺ + SO4²⁻ संतुलित कीजिए।',
      a_en: '2MnO4⁻ + 5SO3²⁻ + 6H⁺ → 2Mn²⁺ + 5SO4²⁻ + 3H2O.',
      a_hi: '2MnO4⁻ + 5SO3²⁻ + 6H⁺ → 2Mn²⁺ + 5SO4²⁻ + 3H2O।',
      formula: '$$2\\text{MnO}_4^-+5\\text{SO}_3^{2-}+6\\text{H}^+\\rightarrow2\\text{Mn}^{2+}+5\\text{SO}_4^{2-}+3\\text{H}_2\\text{O}$$'
    },
    {
      d: 'H',
      q_en: 'Write both half-reactions for MnO4⁻ + Br⁻ → MnO2 + BrO3⁻ in basic medium.',
      q_hi: 'क्षारीय माध्यम में MnO4⁻ + Br⁻ → MnO2 + BrO3⁻ की दोनों अर्ध-अभिक्रियाएँ लिखिए।',
      a_en: 'Red: MnO4⁻ + 2H2O + 3e⁻ → MnO2 + 4OH⁻. Ox: Br⁻ + 6OH⁻ → BrO3⁻ + 3H2O + 6e⁻.',
      a_hi: 'अपचयन: MnO4⁻ + 2H2O + 3e⁻ → MnO2 + 4OH⁻। ऑक्सीकरण: Br⁻ + 6OH⁻ → BrO3⁻ + 3H2O + 6e⁻।',
      formula: '$$2\\text{MnO}_4^-+\\text{Br}^-+\\text{H}_2\\text{O}\\rightarrow2\\text{MnO}_2+\\text{BrO}_3^-+2\\text{OH}^-$$'
    },
    {
      d: 'H',
      q_en: 'Balance KMnO4 + H2O2 in acid (H2O2 → O2).',
      q_hi: 'अम्ल में MnO4⁻ + H2O2 (H2O2 → O2) संतुलित कीजिए।',
      a_en: '2MnO4⁻ + 5H2O2 + 6H⁺ → 2Mn²⁺ + 5O2 + 8H2O.',
      a_hi: '2MnO4⁻ + 5H2O2 + 6H⁺ → 2Mn²⁺ + 5O2 + 8H2O।',
      formula: '$$2\\text{MnO}_4^-+5\\text{H}_2\\text{O}_2+6\\text{H}^+\\rightarrow2\\text{Mn}^{2+}+5\\text{O}_2+8\\text{H}_2\\text{O}$$'
    },
    {
      d: 'H',
      q_en: 'Balance Cr2O7²⁻ + I⁻ → Cr³⁺ + I2 in acid.',
      q_hi: 'अम्ल में Cr2O7²⁻ + I⁻ → Cr³⁺ + I2 संतुलित कीजिए।',
      a_en: 'Cr2O7²⁻ + 6I⁻ + 14H⁺ → 2Cr³⁺ + 3I2 + 7H2O.',
      a_hi: 'Cr2O7²⁻ + 6I⁻ + 14H⁺ → 2Cr³⁺ + 3I2 + 7H2O।',
      formula: '$$\\text{Cr}_2\\text{O}_7^{2-}+6\\text{I}^-+14\\text{H}^+\\rightarrow2\\text{Cr}^{3+}+3\\text{I}_2+7\\text{H}_2\\text{O}$$'
    },
    {
      d: 'H',
      q_en: 'Check the balance of Cr2O7²⁻ + 6Fe²⁺ + 14H⁺ → 2Cr³⁺ + 6Fe³⁺ + 7H2O by charge.',
      q_hi: 'Cr2O7²⁻ + 6Fe²⁺ + 14H⁺ → 2Cr³⁺ + 6Fe³⁺ + 7H2O का आवेश द्वारा परीक्षण कीजिए।',
      a_en: 'Left: −2 + 12 + 14 = +24; right: 6 + 18 = +24. Atoms also match, so it is balanced.',
      a_hi: 'बायाँ: −2 + 12 + 14 = +24; दायाँ: 6 + 18 = +24। परमाणु भी बराबर, अतः संतुलित है।',
      formula: '$$-2+12+14=+24=6+18$$'
    },
    {
      d: 'H',
      q_en: 'Why is the half-reaction method preferred for ionic redox reactions?',
      q_hi: 'आयनिक रेडॉक्स अभिक्रियाओं के लिए अर्ध-अभिक्रिया विधि क्यों श्रेयस्कर है?',
      a_en: 'It treats oxidation and reduction separately, shows electrons and medium (H⁺/OH⁻) explicitly, and needs no O.N. of every atom.',
      a_hi: 'यह ऑक्सीकरण-अपचयन को अलग दर्शाती है, e⁻ व माध्यम (H⁺/OH⁻) स्पष्ट करती है, सभी परमाणुओं की O.N. नहीं चाहिए।',
      formula: ''
    }
  ],

  /* ---------- SET 10: Equivalent Concept in Redox: n-Factor & Equivalent Weight ---------- */
  10: [
    {
      d: 'E',
      q_en: 'Give the formula for equivalent weight using n-factor.',
      q_hi: 'n-गुणक की सहायता से तुल्यांकी भार का सूत्र लिखिए।',
      a_en: 'Equivalent weight = molar mass ÷ n-factor (electrons exchanged per formula unit).',
      a_hi: 'तुल्यांकी भार = मोलर द्रव्यमान ÷ n-गुणक (प्रति सूत्र इकाई स्थानांतरित e⁻)।',
      formula: '$$E=\\frac{M}{n\\text{-factor}}$$'
    },
    {
      d: 'E',
      q_en: 'What is the n-factor and equivalent weight of KMnO4 in acidic medium?',
      q_hi: 'अम्लीय माध्यम में KMnO4 का n-गुणक व तुल्यांकी भार क्या है?',
      a_en: 'n = 5 (Mn⁷⁺ → Mn²⁺); E = 158/5 = 31.6.',
      a_hi: 'n = 5 (Mn⁷⁺ → Mn²⁺); E = 158/5 = 31.6।',
      formula: '$$E=\\frac{158}{5}=31.6$$'
    },
    {
      d: 'E',
      q_en: 'What is the n-factor of KMnO4 in neutral or faintly alkaline medium?',
      q_hi: 'उदासीन या हल्के क्षारीय माध्यम में KMnO4 का n-गुणक क्या है?',
      a_en: 'n = 3 (Mn⁷⁺ → MnO2, Mn⁴⁺); E = 158/3 = 52.67.',
      a_hi: 'n = 3 (Mn⁷⁺ → MnO2, Mn⁴⁺); E = 158/3 = 52.67।',
      formula: '$$E=\\frac{158}{3}=52.67$$'
    },
    {
      d: 'E',
      q_en: 'What is the n-factor of KMnO4 in strongly alkaline medium?',
      q_hi: 'प्रबल क्षारीय माध्यम में KMnO4 का n-गुणक क्या है?',
      a_en: 'n = 1 (Mn⁷⁺ → MnO4²⁻, Mn⁶⁺); E = 158. Memory aid: 5-3-1.',
      a_hi: 'n = 1 (Mn⁷⁺ → MnO4²⁻, Mn⁶⁺); E = 158। याद रखें: 5-3-1।',
      formula: '$$E=\\frac{158}{1}=158$$'
    },
    {
      d: 'E',
      q_en: 'Find the n-factor and equivalent weight of K2Cr2O7 in acid.',
      q_hi: 'अम्ल में K2Cr2O7 का n-गुणक व तुल्यांकी भार ज्ञात कीजिए।',
      a_en: 'n = 6 (2Cr⁶⁺ → 2Cr³⁺); E = 294/6 = 49.',
      a_hi: 'n = 6 (2Cr⁶⁺ → 2Cr³⁺); E = 294/6 = 49।',
      formula: '$$E=\\frac{294}{6}=49$$'
    },
    {
      d: 'M',
      q_en: 'Find the n-factor and equivalent weight of oxalic acid H2C2O4 in redox.',
      q_hi: 'रेडॉक्स में ऑक्सैलिक अम्ल H2C2O4 का n-गुणक व तुल्यांकी भार ज्ञात कीजिए।',
      a_en: 'C goes +3 → +4 in each of 2 C: n = 2; E = 90/2 = 45 (for the anhydrous acid).',
      a_hi: 'प्रत्येक 2 C में +3 → +4: n = 2; E = 90/2 = 45 (निर्जल अम्ल के लिए)।',
      formula: '$$\\text{C}_2\\text{O}_4^{2-}\\rightarrow2\\text{CO}_2+2e^-$$'
    },
    {
      d: 'M',
      q_en: 'State the n-factor of FeSO4 and Mohr\'s salt.',
      q_hi: 'FeSO4 व मोहर लवण का n-गुणक बताइए।',
      a_en: 'n = 1 for both (Fe²⁺ → Fe³⁺); E = M, e.g. Mohr\'s salt 392.',
      a_hi: 'दोनों के लिए n = 1 (Fe²⁺ → Fe³⁺); E = M, जैसे मोहर लवण 392।',
      formula: '$$\\text{Fe}^{2+}\\rightarrow\\text{Fe}^{3+}+e^-$$'
    },
    {
      d: 'M',
      q_en: 'What are the n-factors of H2O2 as oxidant and as reductant?',
      q_hi: 'H2O2 का ऑक्सीकारक व अपचायक के रूप में n-गुणक क्या है?',
      a_en: 'n = 2 in both: 2O (−1 → −2) as oxidant, 2O (−1 → 0) as reductant; E = 34/2 = 17.',
      a_hi: 'दोनों में n = 2: ऑक्सीकारक में 2O (−1 → −2), अपचायक में 2O (−1 → 0); E = 34/2 = 17।',
      formula: '$$E=\\frac{34}{2}=17$$'
    },
    {
      d: 'M',
      q_en: 'Find the n-factor of ferrous oxalate FeC2O4 oxidised by KMnO4.',
      q_hi: 'KMnO4 द्वारा ऑक्सीकृत फेरस ऑक्सेलेट FeC2O4 का n-गुणक ज्ञात कीजिए।',
      a_en: 'Fe²⁺ → Fe³⁺ (1e⁻) and C2O4²⁻ → 2CO2 (2e⁻): n = 1 + 2 = 3.',
      a_hi: 'Fe²⁺ → Fe³⁺ (1e⁻) तथा C2O4²⁻ → 2CO2 (2e⁻): n = 1 + 2 = 3।',
      formula: '$$n=1+2=3$$'
    },
    {
      d: 'M',
      q_en: 'Find the n-factor of Cu2S → 2Cu²⁺ + SO2.',
      q_hi: 'Cu2S → 2Cu²⁺ + SO2 में n-गुणक ज्ञात कीजिए।',
      a_en: '2 Cu: 2 × 1 = 2; S: −2 → +4 = 6; total n = 8.',
      a_hi: '2 Cu: 2 × 1 = 2; S: −2 → +4 = 6; कुल n = 8।',
      formula: '$$n=2(1)+6=8$$'
    },
    {
      d: 'H',
      q_en: 'Find the n-factor of As2S3 → 2AsO4³⁻ + 3SO4²⁻.',
      q_hi: 'As2S3 → 2AsO4³⁻ + 3SO4²⁻ में n-गुणक ज्ञात कीजिए।',
      a_en: 'As: +3 → +5 (2 × 2 = 4); S: −2 → +6 (3 × 8 = 24); n = 28.',
      a_hi: 'As: +3 → +5 (2 × 2 = 4); S: −2 → +6 (3 × 8 = 24); n = 28।',
      formula: '$$n=2(2)+3(8)=28$$'
    },
    {
      d: 'H',
      q_en: 'Give the n-factor formula for a disproportionation reaction.',
      q_hi: 'असमानुपातन अभिक्रिया के लिए n-गुणक सूत्र दीजिए।',
      a_en: 'n = n1·n2/(n1 + n2), where n1 and n2 are the n-factors for the oxidation and reduction parts.',
      a_hi: 'n = n1·n2/(n1 + n2), जहाँ n1 व n2 ऑक्सीकरण व अपचयन भागों के n-गुणक हैं।',
      formula: '$$n=\\frac{n_1n_2}{n_1+n_2}$$'
    },
    {
      d: 'H',
      q_en: 'Br2 → Br⁻ + BrO3⁻ in alkali: find the n-factor of Br2.',
      q_hi: 'क्षार में Br2 → Br⁻ + BrO3⁻: Br2 का n-गुणक ज्ञात कीजिए।',
      a_en: 'Reduction n1 = 1 (per Br), oxidation n2 = 5 (per Br): n = (1×5)/(1+5) = 5/6 per Br, so 5/3 per Br2.',
      a_hi: 'अपचयन n1 = 1, ऑक्सीकरण n2 = 5 (प्रति Br): n = 5/6 प्रति Br, अतः प्रति Br2 5/3।',
      formula: '$$n=\\frac{5}{3}\\ \\text{per Br}_2$$'
    },
    {
      d: 'H',
      q_en: 'Find the equivalent weight of Br2 (M = 160) in its disproportionation.',
      q_hi: 'Br2 (M = 160) का असमानुपातन में तुल्यांकी भार ज्ञात कीजिए।',
      a_en: 'E = 160 ÷ (5/3) = 96.',
      a_hi: 'E = 160 ÷ (5/3) = 96।',
      formula: '$$E=\\frac{160}{5/3}=96$$'
    },
    {
      d: 'H',
      q_en: 'Find the n-factor of H2O2 in its self-disproportionation.',
      q_hi: 'H2O2 के स्वतः असमानुपातन में n-गुणक ज्ञात कीजिए।',
      a_en: 'n1 = 2 and n2 = 2 give n = (2×2)/(2+2) = 1, so E = 34 (not 17).',
      a_hi: 'n1 = 2 व n2 = 2 से n = (2×2)/(2+2) = 1, अतः E = 34 (17 नहीं)।',
      formula: '$$n=\\frac{2\\times2}{2+2}=1$$'
    }
  ],

  /* ---------- SET 11: Redox Titrations & Indicators ---------- */
  11: [
    {
      d: 'E',
      q_en: 'Why is KMnO4 called a self-indicator?',
      q_hi: 'KMnO4 को स्व-सूचक (self-indicator) क्यों कहते हैं?',
      a_en: 'Its pink MnO4⁻ is visible even at ~10⁻⁶ M, so a permanent faint pink marks the end point.',
      a_hi: 'इसका गुलाबी MnO4⁻ लगभग 10⁻⁶ M पर भी दिखता है, अतः स्थायी हल्का गुलाबी रंग अंत-बिंदु बताता है।',
      formula: '$$\\text{MnO}_4^-\\ (\\text{pink})\\rightarrow\\text{Mn}^{2+}\\ (\\text{colourless})$$'
    },
    {
      d: 'E',
      q_en: 'Why is dilute H2SO4 used to acidify KMnO4 titrations?',
      q_hi: 'KMnO4 अनुमापन को अम्लीय करने के लिए तनु H2SO4 क्यों प्रयुक्त होता है?',
      a_en: 'It supplies H⁺ and is neither oxidised nor reduced under the conditions, so it does not interfere.',
      a_hi: 'यह H⁺ देता है और इन परिस्थितियों में न ऑक्सीकृत होता है न अपचयित, अतः व्यवधान नहीं करता।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Why is HCl not used to acidify a KMnO4 titration?',
      q_hi: 'KMnO4 अनुमापन में HCl का प्रयोग क्यों नहीं किया जाता?',
      a_en: 'KMnO4 oxidises Cl⁻ to Cl2, consuming extra permanganate and giving a wrong reading.',
      a_hi: 'KMnO4, Cl⁻ को Cl2 में ऑक्सीकृत करता है, अतिरिक्त परमैंगनेट व्यय होता है व पाठ्यांक गलत आता है।',
      formula: '$$2\\text{Cl}^-\\rightarrow\\text{Cl}_2+2e^-$$'
    },
    {
      d: 'E',
      q_en: 'Why is HNO3 not used to acidify a KMnO4 titration?',
      q_hi: 'KMnO4 अनुमापन में HNO3 का प्रयोग क्यों नहीं किया जाता?',
      a_en: 'HNO3 is itself a strong oxidant, so it can oxidise the reductant being titrated.',
      a_hi: 'HNO3 स्वयं प्रबल ऑक्सीकारक है, अतः यह अनुमापित अपचायक को ऑक्सीकृत कर सकता है।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What is the law of equivalents used in titrations?',
      q_hi: 'अनुमापन में प्रयुक्त तुल्यांकों का नियम क्या है?',
      a_en: 'At the end point, equivalents of oxidant = equivalents of reductant: N1V1 = N2V2.',
      a_hi: 'अंत-बिंदु पर ऑक्सीकारक के तुल्यांक = अपचायक के तुल्यांक: N1V1 = N2V2।',
      formula: '$$N_1V_1=N_2V_2$$'
    },
    {
      d: 'M',
      q_en: 'Why is the oxalic acid–KMnO4 titration started at about 60 °C?',
      q_hi: 'ऑक्सैलिक अम्ल–KMnO4 अनुमापन लगभग 60 °C पर क्यों आरंभ करते हैं?',
      a_en: 'The reaction is slow at room temperature; heating speeds it up. Mn²⁺ formed then autocatalyses it.',
      a_hi: 'कमरे के ताप पर अभिक्रिया धीमी है; गर्म करने से तेज़ होती है। बने Mn²⁺ से स्वतः उत्प्रेरण होता है।',
      formula: '$$\\text{Mn}^{2+}\\ \\text{acts as autocatalyst}$$'
    },
    {
      d: 'M',
      q_en: 'Why should the oxalic acid solution not be heated above ~70 °C?',
      q_hi: 'ऑक्सैलिक अम्ल विलयन को ~70 °C से अधिक क्यों नहीं गर्म करते?',
      a_en: 'Oxalic acid decomposes at higher temperature, causing loss of reductant and an error.',
      a_hi: 'उच्च ताप पर ऑक्सैलिक अम्ल अपघटित हो जाता है, अपचायक की हानि होती है और त्रुटि आती है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Is K2Cr2O7 a self-indicator? Which indicator is used?',
      q_hi: 'क्या K2Cr2O7 स्व-सूचक है? कौन-सा सूचक प्रयुक्त होता है?',
      a_en: 'No. Orange Cr2O7²⁻ → green Cr³⁺ is not sharp, so an external indicator, diphenylamine, is used.',
      a_hi: 'नहीं। नारंगी Cr2O7²⁻ → हरा Cr³⁺ तीव्र नहीं है, अतः बाह्य सूचक डाइफेनिलऐमीन प्रयुक्त होता है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Differentiate iodometric and iodimetric titrations.',
      q_hi: 'आयोडोमितीय व आयोडीमितीय अनुमापन में अंतर बताइए।',
      a_en: 'Iodimetry: titration with standard I2 directly. Iodometry: I2 liberated from KI by an oxidant is titrated with thiosulfate.',
      a_hi: 'आयोडीमिति: मानक I2 से सीधा अनुमापन। आयोडोमिति: ऑक्सीकारक से KI से मुक्त I2 का थायोसल्फेट से अनुमापन।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Write the I2–thiosulfate reaction and the n-factor of Na2S2O3.',
      q_hi: 'I2–थायोसल्फेट अभिक्रिया लिखिए व Na2S2O3 का n-गुणक बताइए।',
      a_en: 'I2 + 2S2O3²⁻ → 2I⁻ + S4O6²⁻; two thiosulfate ions lose 2e⁻ in all, so n = 1 each.',
      a_hi: 'I2 + 2S2O3²⁻ → 2I⁻ + S4O6²⁻; दो थायोसल्फेट कुल 2e⁻ त्यागते हैं, अतः प्रत्येक के लिए n = 1।',
      formula: '$$\\text{I}_2+2\\text{S}_2\\text{O}_3^{2-}\\rightarrow2\\text{I}^-+\\text{S}_4\\text{O}_6^{2-}$$'
    },
    {
      d: 'H',
      q_en: 'Why is freshly prepared starch used, and when is it added in iodometry?',
      q_hi: 'ताज़ा बना स्टार्च क्यों प्रयुक्त होता है और आयोडोमिति में कब डाला जाता है?',
      a_en: 'Starch gives an intense blue colour with I2/I3⁻; it is added near the end point (pale yellow) as old starch decomposes.',
      a_hi: 'स्टार्च I2/I3⁻ के साथ गहरा नीला रंग देता है; अंत-बिंदु (हल्का पीला) के निकट डाला जाता है; पुराना स्टार्च अपघटित हो जाता है।',
      formula: '$$\\text{I}_3^-+\\text{starch}\\rightarrow\\text{blue complex}$$'
    },
    {
      d: 'H',
      q_en: 'How many mL of 0.02 M KMnO4 oxidise 25 mL of 0.1 M FeSO4 in acid?',
      q_hi: 'अम्ल में 25 mL 0.1 M FeSO4 को ऑक्सीकृत करने हेतु 0.02 M KMnO4 कितने mL चाहिए?',
      a_en: 'n1M1V1 = n2M2V2: 5 × 0.02 × V = 1 × 0.1 × 25, so V = 25 mL.',
      a_hi: 'n1M1V1 = n2M2V2: 5 × 0.02 × V = 1 × 0.1 × 25, अतः V = 25 mL।',
      formula: '$$5(0.02)V=1(0.1)(25)\\Rightarrow V=25\\ \\text{mL}$$'
    },
    {
      d: 'H',
      q_en: 'Why is excess KI added in iodometric estimations?',
      q_hi: 'आयोडोमितीय आकलन में KI आधिक्य में क्यों डाला जाता है?',
      a_en: 'It ensures complete liberation of I2 and keeps I2 dissolved as soluble I3⁻, reducing loss by volatilisation.',
      a_hi: 'यह I2 का पूर्ण मुक्त होना सुनिश्चित करता है और I2 को विलेय I3⁻ के रूप में रखकर वाष्पन हानि घटाता है।',
      formula: '$$\\text{I}_2+\\text{I}^-\\rightleftharpoons\\text{I}_3^-$$'
    },
    {
      d: 'H',
      q_en: 'Why is KMnO4 not a primary standard?',
      q_hi: 'KMnO4 प्राथमिक मानक क्यों नहीं है?',
      a_en: 'It is hard to obtain pure (contains MnO2) and decomposes in light and on reacting with organic matter, so it is standardised first.',
      a_hi: 'इसे शुद्ध प्राप्त करना कठिन है (MnO2 मिला होता है), प्रकाश व कार्बनिक पदार्थ से अपघटित होता है; अतः पहले मानकीकृत करते हैं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'What does MnO2 formation (brown) in a KMnO4 titration indicate?',
      q_hi: 'KMnO4 अनुमापन में भूरे MnO2 का बनना क्या दर्शाता है?',
      a_en: 'Insufficient acid: MnO4⁻ is reduced only to Mn⁴⁺ (n = 3) instead of Mn²⁺ (n = 5), so results are wrong.',
      a_hi: 'अम्ल अपर्याप्त है: MnO4⁻ केवल Mn⁴⁺ (n = 3) तक अपचयित होता है, Mn²⁺ (n = 5) तक नहीं; परिणाम गलत।',
      formula: '$$\\text{MnO}_4^-+4\\text{H}^++3e^-\\rightarrow\\text{MnO}_2+2\\text{H}_2\\text{O}$$'
    }
  ],

  /* ---------- SET 12: Redox Reactions & Electrode Processes: Daniell Cell & Salt Bridge ---------- */
  12: [
    {
      d: 'E',
      q_en: 'Differentiate direct and indirect redox reactions.',
      q_hi: 'प्रत्यक्ष व अप्रत्यक्ष रेडॉक्स अभिक्रियाओं में अंतर बताइए।',
      a_en: 'Direct: oxidant and reductant in one vessel, energy lost as heat. Indirect: separate half-cells joined by a wire, giving electricity.',
      a_hi: 'प्रत्यक्ष: एक ही पात्र में, ऊर्जा ऊष्मा बनती है। अप्रत्यक्ष: अलग अर्ध-सेल तार से जुड़े, विद्युत मिलती है।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Write the cell representation of the Daniell cell.',
      q_hi: 'डेनियल सेल का सेल निरूपण लिखिए।',
      a_en: 'Zn(s) | Zn²⁺(aq) ‖ Cu²⁺(aq) | Cu(s).',
      a_hi: 'Zn(s) | Zn²⁺(aq) ‖ Cu²⁺(aq) | Cu(s)।',
      formula: '$$\\text{Zn(s)}|\\text{Zn}^{2+}\\text{(aq)}\\parallel\\text{Cu}^{2+}\\text{(aq)}|\\text{Cu(s)}$$'
    },
    {
      d: 'E',
      q_en: 'What is the standard EMF of the Daniell cell?',
      q_hi: 'डेनियल सेल का मानक EMF कितना है?',
      a_en: 'E°cell = 1.10 V (Cu²⁺/Cu = +0.34 V; Zn²⁺/Zn = −0.76 V).',
      a_hi: 'E°cell = 1.10 V (Cu²⁺/Cu = +0.34 V; Zn²⁺/Zn = −0.76 V)।',
      formula: '$$E^\\circ_{\\text{cell}}=0.34-(-0.76)=1.10\\ \\text{V}$$'
    },
    {
      d: 'E',
      q_en: 'Explain the mnemonic LOAN for a galvanic cell.',
      q_hi: 'गैल्वेनी सेल के लिए स्मरण-सूत्र LOAN समझाइए।',
      a_en: 'Left electrode, Oxidation, Anode, Negative.',
      a_hi: 'बायाँ इलेक्ट्रोड, ऑक्सीकरण, ऐनोड, ऋणात्मक।',
      formula: '$$\\text{L-O-A-N}$$'
    },
    {
      d: 'E',
      q_en: 'In which direction do electrons and conventional current flow in a galvanic cell?',
      q_hi: 'गैल्वेनी सेल में इलेक्ट्रॉन व परंपरागत धारा किस दिशा में बहती हैं?',
      a_en: 'Electrons: anode → cathode through the wire; conventional current: cathode → anode.',
      a_hi: 'इलेक्ट्रॉन: तार में ऐनोड → कैथोड; परंपरागत धारा: कैथोड → ऐनोड।',
      formula: '$$e^-:\\ \\text{Zn}\\rightarrow\\text{Cu}$$'
    },
    {
      d: 'M',
      q_en: 'Write the anode and cathode reactions of the Daniell cell.',
      q_hi: 'डेनियल सेल की ऐनोड व कैथोड अभिक्रियाएँ लिखिए।',
      a_en: 'Anode: Zn → Zn²⁺ + 2e⁻. Cathode: Cu²⁺ + 2e⁻ → Cu.',
      a_hi: 'ऐनोड: Zn → Zn²⁺ + 2e⁻। कैथोड: Cu²⁺ + 2e⁻ → Cu।',
      formula: '$$\\text{Zn}+\\text{Cu}^{2+}\\rightarrow\\text{Zn}^{2+}+\\text{Cu}$$'
    },
    {
      d: 'M',
      q_en: 'State the functions of a salt bridge.',
      q_hi: 'लवण सेतु (salt bridge) के कार्य बताइए।',
      a_en: 'It completes the internal circuit and maintains electrical neutrality of both half-cells by ion migration.',
      a_hi: 'यह आंतरिक परिपथ पूर्ण करता है और आयन प्रवास से दोनों अर्ध-सेलों की विद्युत उदासीनता बनाए रखता है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Why are KCl, KNO3 or NH4NO3 chosen for a salt bridge?',
      q_hi: 'लवण सेतु के लिए KCl, KNO3 या NH4NO3 क्यों चुने जाते हैं?',
      a_en: 'Their cation and anion have nearly equal ionic mobilities, so no liquid junction potential builds up.',
      a_hi: 'इनके धनायन व ऋणायन की आयनिक गतिशीलता लगभग समान है, अतः द्रव संधि विभव नहीं बनता।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Why is the salt bridge prepared in agar-agar or gelatin?',
      q_hi: 'लवण सेतु एगार-एगार या जिलेटिन में क्यों बनाया जाता है?',
      a_en: 'The gel holds the electrolyte in the tube, preventing it from mixing with the half-cell solutions.',
      a_hi: 'जेल विद्युत-अपघट्य को नली में रोके रखता है, अर्ध-सेल विलयनों से मिलने नहीं देता।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What happens to the electrodes\' masses during operation of the Daniell cell?',
      q_hi: 'डेनियल सेल के कार्य के दौरान इलेक्ट्रोडों के द्रव्यमान का क्या होता है?',
      a_en: 'The zinc anode loses mass (dissolves) and the copper cathode gains mass (Cu deposits).',
      a_hi: 'जिंक ऐनोड का द्रव्यमान घटता है (घुलता है) व कॉपर कैथोड का बढ़ता है (Cu जमता है)।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why cannot KCl be used in a salt bridge with Ag⁺ or Pb²⁺ electrodes?',
      q_hi: 'Ag⁺ या Pb²⁺ इलेक्ट्रोडों के साथ लवण सेतु में KCl क्यों नहीं प्रयुक्त होता?',
      a_en: 'Cl⁻ would precipitate AgCl or PbCl2 at the junction; KNO3 is used instead.',
      a_hi: 'Cl⁻ संधि पर AgCl या PbCl2 अवक्षेपित करेगा; इसके स्थान पर KNO3 प्रयुक्त होता है।',
      formula: '$$\\text{Ag}^++\\text{Cl}^-\\rightarrow\\text{AgCl}\\downarrow$$'
    },
    {
      d: 'H',
      q_en: 'Toward which electrode do K⁺ and Cl⁻ of the salt bridge migrate in the Daniell cell?',
      q_hi: 'डेनियल सेल में लवण सेतु के K⁺ व Cl⁻ किस इलेक्ट्रोड की ओर प्रवास करते हैं?',
      a_en: 'K⁺ moves toward the cathode (Cu²⁺ is consumed); Cl⁻ moves toward the anode (Zn²⁺ is produced).',
      a_hi: 'K⁺ कैथोड की ओर (Cu²⁺ घटता है); Cl⁻ ऐनोड की ओर (Zn²⁺ बनता है)।',
      formula: '$$\\text{K}^+\\rightarrow\\text{cathode},\\ \\text{Cl}^-\\rightarrow\\text{anode}$$'
    },
    {
      d: 'H',
      q_en: 'What happens to the cell reading if the salt bridge is removed?',
      q_hi: 'लवण सेतु हटाने पर सेल के पाठ्यांक का क्या होता है?',
      a_en: 'The circuit is broken and charge builds up, so the voltage drops to zero and current stops.',
      a_hi: 'परिपथ टूट जाता है और आवेश संचित होता है, अतः वोल्टता शून्य हो जाती है और धारा रुक जाती है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'TRAP: In an electrolytic cell, is the anode negative? Where does oxidation occur?',
      q_hi: 'ट्रैप: विद्युत-अपघटनी सेल में क्या ऐनोड ऋणात्मक होता है? ऑक्सीकरण कहाँ होता है?',
      a_en: 'No: the anode is positive in an electrolytic cell, but oxidation always occurs at the anode. LOAN holds only for galvanic cells.',
      a_hi: 'नहीं: विद्युत-अपघटनी सेल में ऐनोड धनात्मक होता है, पर ऑक्सीकरण सदैव ऐनोड पर होता है। LOAN केवल गैल्वेनी सेल के लिए।',
      formula: '$$\\text{Anode}=\\text{oxidation (always)}$$'
    },
    {
      d: 'H',
      q_en: 'If E°cell of the Daniell cell is opposed by an external voltage greater than 1.1 V, what happens?',
      q_hi: 'यदि बाह्य वोल्टता 1.1 V से अधिक हो तो डेनियल सेल में क्या होता है?',
      a_en: 'The reaction reverses: Cu dissolves and Zn deposits; the galvanic cell turns into an electrolytic cell.',
      a_hi: 'अभिक्रिया उलट जाती है: Cu घुलता है व Zn जमता है; गैल्वेनी सेल विद्युत-अपघटनी सेल बन जाता है।',
      formula: '$$\\text{Cu}+\\text{Zn}^{2+}\\rightarrow\\text{Cu}^{2+}+\\text{Zn}$$'
    }
  ],

  /* ---------- SET 13: Electrode Potential, SHE & Cell EMF ---------- */
  13: [
    {
      d: 'E',
      q_en: 'Define electrode potential and standard electrode potential.',
      q_hi: 'इलेक्ट्रोड विभव व मानक इलेक्ट्रोड विभव परिभाषित कीजिए।',
      a_en: 'Electrode potential is the potential of an electrode relative to its solution; it is standard (E°) at 1 M, 1 bar, 298 K.',
      a_hi: 'इलेक्ट्रोड विभव, इलेक्ट्रोड का अपने विलयन के सापेक्ष विभव है; मानक (E°) 1 M, 1 bar, 298 K पर।',
      formula: '$$E^\\circ\\ (1\\ \\text{M},\\ 1\\ \\text{bar},\\ 298\\ \\text{K})$$'
    },
    {
      d: 'E',
      q_en: 'What is the IUPAC convention for standard electrode potentials?',
      q_hi: 'मानक इलेक्ट्रोड विभव के लिए IUPAC परिपाटी क्या है?',
      a_en: 'E° is always the standard reduction potential: M^{n+} + ne⁻ → M.',
      a_hi: 'E° सदैव मानक अपचयन विभव होता है: M^{n+} + ne⁻ → M।',
      formula: '$$\\text{M}^{n+}+ne^-\\rightarrow\\text{M}$$'
    },
    {
      d: 'E',
      q_en: 'Represent the standard hydrogen electrode (SHE) and its potential.',
      q_hi: 'मानक हाइड्रोजन इलेक्ट्रोड (SHE) का निरूपण व विभव लिखिए।',
      a_en: 'Pt(s) | H2(g, 1 bar) | H⁺(aq, 1 M); E° = 0.00 V at all temperatures by convention.',
      a_hi: 'Pt(s) | H2(g, 1 bar) | H⁺(aq, 1 M); परिपाटी से सभी तापों पर E° = 0.00 V।',
      formula: '$$\\text{Pt(s)}|\\text{H}_2(\\text{g},1\\text{ bar})|\\text{H}^+(\\text{aq},1\\text{ M})$$'
    },
    {
      d: 'E',
      q_en: 'Write the formula for E°cell.',
      q_hi: 'E°cell का सूत्र लिखिए।',
      a_en: 'E°cell = E°cathode − E°anode = E°right − E°left (both as reduction potentials).',
      a_hi: 'E°cell = E°कैथोड − E°ऐनोड = E°दायाँ − E°बायाँ (दोनों अपचयन विभव)।',
      formula: '$$E^\\circ_{\\text{cell}}=E^\\circ_{\\text{cathode}}-E^\\circ_{\\text{anode}}$$'
    },
    {
      d: 'E',
      q_en: 'What does a negative E° of M^{n+}/M mean?',
      q_hi: 'M^{n+}/M का ऋणात्मक E° क्या दर्शाता है?',
      a_en: 'M is more easily oxidised than H2; M^{n+} is harder to reduce than H⁺.',
      a_hi: 'M, H2 से अधिक आसानी से ऑक्सीकृत होता है; M^{n+} का अपचयन H⁺ से कठिन है।',
      formula: '$$E^\\circ<0\\Rightarrow\\text{M strong reductant}$$'
    },
    {
      d: 'M',
      q_en: 'Describe the construction of the SHE.',
      q_hi: 'SHE की रचना का वर्णन कीजिए।',
      a_en: 'A platinum foil coated with platinum black dips in 1 M H⁺ while pure H2 at 1 bar is bubbled over it.',
      a_hi: 'प्लैटिनम ब्लैक लेपित Pt पन्नी 1 M H⁺ में डूबी होती है और उस पर 1 bar शुद्ध H2 प्रवाहित होती है।',
      formula: '$$2\\text{H}^+(\\text{aq})+2e^-\\rightleftharpoons\\text{H}_2(\\text{g})$$'
    },
    {
      d: 'M',
      q_en: 'Why does Cu (E° = +0.34 V) not liberate H2 from dilute HCl?',
      q_hi: 'Cu (E° = +0.34 V) तनु HCl से H2 मुक्त क्यों नहीं करता?',
      a_en: 'Cu²⁺/Cu is more positive than H⁺/H2, so Cu is a weaker reductant than H2 and cannot reduce H⁺.',
      a_hi: 'Cu²⁺/Cu, H⁺/H2 से अधिक धनात्मक है, अतः Cu, H2 से दुर्बल अपचायक है और H⁺ को अपचयित नहीं कर सकता।',
      formula: '$$\\text{Cu}+2\\text{H}^+\\nrightarrow$$'
    },
    {
      d: 'M',
      q_en: 'Why does Zn (E° = −0.76 V) liberate H2 from dilute acids?',
      q_hi: 'Zn (E° = −0.76 V) तनु अम्लों से H2 क्यों मुक्त करता है?',
      a_en: 'Its E° is more negative than 0.00 V, so Zn is a stronger reductant than H2 and reduces H⁺.',
      a_hi: 'इसका E° 0.00 V से अधिक ऋणात्मक है, अतः Zn, H2 से प्रबल अपचायक है और H⁺ को अपचयित करता है।',
      formula: '$$\\text{Zn}+2\\text{H}^+\\rightarrow\\text{Zn}^{2+}+\\text{H}_2$$'
    },
    {
      d: 'M',
      q_en: 'Calculate E°cell for Zn | Zn²⁺ ‖ Ag⁺ | Ag (Ag⁺/Ag = +0.80 V, Zn²⁺/Zn = −0.76 V).',
      q_hi: 'Zn | Zn²⁺ ‖ Ag⁺ | Ag के लिए E°cell ज्ञात कीजिए (Ag⁺/Ag = +0.80 V, Zn²⁺/Zn = −0.76 V)।',
      a_en: 'E°cell = 0.80 − (−0.76) = 1.56 V.',
      a_hi: 'E°cell = 0.80 − (−0.76) = 1.56 V।',
      formula: '$$E^\\circ_{\\text{cell}}=0.80+0.76=1.56\\ \\text{V}$$'
    },
    {
      d: 'M',
      q_en: 'Why is E° of the SHE taken as zero at all temperatures?',
      q_hi: 'SHE का E° सभी तापों पर शून्य क्यों माना जाता है?',
      a_en: 'Absolute electrode potentials cannot be measured; zero is a conventional reference against which others are measured.',
      a_hi: 'निरपेक्ष इलेक्ट्रोड विभव मापा नहीं जा सकता; शून्य एक परंपरागत संदर्भ है जिसके सापेक्ष अन्य मापे जाते हैं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Does E° change if a half-reaction is multiplied by 2?',
      q_hi: 'क्या अर्ध-अभिक्रिया को 2 से गुणा करने पर E° बदलता है?',
      a_en: 'No. E° is an intensive property (independent of the amount); only ΔG° = −nFE° changes with n.',
      a_hi: 'नहीं। E° गहन गुण है (मात्रा पर निर्भर नहीं); केवल ΔG° = −nFE° n के साथ बदलता है।',
      formula: '$$\\text{Cu}^{2+}+2e^-\\rightarrow\\text{Cu}:\\ E^\\circ=+0.34\\ \\text{V}$$'
    },
    {
      d: 'H',
      q_en: 'How does the sign of E° change when a half-reaction is reversed?',
      q_hi: 'अर्ध-अभिक्रिया उलटने पर E° का चिह्न कैसे बदलता है?',
      a_en: 'The sign flips: oxidation potential = −(reduction potential), e.g. Zn → Zn²⁺ + 2e⁻ has +0.76 V.',
      a_hi: 'चिह्न उलट जाता है: ऑक्सीकरण विभव = −(अपचयन विभव), जैसे Zn → Zn²⁺ + 2e⁻ का +0.76 V।',
      formula: '$$E^\\circ_{\\text{ox}}=-E^\\circ_{\\text{red}}$$'
    },
    {
      d: 'H',
      q_en: 'Cu has E° = +0.34 V, yet it dissolves in dilute HNO3. Why?',
      q_hi: 'Cu का E° = +0.34 V है, फिर भी वह तनु HNO3 में घुल जाता है। क्यों?',
      a_en: 'The oxidant is NO3⁻ (E° = +0.96 V for NO3⁻/NO), not H⁺, so Cu is oxidised without H2 evolution.',
      a_hi: 'ऑक्सीकारक H⁺ नहीं बल्कि NO3⁻ (NO3⁻/NO का E° = +0.96 V) है, अतः H2 मुक्त हुए बिना Cu ऑक्सीकृत होता है।',
      formula: '$$\\text{NO}_3^-+4\\text{H}^++3e^-\\rightarrow\\text{NO}+2\\text{H}_2\\text{O}$$'
    },
    {
      d: 'H',
      q_en: 'Name a practical secondary reference electrode and its potential.',
      q_hi: 'एक व्यावहारिक द्वितीयक संदर्भ इलेक्ट्रोड व उसका विभव बताइए।',
      a_en: 'Saturated calomel electrode (Hg | Hg2Cl2 | KCl), about +0.24 V vs SHE; easier to handle than SHE.',
      a_hi: 'संतृप्त कैलोमेल इलेक्ट्रोड (Hg | Hg2Cl2 | KCl), SHE के सापेक्ष लगभग +0.24 V; SHE से सुविधाजनक।',
      formula: '$$\\text{Hg}|\\text{Hg}_2\\text{Cl}_2|\\text{KCl}$$'
    },
    {
      d: 'H',
      q_en: 'Find E°cell for Fe | Fe²⁺ ‖ Cu²⁺ | Cu (Fe²⁺/Fe = −0.44 V, Cu²⁺/Cu = +0.34 V).',
      q_hi: 'Fe | Fe²⁺ ‖ Cu²⁺ | Cu के लिए E°cell ज्ञात कीजिए (Fe²⁺/Fe = −0.44 V, Cu²⁺/Cu = +0.34 V)।',
      a_en: 'E°cell = 0.34 − (−0.44) = +0.78 V; Fe is the anode (oxidised) and Cu the cathode.',
      a_hi: 'E°cell = 0.34 − (−0.44) = +0.78 V; Fe ऐनोड (ऑक्सीकृत) व Cu कैथोड है।',
      formula: '$$E^\\circ_{\\text{cell}}=0.34+0.44=0.78\\ \\text{V}$$'
    }
  ],

  /* ---------- SET 14: Electrochemical Series: Strengths & Feasibility of Reactions ---------- */
  14: [
    {
      d: 'E',
      q_en: 'Which is the strongest oxidising agent in the electrochemical series?',
      q_hi: 'विद्युत-रासायनिक श्रेणी में प्रबलतम ऑक्सीकारक कौन-सा है?',
      a_en: 'F2, with E° = +2.87 V (top of the series).',
      a_hi: 'F2, जिसका E° = +2.87 V (श्रेणी के शीर्ष पर)।',
      formula: '$$\\text{F}_2+2e^-\\rightarrow2\\text{F}^-:\\ +2.87\\ \\text{V}$$'
    },
    {
      d: 'E',
      q_en: 'Which is the strongest reducing agent in aqueous solution?',
      q_hi: 'जलीय विलयन में प्रबलतम अपचायक कौन-सा है?',
      a_en: 'Li, with E° = −3.05 V (bottom of the series).',
      a_hi: 'Li, जिसका E° = −3.05 V (श्रेणी के तल पर)।',
      formula: '$$\\text{Li}^++e^-\\rightarrow\\text{Li}:\\ -3.05\\ \\text{V}$$'
    },
    {
      d: 'E',
      q_en: 'How does E° relate to oxidising and reducing strength?',
      q_hi: 'E° का ऑक्सीकारक व अपचायक सामर्थ्य से क्या संबंध है?',
      a_en: 'Higher (more positive) E° means stronger oxidant (and weaker reductant); lower E° means stronger reductant.',
      a_hi: 'अधिक धनात्मक E° = प्रबल ऑक्सीकारक (दुर्बल अपचायक); कम E° = प्रबल अपचायक।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'When is a redox reaction spontaneous in terms of E°cell and ΔG°?',
      q_hi: 'E°cell व ΔG° के पदों में रेडॉक्स अभिक्रिया कब स्वतः होती है?',
      a_en: 'When E°cell > 0, so ΔG° = −nFE°cell < 0.',
      a_hi: 'जब E°cell > 0, अतः ΔG° = −nFE°cell < 0।',
      formula: '$$\\Delta G^\\circ=-nFE^\\circ_{\\text{cell}}$$'
    },
    {
      d: 'E',
      q_en: 'Which metals displace H2 from dilute acids?',
      q_hi: 'कौन-सी धातुएँ तनु अम्लों से H2 विस्थापित करती हैं?',
      a_en: 'Metals with negative E° (above H in the series), e.g. Zn, Fe, Mg; not Cu, Ag, Au.',
      a_hi: 'ऋणात्मक E° वाली (श्रेणी में H से ऊपर) धातुएँ, जैसे Zn, Fe, Mg; Cu, Ag, Au नहीं।',
      formula: '$$E^\\circ<0\\Rightarrow\\text{displaces H}_2$$'
    },
    {
      d: 'M',
      q_en: 'Why is Li the strongest reductant in water although Cs has lower ionisation enthalpy?',
      q_hi: 'Cs की आयनन एन्थैल्पी कम होने पर भी Li जल में प्रबलतम अपचायक क्यों है?',
      a_en: 'Small Li⁺ has a very high hydration enthalpy; the large energy released outweighs Li\'s higher IE, giving the lowest E°.',
      a_hi: 'छोटे Li⁺ की जलयोजन एन्थैल्पी बहुत अधिक है; मुक्त ऊर्जा Li की उच्च IE से अधिक होती है, अतः E° न्यूनतम।',
      formula: '$$\\Delta_{\\text{hyd}}H(\\text{Li}^+)\\gg\\Delta_{\\text{hyd}}H(\\text{Cs}^+)$$'
    },
    {
      d: 'M',
      q_en: 'Can CuSO4 solution be stored in a zinc or an iron vessel?',
      q_hi: 'क्या CuSO4 विलयन जिंक या लोहे के पात्र में रखा जा सकता है?',
      a_en: 'No. Zn (−0.76 V) and Fe (−0.44 V) reduce Cu²⁺ (+0.34 V), corroding the vessel.',
      a_hi: 'नहीं। Zn (−0.76 V) व Fe (−0.44 V), Cu²⁺ (+0.34 V) को अपचयित करते हैं और पात्र संक्षारित होता है।',
      formula: '$$\\text{Fe}+\\text{Cu}^{2+}\\rightarrow\\text{Fe}^{2+}+\\text{Cu}$$'
    },
    {
      d: 'M',
      q_en: 'Can CuSO4 solution be stored in a silver vessel?',
      q_hi: 'क्या CuSO4 विलयन चाँदी के पात्र में रखा जा सकता है?',
      a_en: 'Yes. Ag (+0.80 V) is a weaker reductant than Cu, so it cannot reduce Cu²⁺.',
      a_hi: 'हाँ। Ag (+0.80 V), Cu से दुर्बल अपचायक है, अतः Cu²⁺ को अपचयित नहीं कर सकता।',
      formula: '$$E^\\circ_{\\text{cell}}=0.34-0.80<0$$'
    },
    {
      d: 'M',
      q_en: 'Calculate E°cell and ΔG° for Zn + Cu²⁺ → Zn²⁺ + Cu (F = 96500).',
      q_hi: 'Zn + Cu²⁺ → Zn²⁺ + Cu के लिए E°cell व ΔG° ज्ञात कीजिए (F = 96500)।',
      a_en: 'E° = 1.10 V; ΔG° = −2 × 96500 × 1.10 ≈ −212.3 kJ/mol.',
      a_hi: 'E° = 1.10 V; ΔG° = −2 × 96500 × 1.10 ≈ −212.3 kJ/mol।',
      formula: '$$\\Delta G^\\circ=-2(96500)(1.10)=-212.3\\ \\text{kJ}$$'
    },
    {
      d: 'M',
      q_en: 'Arrange Mg, Zn, Cu, Ag in decreasing reducing power.',
      q_hi: 'Mg, Zn, Cu, Ag को घटती अपचायक क्षमता के क्रम में रखिए।',
      a_en: 'Mg > Zn > Cu > Ag (E° = −2.37, −0.76, +0.34, +0.80 V).',
      a_hi: 'Mg > Zn > Cu > Ag (E° = −2.37, −0.76, +0.34, +0.80 V)।',
      formula: '$$\\text{Mg}>\\text{Zn}>\\text{Cu}>\\text{Ag}$$'
    },
    {
      d: 'H',
      q_en: 'Does F2 oxidise water to O2 spontaneously? Use E° values.',
      q_hi: 'क्या F2, जल को O2 में स्वतः ऑक्सीकृत करता है? E° मानों से बताइए।',
      a_en: 'Yes: F2/F⁻ = +2.87 V is far above O2/H2O = +1.23 V, so E°cell ≈ +1.64 V > 0.',
      a_hi: 'हाँ: F2/F⁻ = +2.87 V, O2/H2O = +1.23 V से बहुत ऊपर है, अतः E°cell ≈ +1.64 V > 0।',
      formula: '$$E^\\circ_{\\text{cell}}=2.87-1.23=1.64\\ \\text{V}$$'
    },
    {
      d: 'H',
      q_en: 'Will Fe³⁺ oxidise I⁻ to I2? (Fe³⁺/Fe²⁺ = +0.77 V, I2/I⁻ = +0.54 V)',
      q_hi: 'क्या Fe³⁺, I⁻ को I2 में ऑक्सीकृत करेगा? (Fe³⁺/Fe²⁺ = +0.77 V, I2/I⁻ = +0.54 V)',
      a_en: 'Yes: E°cell = 0.77 − 0.54 = +0.23 V > 0, so the reaction is spontaneous.',
      a_hi: 'हाँ: E°cell = 0.77 − 0.54 = +0.23 V > 0, अतः अभिक्रिया स्वतः है।',
      formula: '$$2\\text{Fe}^{3+}+2\\text{I}^-\\rightarrow2\\text{Fe}^{2+}+\\text{I}_2$$'
    },
    {
      d: 'H',
      q_en: 'Can Cu displace Zn from ZnSO4? Use E° values.',
      q_hi: 'क्या Cu, ZnSO4 से Zn को विस्थापित कर सकता है? E° मानों से बताइए।',
      a_en: 'No: E°cell = −0.76 − (+0.34) = −1.10 V < 0, so the reaction is non-spontaneous.',
      a_hi: 'नहीं: E°cell = −0.76 − (+0.34) = −1.10 V < 0, अतः अभिक्रिया अस्वतः है।',
      formula: '$$E^\\circ_{\\text{cell}}=-1.10\\ \\text{V}$$'
    },
    {
      d: 'H',
      q_en: 'Explain why Li⁺/Li (−3.05 V) is lower than Na⁺/Na (−2.71 V) despite higher IE of Li.',
      q_hi: 'Li का IE अधिक होने पर भी Li⁺/Li (−3.05 V), Na⁺/Na (−2.71 V) से कम क्यों है?',
      a_en: 'E° depends on sublimation, ionisation and hydration enthalpies together; Li⁺\'s hydration energy is the dominant term.',
      a_hi: 'E° उर्ध्वपातन, आयनन व जलयोजन एन्थैल्पियों पर मिलकर निर्भर है; Li⁺ की जलयोजन ऊर्जा प्रमुख है।',
      formula: '$$E^\\circ\\leftarrow\\Delta_{\\text{sub}}H+\\text{IE}+\\Delta_{\\text{hyd}}H$$'
    },
    {
      d: 'H',
      q_en: 'Where can a metal be placed relative to H in the series if it dissolves only in oxidising acids?',
      q_hi: 'जो धातु केवल ऑक्सीकारक अम्लों में घुलती है, वह श्रेणी में H के सापेक्ष कहाँ होगी?',
      a_en: 'Below H (positive E°), e.g. Cu, Ag: they need oxidising acids like HNO3 or hot conc. H2SO4.',
      a_hi: 'H के नीचे (धनात्मक E°), जैसे Cu, Ag: इन्हें HNO3 या गर्म सांद्र H2SO4 जैसे ऑक्सीकारक अम्ल चाहिए।',
      formula: '$$E^\\circ>0\\Rightarrow\\text{needs oxidising acid}$$'
    }
  ],

  /* ---------- SET 15: Chapter 7 Mixed JEE/NEET Numericals & Exemplar Traps ---------- */
  15: [
    {
      d: 'E',
      q_en: 'How many moles of KMnO4 oxidise 1 mol FeSO4 in acid?',
      q_hi: 'अम्ल में 1 mol FeSO4 को ऑक्सीकृत करने हेतु कितने मोल KMnO4 चाहिए?',
      a_en: '1/5 mol (Fe²⁺ gives 1e⁻, Mn gains 5e⁻).',
      a_hi: '1/5 mol (Fe²⁺ 1e⁻ देता है, Mn 5e⁻ ग्रहण करता है)।',
      formula: '$$\\text{mol}_{\\text{KMnO}_4}=\\frac{1}{5}$$'
    },
    {
      d: 'E',
      q_en: 'How many moles of K2Cr2O7 oxidise 1 mol FeSO4 in acid?',
      q_hi: 'अम्ल में 1 mol FeSO4 को ऑक्सीकृत करने हेतु कितने मोल K2Cr2O7 चाहिए?',
      a_en: '1/6 mol (K2Cr2O7 gains 6e⁻).',
      a_hi: '1/6 mol (K2Cr2O7 6e⁻ ग्रहण करता है)।',
      formula: '$$\\text{mol}_{\\text{K}_2\\text{Cr}_2\\text{O}_7}=\\frac{1}{6}$$'
    },
    {
      d: 'E',
      q_en: 'How many moles of KMnO4 oxidise 1 mol H2C2O4?',
      q_hi: '1 mol H2C2O4 को ऑक्सीकृत करने हेतु कितने मोल KMnO4 चाहिए?',
      a_en: '2/5 mol (oxalic acid gives 2e⁻).',
      a_hi: '2/5 mol (ऑक्सैलिक अम्ल 2e⁻ देता है)।',
      formula: '$$\\text{mol}=\\frac{2}{5}$$'
    },
    {
      d: 'E',
      q_en: 'How many moles of K2Cr2O7 oxidise 1 mol H2C2O4?',
      q_hi: '1 mol H2C2O4 को ऑक्सीकृत करने हेतु कितने मोल K2Cr2O7 चाहिए?',
      a_en: '2/6 = 1/3 mol.',
      a_hi: '2/6 = 1/3 mol।',
      formula: '$$\\text{mol}=\\frac{2}{6}=\\frac{1}{3}$$'
    },
    {
      d: 'E',
      q_en: 'How many moles of KMnO4 oxidise 1 mol FeC2O4?',
      q_hi: '1 mol FeC2O4 को ऑक्सीकृत करने हेतु कितने मोल KMnO4 चाहिए?',
      a_en: 'n-factor of FeC2O4 is 3, so 3/5 mol KMnO4.',
      a_hi: 'FeC2O4 का n-गुणक 3 है, अतः 3/5 mol KMnO4।',
      formula: '$$\\text{mol}=\\frac{3}{5}$$'
    },
    {
      d: 'M',
      q_en: 'How many moles of K2Cr2O7 oxidise 1 mol FeC2O4?',
      q_hi: '1 mol FeC2O4 को ऑक्सीकृत करने हेतु कितने मोल K2Cr2O7 चाहिए?',
      a_en: '3/6 = 1/2 mol.',
      a_hi: '3/6 = 1/2 mol।',
      formula: '$$\\text{mol}=\\frac{3}{6}=\\frac{1}{2}$$'
    },
    {
      d: 'M',
      q_en: 'How many moles of KMnO4 oxidise 1 mol H2S (to S)?',
      q_hi: '1 mol H2S (S में) को ऑक्सीकृत करने हेतु कितने मोल KMnO4 चाहिए?',
      a_en: 'S²⁻ → S gives 2e⁻, so 2/5 mol KMnO4.',
      a_hi: 'S²⁻ → S में 2e⁻, अतः 2/5 mol KMnO4।',
      formula: '$$\\text{S}^{2-}\\rightarrow\\text{S}+2e^-$$'
    },
    {
      d: 'M',
      q_en: 'How many moles of K2Cr2O7 oxidise 1 mol H2S (to S)?',
      q_hi: '1 mol H2S (S में) को ऑक्सीकृत करने हेतु कितने मोल K2Cr2O7 चाहिए?',
      a_en: '2/6 = 1/3 mol.',
      a_hi: '2/6 = 1/3 mol।',
      formula: '$$\\text{mol}=\\frac{2}{6}=\\frac{1}{3}$$'
    },
    {
      d: 'M',
      q_en: 'Why is Cu²⁺(aq) more stable than Cu⁺(aq)?',
      q_hi: 'Cu²⁺(aq), Cu⁺(aq) से अधिक स्थायी क्यों है?',
      a_en: 'The hydration enthalpy of Cu²⁺ is much higher, compensating the second ionisation enthalpy; Cu⁺ disproportionates.',
      a_hi: 'Cu²⁺ की जलयोजन एन्थैल्पी बहुत अधिक है, जो द्वितीय आयनन एन्थैल्पी की क्षतिपूर्ति करती है; Cu⁺ असमानुपातित होता है।',
      formula: '$$2\\text{Cu}^+\\rightarrow\\text{Cu}^{2+}+\\text{Cu}$$'
    },
    {
      d: 'M',
      q_en: 'Find the normality and molarity of 10-volume H2O2.',
      q_hi: '10-आयतन H2O2 की नॉर्मलता व मोलरता ज्ञात कीजिए।',
      a_en: 'N = 10/5.6 ≈ 1.79 N; M = N/2 ≈ 0.89 M (1 mL liberates 10 mL O2 at STP).',
      a_hi: 'N = 10/5.6 ≈ 1.79 N; M = N/2 ≈ 0.89 M (1 mL से STP पर 10 mL O2)।',
      formula: '$$N=\\frac{V}{5.6}=\\frac{10}{5.6}$$'
    },
    {
      d: 'H',
      q_en: 'How many mL of 0.02 M KMnO4 oxidise 50 mL of 0.1 M Fe²⁺?',
      q_hi: '50 mL 0.1 M Fe²⁺ को ऑक्सीकृत करने हेतु 0.02 M KMnO4 कितने mL चाहिए?',
      a_en: '5 × 0.02 × V = 1 × 0.1 × 50, so V = 50 mL.',
      a_hi: '5 × 0.02 × V = 1 × 0.1 × 50, अतः V = 50 mL।',
      formula: '$$V=\\frac{0.1\\times50}{5\\times0.02}=50\\ \\text{mL}$$'
    },
    {
      d: 'H',
      q_en: 'What mass of oxalic acid dihydrate (M = 126) is oxidised by 100 mL of 0.1 M KMnO4?',
      q_hi: '100 mL 0.1 M KMnO4 द्वारा कितना ऑक्सैलिक अम्ल डाइहाइड्रेट (M = 126) ऑक्सीकृत होगा?',
      a_en: '0.01 mol KMnO4 × 5/2 = 0.025 mol acid; mass = 0.025 × 126 = 3.15 g.',
      a_hi: '0.01 mol KMnO4 × 5/2 = 0.025 mol अम्ल; द्रव्यमान = 0.025 × 126 = 3.15 g।',
      formula: '$$0.01\\times\\frac{5}{2}\\times126=3.15\\ \\text{g}$$'
    },
    {
      d: 'H',
      q_en: 'ASSERTION: Oxidation number can be fractional. REASON: It is an average value. True?',
      q_hi: 'अभिकथन: ऑक्सीकरण संख्या भिन्नात्मक हो सकती है। कारण: यह औसत मान है। सही?',
      a_en: 'Both true and the reason explains it (e.g. Fe3O4 = +8/3, C3O2 = +4/3); real atoms carry integer states.',
      a_hi: 'दोनों सही व कारण व्याख्या करता है (जैसे Fe3O4 = +8/3, C3O2 = +4/3); वास्तविक परमाणु पूर्णांक अवस्था में होते हैं।',
      formula: '$$\\bar{x}=\\frac{\\sum x_i}{n}$$'
    },
    {
      d: 'H',
      q_en: 'ASSERTION: F2 shows only −1 in compounds. REASON: F is the most electronegative. True?',
      q_hi: 'अभिकथन: F2 यौगिकों में केवल −1 दर्शाता है। कारण: F सर्वाधिक विद्युत-ऋणात्मक है। सही?',
      a_en: 'Both true and the reason explains it: F always attracts shared electrons, so it can never be positive.',
      a_hi: 'दोनों सही व कारण व्याख्या करता है: F साझे e⁻ सदैव अपनी ओर खींचता है, अतः धनात्मक नहीं हो सकता।',
      formula: '$$\\text{F}:\\ 0\\ \\text{or}\\ -1$$'
    },
    {
      d: 'H',
      q_en: 'Find the equivalent weight of Mohr\'s salt FeSO4·(NH4)2SO4·6H2O (M = 392) with KMnO4.',
      q_hi: 'KMnO4 के साथ मोहर लवण FeSO4·(NH4)2SO4·6H2O (M = 392) का तुल्यांकी भार ज्ञात कीजिए।',
      a_en: 'n = 1 (Fe²⁺ → Fe³⁺), so the equivalent weight equals its molar mass, 392.',
      a_hi: 'n = 1 (Fe²⁺ → Fe³⁺), अतः तुल्यांकी भार मोलर द्रव्यमान 392 के बराबर।',
      formula: '$$E=\\frac{392}{1}=392$$'
    }
  ]

};
