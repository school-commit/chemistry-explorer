/* ==========================================================================
   CHEMISTRY EXPLORER - Class 11 Chemistry
   Chapter 4: Chemical Bonding and Molecular Structure
   Flashcard database: 15 sets x 15 cards = 225 hand-crafted cards
   Each set: 5 Easy (E) + 5 Medium (M) + 5 Hard (H)
   Read by buildDeck(ch, s) via window.FLASHCARD_SETS_DB[chId][setNum]
   ========================================================================== */
window.FLASHCARD_SETS_DB = window.FLASHCARD_SETS_DB || {};
window.FLASHCARD_SETS_DB.ch4 = {

  /* ---------- SET 1: Kossel-Lewis Approach, Valence Electrons & Lewis Symbols ---------- */
  1: [
    {
      d: 'E',
      q_en: 'Why do atoms combine to form molecules?',
      q_hi: 'परमाणु संयोग कर अणु क्यों बनाते हैं?',
      a_en: 'To lower their potential energy and attain a stable, noble-gas-like electron configuration.',
      a_hi: 'अपनी स्थितिज ऊर्जा घटाने तथा स्थायी, उत्कृष्ट गैस जैसा इलेक्ट्रॉनिक विन्यास पाने के लिए।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'State the Kossel-Lewis octet rule.',
      q_hi: 'कौसेल-लुईस अष्टक नियम (octet rule) लिखिए।',
      a_en: 'Atoms combine by gaining, losing or sharing electrons so each gets eight electrons in its valence shell.',
      a_hi: 'परमाणु इलेक्ट्रॉन ग्रहण, त्याग या साझा कर अपने संयोजी कोश में आठ इलेक्ट्रॉन प्राप्त करते हैं।',
      formula: '$$ns^2np^6$$'
    },
    {
      d: 'E',
      q_en: 'What do the dots in a Lewis dot symbol represent?',
      q_hi: 'लुईस बिंदु प्रतीक (Lewis dot symbol) में बिंदु क्या दर्शाते हैं?',
      a_en: 'The valence electrons; Li, Be, B, C, N, O, F and Ne carry 1, 2, 3, 4, 5, 6, 7 and 8 dots respectively.',
      a_hi: 'संयोजी इलेक्ट्रॉन; Li, Be, B, C, N, O, F व Ne में क्रमशः 1, 2, 3, 4, 5, 6, 7 व 8 बिंदु होते हैं।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Give examples of single, double and triple covalent bonds.',
      q_hi: 'एकल, द्वि तथा त्रि सहसंयोजक आबंध के उदाहरण दीजिए।',
      a_en: 'Single: Cl2; double: O2 (and CO2); triple: N2 (and C2H2).',
      a_hi: 'एकल: Cl₂; द्वि: O₂ (तथा CO₂); त्रि: N₂ (तथा C₂H₂)।',
      formula: '$$\\text{Cl–Cl},\\ \\text{O=O},\\ \\text{N}\\equiv\\text{N}$$'
    },
    {
      d: 'E',
      q_en: 'How many bonding pairs and lone pairs are in NH3 and H2O?',
      q_hi: 'NH₃ व H₂O में कितने आबंधी युग्म व एकाकी युग्म हैं?',
      a_en: 'NH3: 3 bonding pairs, 1 lone pair; H2O: 2 bonding pairs, 2 lone pairs.',
      a_hi: 'NH₃: 3 आबंधी युग्म, 1 एकाकी युग्म; H₂O: 2 आबंधी युग्म, 2 एकाकी युग्म।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'How is the group valence related to the dots in a Lewis symbol?',
      q_hi: 'लुईस प्रतीक के बिंदुओं से वर्ग संयोजकता का क्या संबंध है?',
      a_en: 'Valence equals the number of dots (up to 4) or 8 minus the number of dots (for 4 or more).',
      a_hi: 'संयोजकता = बिंदुओं की संख्या (4 तक) या 8 − बिंदु (4 या अधिक पर)।',
      formula: '$$\\text{Valence}=\\text{dots}\\ \\text{or}\\ 8-\\text{dots}$$'
    },
    {
      d: 'M',
      q_en: 'Count the bonds in CO2, C2H4 and C2H2.',
      q_hi: 'CO₂, C₂H₄ तथा C₂H₂ में आबंध गिनिए।',
      a_en: 'CO2: two C=O double bonds; C2H4: one C=C and four C-H; C2H2: one C≡C and two C-H.',
      a_hi: 'CO₂: दो C=O; C₂H₄: एक C=C व चार C–H; C₂H₂: एक C≡C व दो C–H।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'How many bonding pairs and lone pairs are in NF3?',
      q_hi: 'NF₃ में कितने आबंधी युग्म व एकाकी युग्म हैं?',
      a_en: '3 bonding pairs (N-F) and 10 lone pairs (1 on N, 3 on each F).',
      a_hi: '3 आबंधी युग्म (N–F) तथा 10 एकाकी युग्म (N पर 1, प्रत्येक F पर 3)।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What is a coordinate (dative) bond? Give examples.',
      q_hi: 'उपसहसंयोजक (दाता) आबंध क्या है? उदाहरण दीजिए।',
      a_en: 'A bond where one atom donates both electrons of the shared pair, e.g. NH4+, H3O+ and O3.',
      a_hi: 'ऐसा आबंध जिसमें एक ही परमाणु साझा युग्म के दोनों इलेक्ट्रॉन देता है, जैसे NH₄⁺, H₃O⁺ तथा O₃।',
      formula: '$$\\text{NH}_3+\\text{H}^+\\rightarrow\\text{NH}_4^+$$'
    },
    {
      d: 'M',
      q_en: 'How many bonding pairs and lone pairs are in HNO3?',
      q_hi: 'HNO₃ में कितने आबंधी युग्म व एकाकी युग्म हैं?',
      a_en: '5 bonding pairs (the N=O double bond counted as 2) and 7 lone pairs; 24 electrons in all.',
      a_hi: '5 आबंधी युग्म (N=O के 2 गिनकर) तथा 7 एकाकी युग्म; कुल 24 इलेक्ट्रॉन।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Show the bonding of CO: where is the coordinate bond?',
      q_hi: 'CO का आबंधन बताइए: उपसहसंयोजक आबंध कहाँ है?',
      a_en: 'C≡O has one dative bond: O donates a lone pair to carbon\'s empty orbital; each atom keeps one lone pair.',
      a_hi: 'C≡O में एक दाता आबंध है: O अपना एकाकी युग्म C के रिक्त कक्षक को देता है; प्रत्येक पर एक एकाकी युग्म।',
      formula: '$$:\\text{C}\\equiv\\text{O}:$$'
    },
    {
      d: 'H',
      q_en: 'How many lone pairs does O3 have and where is its dative bond?',
      q_hi: 'O₃ में कुल कितने एकाकी युग्म हैं और दाता आबंध कहाँ है?',
      a_en: '6 lone pairs (1 on central O, 3 and 2 on the ends); the central O donates a pair to one terminal O.',
      a_hi: '6 एकाकी युग्म (केंद्रीय O पर 1, सिरों पर 3 व 2); केंद्रीय O एक सिरे वाले O को युग्म देता है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Which has the most lone pairs: NH3, H2O, NF3 or CO?',
      q_hi: 'NH₃, H₂O, NF₃ व CO में सर्वाधिक एकाकी युग्म किसमें हैं?',
      a_en: 'NF3 with 10; H2O and CO have 2 each and NH3 has 1.',
      a_hi: 'NF₃ में 10; H₂O व CO में 2-2 तथा NH₃ में 1।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'In NH4+, is the dative N-H bond different from the other three?',
      q_hi: 'NH₄⁺ में दाता N–H आबंध अन्य तीनों से भिन्न है क्या?',
      a_en: 'No; once formed, all four N-H bonds are identical in length, strength and angle (109.5°).',
      a_hi: 'नहीं; बनने के बाद चारों N–H आबंध लंबाई, सामर्थ्य व कोण (109.5°) में एकसमान होते हैं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why is H2 stable with only two electrons?',
      q_hi: 'केवल दो इलेक्ट्रॉनों के साथ H₂ स्थायी क्यों है?',
      a_en: 'H follows the duet rule: sharing gives each H the 1s^2 configuration of helium.',
      a_hi: 'H द्वयक (duet) नियम मानता है: साझा करने पर प्रत्येक H को हीलियम का 1s² विन्यास मिलता है।',
      formula: '$$1s^2\\ (\\text{He-like})$$'
    }
  ],

  /* ---------- SET 2: Formal Charge & Exceptions to the Octet Rule ---------- */
  2: [
    {
      d: 'E',
      q_en: 'Write the formal charge formula.',
      q_hi: 'फ़ॉर्मल आवेश (formal charge) का सूत्र लिखिए।',
      a_en: 'FC = V - L - B/2: valence electrons minus lone-pair electrons minus half the bonding electrons.',
      a_hi: 'FC = V − L − B/2: संयोजी इलेक्ट्रॉन − एकाकी इलेक्ट्रॉन − आबंधी इलेक्ट्रॉनों का आधा।',
      formula: '$$FC=V-L-\\frac{1}{2}B$$'
    },
    {
      d: 'E',
      q_en: 'Which Lewis structure is the most stable, judged by formal charge?',
      q_hi: 'फ़ॉर्मल आवेश के आधार पर कौन-सी लुईस संरचना सर्वाधिक स्थायी होती है?',
      a_en: 'The one with the lowest formal charges, and any negative charge on the more electronegative atom.',
      a_hi: 'जिसमें फ़ॉर्मल आवेश न्यूनतम हों तथा ऋणावेश अधिक विद्युत ऋणात्मक परमाणु पर हो।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What is an incomplete octet? Give examples.',
      q_hi: 'अपूर्ण अष्टक (incomplete octet) क्या है? उदाहरण दीजिए।',
      a_en: 'The central atom has fewer than 8 electrons, e.g. LiCl, BeH2, BeCl2, BF3 and AlCl3.',
      a_hi: 'केंद्रीय परमाणु पर 8 से कम इलेक्ट्रॉन, जैसे LiCl, BeH₂, BeCl₂, BF₃ तथा AlCl₃।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What are odd-electron molecules? Give examples.',
      q_hi: 'विषम-इलेक्ट्रॉन अणु (odd-electron molecules) क्या हैं? उदाहरण दीजिए।',
      a_en: 'Molecules with an odd total of valence electrons: NO (11), NO2 (17) and ClO2 (19).',
      a_hi: 'विषम संख्या में संयोजी इलेक्ट्रॉन वाले अणु: NO (11), NO₂ (17) तथा ClO₂ (19)।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What is an expanded octet? Give examples.',
      q_hi: 'विस्तारित अष्टक (expanded octet) क्या है? उदाहरण दीजिए।',
      a_en: 'The central atom holds more than 8 electrons using d-orbitals, e.g. PF5, SF6, H2SO4 and IF7.',
      a_hi: 'केंद्रीय परमाणु d-कक्षकों के प्रयोग से 8 से अधिक इलेक्ट्रॉन रखता है, जैसे PF₅, SF₆, H₂SO₄, IF₇।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Find the formal charge on each atom in O3 (O=O+-O-).',
      q_hi: 'O₃ (O=O⁺–O⁻) के प्रत्येक परमाणु पर फ़ॉर्मल आवेश ज्ञात कीजिए।',
      a_en: 'Central O: +1; singly bonded terminal O: -1; doubly bonded terminal O: 0. Net charge is zero.',
      a_hi: 'केंद्रीय O: +1; एकल आबंधित सिरा O: −1; द्वि आबंधित सिरा O: 0। कुल आवेश शून्य।',
      formula: '$$\\text{Central O}:6-2-\\tfrac{6}{2}=+1$$'
    },
    {
      d: 'M',
      q_en: 'Find the formal charge on each atom in CO3^2-.',
      q_hi: 'CO₃²⁻ के प्रत्येक परमाणु पर फ़ॉर्मल आवेश ज्ञात कीजिए।',
      a_en: 'C: 0; the C=O oxygen: 0; each of the two C-O⁻ oxygens: -1; total -2.',
      a_hi: 'C: 0; C=O वाला O: 0; दोनों C–O⁻ वाले O पर −1 प्रत्येक; कुल −2।',
      formula: '$$\\text{O}^-:6-6-\\tfrac{2}{2}=-1$$'
    },
    {
      d: 'M',
      q_en: 'Find the formal charges in NO2- (O=N-O-).',
      q_hi: 'NO₂⁻ (O=N–O⁻) में फ़ॉर्मल आवेश ज्ञात कीजिए।',
      a_en: 'N: 0; the doubly bonded O: 0; the singly bonded O: -1; total -1.',
      a_hi: 'N: 0; द्वि आबंधित O: 0; एकल आबंधित O: −1; कुल −1।',
      formula: '$$\\text{N}:5-2-\\tfrac{6}{2}=0$$'
    },
    {
      d: 'M',
      q_en: 'Find the formal charges in SO4^2- with two S=O and two S-O- bonds.',
      q_hi: 'दो S=O व दो S–O⁻ वाले SO₄²⁻ में फ़ॉर्मल आवेश ज्ञात कीजिए।',
      a_en: 'S: 0; two S=O oxygens: 0; two S-O⁻ oxygens: -1 each; total -2.',
      a_hi: 'S: 0; दोनों S=O के O: 0; दोनों S–O⁻ के O: −1 प्रत्येक; कुल −2।',
      formula: '$$\\text{S}:6-0-\\tfrac{12}{2}=0$$'
    },
    {
      d: 'M',
      q_en: 'Find the formal charge on Cl in ClO4- with three Cl=O and one Cl-O-.',
      q_hi: 'तीन Cl=O व एक Cl–O⁻ वाले ClO₄⁻ में Cl पर फ़ॉर्मल आवेश ज्ञात कीजिए।',
      a_en: 'Cl: 7 - 0 - 14/2 = 0; the three Cl=O oxygens are 0 and the Cl-O⁻ oxygen is -1.',
      a_hi: 'Cl: 7 − 0 − 14/2 = 0; तीनों Cl=O के O: 0 तथा Cl–O⁻ का O: −1।',
      formula: '$$\\text{Cl}:7-0-\\tfrac{14}{2}=0$$'
    },
    {
      d: 'H',
      q_en: 'Find the formal charges on C and O in :C≡O:.',
      q_hi: ':C≡O: में C व O पर फ़ॉर्मल आवेश ज्ञात कीजिए।',
      a_en: 'C: 4 - 2 - 3 = -1; O: 6 - 2 - 3 = +1, even though O is more electronegative.',
      a_hi: 'C: 4 − 2 − 3 = −1; O: 6 − 2 − 3 = +1, यद्यपि O अधिक विद्युत ऋणात्मक है।',
      formula: '$$\\text{C}:-1;\\ \\ \\text{O}:+1$$'
    },
    {
      d: 'H',
      q_en: 'Why does BF3 not use B=F double bonds to complete boron\'s octet?',
      q_hi: 'B का अष्टक पूरा करने हेतु BF₃ में B=F द्वि आबंध क्यों नहीं बनते?',
      a_en: 'It would put -1 on B and +1 on highly electronegative F, an unfavourable charge distribution.',
      a_hi: 'इससे B पर −1 तथा अत्यधिक विद्युत ऋणात्मक F पर +1 आवेश आता, जो प्रतिकूल है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'What happens when BF3 meets NH3, and why?',
      q_hi: 'BF₃ और NH₃ मिलने पर क्या होता है और क्यों?',
      a_en: 'BF3 is electron-deficient and accepts N\'s lone pair, forming the adduct H3N→BF3 with a dative bond.',
      a_hi: 'BF₃ इलेक्ट्रॉन-न्यून है और N का एकाकी युग्म स्वीकार कर दाता आबंध वाला योगज H₃N→BF₃ बनाता है।',
      formula: '$$\\text{H}_3\\text{N}\\rightarrow\\text{BF}_3$$'
    },
    {
      d: 'H',
      q_en: 'How many electrons surround the central atom in SF6 and IF7?',
      q_hi: 'SF₆ व IF₇ में केंद्रीय परमाणु के चारों ओर कितने इलेक्ट्रॉन हैं?',
      a_en: 'SF6: 12 electrons (six bond pairs); IF7: 14 electrons (seven bond pairs).',
      a_hi: 'SF₆: 12 इलेक्ट्रॉन (छह आबंधी युग्म); IF₇: 14 इलेक्ट्रॉन (सात आबंधी युग्म)।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why do XeF2, XeF4 and KrF2 defy the octet rule?',
      q_hi: 'XeF₂, XeF₄ व KrF₂ अष्टक नियम का उल्लंघन क्यों करते हैं?',
      a_en: 'Noble gas atoms end up with more than 8 electrons: Xe has 10 in XeF2 and 12 in XeF4.',
      a_hi: 'उत्कृष्ट गैस परमाणुओं पर 8 से अधिक इलेक्ट्रॉन आ जाते हैं: XeF₂ में Xe पर 10 तथा XeF₄ में 12।',
      formula: ''
    }
  ],

  /* ---------- SET 3: Ionic (Electrovalent) Bond, Lattice Enthalpy & Born-Haber Cycle ---------- */
  3: [
    {
      d: 'E',
      q_en: 'State the conditions for forming an ionic bond.',
      q_hi: 'आयनिक आबंध बनने की शर्तें लिखिए।',
      a_en: 'Low ionisation enthalpy of the metal, highly negative electron gain enthalpy of the non-metal, and high lattice enthalpy.',
      a_hi: 'धातु की कम आयनन एन्थैल्पी, अधातु की अत्यधिक ऋणात्मक इलेक्ट्रॉन लब्धि एन्थैल्पी तथा उच्च जालक एन्थैल्पी।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Define lattice enthalpy with the example of NaCl.',
      q_hi: 'NaCl के उदाहरण से जालक एन्थैल्पी (lattice enthalpy) परिभाषित कीजिए।',
      a_en: 'Energy needed to separate one mole of a solid ionic compound into gaseous ions; NaCl: 788 kJ/mol.',
      a_hi: 'एक मोल ठोस आयनिक यौगिक को गैसीय आयनों में अलग करने की ऊर्जा; NaCl: 788 kJ/mol।',
      formula: '$$\\text{NaCl(s)}\\rightarrow\\text{Na}^+\\text{(g)}+\\text{Cl}^-\\text{(g)}$$'
    },
    {
      d: 'E',
      q_en: 'Which factors decide the lattice enthalpy?',
      q_hi: 'जालक एन्थैल्पी किन कारकों पर निर्भर करती है?',
      a_en: 'Ionic charges (higher charge gives greater value) and ionic sizes (smaller ions give greater value).',
      a_hi: 'आयनिक आवेश (अधिक आवेश पर अधिक) तथा आयनिक आकार (छोटे आकार पर अधिक)।',
      formula: '$$U\\propto\\frac{q^+q^-}{r^++r^-}$$'
    },
    {
      d: 'E',
      q_en: 'Why do ionic compounds have high melting points?',
      q_hi: 'आयनिक यौगिकों के गलनांक उच्च क्यों होते हैं?',
      a_en: 'Strong electrostatic attraction between ions in the crystal lattice needs a large amount of energy to overcome.',
      a_hi: 'क्रिस्टल जालक में आयनों के बीच प्रबल स्थिर वैद्युत आकर्षण को तोड़ने हेतु अधिक ऊर्जा चाहिए।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What is electrovalence?',
      q_hi: 'विद्युत संयोजकता (electrovalence) क्या है?',
      a_en: 'The number of unit charges on an ion, i.e. electrons lost or gained, e.g. Mg2+ = 2, Cl- = 1.',
      a_hi: 'आयन पर इकाई आवेशों की संख्या, अर्थात् त्यागे/ग्रहण किए इलेक्ट्रॉन, जैसे Mg²⁺ = 2, Cl⁻ = 1।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Compare the lattice enthalpy of MgO and NaCl.',
      q_hi: 'MgO व NaCl की जालक एन्थैल्पी की तुलना कीजिए।',
      a_en: 'MgO is far higher (about 3791 vs 788 kJ/mol) because of 2+/2- charges and smaller ions.',
      a_hi: 'MgO की बहुत अधिक (लगभग 3791 बनाम 788 kJ/mol), क्योंकि आवेश 2+/2− हैं और आयन छोटे हैं।',
      formula: '$$\\text{MgO}\\gg\\text{NaCl}$$'
    },
    {
      d: 'M',
      q_en: 'Which has greater lattice enthalpy: LiF or CsI?',
      q_hi: 'LiF और CsI में किसकी जालक एन्थैल्पी अधिक है?',
      a_en: 'LiF, since small Li+ and F- ions sit closer together than large Cs+ and I-.',
      a_hi: 'LiF की, क्योंकि छोटे Li⁺ व F⁻ आयन बड़े Cs⁺ व I⁻ से अधिक निकट होते हैं।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Which has greater lattice enthalpy: Al2O3 or MgO?',
      q_hi: 'Al₂O₃ और MgO में किसकी जालक एन्थैल्पी अधिक है?',
      a_en: 'Al2O3, because Al3+ is smaller and more highly charged than Mg2+.',
      a_hi: 'Al₂O₃ की, क्योंकि Al³⁺ का आवेश अधिक व आकार छोटा है, Mg²⁺ की तुलना में।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'List the Born-Haber cycle steps for NaCl.',
      q_hi: 'NaCl के लिए बॉर्न-हेबर चक्र के चरण बताइए।',
      a_en: 'Sublimation of Na, ionisation of Na, dissociation of 1/2 Cl2, electron gain by Cl, then lattice formation.',
      a_hi: 'Na का ऊर्ध्वपातन, Na का आयनन, ½Cl₂ का वियोजन, Cl द्वारा इलेक्ट्रॉन ग्रहण, फिर जालक निर्माण।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Write the Born-Haber energy balance for NaCl and verify it.',
      q_hi: 'NaCl के लिए बॉर्न-हेबर ऊर्जा समीकरण लिखकर सत्यापित कीजिए।',
      a_en: '108 + 496 + 121 - 349 - 788 = -412 kJ/mol, close to ΔfH = -411.',
      a_hi: '108 + 496 + 121 − 349 − 788 = −412 kJ/mol, जो ΔfH = −411 के निकट है।',
      formula: '$$\\Delta_fH=\\Delta_{sub}H+IE+\\tfrac{1}{2}\\Delta_{diss}H+\\Delta_{eg}H-U$$'
    },
    {
      d: 'H',
      q_en: 'What is the condition for an ionic solid to dissolve in water?',
      q_hi: 'आयनिक ठोस के जल में घुलने की शर्त क्या है?',
      a_en: 'The hydration enthalpy of its ions must exceed the lattice enthalpy.',
      a_hi: 'इसके आयनों की जलयोजन एन्थैल्पी जालक एन्थैल्पी से अधिक होनी चाहिए।',
      formula: '$$\\Delta_{hyd}H>U$$'
    },
    {
      d: 'H',
      q_en: 'Why is BaSO4 insoluble while BeSO4 is soluble?',
      q_hi: 'BaSO₄ अविलेय है जबकि BeSO₄ विलेय, क्यों?',
      a_en: 'Lattice enthalpy barely changes, but hydration enthalpy falls steeply with size: high for Be2+, too low for Ba2+.',
      a_hi: 'जालक एन्थैल्पी लगभग स्थिर रहती है पर आकार बढ़ने से जलयोजन एन्थैल्पी तेज़ी से घटती है: Be²⁺ उच्च, Ba²⁺ बहुत कम।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Arrange Group 2 sulfates by decreasing solubility in water.',
      q_hi: 'वर्ग 2 के सल्फेटों को जल में घटती विलेयता के क्रम में लिखिए।',
      a_en: 'BeSO4 > MgSO4 > CaSO4 > SrSO4 > BaSO4 (hydration enthalpy falls faster than lattice enthalpy).',
      a_hi: 'BeSO₄ > MgSO₄ > CaSO₄ > SrSO₄ > BaSO₄ (जलयोजन एन्थैल्पी, जालक एन्थैल्पी से तेज़ घटती है)।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why is AgCl insoluble in water unlike NaCl?',
      q_hi: 'NaCl के विपरीत AgCl जल में अविलेय क्यों है?',
      a_en: 'Ag+ (pseudo-noble gas 4d10) polarises Cl-, adding covalent character; lattice enthalpy exceeds hydration enthalpy.',
      a_hi: 'Ag⁺ (4d¹⁰) Cl⁻ को ध्रुवित कर सहसंयोजी लक्षण देता है; जालक एन्थैल्पी जलयोजन एन्थैल्पी से अधिक रहती है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why does Mg form MgCl2 and not MgCl, though IE2 is large?',
      q_hi: 'IE₂ अधिक होने पर भी Mg, MgCl न बनाकर MgCl₂ क्यों बनाता है?',
      a_en: 'Mg2+ gives a much higher lattice enthalpy, which more than repays the second ionisation (1451 kJ/mol).',
      a_hi: 'Mg²⁺ से जालक एन्थैल्पी बहुत अधिक मिलती है, जो द्वितीय आयनन (1451 kJ/mol) की क्षतिपूर्ति कर देती है।',
      formula: ''
    }
  ],

  /* ---------- SET 4: Bond Parameters: Length, Angle, Enthalpy & Bond Order ---------- */
  4: [
    {
      d: 'E',
      q_en: 'Define bond length.',
      q_hi: 'आबंध लंबाई (bond length) परिभाषित कीजिए।',
      a_en: 'The equilibrium distance between the nuclei of two bonded atoms in a molecule.',
      a_hi: 'अणु में दो आबंधित परमाणुओं के नाभिकों के बीच साम्यावस्था की दूरी।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Define bond angle.',
      q_hi: 'आबंध कोण (bond angle) परिभाषित कीजिए।',
      a_en: 'The angle between orbitals containing bonding electron pairs around the central atom.',
      a_hi: 'केंद्रीय परमाणु के चारों ओर आबंधी इलेक्ट्रॉन युग्म वाले कक्षकों के बीच का कोण।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Define bond enthalpy and give its unit.',
      q_hi: 'आबंध एन्थैल्पी (bond enthalpy) परिभाषित कीजिए व मात्रक बताइए।',
      a_en: 'Energy needed to break one mole of a bond in gaseous molecules; unit kJ/mol.',
      a_hi: 'गैसीय अणुओं के एक मोल आबंधों को तोड़ने की ऊर्जा; मात्रक kJ/mol।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What is bond order?',
      q_hi: 'आबंध कोटि (bond order) क्या है?',
      a_en: 'The number of bonds between two atoms, e.g. 1 in H2, 2 in O2 and 3 in N2.',
      a_hi: 'दो परमाणुओं के बीच आबंधों की संख्या, जैसे H₂ में 1, O₂ में 2 तथा N₂ में 3।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Arrange C-C, C=C, C≡C and HF, HCl, HBr, HI by bond length.',
      q_hi: 'C–C, C=C, C≡C तथा HF, HCl, HBr, HI को आबंध लंबाई के क्रम में लिखिए।',
      a_en: 'C-C (154) > C=C (134) > C≡C (120 pm); HF < HCl < HBr < HI.',
      a_hi: 'C–C (154) > C=C (134) > C≡C (120 pm); HF < HCl < HBr < HI।',
      formula: '$$\\text{C–C}>\\text{C=C}>\\text{C}\\equiv\\text{C}$$'
    },
    {
      d: 'M',
      q_en: 'Give the bond enthalpies of H2, O2 and N2. Why is N2 inert?',
      q_hi: 'H₂, O₂ व N₂ की आबंध एन्थैल्पी बताइए। N₂ अक्रिय क्यों है?',
      a_en: '435.8, 498 and 946 kJ/mol; the very strong N≡N triple bond is hard to break at room temperature.',
      a_hi: '435.8, 498 व 946 kJ/mol; अति प्रबल N≡N त्रिबंध को कमरे के ताप पर तोड़ना कठिन है।',
      formula: '$$435.8<498<946\\ \\text{kJ/mol}$$'
    },
    {
      d: 'M',
      q_en: 'Why is mean bond enthalpy used for H2O? Calculate it.',
      q_hi: 'H₂O के लिए औसत आबंध एन्थैल्पी क्यों लेते हैं? परिकलित कीजिए।',
      a_en: 'The two O-H bonds break with different energies: (502 + 427)/2 = 464.5 kJ/mol.',
      a_hi: 'दो O–H आबंध भिन्न ऊर्जा से टूटते हैं: (502 + 427)/2 = 464.5 kJ/mol।',
      formula: '$$\\frac{502+427}{2}=464.5\\text{ kJ/mol}$$'
    },
    {
      d: 'M',
      q_en: 'Why is the C-H bond enthalpy in CH4 a mean value?',
      q_hi: 'CH₄ में C–H आबंध एन्थैल्पी औसत मान क्यों है?',
      a_en: 'The four C-H bonds break stepwise with different enthalpies; the average (about 414 kJ/mol) is used.',
      a_hi: 'चारों C–H आबंध क्रमिक रूप से भिन्न एन्थैल्पी से टूटते हैं; औसत (लगभग 414 kJ/mol) प्रयोग होता है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'How are bond order, bond length and bond enthalpy related?',
      q_hi: 'आबंध कोटि, आबंध लंबाई व आबंध एन्थैल्पी का आपस में क्या संबंध है?',
      a_en: 'Higher bond order gives shorter bond length and higher bond enthalpy.',
      a_hi: 'उच्च आबंध कोटि पर आबंध लंबाई कम तथा आबंध एन्थैल्पी अधिक होती है।',
      formula: '$$\\text{BO}\\uparrow\\Rightarrow\\text{length}\\downarrow,\\ \\text{enthalpy}\\uparrow$$'
    },
    {
      d: 'M',
      q_en: 'Name isoelectronic species with bond order 1 and with bond order 3.',
      q_hi: 'आबंध कोटि 1 तथा 3 वाली समइलेक्ट्रॉनिक स्पीशीज़ बताइए।',
      a_en: 'Bond order 1: F2 and O2^2-; bond order 3: N2, CO, NO+ and CN-.',
      a_hi: 'आबंध कोटि 1: F₂ व O₂²⁻; आबंध कोटि 3: N₂, CO, NO⁺ तथा CN⁻।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Arrange halogens by bond dissociation enthalpy; why is F2 weaker than Cl2?',
      q_hi: 'हैलोजनों को आबंध वियोजन एन्थैल्पी के क्रम में रखिए; F₂, Cl₂ से दुर्बल क्यों?',
      a_en: 'Cl2 > Br2 > F2 > I2 (242, 193, 159, 151); in small F2, lone-pair repulsion weakens the bond.',
      a_hi: 'Cl₂ > Br₂ > F₂ > I₂ (242, 193, 159, 151); छोटे F₂ में एकाकी युग्म प्रतिकर्षण आबंध दुर्बल करता है।',
      formula: '$$\\text{Cl}_2>\\text{Br}_2>\\text{F}_2>\\text{I}_2$$'
    },
    {
      d: 'H',
      q_en: 'Arrange C-C, C=C and C≡C by bond enthalpy. Is C=C twice C-C?',
      q_hi: 'C–C, C=C व C≡C को आबंध एन्थैल्पी के क्रम में रखिए। क्या C=C, C–C का दोगुना है?',
      a_en: '347 < 611 < 837 kJ/mol; no, C=C is less than 2 x 347 since the π bond is weaker than the σ bond.',
      a_hi: '347 < 611 < 837 kJ/mol; नहीं, C=C < 2 × 347 क्योंकि π आबंध, σ आबंध से दुर्बल है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Arrange HF, HCl, HBr, HI by bond enthalpy.',
      q_hi: 'HF, HCl, HBr, HI को आबंध एन्थैल्पी के क्रम में रखिए।',
      a_en: 'HF > HCl > HBr > HI (565, 431, 366, 299 kJ/mol), as the H-X bond length increases.',
      a_hi: 'HF > HCl > HBr > HI (565, 431, 366, 299 kJ/mol), क्योंकि H–X आबंध लंबाई बढ़ती है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'N≡N is 946 kJ/mol but N-N only about 160. Why such a huge gap?',
      q_hi: 'N≡N 946 kJ/mol है पर N–N केवल लगभग 160। इतना अंतर क्यों?',
      a_en: 'Between small N atoms, lone-pair repulsion weakens the single bond; the triple bond adds two strong π bonds.',
      a_hi: 'छोटे N परमाणुओं के बीच एकाकी युग्म प्रतिकर्षण से N–N दुर्बल है, जबकि त्रिबंध में दो प्रबल π आबंध जुड़ते हैं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Which common diatomic molecule has the highest bond enthalpy?',
      q_hi: 'किस सामान्य द्विपरमाणुक अणु की आबंध एन्थैल्पी सर्वाधिक है?',
      a_en: 'CO, about 1072 kJ/mol, even above N2 (946 kJ/mol); both have bond order 3.',
      a_hi: 'CO, लगभग 1072 kJ/mol, जो N₂ (946 kJ/mol) से भी अधिक है; दोनों की आबंध कोटि 3 है।',
      formula: ''
    }
  ],

  /* ---------- SET 5: Resonance & Resonance Hybrids ---------- */
  5: [
    {
      d: 'E',
      q_en: 'Why does a single Lewis structure fail for ozone?',
      q_hi: 'ओज़ोन के लिए एक लुईस संरचना असफल क्यों है?',
      a_en: 'Both O-O bonds are 128 pm, between single (148 pm) and double (121 pm), but one structure shows unequal bonds.',
      a_hi: 'दोनों O–O आबंध 128 pm हैं, एकल (148) व द्वि (121 pm) के बीच; एक संरचना असमान आबंध दर्शाती है।',
      formula: '$$148>128>121\\ \\text{pm}$$'
    },
    {
      d: 'E',
      q_en: 'Define resonance.',
      q_hi: 'अनुनाद (resonance) परिभाषित कीजिए।',
      a_en: 'When no single Lewis structure explains a molecule, its true structure is the hybrid of several canonical forms.',
      a_hi: 'जब कोई एक लुईस संरचना अणु को स्पष्ट न करे, तो उसकी वास्तविक संरचना कई विहित रूपों का संकर होती है।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Do canonical structures exist? How is the resonance hybrid different?',
      q_hi: 'क्या विहित संरचनाएँ वास्तविक हैं? अनुनाद संकर कैसे भिन्न है?',
      a_en: 'No, canonical forms are imaginary; only the resonance hybrid is real, and it does not oscillate between them.',
      a_hi: 'नहीं, विहित रूप काल्पनिक हैं; केवल अनुनाद संकर वास्तविक है और वह उनके बीच दोलन नहीं करता।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Define resonance energy.',
      q_hi: 'अनुनाद ऊर्जा (resonance energy) परिभाषित कीजिए।',
      a_en: 'The energy difference between the resonance hybrid and the most stable canonical structure; the hybrid is more stable.',
      a_hi: 'अनुनाद संकर तथा सर्वाधिक स्थायी विहित संरचना के बीच ऊर्जा का अंतर; संकर अधिक स्थायी होता है।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'State the formula for fractional bond order and apply it to O3.',
      q_hi: 'भिन्नात्मक आबंध कोटि का सूत्र लिखकर O₃ पर लगाइए।',
      a_en: 'BO = total bonds between two atoms / number of resonating structures; O3: 3/2 = 1.5.',
      a_hi: 'BO = दो परमाणुओं के बीच कुल आबंध / अनुनादी संरचनाओं की संख्या; O₃: 3/2 = 1.5।',
      formula: '$$\\text{BO}=\\frac{\\text{total bonds}}{\\text{structures}}=\\frac{3}{2}=1.5$$'
    },
    {
      d: 'M',
      q_en: 'Find the C-O bond order in CO3^2-.',
      q_hi: 'CO₃²⁻ में C–O आबंध कोटि ज्ञात कीजिए।',
      a_en: 'Four C-O bonds across three structures: 4/3 = 1.33; all three bond lengths are equal (129 pm).',
      a_hi: 'तीन संरचनाओं में चार C–O आबंध: 4/3 = 1.33; तीनों आबंध लंबाई बराबर (129 pm)।',
      formula: '$$\\frac{4}{3}=1.33$$'
    },
    {
      d: 'M',
      q_en: 'Find the S-O bond order in SO4^2-.',
      q_hi: 'SO₄²⁻ में S–O आबंध कोटि ज्ञात कीजिए।',
      a_en: 'Six S-O bonds shared among four oxygens: 6/4 = 1.5 (two S=O and two S-O in each form).',
      a_hi: 'चार ऑक्सीजन में छह S–O आबंध: 6/4 = 1.5 (प्रत्येक रूप में दो S=O व दो S–O)।',
      formula: '$$\\frac{6}{4}=1.5$$'
    },
    {
      d: 'M',
      q_en: 'Find the P-O bond order in PO4^3-.',
      q_hi: 'PO₄³⁻ में P–O आबंध कोटि ज्ञात कीजिए।',
      a_en: 'Five P-O bonds shared among four oxygens: 5/4 = 1.25.',
      a_hi: 'चार ऑक्सीजन में पाँच P–O आबंध: 5/4 = 1.25।',
      formula: '$$\\frac{5}{4}=1.25$$'
    },
    {
      d: 'M',
      q_en: 'Find the Cl-O bond order in ClO4-.',
      q_hi: 'ClO₄⁻ में Cl–O आबंध कोटि ज्ञात कीजिए।',
      a_en: 'Seven Cl-O bonds shared among four oxygens: 7/4 = 1.75.',
      a_hi: 'चार ऑक्सीजन में सात Cl–O आबंध: 7/4 = 1.75।',
      formula: '$$\\frac{7}{4}=1.75$$'
    },
    {
      d: 'M',
      q_en: 'Find the N-O bond order in NO3- and NO2-.',
      q_hi: 'NO₃⁻ व NO₂⁻ में N–O आबंध कोटि ज्ञात कीजिए।',
      a_en: 'NO3-: 4/3 = 1.33; NO2-: 3/2 = 1.5.',
      a_hi: 'NO₃⁻: 4/3 = 1.33; NO₂⁻: 3/2 = 1.5।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'What are the C-C bond order and length in benzene?',
      q_hi: 'बेंज़ीन में C–C आबंध कोटि व लंबाई क्या है?',
      a_en: 'Bond order 1.5, and every C-C bond is 139 pm, between C-C (154) and C=C (134 pm).',
      a_hi: 'आबंध कोटि 1.5, और प्रत्येक C–C आबंध 139 pm, जो C–C (154) व C=C (134 pm) के बीच है।',
      formula: '$$\\text{BO}_{\\text{C–C}}=\\frac{9}{6}=1.5$$'
    },
    {
      d: 'H',
      q_en: 'Arrange the C-O bond lengths in CO, CO2, CO3^2- and CH3OH.',
      q_hi: 'CO, CO₂, CO₃²⁻ व CH₃OH में C–O आबंध लंबाई का क्रम लिखिए।',
      a_en: 'CO (113) < CO2 (116) < CO3^2- (129) < CH3OH (143 pm); lower bond order means a longer bond.',
      a_hi: 'CO (113) < CO₂ (116) < CO₃²⁻ (129) < CH₃OH (143 pm); कम आबंध कोटि पर लंबा आबंध।',
      formula: '$$\\text{CO}<\\text{CO}_2<\\text{CO}_3^{2-}<\\text{CH}_3\\text{OH}$$'
    },
    {
      d: 'H',
      q_en: 'Are the resonance forms of ozone in equilibrium with each other?',
      q_hi: 'क्या ओज़ोन के अनुनादी रूप आपस में साम्य में हैं?',
      a_en: 'No; resonance is not an equilibrium or oscillation. Ozone is always one single hybrid structure.',
      a_hi: 'नहीं; अनुनाद कोई साम्य या दोलन नहीं है। ओज़ोन सदैव एक ही संकर संरचना में रहता है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'What are the two C-O bond orders in the acetate ion CH3COO-?',
      q_hi: 'ऐसीटेट आयन CH₃COO⁻ में दोनों C–O आबंध कोटियाँ क्या हैं?',
      a_en: 'Both are equal at 1.5 (C=O and C-O- resonate), so both C-O lengths are identical.',
      a_hi: 'दोनों बराबर 1.5 हैं (C=O व C–O⁻ अनुनाद करते हैं), इसलिए दोनों C–O लंबाई समान हैं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why does resonance make a species more stable?',
      q_hi: 'अनुनाद से स्पीशीज़ अधिक स्थायी क्यों हो जाती है?',
      a_en: 'Delocalisation of electrons lowers energy; more equivalent canonical forms means greater stabilisation.',
      a_hi: 'इलेक्ट्रॉनों के विस्थानीकरण से ऊर्जा घटती है; अधिक समतुल्य विहित रूपों से स्थायित्व अधिक होता है।',
      formula: ''
    }
  ],

  /* ---------- SET 6: Polarity of Bonds, Dipole Moment & Fajans' Rules ---------- */
  6: [
    {
      d: 'E',
      q_en: 'Write the dipole moment formula and unit.',
      q_hi: 'द्विध्रुव आघूर्ण का सूत्र व मात्रक लिखिए।',
      a_en: 'μ = q x d, in debye (D); 1 D = 3.33564 x 10^-30 C m.',
      a_hi: 'μ = q × d, मात्रक डिबाई (D); 1 D = 3.33564 × 10⁻³⁰ C m।',
      formula: '$$\\mu=q\\times d;\\ \\ 1\\text{ D}=3.33564\\times10^{-30}\\text{ C m}$$'
    },
    {
      d: 'E',
      q_en: 'Is dipole moment a scalar or a vector? What is its direction?',
      q_hi: 'द्विध्रुव आघूर्ण अदिश है या सदिश? इसकी दिशा क्या है?',
      a_en: 'A vector, drawn from the positive end to the negative end of the bond or molecule.',
      a_hi: 'सदिश; आबंध या अणु के धन सिरे से ऋण सिरे की ओर।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'When is a covalent bond polar?',
      q_hi: 'सहसंयोजक आबंध ध्रुवीय कब होता है?',
      a_en: 'When the bonded atoms differ in electronegativity, so the shared pair shifts toward the more electronegative atom.',
      a_hi: 'जब आबंधित परमाणुओं की विद्युत ऋणात्मकता भिन्न हो, जिससे साझा युग्म अधिक ऋणात्मक परमाणु की ओर खिसकता है।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What is the dipole moment of H2O?',
      q_hi: 'H₂O का द्विध्रुव आघूर्ण कितना है?',
      a_en: '1.85 D; it is non-zero because the molecule is bent, so the two O-H dipoles do not cancel.',
      a_hi: '1.85 D; यह शून्येतर है क्योंकि अणु बंकित है, इसलिए दोनों O–H द्विध्रुव निरस्त नहीं होते।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Name symmetrical molecules with polar bonds but zero dipole moment.',
      q_hi: 'ध्रुवीय आबंध पर शून्य द्विध्रुव आघूर्ण वाले सममित अणु बताइए।',
      a_en: 'BeF2, CO2, BF3, CH4 and CCl4: bond dipoles cancel by symmetry.',
      a_hi: 'BeF₂, CO₂, BF₃, CH₄ तथा CCl₄: समिति के कारण आबंध द्विध्रुव निरस्त हो जाते हैं।',
      formula: '$$\\mu_{\\text{net}}=0$$'
    },
    {
      d: 'M',
      q_en: 'Why is μ = 0 for PCl5, SF6 and XeF4?',
      q_hi: 'PCl₅, SF₆ व XeF₄ के लिए μ = 0 क्यों है?',
      a_en: 'Their shapes (TBP, octahedral, square planar) are symmetrical, so the bond dipoles cancel.',
      a_hi: 'इनकी आकृतियाँ (TBP, अष्टफलकीय, वर्ग समतलीय) सममित हैं, इसलिए आबंध द्विध्रुव निरस्त हो जाते हैं।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Why is μ of NH3 (1.47 D) much larger than that of NF3 (0.23 D)?',
      q_hi: 'NH₃ (1.47 D) का μ, NF₃ (0.23 D) से इतना अधिक क्यों है?',
      a_en: 'In NH3 the lone-pair dipole adds to the N-H dipoles; in NF3 it opposes the N-F dipoles.',
      a_hi: 'NH₃ में एकाकी युग्म द्विध्रुव, N–H द्विध्रुवों में जुड़ता है; NF₃ में वह N–F द्विध्रुवों के विपरीत है।',
      formula: '$$\\mu:\\ \\text{NH}_3(1.47)>\\text{NF}_3(0.23)$$'
    },
    {
      d: 'M',
      q_en: 'Arrange CH3F, CH3Cl, CH3Br and CH3I by dipole moment.',
      q_hi: 'CH₃F, CH₃Cl, CH₃Br व CH₃I को द्विध्रुव आघूर्ण के क्रम में रखिए।',
      a_en: 'CH3Cl (1.86) > CH3F (1.81) > CH3Br (1.79) > CH3I (1.64 D): C-F is shorter, so the charge separation is less.',
      a_hi: 'CH₃Cl (1.86) > CH₃F (1.81) > CH₃Br (1.79) > CH₃I (1.64 D): C–F छोटा होने से आवेश-दूरी कम है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Compare the dipole moments of cis- and trans-1,2-dichloroethene.',
      q_hi: 'cis- व trans-1,2-डाइक्लोरोएथीन के द्विध्रुव आघूर्ण की तुलना कीजिए।',
      a_en: 'Cis is polar (μ about 1.9 D); trans is non-polar (μ = 0) as the C-Cl dipoles cancel.',
      a_hi: 'Cis ध्रुवीय है (μ ≈ 1.9 D); trans अध्रुवीय (μ = 0) है क्योंकि C–Cl द्विध्रुव निरस्त हो जाते हैं।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Compare the dipole moments of o-, m- and p-dichlorobenzene.',
      q_hi: 'o-, m- व p-डाइक्लोरोबेंज़ीन के द्विध्रुव आघूर्णों की तुलना कीजिए।',
      a_en: 'Ortho > meta > para; para is zero because the opposite C-Cl dipoles cancel.',
      a_hi: 'ऑर्थो > मेटा > पारा; पारा में विपरीत C–Cl द्विध्रुव निरस्त होने से μ शून्य है।',
      formula: '$$\\mu:\\ o>m>p=0$$'
    },
    {
      d: 'H',
      q_en: 'State Fajans\' rules for covalent character in ionic bonds.',
      q_hi: 'आयनिक आबंध में सहसंयोजी लक्षण के लिए फ़ैजान के नियम लिखिए।',
      a_en: 'More covalent with a small cation, a large anion, high charges, and a pseudo-noble gas (d10) cation.',
      a_hi: 'सहसंयोजी लक्षण अधिक: छोटा धनायन, बड़ा ऋणायन, उच्च आवेश तथा छद्म-उत्कृष्ट गैस (d¹⁰) धनायन।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Arrange LiCl, NaCl and KCl by covalent character.',
      q_hi: 'LiCl, NaCl, KCl को सहसंयोजी लक्षण के क्रम में रखिए।',
      a_en: 'LiCl > NaCl > KCl, since the smaller Li+ polarises Cl- the most.',
      a_hi: 'LiCl > NaCl > KCl, क्योंकि छोटा Li⁺ Cl⁻ को सर्वाधिक ध्रुवित करता है।',
      formula: '$$\\text{LiCl}>\\text{NaCl}>\\text{KCl}$$'
    },
    {
      d: 'H',
      q_en: 'Arrange BeCl2, MgCl2, CaCl2 and AlCl3, MgCl2, NaCl by covalent character.',
      q_hi: 'BeCl₂, MgCl₂, CaCl₂ तथा AlCl₃, MgCl₂, NaCl को सहसंयोजी लक्षण के क्रम में रखिए।',
      a_en: 'BeCl2 > MgCl2 > CaCl2 (size) and AlCl3 > MgCl2 > NaCl (higher cation charge).',
      a_hi: 'BeCl₂ > MgCl₂ > CaCl₂ (आकार) तथा AlCl₃ > MgCl₂ > NaCl (अधिक धनायन आवेश)।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why is FeCl3 more covalent than FeCl2?',
      q_hi: 'FeCl₃, FeCl₂ से अधिक सहसंयोजी क्यों है?',
      a_en: 'Fe3+ is smaller and more highly charged than Fe2+, so its polarising power is greater.',
      a_hi: 'Fe³⁺, Fe²⁺ से छोटा व अधिक आवेशित है, इसलिए उसकी ध्रुवण क्षमता अधिक है।',
      formula: '$$\\text{FeCl}_3>\\text{FeCl}_2$$'
    },
    {
      d: 'H',
      q_en: 'Why is CuCl more covalent than NaCl though Cu+ and Na+ are similar in size?',
      q_hi: 'Cu⁺ व Na⁺ का आकार समान होने पर भी CuCl, NaCl से अधिक सहसंयोजी क्यों है?',
      a_en: 'Cu+ has a pseudo-noble gas 3d10 shell that shields poorly, so it polarises Cl- more than Na+ (2p6).',
      a_hi: 'Cu⁺ का 3d¹⁰ कोश कमज़ोर परिरक्षण करता है, इसलिए यह Na⁺ (2p⁶) से अधिक Cl⁻ को ध्रुवित करता है।',
      formula: ''
    }
  ],

  /* ---------- SET 7: VSEPR Theory: Postulates & Geometries with Zero Lone Pairs ---------- */
  7: [
    {
      d: 'E',
      q_en: 'State the basic postulates of VSEPR theory.',
      q_hi: 'VSEPR सिद्धांत की मूल अभिधारणाएँ लिखिए।',
      a_en: 'Electron pairs around the central atom repel and sit as far apart as possible, which fixes the shape.',
      a_hi: 'केंद्रीय परमाणु के इलेक्ट्रॉन युग्म प्रतिकर्षित होकर यथासंभव दूर रहते हैं, जिससे अणु की आकृति तय होती है।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Give the order of repulsion among lone pairs and bond pairs.',
      q_hi: 'एकाकी व आबंधी युग्मों के प्रतिकर्षण का क्रम बताइए।',
      a_en: 'lp-lp > lp-bp > bp-bp.',
      a_hi: 'lp–lp > lp–bp > bp–bp।',
      formula: '$$\\text{lp–lp}>\\text{lp–bp}>\\text{bp–bp}$$'
    },
    {
      d: 'E',
      q_en: 'What are the shape and bond angle of BeCl2?',
      q_hi: 'BeCl₂ की आकृति व आबंध कोण क्या है?',
      a_en: 'Linear (AB2), 180°; CO2 and HgCl2 are also linear.',
      a_hi: 'रैखिक (AB₂), 180°; CO₂ व HgCl₂ भी रैखिक हैं।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What are the shape and bond angle of BF3?',
      q_hi: 'BF₃ की आकृति व आबंध कोण क्या है?',
      a_en: 'Trigonal planar (AB3), 120°; BCl3, SO3, NO3- and CO3^2- are similar.',
      a_hi: 'त्रिकोणीय समतलीय (AB₃), 120°; BCl₃, SO₃, NO₃⁻ व CO₃²⁻ भी ऐसे हैं।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What are the shape and bond angle of CH4?',
      q_hi: 'CH₄ की आकृति व आबंध कोण क्या है?',
      a_en: 'Tetrahedral (AB4), 109.5°; NH4+, BF4-, SO4^2- and ClO4- are also tetrahedral.',
      a_hi: 'चतुष्फलकीय (AB₄), 109.5°; NH₄⁺, BF₄⁻, SO₄²⁻ व ClO₄⁻ भी चतुष्फलकीय हैं।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Write the formula for the steric number.',
      q_hi: 'त्रिविम संख्या (steric number) का सूत्र लिखिए।',
      a_en: 'S = 1/2 (V + M - C + A): V valence electrons of central atom, M monovalent atoms, C cation charge, A anion charge.',
      a_hi: 'S = ½(V + M − C + A): V केंद्रीय परमाणु के संयोजी e⁻, M एकसंयोजी परमाणु, C धनायन आवेश, A ऋणायन आवेश।',
      formula: '$$S=\\frac{1}{2}(V+M-C+A)$$'
    },
    {
      d: 'M',
      q_en: 'Describe the geometry and bond angles of PCl5.',
      q_hi: 'PCl₅ की ज्यामिति व आबंध कोण बताइए।',
      a_en: 'Trigonal bipyramidal (AB5): axial bonds at 90° to the plane, equatorial bonds at 120°.',
      a_hi: 'त्रिकोणीय द्विपिरामिडी (AB₅): अक्षीय आबंध तल से 90° पर, निरक्षीय आबंध 120° पर।',
      formula: '$$90^\\circ\\ (\\text{axial}),\\ 120^\\circ\\ (\\text{equatorial})$$'
    },
    {
      d: 'M',
      q_en: 'Describe the geometry and bond angle of SF6.',
      q_hi: 'SF₆ की ज्यामिति व आबंध कोण बताइए।',
      a_en: 'Octahedral (AB6) with all F-S-F angles 90°.',
      a_hi: 'अष्टफलकीय (AB₆), सभी F–S–F कोण 90°।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Describe the geometry of IF7.',
      q_hi: 'IF₇ की ज्यामिति बताइए।',
      a_en: 'Pentagonal bipyramidal (AB7): five equatorial bonds at 72° and two axial bonds at 90°.',
      a_hi: 'पंचकोणीय द्विपिरामिडी (AB₇): पाँच निरक्षीय आबंध 72° पर तथा दो अक्षीय आबंध 90° पर।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What is the electron-pair geometry for steric numbers 2 to 6?',
      q_hi: 'त्रिविम संख्या 2 से 6 के लिए इलेक्ट्रॉन-युग्म ज्यामिति क्या है?',
      a_en: '2 linear, 3 trigonal planar, 4 tetrahedral, 5 trigonal bipyramidal, 6 octahedral.',
      a_hi: '2 रैखिक, 3 त्रिकोणीय समतलीय, 4 चतुष्फलकीय, 5 त्रिकोणीय द्विपिरामिडी, 6 अष्टफलकीय।',
      formula: '$$S=2,3,4,5,6$$'
    },
    {
      d: 'H',
      q_en: 'Find the steric number of NH4+ and its shape.',
      q_hi: 'NH₄⁺ की त्रिविम संख्या व आकृति ज्ञात कीजिए।',
      a_en: 'S = 1/2(5 + 4 - 1) = 4, so tetrahedral.',
      a_hi: 'S = ½(5 + 4 − 1) = 4, अतः चतुष्फलकीय।',
      formula: '$$S=\\tfrac{1}{2}(5+4-1)=4$$'
    },
    {
      d: 'H',
      q_en: 'Find the steric number of SO4^2- and why oxygen counts as zero.',
      q_hi: 'SO₄²⁻ की त्रिविम संख्या ज्ञात कीजिए; O की गणना शून्य क्यों?',
      a_en: 'S = 1/2(6 + 0 - 0 + 2) = 4; divalent atoms like O contribute no electrons, so M counts only monovalent atoms.',
      a_hi: 'S = ½(6 + 0 − 0 + 2) = 4; O जैसे द्विसंयोजी परमाणु इलेक्ट्रॉन नहीं देते, इसलिए M में केवल एकसंयोजी परमाणु गिनते हैं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Find the steric number of NO3- and its shape.',
      q_hi: 'NO₃⁻ की त्रिविम संख्या व आकृति ज्ञात कीजिए।',
      a_en: 'S = 1/2(5 + 0 - 0 + 1) = 3, so trigonal planar with 120° angles.',
      a_hi: 'S = ½(5 + 0 − 0 + 1) = 3, अतः त्रिकोणीय समतलीय, कोण 120°।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'How does VSEPR treat a double or triple bond?',
      q_hi: 'VSEPR द्वि या त्रि आबंध को कैसे गिनता है?',
      a_en: 'As a single region of electron density, so CO2 (two regions) is linear and C2H4 carbon is trigonal planar.',
      a_hi: 'एक ही इलेक्ट्रॉन-घनत्व क्षेत्र की तरह, इसलिए CO₂ (दो क्षेत्र) रैखिक तथा C₂H₄ का कार्बन त्रिकोणीय समतलीय है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Compare the bond angles in BF3 and BF4-.',
      q_hi: 'BF₃ व BF₄⁻ के आबंध कोणों की तुलना कीजिए।',
      a_en: 'BF3 is trigonal planar (120°); on accepting F-, BF4- becomes tetrahedral (109.5°).',
      a_hi: 'BF₃ त्रिकोणीय समतलीय (120°) है; F⁻ लेने पर BF₄⁻ चतुष्फलकीय (109.5°) हो जाता है।',
      formula: ''
    }
  ],

  /* ---------- SET 8: VSEPR Theory: Shapes with Lone Pairs & Bond Angle Trends ---------- */
  8: [
    {
      d: 'E',
      q_en: 'Distinguish electron geometry from molecular shape.',
      q_hi: 'इलेक्ट्रॉन ज्यामिति व आण्विक आकृति में अंतर बताइए।',
      a_en: 'Electron geometry counts all electron pairs; molecular shape counts only the atoms (lone pairs are invisible).',
      a_hi: 'इलेक्ट्रॉन ज्यामिति सभी इलेक्ट्रॉन युग्म गिनती है; आण्विक आकृति केवल परमाणुओं को (एकाकी युग्म दिखते नहीं)।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What are the shape and bond angle of NH3?',
      q_hi: 'NH₃ की आकृति व आबंध कोण क्या है?',
      a_en: 'Trigonal pyramidal (AB3E), 107°; PCl3, H3O+ and XeO3 are also pyramidal.',
      a_hi: 'त्रिकोणीय पिरामिडी (AB₃E), 107°; PCl₃, H₃O⁺ व XeO₃ भी पिरामिडी हैं।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What are the shape and bond angle of H2O?',
      q_hi: 'H₂O की आकृति व आबंध कोण क्या है?',
      a_en: 'Bent or V-shaped (AB2E2), 104.5°; H2S and OF2 are also bent.',
      a_hi: 'बंकित या V-आकार (AB₂E₂), 104.5°; H₂S व OF₂ भी बंकित हैं।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What is the shape of SO2?',
      q_hi: 'SO₂ की आकृति क्या है?',
      a_en: 'Bent (AB2E): S has two bond pairs and one lone pair; O3 and SnCl2 are also bent.',
      a_hi: 'बंकित (AB₂E): S पर दो आबंधी युग्म व एक एकाकी युग्म; O₃ व SnCl₂ भी बंकित हैं।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Why is XeF2 linear?',
      q_hi: 'XeF₂ रैखिक क्यों है?',
      a_en: 'AB2E3: three lone pairs sit in the equatorial plane of a TBP, leaving F atoms axial at 180°; I3- is alike.',
      a_hi: 'AB₂E₃: तीनों एकाकी युग्म TBP के निरक्षीय तल में रहते हैं, F अक्षीय (180°); I₃⁻ भी ऐसा है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Give the shape of SF4 and TeCl4.',
      q_hi: 'SF₄ व TeCl₄ की आकृति बताइए।',
      a_en: 'See-saw (AB4E): four bond pairs and one lone pair on a TBP.',
      a_hi: 'सी-सॉ आकृति (AB₄E): TBP पर चार आबंधी युग्म व एक एकाकी युग्म।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Give the shape of ClF3 and BrF3.',
      q_hi: 'ClF₃ व BrF₃ की आकृति बताइए।',
      a_en: 'T-shaped (AB3E2): two lone pairs in the equatorial plane of a TBP.',
      a_hi: 'T-आकार (AB₃E₂): TBP के निरक्षीय तल में दो एकाकी युग्म।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Give the shape of BrF5, IF5 and XeOF4.',
      q_hi: 'BrF₅, IF₅ व XeOF₄ की आकृति बताइए।',
      a_en: 'Square pyramidal (AB5E): five bond pairs and one lone pair on an octahedron.',
      a_hi: 'वर्ग पिरामिडी (AB₅E): अष्टफलक पर पाँच आबंधी युग्म व एक एकाकी युग्म।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Give the shape of XeF4 and ICl4-.',
      q_hi: 'XeF₄ व ICl₄⁻ की आकृति बताइए।',
      a_en: 'Square planar (AB4E2): the two lone pairs sit opposite each other, above and below the plane.',
      a_hi: 'वर्ग समतलीय (AB₄E₂): दोनों एकाकी युग्म तल के ऊपर व नीचे आमने-सामने रहते हैं।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Give the shape of XeF6.',
      q_hi: 'XeF₆ की आकृति बताइए।',
      a_en: 'Distorted octahedral (AB6E): the lone pair distorts the regular octahedron.',
      a_hi: 'विकृत अष्टफलकीय (AB₆E): एकाकी युग्म नियमित अष्टफलक को विकृत कर देता है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why does the lone pair occupy an equatorial position in a TBP?',
      q_hi: 'TBP में एकाकी युग्म निरक्षीय स्थिति क्यों लेता है?',
      a_en: 'Equatorial has only two 90° neighbours versus three for axial, so lp-bp repulsion is minimised.',
      a_hi: 'निरक्षीय स्थिति पर 90° के केवल दो पड़ोसी हैं जबकि अक्षीय पर तीन; इससे lp–bp प्रतिकर्षण न्यूनतम रहता है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Compare bond angles: CH4, NH3, H2O and NH4+, NH3, NH2-.',
      q_hi: 'आबंध कोणों की तुलना कीजिए: CH₄, NH₃, H₂O तथा NH₄⁺, NH₃, NH₂⁻।',
      a_en: 'CH4 (109.5) > NH3 (107) > H2O (104.5); NH4+ > NH3 > NH2- (more lone pairs squeeze bond pairs).',
      a_hi: 'CH₄ (109.5) > NH₃ (107) > H₂O (104.5); NH₄⁺ > NH₃ > NH₂⁻ (अधिक एकाकी युग्म आबंधी युग्मों को दबाते हैं)।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Compare bond angles in NO2+, NO2 and NO2-.',
      q_hi: 'NO₂⁺, NO₂ व NO₂⁻ के आबंध कोणों की तुलना कीजिए।',
      a_en: 'NO2+ (180°) > NO2 (134°) > NO2- (115°): zero, one odd electron, then a full lone pair on N.',
      a_hi: 'NO₂⁺ (180°) > NO₂ (134°) > NO₂⁻ (115°): N पर क्रमशः 0, 1 विषम इलेक्ट्रॉन, फिर एक पूर्ण एकाकी युग्म।',
      formula: '$$\\text{NO}_2^+>\\text{NO}_2>\\text{NO}_2^-$$'
    },
    {
      d: 'H',
      q_en: 'Compare bond angles in NH3, PH3, AsH3 and in H2O, H2S.',
      q_hi: 'NH₃, PH₃, AsH₃ तथा H₂O, H₂S के आबंध कोणों की तुलना कीजिए।',
      a_en: 'NH3 (107) > PH3 (93.6) > AsH3 (91.8); H2O (104.5) > H2S (92): lower central-atom EN keeps bond pairs farther apart.',
      a_hi: 'NH₃ (107) > PH₃ (93.6) > AsH₃ (91.8); H₂O (104.5) > H₂S (92): केंद्रीय परमाणु की EN घटने से आबंधी युग्म दूर रहते हैं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Arrange OF2, H2O and Cl2O by bond angle.',
      q_hi: 'OF₂, H₂O व Cl₂O को आबंध कोण के क्रम में रखिए।',
      a_en: 'OF2 (103°) < H2O (104.5°) < Cl2O (111°): bulky Cl atoms repel; F pulls bond pairs away from O.',
      a_hi: 'OF₂ (103°) < H₂O (104.5°) < Cl₂O (111°): भारी Cl परमाणु प्रतिकर्षित करते हैं; F युग्मों को O से दूर खींचता है।',
      formula: '$$\\text{OF}_2<\\text{H}_2\\text{O}<\\text{Cl}_2\\text{O}$$'
    }
  ],

  /* ---------- SET 9: Valence Bond Theory (VBT), Orbital Overlap & Sigma/Pi Bonds ---------- */
  9: [
    {
      d: 'E',
      q_en: 'What does the Heitler-London valence bond theory say?',
      q_hi: 'हाइटलर-लंडन संयोजकता आबंध सिद्धांत क्या कहता है?',
      a_en: 'A bond forms by overlap of half-filled atomic orbitals having electrons of opposite spin, releasing energy.',
      a_hi: 'विपरीत चक्रण के इलेक्ट्रॉन वाले अर्ध-भरित परमाणु कक्षकों के अतिव्यापन से आबंध बनता है और ऊर्जा मुक्त होती है।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What does the potential energy curve of H2 show?',
      q_hi: 'H₂ का स्थितिज ऊर्जा वक्र क्या दर्शाता है?',
      a_en: 'Minimum energy at 74 pm internuclear distance, releasing 435.8 kJ/mol (bond enthalpy).',
      a_hi: '74 pm अंतरनाभिकीय दूरी पर न्यूनतम ऊर्जा, 435.8 kJ/mol (आबंध एन्थैल्पी) मुक्त होती है।',
      formula: '$$r_0=74\\text{ pm},\\ \\ 435.8\\text{ kJ/mol}$$'
    },
    {
      d: 'E',
      q_en: 'What is a σ bond?',
      q_hi: 'σ आबंध (sigma bond) क्या है?',
      a_en: 'A bond formed by head-on (axial) overlap along the internuclear axis: s-s, s-p or p-p.',
      a_hi: 'अंतरनाभिकीय अक्ष पर आमने-सामने (अक्षीय) अतिव्यापन से बना आबंध: s–s, s–p या p–p।',
      formula: '$$s\\text{–}s,\\ s\\text{–}p_z,\\ p_z\\text{–}p_z$$'
    },
    {
      d: 'E',
      q_en: 'What is a π bond?',
      q_hi: 'π आबंध (pi bond) क्या है?',
      a_en: 'A bond formed by sideways (lateral) overlap of parallel p-orbitals, e.g. p_x-p_x or p_y-p_y.',
      a_hi: 'समानांतर p-कक्षकों के पार्श्व अतिव्यापन से बना आबंध, जैसे pₓ–pₓ या p_y–p_y।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Why is a σ bond stronger than a π bond?',
      q_hi: 'σ आबंध, π आबंध से प्रबल क्यों है?',
      a_en: 'Head-on overlap is greater than sideways overlap, so a σ bond holds more electron density between the nuclei.',
      a_hi: 'आमने-सामने का अतिव्यापन पार्श्व अतिव्यापन से अधिक होता है, इसलिए σ आबंध में नाभिकों के बीच इलेक्ट्रॉन घनत्व अधिक है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Why does He2 not exist according to VBT?',
      q_hi: 'VBT के अनुसार He₂ का अस्तित्व क्यों नहीं है?',
      a_en: 'Each He has a filled 1s^2 and no half-filled orbital, so no overlap gives a net lowering of energy.',
      a_hi: 'प्रत्येक He में पूर्ण भरा 1s² है, कोई अर्ध-भरित कक्षक नहीं; इसलिए ऊर्जा घटाने वाला अतिव्यापन नहीं होता।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What are positive, negative and zero overlap?',
      q_hi: 'धनात्मक, ऋणात्मक व शून्य अतिव्यापन क्या हैं?',
      a_en: 'Same-sign lobes give positive overlap (bond); opposite signs give negative; equal cancellation gives zero.',
      a_hi: 'समान चिह्न के पालियाँ धनात्मक अतिव्यापन (आबंध) देती हैं; विपरीत चिह्न ऋणात्मक; बराबर निरसन शून्य।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Why is free rotation blocked around a double bond?',
      q_hi: 'द्वि आबंध पर मुक्त घूर्णन क्यों अवरुद्ध है?',
      a_en: 'Rotation would break the sideways overlap of the π bond, so it needs energy to break that π bond.',
      a_hi: 'घूर्णन से π आबंध का पार्श्व अतिव्यापन टूट जाएगा, इसलिए इसे तोड़ने हेतु ऊर्जा चाहिए।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Count σ and π bonds in C2H4 and C2H2.',
      q_hi: 'C₂H₄ व C₂H₂ में σ व π आबंध गिनिए।',
      a_en: 'C2H4: 5σ + 1π; C2H2: 3σ + 2π.',
      a_hi: 'C₂H₄: 5σ + 1π; C₂H₂: 3σ + 2π।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Count σ and π bonds in benzene.',
      q_hi: 'बेंज़ीन में σ व π आबंध गिनिए।',
      a_en: '12σ (6 C-C + 6 C-H) and 3π bonds.',
      a_hi: '12σ (6 C–C + 6 C–H) तथा 3π आबंध।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Count σ and π bonds in CaC2.',
      q_hi: 'CaC₂ में σ व π आबंध गिनिए।',
      a_en: 'The C2^2- ion has C≡C: 1σ + 2π (the Ca2+ - C2^2- link is ionic).',
      a_hi: 'C₂²⁻ आयन में C≡C: 1σ + 2π (Ca²⁺–C₂²⁻ आबंध आयनिक है)।',
      formula: '$$\\text{Ca}^{2+}[:\\text{C}\\equiv\\text{C}:]^{2-}$$'
    },
    {
      d: 'H',
      q_en: 'Count σ and π bonds in tetracyanoethylene, C2(CN)4.',
      q_hi: 'टेट्रासायनोएथिलीन C₂(CN)₄ में σ व π आबंध गिनिए।',
      a_en: '9σ and 9π: C=C (1σ+1π), four C-C (4σ), four C≡N (4σ + 8π).',
      a_hi: '9σ व 9π: C=C (1σ+1π), चार C–C (4σ), चार C≡N (4σ + 8π)।',
      formula: '$$\\sigma=1+4+4=9;\\ \\ \\pi=1+8=9$$'
    },
    {
      d: 'H',
      q_en: 'Classify the overlap: s-s, s-p_z, p_z-p_z, p_x-p_x along the z-axis.',
      q_hi: 'z-अक्ष पर अतिव्यापन वर्गीकृत कीजिए: s–s, s–p_z, p_z–p_z, pₓ–pₓ।',
      a_en: 'The first three are σ (axial); p_x-p_x is π (lateral).',
      a_hi: 'पहले तीन σ (अक्षीय) हैं; pₓ–pₓ π (पार्श्व) है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Count σ and π bonds in CO2 and HCN.',
      q_hi: 'CO₂ व HCN में σ व π आबंध गिनिए।',
      a_en: 'CO2: 2σ + 2π; HCN: 2σ + 2π.',
      a_hi: 'CO₂: 2σ + 2π; HCN: 2σ + 2π।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Count σ and π bonds in 1,3-butadiene and CH3CN.',
      q_hi: '1,3-ब्यूटाडाइईन व CH₃CN में σ व π आबंध गिनिए।',
      a_en: 'CH2=CH-CH=CH2: 9σ + 2π; CH3CN: 5σ + 2π.',
      a_hi: 'CH₂=CH–CH=CH₂: 9σ + 2π; CH₃CN: 5σ + 2π।',
      formula: ''
    }
  ],

  /* ---------- SET 10: Hybridisation: sp, sp2, sp3 & Examples ---------- */
  10: [
    {
      d: 'E',
      q_en: 'Define hybridisation.',
      q_hi: 'संकरण (hybridisation) परिभाषित कीजिए।',
      a_en: 'Pauling\'s concept: mixing of atomic orbitals of comparable energy to give the same number of equivalent hybrid orbitals.',
      a_hi: 'पॉलिंग की संकल्पना: तुलनीय ऊर्जा के परमाणु कक्षकों का मिश्रण, जिससे उतने ही समतुल्य संकर कक्षक बनते हैं।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Give the s-character, angle and examples of sp hybridisation.',
      q_hi: 'sp संकरण का s-लक्षण, कोण व उदाहरण बताइए।',
      a_en: '50% s-character, 180°, linear: BeCl2, C2H2, CO2.',
      a_hi: '50% s-लक्षण, 180°, रैखिक: BeCl₂, C₂H₂, CO₂।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Give the s-character, angle and examples of sp2 hybridisation.',
      q_hi: 'sp² संकरण का s-लक्षण, कोण व उदाहरण बताइए।',
      a_en: '33.3% s-character, 120°, trigonal planar: BCl3, BF3, C2H4, graphite.',
      a_hi: '33.3% s-लक्षण, 120°, त्रिकोणीय समतलीय: BCl₃, BF₃, C₂H₄, ग्रेफ़ाइट।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Give the s-character, angle and examples of sp3 hybridisation.',
      q_hi: 'sp³ संकरण का s-लक्षण, कोण व उदाहरण बताइए।',
      a_en: '25% s-character, 109°28\', tetrahedral: CH4, C2H6, diamond, SiO2.',
      a_hi: '25% s-लक्षण, 109°28′, चतुष्फलकीय: CH₄, C₂H₆, हीरा, SiO₂।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'How many hybrid orbitals form from mixing n atomic orbitals?',
      q_hi: 'n परमाणु कक्षकों के मिश्रण से कितने संकर कक्षक बनते हैं?',
      a_en: 'Exactly n; e.g. one s + two p give three sp2 orbitals.',
      a_hi: 'ठीक n; जैसे एक s + दो p से तीन sp² कक्षक बनते हैं।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What is the hybridisation of carbon in C2H2 and CO2?',
      q_hi: 'C₂H₂ व CO₂ में कार्बन का संकरण क्या है?',
      a_en: 'sp in both; each carbon makes two σ bonds and its other two p orbitals form π bonds.',
      a_hi: 'दोनों में sp; प्रत्येक कार्बन दो σ आबंध बनाता है तथा शेष दो p कक्षक π आबंध बनाते हैं।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What is the hybridisation of carbon in ethene and benzene?',
      q_hi: 'एथीन व बेंज़ीन में कार्बन का संकरण क्या है?',
      a_en: 'sp2; one unhybridised p orbital on each carbon forms the π bond(s).',
      a_hi: 'sp²; प्रत्येक कार्बन का एक असंकरित p कक्षक π आबंध बनाता है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Why are NH3 and H2O sp3 despite having lone pairs?',
      q_hi: 'एकाकी युग्म होने पर भी NH₃ व H₂O sp³ क्यों हैं?',
      a_en: 'Lone-pair orbitals also hybridise; N and O have four sp3 orbitals (steric number 4).',
      a_hi: 'एकाकी युग्म कक्षक भी संकरित होते हैं; N व O के चार sp³ कक्षक हैं (त्रिविम संख्या 4)।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Give the hybridisation of S in SO2, SO3 and of the central atom in NO3-, CO3^2-.',
      q_hi: 'SO₂, SO₃ में S तथा NO₃⁻, CO₃²⁻ में केंद्रीय परमाणु का संकरण बताइए।',
      a_en: 'All are sp2 (SO2 has one lone pair on S).',
      a_hi: 'सभी sp² हैं (SO₂ में S पर एक एकाकी युग्म)।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Give the hybridisation of the central atom in SO4^2-, ClO4-, NH4+.',
      q_hi: 'SO₄²⁻, ClO₄⁻, NH₄⁺ में केंद्रीय परमाणु का संकरण बताइए।',
      a_en: 'All sp3 (tetrahedral, steric number 4).',
      a_hi: 'सभी sp³ (चतुष्फलकीय, त्रिविम संख्या 4)।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Find the hybridisation of each carbon in CH2=CH-C≡CH.',
      q_hi: 'CH₂=CH–C≡CH में प्रत्येक कार्बन का संकरण ज्ञात कीजिए।',
      a_en: 'sp2, sp2, sp, sp (from left to right).',
      a_hi: 'sp², sp², sp, sp (बाएँ से दाएँ)।',
      formula: '$$\\overset{sp^2}{\\text{CH}_2}=\\overset{sp^2}{\\text{CH}}-\\overset{sp}{\\text{C}}\\equiv\\overset{sp}{\\text{CH}}$$'
    },
    {
      d: 'H',
      q_en: 'Give the hybridisation of each carbon in allene, CH2=C=CH2, and its shape.',
      q_hi: 'ऐलीन CH₂=C=CH₂ के प्रत्येक कार्बन का संकरण व आकृति बताइए।',
      a_en: 'sp2, sp, sp2; the two CH2 planes are perpendicular, so the molecule is non-planar.',
      a_hi: 'sp², sp, sp²; दोनों CH₂ तल परस्पर लंबवत हैं, इसलिए अणु अ-समतलीय है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'What is the hybridisation of P in solid PCl5?',
      q_hi: 'ठोस PCl₅ में P का संकरण क्या है?',
      a_en: 'It exists as [PCl4]+ (sp3, tetrahedral) and [PCl6]- (sp3d2, octahedral).',
      a_hi: 'यह [PCl₄]⁺ (sp³, चतुष्फलकीय) तथा [PCl₆]⁻ (sp³d², अष्टफलकीय) के रूप में रहता है।',
      formula: '$$2\\text{PCl}_5(s)=[\\text{PCl}_4]^+[\\text{PCl}_6]^-$$'
    },
    {
      d: 'H',
      q_en: 'How does s-character affect bond angle and bond length?',
      q_hi: 's-लक्षण आबंध कोण व आबंध लंबाई को कैसे प्रभावित करता है?',
      a_en: 'More s-character gives a larger angle and shorter, stronger bonds: sp > sp2 > sp3.',
      a_hi: 'अधिक s-लक्षण से बड़ा कोण, छोटे व प्रबल आबंध: sp > sp² > sp³।',
      formula: '$$sp>sp^2>sp^3$$'
    },
    {
      d: 'H',
      q_en: 'Give the hybridisation of N in NO2+, NO3- and NH2-.',
      q_hi: 'NO₂⁺, NO₃⁻ व NH₂⁻ में N का संकरण बताइए।',
      a_en: 'NO2+: sp (linear); NO3-: sp2 (planar); NH2-: sp3 (bent).',
      a_hi: 'NO₂⁺: sp (रैखिक); NO₃⁻: sp² (समतलीय); NH₂⁻: sp³ (बंकित)।',
      formula: ''
    }
  ],

  /* ---------- SET 11: Hybridisation with d-Orbitals: sp3d, sp3d2, sp3d3 & dsp2 ---------- */
  11: [
    {
      d: 'E',
      q_en: 'What are the hybridisation and shape of PCl5?',
      q_hi: 'PCl₅ का संकरण व आकृति क्या है?',
      a_en: 'sp3d, trigonal bipyramidal.',
      a_hi: 'sp³d, त्रिकोणीय द्विपिरामिडी।',
      formula: '$$\\text{P}:3s\\,3p_x\\,3p_y\\,3p_z\\,3d_{z^2}\\rightarrow sp^3d$$'
    },
    {
      d: 'E',
      q_en: 'What are the hybridisation and shape of SF6?',
      q_hi: 'SF₆ का संकरण व आकृति क्या है?',
      a_en: 'sp3d2, octahedral.',
      a_hi: 'sp³d², अष्टफलकीय।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What are the hybridisation and shape of IF7?',
      q_hi: 'IF₇ का संकरण व आकृति क्या है?',
      a_en: 'sp3d3, pentagonal bipyramidal.',
      a_hi: 'sp³d³, पंचकोणीय द्विपिरामिडी।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What are the hybridisation and shape of PtCl4^2- and Ni(CN)4^2-?',
      q_hi: 'PtCl₄²⁻ व Ni(CN)₄²⁻ का संकरण व आकृति क्या है?',
      a_en: 'dsp2, square planar.',
      a_hi: 'dsp², वर्ग समतलीय।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Which d-orbitals take part in sp3d and sp3d2 hybridisation?',
      q_hi: 'sp³d व sp³d² संकरण में कौन-से d कक्षक भाग लेते हैं?',
      a_en: 'sp3d uses d_z2; sp3d2 uses d_(x2-y2) and d_z2.',
      a_hi: 'sp³d में d_z²; sp³d² में d_(x²−y²) व d_z² भाग लेते हैं।',
      formula: '$$sp^3d:\\ d_{z^2};\\quad sp^3d^2:\\ d_{x^2-y^2},\\,d_{z^2}$$'
    },
    {
      d: 'M',
      q_en: 'Compare the axial and equatorial P-Cl bond lengths in PCl5.',
      q_hi: 'PCl₅ में अक्षीय व निरक्षीय P–Cl आबंध लंबाई की तुलना कीजिए।',
      a_en: 'Axial 240 pm is longer than equatorial 202 pm.',
      a_hi: 'अक्षीय 240 pm, निरक्षीय 202 pm से लंबा है।',
      formula: '$$d_{\\text{ax}}=240>d_{\\text{eq}}=202\\text{ pm}$$'
    },
    {
      d: 'M',
      q_en: 'Why are the axial bonds in PCl5 longer and weaker?',
      q_hi: 'PCl₅ में अक्षीय आबंध लंबे व दुर्बल क्यों हैं?',
      a_en: 'Each axial bond pair has three 90° neighbours versus two for equatorial, so repulsion is greater.',
      a_hi: 'प्रत्येक अक्षीय आबंधी युग्म के 90° पर तीन पड़ोसी हैं, निरक्षीय के दो; अतः प्रतिकर्षण अधिक है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What happens when PCl5 is heated?',
      q_hi: 'PCl₅ को गर्म करने पर क्या होता है?',
      a_en: 'It decomposes to PCl3 and Cl2, as the weak axial bonds break first.',
      a_hi: 'यह PCl₃ व Cl₂ में विघटित होता है, क्योंकि दुर्बल अक्षीय आबंध पहले टूटते हैं।',
      formula: '$$\\text{PCl}_5\\xrightarrow{\\Delta}\\text{PCl}_3+\\text{Cl}_2$$'
    },
    {
      d: 'M',
      q_en: 'Why are all six S-F bonds in SF6 equal?',
      q_hi: 'SF₆ के सभी छह S–F आबंध समान क्यों हैं?',
      a_en: 'The six sp3d2 orbitals are equivalent in an octahedron, each with four equal 90° neighbours.',
      a_hi: 'छहों sp³d² कक्षक अष्टफलक में समतुल्य हैं, प्रत्येक के 90° पर चार समान पड़ोसी हैं।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'State Drago\'s rule.',
      q_hi: 'ड्रैगो का नियम (Drago\'s rule) लिखिए।',
      a_en: 'Central atoms of period 3 or later with EN of 2.5 or less and a lone pair use pure p-orbitals (no hybridisation).',
      a_hi: 'आवर्त 3 या आगे के केंद्रीय परमाणु (EN ≤ 2.5) एकाकी युग्म होने पर शुद्ध p-कक्षक प्रयोग करते हैं (संकरण नहीं)।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why are the bond angles in PH3, H2S and AsH3 near 90°?',
      q_hi: 'PH₃, H₂S व AsH₃ के आबंध कोण 90° के निकट क्यों हैं?',
      a_en: 'Drago\'s rule: no hybridisation, nearly pure p-orbitals bond: PH3 93.6°, H2S 92°, AsH3 91.8°.',
      a_hi: 'ड्रैगो नियम: संकरण नहीं, लगभग शुद्ध p-कक्षक: PH₃ 93.6°, H₂S 92°, AsH₃ 91.8°।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'What is the structure of solid PBr5?',
      q_hi: 'ठोस PBr₅ की संरचना क्या है?',
      a_en: 'Ionic: [PBr4]+ Br-, with tetrahedral sp3 phosphorus in the cation.',
      a_hi: 'आयनिक: [PBr₄]⁺ Br⁻, जिसके धनायन में P चतुष्फलकीय (sp³) है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Give the hybridisation of Xe in XeF2, XeF4 and XeF6.',
      q_hi: 'XeF₂, XeF₄ व XeF₆ में Xe का संकरण बताइए।',
      a_en: 'sp3d (5 pairs), sp3d2 (6 pairs) and sp3d3 (7 pairs).',
      a_hi: 'sp³d (5 युग्म), sp³d² (6 युग्म) तथा sp³d³ (7 युग्म)।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Give the hybridisation of S in SF4, Cl in ClF3, Br in BrF5 and I in ICl4-.',
      q_hi: 'SF₄ में S, ClF₃ में Cl, BrF₅ में Br व ICl₄⁻ में I का संकरण बताइए।',
      a_en: 'SF4 and ClF3: sp3d; BrF5 and ICl4-: sp3d2.',
      a_hi: 'SF₄ व ClF₃: sp³d; BrF₅ व ICl₄⁻: sp³d²।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why is Ni(CN)4^2- square planar and diamagnetic but NiCl4^2- tetrahedral?',
      q_hi: 'Ni(CN)₄²⁻ वर्ग समतलीय व प्रतिचुंबकीय है पर NiCl₄²⁻ चतुष्फलकीय, क्यों?',
      a_en: 'Strong CN- pairs the d8 electrons (dsp2, diamagnetic); weak Cl- leaves two unpaired (sp3, paramagnetic).',
      a_hi: 'प्रबल CN⁻ d⁸ इलेक्ट्रॉन युग्मित करता है (dsp², प्रतिचुंबकीय); दुर्बल Cl⁻ दो अयुग्मित छोड़ता है (sp³)।',
      formula: ''
    }
  ],

  /* ---------- SET 12: Molecular Orbital Theory: LCAO, Bonding & Antibonding Orbitals ---------- */
  12: [
    {
      d: 'E',
      q_en: 'What is the central idea of molecular orbital theory?',
      q_hi: 'अणु कक्षक सिद्धांत का मूल विचार क्या है?',
      a_en: 'Atomic orbitals combine into molecular orbitals that extend over the whole molecule (Hund and Mulliken).',
      a_hi: 'परमाणु कक्षक मिलकर पूरे अणु पर फैले अणु कक्षक बनाते हैं (हुंड व मुलिकन)।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What is LCAO?',
      q_hi: 'LCAO क्या है?',
      a_en: 'Linear Combination of Atomic Orbitals: wave functions add or subtract to give molecular orbitals.',
      a_hi: 'परमाणु कक्षकों का रैखिक संयोजन: तरंग फलन जुड़कर या घटकर अणु कक्षक बनाते हैं।',
      formula: '$$\\psi_{MO}=\\psi_A\\pm\\psi_B$$'
    },
    {
      d: 'E',
      q_en: 'What is a bonding molecular orbital?',
      q_hi: 'आबंधी अणु कक्षक क्या है?',
      a_en: 'Formed by constructive interference (addition) of waves: lower energy, high electron density between nuclei.',
      a_hi: 'तरंगों के संपोषी व्यतिकरण (योग) से बनता है: कम ऊर्जा, नाभिकों के बीच उच्च इलेक्ट्रॉन घनत्व।',
      formula: '$$\\psi_{\\sigma}=\\psi_A+\\psi_B$$'
    },
    {
      d: 'E',
      q_en: 'What is an antibonding molecular orbital?',
      q_hi: 'प्रतिआबंधी अणु कक्षक क्या है?',
      a_en: 'Formed by destructive interference (subtraction): higher energy, with a nodal plane between the nuclei.',
      a_hi: 'विनाशी व्यतिकरण (घटाव) से बनता है: अधिक ऊर्जा, नाभिकों के बीच नोडल तल।',
      formula: '$$\\psi_{\\sigma^*}=\\psi_A-\\psi_B$$'
    },
    {
      d: 'E',
      q_en: 'Write the bond order formula in MOT.',
      q_hi: 'MOT में आबंध कोटि का सूत्र लिखिए।',
      a_en: 'BO = 1/2 (Nb - Na), with Nb bonding and Na antibonding electrons.',
      a_hi: 'BO = ½(N_b − N_a), जहाँ N_b आबंधी व N_a प्रतिआबंधी इलेक्ट्रॉन हैं।',
      formula: '$$\\text{BO}=\\frac{1}{2}(N_b-N_a)$$'
    },
    {
      d: 'M',
      q_en: 'How many molecular orbitals form from n atomic orbitals?',
      q_hi: 'n परमाणु कक्षकों से कितने अणु कक्षक बनते हैं?',
      a_en: 'Exactly n: half bonding and half antibonding (two AOs give one bonding and one antibonding MO).',
      a_hi: 'ठीक n: आधे आबंधी व आधे प्रतिआबंधी (दो AO से एक आबंधी व एक प्रतिआबंधी MO)।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What does BO ≤ 0 mean, and what does a fractional BO mean?',
      q_hi: 'BO ≤ 0 और भिन्नात्मक BO का क्या अर्थ है?',
      a_en: 'BO ≤ 0: the molecule does not exist; BO > 0 (even 0.5) means a stable species is possible.',
      a_hi: 'BO ≤ 0: अणु का अस्तित्व नहीं; BO > 0 (0.5 भी) पर स्पीशीज़ स्थायी हो सकती है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What are the conditions for combining atomic orbitals into MOs?',
      q_hi: 'परमाणु कक्षकों के MO बनाने की शर्तें क्या हैं?',
      a_en: 'Similar energy, same symmetry about the molecular axis, and sufficient overlap.',
      a_hi: 'समान ऊर्जा, आण्विक अक्ष के सापेक्ष समान समिति तथा पर्याप्त अतिव्यापन।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Describe the nodal planes of σ and σ* orbitals.',
      q_hi: 'σ व σ* कक्षकों के नोडल तल बताइए।',
      a_en: 'σ has no node between the nuclei; σ* has one nodal plane perpendicular to the axis, between them.',
      a_hi: 'σ के नाभिकों के बीच कोई नोड नहीं; σ* में अक्ष के लंबवत एक नोडल तल बीच में होता है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Why does an antibonding orbital destabilise more than a bonding one stabilises?',
      q_hi: 'प्रतिआबंधी कक्षक की अस्थिरता आबंधी की स्थिरता से अधिक क्यों होती है?',
      a_en: 'Overlap raises the antibonding MO more than it lowers the bonding MO, so filling both equally is net destabilising.',
      a_hi: 'अतिव्यापन प्रतिआबंधी MO को आबंधी MO के घटने से अधिक ऊपर उठाता है; दोनों बराबर भरने पर कुल अस्थायित्व।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'How many nodal planes do π2p and π*2p orbitals have?',
      q_hi: 'π2p व π*2p कक्षकों के कितने नोडल तल हैं?',
      a_en: 'π2p: one (containing the molecular axis); π*2p: two (that plane plus one between the nuclei).',
      a_hi: 'π2p: एक (आण्विक अक्ष वाला); π*2p: दो (वही तल व नाभिकों के बीच का एक)।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Can 2s of one atom combine with 2p_z of the other? Can p_x with p_z?',
      q_hi: 'क्या एक परमाणु का 2s दूसरे के 2p_z से जुड़ सकता है? p_x और p_z?',
      a_en: 's and p_z combine (same symmetry about the z-axis); p_x and p_z cannot (different symmetry).',
      a_hi: 's व p_z जुड़ सकते हैं (z-अक्ष पर समान समिति); p_x व p_z नहीं (भिन्न समिति)।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'State the three rules for filling molecular orbitals.',
      q_hi: 'अणु कक्षकों को भरने के तीन नियम लिखिए।',
      a_en: 'Aufbau (lowest energy first), Pauli (max two electrons, opposite spins) and Hund (singly fill degenerate orbitals first).',
      a_hi: 'ऑफ़बाऊ (कम ऊर्जा पहले), पाउली (अधिकतम दो e⁻, विपरीत चक्रण) तथा हुंड (समऊर्जी कक्षकों में पहले एकल भरना)।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'How does MOT decide the magnetic nature of a molecule?',
      q_hi: 'MOT अणु की चुंबकीय प्रकृति कैसे तय करता है?',
      a_en: 'Unpaired electrons give paramagnetism; all paired electrons give diamagnetism.',
      a_hi: 'अयुग्मित इलेक्ट्रॉन अनुचुंबकत्व देते हैं; सभी युग्मित हों तो प्रतिचुंबकत्व।',
      formula: '$$\\mu=\\sqrt{n(n+2)}\\text{ BM}$$'
    },
    {
      d: 'H',
      q_en: 'How do MOT and VBT differ in treating electrons?',
      q_hi: 'इलेक्ट्रॉनों के संबंध में MOT और VBT में क्या अंतर है?',
      a_en: 'VBT keeps electrons localised between two atoms; MOT delocalises them over the whole molecule.',
      a_hi: 'VBT इलेक्ट्रॉनों को दो परमाणुओं के बीच स्थानीकृत रखता है; MOT उन्हें पूरे अणु पर विस्थानीकृत करता है।',
      formula: ''
    }
  ],

  /* ---------- SET 13: MOT Energy Level Diagrams & Diatomic Molecules (H2 to Ne2) ---------- */
  13: [
    {
      d: 'E',
      q_en: 'Give the MO energy order for molecules with 14 or fewer electrons.',
      q_hi: '14 या कम इलेक्ट्रॉन वाले अणुओं का MO ऊर्जा क्रम दीजिए।',
      a_en: 'σ1s < σ*1s < σ2s < σ*2s < (π2px = π2py) < σ2pz < (π*2px = π*2py) < σ*2pz (Li2 to N2).',
      a_hi: 'σ1s < σ*1s < σ2s < σ*2s < (π2pₓ = π2p_y) < σ2p_z < (π*2pₓ = π*2p_y) < σ*2p_z (Li₂ से N₂)।',
      formula: '$$\\pi_{2p}<\\sigma_{2p_z}\\ (\\le14\\ e^-)$$'
    },
    {
      d: 'E',
      q_en: 'Give the MO energy order for molecules with more than 14 electrons.',
      q_hi: '14 से अधिक इलेक्ट्रॉन वाले अणुओं का MO ऊर्जा क्रम दीजिए।',
      a_en: 'σ2pz lies below π2p: σ2s < σ*2s < σ2pz < (π2px = π2py) < (π*2px = π*2py) < σ*2pz (O2, F2, Ne2).',
      a_hi: 'σ2p_z, π2p से नीचे: σ2s < σ*2s < σ2p_z < (π2pₓ = π2p_y) < (π*2pₓ = π*2p_y) < σ*2p_z (O₂, F₂, Ne₂)।',
      formula: '$$\\sigma_{2p_z}<\\pi_{2p}\\ (>14\\ e^-)$$'
    },
    {
      d: 'E',
      q_en: 'State the bond order and magnetic nature of H2.',
      q_hi: 'H₂ की आबंध कोटि व चुंबकीय प्रकृति बताइए।',
      a_en: 'BO = 1 (σ1s^2); diamagnetic.',
      a_hi: 'BO = 1 (σ1s²); प्रतिचुंबकीय।',
      formula: '$$\\sigma_{1s}^2:\\ \\text{BO}=1$$'
    },
    {
      d: 'E',
      q_en: 'State the bond order of He2. Does it exist?',
      q_hi: 'He₂ की आबंध कोटि बताइए; क्या इसका अस्तित्व है?',
      a_en: 'BO = (2 - 2)/2 = 0, so He2 does not exist.',
      a_hi: 'BO = (2 − 2)/2 = 0, अतः He₂ का अस्तित्व नहीं है।',
      formula: '$$\\sigma_{1s}^2\\sigma_{1s}^{*2}:\\ \\text{BO}=0$$'
    },
    {
      d: 'E',
      q_en: 'State the bond order and magnetic nature of Li2.',
      q_hi: 'Li₂ की आबंध कोटि व चुंबकीय प्रकृति बताइए।',
      a_en: 'BO = 1 (σ2s^2); diamagnetic, known in the vapour phase.',
      a_hi: 'BO = 1 (σ2s²); प्रतिचुंबकीय, वाष्प अवस्था में ज्ञात।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What is s-p mixing and why does it matter up to N2?',
      q_hi: 's–p मिश्रण क्या है और N₂ तक यह क्यों महत्वपूर्ण है?',
      a_en: '2s and 2p energies are close in Li to N, so mixing pushes σ2pz above π2p; in O2 and F2 the gap is larger.',
      a_hi: 'Li से N में 2s व 2p ऊर्जाएँ निकट हैं, मिश्रण σ2p_z को π2p से ऊपर कर देता है; O₂, F₂ में अंतर अधिक है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Give the bond order of H2+ and H2-. Which is more stable?',
      q_hi: 'H₂⁺ व H₂⁻ की आबंध कोटि बताइए। कौन अधिक स्थायी है?',
      a_en: 'Both 0.5; H2+ (σ1s^1) is more stable since H2- carries an antibonding electron (σ1s^2 σ*1s^1).',
      a_hi: 'दोनों 0.5; H₂⁺ (σ1s¹) अधिक स्थायी है क्योंकि H₂⁻ में प्रतिआबंधी इलेक्ट्रॉन है (σ1s² σ*1s¹)।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Give the bond order of He2+.',
      q_hi: 'He₂⁺ की आबंध कोटि बताइए।',
      a_en: 'BO = (2 - 1)/2 = 0.5; He2+ (σ1s^2 σ*1s^1) is paramagnetic and weakly bound.',
      a_hi: 'BO = (2 − 1)/2 = 0.5; He₂⁺ (σ1s² σ*1s¹) अनुचुंबकीय व दुर्बल बंधित है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Give the bond order of Be2.',
      q_hi: 'Be₂ की आबंध कोटि बताइए।',
      a_en: 'BO = (4 - 4)/2 = 0 (σ2s^2 σ*2s^2), so Be2 does not exist.',
      a_hi: 'BO = (4 − 4)/2 = 0 (σ2s² σ*2s²), अतः Be₂ का अस्तित्व नहीं।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Give the bond order and magnetism of B2.',
      q_hi: 'B₂ की आबंध कोटि व चुंबकत्व बताइए।',
      a_en: 'BO = 1; paramagnetic with two unpaired electrons, one each in π2px and π2py.',
      a_hi: 'BO = 1; अनुचुंबकीय, दो अयुग्मित इलेक्ट्रॉन — π2pₓ व π2p_y में एक-एक।',
      formula: '$$\\text{B}_2:\\ \\pi_{2p_x}^1\\pi_{2p_y}^1$$'
    },
    {
      d: 'H',
      q_en: 'Why are both bonds in C2 π bonds? Give its BO and magnetism.',
      q_hi: 'C₂ में दोनों आबंध π क्यों हैं? इसकी BO व चुंबकत्व बताइए।',
      a_en: 'σ2s^2 σ*2s^2 π2p^4: no σ2pz electrons, so BO = 2 from two π bonds; diamagnetic.',
      a_hi: 'σ2s² σ*2s² π2p⁴: σ2p_z में इलेक्ट्रॉन नहीं, अतः दो π आबंध से BO = 2; प्रतिचुंबकीय।',
      formula: '$$\\text{C}_2:\\ \\pi_{2p_x}^2\\pi_{2p_y}^2$$'
    },
    {
      d: 'H',
      q_en: 'Write the valence MO configuration of N2 with BO and magnetism.',
      q_hi: 'N₂ का संयोजी MO विन्यास, BO व चुंबकत्व लिखिए।',
      a_en: 'σ2s^2 σ*2s^2 π2p^4 σ2pz^2: BO = (10 - 4)/2 = 3; diamagnetic.',
      a_hi: 'σ2s² σ*2s² π2p⁴ σ2p_z²: BO = (10 − 4)/2 = 3; प्रतिचुंबकीय।',
      formula: '$$\\text{BO}=\\frac{10-4}{2}=3$$'
    },
    {
      d: 'H',
      q_en: 'Give the BO and magnetism of F2 and Ne2.',
      q_hi: 'F₂ व Ne₂ की BO व चुंबकत्व बताइए।',
      a_en: 'F2: BO = 1, diamagnetic; Ne2: BO = 0, does not exist.',
      a_hi: 'F₂: BO = 1, प्रतिचुंबकीय; Ne₂: BO = 0, अस्तित्व नहीं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Which of Li2, Be2, B2, C2 and N2 is paramagnetic?',
      q_hi: 'Li₂, Be₂, B₂, C₂ व N₂ में कौन अनुचुंबकीय है?',
      a_en: 'Only B2, with two unpaired electrons in degenerate π2p orbitals.',
      a_hi: 'केवल B₂, जिसमें समऊर्जी π2p कक्षकों में दो अयुग्मित इलेक्ट्रॉन हैं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Arrange Be2, Li2, B2, C2 and N2 by bond order.',
      q_hi: 'Be₂, Li₂, B₂, C₂ व N₂ को आबंध कोटि के क्रम में रखिए।',
      a_en: 'Be2 (0) < Li2 = B2 (1) < C2 (2) < N2 (3).',
      a_hi: 'Be₂ (0) < Li₂ = B₂ (1) < C₂ (2) < N₂ (3)।',
      formula: '$$\\text{Be}_2<\\text{Li}_2=\\text{B}_2<\\text{C}_2<\\text{N}_2$$'
    }
  ],

  /* ---------- SET 14: MOT of O2 Species, N2 Species & Heteronuclear Diatomics ---------- */
  14: [
    {
      d: 'E',
      q_en: 'Why is O2 paramagnetic? Which theory explains it?',
      q_hi: 'O₂ अनुचुंबकीय क्यों है? कौन-सा सिद्धांत समझाता है?',
      a_en: 'MOT: two unpaired electrons in π*2px and π*2py. VBT predicts a diamagnetic O=O, so it fails here.',
      a_hi: 'MOT: π*2pₓ व π*2p_y में दो अयुग्मित इलेक्ट्रॉन। VBT O=O को प्रतिचुंबकीय बताता है, अतः यहाँ असफल।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Write the MO configuration of O2 and its bond order.',
      q_hi: 'O₂ का MO विन्यास व आबंध कोटि लिखिए।',
      a_en: 'σ2s^2 σ*2s^2 σ2pz^2 π2p^4 π*2p^2: BO = (10 - 6)/2 = 2.',
      a_hi: 'σ2s² σ*2s² σ2p_z² π2p⁴ π*2p²: BO = (10 − 6)/2 = 2।',
      formula: '$$\\text{BO}=\\frac{10-6}{2}=2$$'
    },
    {
      d: 'E',
      q_en: 'Give the bond order and magnetism of O2+.',
      q_hi: 'O₂⁺ की आबंध कोटि व चुंबकत्व बताइए।',
      a_en: 'BO = 2.5; paramagnetic (one unpaired electron in π*).',
      a_hi: 'BO = 2.5; अनुचुंबकीय (π* में एक अयुग्मित इलेक्ट्रॉन)।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Give the bond order and magnetism of the superoxide ion O2-.',
      q_hi: 'सुपरऑक्साइड आयन O₂⁻ की आबंध कोटि व चुंबकत्व बताइए।',
      a_en: 'BO = 1.5; paramagnetic (one unpaired electron in π*).',
      a_hi: 'BO = 1.5; अनुचुंबकीय (π* में एक अयुग्मित इलेक्ट्रॉन)।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Give the bond order and magnetism of the peroxide ion O2^2-.',
      q_hi: 'परॉक्साइड आयन O₂²⁻ की आबंध कोटि व चुंबकत्व बताइए।',
      a_en: 'BO = 1; diamagnetic (all electrons paired).',
      a_hi: 'BO = 1; प्रतिचुंबकीय (सभी इलेक्ट्रॉन युग्मित)।',
      formula: '$$\\text{O}_2^{2-}:\\ \\text{BO}=\\frac{10-8}{2}=1$$'
    },
    {
      d: 'M',
      q_en: 'Arrange O2+, O2, O2- and O2^2- by bond length and stability.',
      q_hi: 'O₂⁺, O₂, O₂⁻, O₂²⁻ को आबंध लंबाई व स्थायित्व के क्रम में रखिए।',
      a_en: 'Length: O2+ < O2 < O2- < O2^2- (112, 121, 128, 149 pm); stability falls in the same order.',
      a_hi: 'लंबाई: O₂⁺ < O₂ < O₂⁻ < O₂²⁻ (112, 121, 128, 149 pm); स्थायित्व इसी क्रम में घटता है।',
      formula: '$$\\text{BO}:\\ 2.5>2>1.5>1$$'
    },
    {
      d: 'M',
      q_en: 'Give the bond order of N2, N2+, N2- and N2^2-.',
      q_hi: 'N₂, N₂⁺, N₂⁻ व N₂²⁻ की आबंध कोटि बताइए।',
      a_en: 'N2: 3; N2+: 2.5; N2-: 2.5; N2^2-: 2.',
      a_hi: 'N₂: 3; N₂⁺: 2.5; N₂⁻: 2.5; N₂²⁻: 2।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Give the bond order and magnetism of CN- and CN.',
      q_hi: 'CN⁻ व CN की आबंध कोटि व चुंबकत्व बताइए।',
      a_en: 'CN-: BO 3, diamagnetic; CN: BO 2.5, paramagnetic (13 electrons).',
      a_hi: 'CN⁻: BO 3, प्रतिचुंबकीय; CN: BO 2.5, अनुचुंबकीय (13 इलेक्ट्रॉन)।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Give the bond order and magnetism of NO and NO+.',
      q_hi: 'NO व NO⁺ की आबंध कोटि व चुंबकत्व बताइए।',
      a_en: 'NO: BO 2.5, paramagnetic (one electron in π*); NO+: BO 3, diamagnetic.',
      a_hi: 'NO: BO 2.5, अनुचुंबकीय (π* में एक इलेक्ट्रॉन); NO⁺: BO 3, प्रतिचुंबकीय।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Give the bond order and magnetism of CO.',
      q_hi: 'CO की आबंध कोटि व चुंबकत्व बताइए।',
      a_en: 'BO = 3, diamagnetic; CO is isoelectronic with N2 (14 electrons) and has the same MO order.',
      a_hi: 'BO = 3, प्रतिचुंबकीय; CO, N₂ का समइलेक्ट्रॉनिक (14 e⁻) है और MO क्रम वही है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Give the spin-only magnetic moments of O2+, O2, O2- and O2^2-.',
      q_hi: 'O₂⁺, O₂, O₂⁻ व O₂²⁻ के चक्रण-मात्र चुंबकीय आघूर्ण बताइए।',
      a_en: 'O2+ 1.73, O2 2.83, O2- 1.73 BM and O2^2- 0 (using μ = √(n(n+2))).',
      a_hi: 'O₂⁺ 1.73, O₂ 2.83, O₂⁻ 1.73 BM तथा O₂²⁻ 0 (μ = √(n(n+2)) से)।',
      formula: '$$\\mu=\\sqrt{n(n+2)}$$'
    },
    {
      d: 'H',
      q_en: 'Why is the N-O bond in NO+ shorter than in NO?',
      q_hi: 'NO⁺ में N–O आबंध NO से छोटा क्यों है?',
      a_en: 'NO+ loses the antibonding π* electron, so BO rises from 2.5 to 3 (106 pm vs 115 pm).',
      a_hi: 'NO⁺ प्रतिआबंधी π* इलेक्ट्रॉन खो देता है, अतः BO 2.5 से 3 हो जाती है (106 pm बनाम 115 pm)।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Which is paramagnetic: N2^2-, CN-, NO+ or CO?',
      q_hi: 'N₂²⁻, CN⁻, NO⁺ व CO में कौन अनुचुंबकीय है?',
      a_en: 'Only N2^2- (16 electrons, two unpaired in π*2p); CN-, NO+ and CO are diamagnetic.',
      a_hi: 'केवल N₂²⁻ (16 इलेक्ट्रॉन, π*2p में दो अयुग्मित); CN⁻, NO⁺ व CO प्रतिचुंबकीय हैं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why is the O-O bond in O2+ shorter and stronger than in O2?',
      q_hi: 'O₂⁺ में O–O आबंध O₂ से छोटा व प्रबल क्यों है?',
      a_en: 'Removing an antibonding π* electron raises the bond order from 2 to 2.5.',
      a_hi: 'प्रतिआबंधी π* इलेक्ट्रॉन हटने से आबंध कोटि 2 से 2.5 हो जाती है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why is NO easily oxidised to NO+?',
      q_hi: 'NO आसानी से NO⁺ में क्यों ऑक्सीकृत हो जाता है?',
      a_en: 'Its single π* electron is easily removed, giving a more stable species with BO 3.',
      a_hi: 'इसका एकमात्र π* इलेक्ट्रॉन आसानी से निकल जाता है, जिससे BO 3 वाली अधिक स्थायी स्पीशीज़ बनती है।',
      formula: ''
    }
  ],

  /* ---------- SET 15: Hydrogen Bonding: Intermolecular vs Intramolecular & Consequences ---------- */
  15: [
    {
      d: 'E',
      q_en: 'Define hydrogen bond.',
      q_hi: 'हाइड्रोजन आबंध परिभाषित कीजिए।',
      a_en: 'The attraction between H bonded to a highly electronegative atom and a lone pair on another electronegative atom.',
      a_hi: 'अत्यधिक विद्युत ऋणात्मक परमाणु से जुड़े H तथा दूसरे विद्युत ऋणात्मक परमाणु के एकाकी युग्म के बीच आकर्षण।',
      formula: '$$\\text{X–H}\\cdots\\text{Y}\\ (\\text{X, Y}=\\text{F, O, N})$$'
    },
    {
      d: 'E',
      q_en: 'What are the conditions for hydrogen bonding?',
      q_hi: 'हाइड्रोजन आबंध बनने की शर्तें क्या हैं?',
      a_en: 'H must be bonded to a small, highly electronegative atom: F, O or N.',
      a_hi: 'H, छोटे, अत्यधिक विद्युत ऋणात्मक परमाणु (F, O या N) से जुड़ा होना चाहिए।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What are the strength and order of hydrogen bonds?',
      q_hi: 'हाइड्रोजन आबंध की सामर्थ्य व क्रम क्या है?',
      a_en: '10-40 kJ/mol; F-H···F > O-H···O > N-H···N.',
      a_hi: '10–40 kJ/mol; F–H···F > O–H···O > N–H···N।',
      formula: '$$\\text{H}\\cdots\\text{F}>\\text{H}\\cdots\\text{O}>\\text{H}\\cdots\\text{N}$$'
    },
    {
      d: 'E',
      q_en: 'Name the two types of hydrogen bonding with examples.',
      q_hi: 'हाइड्रोजन आबंध के दो प्रकार उदाहरण सहित बताइए।',
      a_en: 'Intermolecular: H2O, HF. Intramolecular: o-nitrophenol, salicylaldehyde.',
      a_hi: 'अंतरआण्विक: H₂O, HF। अंतःआण्विक: o-नाइट्रोफ़ीनॉल, सैलिसिलऐल्डिहाइड।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Why does ice float on water?',
      q_hi: 'बर्फ़ पानी पर क्यों तैरती है?',
      a_en: 'Ice has an open cage-like tetrahedral H-bonded structure with empty spaces, so it is less dense than water.',
      a_hi: 'बर्फ़ में H-आबंधित खुली पिंजरे जैसी चतुष्फलकीय संरचना है, जिसमें रिक्त स्थान हैं; अतः घनत्व कम है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Why is H2O (373 K) a liquid with a higher boiling point than HF (292.5 K) and NH3 (239.7 K)?',
      q_hi: 'H₂O (373 K) का क्वथनांक HF (292.5 K) व NH₃ (239.7 K) से अधिक क्यों है?',
      a_en: 'Each H2O forms up to 4 H bonds (2 donated, 2 accepted); HF forms only 2 and NH3 has weaker bonds.',
      a_hi: 'प्रत्येक H₂O 4 तक H-आबंध बनाता है (2 देता, 2 लेता); HF केवल 2 बनाता है, NH₃ के आबंध दुर्बल हैं।',
      formula: '$$373>292.5>239.7\\text{ K}$$'
    },
    {
      d: 'M',
      q_en: 'Compare o-nitrophenol and p-nitrophenol.',
      q_hi: 'o-नाइट्रोफ़ीनॉल व p-नाइट्रोफ़ीनॉल की तुलना कीजिए।',
      a_en: 'o- has intramolecular H-bonds: steam volatile, lower b.p. p- has intermolecular H-bonds: higher b.p., more water-soluble.',
      a_hi: 'o- में अंतःआण्विक H-आबंध: वाष्प-वाष्पशील, कम क्वथनांक। p- में अंतरआण्विक: अधिक क्वथनांक, जल में अधिक विलेय।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Why does acetic acid dimerise in benzene?',
      q_hi: 'ऐसीटिक अम्ल बेंज़ीन में द्विलक क्यों बनाता है?',
      a_en: 'Two molecules form two O-H···O hydrogen bonds, giving a cyclic dimer and an apparent molar mass near 120.',
      a_hi: 'दो अणु दो O–H···O H-आबंध बनाकर चक्रीय द्विलक देते हैं; आभासी मोलर द्रव्यमान लगभग 120 मिलता है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Why does chlorine rarely form hydrogen bonds despite EN similar to N?',
      q_hi: 'N के समान EN होने पर भी क्लोरीन H-आबंध क्यों कम बनाता है?',
      a_en: 'Cl is much larger than N, so its charge density is low and its attraction to H is weak.',
      a_hi: 'Cl, N से बहुत बड़ा है, इसलिए आवेश घनत्व कम है और H के प्रति आकर्षण दुर्बल है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Why does KHF2 exist but KHCl2 does not?',
      q_hi: 'KHF₂ का अस्तित्व है पर KHCl₂ का नहीं, क्यों?',
      a_en: 'F is small and highly electronegative, so strong H-bonding stabilises HF2-; Cl cannot form such bonds.',
      a_hi: 'F छोटा व अत्यधिक विद्युत ऋणात्मक है, अतः प्रबल H-आबंध HF₂⁻ को स्थायी करता है; Cl ऐसा नहीं कर पाता।',
      formula: '$$[\\text{F–H}\\cdots\\text{F}]^-$$'
    },
    {
      d: 'H',
      q_en: 'Arrange HF, HCl, HBr and HI by boiling point.',
      q_hi: 'HF, HCl, HBr व HI को क्वथनांक के क्रम में रखिए।',
      a_en: 'HF > HI > HBr > HCl: HF is highest due to H-bonding; then van der Waals forces rise with size.',
      a_hi: 'HF > HI > HBr > HCl: HF में H-आबंध से सर्वाधिक; फिर आकार के साथ वांडरवाल्स बल बढ़ते हैं।',
      formula: '$$\\text{HF}>\\text{HI}>\\text{HBr}>\\text{HCl}$$'
    },
    {
      d: 'H',
      q_en: 'Arrange H2O, H2S, H2Se and H2Te by boiling point.',
      q_hi: 'H₂O, H₂S, H₂Se व H₂Te को क्वथनांक के क्रम में रखिए।',
      a_en: 'H2O > H2Te > H2Se > H2S: water is anomalous; the rest rise with molecular size.',
      a_hi: 'H₂O > H₂Te > H₂Se > H₂S: जल असामान्य है; शेष आण्विक आकार के साथ बढ़ते हैं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why does ethanol boil at 351 K but dimethyl ether at 248 K?',
      q_hi: 'एथेनॉल 351 K पर पर डाइमेथिल ईथर 248 K पर क्यों उबलता है?',
      a_en: 'Ethanol molecules are linked by intermolecular O-H···O bonds; the ether has no O-H.',
      a_hi: 'एथेनॉल अणु अंतरआण्विक O–H···O आबंधों से जुड़े हैं; ईथर में O–H नहीं है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why is salicylaldehyde a liquid while its para isomer is a solid?',
      q_hi: 'सैलिसिलऐल्डिहाइड द्रव है पर उसका पारा समावयवी ठोस, क्यों?',
      a_en: 'Ortho has intramolecular H-bonding (chelation), so molecules do not associate; para associates intermolecularly.',
      a_hi: 'ऑर्थो में अंतःआण्विक H-आबंध (कीलेशन) है, अणु संगुणित नहीं होते; पारा अंतरआण्विक रूप से संगुणित होता है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why is water densest at 4 °C (277 K)?',
      q_hi: 'जल का घनत्व 4 °C (277 K) पर अधिकतम क्यों होता है?',
      a_en: 'Below 4 °C, H-bond cages open up (expansion); above it thermal motion expands water, so density peaks at 4 °C.',
      a_hi: '4 °C से नीचे H-आबंध पिंजरे खुलते हैं (प्रसार); ऊपर ऊष्मीय गति से प्रसार होता है; अतः घनत्व 4 °C पर अधिकतम।',
      formula: ''
    }
  ]
};
