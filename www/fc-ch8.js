/* ==========================================================================
   CHEMISTRY EXPLORER - Class 11 Chemistry
   Chapter 8: Organic Chemistry: Some Basic Principles and Techniques (GOC)
   Flashcard database: 15 sets x 15 cards = 225 hand-crafted cards
   Each set: 5 Easy (E) + 5 Medium (M) + 5 Hard (H)
   Read by buildDeck(ch, s) via window.FLASHCARD_SETS_DB[chId][setNum]
   ========================================================================== */
window.FLASHCARD_SETS_DB = window.FLASHCARD_SETS_DB || {};
window.FLASHCARD_SETS_DB.ch8 = {
  /* ---------- SET 1: Tetravalency of Carbon & Shapes of Organic Molecules ---------- */
  1: [
    {
      d: 'E',
      q_en: 'What was the vital force theory and who disproved it?',
      q_hi: 'वाइटल फ़ोर्स सिद्धान्त (vital force theory) क्या था और इसे किसने असत्य सिद्ध किया?',
      a_en: 'Berzelius: organic compounds form only in living organisms. Wöhler (1828) made urea from NH4CNO in the lab.',
      a_hi: 'बर्ज़ीलियस: कार्बनिक यौगिक केवल जीवों में बनते हैं। वोहलर (Wöhler, 1828) ने NH4CNO से प्रयोगशाला में यूरिया बनाया।',
      formula: '$$\\text{NH}_4\\text{CNO}\\xrightarrow{\\Delta}\\text{NH}_2\\text{CONH}_2$$'
    },
    {
      d: 'E',
      q_en: 'Why is carbon tetravalent?',
      q_hi: 'कार्बन चतुःसंयोजी (tetravalent) क्यों है?',
      a_en: 'In the excited state (2s¹2p³) carbon has four unpaired electrons, so it forms four covalent bonds by sharing.',
      a_hi: 'उत्तेजित अवस्था (2s¹2p³) में कार्बन के चार अयुग्मित e⁻ होते हैं, अतः यह साझेदारी से चार सहसंयोजी आबंध बनाता है।',
      formula: '$$\\text{C}:\\ 1s^2 2s^2 2p^2\\ \\rightarrow\\ 1s^2 2s^1 2p^3$$'
    },
    {
      d: 'E',
      q_en: 'What is catenation? Why is carbon the best at it?',
      q_hi: 'शृंखलन (catenation) क्या है? कार्बन में यह सर्वाधिक क्यों है?',
      a_en: 'Self-linking of atoms into long chains and rings. Carbon is small and its C–C bond is very strong (348 kJ/mol).',
      a_hi: 'परमाणुओं का स्वयं से जुड़कर लंबी शृंखला व वलय बनाना। कार्बन छोटा है तथा C–C आबंध (348 kJ/mol) अति प्रबल है।',
      formula: '$$\\text{C-C}:\\ 348\\ \\text{kJ mol}^{-1}$$'
    },
    {
      d: 'E',
      q_en: 'State the shape, bond angle and hybridisation of carbon in methane.',
      q_hi: 'मेथेन में कार्बन की आकृति, आबंध कोण व संकरण (hybridisation) बताइए।',
      a_en: 'Tetrahedral, H–C–H angle 109.5°, carbon is sp³ hybridised (four sp³–s σ bonds).',
      a_hi: 'चतुष्फलकीय (tetrahedral), H–C–H कोण 109.5°, कार्बन sp³ संकरित (चार sp³–s σ आबंध)।',
      formula: '$$\\text{CH}_4:\\ sp^3,\\ 109.5^\\circ$$'
    },
    {
      d: 'E',
      q_en: 'Write the complete, condensed and bond-line representation of ethanol.',
      q_hi: 'एथेनॉल का पूर्ण, संघनित (condensed) व आबंध-रेखा (bond-line) निरूपण लिखिए।',
      a_en: 'Complete shows every bond; condensed: CH3CH2OH; bond-line: a two-segment line ending in OH (H on C omitted).',
      a_hi: 'पूर्ण सूत्र में सभी आबंध; संघनित: CH3CH2OH; आबंध-रेखा: OH पर समाप्त दो खंडों की रेखा (C पर H नहीं दिखाते)।',
      formula: '$$\\text{C}_2\\text{H}_6\\text{O}\\ \\rightarrow\\ \\text{CH}_3\\text{CH}_2\\text{OH}$$'
    },
    {
      d: 'M',
      q_en: 'Arrange C–C, C=C and C≡C by bond length and give the values.',
      q_hi: 'C–C, C=C व C≡C को आबंध लंबाई (bond length) के क्रम में मानों सहित लिखिए।',
      a_en: 'C–C (154 pm) > C=C (134 pm) > C≡C (120 pm). More shared pairs pull the nuclei closer together.',
      a_hi: 'C–C (154 pm) > C=C (134 pm) > C≡C (120 pm)। साझे इलेक्ट्रॉन-युग्म बढ़ने पर नाभिक पास आते हैं।',
      formula: '$$d_{\\text{C-C}}>d_{\\text{C=C}}>d_{\\text{C}\\equiv\\text{C}}$$'
    },
    {
      d: 'M',
      q_en: 'Give hybridisation, shape and bond angle of carbon in C2H4 and C2H2.',
      q_hi: 'C2H4 व C2H2 में कार्बन का संकरण, आकृति व आबंध कोण बताइए।',
      a_en: 'C2H4: sp², trigonal planar, 120°. C2H2: sp, linear, 180°.',
      a_hi: 'C2H4: sp², त्रिकोणीय समतलीय, 120°। C2H2: sp, रैखिक (linear), 180°।',
      formula: '$$\\text{C}_2\\text{H}_4:\\ sp^2,\\ 120^\\circ;\\quad \\text{C}_2\\text{H}_2:\\ sp,\\ 180^\\circ$$'
    },
    {
      d: 'M',
      q_en: 'Give the % s-character of sp³, sp² and sp carbon and the electronegativity trend.',
      q_hi: 'sp³, sp² व sp कार्बन का s-लक्षण (s-character) % तथा विद्युत-ऋणात्मकता क्रम बताइए।',
      a_en: 's-character: sp³ 25%, sp² 33%, sp 50%. More s-character means a more electronegative carbon: sp > sp² > sp³.',
      a_hi: 's-लक्षण: sp³ 25%, sp² 33%, sp 50%। s-लक्षण अधिक ⇒ कार्बन अधिक विद्युत-ऋणात्मक: sp > sp² > sp³।',
      formula: '$$\\text{EN}:\\ sp\\,(50\\%)>sp^2\\,(33\\%)>sp^3\\,(25\\%)$$'
    },
    {
      d: 'M',
      q_en: 'A zig-zag bond-line drawing has six carbon vertices/ends, all single bonds. Give its formula.',
      q_hi: 'आबंध-रेखा के ज़िग-ज़ैग चित्र में छः C शीर्ष/सिरे हैं, सभी एकल आबंध। आण्विक सूत्र बताइए।',
      a_en: 'Each end is CH3 and each vertex CH2, so it is hexane, C6H14 (CnH2n+2 with n = 6).',
      a_hi: 'प्रत्येक सिरा CH3 व शीर्ष CH2 है, अतः यह हेक्सेन C6H14 है (CnH2n+2, n = 6)।',
      formula: '$$\\text{CH}_3(\\text{CH}_2)_4\\text{CH}_3=\\text{C}_6\\text{H}_{14}$$'
    },
    {
      d: 'M',
      q_en: 'Why does carbon form covalent rather than ionic bonds?',
      q_hi: 'कार्बन आयनिक के बजाय सहसंयोजी आबंध क्यों बनाता है?',
      a_en: 'Losing or gaining four electrons (C⁴⁺ or C⁴⁻) needs far too much energy, so carbon shares electrons instead.',
      a_hi: 'चार e⁻ त्यागने या ग्रहण करने (C⁴⁺ या C⁴⁻) में बहुत अधिक ऊर्जा लगती है, अतः कार्बन e⁻ साझा करता है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'In allene CH2=C=CH2, give the hybridisation of each carbon and the molecular shape.',
      q_hi: 'ऐलीन (allene) CH2=C=CH2 में प्रत्येक कार्बन का संकरण व आकृति बताइए।',
      a_en: 'Terminal C: sp²; central C: sp. C=C=C is linear (180°) and the two CH2 planes are perpendicular to each other.',
      a_hi: 'सिरों के C: sp²; केन्द्रीय C: sp। C=C=C रैखिक (180°) है तथा दोनों CH2 तल परस्पर लंबवत हैं।',
      formula: '$$\\text{CH}_2=\\text{C}=\\text{CH}_2:\\ sp^2,\\ sp,\\ sp^2$$'
    },
    {
      d: 'H',
      q_en: 'In CH2=CH–C≡CH give the hybridisation of each C and the total σ and π bonds.',
      q_hi: 'CH2=CH–C≡CH में प्रत्येक C का संकरण तथा कुल σ व π आबंधों की संख्या बताइए।',
      a_en: 'C1, C2: sp²; C3, C4: sp. Total 7 σ bonds (3 C–C + 4 C–H) and 3 π bonds (one in C=C, two in C≡C).',
      a_hi: 'C1, C2: sp²; C3, C4: sp। कुल 7 σ (3 C–C + 4 C–H) व 3 π आबंध (C=C में एक, C≡C में दो)।',
      formula: '$$\\sigma=7,\\ \\pi=3$$'
    },
    {
      d: 'H',
      q_en: 'TRAP: Arrange the C–H bond lengths in ethane, ethene and ethyne.',
      q_hi: 'ट्रैप: एथेन, एथीन व एथाइन में C–H आबंध लंबाई का क्रम लिखिए।',
      a_en: 'Ethane > ethene > ethyne. The C–H bond shortens as the s-character of carbon rises (sp³ 25% → sp 50%).',
      a_hi: 'एथेन > एथीन > एथाइन। कार्बन का s-लक्षण बढ़ने (sp³ 25% → sp 50%) पर C–H आबंध छोटा होता है।',
      formula: '$$d_{\\text{C-H}}:\\ sp^3>sp^2>sp$$'
    },
    {
      d: 'H',
      q_en: 'Why does carbon catenate far better than silicon?',
      q_hi: 'कार्बन सिलिकॉन से कहीं अधिक शृंखलन (catenation) क्यों दर्शाता है?',
      a_en: 'C–C (348 kJ/mol) is much stronger than Si–Si (~226). Si chains are readily attacked by O2/H2O, forming strong Si–O bonds (~452).',
      a_hi: 'C–C (348 kJ/mol) Si–Si (~226) से बहुत प्रबल है। Si शृंखलाओं पर O2/H2O आक्रमण कर प्रबल Si–O (~452) बनाते हैं।',
      formula: '$$\\text{C-C}\\ (348)\\gg\\text{Si-Si}\\ (226)$$'
    },
    {
      d: 'H',
      q_en: 'Why is cyclopropane much less stable than cyclohexane although all its carbons are sp³?',
      q_hi: 'सभी कार्बन sp³ होने पर भी साइक्लोप्रोपेन, साइक्लोहेक्सेन से कम स्थायी क्यों है?',
      a_en: 'Ring C–C–C angle is 60° against the ideal 109.5°; angle strain and bent bonds give poor orbital overlap.',
      a_hi: 'वलय में C–C–C कोण 60° है जबकि आदर्श 109.5°; कोणीय तनाव (angle strain) व वक्रित आबंध अतिव्यापन घटाते हैं।',
      formula: '$$109.5^\\circ-60^\\circ=49.5^\\circ\\ \\text{deviation}$$'
    }
  ],

  /* ---------- SET 2: Classification of Organic Compounds & Functional Groups ---------- */
  2: [
    {
      d: 'E',
      q_en: 'How are organic compounds broadly classified?',
      q_hi: 'कार्बनिक यौगिकों का व्यापक वर्गीकरण कैसे किया जाता है?',
      a_en: 'Acyclic (open chain, aliphatic) and cyclic (closed chain). Cyclic ones are homocyclic (carbocyclic) or heterocyclic.',
      a_hi: 'विवृत शृंखला (acyclic/aliphatic) व संवृत शृंखला (cyclic)। चक्रीय: समचक्रीय (homocyclic) या विषमचक्रीय (heterocyclic)।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What are homocyclic and heterocyclic compounds? Give examples.',
      q_hi: 'समचक्रीय (homocyclic) व विषमचक्रीय (heterocyclic) यौगिक क्या हैं? उदाहरण दीजिए।',
      a_en: 'Homocyclic: ring of carbon atoms only (benzene). Heterocyclic: ring has a heteroatom N, O or S (pyridine, furan, thiophene).',
      a_hi: 'समचक्रीय: वलय में केवल C परमाणु (बेंज़ीन)। विषमचक्रीय: वलय में N, O या S (पिरिडीन, फ्यूरान, थायोफीन)।',
      formula: '$$\\text{C}_5\\text{H}_5\\text{N},\\ \\text{C}_4\\text{H}_4\\text{O},\\ \\text{C}_4\\text{H}_4\\text{S}$$'
    },
    {
      d: 'E',
      q_en: 'Define a functional group and give four examples.',
      q_hi: 'क्रियात्मक समूह (functional group) को परिभाषित कर चार उदाहरण दीजिए।',
      a_en: 'An atom or group of atoms that decides the characteristic chemical properties of a compound: –OH, –CHO, –COOH, –NH2.',
      a_hi: 'परमाणु या परमाणुओं का समूह जो यौगिक के अभिलाक्षणिक रासायनिक गुण निर्धारित करता है: –OH, –CHO, –COOH, –NH2।',
      formula: '$$-\\text{OH},\\ -\\text{CHO},\\ -\\text{COOH},\\ -\\text{NH}_2$$'
    },
    {
      d: 'E',
      q_en: 'What is a homologous series? Give an example.',
      q_hi: 'सजातीय श्रेणी (homologous series) क्या है? उदाहरण दीजिए।',
      a_en: 'A series with the same functional group and general formula, in which successive members differ by a –CH2– unit.',
      a_hi: 'वह श्रेणी जिसमें क्रियात्मक समूह व सामान्य सूत्र समान हों तथा क्रमागत सदस्यों में –CH2– का अंतर हो।',
      formula: '$$\\text{CH}_4,\\ \\text{C}_2\\text{H}_6,\\ \\text{C}_3\\text{H}_8\\ \\ (\\text{C}_n\\text{H}_{2n+2})$$'
    },
    {
      d: 'E',
      q_en: 'Differentiate benzenoid and non-benzenoid aromatic compounds with an example each.',
      q_hi: 'बेन्ज़ेनॉइड व अबेन्ज़ेनॉइड ऐरोमैटिक यौगिकों में अंतर उदाहरण सहित बताइए।',
      a_en: 'Benzenoid contain a benzene ring (benzene, naphthalene). Non-benzenoid are aromatic without a benzene ring (tropolone).',
      a_hi: 'बेन्ज़ेनॉइड में बेंज़ीन वलय होता है (बेंज़ीन, नैफ्थैलीन)। अबेन्ज़ेनॉइड बिना बेंज़ीन वलय के ऐरोमैटिक (ट्रोपोलोन)।',
      formula: '$$\\text{C}_6\\text{H}_6\\ (\\text{benzenoid}),\\ \\text{C}_7\\text{H}_6\\text{O}_2\\ (\\text{tropolone})$$'
    },
    {
      d: 'M',
      q_en: 'Name the functional group in CH3COCH3, CH3CHO, CH3COOH and CH3CN.',
      q_hi: 'CH3COCH3, CH3CHO, CH3COOH व CH3CN में क्रियात्मक समूह बताइए।',
      a_en: 'CH3COCH3: >C=O (ketone); CH3CHO: –CHO (aldehyde); CH3COOH: –COOH (acid); CH3CN: –C≡N (nitrile).',
      a_hi: 'CH3COCH3: >C=O (कीटोन); CH3CHO: –CHO (ऐल्डिहाइड); CH3COOH: –COOH (अम्ल); CH3CN: –C≡N (नाइट्राइल)।',
      formula: '$$>\\text{C=O},\\ -\\text{CHO},\\ -\\text{COOH},\\ -\\text{C}\\equiv\\text{N}$$'
    },
    {
      d: 'M',
      q_en: 'State the characteristics of a homologous series.',
      q_hi: 'सजातीय श्रेणी की विशेषताएँ बताइए।',
      a_en: 'Same functional group and general formula, consecutive members differ by CH2 (14 u), similar chemical properties, graded physical properties.',
      a_hi: 'समान क्रियात्मक समूह व सामान्य सूत्र, क्रमागत सदस्यों में CH2 (14 u) का अंतर, समान रासायनिक गुण, क्रमिक भौतिक गुण।',
      formula: '$$\\Delta M=\\text{CH}_2=14\\ \\text{u}$$'
    },
    {
      d: 'M',
      q_en: 'Classify cyclohexane, benzene, pyridine and furan.',
      q_hi: 'साइक्लोहेक्सेन, बेंज़ीन, पिरिडीन व फ्यूरान को वर्गीकृत कीजिए।',
      a_en: 'Cyclohexane: alicyclic (homocyclic); benzene: aromatic homocyclic; pyridine (N) and furan (O): aromatic heterocyclic.',
      a_hi: 'साइक्लोहेक्सेन: ऐलिसाइक्लिक (समचक्रीय); बेंज़ीन: ऐरोमैटिक समचक्रीय; पिरिडीन (N) व फ्यूरान (O): ऐरोमैटिक विषमचक्रीय।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Write the general formula of alkanes, alkenes, alkynes and cycloalkanes.',
      q_hi: 'ऐल्केन, ऐल्कीन, ऐल्काइन व साइक्लोऐल्केन के सामान्य सूत्र लिखिए।',
      a_en: 'Alkanes CnH2n+2, alkenes CnH2n, alkynes CnH2n−2; cycloalkanes also follow CnH2n.',
      a_hi: 'ऐल्केन CnH2n+2, ऐल्कीन CnH2n, ऐल्काइन CnH2n−2; साइक्लोऐल्केन भी CnH2n का पालन करते हैं।',
      formula: '$$\\text{C}_n\\text{H}_{2n+2},\\ \\text{C}_n\\text{H}_{2n},\\ \\text{C}_n\\text{H}_{2n-2}$$'
    },
    {
      d: 'M',
      q_en: 'Name the functional group and class in R–X, R–OH, R–O–R and R–NH2.',
      q_hi: 'R–X, R–OH, R–O–R व R–NH2 में क्रियात्मक समूह व वर्ग बताइए।',
      a_en: 'R–X: halo (haloalkane); R–OH: hydroxyl (alcohol); R–O–R: ether linkage (ether); R–NH2: amino (primary amine).',
      a_hi: 'R–X: हैलो (हैलोऐल्केन); R–OH: हाइड्रॉक्सिल (ऐल्कोहॉल); R–O–R: ईथर आबंध (ईथर); R–NH2: ऐमीनो (प्राथमिक ऐमीन)।',
      formula: '$$\\text{R-X},\\ \\text{R-OH},\\ \\text{R-O-R},\\ \\text{R-NH}_2$$'
    },
    {
      d: 'H',
      q_en: 'Tropolone has no benzene ring. Why is it still aromatic?',
      q_hi: 'ट्रोपोलोन में बेंज़ीन वलय नहीं है, फिर भी यह ऐरोमैटिक क्यों है?',
      a_en: 'Its planar seven-membered ring is cyclic and conjugated; polarised C=O (C⁺–O⁻) gives a delocalised 6π-electron (Hückel) system.',
      a_hi: 'इसका समतलीय सप्तसदस्यीय वलय चक्रीय व संयुग्मित है; ध्रुवित C=O (C⁺–O⁻) से 6π e⁻ (हकल) का विस्थानीकरण होता है।',
      formula: '$$4n+2=6\\ (n=1)$$'
    },
    {
      d: 'H',
      q_en: 'Why is furan aromatic? Which electrons complete its π sextet?',
      q_hi: 'फ्यूरान ऐरोमैटिक क्यों है? इसका π षट्क किन इलेक्ट्रॉनों से पूर्ण होता है?',
      a_en: 'Two C=C give 4π electrons and one lone pair of O in a p-orbital adds 2, giving a planar cyclic 6π system.',
      a_hi: 'दो C=C से 4π e⁻ तथा O का p-कक्षक में एक एकाकी युग्म 2 e⁻ देता है; कुल समतलीय चक्रीय 6π तंत्र।',
      formula: '$$4+2=6\\pi\\ e^-$$'
    },
    {
      d: 'H',
      q_en: 'In pyridine, why is the nitrogen lone pair not part of the aromatic sextet?',
      q_hi: 'पिरिडीन में नाइट्रोजन का एकाकी युग्म ऐरोमैटिक षट्क का भाग क्यों नहीं है?',
      a_en: 'N is sp² and its lone pair lies in the ring plane. The sextet comes from one p-electron each of 5 C and 1 N.',
      a_hi: 'N sp² है व इसका एकाकी युग्म वलय के तल में है। षट्क 5 C व 1 N के एक-एक p e⁻ से बनता है।',
      formula: '$$\\text{C}_5\\text{H}_5\\text{N}:\\ 6\\pi\\ e^-$$'
    },
    {
      d: 'H',
      q_en: 'Are CH3OH and C2H5OH homologues? Are C2H5OH and CH3OCH3?',
      q_hi: 'क्या CH3OH व C2H5OH सजातीय हैं? क्या C2H5OH व CH3OCH3 सजातीय हैं?',
      a_en: 'CH3OH–C2H5OH: yes (same –OH, differ by CH2). C2H5OH–CH3OCH3: no, they are functional isomers (both C2H6O).',
      a_hi: 'CH3OH–C2H5OH: हाँ (समान –OH, CH2 का अंतर)। C2H5OH–CH3OCH3: नहीं, ये क्रियात्मक समावयवी हैं (दोनों C2H6O)।',
      formula: '$$\\text{C}_2\\text{H}_5\\text{OH}\\ \\text{vs}\\ \\text{CH}_3\\text{OCH}_3$$'
    },
    {
      d: 'H',
      q_en: 'Name the functional groups present in vanillin (4-hydroxy-3-methoxybenzaldehyde).',
      q_hi: 'वैनिलिन (4-hydroxy-3-methoxybenzaldehyde) में उपस्थित क्रियात्मक समूह बताइए।',
      a_en: 'Aldehyde (–CHO), phenolic hydroxyl (–OH) and ether (–OCH3), all on an aromatic ring.',
      a_hi: 'ऐल्डिहाइड (–CHO), फीनॉलिक हाइड्रॉक्सिल (–OH) तथा ईथर (–OCH3), सभी ऐरोमैटिक वलय पर।',
      formula: '$$-\\text{CHO},\\ -\\text{OH},\\ -\\text{OCH}_3$$'
    }
  ],

  /* ---------- SET 3: IUPAC Nomenclature: Alkanes, Alkenes & Alkynes ---------- */
  3: [
    {
      d: 'E',
      q_en: 'Give the word roots for C1–C4 and C5–C10 chains.',
      q_hi: 'C1–C4 तथा C5–C10 शृंखलाओं के मूल शब्द (word root) बताइए।',
      a_en: 'C1–C4: meth, eth, prop, but. C5–C10: pent, hex, hept, oct, non, dec.',
      a_hi: 'C1–C4: मेथ, एथ, प्रोप, ब्यूट। C5–C10: पेन्ट, हेक्स, हेप्ट, ऑक्ट, नॉन, डेक।',
      formula: '$$\\text{C}_1\\text{-C}_{10}:\\ \\text{meth, eth, prop, but, pent, hex, hept, oct, non, dec}$$'
    },
    {
      d: 'E',
      q_en: 'State the lowest locant rule of IUPAC nomenclature.',
      q_hi: 'IUPAC नामकरण का निम्नतम स्थिति अंक (lowest locant) नियम बताइए।',
      a_en: 'Number the parent chain so that substituents get the lowest possible set of locants (first point of difference).',
      a_hi: 'मूल शृंखला को इस प्रकार क्रमांकित करें कि प्रतिस्थापियों को निम्नतम स्थिति-अंक समुच्चय मिले (प्रथम अंतर बिंदु)।',
      formula: '$$2\\text{-methylbutane}\\ (\\text{not}\\ 3\\text{-methylbutane})$$'
    },
    {
      d: 'E',
      q_en: 'Give the IUPAC name of (CH3)3C–CH2–CH(CH3)2.',
      q_hi: '(CH3)3C–CH2–CH(CH3)2 का IUPAC नाम लिखिए।',
      a_en: '2,2,4-Trimethylpentane (isooctane): five-carbon parent chain with three methyl groups at C2, C2 and C4.',
      a_hi: '2,2,4-ट्राइमेथिलपेन्टेन (आइसोऑक्टेन): पाँच कार्बन की मूल शृंखला, C2, C2 व C4 पर तीन मेथिल।',
      formula: '$$\\text{(CH}_3)_3\\text{C-CH}_2\\text{-CH(CH}_3)_2$$'
    },
    {
      d: 'E',
      q_en: 'In what order are different substituents written in a name?',
      q_hi: 'नाम में भिन्न-भिन्न प्रतिस्थापियों को किस क्रम में लिखा जाता है?',
      a_en: 'Alphabetical order of prefixes (ethyl before methyl); di, tri, tetra are ignored when alphabetising simple groups.',
      a_hi: 'प्रतिस्थापियों का वर्णानुक्रम (एथिल, मेथिल से पहले); साधारण समूहों में di, tri, tetra की गणना नहीं होती।',
      formula: '$$3\\text{-ethyl-2-methylpentane}$$'
    },
    {
      d: 'E',
      q_en: 'Give IUPAC names of CH2=CH–CH2–CH3 and CH3–C≡C–CH3.',
      q_hi: 'CH2=CH–CH2–CH3 तथा CH3–C≡C–CH3 के IUPAC नाम लिखिए।',
      a_en: 'But-1-ene (suffix ene, double bond at C1) and but-2-yne (suffix yne, triple bond at C2).',
      a_hi: 'ब्यूट-1-ईन (प्रत्यय ene, C1 पर द्विबंध) तथा ब्यूट-2-आइन (प्रत्यय yne, C2 पर त्रिबंध)।',
      formula: '$$\\text{CH}_2=\\text{CH-CH}_2\\text{-CH}_3,\\ \\text{CH}_3\\text{-C}\\equiv\\text{C-CH}_3$$'
    },
    {
      d: 'M',
      q_en: 'Name (CH3)2C=CH–CH3.',
      q_hi: '(CH3)2C=CH–CH3 का IUPAC नाम बताइए।',
      a_en: '2-Methylbut-2-ene: four-carbon chain, double bond at C2, methyl at C2.',
      a_hi: '2-मेथिलब्यूट-2-ईन: चार कार्बन की शृंखला, C2 पर द्विबंध, C2 पर मेथिल।',
      formula: '$$(\\text{CH}_3)_2\\text{C}=\\text{CH-CH}_3$$'
    },
    {
      d: 'M',
      q_en: 'Name CH3–CH(CH3)–CH(CH3)–CH2–CH3 with correct locants.',
      q_hi: 'सही स्थिति-अंकों सहित CH3–CH(CH3)–CH(CH3)–CH2–CH3 का नाम लिखिए।',
      a_en: '2,3-Dimethylpentane. Numbering from the left gives locants {2,3}, which is lower than {3,4} from the right.',
      a_hi: '2,3-डाइमेथिलपेन्टेन। बाएँ से क्रमांकन पर {2,3} मिलता है, जो दाएँ से {3,4} से निम्नतर है।',
      formula: '$$\\{2,3\\}<\\{3,4\\}$$'
    },
    {
      d: 'M',
      q_en: 'Name CH2=CH–CH=CH2 and CH2=C=CH2.',
      q_hi: 'CH2=CH–CH=CH2 तथा CH2=C=CH2 के IUPAC नाम बताइए।',
      a_en: 'Buta-1,3-diene and propa-1,2-diene (allene); an extra \'a\' is added before \'diene\'.',
      a_hi: 'ब्यूटा-1,3-डाइईन तथा प्रोपा-1,2-डाइईन (ऐलीन); \'diene\' से पहले अतिरिक्त \'a\' जुड़ता है।',
      formula: '$$\\text{CH}_2=\\text{CH-CH}=\\text{CH}_2$$'
    },
    {
      d: 'M',
      q_en: 'Name CH3–CH=CH–CH(CH3)–CH3. Which gets the lower locant: double bond or methyl?',
      q_hi: 'CH3–CH=CH–CH(CH3)–CH3 का नाम लिखिए। द्विबंध व मेथिल में निम्नतर अंक किसे मिलता है?',
      a_en: '4-Methylpent-2-ene. The double bond gets the lowest locant first (2 not 3), even though methyl would get 2 from the other end.',
      a_hi: '4-मेथिलपेन्ट-2-ईन। द्विबंध को पहले निम्नतम अंक (2, न कि 3) मिलता है, चाहे दूसरे सिरे से मेथिल को 2 मिले।',
      formula: '$$\\text{CH}_3\\text{-CH}=\\text{CH-CH(CH}_3)\\text{-CH}_3$$'
    },
    {
      d: 'M',
      q_en: 'Name CH3–C≡C–CH(CH3)–CH3.',
      q_hi: 'CH3–C≡C–CH(CH3)–CH3 का IUPAC नाम बताइए।',
      a_en: '4-Methylpent-2-yne: the triple bond must get locant 2 (not 3) while the methyl takes the remaining locant 4.',
      a_hi: '4-मेथिलपेन्ट-2-आइन: त्रिबंध को अंक 2 (न कि 3) मिलता है, तब मेथिल को शेष अंक 4 मिलता है।',
      formula: '$$\\text{CH}_3\\text{-C}\\equiv\\text{C-CH(CH}_3)\\text{-CH}_3$$'
    },
    {
      d: 'H',
      q_en: 'Name CH2=CH–CH2–C≡CH. In a tie, which bond gets the lower locant?',
      q_hi: 'CH2=CH–CH2–C≡CH का नाम लिखिए। समान अंक की स्थिति में निम्नतर अंक किसे मिलता है?',
      a_en: 'Pent-1-en-4-yne. Both directions give {1,4}; the tie is broken in favour of the double bond (ene gets 1).',
      a_hi: 'पेन्ट-1-ईन-4-आइन। दोनों दिशाओं से {1,4} मिलता है; टाई में द्विबंध (ene) को निम्नतर अंक 1 मिलता है।',
      formula: '$$\\text{CH}_2=\\text{CH-CH}_2\\text{-C}\\equiv\\text{CH}$$'
    },
    {
      d: 'H',
      q_en: 'Name CH3–CH=CH–C≡CH.',
      q_hi: 'CH3–CH=CH–C≡CH का IUPAC नाम बताइए।',
      a_en: 'Pent-3-en-1-yne. Locants of all multiple bonds together are compared first: {1,3} from the alkyne end beats {2,4}.',
      a_hi: 'पेन्ट-3-ईन-1-आइन। पहले सभी बहुबंधों के अंक साथ तुलना होते हैं: ऐल्काइन सिरे से {1,3}, {2,4} से निम्नतर है।',
      formula: '$$\\{1,3\\}<\\{2,4\\}$$'
    },
    {
      d: 'H',
      q_en: 'Name CH3–CH(CH3)–CH(CH2CH3)–CH2–CH2–CH3. Which chain is chosen?',
      q_hi: 'CH3–CH(CH3)–CH(CH2CH3)–CH2–CH2–CH3 का नाम लिखिए। कौन-सी शृंखला चुनी जाएगी?',
      a_en: '3-Ethyl-2-methylhexane. Two 6-carbon chains exist; the one carrying more substituents (two) is chosen as parent.',
      a_hi: '3-एथिल-2-मेथिलहेक्सेन। दो 6-कार्बन शृंखलाएँ संभव हैं; अधिक प्रतिस्थापी (दो) वाली मूल शृंखला चुनी जाती है।',
      formula: '$$3\\text{-ethyl-2-methylhexane}$$'
    },
    {
      d: 'H',
      q_en: 'Name (CH3)2CH–CH2–CH=CH2. Why is \'2-methylpent-4-ene\' wrong?',
      q_hi: '(CH3)2CH–CH2–CH=CH2 का नाम लिखिए। \'2-methylpent-4-ene\' गलत क्यों है?',
      a_en: 'Correct: 4-methylpent-1-ene. The double bond must receive the lowest locant (1), not the substituent (2).',
      a_hi: 'सही नाम: 4-मेथिलपेन्ट-1-ईन। द्विबंध को निम्नतम अंक (1) मिलता है, प्रतिस्थापी को (2) नहीं।',
      formula: '$$\\text{pent-1-ene}\\ \\Rightarrow\\ \\text{C}1=\\text{C}2$$'
    },
    {
      d: 'H',
      q_en: 'Name (CH3)3C–CH(CH3)–CH(CH3)–CH2–CH3.',
      q_hi: '(CH3)3C–CH(CH3)–CH(CH3)–CH2–CH3 का IUPAC नाम बताइए।',
      a_en: '2,2,3,4-Tetramethylhexane. Numbering from the tert-butyl end gives {2,2,3,4}, lower than {3,4,5,5} from the other end.',
      a_hi: '2,2,3,4-टेट्रामेथिलहेक्सेन। tert-ब्यूटिल सिरे से {2,2,3,4} मिलता है, जो दूसरे सिरे के {3,4,5,5} से निम्नतर है।',
      formula: '$$\\{2,2,3,4\\}<\\{3,4,5,5\\}$$'
    }
  ],

  /* ---------- SET 4: IUPAC Nomenclature: Functional Groups, Polyfunctional & Cyclic Compounds ---------- */
  4: [
    {
      d: 'E',
      q_en: 'State the priority order of functional groups for the principal suffix.',
      q_hi: 'मुख्य प्रत्यय (principal suffix) के लिए क्रियात्मक समूहों का वरीयता क्रम बताइए।',
      a_en: '–COOH > –SO3H > –COOR > –COCl > –CONH2 > –CN > –CHO > >C=O > –OH > –NH2 > C=C > C≡C.',
      a_hi: '–COOH > –SO3H > –COOR > –COCl > –CONH2 > –CN > –CHO > >C=O > –OH > –NH2 > C=C > C≡C।',
      formula: '$$-\\text{COOH}\\gt-\\text{SO}_3\\text{H}\\gt-\\text{COOR}\\gt-\\text{COCl}\\gt-\\text{CONH}_2\\gt-\\text{CN}\\gt-\\text{CHO}\\gt{>}\\text{C=O}\\gt-\\text{OH}\\gt-\\text{NH}_2\\gt\\text{C=C}\\gt\\text{C}\\equiv\\text{C}$$'
    },
    {
      d: 'E',
      q_en: 'Give the IUPAC suffixes for –COOH, –CHO, >C=O, –OH, –NH2, –CN and –CONH2.',
      q_hi: '–COOH, –CHO, >C=O, –OH, –NH2, –CN व –CONH2 के IUPAC प्रत्यय लिखिए।',
      a_en: '–COOH: oic acid; –CHO: al; >C=O: one; –OH: ol; –NH2: amine; –CN: nitrile; –CONH2: amide.',
      a_hi: '–COOH: oic acid; –CHO: al; >C=O: one; –OH: ol; –NH2: amine; –CN: nitrile; –CONH2: amide।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Which prefixes are used when –OH, –NH2, >C=O and –CHO are not the principal group?',
      q_hi: '–OH, –NH2, >C=O व –CHO मुख्य समूह न होने पर कौन-से पूर्वलग्न (prefix) लगते हैं?',
      a_en: '–OH: hydroxy; –NH2: amino; >C=O: oxo; –CHO: formyl (or oxo).',
      a_hi: '–OH: hydroxy; –NH2: amino; >C=O: oxo; –CHO: formyl (या oxo)।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Name CH3–CH(OH)–CH3, CH3COCH3 and CH3CH2CHO.',
      q_hi: 'CH3–CH(OH)–CH3, CH3COCH3 व CH3CH2CHO के IUPAC नाम लिखिए।',
      a_en: 'Propan-2-ol, propanone and propanal (suffixes ol, one, al; final \'e\' of alkane dropped before a vowel).',
      a_hi: 'Propan-2-ol, propanone व propanal (प्रत्यय ol, one, al; स्वर से पहले ऐल्केन का अंतिम \'e\' हट जाता है)।',
      formula: '$$\\text{CH}_3\\text{CH(OH)CH}_3,\\ \\text{CH}_3\\text{COCH}_3,\\ \\text{CH}_3\\text{CH}_2\\text{CHO}$$'
    },
    {
      d: 'E',
      q_en: 'Give the IUPAC names of toluene, phenol and aniline.',
      q_hi: 'टॉलूईन, फीनॉल व ऐनिलीन के IUPAC नाम लिखिए।',
      a_en: 'Toluene: methylbenzene; phenol: hydroxybenzene (retained name phenol); aniline: benzenamine.',
      a_hi: 'टॉलूईन: methylbenzene; फीनॉल: hydroxybenzene (phenol नाम मान्य); ऐनिलीन: benzenamine।',
      formula: '$$\\text{C}_6\\text{H}_5\\text{CH}_3,\\ \\text{C}_6\\text{H}_5\\text{OH},\\ \\text{C}_6\\text{H}_5\\text{NH}_2$$'
    },
    {
      d: 'M',
      q_en: 'Name CH3–CO–CH2–COOH.',
      q_hi: 'CH3–CO–CH2–COOH का IUPAC नाम बताइए।',
      a_en: '3-Oxobutanoic acid. –COOH is the principal group (C1); the ketone becomes the prefix \'oxo\' at C3.',
      a_hi: '3-Oxobutanoic acid। –COOH मुख्य समूह (C1) है; कीटोन C3 पर पूर्वलग्न \'oxo\' बन जाता है।',
      formula: '$$\\text{CH}_3\\text{-CO-CH}_2\\text{-COOH}$$'
    },
    {
      d: 'M',
      q_en: 'Name CH3–CH(OH)–CH2–CHO.',
      q_hi: 'CH3–CH(OH)–CH2–CHO का IUPAC नाम बताइए।',
      a_en: '3-Hydroxybutanal. The aldehyde outranks the alcohol, so –CHO is C1 and –OH is the prefix \'hydroxy\'.',
      a_hi: '3-Hydroxybutanal। ऐल्डिहाइड, ऐल्कोहॉल से ऊपर है, अतः –CHO = C1 तथा –OH पूर्वलग्न \'hydroxy\' है।',
      formula: '$$\\text{CH}_3\\text{CH(OH)CH}_2\\text{CHO}$$'
    },
    {
      d: 'M',
      q_en: 'Name benzaldehyde, benzoic acid, anisole and acetophenone systematically.',
      q_hi: 'बेंज़ैल्डिहाइड, बेंज़ोइक अम्ल, ऐनिसोल व ऐसीटोफीनोन के क्रमबद्ध नाम बताइए।',
      a_en: 'Benzenecarbaldehyde, benzenecarboxylic acid, methoxybenzene and 1-phenylethanone.',
      a_hi: 'Benzenecarbaldehyde, benzenecarboxylic acid, methoxybenzene तथा 1-phenylethanone।',
      formula: '$$\\text{C}_6\\text{H}_5\\text{CHO},\\ \\text{C}_6\\text{H}_5\\text{COOH},\\ \\text{C}_6\\text{H}_5\\text{OCH}_3,\\ \\text{C}_6\\text{H}_5\\text{COCH}_3$$'
    },
    {
      d: 'M',
      q_en: 'Name CH2=CH–CH(OH)–CH3. Which gets the lowest locant: –OH or C=C?',
      q_hi: 'CH2=CH–CH(OH)–CH3 का नाम लिखिए। –OH व C=C में निम्नतम अंक किसे मिलेगा?',
      a_en: 'But-3-en-2-ol. The principal group –OH takes the lowest locant (2); the double bond gets 3.',
      a_hi: 'But-3-en-2-ol। मुख्य समूह –OH को निम्नतम अंक (2) मिलता है; द्विबंध को 3।',
      formula: '$$\\text{CH}_2=\\text{CH-CH(OH)-CH}_3$$'
    },
    {
      d: 'M',
      q_en: 'Name the ring having adjacent ethyl and methyl substituents on cyclohexane.',
      q_hi: 'साइक्लोहेक्सेन पर आसन्न एथिल व मेथिल प्रतिस्थापी वाले यौगिक का नाम बताइए।',
      a_en: '1-Ethyl-2-methylcyclohexane. Locants {1,2} tie either way, so alphabetically first ethyl gets C1.',
      a_hi: '1-Ethyl-2-methylcyclohexane। दोनों दिशाओं में {1,2} मिलता है, अतः वर्णानुक्रम में पहले एथिल को C1।',
      formula: '$$\\text{C}_6\\text{H}_{10}(\\text{C}_2\\text{H}_5)(\\text{CH}_3)$$'
    },
    {
      d: 'H',
      q_en: 'Name HOOC–CH2–CH(OH)–CH2–CHO.',
      q_hi: 'HOOC–CH2–CH(OH)–CH2–CHO का IUPAC नाम बताइए।',
      a_en: '3-Hydroxy-5-oxopentanoic acid: –COOH is C1; –OH and the aldehyde (as oxo) are prefixes, listed alphabetically.',
      a_hi: '3-Hydroxy-5-oxopentanoic acid: –COOH = C1; –OH व ऐल्डिहाइड (oxo रूप में) पूर्वलग्न हैं, वर्णानुक्रम में।',
      formula: '$$\\text{HOOC-CH}_2\\text{-CH(OH)-CH}_2\\text{-CHO}$$'
    },
    {
      d: 'H',
      q_en: 'Name CH3–CO–CH2–CH(OH)–CH3.',
      q_hi: 'CH3–CO–CH2–CH(OH)–CH3 का IUPAC नाम बताइए।',
      a_en: '4-Hydroxypentan-2-one. The ketone outranks the alcohol, so >C=O gets locant 2 and –OH is the prefix at 4.',
      a_hi: '4-Hydroxypentan-2-one। कीटोन, ऐल्कोहॉल से ऊपर है, अतः >C=O को अंक 2 व –OH पूर्वलग्न (4) बनता है।',
      formula: '$$\\text{CH}_3\\text{COCH}_2\\text{CH(OH)CH}_3$$'
    },
    {
      d: 'H',
      q_en: 'Name NC–CH2–COOH. Is the cyano carbon counted in the parent chain?',
      q_hi: 'NC–CH2–COOH का नाम लिखिए। क्या सायनो का कार्बन मूल शृंखला में गिना जाता है?',
      a_en: '2-Cyanoethanoic acid. As prefix \'cyano\' its C is not counted; as suffix \'nitrile\' (CH3CH2CN, propanenitrile) it is.',
      a_hi: '2-Cyanoethanoic acid। पूर्वलग्न \'cyano\' का C नहीं गिना जाता; प्रत्यय \'nitrile\' (CH3CH2CN, propanenitrile) में गिना जाता है।',
      formula: '$$\\text{NC-CH}_2\\text{-COOH}$$'
    },
    {
      d: 'H',
      q_en: 'Name OHC–C6H4–COOH (para). Why is the aldehyde called \'formyl\'?',
      q_hi: 'OHC–C6H4–COOH (पैरा) का नाम लिखिए। ऐल्डिहाइड को \'formyl\' क्यों कहा गया?',
      a_en: '4-Formylbenzoic acid. –COOH is senior, so benzoic acid is the parent and –CHO becomes the prefix formyl.',
      a_hi: '4-Formylbenzoic acid। –COOH वरिष्ठ है, अतः बेंज़ोइक अम्ल मूल है और –CHO पूर्वलग्न formyl बनता है।',
      formula: '$$p\\text{-OHC-C}_6\\text{H}_4\\text{-COOH}$$'
    },
    {
      d: 'H',
      q_en: 'Name the cyclohexene having a methyl on the sp³ carbon next to C=C. Why not 6-methyl?',
      q_hi: 'C=C के निकट sp³ कार्बन पर मेथिल वाली साइक्लोहेक्सीन का नाम लिखिए। 6-मेथिल क्यों नहीं?',
      a_en: '3-Methylcyclohexene. Double-bond carbons are C1 and C2; the methyl then takes the lowest remaining locant, 3.',
      a_hi: '3-Methylcyclohexene। द्विबंध के कार्बन C1 व C2 होते हैं; तब मेथिल को शेष निम्नतम अंक 3 मिलता है।',
      formula: '$$\\{1,2\\ (\\text{C=C}),\\,3\\ (\\text{CH}_3)\\}<\\{1,2,6\\}$$'
    }
  ],

  /* ---------- SET 5: Structural Isomerism: Chain, Position, Functional, Metamerism & Tautomerism ---------- */
  5: [
    {
      d: 'E',
      q_en: 'What are structural isomers? Name their types.',
      q_hi: 'संरचनात्मक समावयवी (structural isomers) क्या हैं? इनके प्रकार बताइए।',
      a_en: 'Compounds with the same molecular formula but different connectivity: chain, position, functional, metamerism and tautomerism.',
      a_hi: 'समान आण्विक सूत्र पर भिन्न संयोजन वाले यौगिक: शृंखला, स्थिति, क्रियात्मक, मध्यावयवता व चलावयवता।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Write the chain isomers of C5H12.',
      q_hi: 'C5H12 के शृंखला समावयवी (chain isomers) लिखिए।',
      a_en: 'n-Pentane, isopentane (2-methylbutane) and neopentane (2,2-dimethylpropane); they differ in carbon skeleton.',
      a_hi: 'n-पेन्टेन, आइसोपेन्टेन (2-methylbutane) व निओपेन्टेन (2,2-dimethylpropane); कार्बन ढाँचा भिन्न है।',
      formula: '$$\\text{CH}_3(\\text{CH}_2)_3\\text{CH}_3,\\ (\\text{CH}_3)_2\\text{CHCH}_2\\text{CH}_3,\\ (\\text{CH}_3)_4\\text{C}$$'
    },
    {
      d: 'E',
      q_en: 'Define position isomerism with an example.',
      q_hi: 'स्थिति समावयवता (position isomerism) को उदाहरण सहित परिभाषित कीजिए।',
      a_en: 'Same skeleton and functional group, but the group or multiple bond sits at different positions: pent-1-ene and pent-2-ene.',
      a_hi: 'कंकाल व क्रियात्मक समूह समान, पर समूह या बहुबंध की स्थिति भिन्न: pent-1-ene व pent-2-ene।',
      formula: '$$\\text{CH}_2=\\text{CHCH}_2\\text{CH}_2\\text{CH}_3,\\ \\text{CH}_3\\text{CH}=\\text{CHCH}_2\\text{CH}_3$$'
    },
    {
      d: 'E',
      q_en: 'Give functional isomers of C2H6O and C3H6O.',
      q_hi: 'C2H6O व C3H6O के क्रियात्मक समावयवी (functional isomers) लिखिए।',
      a_en: 'C2H6O: ethanol and dimethyl ether. C3H6O: propanal and propanone.',
      a_hi: 'C2H6O: एथेनॉल व डाइमेथिल ईथर। C3H6O: प्रोपेनल व प्रोपेनोन।',
      formula: '$$\\text{C}_2\\text{H}_5\\text{OH}\\ \\text{vs}\\ \\text{CH}_3\\text{OCH}_3$$'
    },
    {
      d: 'E',
      q_en: 'Define metamerism with an example.',
      q_hi: 'मध्यावयवता (metamerism) को उदाहरण सहित परिभाषित कीजिए।',
      a_en: 'Isomerism due to different alkyl groups on a divalent atom (O, S, NH): C2H5OC2H5 and CH3OC3H7.',
      a_hi: 'द्विसंयोजी परमाणु (O, S, NH) पर भिन्न ऐल्किल समूहों से उत्पन्न समावयवता: C2H5OC2H5 व CH3OC3H7।',
      formula: '$$\\text{C}_2\\text{H}_5\\text{OC}_2\\text{H}_5,\\ \\text{CH}_3\\text{OC}_3\\text{H}_7$$'
    },
    {
      d: 'M',
      q_en: 'What is tautomerism? Give the keto–enol pair of acetone.',
      q_hi: 'चलावयवता (tautomerism) क्या है? ऐसीटोन का कीटो-ईनॉल युग्म लिखिए।',
      a_en: 'A rapid dynamic equilibrium between isomers differing in the position of an H and a double bond; the keto form dominates.',
      a_hi: 'H परमाणु व द्विबंध की स्थिति में भिन्न समावयवियों के बीच तीव्र गतिक साम्य; कीटो रूप प्रमुख होता है।',
      formula: '$$\\text{CH}_3\\text{COCH}_3\\rightleftharpoons\\text{CH}_3\\text{C(OH)}=\\text{CH}_2$$'
    },
    {
      d: 'M',
      q_en: 'How many structural isomers does C4H10O have? List the classes.',
      q_hi: 'C4H10O के कितने संरचनात्मक समावयवी हैं? वर्ग बताइए।',
      a_en: 'Seven: four alcohols (butan-1-ol, butan-2-ol, 2-methylpropan-1-ol, 2-methylpropan-2-ol) and three ethers.',
      a_hi: 'सात: चार ऐल्कोहॉल (butan-1-ol, butan-2-ol, 2-methylpropan-1-ol, 2-methylpropan-2-ol) व तीन ईथर।',
      formula: '$$4\\ \\text{alcohols}+3\\ \\text{ethers}=7$$'
    },
    {
      d: 'M',
      q_en: 'How many chain isomers does hexane, C6H14, have?',
      q_hi: 'हेक्सेन C6H14 के कितने शृंखला समावयवी होते हैं?',
      a_en: 'Five: n-hexane, 2-methylpentane, 3-methylpentane, 2,2-dimethylbutane and 2,3-dimethylbutane.',
      a_hi: 'पाँच: n-हेक्सेन, 2-methylpentane, 3-methylpentane, 2,2-dimethylbutane व 2,3-dimethylbutane।',
      formula: '$$\\text{C}_6\\text{H}_{14}:\\ 5\\ \\text{isomers}$$'
    },
    {
      d: 'M',
      q_en: 'List the acid and ester functional isomers of C4H8O2.',
      q_hi: 'C4H8O2 के अम्ल व एस्टर क्रियात्मक समावयवी लिखिए।',
      a_en: 'Acids: butanoic acid, 2-methylpropanoic acid. Esters: methyl propanoate, ethyl ethanoate, propyl methanoate, isopropyl methanoate.',
      a_hi: 'अम्ल: butanoic acid, 2-methylpropanoic acid। एस्टर: methyl propanoate, ethyl ethanoate, propyl/isopropyl methanoate।',
      formula: '$$\\text{C}_3\\text{H}_7\\text{COOH}\\ \\text{vs}\\ \\text{CH}_3\\text{COOC}_2\\text{H}_5$$'
    },
    {
      d: 'M',
      q_en: 'Are (C2H5)2NH and CH3NHC3H7 metamers? Why?',
      q_hi: 'क्या (C2H5)2NH व CH3NHC3H7 मध्यावयवी हैं? क्यों?',
      a_en: 'Yes. Both are secondary amines C4H11N with different alkyl groups on the same NH, so they are metamers.',
      a_hi: 'हाँ। दोनों द्वितीयक ऐमीन C4H11N हैं और एक ही NH पर भिन्न ऐल्किल समूह हैं, अतः मध्यावयवी हैं।',
      formula: '$$\\text{C}_2\\text{H}_5\\text{NHC}_2\\text{H}_5,\\ \\text{CH}_3\\text{NHC}_3\\text{H}_7$$'
    },
    {
      d: 'H',
      q_en: 'Ethyl acetoacetate exists as a keto–enol mixture. What is the enol content and why is it notable?',
      q_hi: 'ऐथिल ऐसीटोऐसीटेट कीटो-ईनॉल मिश्रण में रहता है। ईनॉल अंश कितना है और यह क्यों उल्लेखनीय है?',
      a_en: 'About 92% keto and 8% enol. The enol is stabilised by intramolecular H-bonding and conjugation of C=C with C=O.',
      a_hi: 'लगभग 92% कीटो व 8% ईनॉल। अंतःआण्विक H-आबंध व C=C के C=O से संयुग्मन से ईनॉल स्थायी होता है।',
      formula: '$$\\text{CH}_3\\text{COCH}_2\\text{COOC}_2\\text{H}_5\\rightleftharpoons\\text{CH}_3\\text{C(OH)}=\\text{CHCOOC}_2\\text{H}_5$$'
    },
    {
      d: 'H',
      q_en: 'Why is acetone almost entirely keto, but pentane-2,4-dione has a large enol content?',
      q_hi: 'ऐसीटोन लगभग पूर्णतः कीटो है, पर पेन्टेन-2,4-डाइऑन में ईनॉल अंश अधिक क्यों है?',
      a_en: 'Acetone\'s enol has no extra stabilisation. In pentane-2,4-dione the enol gains a chelating intramolecular H-bond and conjugation.',
      a_hi: 'ऐसीटोन के ईनॉल को अतिरिक्त स्थायित्व नहीं मिलता। पेन्टेन-2,4-डाइऑन के ईनॉल को केलेटी H-आबंध व संयुग्मन मिलता है।',
      formula: '$$\\text{CH}_3\\text{COCH}_2\\text{COCH}_3\\rightleftharpoons\\text{CH}_3\\text{C(OH)}=\\text{CHCOCH}_3$$'
    },
    {
      d: 'H',
      q_en: 'Which show keto–enol tautomerism: benzaldehyde, acetone, acetaldehyde, 2,2-dimethylpropanal?',
      q_hi: 'बेंज़ैल्डिहाइड, ऐसीटोन, ऐसीटैल्डिहाइड व 2,2-डाइमेथिलप्रोपेनल में कौन कीटो-ईनॉल चलावयवता दर्शाते हैं?',
      a_en: 'Acetone and acetaldehyde. Benzaldehyde and 2,2-dimethylpropanal have no α-hydrogen, so they cannot enolise.',
      a_hi: 'ऐसीटोन व ऐसीटैल्डिहाइड। बेंज़ैल्डिहाइड व 2,2-डाइमेथिलप्रोपेनल में α-H नहीं है, अतः ईनॉलीकरण असंभव।',
      formula: '$$\\text{needs}\\ \\alpha\\text{-H}$$'
    },
    {
      d: 'H',
      q_en: 'How many structural isomers has C3H9N? Classify them.',
      q_hi: 'C3H9N के कितने संरचनात्मक समावयवी हैं? उन्हें वर्गीकृत कीजिए।',
      a_en: 'Four: two primary (propan-1-amine, propan-2-amine), one secondary (N-methylethanamine), one tertiary (trimethylamine).',
      a_hi: 'चार: दो प्राथमिक (propan-1-amine, propan-2-amine), एक द्वितीयक (N-methylethanamine), एक तृतीयक (trimethylamine)।',
      formula: '$$2\\ (1^\\circ)+1\\ (2^\\circ)+1\\ (3^\\circ)=4$$'
    },
    {
      d: 'H',
      q_en: 'How many structural isomers has C4H8? Which isomerism links alkenes to rings?',
      q_hi: 'C4H8 के कितने संरचनात्मक समावयवी हैं? ऐल्कीन को वलय से कौन-सी समावयवता जोड़ती है?',
      a_en: 'Five: but-1-ene, but-2-ene, 2-methylpropene, cyclobutane, methylcyclopropane. Alkene–ring pairs show ring-chain isomerism.',
      a_hi: 'पाँच: but-1-ene, but-2-ene, 2-methylpropene, cyclobutane, methylcyclopropane। ऐल्कीन-वलय युग्म वलय-शृंखला समावयवता दर्शाते हैं।',
      formula: '$$\\text{C}_n\\text{H}_{2n}:\\ \\text{alkene}\\ \\leftrightarrow\\ \\text{cycloalkane}$$'
    }
  ],

  /* ---------- SET 6: Stereoisomerism: Geometric (Cis-Trans) Isomerism ---------- */
  6: [
    {
      d: 'E',
      q_en: 'What is geometrical (cis-trans) isomerism?',
      q_hi: 'ज्यामितीय (cis-trans) समावयवता क्या है?',
      a_en: 'Stereoisomerism with the same connectivity but different spatial arrangement, caused by restricted rotation about C=C or a ring.',
      a_hi: 'समान संयोजन पर भिन्न दिक्स्थान विन्यास वाली त्रिविम समावयवता, जो C=C या वलय पर घूर्णन-बाधा से होती है।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'State the structural condition for geometrical isomerism in alkenes.',
      q_hi: 'ऐल्कीन में ज्यामितीय समावयवता की संरचनात्मक शर्त बताइए।',
      a_en: 'Each doubly bonded carbon must carry two different groups, as in Cab=Cab, Cab=Cac or Cab=Cde.',
      a_hi: 'द्विबंधित प्रत्येक कार्बन पर दो भिन्न समूह होने चाहिए, जैसे Cab=Cab, Cab=Cac या Cab=Cde।',
      formula: '$$\\text{C}ab=\\text{C}ac,\\ \\ \\text{C}ab=\\text{C}de$$'
    },
    {
      d: 'E',
      q_en: 'Draw cis- and trans-but-2-ene. What distinguishes them?',
      q_hi: 'cis- व trans-but-2-ene बनाइए। इनमें क्या अंतर है?',
      a_en: 'cis: both CH3 groups on the same side of C=C; trans: on opposite sides.',
      a_hi: 'cis: दोनों CH3 समूह C=C के एक ही ओर; trans: विपरीत ओर।',
      formula: '$$\\text{CH}_3\\text{CH}=\\text{CHCH}_3$$'
    },
    {
      d: 'E',
      q_en: 'Why does CH2=CHCl not show geometrical isomerism?',
      q_hi: 'CH2=CHCl ज्यामितीय समावयवता क्यों नहीं दर्शाता?',
      a_en: 'One doubly bonded carbon (CH2) holds two identical H atoms, so swapping positions gives the same molecule.',
      a_hi: 'एक द्विबंधित कार्बन (CH2) पर दो समान H हैं, अतः स्थान बदलने पर वही अणु मिलता है।',
      formula: '$$\\text{CH}_2=\\text{CHCl}$$'
    },
    {
      d: 'E',
      q_en: 'State the CIP rule and define the Z and E labels.',
      q_hi: 'CIP नियम बताइए तथा Z व E को परिभाषित कीजिए।',
      a_en: 'Higher atomic number means higher priority. Higher-priority groups on the same side: Z (zusammen); opposite sides: E (entgegen).',
      a_hi: 'उच्च परमाणु क्रमांक = उच्च वरीयता। उच्च वरीयता समूह एक ओर: Z (zusammen); विपरीत ओर: E (entgegen)।',
      formula: '$$\\text{Z}=\\text{same side},\\ \\ \\text{E}=\\text{opposite side}$$'
    },
    {
      d: 'M',
      q_en: 'Assign E/Z to CH3CH=CHCl in which Cl and CH3 lie on the same side.',
      q_hi: 'CH3CH=CHCl में Cl व CH3 एक ही ओर हों तो E/Z निर्धारित कीजिए।',
      a_en: 'Z. Priorities: Cl > H on one carbon, CH3 > H on the other; both higher-priority groups are on the same side.',
      a_hi: 'Z। वरीयता: एक कार्बन पर Cl > H, दूसरे पर CH3 > H; दोनों उच्च वरीयता समूह एक ही ओर हैं।',
      formula: '$$(Z)\\text{-1-chloroprop-1-ene}$$'
    },
    {
      d: 'M',
      q_en: 'Why do CH2=CCl2 and (CH3)2C=CH2 show no geometrical isomerism?',
      q_hi: 'CH2=CCl2 व (CH3)2C=CH2 ज्यामितीय समावयवता क्यों नहीं दर्शाते?',
      a_en: 'In each, one doubly bonded carbon carries two identical groups (H, H or Cl, Cl or CH3, CH3), so no distinct arrangement exists.',
      a_hi: 'प्रत्येक में एक द्विबंधित कार्बन पर दो समान समूह (H, H या Cl, Cl या CH3, CH3) हैं, अतः भिन्न विन्यास संभव नहीं।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Compare dipole moment, boiling point and melting point of cis- and trans-but-2-ene.',
      q_hi: 'cis- व trans-but-2-ene के द्विध्रुव आघूर्ण, क्वथनांक व गलनांक की तुलना कीजिए।',
      a_en: 'cis is slightly polar with higher b.p. (277 K vs 274 K). trans is non-polar and packs better, so its m.p. is higher.',
      a_hi: 'cis अल्प ध्रुवीय है, क्वथनांक अधिक (277 K बनाम 274 K)। trans अध्रुवीय व सघन संकुलित है, गलनांक अधिक।',
      formula: '$$\\mu_{\\text{trans}}\\approx0<\\mu_{\\text{cis}}$$'
    },
    {
      d: 'M',
      q_en: 'How many geometrical isomers does CH3CH=CH–CH=CHCH3 have?',
      q_hi: 'CH3CH=CH–CH=CHCH3 के कितने ज्यामितीय समावयवी होते हैं?',
      a_en: 'Three: (E,E), (Z,Z) and (E,Z). The molecule is symmetrical, so (E,Z) and (Z,E) are the same compound.',
      a_hi: 'तीन: (E,E), (Z,Z) व (E,Z)। अणु सममित है, अतः (E,Z) व (Z,E) एक ही यौगिक हैं।',
      formula: '$$\\text{hexa-2,4-diene}:\\ 3$$'
    },
    {
      d: 'M',
      q_en: 'Why does 1,2-dimethylcyclopropane show cis-trans isomerism?',
      q_hi: '1,2-डाइमेथिलसाइक्लोप्रोपेन cis-trans समावयवता क्यों दर्शाता है?',
      a_en: 'Ring C–C bonds cannot rotate freely, so the two CH3 groups lie on the same face (cis) or on opposite faces (trans).',
      a_hi: 'वलय के C–C आबंध मुक्त घूर्णन नहीं कर सकते, अतः दोनों CH3 एक ही फलक (cis) या विपरीत फलकों (trans) पर होते हैं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'CH3CH=C(CH3)CH2CH3 has both methyls on the same side. Is it Z or E?',
      q_hi: 'CH3CH=C(CH3)CH2CH3 में दोनों मेथिल एक ही ओर हैं। यह Z है या E?',
      a_en: 'E. On C3, ethyl outranks methyl; ethyl and the C2 methyl are on opposite sides. \'cis\' here is not Z.',
      a_hi: 'E। C3 पर एथिल, मेथिल से ऊपर है; एथिल व C2 का मेथिल विपरीत ओर हैं। यहाँ \'cis\' ही Z नहीं है।',
      formula: '$$\\text{C}_2\\text{H}_5>\\text{CH}_3\\Rightarrow(E)$$'
    },
    {
      d: 'H',
      q_en: 'Why is trans-but-2-ene more stable than cis? Give the heats of hydrogenation.',
      q_hi: 'trans-but-2-ene, cis से अधिक स्थायी क्यों है? हाइड्रोजनीकरण ऊष्माएँ दीजिए।',
      a_en: 'cis has steric repulsion between the two methyls. Heats of hydrogenation: cis −120, trans −115 kJ/mol (trans ~4–5 kJ more stable).',
      a_hi: 'cis में दोनों मेथिल के बीच त्रिविम प्रतिकर्षण है। हाइड्रोजनीकरण ऊष्मा: cis −120, trans −115 kJ/mol (trans ~4–5 kJ स्थायी)।',
      formula: '$$\\Delta H_{\\text{hyd}}:\\ -120\\ (\\text{cis}),\\ -115\\ (\\text{trans})\\ \\text{kJ mol}^{-1}$$'
    },
    {
      d: 'H',
      q_en: 'Maleic vs fumaric acid: which is cis, which has the higher m.p., and which forms an anhydride on heating?',
      q_hi: 'मैलिक बनाम फ्यूमैरिक अम्ल: कौन cis है, किसका गलनांक अधिक है और कौन गर्म करने पर एनहाइड्राइड बनाता है?',
      a_en: 'Maleic is cis (m.p. ~135 °C) and forms the cyclic anhydride; fumaric is trans (m.p. ~287 °C) with COOH groups too far apart.',
      a_hi: 'मैलिक cis है (ग.बि. ~135 °C) व चक्रीय एनहाइड्राइड बनाता है; फ्यूमैरिक trans है (~287 °C), COOH दूर-दूर हैं।',
      formula: '$$\\text{HOOC-CH}=\\text{CH-COOH}$$'
    },
    {
      d: 'H',
      q_en: 'Why is maleic acid stronger than fumaric in the first ionisation but weaker in the second?',
      q_hi: 'मैलिक अम्ल प्रथम आयनन में फ्यूमैरिक से प्रबल पर द्वितीय में दुर्बल क्यों है?',
      a_en: 'The maleate monoanion is stabilised by an intramolecular H-bond: pK1 1.90 vs 3.03, but removing the second H is harder: pK2 6.07 vs 4.44.',
      a_hi: 'मैलेट एकल ऋणायन अंतःआण्विक H-आबंध से स्थायी: pK1 1.90 (फ्यूमैरिक 3.03), पर दूसरा H हटाना कठिन: pK2 6.07 (4.44)।',
      formula: '$$\\text{p}K_1:\\ 1.90<3.03;\\ \\ \\text{p}K_2:\\ 6.07>4.44$$'
    },
    {
      d: 'H',
      q_en: 'How many geometrical isomers does CH3CH=CH–CH=CHCH2CH3 have?',
      q_hi: 'CH3CH=CH–CH=CHCH2CH3 के कितने ज्यामितीय समावयवी होते हैं?',
      a_en: 'Four: (E,E), (E,Z), (Z,E), (Z,Z). The two ends differ (CH3 vs C2H5), so each double bond counts independently: 2ⁿ = 4.',
      a_hi: 'चार: (E,E), (E,Z), (Z,E), (Z,Z)। दोनों सिरे भिन्न (CH3 बनाम C2H5) हैं, अतः प्रत्येक द्विबंध स्वतंत्र: 2ⁿ = 4।',
      formula: '$$2^n=2^2=4$$'
    }
  ],

  /* ---------- SET 7: Stereoisomerism: Optical Isomerism, Chirality & Enantiomers ---------- */
  7: [
    {
      d: 'E',
      q_en: 'What are plane-polarised light and optical activity?',
      q_hi: 'समतल-ध्रुवित प्रकाश (plane-polarised light) व प्रकाशीय सक्रियता क्या हैं?',
      a_en: 'Plane-polarised light vibrates in one plane only. A substance that rotates this plane is optically active (measured by a polarimeter).',
      a_hi: 'समतल-ध्रुवित प्रकाश केवल एक तल में कंपन करता है। जो पदार्थ इस तल को घुमाए वह प्रकाशीय सक्रिय है (ध्रुवणमापी से मापन)।',
      formula: '$$[\\alpha]=\\frac{\\alpha}{l\\times c}$$'
    },
    {
      d: 'E',
      q_en: 'Define dextrorotatory and laevorotatory substances.',
      q_hi: 'दक्षिणध्रुवण-घूर्णक (dextrorotatory) व वामध्रुवण-घूर्णक (laevorotatory) पदार्थ परिभाषित कीजिए।',
      a_en: 'Dextrorotatory, d or (+): rotates the plane clockwise (right). Laevorotatory, l or (−): rotates it anticlockwise (left).',
      a_hi: 'd या (+): तल को दक्षिणावर्त (दाएँ) घुमाता है। l या (−): तल को वामावर्त (बाएँ) घुमाता है।',
      formula: '$$d\\ \\text{or}\\ (+)\\ \\ \\text{vs}\\ \\ l\\ \\text{or}\\ (-)$$'
    },
    {
      d: 'E',
      q_en: 'What is a chiral (asymmetric) carbon? Give an example.',
      q_hi: 'कायरल (असममित) कार्बन क्या है? उदाहरण दीजिए।',
      a_en: 'A carbon bonded to four different atoms or groups, e.g., C2 of lactic acid and C2 of 2-chlorobutane.',
      a_hi: 'चार भिन्न परमाणुओं/समूहों से जुड़ा कार्बन, जैसे लैक्टिक अम्ल का C2 व 2-क्लोरोब्यूटेन का C2।',
      formula: '$$\\text{CH}_3\\text{-C}^{*}\\text{H(OH)-COOH}$$'
    },
    {
      d: 'E',
      q_en: 'Define enantiomers and compare their properties.',
      q_hi: 'प्रतिबिम्ब रूप (enantiomers) को परिभाषित कर उनके गुणों की तुलना कीजिए।',
      a_en: 'Non-superimposable mirror-image stereoisomers. Same m.p., b.p., solubility, but they rotate plane-polarised light equally in opposite directions.',
      a_hi: 'अध्यारोपित न होने वाले दर्पण-प्रतिबिम्ब त्रिविम समावयवी। गलनांक, क्वथनांक, विलेयता समान; ध्रुवण घूर्णन बराबर पर विपरीत।',
      formula: '$$(+)\\ \\text{and}\\ (-)\\ \\text{enantiomers}$$'
    },
    {
      d: 'E',
      q_en: 'What is a racemic mixture? Why is it optically inactive?',
      q_hi: 'रेसेमिक मिश्रण (racemic mixture) क्या है? यह प्रकाशीय निष्क्रिय क्यों होता है?',
      a_en: 'An equimolar mixture of d and l enantiomers, written (±). Their rotations cancel each other (external compensation).',
      a_hi: 'd व l ऐनेंशियोमर का समान मोल (1:1) वाला मिश्रण (±)। उनके घूर्णन एक-दूसरे को निरस्त करते हैं (बाह्य प्रतिकरण)।',
      formula: '$$d+l\\ (1:1)=(\\pm)$$'
    },
    {
      d: 'M',
      q_en: 'What is a meso compound? Give an example.',
      q_hi: 'मेसो (meso) यौगिक क्या है? उदाहरण दीजिए।',
      a_en: 'A compound with chiral carbons and an internal plane of symmetry, hence optically inactive (internal compensation): meso-tartaric acid.',
      a_hi: 'कायरल कार्बन व आंतरिक सममिति तल वाला यौगिक, अतः प्रकाशीय निष्क्रिय (आंतरिक प्रतिकरण): मेसो-टार्टरिक अम्ल।',
      formula: '$$\\text{HOOC-CH(OH)-CH(OH)-COOH}$$'
    },
    {
      d: 'M',
      q_en: 'Define diastereomers. How do their physical properties differ?',
      q_hi: 'डाइएस्टीरियोमर (diastereomers) परिभाषित कीजिए। उनके भौतिक गुण कैसे भिन्न होते हैं?',
      a_en: 'Stereoisomers that are not mirror images. They have different m.p., b.p. and solubility, so they can be separated by fractional crystallisation.',
      a_hi: 'वे त्रिविम समावयवी जो दर्पण-प्रतिबिम्ब नहीं हैं। गलनांक, क्वथनांक, विलेयता भिन्न; आंशिक क्रिस्टलन से पृथक्करण संभव।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'How many stereoisomers does tartaric acid have? Name them.',
      q_hi: 'टार्टरिक अम्ल के कितने त्रिविम समावयवी हैं? उनके नाम बताइए।',
      a_en: 'Three: (+)-tartaric acid, (−)-tartaric acid (enantiomers) and optically inactive meso-tartaric acid.',
      a_hi: 'तीन: (+)-टार्टरिक अम्ल, (−)-टार्टरिक अम्ल (ऐनेंशियोमर) तथा प्रकाशीय निष्क्रिय मेसो-टार्टरिक अम्ल।',
      formula: '$$2\\ \\text{chiral C}\\Rightarrow 3\\ \\text{isomers (not 4)}$$'
    },
    {
      d: 'M',
      q_en: 'State the condition for a molecule to be optically active.',
      q_hi: 'किसी अणु के प्रकाशीय सक्रिय होने की शर्त बताइए।',
      a_en: 'The molecule must be chiral: non-superimposable on its mirror image, i.e. having no plane or centre of symmetry.',
      a_hi: 'अणु कायरल होना चाहिए: दर्पण-प्रतिबिम्ब पर अध्यारोपित न हो, अर्थात् सममिति तल व सममिति केन्द्र न हो।',
      formula: '$$\\text{chiral}\\Rightarrow\\text{optically active}$$'
    },
    {
      d: 'M',
      q_en: 'Is 2-chloropropane chiral? Is 2-chlorobutane?',
      q_hi: 'क्या 2-क्लोरोप्रोपेन कायरल है? क्या 2-क्लोरोब्यूटेन कायरल है?',
      a_en: '2-Chloropropane is achiral (C2 holds two CH3). 2-Chlorobutane is chiral: C2 bears H, Cl, CH3 and C2H5, giving two enantiomers.',
      a_hi: '2-क्लोरोप्रोपेन अकायरल (C2 पर दो CH3)। 2-क्लोरोब्यूटेन कायरल: C2 पर H, Cl, CH3, C2H5; दो ऐनेंशियोमर बनते हैं।',
      formula: '$$\\text{CH}_3\\text{C}^{*}\\text{HClC}_2\\text{H}_5$$'
    },
    {
      d: 'H',
      q_en: 'How many stereoisomers: CH3CHBrCHBrCH3 and CH3CHBrCHBrCH2CH3?',
      q_hi: 'CH3CHBrCHBrCH3 व CH3CHBrCHBrCH2CH3 के कितने त्रिविम समावयवी संभव हैं?',
      a_en: 'Symmetrical one: 3 (d, l and meso). Unsymmetrical one: 4 (two enantiomeric pairs); here 2ⁿ holds as no meso form exists.',
      a_hi: 'सममित: 3 (d, l व मेसो)। असममित: 4 (दो ऐनेंशियोमर युग्म); यहाँ 2ⁿ लागू है क्योंकि मेसो रूप नहीं बनता।',
      formula: '$$3\\ (\\text{identical ends}),\\quad 2^2=4\\ (\\text{different ends})$$'
    },
    {
      d: 'H',
      q_en: 'Racemic mixture vs meso compound: both inactive. How do they differ?',
      q_hi: 'रेसेमिक मिश्रण व मेसो यौगिक दोनों निष्क्रिय हैं। इनमें क्या अंतर है?',
      a_en: 'Racemic: two compounds, external compensation, can be resolved into d and l. Meso: a single compound, internal compensation, cannot be resolved.',
      a_hi: 'रेसेमिक: दो यौगिक, बाह्य प्रतिकरण, d व l में वियोज्य। मेसो: एकल यौगिक, आंतरिक प्रतिकरण, वियोजन असंभव।',
      formula: '$$\\text{external}\\ \\text{vs}\\ \\text{internal compensation}$$'
    },
    {
      d: 'H',
      q_en: 'Can a molecule with no chiral carbon be optically active? Give an example.',
      q_hi: 'क्या कायरल कार्बन रहित अणु प्रकाशीय सक्रिय हो सकता है? उदाहरण दीजिए।',
      a_en: 'Yes. ClHC=C=CHCl (1,3-dichloroallene) has axial chirality: no plane or centre of symmetry, so two enantiomers exist.',
      a_hi: 'हाँ। ClHC=C=CHCl (1,3-डाइक्लोरोऐलीन) में अक्षीय कायरलता है: सममिति तल/केन्द्र नहीं, अतः दो ऐनेंशियोमर होते हैं।',
      formula: '$$\\text{ClHC}=\\text{C}=\\text{CHCl}$$'
    },
    {
      d: 'H',
      q_en: 'A molecule has n different chiral centres and no meso form. How many isomers and enantiomeric pairs?',
      q_hi: 'किसी अणु में n भिन्न कायरल केन्द्र हैं और मेसो रूप नहीं है। कितने समावयवी व ऐनेंशियोमर युग्म?',
      a_en: '2ⁿ stereoisomers, all optically active, forming 2ⁿ⁻¹ enantiomeric pairs; e.g., n = 3 gives 8 isomers and 4 pairs.',
      a_hi: '2ⁿ त्रिविम समावयवी, सभी प्रकाशीय सक्रिय, 2ⁿ⁻¹ ऐनेंशियोमर युग्म; जैसे n = 3 पर 8 समावयवी व 4 युग्म।',
      formula: '$$N=2^n,\\ \\ \\text{pairs}=2^{n-1}$$'
    },
    {
      d: 'H',
      q_en: 'TRAP: Does the sign (+) or (−) of rotation tell whether a compound is D or L (or R or S)?',
      q_hi: 'ट्रैप: क्या घूर्णन का चिह्न (+) या (−) बताता है कि यौगिक D या L (या R या S) है?',
      a_en: 'No. The sign is measured experimentally; D/L and R/S describe configuration. D-lactic acid is (−), D-glyceraldehyde is (+).',
      a_hi: 'नहीं। चिह्न प्रयोग से मापा जाता है; D/L व R/S विन्यास दर्शाते हैं। D-लैक्टिक अम्ल (−) है, D-ग्लिसरैल्डिहाइड (+)।',
      formula: '$$\\text{D/L},\\ \\text{R/S}\\ \\neq\\ d/l\\ (+/-)$$'
    }
  ],

  /* ---------- SET 8: Fission of Covalent Bonds: Homolytic & Heterolytic ---------- */
  8: [
    {
      d: 'E',
      q_en: 'Define homolytic fission. What does it produce?',
      q_hi: 'समांश विखंडन (homolytic fission) को परिभाषित कीजिए। इससे क्या बनता है?',
      a_en: 'Symmetrical bond breaking: each atom keeps one electron of the shared pair, forming free radicals (half-headed fish-hook arrows).',
      a_hi: 'सममित आबंध टूटन: प्रत्येक परमाणु साझे युग्म का एक e⁻ रखता है, मुक्त मूलक (free radicals) बनते हैं (अर्ध-शीर्ष तीर)।',
      formula: '$$\\text{Cl-Cl}\\xrightarrow{h\\nu}2\\,\\text{Cl}^{\\bullet}$$'
    },
    {
      d: 'E',
      q_en: 'Define heterolytic fission. What does it produce?',
      q_hi: 'विषमांश विखंडन (heterolytic fission) को परिभाषित कीजिए। इससे क्या बनता है?',
      a_en: 'Unsymmetrical bond breaking: the more electronegative atom takes both electrons, giving a cation and an anion (full-headed arrow).',
      a_hi: 'असममित आबंध टूटन: अधिक विद्युत-ऋणात्मक परमाणु दोनों e⁻ ले जाता है, धनायन व ऋणायन बनते हैं (पूर्ण-शीर्ष तीर)।',
      formula: '$$\\text{R-Cl}\\rightarrow\\text{R}^++\\text{Cl}^-$$'
    },
    {
      d: 'E',
      q_en: 'Which conditions favour homolysis and which favour heterolysis?',
      q_hi: 'समांश व विषमांश विखंडन के लिए कौन-सी परिस्थितियाँ अनुकूल हैं?',
      a_en: 'Homolysis: heat, UV light, peroxides, non-polar solvents. Heterolysis: polar bonds and polar solvents.',
      a_hi: 'समांश: ऊष्मा, UV प्रकाश, परॉक्साइड, अध्रुवीय विलायक। विषमांश: ध्रुवीय आबंध व ध्रुवीय विलायक।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What is a free radical? State its main features.',
      q_hi: 'मुक्त मूलक (free radical) क्या है? इसकी मुख्य विशेषताएँ बताइए।',
      a_en: 'A neutral species with an unpaired electron, e.g., CH3• and Cl•. It is paramagnetic, highly reactive and short-lived.',
      a_hi: 'अयुग्मित e⁻ वाली उदासीन स्पीशीज़, जैसे CH3• व Cl•। यह अनुचुम्बकीय, अत्यधिक अभिक्रियाशील व अल्पजीवी है।',
      formula: '$$\\text{CH}_3^{\\bullet},\\ \\text{Cl}^{\\bullet}$$'
    },
    {
      d: 'E',
      q_en: 'Give the stability order of carbocations.',
      q_hi: 'कार्बधनायनों (carbocations) की स्थायित्व क्रम बताइए।',
      a_en: '3° > 2° > 1° > CH3⁺. Alkyl groups stabilise the positive carbon by +I effect and hyperconjugation.',
      a_hi: '3° > 2° > 1° > CH3⁺। ऐल्किल समूह +I प्रभाव व अतिसंयुग्मन से धनावेशित कार्बन को स्थायी करते हैं।',
      formula: '$$3^\\circ>2^\\circ>1^\\circ>\\text{CH}_3^+$$'
    },
    {
      d: 'M',
      q_en: 'Give the stability order of carbanions and explain.',
      q_hi: 'कार्बऋणायनों (carbanions) का स्थायित्व क्रम बताकर कारण दीजिए।',
      a_en: 'CH3⁻ > 1° > 2° > 3°. +I effect of alkyl groups pushes electrons onto the negative carbon, destabilising it.',
      a_hi: 'CH3⁻ > 1° > 2° > 3°। ऐल्किल का +I प्रभाव ऋणावेशित कार्बन पर e⁻ घनत्व बढ़ाकर उसे अस्थायी करता है।',
      formula: '$$\\text{CH}_3^->1^\\circ>2^\\circ>3^\\circ$$'
    },
    {
      d: 'M',
      q_en: 'Give the stability order of free radicals.',
      q_hi: 'मुक्त मूलकों का स्थायित्व क्रम बताइए।',
      a_en: '3° > 2° > 1° > CH3•. More alkyl groups give more hyperconjugation to the odd-electron carbon.',
      a_hi: '3° > 2° > 1° > CH3•। अधिक ऐल्किल समूह अयुग्मित e⁻ वाले कार्बन को अधिक अतिसंयुग्मन देते हैं।',
      formula: '$$3^\\circ>2^\\circ>1^\\circ>\\text{CH}_3^{\\bullet}$$'
    },
    {
      d: 'M',
      q_en: 'State hybridisation and shape of CH3⁺, CH3⁻ and CH3•.',
      q_hi: 'CH3⁺, CH3⁻ व CH3• का संकरण व आकृति बताइए।',
      a_en: 'CH3⁺: sp², trigonal planar (empty p). CH3⁻: sp³, pyramidal (lone pair). CH3•: sp², nearly planar.',
      a_hi: 'CH3⁺: sp², त्रिकोणीय समतलीय (रिक्त p)। CH3⁻: sp³, पिरामिडी (एकाकी युग्म)। CH3•: sp², लगभग समतलीय।',
      formula: '$$sp^2,\\ sp^3,\\ sp^2$$'
    },
    {
      d: 'M',
      q_en: 'Which way does the bond break in CH3–Cl and in CH3–Li?',
      q_hi: 'CH3–Cl व CH3–Li में आबंध किस प्रकार टूटता है?',
      a_en: 'CH3–Cl: Cl is more electronegative, giving CH3⁺ + Cl⁻. CH3–Li: carbon is more electronegative, giving CH3⁻ + Li⁺.',
      a_hi: 'CH3–Cl: Cl अधिक विद्युत-ऋणात्मक, CH3⁺ + Cl⁻। CH3–Li: कार्बन अधिक विद्युत-ऋणात्मक, CH3⁻ + Li⁺।',
      formula: '$$\\text{CH}_3\\text{-Li}\\rightarrow\\text{CH}_3^-+\\text{Li}^+$$'
    },
    {
      d: 'M',
      q_en: 'Why do peroxides undergo homolysis easily?',
      q_hi: 'परॉक्साइड समांश विखंडन सरलता से क्यों करते हैं?',
      a_en: 'The O–O bond is weak (~150 kJ/mol in dialkyl peroxides), so heating gives alkoxy radicals that start radical reactions.',
      a_hi: 'O–O आबंध दुर्बल है (डाइऐल्किल परॉक्साइड में ~150 kJ/mol); गर्म करने पर ऐल्कॉक्सी मूलक बनते हैं जो अभिक्रिया आरंभ करते हैं।',
      formula: '$$\\text{R-O-O-R}\\xrightarrow{\\Delta}2\\,\\text{RO}^{\\bullet}$$'
    },
    {
      d: 'H',
      q_en: 'Why is the allyl cation CH2=CH–CH2⁺ more stable than the 2° isopropyl cation?',
      q_hi: 'ऐलिल कार्बधनायन CH2=CH–CH2⁺, 2° आइसोप्रोपिल कार्बधनायन से अधिक स्थायी क्यों है?',
      a_en: 'Resonance spreads the charge over two carbons (CH2=CH–CH2⁺ ↔ ⁺CH2–CH=CH2), outweighing +I and hyperconjugation of the 2° cation.',
      a_hi: 'अनुनाद आवेश को दो कार्बनों पर फैलाता है (CH2=CH–CH2⁺ ↔ ⁺CH2–CH=CH2), जो 2° के +I व अतिसंयुग्मन से अधिक प्रभावी है।',
      formula: '$$\\text{CH}_2=\\text{CH-CH}_2^+\\leftrightarrow{}^+\\text{CH}_2\\text{-CH}=\\text{CH}_2$$'
    },
    {
      d: 'H',
      q_en: 'Why is the triphenylmethyl cation so stable that its salts can be isolated?',
      q_hi: 'ट्राइफेनिलमेथिल कार्बधनायन इतना स्थायी क्यों है कि इसके लवण पृथक किए जा सकते हैं?',
      a_en: 'Its positive charge is delocalised by resonance over three phenyl rings in a planar arrangement.',
      a_hi: 'इसका धनावेश तीन फेनिल वलयों पर अनुनाद द्वारा, समतलीय व्यवस्था में, विस्थानीकृत हो जाता है।',
      formula: '$$(\\text{C}_6\\text{H}_5)_3\\text{C}^+$$'
    },
    {
      d: 'H',
      q_en: 'Arrange HC≡C⁻, CH2=CH⁻ and CH3CH2⁻ by stability and give the reason.',
      q_hi: 'HC≡C⁻, CH2=CH⁻ व CH3CH2⁻ को स्थायित्व क्रम में रखकर कारण दीजिए।',
      a_en: 'HC≡C⁻ > CH2=CH⁻ > CH3CH2⁻. Greater s-character (50% > 33% > 25%) holds the lone pair closer to the nucleus.',
      a_hi: 'HC≡C⁻ > CH2=CH⁻ > CH3CH2⁻। अधिक s-लक्षण (50% > 33% > 25%) एकाकी युग्म को नाभिक के निकट रखता है।',
      formula: '$$sp\\,(50\\%)>sp^2\\,(33\\%)>sp^3\\,(25\\%)$$'
    },
    {
      d: 'H',
      q_en: 'Why is a bridgehead carbocation unstable even though it is tertiary?',
      q_hi: 'तृतीयक होने पर भी सेतुशीर्ष (bridgehead) कार्बधनायन अस्थायी क्यों होता है?',
      a_en: 'A carbocation needs a planar sp² centre (120°). The rigid bicyclic frame cannot flatten, so the cation is highly strained.',
      a_hi: 'कार्बधनायन को समतलीय sp² केन्द्र (120°) चाहिए। दृढ़ द्विचक्रीय ढाँचा समतल नहीं हो सकता, अतः यह अत्यंत तनावयुक्त है।',
      formula: '$$\\text{planar}\\ sp^2\\ \\text{needed}$$'
    },
    {
      d: 'H',
      q_en: 'Why is the tropylium cation C7H7⁺ more stable than the tert-butyl cation?',
      q_hi: 'ट्रोपिलियम कार्बधनायन C7H7⁺, tert-ब्यूटिल कार्बधनायन से अधिक स्थायी क्यों है?',
      a_en: 'It is planar, cyclic and fully conjugated with 6π electrons (4n+2, n = 1), so it is aromatic; charge is shared over seven carbons.',
      a_hi: 'यह समतलीय, चक्रीय व पूर्ण संयुग्मित है जिसमें 6π e⁻ (4n+2, n = 1) हैं, अतः ऐरोमैटिक है; आवेश सात कार्बनों पर बँटा है।',
      formula: '$$\\text{C}_7\\text{H}_7^+:\\ 6\\pi\\ e^-$$'
    }
  ],

  /* ---------- SET 9: Nucleophiles & Electrophiles ---------- */
  9: [
    {
      d: 'E',
      q_en: 'Define a nucleophile and give examples.',
      q_hi: 'नाभिकस्नेही (nucleophile) को परिभाषित कर उदाहरण दीजिए।',
      a_en: 'An electron-rich species (negative charge or lone pair) that attacks electron-poor centres: OH⁻, CN⁻, NH3, H2O.',
      a_hi: 'इलेक्ट्रॉन-समृद्ध स्पीशीज़ (ऋणावेश या एकाकी युग्म) जो इलेक्ट्रॉन-न्यून केन्द्र पर आक्रमण करती है: OH⁻, CN⁻, NH3, H2O।',
      formula: '$$\\text{Nu}:\\ \\text{OH}^-,\\ \\text{CN}^-,\\ \\text{NH}_3,\\ \\text{H}_2\\text{O}$$'
    },
    {
      d: 'E',
      q_en: 'Define an electrophile and give examples.',
      q_hi: 'इलेक्ट्रॉनस्नेही (electrophile) को परिभाषित कर उदाहरण दीजिए।',
      a_en: 'An electron-deficient species (positive charge or incomplete octet) that seeks electrons: H⁺, NO2⁺, CH3⁺, BF3, AlCl3.',
      a_hi: 'इलेक्ट्रॉन-न्यून स्पीशीज़ (धनावेश या अपूर्ण अष्टक) जो इलेक्ट्रॉन खोजती है: H⁺, NO2⁺, CH3⁺, BF3, AlCl3।',
      formula: '$$\\text{E}^+:\\ \\text{H}^+,\\ \\text{NO}_2^+,\\ \\text{CH}_3^+,\\ \\text{BF}_3,\\ \\text{AlCl}_3$$'
    },
    {
      d: 'E',
      q_en: 'Classify as nucleophile or electrophile: OH⁻, NO2⁺, NH3, AlCl3, H2O, SO3.',
      q_hi: 'नाभिकस्नेही या इलेक्ट्रॉनस्नेही में वर्गीकृत कीजिए: OH⁻, NO2⁺, NH3, AlCl3, H2O, SO3।',
      a_en: 'Nucleophiles: OH⁻, NH3, H2O. Electrophiles: NO2⁺, AlCl3, SO3.',
      a_hi: 'नाभिकस्नेही: OH⁻, NH3, H2O। इलेक्ट्रॉनस्नेही: NO2⁺, AlCl3, SO3।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Why is BF3 an electrophile although it is neutral?',
      q_hi: 'BF3 उदासीन होने पर भी इलेक्ट्रॉनस्नेही क्यों है?',
      a_en: 'Boron has only six valence electrons and an empty p-orbital, so it accepts an electron pair (Lewis acid).',
      a_hi: 'बोरॉन के पास केवल छः संयोजी e⁻ व रिक्त p-कक्षक है, अतः यह इलेक्ट्रॉन-युग्म ग्रहण करता है (लुईस अम्ल)।',
      formula: '$$\\text{BF}_3+:\\text{NH}_3\\rightarrow\\text{F}_3\\text{B}\\leftarrow\\text{NH}_3$$'
    },
    {
      d: 'E',
      q_en: 'Identify the electrophilic carbon in CH3–Cl and in >C=O.',
      q_hi: 'CH3–Cl व >C=O में इलेक्ट्रॉनस्नेही कार्बन पहचानिए।',
      a_en: 'In both, carbon is δ⁺: Cl or O is more electronegative and pulls electron density, so nucleophiles attack that carbon.',
      a_hi: 'दोनों में कार्बन δ⁺ है: Cl या O अधिक विद्युत-ऋणात्मक है व e⁻ खींचता है, अतः नाभिकस्नेही इसी कार्बन पर आक्रमण करते हैं।',
      formula: '$$\\overset{\\delta+}{\\text{C}}-\\overset{\\delta-}{\\text{Cl}},\\quad\\overset{\\delta+}{\\text{C}}=\\overset{\\delta-}{\\text{O}}$$'
    },
    {
      d: 'M',
      q_en: 'What is an ambident nucleophile? Give two examples with products.',
      q_hi: 'उभयदंती नाभिकस्नेही (ambident nucleophile) क्या है? उत्पादों सहित दो उदाहरण दीजिए।',
      a_en: 'A nucleophile with two attacking sites: CN⁻ (C gives RCN, N gives RNC) and NO2⁻ (N gives RNO2, O gives RONO).',
      a_hi: 'दो आक्रमण-स्थलों वाला नाभिकस्नेही: CN⁻ (C से RCN, N से RNC) व NO2⁻ (N से RNO2, O से RONO)।',
      formula: '$$\\text{CN}^-\\rightarrow\\text{RCN}\\ \\text{or}\\ \\text{RNC}$$'
    },
    {
      d: 'M',
      q_en: 'Why does KCN with RX give RCN but AgCN gives RNC?',
      q_hi: 'KCN, RX से RCN देता है पर AgCN से RNC क्यों बनता है?',
      a_en: 'KCN is ionic, so free CN⁻ attacks through carbon. AgCN is largely covalent, so only the N lone pair is available, giving RNC.',
      a_hi: 'KCN आयनिक है, अतः मुक्त CN⁻ कार्बन से आक्रमण करता है। AgCN सहसंयोजी है, केवल N का एकाकी युग्म उपलब्ध; RNC बनता है।',
      formula: '$$\\text{RX}+\\text{KCN}\\rightarrow\\text{RCN};\\ \\ \\text{RX}+\\text{AgCN}\\rightarrow\\text{RNC}$$'
    },
    {
      d: 'M',
      q_en: 'Locate the nucleophilic site in CH3NH2 and CH3OH, and the electrophilic site in CH3Br.',
      q_hi: 'CH3NH2 व CH3OH में नाभिकस्नेही स्थल तथा CH3Br में इलेक्ट्रॉनस्नेही स्थल बताइए।',
      a_en: 'Nucleophilic: lone pair on N in CH3NH2 and on O in CH3OH. Electrophilic: the δ⁺ carbon of CH3–Br.',
      a_hi: 'नाभिकस्नेही: CH3NH2 में N का तथा CH3OH में O का एकाकी युग्म। इलेक्ट्रॉनस्नेही: CH3–Br का δ⁺ कार्बन।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Is ethene a nucleophile or an electrophile? Explain.',
      q_hi: 'एथीन नाभिकस्नेही है या इलेक्ट्रॉनस्नेही? समझाइए।',
      a_en: 'A nucleophile towards H⁺ or Br⁺: its π electrons are loosely held and electron-rich, so it gives electrophilic addition.',
      a_hi: 'H⁺ या Br⁺ के प्रति नाभिकस्नेही: इसके π e⁻ शिथिल व समृद्ध हैं, अतः यह इलेक्ट्रॉनस्नेही योग देता है।',
      formula: '$$\\text{CH}_2=\\text{CH}_2+\\text{H}^+\\rightarrow\\text{CH}_3\\text{CH}_2^+$$'
    },
    {
      d: 'M',
      q_en: 'Why does RMgX behave as a nucleophile?',
      q_hi: 'RMgX नाभिकस्नेही की भाँति व्यवहार क्यों करता है?',
      a_en: 'Carbon is more electronegative than Mg, so the C–Mg bond is polarised C(δ⁻)–Mg(δ⁺); R acts like a carbanion and attacks C=O.',
      a_hi: 'कार्बन, Mg से अधिक विद्युत-ऋणात्मक है, अतः C(δ⁻)–Mg(δ⁺); R कार्बऋणायन की भाँति C=O पर आक्रमण करता है।',
      formula: '$$\\overset{\\delta-}{\\text{R}}-\\overset{\\delta+}{\\text{Mg}}\\text{X}$$'
    },
    {
      d: 'H',
      q_en: 'Arrange the nucleophilic strength of F⁻, Cl⁻, Br⁻ and I⁻ in water.',
      q_hi: 'जल में F⁻, Cl⁻, Br⁻ व I⁻ की नाभिकस्नेही क्षमता का क्रम बताइए।',
      a_en: 'I⁻ > Br⁻ > Cl⁻ > F⁻. Large, polarisable I⁻ is least solvated; F⁻ is tightly H-bonded. Basicity follows the reverse order.',
      a_hi: 'I⁻ > Br⁻ > Cl⁻ > F⁻। बड़ा ध्रुवणीय I⁻ सबसे कम विलायकित है; F⁻ H-आबंध में जकड़ा है। क्षारकता का क्रम उलटा।',
      formula: '$$\\text{I}^->\\text{Br}^->\\text{Cl}^->\\text{F}^-$$'
    },
    {
      d: 'H',
      q_en: 'Is every strong base a good nucleophile? Differentiate basicity and nucleophilicity.',
      q_hi: 'क्या प्रत्येक प्रबल क्षारक अच्छा नाभिकस्नेही होता है? क्षारकता व नाभिकस्नेहिता में अंतर बताइए।',
      a_en: 'No. Basicity is thermodynamic (H⁺ affinity), nucleophilicity is kinetic (attack on carbon). t-BuO⁻ is a strong base but a poor Nu (bulky).',
      a_hi: 'नहीं। क्षारकता ऊष्मागतिक (H⁺ बंधुता) है, नाभिकस्नेहिता गतिक (कार्बन पर आक्रमण)। t-BuO⁻ प्रबल क्षारक पर दुर्बल Nu (स्थूल)।',
      formula: '$$\\text{basicity}\\ (\\text{thermo})\\neq\\text{nucleophilicity}\\ (\\text{kinetic})$$'
    },
    {
      d: 'H',
      q_en: 'Is dichlorocarbene :CCl2 an electrophile or a nucleophile? Why?',
      q_hi: 'डाइक्लोरोकार्बीन :CCl2 इलेक्ट्रॉनस्नेही है या नाभिकस्नेही? क्यों?',
      a_en: 'Electrophile: carbon has only six electrons (sextet) and an empty p-orbital, though it also holds a lone pair.',
      a_hi: 'इलेक्ट्रॉनस्नेही: कार्बन पर केवल छः e⁻ (षट्क) व रिक्त p-कक्षक है, यद्यपि एक एकाकी युग्म भी है।',
      formula: '$$:\\text{CCl}_2$$'
    },
    {
      d: 'H',
      q_en: 'Name the electrophile in nitration of benzene and show how it forms.',
      q_hi: 'बेंज़ीन के नाइट्रीकरण में इलेक्ट्रॉनस्नेही का नाम बताइए तथा इसका निर्माण दर्शाइए।',
      a_en: 'Nitronium ion NO2⁺, formed when conc. H2SO4 protonates HNO3, which then loses water.',
      a_hi: 'नाइट्रोनियम आयन NO2⁺, जो सांद्र H2SO4 द्वारा HNO3 के प्रोटॉनीकरण व जल-त्याग से बनता है।',
      formula: '$$\\text{HNO}_3+2\\text{H}_2\\text{SO}_4\\rightarrow\\text{NO}_2^++\\text{H}_3\\text{O}^++2\\text{HSO}_4^-$$'
    },
    {
      d: 'H',
      q_en: 'Arrange C2H5O⁻, OH⁻, C6H5O⁻, CH3COO⁻ and H2O by nucleophilic strength.',
      q_hi: 'C2H5O⁻, OH⁻, C6H5O⁻, CH3COO⁻ व H2O को नाभिकस्नेही क्षमता के क्रम में रखिए।',
      a_en: 'C2H5O⁻ > OH⁻ > C6H5O⁻ > CH3COO⁻ > H2O. With the same attacking atom (O), nucleophilicity follows basicity.',
      a_hi: 'C2H5O⁻ > OH⁻ > C6H5O⁻ > CH3COO⁻ > H2O। आक्रमणकारी परमाणु समान (O) होने पर नाभिकस्नेहिता क्षारकता के अनुसार।',
      formula: '$$\\text{EtO}^->\\text{OH}^->\\text{PhO}^->\\text{AcO}^->\\text{H}_2\\text{O}$$'
    }
  ],

  /* ---------- SET 10: Electron Displacement Effects: Inductive Effect (I-Effect) ---------- */
  10: [
    {
      d: 'E',
      q_en: 'What is the inductive effect?',
      q_hi: 'प्रेरणिक प्रभाव (inductive effect) क्या है?',
      a_en: 'Permanent displacement of σ electrons along a carbon chain due to an electronegativity difference; it weakens with distance.',
      a_hi: 'विद्युत-ऋणात्मकता अंतर से कार्बन शृंखला में σ e⁻ का स्थायी विस्थापन; दूरी बढ़ने पर प्रभाव घटता है।',
      formula: '$$\\overset{\\delta\\delta\\delta+}{\\text{C}_3}\\rightarrow\\overset{\\delta\\delta+}{\\text{C}_2}\\rightarrow\\overset{\\delta+}{\\text{C}_1}\\rightarrow\\overset{\\delta-}{\\text{Cl}}$$'
    },
    {
      d: 'E',
      q_en: 'Define +I and −I groups with examples.',
      q_hi: '+I व −I समूहों को उदाहरण सहित परिभाषित कीजिए।',
      a_en: '+I: electron-releasing (alkyl groups, –O⁻). −I: electron-withdrawing (–NO2, –F, –Cl, –CN, –OH, –C6H5).',
      a_hi: '+I: इलेक्ट्रॉन-प्रदायी (ऐल्किल समूह, –O⁻)। −I: इलेक्ट्रॉन-आकर्षी (–NO2, –F, –Cl, –CN, –OH, –C6H5)।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'How does the inductive effect vary with distance?',
      q_hi: 'दूरी के साथ प्रेरणिक प्रभाव कैसे बदलता है?',
      a_en: 'It falls off rapidly with distance: significant up to about three carbons and negligible beyond the fourth.',
      a_hi: 'दूरी के साथ तेज़ी से घटता है: लगभग तीन कार्बन तक सार्थक तथा चौथे कार्बन के बाद नगण्य।',
      formula: '$$\\text{effect}\\propto\\frac{1}{\\text{distance}}\\ (\\text{rapid decay})$$'
    },
    {
      d: 'E',
      q_en: 'Arrange CH3–, CH3CH2–, (CH3)2CH– and (CH3)3C– by +I effect.',
      q_hi: 'CH3–, CH3CH2–, (CH3)2CH– व (CH3)3C– को +I प्रभाव के क्रम में रखिए।',
      a_en: '(CH3)3C– > (CH3)2CH– > CH3CH2– > CH3–. More alkyl branches push more electron density.',
      a_hi: '(CH3)3C– > (CH3)2CH– > CH3CH2– > CH3–। अधिक शाखाएँ अधिक इलेक्ट्रॉन-घनत्व देती हैं।',
      formula: '$$(\\text{CH}_3)_3\\text{C-}\\gt(\\text{CH}_3)_2\\text{CH-}\\gt\\text{CH}_3\\text{CH}_2\\text{-}\\gt\\text{CH}_3\\text{-}$$'
    },
    {
      d: 'E',
      q_en: 'Arrange –NO2, –CN, –F, –Cl, –Br, –I and –OH by −I effect.',
      q_hi: '–NO2, –CN, –F, –Cl, –Br, –I व –OH को −I प्रभाव के क्रम में रखिए।',
      a_en: '–NO2 > –CN > –F > –Cl > –Br > –I > –OH.',
      a_hi: '–NO2 > –CN > –F > –Cl > –Br > –I > –OH।',
      formula: '$$-\\text{NO}_2\\gt-\\text{CN}\\gt-\\text{F}\\gt-\\text{Cl}\\gt-\\text{Br}\\gt-\\text{I}\\gt-\\text{OH}$$'
    },
    {
      d: 'M',
      q_en: 'Arrange Cl3CCOOH, Cl2CHCOOH, ClCH2COOH and CH3COOH by acid strength and explain.',
      q_hi: 'Cl3CCOOH, Cl2CHCOOH, ClCH2COOH व CH3COOH को अम्लीय शक्ति क्रम में रखकर कारण दीजिए।',
      a_en: 'Cl3CCOOH > Cl2CHCOOH > ClCH2COOH > CH3COOH. Each −I Cl disperses the carboxylate charge, stabilising the anion.',
      a_hi: 'Cl3CCOOH > Cl2CHCOOH > ClCH2COOH > CH3COOH। प्रत्येक −I Cl कार्बोक्सिलेट का आवेश फैलाकर ऋणायन को स्थायी करता है।',
      formula: '$$\\text{p}K_a:\\ 0.65<1.29<2.86<4.76$$'
    },
    {
      d: 'M',
      q_en: 'Compare the acidity of FCH2COOH, ClCH2COOH, BrCH2COOH and ICH2COOH.',
      q_hi: 'FCH2COOH, ClCH2COOH, BrCH2COOH व ICH2COOH की अम्लीयता की तुलना कीजिए।',
      a_en: 'FCH2COOH > ClCH2COOH > BrCH2COOH > ICH2COOH (pKa 2.66, 2.86, 2.90, 3.17); stronger −I from the more electronegative halogen.',
      a_hi: 'FCH2COOH > ClCH2COOH > BrCH2COOH > ICH2COOH (pKa 2.66, 2.86, 2.90, 3.17); अधिक विद्युत-ऋणात्मक हैलोजन का −I अधिक।',
      formula: '$$\\text{F}\\gt\\text{Cl}\\gt\\text{Br}\\gt\\text{I}\\ (-I)$$'
    },
    {
      d: 'M',
      q_en: 'Why is HCOOH stronger than CH3COOH?',
      q_hi: 'HCOOH, CH3COOH से प्रबल अम्ल क्यों है?',
      a_en: 'CH3 is +I and raises electron density on the carboxylate, destabilising it. H has no such effect (pKa 3.75 vs 4.76).',
      a_hi: 'CH3 का +I प्रभाव कार्बोक्सिलेट पर e⁻ घनत्व बढ़ाकर उसे अस्थायी करता है; H का नहीं (pKa 3.75 बनाम 4.76)।',
      formula: '$$\\text{HCOOH}\\ (3.75)\\gt\\text{CH}_3\\text{COOH}\\ (4.76)$$'
    },
    {
      d: 'M',
      q_en: 'Which is the stronger acid: 2-chlorobutanoic or 4-chlorobutanoic acid? Why?',
      q_hi: 'कौन प्रबल अम्ल है: 2-क्लोरोब्यूटेनोइक या 4-क्लोरोब्यूटेनोइक? क्यों?',
      a_en: '2-Chlorobutanoic (pKa ~2.8 vs ~4.5): Cl is closer to –COOH, and the −I effect weakens with distance.',
      a_hi: '2-क्लोरोब्यूटेनोइक (pKa ~2.8 बनाम ~4.5): Cl, –COOH के निकट है तथा −I प्रभाव दूरी के साथ घटता है।',
      formula: '$$\\text{CH}_3\\text{CH}_2\\text{CHClCOOH}\\gt\\text{ClCH}_2\\text{CH}_2\\text{CH}_2\\text{COOH}$$'
    },
    {
      d: 'M',
      q_en: 'Give the order of base strength of ethylamines in water.',
      q_hi: 'जल में एथिलऐमीनों की क्षारीय प्रबलता का क्रम बताइए।',
      a_en: '(C2H5)2NH > (C2H5)3N > C2H5NH2 > NH3. +I raises basicity, but 3° amine loses out through steric hindrance and poor hydration.',
      a_hi: '(C2H5)2NH > (C2H5)3N > C2H5NH2 > NH3। +I क्षारकता बढ़ाता है, पर 3° में स्टेरिक अवरोध व कम जलयोजन से कमी।',
      formula: '$$\\text{R}_2\\text{NH}\\gt\\text{R}_3\\text{N}\\gt\\text{RNH}_2\\gt\\text{NH}_3\\ (\\text{R}=\\text{C}_2\\text{H}_5)$$'
    },
    {
      d: 'H',
      q_en: 'Give the order of base strength of methylamines in aqueous solution.',
      q_hi: 'जलीय विलयन में मेथिलऐमीनों की क्षारीय प्रबलता का क्रम बताइए।',
      a_en: '(CH3)2NH > CH3NH2 > (CH3)3N > NH3 (pKb 3.27, 3.38, 4.22, 4.75). Note the order differs from ethylamines.',
      a_hi: '(CH3)2NH > CH3NH2 > (CH3)3N > NH3 (pKb 3.27, 3.38, 4.22, 4.75)। ध्यान दें, क्रम एथिलऐमीनों से भिन्न है।',
      formula: '$$(\\text{CH}_3)_2\\text{NH}\\gt\\text{CH}_3\\text{NH}_2\\gt(\\text{CH}_3)_3\\text{N}\\gt\\text{NH}_3$$'
    },
    {
      d: 'H',
      q_en: 'What is the basicity order of methylamines in the gas phase, and why does water change it?',
      q_hi: 'गैस प्रावस्था में मेथिलऐमीनों की क्षारकता का क्रम क्या है और जल इसे क्यों बदलता है?',
      a_en: 'Gas phase: (CH3)3N > (CH3)2NH > CH3NH2 > NH3, purely by +I. In water, H-bond solvation of R3NH⁺ (fewer N–H) reorders it.',
      a_hi: 'गैस प्रावस्था: (CH3)3N > (CH3)2NH > CH3NH2 > NH3, केवल +I से। जल में R3NH⁺ का H-आबंध जलयोजन (कम N–H) क्रम बदलता है।',
      formula: '$$3^\\circ\\gt2^\\circ\\gt1^\\circ\\gt\\text{NH}_3\\ (\\text{gas})$$'
    },
    {
      d: 'H',
      q_en: 'Why is benzoic acid (pKa 4.20) stronger than acetic acid (pKa 4.76)?',
      q_hi: 'बेंज़ोइक अम्ल (pKa 4.20), ऐसीटिक अम्ल (pKa 4.76) से प्रबल क्यों है?',
      a_en: 'The phenyl carbon is sp², more electronegative than sp³ CH3, so C6H5– is −I and stabilises the carboxylate; CH3– is +I.',
      a_hi: 'फेनिल का कार्बन sp² है, sp³ CH3 से अधिक विद्युत-ऋणात्मक; अतः C6H5– −I होकर कार्बोक्सिलेट को स्थायी करता है; CH3– +I।',
      formula: '$$\\text{C}_6\\text{H}_5\\text{COOH}\\ (4.20)\\gt\\text{CH}_3\\text{COOH}\\ (4.76)$$'
    },
    {
      d: 'H',
      q_en: 'Why is the acidity order of alcohols in solution CH3OH > 1° > 2° > 3°?',
      q_hi: 'विलयन में ऐल्कोहॉलों की अम्लीयता CH3OH > 1° > 2° > 3° क्यों है?',
      a_en: 'Alkyl +I raises electron density on O of the alkoxide, destabilising it; bulkier alkoxides are also less solvated. t-BuOH is weakest.',
      a_hi: 'ऐल्किल का +I ऐल्कॉक्साइड के O पर e⁻ घनत्व बढ़ाकर उसे अस्थायी करता है; स्थूल ऐल्कॉक्साइड कम विलायकित। t-BuOH सबसे दुर्बल।',
      formula: '$$\\text{CH}_3\\text{OH}\\gt1^\\circ\\gt2^\\circ\\gt3^\\circ$$'
    },
    {
      d: 'H',
      q_en: 'Which is the stronger acid: O2NCH2COOH or ClCH2COOH?',
      q_hi: 'कौन प्रबल अम्ल है: O2NCH2COOH या ClCH2COOH?',
      a_en: 'O2NCH2COOH (pKa 1.68 vs 2.86), because –NO2 has a stronger −I effect than –Cl and stabilises the anion more.',
      a_hi: 'O2NCH2COOH (pKa 1.68 बनाम 2.86), क्योंकि –NO2 का −I प्रभाव –Cl से प्रबल है और ऋणायन को अधिक स्थायी करता है।',
      formula: '$$\\text{p}K_a:\\ 1.68<2.86$$'
    }
  ],

  /* ---------- SET 11: Electron Displacement Effects: Resonance (Mesomeric) Effect ---------- */
  11: [
    {
      d: 'E',
      q_en: 'What is the resonance (mesomeric) effect?',
      q_hi: 'अनुनाद (मेसोमेरिक) प्रभाव क्या है?',
      a_en: 'Permanent delocalisation of π electrons or lone pairs through a conjugated system, shown by curved arrows.',
      a_hi: 'संयुग्मित तंत्र में π e⁻ या एकाकी युग्म का स्थायी विस्थानीकरण, जिसे वक्र तीरों से दर्शाते हैं।',
      formula: '$$\\text{CH}_2=\\text{CH-CH}=\\text{CH}_2$$'
    },
    {
      d: 'E',
      q_en: 'Define +M (+R) and −M (−R) effects with examples.',
      q_hi: '+M (+R) व −M (−R) प्रभावों को उदाहरण सहित परिभाषित कीजिए।',
      a_en: '+M: group donates lone-pair or π electrons into the system (–OH, –OR, –NH2, –Cl). −M: group withdraws π electrons (–NO2, –CHO, –CN, >C=O, –COOH).',
      a_hi: '+M: समूह एकाकी युग्म/π e⁻ तंत्र को देता है (–OH, –OR, –NH2, –Cl)। −M: π e⁻ खींचता है (–NO2, –CHO, –CN, >C=O, –COOH)।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What are resonance structures? Is the real molecule any one of them?',
      q_hi: 'अनुनाद संरचनाएँ (resonance structures) क्या हैं? क्या वास्तविक अणु उनमें से कोई एक है?',
      a_en: 'Hypothetical structures differing only in electron placement. The real molecule is one resonance hybrid, more stable than any contributor.',
      a_hi: 'काल्पनिक संरचनाएँ जो केवल e⁻ वितरण में भिन्न हैं। वास्तविक अणु एक अनुनाद संकर है, जो किसी भी योगदानकर्ता से अधिक स्थायी है।',
      formula: '$$\\longleftrightarrow\\ \\text{(resonance)},\\ \\ \\rightleftharpoons\\ \\text{(equilibrium)}$$'
    },
    {
      d: 'E',
      q_en: 'What is the C–C bond length in benzene compared with C–C and C=C?',
      q_hi: 'बेंज़ीन में C–C आबंध लंबाई, C–C व C=C की तुलना में क्या है?',
      a_en: 'All six C–C bonds are equal (139 pm), between C–C (154 pm) and C=C (134 pm), as the two Kekulé forms resonate.',
      a_hi: 'सभी छः C–C आबंध समान (139 pm) हैं, C–C (154 pm) व C=C (134 pm) के बीच, क्योंकि दो केकुले रूप अनुनादी हैं।',
      formula: '$$154\\ \\text{pm}>139\\ \\text{pm}>134\\ \\text{pm}$$'
    },
    {
      d: 'E',
      q_en: 'How do +M and −M groups affect electrophilic substitution in benzene?',
      q_hi: 'बेंज़ीन में +M व −M समूह इलेक्ट्रॉनस्नेही प्रतिस्थापन को कैसे प्रभावित करते हैं?',
      a_en: '+M groups activate the ring and direct ortho/para. −M groups deactivate it and direct meta.',
      a_hi: '+M समूह वलय को सक्रिय कर ऑर्थो/पैरा निर्देशित करते हैं। −M समूह निष्क्रिय कर मेटा निर्देशित करते हैं।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Show the charge distribution in phenol due to the +M effect of –OH.',
      q_hi: 'फीनॉल में –OH के +M प्रभाव से आवेश वितरण समझाइए।',
      a_en: 'O\'s lone pair delocalises into the ring, placing partial negative charge at the ortho and para carbons, where E⁺ attacks.',
      a_hi: 'O का एकाकी युग्म वलय में विस्थानीकृत होकर ऑर्थो व पैरा कार्बनों पर आंशिक ऋणावेश देता है, जहाँ E⁺ आक्रमण करता है।',
      formula: '$$\\text{C}_6\\text{H}_5\\text{OH}:\\ \\delta^-\\ \\text{at}\\ o,\\ p$$'
    },
    {
      d: 'M',
      q_en: 'Why is nitrobenzene meta-directing?',
      q_hi: 'नाइट्रोबेंज़ीन मेटा-निर्देशी क्यों है?',
      a_en: '–NO2 withdraws electrons by −M and −I, making ortho and para carbons electron-poor (δ⁺); meta is relatively richer, so E⁺ attacks there.',
      a_hi: '–NO2, −M व −I से e⁻ खींचता है; ऑर्थो/पैरा कार्बन e⁻-न्यून (δ⁺) हो जाते हैं, मेटा तुलनात्मक समृद्ध; E⁺ वहीं आता है।',
      formula: '$$\\text{C}_6\\text{H}_5\\text{NO}_2\\ \\rightarrow\\ \\text{meta product}$$'
    },
    {
      d: 'M',
      q_en: 'Why are halogens deactivating yet ortho-para directing?',
      q_hi: 'हैलोजन निष्क्रियकारी होते हुए भी ऑर्थो-पैरा निर्देशी क्यों हैं?',
      a_en: 'Strong −I withdraws electrons overall, so the ring is deactivated; +M lone-pair donation enriches ortho/para positions, so they direct there.',
      a_hi: 'प्रबल −I समग्रतः e⁻ खींचकर वलय निष्क्रिय करता है; +M एकाकी युग्म दान ऑर्थो/पैरा को समृद्ध कर वहीं निर्देशित करता है।',
      formula: '$$-I\\gt+M\\ (\\text{reactivity});\\ \\ +M\\ (\\text{orientation})$$'
    },
    {
      d: 'M',
      q_en: 'Why is phenol (pKa ~10) much more acidic than ethanol (pKa ~16)?',
      q_hi: 'फीनॉल (pKa ~10), एथेनॉल (pKa ~16) से इतना अधिक अम्लीय क्यों है?',
      a_en: 'Phenoxide is stabilised by delocalising its charge into the ring; ethoxide is destabilised by the +I effect of the ethyl group.',
      a_hi: 'फीनॉक्साइड का आवेश वलय में विस्थानीकृत होकर स्थायी होता है; एथॉक्साइड एथिल के +I प्रभाव से अस्थायी होता है।',
      formula: '$$\\text{C}_6\\text{H}_5\\text{O}^-\\ \\text{(resonance)}$$'
    },
    {
      d: 'M',
      q_en: 'Why are both C–O bonds in the acetate ion equal?',
      q_hi: 'ऐसीटेट आयन में दोनों C–O आबंध समान क्यों हैं?',
      a_en: 'The negative charge is delocalised equally over both oxygens by resonance, giving each C–O bond order 1.5.',
      a_hi: 'ऋणावेश अनुनाद से दोनों ऑक्सीजनों पर समान रूप से विस्थानीकृत है, अतः प्रत्येक C–O की आबंध कोटि 1.5 है।',
      formula: '$$\\text{CH}_3\\text{COO}^-:\\ \\text{bond order}=1.5$$'
    },
    {
      d: 'H',
      q_en: 'Why is aniline (pKb 9.38) a much weaker base than methylamine (pKb 3.38)?',
      q_hi: 'ऐनिलीन (pKb 9.38), मेथिलऐमीन (pKb 3.38) से बहुत दुर्बल क्षारक क्यों है?',
      a_en: 'N\'s lone pair is delocalised into the ring (+M), so it is less available to accept H⁺. Methylamine has no such delocalisation.',
      a_hi: 'N का एकाकी युग्म वलय में विस्थानीकृत (+M) है, अतः H⁺ ग्रहण को कम उपलब्ध। मेथिलऐमीन में ऐसा नहीं होता।',
      formula: '$$\\text{C}_6\\text{H}_5\\text{NH}_2\\ (9.38)\\ll\\text{CH}_3\\text{NH}_2\\ (3.38)$$'
    },
    {
      d: 'H',
      q_en: 'Why is the central C2–C3 bond of 1,3-butadiene (148 pm) shorter than a normal C–C (154 pm)?',
      q_hi: '1,3-ब्यूटाडाइईन का केन्द्रीय C2–C3 आबंध (148 pm) सामान्य C–C (154 pm) से छोटा क्यों है?',
      a_en: 'π delocalisation over C1–C4 gives C2–C3 partial double-bond character, and sp²–sp² overlap also shortens it.',
      a_hi: 'C1–C4 पर π विस्थानीकरण से C2–C3 में आंशिक द्विबंध लक्षण आता है तथा sp²–sp² अतिव्यापन भी इसे छोटा करता है।',
      formula: '$$148\\ \\text{pm}<154\\ \\text{pm}$$'
    },
    {
      d: 'H',
      q_en: 'Why is 3,5-dimethyl-4-nitrophenol a weaker acid than 4-nitrophenol?',
      q_hi: '3,5-डाइमेथिल-4-नाइट्रोफीनॉल, 4-नाइट्रोफीनॉल से दुर्बल अम्ल क्यों है?',
      a_en: 'Two flanking methyls twist –NO2 out of the ring plane (steric inhibition of resonance), cancelling its −M stabilisation of the phenoxide.',
      a_hi: 'दोनों पार्श्व मेथिल –NO2 को वलय तल से घुमा देते हैं (अनुनाद का त्रिविम संदमन), फीनॉक्साइड पर −M स्थायित्व समाप्त।',
      formula: '$$\\text{SIR}:\\ \\text{coplanarity lost}\\Rightarrow-M\\ \\text{lost}$$'
    },
    {
      d: 'H',
      q_en: 'Why is –NHCOCH3 a weaker activator than –NH2 in benzene?',
      q_hi: 'बेंज़ीन में –NHCOCH3, –NH2 से दुर्बल सक्रियकारी क्यों है?',
      a_en: 'The N lone pair is also delocalised into the adjacent C=O, so less of it is donated to the ring (weaker +M).',
      a_hi: 'N का एकाकी युग्म समीप के C=O में भी विस्थानीकृत होता है, अतः वलय को कम दान होता है (दुर्बल +M)।',
      formula: '$$\\text{PhNH}_2\\gt\\text{PhNHCOCH}_3\\ (+M)$$'
    },
    {
      d: 'H',
      q_en: 'Why is vinyl chloride unreactive towards nucleophilic substitution?',
      q_hi: 'विनाइल क्लोराइड नाभिकस्नेही प्रतिस्थापन के प्रति निष्क्रिय क्यों है?',
      a_en: 'Cl\'s lone pair overlaps with the C=C π bond (+M), giving the C–Cl bond partial double-bond character; it is shorter and stronger.',
      a_hi: 'Cl का एकाकी युग्म C=C π आबंध से अतिव्यापित (+M) होकर C–Cl में आंशिक द्विबंध लक्षण देता है; यह छोटा व प्रबल है।',
      formula: '$$\\text{CH}_2=\\text{CH-}\\ddot{\\text{Cl}}\\leftrightarrow{}^-\\text{CH}_2\\text{-CH}=\\overset{+}{\\text{Cl}}$$'
    }
  ],

  /* ---------- SET 12: Electron Displacement Effects: Electromeric & Hyperconjugation Effects ---------- */
  12: [
    {
      d: 'E',
      q_en: 'Define the electromeric effect.',
      q_hi: 'इलेक्ट्रोमेरी प्रभाव (electromeric effect) को परिभाषित कीजिए।',
      a_en: 'Temporary complete transfer of π electrons to one atom of a multiple bond when an attacking reagent approaches; it reverses when the reagent leaves.',
      a_hi: 'आक्रमणकारी अभिकर्मक के समीप आने पर बहुबंध के एक परमाणु पर π e⁻ का अस्थायी पूर्ण स्थानांतरण; अभिकर्मक हटने पर समाप्त।',
      formula: '$$\\text{C}=\\text{C}\\xrightarrow{\\text{E}^+}\\overset{+}{\\text{C}}\\text{-}\\ddot{\\text{C}}\\text{-E}$$'
    },
    {
      d: 'E',
      q_en: 'Explain the +E and −E effects with one example each.',
      q_hi: '+E व −E प्रभाव एक-एक उदाहरण सहित समझाइए।',
      a_en: '+E: π electrons shift toward the atom the reagent attaches to (H⁺ + C=C). −E: they shift away from it (CN⁻ + C=O, electrons go to O).',
      a_hi: '+E: π e⁻ उस परमाणु की ओर जाते हैं जिससे अभिकर्मक जुड़ता है (H⁺ + C=C)। −E: उससे दूर जाते हैं (CN⁻ + C=O, e⁻ O पर)।',
      formula: '$$>\\text{C=O}+\\text{CN}^-\\rightarrow>\\text{C(CN)-O}^-$$'
    },
    {
      d: 'E',
      q_en: 'What is hyperconjugation? Give its other names.',
      q_hi: 'अतिसंयुग्मन (hyperconjugation) क्या है? इसके अन्य नाम बताइए।',
      a_en: 'Delocalisation of σ electrons of an α C–H bond into an adjacent p-orbital or π bond. Also called no-bond resonance or Baker–Nathan effect.',
      a_hi: 'α C–H आबंध के σ e⁻ का पास के p-कक्षक या π आबंध में विस्थानीकरण। इसे अबंध अनुनाद या बेकर-नाथन प्रभाव भी कहते हैं।',
      formula: '$$\\sigma(\\text{C-H})\\rightarrow\\pi\\ \\text{or}\\ p$$'
    },
    {
      d: 'E',
      q_en: 'Count the α-hydrogens in CH3CH2⁺, (CH3)2CH⁺ and (CH3)3C⁺.',
      q_hi: 'CH3CH2⁺, (CH3)2CH⁺ व (CH3)3C⁺ में α-हाइड्रोजनों की संख्या गिनिए।',
      a_en: '3, 6 and 9 respectively; CH3⁺ has none. The count equals the number of hyperconjugative structures.',
      a_hi: 'क्रमशः 3, 6 व 9; CH3⁺ में कोई नहीं। यह संख्या अतिसंयुग्मी संरचनाओं की संख्या के बराबर है।',
      formula: '$$\\text{t-Bu}^+\\ (9)\\gt\\text{i-Pr}^+\\ (6)\\gt\\text{Et}^+\\ (3)\\gt\\text{CH}_3^+\\ (0)$$'
    },
    {
      d: 'E',
      q_en: 'Is the electromeric effect permanent? Which compounds show it?',
      q_hi: 'क्या इलेक्ट्रोमेरी प्रभाव स्थायी होता है? कौन-से यौगिक इसे दर्शाते हैं?',
      a_en: 'No, it is temporary and appears only in the presence of a reagent. It is shown by compounds with multiple bonds (C=C, C=O, C≡N).',
      a_hi: 'नहीं, यह अस्थायी है और केवल अभिकर्मक की उपस्थिति में प्रकट होता है। बहुबंध वाले यौगिक (C=C, C=O, C≡N) इसे दर्शाते हैं।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Explain the carbocation order t-Bu⁺ > i-Pr⁺ > Et⁺ > CH3⁺ by hyperconjugation.',
      q_hi: 'अतिसंयुग्मन से t-Bu⁺ > i-Pr⁺ > Et⁺ > CH3⁺ क्रम समझाइए।',
      a_en: 'The α-H count is 9 > 6 > 3 > 0. More hyperconjugative structures delocalise the positive charge better, giving more stability.',
      a_hi: 'α-H संख्या 9 > 6 > 3 > 0 है। अधिक अतिसंयुग्मी संरचनाएँ धनावेश को अधिक फैलाकर अधिक स्थायित्व देती हैं।',
      formula: '$$9>6>3>0\\ \\ (\\alpha\\text{-H})$$'
    },
    {
      d: 'M',
      q_en: 'Arrange ethene, propene, but-2-ene and 2-methylbut-2-ene by stability.',
      q_hi: 'एथीन, प्रोपीन, ब्यूट-2-ईन व 2-मेथिलब्यूट-2-ईन को स्थायित्व क्रम में रखिए।',
      a_en: '2-Methylbut-2-ene > but-2-ene > propene > ethene, following the α-H count 9 > 6 > 3 > 0.',
      a_hi: '2-मेथिलब्यूट-2-ईन > ब्यूट-2-ईन > प्रोपीन > एथीन; α-H संख्या 9 > 6 > 3 > 0 के अनुसार।',
      formula: '$$9>6>3>0$$'
    },
    {
      d: 'M',
      q_en: 'Write the no-bond resonance structure of propene.',
      q_hi: 'प्रोपीन की अबंध अनुनाद (no-bond resonance) संरचना लिखिए।',
      a_en: 'CH3–CH=CH2 ↔ H⁺ CH2=CH–CH2⁻. One such structure arises for each of the three α-H atoms.',
      a_hi: 'CH3–CH=CH2 ↔ H⁺ CH2=CH–CH2⁻। तीनों α-H परमाणुओं में प्रत्येक से एक ऐसी संरचना बनती है।',
      formula: '$$\\text{CH}_3\\text{-CH}=\\text{CH}_2\\leftrightarrow\\text{H}^+\\ \\text{CH}_2=\\text{CH-}\\overset{-}{\\text{CH}_2}$$'
    },
    {
      d: 'M',
      q_en: 'Why is the C–CH3 bond in propene (~150 pm) shorter than the C–C in ethane (154 pm)?',
      q_hi: 'प्रोपीन में C–CH3 आबंध (~150 pm), एथेन के C–C (154 pm) से छोटा क्यों है?',
      a_en: 'sp²–sp³ overlap plus hyperconjugation gives the bond partial double-bond character, shortening it.',
      a_hi: 'sp²–sp³ अतिव्यापन तथा अतिसंयुग्मन आबंध को आंशिक द्विबंध लक्षण देकर छोटा करते हैं।',
      formula: '$$150\\ \\text{pm}<154\\ \\text{pm}$$'
    },
    {
      d: 'M',
      q_en: 'Differentiate the electromeric effect from the mesomeric effect.',
      q_hi: 'इलेक्ट्रोमेरी प्रभाव व मेसोमेरी प्रभाव में अंतर बताइए।',
      a_en: 'Electromeric: temporary, needs a reagent, complete π shift. Mesomeric: permanent, no reagent, partial polarisation in conjugated systems.',
      a_hi: 'इलेक्ट्रोमेरी: अस्थायी, अभिकर्मक आवश्यक, पूर्ण π स्थानांतरण। मेसोमेरी: स्थायी, अभिकर्मक अनावश्यक, संयुग्मित तंत्र में आंशिक ध्रुवण।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Arrange CH3–, C2H5–, (CH3)2CH– and (CH3)3C– by hyperconjugation. Does it agree with the +I order?',
      q_hi: 'CH3–, C2H5–, (CH3)2CH– व (CH3)3C– को अतिसंयुग्मन के क्रम में रखिए। क्या यह +I क्रम से मेल खाता है?',
      a_en: 'Baker–Nathan order: CH3 > C2H5 > i-Pr > t-Bu (α-H 3, 2, 1, 0). The +I order is exactly the reverse; the two effects oppose.',
      a_hi: 'बेकर-नाथन क्रम: CH3 > C2H5 > i-Pr > t-Bu (α-H 3, 2, 1, 0)। +I क्रम ठीक उलटा है; दोनों प्रभाव विपरीत हैं।',
      formula: '$$\\text{CH}_3\\gt\\text{C}_2\\text{H}_5\\gt i\\text{-Pr}\\gt t\\text{-Bu}$$'
    },
    {
      d: 'H',
      q_en: 'How many hyperconjugative structures has (CH3)3C–CH=CH2? What does it show?',
      q_hi: '(CH3)3C–CH=CH2 में कितनी अतिसंयुग्मी संरचनाएँ हैं? यह क्या दर्शाता है?',
      a_en: 'Zero. The quaternary carbon attached to C=C has no H, so the tert-butyl group cannot stabilise the alkene by hyperconjugation.',
      a_hi: 'शून्य। C=C से जुड़े चतुर्थक कार्बन पर H नहीं है, अतः tert-ब्यूटिल अतिसंयुग्मन से ऐल्कीन को स्थायी नहीं कर सकता।',
      formula: '$$\\alpha\\text{-H}=0$$'
    },
    {
      d: 'H',
      q_en: 'Using Saytzeff\'s rule, name the major alkene from 2-bromobutane with alcoholic KOH and justify.',
      q_hi: 'सैटज़ेफ नियम से 2-ब्रोमोब्यूटेन व ऐल्कोहॉली KOH से मुख्य ऐल्कीन का नाम बताकर कारण दीजिए।',
      a_en: 'But-2-ene (6 α-H, more substituted, more stable) beats but-1-ene (2 α-H) because of greater hyperconjugation.',
      a_hi: 'ब्यूट-2-ईन (6 α-H, अधिक प्रतिस्थापित, अधिक स्थायी) ब्यूट-1-ईन (2 α-H) पर भारी है, अधिक अतिसंयुग्मन के कारण।',
      formula: '$$\\text{CH}_3\\text{CHBrCH}_2\\text{CH}_3\\xrightarrow{\\text{KOH(alc)}}\\text{CH}_3\\text{CH}=\\text{CHCH}_3$$'
    },
    {
      d: 'H',
      q_en: 'How does hyperconjugation explain the ortho-para directing effect of CH3 in toluene?',
      q_hi: 'अतिसंयुग्मन टॉलूईन में CH3 के ऑर्थो-पैरा निर्देशन को कैसे समझाता है?',
      a_en: 'σ(C–H) electrons of CH3 delocalise into the ring, placing partial negative charge at the ortho and para carbons (with +I).',
      a_hi: 'CH3 के σ(C–H) e⁻ वलय में विस्थानीकृत होकर ऑर्थो व पैरा कार्बनों पर आंशिक ऋणावेश देते हैं (+I के साथ)।',
      formula: '$$\\text{C}_6\\text{H}_5\\text{CH}_3:\\ \\delta^-\\ \\text{at}\\ o,\\ p$$'
    },
    {
      d: 'H',
      q_en: 'Compare 1-butene and 2-methylbut-2-ene: hyperconjugative structures and stability.',
      q_hi: 'ब्यूट-1-ईन व 2-मेथिलब्यूट-2-ईन की अतिसंयुग्मी संरचनाओं व स्थायित्व की तुलना कीजिए।',
      a_en: '1-Butene has 2 α-H, 2-methylbut-2-ene has 9. The latter is more stable and releases less heat on hydrogenation.',
      a_hi: 'ब्यूट-1-ईन में 2 α-H, 2-मेथिलब्यूट-2-ईन में 9। बाद वाला अधिक स्थायी है व हाइड्रोजनीकरण में कम ऊष्मा देता है।',
      formula: '$$\\text{CH}_3\\text{CH}_2\\text{CH}=\\text{CH}_2\\ (2)\\ \\text{vs}\\ (\\text{CH}_3)_2\\text{C}=\\text{CHCH}_3\\ (9)$$'
    }
  ],

  /* ---------- SET 13: Types of Organic Reactions ---------- */
  13: [
    {
      d: 'E',
      q_en: 'Name the four main types of organic reactions.',
      q_hi: 'कार्बनिक अभिक्रियाओं के चार मुख्य प्रकार बताइए।',
      a_en: 'Substitution, addition, elimination and rearrangement reactions.',
      a_hi: 'प्रतिस्थापन, योग, विलोपन तथा पुनर्विन्यास अभिक्रियाएँ।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What is a substitution reaction? Give examples.',
      q_hi: 'प्रतिस्थापन अभिक्रिया (substitution reaction) क्या है? उदाहरण दीजिए।',
      a_en: 'A reaction in which an atom or group is replaced by another: CH4 + Cl2 → CH3Cl + HCl; CH3Cl + OH⁻ → CH3OH + Cl⁻.',
      a_hi: 'वह अभिक्रिया जिसमें एक परमाणु/समूह दूसरे से प्रतिस्थापित होता है: CH4 + Cl2 → CH3Cl + HCl; CH3Cl + OH⁻ → CH3OH + Cl⁻।',
      formula: '$$\\text{CH}_4+\\text{Cl}_2\\xrightarrow{h\\nu}\\text{CH}_3\\text{Cl}+\\text{HCl}$$'
    },
    {
      d: 'E',
      q_en: 'What is an addition reaction? Give an example.',
      q_hi: 'योग अभिक्रिया (addition reaction) क्या है? उदाहरण दीजिए।',
      a_en: 'Reactants add across a multiple bond to give one saturated product: CH2=CH2 + HBr → CH3CH2Br.',
      a_hi: 'अभिकारक बहुबंध पर जुड़कर एक संतृप्त उत्पाद देते हैं: CH2=CH2 + HBr → CH3CH2Br।',
      formula: '$$\\text{CH}_2=\\text{CH}_2+\\text{HBr}\\rightarrow\\text{CH}_3\\text{CH}_2\\text{Br}$$'
    },
    {
      d: 'E',
      q_en: 'What is an elimination reaction? Give an example.',
      q_hi: 'विलोपन अभिक्रिया (elimination reaction) क्या है? उदाहरण दीजिए।',
      a_en: 'Two atoms or groups are removed from adjacent carbons, forming a double bond: CH3CH2Br + alc. KOH → CH2=CH2 + KBr + H2O.',
      a_hi: 'समीपस्थ कार्बनों से दो परमाणु/समूह निकलकर द्विबंध बनाते हैं: CH3CH2Br + ऐल्को. KOH → CH2=CH2 + KBr + H2O।',
      formula: '$$\\text{CH}_3\\text{CH}_2\\text{Br}\\xrightarrow{\\text{KOH(alc)}}\\text{CH}_2=\\text{CH}_2$$'
    },
    {
      d: 'E',
      q_en: 'What is a rearrangement reaction? Give an example.',
      q_hi: 'पुनर्विन्यास अभिक्रिया (rearrangement reaction) क्या है? उदाहरण दीजिए।',
      a_en: 'An atom or group migrates within a molecule to give a more stable isomer: n-butane → isobutane (AlCl3/HCl).',
      a_hi: 'अणु के भीतर परमाणु/समूह स्थानांतरित होकर अधिक स्थायी समावयवी बनाता है: n-ब्यूटेन → आइसोब्यूटेन (AlCl3/HCl)।',
      formula: '$$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_3\\xrightarrow{\\text{AlCl}_3/\\text{HCl}}(\\text{CH}_3)_3\\text{CH}$$'
    },
    {
      d: 'M',
      q_en: 'Distinguish SN1 and SN2 in steps, rate law and stereochemistry.',
      q_hi: 'SN1 व SN2 में पद, वेग नियम व त्रिविम रसायन के आधार पर अंतर बताइए।',
      a_en: 'SN1: two steps via carbocation, rate = k[RX], racemisation, 3° > 2° > 1°. SN2: one step, rate = k[RX][Nu], inversion, 1° > 2° > 3°.',
      a_hi: 'SN1: दो पद (कार्बधनायन), वेग = k[RX], रेसेमीकरण, 3° > 2° > 1°। SN2: एक पद, वेग = k[RX][Nu], प्रतिलोमन, 1° > 2° > 3°।',
      formula: '$$\\text{SN}1:\\ r=k[\\text{RX}];\\quad \\text{SN}2:\\ r=k[\\text{RX}][\\text{Nu}^-]$$'
    },
    {
      d: 'M',
      q_en: 'State Markovnikov\'s rule with an example.',
      q_hi: 'मार्कोवनिकोव नियम उदाहरण सहित बताइए।',
      a_en: 'In HX addition to an unsymmetrical alkene, H goes to the carbon with more hydrogens: CH3CH=CH2 + HBr → CH3CHBrCH3.',
      a_hi: 'असममित ऐल्कीन में HX के योग पर H अधिक हाइड्रोजन वाले कार्बन पर जाता है: CH3CH=CH2 + HBr → CH3CHBrCH3।',
      formula: '$$\\text{CH}_3\\text{CH}=\\text{CH}_2+\\text{HBr}\\rightarrow\\text{CH}_3\\text{CHBrCH}_3$$'
    },
    {
      d: 'M',
      q_en: 'Name the attacking species: Cl2/hν on CH4, nitration of benzene, HCN on a carbonyl.',
      q_hi: 'आक्रमणकारी स्पीशीज़ बताइए: CH4 पर Cl2/hν, बेंज़ीन का नाइट्रीकरण, कार्बोनिल पर HCN।',
      a_en: 'Free radical (Cl•); electrophile (NO2⁺); nucleophile (CN⁻), respectively.',
      a_hi: 'क्रमशः मुक्त मूलक (Cl•); इलेक्ट्रॉनस्नेही (NO2⁺); नाभिकस्नेही (CN⁻)।',
      formula: '$$\\text{Cl}^{\\bullet},\\ \\text{NO}_2^+,\\ \\text{CN}^-$$'
    },
    {
      d: 'M',
      q_en: 'Distinguish E1 and E2 elimination briefly.',
      q_hi: 'E1 व E2 विलोपन में संक्षेप में अंतर बताइए।',
      a_en: 'E1: two steps, carbocation first, rate = k[RX]. E2: one step, base removes β-H as the leaving group departs, rate = k[RX][B].',
      a_hi: 'E1: दो पद, पहले कार्बधनायन, वेग = k[RX]। E2: एक पद, क्षारक β-H हटाता है जबकि निर्गमी समूह जाता है, वेग = k[RX][B]।',
      formula: '$$\\text{E}2:\\ r=k[\\text{RX}][\\text{B}]$$'
    },
    {
      d: 'M',
      q_en: 'Classify: C2H5OH → C2H4 (conc. H2SO4, 443 K) and C2H5OH → C2H5OC2H5 (413 K).',
      q_hi: 'वर्गीकृत कीजिए: C2H5OH → C2H4 (सांद्र H2SO4, 443 K) तथा C2H5OH → C2H5OC2H5 (413 K)।',
      a_en: 'At 443 K: elimination (dehydration to ethene). At 413 K: nucleophilic substitution giving diethyl ether.',
      a_hi: '443 K पर: विलोपन (एथीन बनना)। 413 K पर: नाभिकस्नेही प्रतिस्थापन से डाइएथिल ईथर।',
      formula: '$$\\text{C}_2\\text{H}_5\\text{OH}\\xrightarrow{443\\ \\text{K}}\\text{C}_2\\text{H}_4$$'
    },
    {
      d: 'H',
      q_en: 'Arrange CH3Br, CH3CH2Br, (CH3)2CHBr and (CH3)3CBr by SN2 reactivity.',
      q_hi: 'CH3Br, CH3CH2Br, (CH3)2CHBr व (CH3)3CBr को SN2 अभिक्रियाशीलता के क्रम में रखिए।',
      a_en: 'CH3Br > CH3CH2Br > (CH3)2CHBr >> (CH3)3CBr. Back-side attack is blocked more by bulky alkyl groups.',
      a_hi: 'CH3Br > CH3CH2Br > (CH3)2CHBr >> (CH3)3CBr। स्थूल ऐल्किल समूह पश्च-आक्रमण को अधिक अवरुद्ध करते हैं।',
      formula: '$$\\text{CH}_3\\gt1^\\circ\\gt2^\\circ\\gg3^\\circ$$'
    },
    {
      d: 'H',
      q_en: 'Why does SN1 racemise an optically active halide while SN2 inverts it?',
      q_hi: 'SN1 प्रकाशीय सक्रिय हैलाइड का रेसेमीकरण करता है जबकि SN2 प्रतिलोमन, क्यों?',
      a_en: 'SN1: the planar carbocation is attacked from both faces. SN2: Nu⁻ attacks from the side opposite the leaving group (Walden inversion).',
      a_hi: 'SN1: समतलीय कार्बधनायन पर दोनों फलकों से आक्रमण। SN2: Nu⁻ निर्गमी समूह के विपरीत ओर से आक्रमण करता है (वाल्डेन प्रतिलोमन)।',
      formula: '$$(+)\\text{-RX}\\xrightarrow{\\text{SN}1}(\\pm);\\quad(+)\\text{-RX}\\xrightarrow{\\text{SN}2}(-)$$'
    },
    {
      d: 'H',
      q_en: 'Which HX adds anti-Markovnikov and under what condition?',
      q_hi: 'कौन-सा HX प्रति-मार्कोवनिकोव योग देता है और किस परिस्थिति में?',
      a_en: 'Only HBr, in presence of peroxides (Kharasch effect): a free-radical chain; Br• adds first to give the more stable radical.',
      a_hi: 'केवल HBr, परॉक्साइड की उपस्थिति में (खराश प्रभाव): मुक्त मूलक शृंखला; Br• पहले जुड़कर अधिक स्थायी मूलक बनाता है।',
      formula: '$$\\text{CH}_3\\text{CH}=\\text{CH}_2+\\text{HBr}\\xrightarrow{\\text{ROOR}}\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{Br}$$'
    },
    {
      d: 'H',
      q_en: 'Neopentyl bromide gives a tert-amyl product by SN1. Explain this rearrangement.',
      q_hi: 'निओपेन्टिल ब्रोमाइड SN1 से tert-ऐमिल उत्पाद देता है। इस पुनर्विन्यास को समझाइए।',
      a_en: 'The 1° neopentyl cation undergoes a 1,2-methyl shift to the more stable 3° tert-amyl cation, which then captures the nucleophile.',
      a_hi: '1° निओपेन्टिल कार्बधनायन 1,2-मेथिल स्थानांतरण से अधिक स्थायी 3° tert-ऐमिल कार्बधनायन बनाता है, जो नाभिकस्नेही ग्रहण करता है।',
      formula: '$$(\\text{CH}_3)_3\\text{C-CH}_2^+\\rightarrow(\\text{CH}_3)_2\\overset{+}{\\text{C}}\\text{-CH}_2\\text{CH}_3$$'
    },
    {
      d: 'H',
      q_en: '3,3-Dimethylbutan-2-ol with HBr gives 2-bromo-2,3-dimethylbutane. Explain.',
      q_hi: '3,3-डाइमेथिलब्यूटेन-2-ऑल HBr से 2-ब्रोमो-2,3-डाइमेथिलब्यूटेन देता है। समझाइए।',
      a_en: 'A 2° cation forms, then a 1,2-methyl shift gives the more stable 3° cation, which captures Br⁻ (rearrangement).',
      a_hi: '2° कार्बधनायन बनता है, फिर 1,2-मेथिल स्थानांतरण से अधिक स्थायी 3° कार्बधनायन बनकर Br⁻ ग्रहण करता है (पुनर्विन्यास)।',
      formula: '$$2^\\circ\\ \\text{cation}\\xrightarrow{\\text{CH}_3\\ \\text{shift}}3^\\circ\\ \\text{cation}$$'
    }
  ],

  /* ---------- SET 14: Qualitative Analysis of Organic Compounds ---------- */
  14: [
    {
      d: 'E',
      q_en: 'How are carbon and hydrogen detected in an organic compound?',
      q_hi: 'कार्बनिक यौगिक में कार्बन व हाइड्रोजन का परीक्षण कैसे करते हैं?',
      a_en: 'Heat with dry CuO: C gives CO2 (turns lime water milky); H gives H2O (turns anhydrous CuSO4 blue).',
      a_hi: 'शुष्क CuO के साथ गर्म करें: C से CO2 (चूने का पानी दूधिया); H से H2O (निर्जल CuSO4 नीला)।',
      formula: '$$\\text{C}+2\\text{CuO}\\rightarrow\\text{CO}_2+2\\text{Cu};\\ \\ 2\\text{H}+\\text{CuO}\\rightarrow\\text{H}_2\\text{O}+\\text{Cu}$$'
    },
    {
      d: 'E',
      q_en: 'Why is sodium fusion used in Lassaigne\'s test?',
      q_hi: 'लैसेन परीक्षण में सोडियम संगलन (sodium fusion) क्यों किया जाता है?',
      a_en: 'It converts covalently bonded N, S and halogens into ionic, water-soluble NaCN, Na2S and NaX.',
      a_hi: 'यह सहसंयोजी N, S व हैलोजनों को आयनिक, जल-विलेय NaCN, Na2S व NaX में बदल देता है।',
      formula: '$$\\text{Na}+\\text{C}+\\text{N}\\rightarrow\\text{NaCN};\\ \\ 2\\text{Na}+\\text{S}\\rightarrow\\text{Na}_2\\text{S}$$'
    },
    {
      d: 'E',
      q_en: 'Describe Lassaigne\'s test for nitrogen.',
      q_hi: 'नाइट्रोजन के लिए लैसेन परीक्षण का वर्णन कीजिए।',
      a_en: 'Boil the extract with FeSO4 and NaOH, then acidify with conc. H2SO4. Prussian blue colour shows nitrogen.',
      a_hi: 'निष्कर्ष को FeSO4 व NaOH के साथ उबालें, फिर सांद्र H2SO4 से अम्लीकृत करें। प्रशियन ब्लू रंग N दर्शाता है।',
      formula: '$$3[\\text{Fe(CN)}_6]^{4-}+4\\text{Fe}^{3+}\\rightarrow\\text{Fe}_4[\\text{Fe(CN)}_6]_3$$'
    },
    {
      d: 'E',
      q_en: 'How are halogens detected in the sodium fusion extract?',
      q_hi: 'सोडियम संगलन निष्कर्ष में हैलोजनों का परीक्षण कैसे होता है?',
      a_en: 'Acidify with HNO3, add AgNO3: white AgCl (soluble in NH4OH), pale yellow AgBr (sparingly soluble), yellow AgI (insoluble).',
      a_hi: 'HNO3 से अम्लीकृत कर AgNO3 मिलाएँ: श्वेत AgCl (NH4OH में विलेय), हल्का पीला AgBr (अल्प विलेय), पीला AgI (अविलेय)।',
      formula: '$$\\text{X}^-+\\text{Ag}^+\\rightarrow\\text{AgX}\\downarrow$$'
    },
    {
      d: 'E',
      q_en: 'How is sulphur detected in the sodium fusion extract?',
      q_hi: 'सोडियम संगलन निष्कर्ष में सल्फर का परीक्षण कैसे होता है?',
      a_en: 'Sodium nitroprusside gives a violet/purple colour; alternatively acetic acid and lead acetate give a black PbS precipitate.',
      a_hi: 'सोडियम नाइट्रोप्रुसाइड से बैंगनी रंग; या ऐसीटिक अम्ल व लेड ऐसीटेट से काला PbS अवक्षेप।',
      formula: '$$\\text{S}^{2-}+[\\text{Fe(CN)}_5\\text{NO}]^{2-}\\rightarrow[\\text{Fe(CN)}_5\\text{NOS}]^{4-}$$'
    },
    {
      d: 'M',
      q_en: 'Why is the extract boiled with HNO3 before adding AgNO3?',
      q_hi: 'AgNO3 मिलाने से पहले निष्कर्ष को HNO3 के साथ क्यों उबालते हैं?',
      a_en: 'To expel NaCN and Na2S as HCN and H2S; otherwise AgCN and Ag2S would precipitate and interfere.',
      a_hi: 'NaCN व Na2S को HCN व H2S के रूप में निकालने के लिए; अन्यथा AgCN व Ag2S अवक्षेपित होकर बाधा डालते।',
      formula: '$$\\text{NaCN}+\\text{HNO}_3\\rightarrow\\text{HCN}\\uparrow+\\text{NaNO}_3$$'
    },
    {
      d: 'M',
      q_en: 'What colour appears when both N and S are present, and why?',
      q_hi: 'N व S दोनों उपस्थित होने पर कौन-सा रंग आता है और क्यों?',
      a_en: 'Blood red, due to [Fe(SCN)]²⁺, because sodium thiocyanate NaSCN forms during fusion; no Prussian blue is seen.',
      a_hi: 'रक्त-लाल, [Fe(SCN)]²⁺ के कारण, क्योंकि संगलन में सोडियम थायोसायनेट NaSCN बनता है; प्रशियन ब्लू नहीं दिखता।',
      formula: '$$\\text{Na}+\\text{C}+\\text{N}+\\text{S}\\rightarrow\\text{NaSCN}$$'
    },
    {
      d: 'M',
      q_en: 'How is phosphorus detected in an organic compound?',
      q_hi: 'कार्बनिक यौगिक में फॉस्फोरस का परीक्षण कैसे करते हैं?',
      a_en: 'Fuse with Na2O2 to form phosphate, boil with HNO3, add ammonium molybdate: yellow ammonium phosphomolybdate.',
      a_hi: 'Na2O2 से संगलित कर फॉस्फेट बनाएँ, HNO3 के साथ उबालें, अमोनियम मॉलिब्डेट मिलाएँ: पीला अमोनियम फॉस्फोमॉलिब्डेट।',
      formula: '$$\\text{H}_3\\text{PO}_4+12(\\text{NH}_4)_2\\text{MoO}_4+21\\text{HNO}_3\\rightarrow(\\text{NH}_4)_3\\text{PO}_4\\cdot12\\text{MoO}_3+21\\text{NH}_4\\text{NO}_3+12\\text{H}_2\\text{O}$$'
    },
    {
      d: 'M',
      q_en: 'Why are FeSO4 and conc. H2SO4 used in the Prussian blue test?',
      q_hi: 'प्रशियन ब्लू परीक्षण में FeSO4 व सांद्र H2SO4 क्यों प्रयुक्त होते हैं?',
      a_en: 'FeSO4 supplies Fe²⁺ to form [Fe(CN)6]⁴⁻; air oxidises some to Fe³⁺. The acid dissolves iron hydroxides so the blue colour shows.',
      a_hi: 'FeSO4 Fe²⁺ देकर [Fe(CN)6]⁴⁻ बनाता है; वायु कुछ को Fe³⁺ में ऑक्सीकृत करती है। अम्ल आयरन हाइड्रॉक्साइड घोलकर नीला रंग दिखाता है।',
      formula: '$$\\text{Fe}^{2+}+6\\text{CN}^-\\rightarrow[\\text{Fe(CN)}_6]^{4-}$$'
    },
    {
      d: 'M',
      q_en: 'How is the sodium fusion (Lassaigne) extract prepared?',
      q_hi: 'सोडियम संगलन (लैसेन) निष्कर्ष कैसे बनाया जाता है?',
      a_en: 'Heat the compound with sodium metal in a dry tube to red heat, plunge the tube into distilled water, break it, boil and filter.',
      a_hi: 'यौगिक को सोडियम धातु के साथ शुष्क नली में लाल तप्त करें, नली को आसुत जल में डुबोकर तोड़ें, उबालें व छानें।',
      formula: '$$\\text{compound}+\\text{Na}\\xrightarrow{\\Delta}\\text{NaCN},\\ \\text{Na}_2\\text{S},\\ \\text{NaX}$$'
    },
    {
      d: 'H',
      q_en: 'Why can Lassaigne\'s test miss nitrogen in diazonium salts and in hydrazine?',
      q_hi: 'लैसेन परीक्षण डाइऐज़ोनियम लवणों व हाइड्रैज़ीन में नाइट्रोजन क्यों नहीं पकड़ पाता?',
      a_en: 'Diazo N is lost as N2 on strong heating before NaCN forms; hydrazine (N2H4) has no carbon, so NaCN cannot form.',
      a_hi: 'प्रबल ऊष्मा पर डाइऐज़ो का N, NaCN बनने से पहले N2 बनकर निकल जाता है; हाइड्रैज़ीन (N2H4) में कार्बन नहीं, NaCN नहीं बनता।',
      formula: '$$\\text{Na}+\\text{C}+\\text{N}\\rightarrow\\text{NaCN}\\ (\\text{C needed})$$'
    },
    {
      d: 'H',
      q_en: 'Is fluorine detected by Lassaigne\'s test with AgNO3? Why?',
      q_hi: 'क्या AgNO3 वाले लैसेन परीक्षण से फ्लुओरीन पकड़ी जाती है? क्यों?',
      a_en: 'No. AgF is soluble in water, so no precipitate forms; F⁻ needs a different test.',
      a_hi: 'नहीं। AgF जल में विलेय है, अतः अवक्षेप नहीं बनता; F⁻ के लिए अन्य परीक्षण चाहिए।',
      formula: '$$\\text{AgF}:\\ \\text{soluble}$$'
    },
    {
      d: 'H',
      q_en: 'How does excess sodium change the result when both N and S are present?',
      q_hi: 'N व S दोनों उपस्थित होने पर अतिरिक्त सोडियम परिणाम को कैसे बदलता है?',
      a_en: 'NaSCN is decomposed to NaCN and Na2S, so N gives Prussian blue and S gives violet with nitroprusside separately.',
      a_hi: 'NaSCN, NaCN व Na2S में टूटता है, अतः N प्रशियन ब्लू देता है तथा S नाइट्रोप्रुसाइड से बैंगनी रंग देता है।',
      formula: '$$\\text{NaSCN}+2\\text{Na}\\rightarrow\\text{NaCN}+\\text{Na}_2\\text{S}$$'
    },
    {
      d: 'H',
      q_en: 'Why is lead acetate test for sulphur done in acetic acid and not in HCl or H2SO4?',
      q_hi: 'सल्फर के लिए लेड ऐसीटेट परीक्षण ऐसीटिक अम्ल में ही क्यों, HCl या H2SO4 में क्यों नहीं?',
      a_en: 'HCl or H2SO4 would give white PbCl2 or PbSO4 with lead acetate, masking black PbS. Acetic acid avoids this.',
      a_hi: 'HCl या H2SO4 लेड ऐसीटेट से श्वेत PbCl2 या PbSO4 देकर काले PbS को छिपा देते। ऐसीटिक अम्ल ऐसा नहीं करता।',
      formula: '$$\\text{S}^{2-}+\\text{Pb}^{2+}\\rightarrow\\text{PbS}\\downarrow\\ (\\text{black})$$'
    },
    {
      d: 'H',
      q_en: 'Give the formula of Prussian blue and the oxidation state of each iron.',
      q_hi: 'प्रशियन ब्लू का सूत्र तथा प्रत्येक आयरन की ऑक्सीकरण अवस्था बताइए।',
      a_en: 'Fe4[Fe(CN)6]3: four Fe³⁺ outside, and three Fe²⁺ inside the hexacyanoferrate(II) ions (ferric ferrocyanide).',
      a_hi: 'Fe4[Fe(CN)6]3: बाहर चार Fe³⁺ तथा हेक्सासायनोफेरेट(II) आयनों के भीतर तीन Fe²⁺ (फेरिक फेरोसायनाइड)।',
      formula: '$$\\text{Fe}^{3+}_4[\\text{Fe}^{2+}(\\text{CN})_6]_3$$'
    }
  ],

  /* ---------- SET 15: Quantitative Analysis of Organic Compounds ---------- */
  15: [
    {
      d: 'E',
      q_en: 'Write the formulas for % C and % H in Liebig\'s method.',
      q_hi: 'लीबिग विधि में % C व % H के सूत्र लिखिए।',
      a_en: '% C = (12/44) × (w of CO2 / w) × 100; % H = (2/18) × (w of H2O / w) × 100.',
      a_hi: '% C = (12/44) × (CO2 का द्रव्यमान / w) × 100; % H = (2/18) × (H2O का द्रव्यमान / w) × 100।',
      formula: '$$\\%\\text{C}=\\frac{12}{44}\\times\\frac{w_{\\text{CO}_2}}{w}\\times100;\\ \\ \\%\\text{H}=\\frac{2}{18}\\times\\frac{w_{\\text{H}_2\\text{O}}}{w}\\times100$$'
    },
    {
      d: 'E',
      q_en: 'In Liebig\'s method, which substances absorb H2O and CO2?',
      q_hi: 'लीबिग विधि में H2O व CO2 को कौन-से पदार्थ अवशोषित करते हैं?',
      a_en: 'Anhydrous CaCl2 absorbs H2O (first tube); concentrated KOH solution absorbs CO2 (second tube).',
      a_hi: 'निर्जल CaCl2 H2O अवशोषित करता है (पहली नली); सांद्र KOH विलयन CO2 अवशोषित करता है (दूसरी नली)।',
      formula: '$$\\text{CO}_2+2\\text{KOH}\\rightarrow\\text{K}_2\\text{CO}_3+\\text{H}_2\\text{O}$$'
    },
    {
      d: 'E',
      q_en: 'What does the Dumas method estimate? State the % N formula.',
      q_hi: 'ड्यूमा विधि क्या आकलित करती है? % N का सूत्र लिखिए।',
      a_en: 'Nitrogen: N2 is collected over KOH solution. % N = 28 × V0 × 100 / (22400 × w), V0 = volume of N2 at STP in mL.',
      a_hi: 'नाइट्रोजन: N2 KOH विलयन पर एकत्र होती है। % N = 28 × V0 × 100 / (22400 × w), V0 = STP पर N2 का आयतन (mL)।',
      formula: '$$\\%\\text{N}=\\frac{28\\times V_0\\times100}{22400\\times w}$$'
    },
    {
      d: 'E',
      q_en: 'Outline Kjeldahl\'s method and its % N formula.',
      q_hi: 'क्जेल्डाल विधि की रूपरेखा व % N का सूत्र बताइए।',
      a_en: 'Digest with conc. H2SO4 to (NH4)2SO4, boil with NaOH, absorb NH3 in standard H2SO4. % N = 1.4 × N × V / w (N = normality of acid used, V in mL).',
      a_hi: 'सांद्र H2SO4 से (NH4)2SO4, NaOH से उबालकर NH3, मानक H2SO4 में अवशोषण। % N = 1.4 × N × V / w (N = प्रयुक्त अम्ल की नॉर्मलता)।',
      formula: '$$\\%\\text{N}=\\frac{1.4\\times N\\times V}{w}$$'
    },
    {
      d: 'E',
      q_en: 'What does the Carius method estimate and how?',
      q_hi: 'कैरियस विधि क्या आकलित करती है और कैसे?',
      a_en: 'Halogens and sulphur: heat with fuming HNO3 (plus AgNO3 for halogens) in a sealed tube; weigh the AgX or BaSO4 precipitate.',
      a_hi: 'हैलोजन व सल्फर: सीलबंद नली में धूमन HNO3 (हैलोजन के लिए AgNO3 सहित) से गर्म करें; AgX या BaSO4 अवक्षेप तौलें।',
      formula: '$$\\%\\text{Cl}=\\frac{35.5}{143.5}\\times\\frac{m_1}{m}\\times100$$'
    },
    {
      d: 'M',
      q_en: '0.30 g of a compound gives 0.44 g CO2 and 0.18 g H2O. Find % C and % H.',
      q_hi: '0.30 g यौगिक से 0.44 g CO2 व 0.18 g H2O मिलते हैं। % C व % H ज्ञात कीजिए।',
      a_en: '% C = (12/44)(0.44/0.30)(100) = 40.0; % H = (2/18)(0.18/0.30)(100) = 6.67.',
      a_hi: '% C = (12/44)(0.44/0.30)(100) = 40.0; % H = (2/18)(0.18/0.30)(100) = 6.67।',
      formula: '$$\\%\\text{C}=40.0,\\ \\ \\%\\text{H}=6.67$$'
    },
    {
      d: 'M',
      q_en: 'In Dumas\' method 0.28 g of a compound gives 22.4 mL N2 at STP. Find % N.',
      q_hi: 'ड्यूमा विधि में 0.28 g यौगिक STP पर 22.4 mL N2 देता है। % N ज्ञात कीजिए।',
      a_en: '% N = 28 × 22.4 × 100 / (22400 × 0.28) = 10.0.',
      a_hi: '% N = 28 × 22.4 × 100 / (22400 × 0.28) = 10.0।',
      formula: '$$\\%\\text{N}=\\frac{28\\times22.4\\times100}{22400\\times0.28}=10.0$$'
    },
    {
      d: 'M',
      q_en: 'Kjeldahl: 0.7 g of a compound; the NH3 formed neutralises 10 mL of 0.5 N H2SO4. Find % N.',
      q_hi: 'क्जेल्डाल: 0.7 g यौगिक से बनी NH3, 10 mL 0.5 N H2SO4 को उदासीन करती है। % N ज्ञात कीजिए।',
      a_en: '% N = 1.4 × 0.5 × 10 / 0.7 = 10.0.',
      a_hi: '% N = 1.4 × 0.5 × 10 / 0.7 = 10.0।',
      formula: '$$\\%\\text{N}=\\frac{1.4\\times0.5\\times10}{0.7}=10.0$$'
    },
    {
      d: 'M',
      q_en: 'Carius: 0.2 g of a chloro compound gives 0.287 g AgCl. Find % Cl.',
      q_hi: 'कैरियस: 0.2 g क्लोरो यौगिक से 0.287 g AgCl मिलता है। % Cl ज्ञात कीजिए।',
      a_en: '% Cl = (35.5/143.5)(0.287/0.2)(100) = 35.5.',
      a_hi: '% Cl = (35.5/143.5)(0.287/0.2)(100) = 35.5।',
      formula: '$$\\%\\text{Cl}=\\frac{35.5}{143.5}\\times\\frac{0.287}{0.2}\\times100=35.5$$'
    },
    {
      d: 'M',
      q_en: 'Carius: 0.16 g of a compound gives 0.233 g BaSO4. Find % S.',
      q_hi: 'कैरियस: 0.16 g यौगिक से 0.233 g BaSO4 मिलता है। % S ज्ञात कीजिए।',
      a_en: '% S = (32/233)(0.233/0.16)(100) = 20.0.',
      a_hi: '% S = (32/233)(0.233/0.16)(100) = 20.0।',
      formula: '$$\\%\\text{S}=\\frac{32}{233}\\times\\frac{0.233}{0.16}\\times100=20.0$$'
    },
    {
      d: 'H',
      q_en: 'Why does Kjeldahl\'s method fail for nitro, azo compounds and pyridine?',
      q_hi: 'क्जेल्डाल विधि नाइट्रो, ऐज़ो यौगिकों व पिरिडीन के लिए असफल क्यों है?',
      a_en: 'Their nitrogen is not quantitatively converted to (NH4)2SO4 on digestion. Dumas\' method works for all nitrogenous compounds.',
      a_hi: 'पाचन में इनका नाइट्रोजन मात्रात्मक रूप से (NH4)2SO4 में नहीं बदलता। ड्यूमा विधि सभी नाइट्रोजनी यौगिकों पर काम करती है।',
      formula: '$$\\text{-NO}_2,\\ \\text{-N=N-},\\ \\text{ring N}\\ \\Rightarrow\\ \\text{Dumas only}$$'
    },
    {
      d: 'H',
      q_en: '0.62 g of a compound gives 0.444 g Mg2P2O7. Find % P (M of Mg2P2O7 = 222).',
      q_hi: '0.62 g यौगिक से 0.444 g Mg2P2O7 मिलता है। % P ज्ञात कीजिए (Mg2P2O7 का M = 222)।',
      a_en: 'P → H3PO4 → MgNH4PO4 → Mg2P2O7. % P = (62/222)(0.444/0.62)(100) = 20.0.',
      a_hi: 'P → H3PO4 → MgNH4PO4 → Mg2P2O7। % P = (62/222)(0.444/0.62)(100) = 20.0।',
      formula: '$$\\%\\text{P}=\\frac{62}{222}\\times\\frac{0.444}{0.62}\\times100=20.0$$'
    },
    {
      d: 'H',
      q_en: 'Direct oxygen estimation: 0.5 g compound gives 0.44 g CO2 via the I2O5 route. Find % O.',
      q_hi: 'प्रत्यक्ष ऑक्सीजन आकलन: 0.5 g यौगिक से I2O5 विधि द्वारा 0.44 g CO2 मिलता है। % O ज्ञात कीजिए।',
      a_en: 'O → CO (over coke) → CO2 with I2O5. Each O gives one CO2: % O = (16/44)(0.44/0.5)(100) = 32.0.',
      a_hi: 'O → CO (कोक पर) → I2O5 से CO2। प्रत्येक O एक CO2 देता है: % O = (16/44)(0.44/0.5)(100) = 32.0।',
      formula: '$$5\\text{CO}+\\text{I}_2\\text{O}_5\\rightarrow\\text{I}_2+5\\text{CO}_2$$'
    },
    {
      d: 'H',
      q_en: 'A compound has 40% C and 6.67% H, rest O, with M = 180. Find its molecular formula.',
      q_hi: 'एक यौगिक में 40% C, 6.67% H, शेष O है तथा M = 180। आण्विक सूत्र ज्ञात कीजिए।',
      a_en: '% O by difference = 53.33. Empirical formula CH2O (30); n = 180/30 = 6; molecular formula C6H12O6.',
      a_hi: '% O अंतर से = 53.33। मूलानुपाती सूत्र CH2O (30); n = 180/30 = 6; आण्विक सूत्र C6H12O6।',
      formula: '$$\\%\\text{O}=100-(40+6.67)=53.33$$'
    },
    {
      d: 'H',
      q_en: 'In Dumas\' method, why is aqueous tension subtracted from atmospheric pressure?',
      q_hi: 'ड्यूमा विधि में वायुमंडलीय दाब में से जलीय तनाव (aqueous tension) क्यों घटाया जाता है?',
      a_en: 'N2 is collected over KOH solution, so it is saturated with water vapour; only p − aq. tension is the pressure of N2.',
      a_hi: 'N2 KOH विलयन पर एकत्र होती है, अतः जलवाष्प से संतृप्त है; N2 का दाब केवल p − जलीय तनाव होता है।',
      formula: '$$V_0=\\frac{p_1V_1\\times273}{760\\times T_1},\\ \\ p_1=p-\\text{aq. tension}$$'
    }
  ]

};
