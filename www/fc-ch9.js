/* ==========================================================================
   CHEMISTRY EXPLORER - Class 11 Chemistry
   Chapter 9: Hydrocarbons
   Flashcard database: 15 sets x 15 cards = 225 hand-crafted cards
   Each set: 5 Easy (E) + 5 Medium (M) + 5 Hard (H)
   Read by buildDeck(ch, s) via window.FLASHCARD_SETS_DB[chId][setNum]
   ========================================================================== */
window.FLASHCARD_SETS_DB = window.FLASHCARD_SETS_DB || {};
window.FLASHCARD_SETS_DB.ch9 = {

  /* ---------- SET 1: Classification of Hydrocarbons, Alkane Structure & Chain Isomerism ---------- */
  1: [
    {
      d: 'E',
      q_en: 'Give the general formulae of alkanes, alkenes and alkynes.',
      q_hi: 'ऐल्केन, ऐल्कीन व ऐल्काइन के सामान्य सूत्र लिखिए।',
      a_en: 'Alkanes CnH2n+2 (saturated); alkenes CnH2n and alkynes CnH2n-2 (both unsaturated).',
      a_hi: 'ऐल्केन CnH2n+2 (संतृप्त); ऐल्कीन CnH2n व ऐल्काइन CnH2n-2 (दोनों असंतृप्त)।',
      formula: '$$\\text{C}_n\\text{H}_{2n+2},\\ \\text{C}_n\\text{H}_{2n},\\ \\text{C}_n\\text{H}_{2n-2}$$'
    },
    {
      d: 'E',
      q_en: 'What is the hybridisation and geometry of each carbon in alkanes?',
      q_hi: 'ऐल्केनों में प्रत्येक कार्बन की संकरण अवस्था व ज्यामिति क्या है?',
      a_en: 'sp3 hybridised; tetrahedral geometry with bond angle 109.5°.',
      a_hi: 'sp3 संकरित; चतुष्फलकीय (tetrahedral) ज्यामिति, आबंध कोण 109.5°।',
      formula: '$$sp^3,\\ \\angle\\text{H–C–H}=109.5^\\circ$$'
    },
    {
      d: 'E',
      q_en: 'State the C–C and C–H bond lengths in alkanes.',
      q_hi: 'ऐल्केनों में C–C व C–H आबंध लंबाइयाँ बताइए।',
      a_en: 'C–C bond length is 154 pm and C–H bond length is 112 pm.',
      a_hi: 'C–C आबंध लंबाई 154 pm तथा C–H आबंध लंबाई 112 pm होती है।',
      formula: '$$d_{\\text{C–C}}=154\\text{ pm},\\ d_{\\text{C–H}}=112\\text{ pm}$$'
    },
    {
      d: 'E',
      q_en: 'Name the three chain isomers of C5H12.',
      q_hi: 'C5H12 के तीन शृंखला समावयवियों के नाम लिखिए।',
      a_en: 'n-Pentane, isopentane (2-methylbutane) and neopentane (2,2-dimethylpropane).',
      a_hi: 'n-पेन्टेन, आइसोपेन्टेन (2-मेथिलब्यूटेन) तथा निओपेन्टेन (2,2-डाइमेथिलप्रोपेन)।',
      formula: '$$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{CH}_3,\\ (\\text{CH}_3)_2\\text{CHCH}_2\\text{CH}_3,\\ (\\text{CH}_3)_4\\text{C}$$'
    },
    {
      d: 'E',
      q_en: 'What are cycloalkanes? Give their general formula.',
      q_hi: 'चक्रीय ऐल्केन (cycloalkanes) क्या हैं? सामान्य सूत्र दीजिए।',
      a_en: 'Saturated hydrocarbons with a carbon ring; general formula CnH2n (same as alkenes).',
      a_hi: 'कार्बन वलय वाले संतृप्त हाइड्रोकार्बन; सामान्य सूत्र CnH2n (ऐल्कीनों के समान)।',
      formula: '$$\\text{C}_n\\text{H}_{2n}\\ (n\\geq3)$$'
    },
    {
      d: 'M',
      q_en: 'How many chain isomers does C4H10 have? Write them.',
      q_hi: 'C4H10 के कितने शृंखला समावयवी हैं? लिखिए।',
      a_en: 'Two: n-butane (straight chain) and isobutane (2-methylpropane, branched).',
      a_hi: 'दो: n-ब्यूटेन (सीधी शृंखला) व आइसोब्यूटेन (2-मेथिलप्रोपेन, शाखित)।',
      formula: '$$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_3,\\ (\\text{CH}_3)_3\\text{CH}$$'
    },
    {
      d: 'M',
      q_en: 'How many structural (chain) isomers are possible for C6H14?',
      q_hi: 'C6H14 के कितने संरचनात्मक (शृंखला) समावयवी संभव हैं?',
      a_en: 'Five: n-hexane, 2-methylpentane, 3-methylpentane, 2,2-dimethylbutane, 2,3-dimethylbutane.',
      a_hi: 'पाँच: n-हेक्सेन, 2-मेथिलपेन्टेन, 3-मेथिलपेन्टेन, 2,2-डाइमेथिलब्यूटेन, 2,3-डाइमेथिलब्यूटेन।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Count 1°, 2°, 3°, 4° carbons in 2,2,4-trimethylpentane.',
      q_hi: '2,2,4-ट्राइमेथिलपेन्टेन में 1°, 2°, 3°, 4° कार्बनों की गिनती कीजिए।',
      a_en: '1° = 5, 2° = 1 (C-3), 3° = 1 (C-4), 4° = 1 (C-2). Total 8 carbons.',
      a_hi: '1° = 5, 2° = 1 (C-3), 3° = 1 (C-4), 4° = 1 (C-2)। कुल 8 कार्बन।',
      formula: '$$(\\text{CH}_3)_3\\text{C–CH}_2\\text{–CH(CH}_3)_2$$'
    },
    {
      d: 'M',
      q_en: 'Number of isomers of C7H16? Of C8H18?',
      q_hi: 'C7H16 के कितने समावयवी होते हैं? और C8H18 के?',
      a_en: 'C7H16 has 9 isomers; C8H18 has 18 isomers. Isomers grow rapidly with carbon number.',
      a_hi: 'C7H16 के 9 तथा C8H18 के 18 समावयवी। कार्बन संख्या बढ़ने पर समावयवी तेज़ी से बढ़ते हैं।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'How many 1° hydrogens are there in neopentane?',
      q_hi: 'निओपेन्टेन में 1° हाइड्रोजन कितने हैं?',
      a_en: 'All 12 hydrogens are 1°, since each CH3 group is attached to the central 4° carbon.',
      a_hi: 'सभी 12 हाइड्रोजन 1° हैं, क्योंकि प्रत्येक CH3 केंद्रीय 4° कार्बन से जुड़ा है।',
      formula: '$$\\text{C}(\\text{CH}_3)_4\\Rightarrow12\\ \\text{H}\\ (1^\\circ)$$'
    },
    {
      d: 'H',
      q_en: 'Why does a 4° hydrogen not exist, though 4° carbon does?',
      q_hi: '4° कार्बन होता है, फिर 4° हाइड्रोजन क्यों नहीं होता?',
      a_en: 'H class = class of the carbon it sits on. A 4° carbon has all 4 valencies used on carbons, so no H.',
      a_hi: 'H का वर्ग = जिस C से जुड़ा उसका वर्ग। 4° C की चारों संयोजकताएँ C से भरी हैं, अतः H नहीं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Which C5H12 isomer gives only one monochloro derivative?',
      q_hi: 'C5H12 का कौन-सा समावयवी केवल एक मोनोक्लोरो व्युत्पन्न देता है?',
      a_en: 'Neopentane (all 12 H equivalent). n-Pentane gives 3 and isopentane gives 4 monochlorides.',
      a_hi: 'निओपेन्टेन (सभी 12 H समतुल्य)। n-पेन्टेन 3 व आइसोपेन्टेन 4 मोनोक्लोराइड देते हैं।',
      formula: '$$\\text{C}(\\text{CH}_3)_4\\xrightarrow{\\text{Cl}_2/h\\nu}\\text{C}(\\text{CH}_3)_3\\text{CH}_2\\text{Cl}$$'
    },
    {
      d: 'H',
      q_en: 'Trap: CnH2n-2 is always an alkyne. True or false?',
      q_hi: 'जाल: CnH2n-2 सदैव ऐल्काइन ही होता है। सही या गलत?',
      a_en: 'False. It can also be an alkadiene or a cycloalkene (e.g. C4H6: butyne, 1,3-butadiene, cyclobutene).',
      a_hi: 'गलत। यह ऐल्काडाइईन या साइक्लोऐल्कीन भी हो सकता है (जैसे C4H6: ब्यूटाइन, 1,3-ब्यूटाडाइईन)।',
      formula: '$$\\text{C}_4\\text{H}_6:\\ \\text{HC}\\equiv\\text{C–C}_2\\text{H}_5,\\ \\text{CH}_2\\text{=CH–CH=CH}_2$$'
    },
    {
      d: 'H',
      q_en: 'Name a cycloalkane that is a ring-chain isomer of propene.',
      q_hi: 'प्रोपीन का वलय-शृंखला समावयवी कौन-सा साइक्लोऐल्केन है?',
      a_en: 'Cyclopropane (C3H6). Cycloalkanes share CnH2n with alkenes, so ring-chain isomerism occurs.',
      a_hi: 'साइक्लोप्रोपेन (C3H6)। साइक्लोऐल्केन व ऐल्कीन का सूत्र CnH2n समान, अतः वलय-शृंखला समावयवता।',
      formula: '$$\\text{CH}_3\\text{CH=CH}_2\\ \\longleftrightarrow\\ \\triangle\\ (\\text{C}_3\\text{H}_6)$$'
    },
    {
      d: 'H',
      q_en: 'In 2,2,4-trimethylpentane, how many 1°, 2° and 3° hydrogens exist?',
      q_hi: '2,2,4-ट्राइमेथिलपेन्टेन में 1°, 2° व 3° हाइड्रोजन कितने हैं?',
      a_en: '1° H = 15 (five CH3), 2° H = 2 (one CH2), 3° H = 1 (one CH). Total 18 H (C8H18).',
      a_hi: '1° H = 15 (पाँच CH3), 2° H = 2 (एक CH2), 3° H = 1 (एक CH)। कुल 18 H (C8H18)।',
      formula: '$$15\\ (1^\\circ)+2\\ (2^\\circ)+1\\ (3^\\circ)=18$$'
    }
  ],

  /* ---------- SET 2: Preparation of Alkanes ---------- */
  2: [
    {
      d: 'E',
      q_en: 'What is catalytic hydrogenation (Sabatier–Senderens) of alkenes?',
      q_hi: 'ऐल्कीनों का उत्प्रेरकीय हाइड्रोजनीकरण (सबाटियर–सेन्डरेन्स) क्या है?',
      a_en: 'Addition of H2 to alkenes/alkynes over Pt or Pd at room temp (or Ni at 523–573 K) to give alkanes.',
      a_hi: 'Pt/Pd पर कक्ष ताप (या Ni पर 523–573 K) H2 जोड़कर ऐल्केन बनाना।',
      formula: '$$\\text{CH}_2\\text{=CH}_2+\\text{H}_2\\xrightarrow{\\text{Pt/Pd/Ni}}\\text{CH}_3\\text{CH}_3$$'
    },
    {
      d: 'E',
      q_en: 'How many moles of H2 convert an alkyne into an alkane?',
      q_hi: 'ऐल्काइन को ऐल्केन में बदलने के लिए H2 के कितने मोल लगते हैं?',
      a_en: 'Two moles of H2 (alkyne → alkene → alkane) with Pt, Pd or Ni.',
      a_hi: 'H2 के दो मोल (ऐल्काइन → ऐल्कीन → ऐल्केन), Pt, Pd या Ni उत्प्रेरक के साथ।',
      formula: '$$\\text{HC}\\equiv\\text{CH}+2\\text{H}_2\\xrightarrow{\\text{Ni}}\\text{CH}_3\\text{CH}_3$$'
    },
    {
      d: 'E',
      q_en: 'How are alkyl halides reduced to alkanes with Zn/HCl?',
      q_hi: 'Zn/HCl द्वारा ऐल्किल हैलाइडों का ऐल्केनों में अपचयन कैसे होता है?',
      a_en: 'Nascent hydrogen from Zn + HCl replaces the halogen: R–X + 2[H] → R–H + HX.',
      a_hi: 'Zn + HCl से नवजात हाइड्रोजन हैलोजन को प्रतिस्थापित करती है: R–X + 2[H] → R–H + HX।',
      formula: '$$\\text{CH}_3\\text{Cl}+\\text{H}_2\\xrightarrow{\\text{Zn, H}^+}\\text{CH}_4+\\text{HCl}$$'
    },
    {
      d: 'E',
      q_en: 'State the Wurtz reaction.',
      q_hi: 'वुर्ट्ज़ अभिक्रिया लिखिए।',
      a_en: 'Alkyl halide + sodium metal in dry ether gives a higher symmetrical alkane with double the carbons.',
      a_hi: 'ऐल्किल हैलाइड + सोडियम (शुष्क ईथर में) से द्विगुणित कार्बन वाला सममित ऐल्केन बनता है।',
      formula: '$$2\\text{RX}+2\\text{Na}\\xrightarrow{\\text{dry ether}}\\text{R–R}+2\\text{NaX}$$'
    },
    {
      d: 'E',
      q_en: 'Which alkane forms when sodium ethanoate is heated with soda-lime?',
      q_hi: 'सोडियम एथेनोएट को सोडालाइम के साथ गर्म करने पर कौन-सा ऐल्केन बनता है?',
      a_en: 'Methane (CH4), along with sodium carbonate.',
      a_hi: 'मेथेन (CH4), साथ में सोडियम कार्बोनेट।',
      formula: '$$\\text{CH}_3\\text{COONa}+\\text{NaOH}\\xrightarrow{\\text{CaO},\\Delta}\\text{CH}_4+\\text{Na}_2\\text{CO}_3$$'
    },
    {
      d: 'M',
      q_en: 'Why is red P added when R–I is reduced with HI?',
      q_hi: 'HI से R–I के अपचयन में लाल फॉस्फोरस क्यों मिलाया जाता है?',
      a_en: 'Red P removes the I2 formed (as PI3/HI regenerated), preventing I2 from reacting with the alkane in reverse.',
      a_hi: 'लाल P बने I2 को हटाता है, जिससे I2 उलटी अभिक्रिया द्वारा ऐल्केन से नहीं जुड़ पाती।',
      formula: '$$\\text{R–I}+\\text{HI}\\xrightarrow{\\text{red P}}\\text{R–H}+\\text{I}_2$$'
    },
    {
      d: 'M',
      q_en: 'Wurtz reaction with CH3Br and with C2H5Br: give the products.',
      q_hi: 'CH3Br व C2H5Br की वुर्ट्ज़ अभिक्रिया के उत्पाद लिखिए।',
      a_en: 'CH3Br gives ethane; C2H5Br gives n-butane.',
      a_hi: 'CH3Br से एथेन; C2H5Br से n-ब्यूटेन।',
      formula: '$$2\\text{C}_2\\text{H}_5\\text{Br}+2\\text{Na}\\rightarrow\\text{C}_4\\text{H}_{10}+2\\text{NaBr}$$'
    },
    {
      d: 'M',
      q_en: 'What does Wurtz reaction give with a mixture of CH3Cl and C2H5Cl?',
      q_hi: 'CH3Cl व C2H5Cl के मिश्रण से वुर्ट्ज़ अभिक्रिया क्या देती है?',
      a_en: 'A mixture of three alkanes: ethane, propane and butane. Hence unsuitable for odd-carbon alkanes.',
      a_hi: 'तीन ऐल्केनों का मिश्रण: एथेन, प्रोपेन व ब्यूटेन। अतः विषम कार्बन ऐल्केन हेतु अनुपयुक्त।',
      formula: '$$\\text{CH}_3\\text{Cl}+\\text{C}_2\\text{H}_5\\text{Cl}\\xrightarrow{\\text{Na}}\\text{C}_2\\text{H}_6+\\text{C}_3\\text{H}_8+\\text{C}_4\\text{H}_{10}$$'
    },
    {
      d: 'M',
      q_en: 'What is the role of CaO in the soda-lime decarboxylation?',
      q_hi: 'सोडालाइम विकार्बोक्सिलन में CaO की भूमिका क्या है?',
      a_en: 'CaO keeps NaOH dry (non-deliquescent) and protects the glass tube from attack by NaOH; NaOH is the real reagent.',
      a_hi: 'CaO, NaOH को शुष्क रखता है व काँच की नली को NaOH के आक्रमण से बचाता है; वास्तविक अभिकर्मक NaOH है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What are the anode and cathode products in Kolbe electrolysis of CH3COONa?',
      q_hi: 'CH3COONa के कोल्बे विद्युत-अपघटन में ऐनोड व कैथोड पर क्या बनता है?',
      a_en: 'Anode: ethane and CO2. Cathode: H2 and NaOH.',
      a_hi: 'ऐनोड पर: एथेन व CO2। कैथोड पर: H2 व NaOH।',
      formula: '$$2\\text{CH}_3\\text{COONa}+2\\text{H}_2\\text{O}\\xrightarrow{\\text{electrolysis}}\\text{C}_2\\text{H}_6+2\\text{CO}_2+\\text{H}_2+2\\text{NaOH}$$'
    },
    {
      d: 'H',
      q_en: 'Why can methane never be prepared by the Wurtz reaction?',
      q_hi: 'वुर्ट्ज़ अभिक्रिया से मेथेन क्यों नहीं बन सकती?',
      a_en: 'Wurtz couples two R groups to form R–R, so the minimum product is ethane (two carbons).',
      a_hi: 'वुर्ट्ज़ में दो R समूह जुड़कर R–R बनाते हैं, अतः न्यूनतम उत्पाद एथेन (दो कार्बन) है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'What happens when a 3° alkyl halide is used in the Wurtz reaction?',
      q_hi: '3° ऐल्किल हैलाइड को वुर्ट्ज़ अभिक्रिया में लेने पर क्या होता है?',
      a_en: 'Elimination dominates: an alkene forms instead of the coupled alkane (strongly basic Na-derived species).',
      a_hi: 'विलोपन प्रमुख होता है: युग्मित ऐल्केन की जगह ऐल्कीन बनती है।',
      formula: '$$(\\text{CH}_3)_3\\text{C–Br}\\xrightarrow{\\text{Na, ether}}(\\text{CH}_3)_2\\text{C=CH}_2$$'
    },
    {
      d: 'H',
      q_en: 'Wurtz reaction of 2-bromopropane gives which alkane?',
      q_hi: '2-ब्रोमोप्रोपेन की वुर्ट्ज़ अभिक्रिया से कौन-सा ऐल्केन बनता है?',
      a_en: '2,3-Dimethylbutane, formed by joining two isopropyl groups.',
      a_hi: '2,3-डाइमेथिलब्यूटेन, दो आइसोप्रोपिल समूहों के जुड़ने से बनता है।',
      formula: '$$2(\\text{CH}_3)_2\\text{CHBr}+2\\text{Na}\\rightarrow(\\text{CH}_3)_2\\text{CH–CH(CH}_3)_2+2\\text{NaBr}$$'
    },
    {
      d: 'H',
      q_en: 'Which sodium salt on soda-lime heating gives isobutane?',
      q_hi: 'कौन-सा सोडियम लवण सोडालाइम के साथ गर्म करने पर आइसोब्यूटेन देता है?',
      a_en: 'Sodium 2,2-dimethylpropanoate, (CH3)3C–COONa. Decarboxylation removes one carbon (C5 acid → C4 alkane).',
      a_hi: 'सोडियम 2,2-डाइमेथिलप्रोपेनोएट, (CH3)3C–COONa। एक कार्बन घटता है (C5 अम्ल → C4 ऐल्केन)।',
      formula: '$$(\\text{CH}_3)_3\\text{C–COONa}\\xrightarrow{\\text{NaOH, CaO}}(\\text{CH}_3)_3\\text{CH}+\\text{Na}_2\\text{CO}_3$$'
    },
    {
      d: 'H',
      q_en: 'Kolbe electrolysis of sodium propanoate gives which alkane? Why not methane?',
      q_hi: 'सोडियम प्रोपेनोएट के कोल्बे अपघटन से कौन-सा ऐल्केन बनता है? मेथेन क्यों नहीं?',
      a_en: 'n-Butane (two C2H5 radicals couple). Coupling needs two R groups, so CH4 is impossible.',
      a_hi: 'n-ब्यूटेन (दो C2H5 मूलक जुड़ते हैं)। युग्मन के लिए दो R चाहिए, अतः CH4 असंभव।',
      formula: '$$2\\text{C}_2\\text{H}_5\\text{COO}^-\\xrightarrow{-2e^-}\\text{C}_4\\text{H}_{10}+2\\text{CO}_2$$'
    }
  ],

  /* ---------- SET 3: Physical & Chemical Properties of Alkanes ---------- */
  3: [
    {
      d: 'E',
      q_en: 'How does the boiling point of straight-chain alkanes vary with molar mass?',
      q_hi: 'सीधी शृंखला ऐल्केनों का क्वथनांक मोलर द्रव्यमान के साथ कैसे बदलता है?',
      a_en: 'It increases regularly with molar mass because van der Waals forces strengthen.',
      a_hi: 'मोलर द्रव्यमान बढ़ने पर वान्डर वाल्स बल बढ़ने से क्वथनांक नियमित बढ़ता है।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Are alkanes soluble in water? Why or why not?',
      q_hi: 'क्या ऐल्केन जल में विलेय हैं? क्यों या क्यों नहीं?',
      a_en: 'No. They are non-polar and cannot form H-bonds with water; they dissolve in non-polar solvents.',
      a_hi: 'नहीं। ये अध्रुवीय हैं व जल से H-आबंध नहीं बना सकते; अध्रुवीय विलायकों में घुलते हैं।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Under what conditions does methane react with chlorine?',
      q_hi: 'मेथेन किन परिस्थितियों में क्लोरीन से अभिक्रिया करती है?',
      a_en: 'In UV/diffused sunlight or at high temperature (about 573 K), giving CH3Cl, CH2Cl2, CHCl3 and CCl4.',
      a_hi: 'UV/विसरित सूर्य-प्रकाश या उच्च ताप (लगभग 573 K) पर; CH3Cl, CH2Cl2, CHCl3, CCl4 बनते हैं।',
      formula: '$$\\text{CH}_4+\\text{Cl}_2\\xrightarrow{h\\nu}\\text{CH}_3\\text{Cl}+\\text{HCl}$$'
    },
    {
      d: 'E',
      q_en: 'Write the general equation for complete combustion of an alkane.',
      q_hi: 'ऐल्केन के पूर्ण दहन की सामान्य अभिक्रिया लिखिए।',
      a_en: 'CnH2n+2 + (3n+1)/2 O2 → n CO2 + (n+1) H2O, with release of heat.',
      a_hi: 'CnH2n+2 + (3n+1)/2 O2 → n CO2 + (n+1) H2O, ऊष्मा मुक्त होती है।',
      formula: '$$\\text{C}_n\\text{H}_{2n+2}+\\frac{3n+1}{2}\\text{O}_2\\rightarrow n\\text{CO}_2+(n+1)\\text{H}_2\\text{O}$$'
    },
    {
      d: 'E',
      q_en: 'What is pyrolysis (cracking) of alkanes?',
      q_hi: 'ऐल्केनों का भंजन (pyrolysis/cracking) क्या है?',
      a_en: 'Decomposition of higher alkanes into lower alkanes, alkenes and H2 on heating in absence of air.',
      a_hi: 'वायु की अनुपस्थिति में गर्म करने पर उच्च ऐल्केनों का निम्न ऐल्केन, ऐल्कीन व H2 में विघटन।',
      formula: '$$\\text{C}_{12}\\text{H}_{26}\\xrightarrow{\\Delta}\\text{C}_7\\text{H}_{16}+\\text{C}_5\\text{H}_{10}$$'
    },
    {
      d: 'M',
      q_en: 'Arrange n-pentane, isopentane, neopentane by boiling point.',
      q_hi: 'n-पेन्टेन, आइसोपेन्टेन, निओपेन्टेन को क्वथनांक के क्रम में लिखिए।',
      a_en: 'n-Pentane (309 K) > isopentane (301 K) > neopentane (282.5 K); branching lowers surface area.',
      a_hi: 'n-पेन्टेन (309 K) > आइसोपेन्टेन (301 K) > निओपेन्टेन (282.5 K); शाखन से पृष्ठ क्षेत्रफल घटता है।',
      formula: '$$309\\text{ K}>301\\text{ K}>282.5\\text{ K}$$'
    },
    {
      d: 'M',
      q_en: 'Outline the free-radical mechanism of chlorination of methane.',
      q_hi: 'मेथेन के क्लोरीनीकरण की मुक्त मूलक क्रियाविधि संक्षेप में लिखिए।',
      a_en: 'Initiation: Cl2 → 2Cl•. Propagation: Cl• + CH4 → CH3• + HCl; CH3• + Cl2 → CH3Cl + Cl•. Termination: radicals combine.',
      a_hi: 'आरंभन: Cl2 → 2Cl•। संचरण: Cl• + CH4 → CH3• + HCl; CH3• + Cl2 → CH3Cl + Cl•। समापन: मूलक जुड़ते हैं।',
      formula: '$$\\text{Cl}_2\\xrightarrow{h\\nu}2\\text{Cl}^\\bullet$$'
    },
    {
      d: 'M',
      q_en: 'Compare halogen reactivity toward alkanes. Why is iodination difficult?',
      q_hi: 'ऐल्केनों के प्रति हैलोजनों की क्रियाशीलता की तुलना कीजिए। आयोडीनीकरण कठिन क्यों?',
      a_en: 'F2 > Cl2 > Br2 > I2. Iodination is reversible (HI reduces R–I back); needs HIO3 or HNO3 to oxidise HI.',
      a_hi: 'F2 > Cl2 > Br2 > I2। आयोडीनीकरण उत्क्रमणीय (HI, R–I को लौटा देता है); HI हटाने हेतु HIO3/HNO3 चाहिए।',
      formula: '$$\\text{CH}_4+\\text{I}_2\\rightleftharpoons\\text{CH}_3\\text{I}+\\text{HI}$$'
    },
    {
      d: 'M',
      q_en: 'Give products of controlled oxidation of CH4 and of isobutane.',
      q_hi: 'CH4 व आइसोब्यूटेन के नियंत्रित ऑक्सीकरण के उत्पाद बताइए।',
      a_en: 'CH4 + O2 (Cu, 523 K, 100 atm) → CH3OH; with Mo2O3 → HCHO. (CH3)3CH + KMnO4 → (CH3)3COH.',
      a_hi: 'CH4 + O2 (Cu, 523 K, 100 atm) → CH3OH; Mo2O3 से → HCHO। (CH3)3CH + KMnO4 → (CH3)3COH।',
      formula: '$$2\\text{CH}_4+\\text{O}_2\\xrightarrow{\\text{Cu},523\\text{ K},100\\text{ atm}}2\\text{CH}_3\\text{OH}$$'
    },
    {
      d: 'M',
      q_en: 'What is aromatisation of alkanes? Give an example with conditions.',
      q_hi: 'ऐल्केनों का ऐरोमैटीकरण क्या है? शर्तों सहित उदाहरण दीजिए।',
      a_en: 'n-Hexane to benzene on heating at 773 K, 10–20 atm over Cr2O3/V2O5/Mo2O3 (loss of 4 H2).',
      a_hi: 'n-हेक्सेन से बेंज़ीन, 773 K, 10–20 atm पर Cr2O3/V2O5/Mo2O3 पर (4 H2 निकलती है)।',
      formula: '$$\\text{n-C}_6\\text{H}_{14}\\xrightarrow{\\text{Cr}_2\\text{O}_3/\\text{V}_2\\text{O}_5,773\\text{ K}}\\text{C}_6\\text{H}_6+4\\text{H}_2$$'
    },
    {
      d: 'H',
      q_en: 'Why does neopentane melt far higher (256.4 K) than isopentane (113.1 K)?',
      q_hi: 'निओपेन्टेन का गलनांक (256.4 K) आइसोपेन्टेन (113.1 K) से इतना अधिक क्यों है?',
      a_en: 'Neopentane is nearly spherical and symmetric, so it packs very well in the crystal lattice, raising m.p.',
      a_hi: 'निओपेन्टेन लगभग गोलाकार व सममित है, अतः क्रिस्टल जालक में बेहतर संकुलन होने से गलनांक अधिक।',
      formula: '$$\\text{m.p.}:\\ \\text{neopentane}\\ (256.4\\text{ K})\\gg\\text{isopentane}\\ (113.1\\text{ K})$$'
    },
    {
      d: 'H',
      q_en: 'Melting points of alkanes alternate with carbon number. Which have higher m.p.?',
      q_hi: 'ऐल्केनों के गलनांक कार्बन संख्या के साथ एकांतरित होते हैं। किनके अधिक होते हैं?',
      a_en: 'Even-carbon alkanes pack more compactly (ends on opposite sides), so they melt higher than neighbouring odd-carbon ones.',
      a_hi: 'सम कार्बन वाले ऐल्केनों का संकुलन बेहतर (सिरे विपरीत दिशा में), अतः पास के विषम वालों से अधिक गलनांक।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Bromination vs chlorination of propane: which is more selective, and the major product?',
      q_hi: 'प्रोपेन के ब्रोमीनीकरण व क्लोरीनीकरण में कौन अधिक वरणात्मक है? मुख्य उत्पाद?',
      a_en: 'Bromination is more selective: about 97% 2-bromopropane (3°/2° H abstracted faster). Chlorination gives nearly 45:55 mix.',
      a_hi: 'ब्रोमीनीकरण अधिक वरणात्मक: लगभग 97% 2-ब्रोमोप्रोपेन। क्लोरीनीकरण से लगभग 45:55 मिश्रण।',
      formula: '$$\\text{H-abstraction rate:}\\ 3^\\circ>2^\\circ>1^\\circ$$'
    },
    {
      d: 'H',
      q_en: 'Write steam reforming of methane. What is the product mixture used for?',
      q_hi: 'मेथेन का भाप-सुधार (steam reforming) लिखिए। उत्पाद मिश्रण किसके काम आता है?',
      a_en: 'CH4 + H2O → CO + 3H2 (Ni, 1273 K). This syngas is used to make H2, methanol and ammonia.',
      a_hi: 'CH4 + H2O → CO + 3H2 (Ni, 1273 K)। इस संश्लेषण गैस से H2, मेथेनॉल व अमोनिया बनते हैं।',
      formula: '$$\\text{CH}_4+\\text{H}_2\\text{O}\\xrightarrow{\\text{Ni},1273\\text{ K}}\\text{CO}+3\\text{H}_2$$'
    },
    {
      d: 'H',
      q_en: 'How does ethane appear as a by-product in chlorination of methane?',
      q_hi: 'मेथेन के क्लोरीनीकरण में एथेन उपोत्पाद के रूप में कैसे बनती है?',
      a_en: 'In termination, two methyl radicals combine: CH3• + CH3• → C2H6, which confirms the radical mechanism.',
      a_hi: 'समापन चरण में दो मेथिल मूलक जुड़ते हैं: CH3• + CH3• → C2H6; यह मूलक क्रियाविधि की पुष्टि करता है।',
      formula: '$$\\text{CH}_3^\\bullet+\\text{CH}_3^\\bullet\\rightarrow\\text{CH}_3\\text{–CH}_3$$'
    }
  ],

  /* ---------- SET 4: Conformations of Ethane ---------- */
  4: [
    {
      d: 'E',
      q_en: 'What are conformations (conformers or rotamers)?',
      q_hi: 'संरूपण (conformers/rotamers) क्या हैं?',
      a_en: 'Different spatial arrangements of atoms obtained by rotation about a C–C single bond.',
      a_hi: 'C–C एकल आबंध के घूर्णन से प्राप्त परमाणुओं की विभिन्न त्रिविम व्यवस्थाएँ।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Name the two extreme conformations of ethane.',
      q_hi: 'एथेन के दो चरम संरूपणों के नाम बताइए।',
      a_en: 'Staggered (most stable) and eclipsed (least stable).',
      a_hi: 'विषमकोणीय/स्टैगर्ड (सबसे स्थायी) तथा ग्रहणीय/एक्लिप्स्ड (सबसे अस्थायी)।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Name the two ways of representing conformations on paper.',
      q_hi: 'संरूपणों को कागज़ पर दर्शाने के दो तरीकों के नाम लिखिए।',
      a_en: 'Sawhorse projection and Newman projection.',
      a_hi: 'सॉहॉर्स प्रक्षेप तथा न्यूमैन प्रक्षेप।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What is the dihedral (torsional) angle?',
      q_hi: 'डाइहेड्रल (मरोड़ी) कोण क्या है?',
      a_en: 'The angle between a C–H bond on the front carbon and a C–H bond on the rear carbon, seen in Newman view.',
      a_hi: 'न्यूमैन दृश्य में अग्र कार्बन के C–H व पश्च कार्बन के C–H आबंध के बीच का कोण।',
      formula: '$$\\text{Staggered}:\\theta=60^\\circ;\\ \\text{Eclipsed}:\\theta=0^\\circ$$'
    },
    {
      d: 'E',
      q_en: 'Which conformation of ethane is the most stable?',
      q_hi: 'एथेन का सबसे स्थायी संरूपण कौन-सा है?',
      a_en: 'The staggered form, with minimum repulsion between C–H bond pairs (θ = 60°).',
      a_hi: 'स्टैगर्ड रूप, जिसमें C–H आबंध युग्मों में न्यूनतम प्रतिकर्षण होता है (θ = 60°)।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What is the energy difference between eclipsed and staggered ethane?',
      q_hi: 'एथेन के एक्लिप्स्ड व स्टैगर्ड संरूपणों में ऊर्जा अंतर कितना है?',
      a_en: 'About 12.5 kJ/mol; the eclipsed form is higher in energy.',
      a_hi: 'लगभग 12.5 kJ/mol; एक्लिप्स्ड रूप की ऊर्जा अधिक है।',
      formula: '$$E_{\\text{eclipsed}}-E_{\\text{staggered}}=12.5\\text{ kJ mol}^{-1}$$'
    },
    {
      d: 'M',
      q_en: 'Why can ethane conformers not be isolated at room temperature?',
      q_hi: 'कक्ष ताप पर एथेन के संरूपणों को पृथक क्यों नहीं किया जा सकता?',
      a_en: 'The barrier (12.5 kJ/mol) is tiny versus thermal energy, so they interconvert very rapidly.',
      a_hi: 'ऊर्जा अवरोध (12.5 kJ/mol) तापीय ऊर्जा की तुलना में बहुत कम है, अतः तीव्र अंतर्परिवर्तन होता है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What is torsional strain?',
      q_hi: 'मरोड़ी विकृति (torsional strain) क्या है?',
      a_en: 'The extra energy from repulsion between electron clouds of C–H bonds on adjacent carbons; maximum in eclipsed.',
      a_hi: 'आसन्न कार्बनों के C–H आबंधों के इलेक्ट्रॉन मेघों के प्रतिकर्षण से अतिरिक्त ऊर्जा; एक्लिप्स्ड में अधिकतम।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Describe a Newman projection of ethane.',
      q_hi: 'एथेन के न्यूमैन प्रक्षेप का वर्णन कीजिए।',
      a_en: 'Viewed along C–C axis: front carbon is a dot with 3 bonds meeting at centre; rear carbon is a circle with 3 bonds from its edge.',
      a_hi: 'C–C अक्ष की ओर से: अग्र कार्बन बिंदु (3 आबंध केंद्र से), पश्च कार्बन वृत्त (3 आबंध परिधि से)।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What is a skew (twist) conformation of ethane?',
      q_hi: 'एथेन का तिर्यक (skew/twist) संरूपण क्या है?',
      a_en: 'Any intermediate arrangement between staggered and eclipsed, with dihedral angle between 0° and 60°.',
      a_hi: 'स्टैगर्ड व एक्लिप्स्ड के बीच कोई भी मध्यवर्ती व्यवस्था, डाइहेड्रल कोण 0° से 60° के बीच।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Arrange n-butane conformers (anti, gauche, partially/fully eclipsed) by stability.',
      q_hi: 'n-ब्यूटेन के संरूपणों (anti, gauche, आंशिक/पूर्ण एक्लिप्स्ड) को स्थायित्व क्रम में रखिए।',
      a_en: 'Anti (180°) > gauche (60°) > partially eclipsed (120°) > fully eclipsed (0°, CH3 groups face to face).',
      a_hi: 'ऐन्टी (180°) > गौश (60°) > आंशिक एक्लिप्स्ड (120°) > पूर्ण एक्लिप्स्ड (0°)।',
      formula: '$$\\text{anti}>\\text{gauche}>\\text{partially eclipsed}>\\text{fully eclipsed}$$'
    },
    {
      d: 'H',
      q_en: 'Why is gauche n-butane less stable than anti, with no eclipsing?',
      q_hi: 'बिना एक्लिप्सिंग के भी गौश n-ब्यूटेन, ऐन्टी से कम स्थायी क्यों है?',
      a_en: 'The two bulky CH3 groups are only 60° apart, causing van der Waals (steric) repulsion absent in anti.',
      a_hi: 'दो भारी CH3 समूह केवल 60° दूर हैं, जिससे वान्डर वाल्स (त्रिविम) प्रतिकर्षण होता है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'How many H–H eclipsing interactions occur in eclipsed ethane, and their energy each?',
      q_hi: 'एक्लिप्स्ड एथेन में कितनी H–H एक्लिप्सिंग पारस्परिक क्रियाएँ हैं? प्रत्येक की ऊर्जा?',
      a_en: 'Three H–H eclipsing pairs; each costs about 4.2 kJ/mol (3 × 4.2 ≈ 12.5 kJ/mol).',
      a_hi: 'तीन H–H एक्लिप्सिंग युग्म; प्रत्येक लगभग 4.2 kJ/mol (3 × 4.2 ≈ 12.5 kJ/mol)।',
      formula: '$$3\\times4.2\\approx12.5\\text{ kJ mol}^{-1}$$'
    },
    {
      d: 'H',
      q_en: 'In one 360° rotation of ethane, how many staggered and eclipsed forms occur?',
      q_hi: 'एथेन के एक 360° घूर्णन में कितने स्टैगर्ड व एक्लिप्स्ड रूप आते हैं?',
      a_en: 'Three staggered (energy minima) and three eclipsed (energy maxima), alternating every 60°.',
      a_hi: 'तीन स्टैगर्ड (ऊर्जा न्यूनतम) व तीन एक्लिप्स्ड (ऊर्जा अधिकतम), प्रत्येक 60° पर एकांतरित।',
      formula: '$$360^\\circ/60^\\circ=6\\ \\text{extremes}$$'
    },
    {
      d: 'H',
      q_en: 'Are conformers constitutional isomers or stereoisomers? Is their constitution different?',
      q_hi: 'संरूपण संरचनात्मक समावयवी हैं या त्रिविम समावयवी? क्या इनका संघटन भिन्न है?',
      a_en: 'They are stereoisomers (conformational) with the same connectivity; they differ only in dihedral angle, not constitution.',
      a_hi: 'ये त्रिविम (संरूपणीय) समावयवी हैं; संयोजन समान, केवल डाइहेड्रल कोण भिन्न; संघटन भिन्न नहीं।',
      formula: ''
    }
  ],

  /* ---------- SET 5: Alkenes - Structure, Structural & Geometrical Isomerism ---------- */
  5: [
    {
      d: 'E',
      q_en: 'What is the hybridisation of C=C carbons in alkenes and the shape around them?',
      q_hi: 'ऐल्कीनों में C=C कार्बनों की संकरण अवस्था व उनके चारों ओर आकृति क्या है?',
      a_en: 'sp2 hybridised; trigonal planar with bond angles about 120°.',
      a_hi: 'sp2 संकरित; त्रिकोणीय समतलीय, आबंध कोण लगभग 120°।',
      formula: '$$\\text{C}_2\\text{H}_4:\\ 5\\sigma+1\\pi$$'
    },
    {
      d: 'E',
      q_en: 'Give C=C bond length and enthalpy compared with C–C.',
      q_hi: 'C=C की आबंध लंबाई व एन्थैल्पी, C–C की तुलना में बताइए।',
      a_en: 'C=C: 134 pm, 681 kJ/mol. C–C: 154 pm, 348 kJ/mol. The double bond is shorter and stronger.',
      a_hi: 'C=C: 134 pm, 681 kJ/mol। C–C: 154 pm, 348 kJ/mol। द्विआबंध छोटा व प्रबल है।',
      formula: '$$\\text{C=C}:\\ 134\\text{ pm},\\ 681\\text{ kJ mol}^{-1}$$'
    },
    {
      d: 'E',
      q_en: 'Why are alkenes also called olefins?',
      q_hi: 'ऐल्कीनों को ओलिफ़िन क्यों कहते हैं?',
      a_en: 'Ethene reacts with chlorine to form an oily liquid, so they are called olefins (oil-forming).',
      a_hi: 'एथीन क्लोरीन से तैलीय द्रव बनाती है, इसलिए इन्हें ओलिफ़िन (तेल बनाने वाले) कहते हैं।',
      formula: '$$\\text{CH}_2\\text{=CH}_2+\\text{Cl}_2\\rightarrow\\text{ClCH}_2\\text{CH}_2\\text{Cl}$$'
    },
    {
      d: 'E',
      q_en: 'How many sigma and pi bonds are present in ethene?',
      q_hi: 'एथीन में कितने सिग्मा व पाई आबंध हैं?',
      a_en: 'Five sigma (4 C–H, 1 C–C) and one pi bond.',
      a_hi: 'पाँच सिग्मा (4 C–H, 1 C–C) तथा एक पाई आबंध।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Name the structural isomers of C4H8 that are alkenes.',
      q_hi: 'C4H8 के ऐल्कीन संरचनात्मक समावयवियों के नाम लिखिए।',
      a_en: 'But-1-ene, but-2-ene and 2-methylprop-1-ene (isobutylene).',
      a_hi: 'ब्यूट-1-ईन, ब्यूट-2-ईन तथा 2-मेथिलप्रोप-1-ईन (आइसोब्यूटिलीन)।',
      formula: '$$\\text{CH}_2\\text{=CHC}_2\\text{H}_5,\\ \\text{CH}_3\\text{CH=CHCH}_3,\\ (\\text{CH}_3)_2\\text{C=CH}_2$$'
    },
    {
      d: 'M',
      q_en: 'How many alkene isomers has C4H8 including geometrical isomers?',
      q_hi: 'ज्यामितीय समावयवियों सहित C4H8 के कितने ऐल्कीन समावयवी हैं?',
      a_en: 'Four: but-1-ene, cis-but-2-ene, trans-but-2-ene and 2-methylpropene.',
      a_hi: 'चार: ब्यूट-1-ईन, cis-ब्यूट-2-ईन, trans-ब्यूट-2-ईन तथा 2-मेथिलप्रोपीन।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What is the condition for cis-trans isomerism in alkenes?',
      q_hi: 'ऐल्कीनों में cis-trans समावयवता की शर्त क्या है?',
      a_en: 'Each doubly bonded carbon must carry two different groups, and C=C rotation must be restricted.',
      a_hi: 'द्विआबंधित प्रत्येक कार्बन पर दो भिन्न समूह हों तथा C=C के चारों ओर घूर्णन प्रतिबंधित हो।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Does propene or pent-2-ene show cis-trans isomerism?',
      q_hi: 'क्या प्रोपीन या पेन्ट-2-ईन cis-trans समावयवता दर्शाती है?',
      a_en: 'Pent-2-ene does; propene does not, because its =CH2 carbon carries two identical H atoms.',
      a_hi: 'पेन्ट-2-ईन दर्शाती है; प्रोपीन नहीं, क्योंकि =CH2 कार्बन पर दो समान H हैं।',
      formula: '$$\\text{CH}_3\\text{CH=CHC}_2\\text{H}_5\\ (\\text{cis/trans})$$'
    },
    {
      d: 'M',
      q_en: 'Why is there no free rotation around the C=C bond?',
      q_hi: 'C=C आबंध के चारों ओर मुक्त घूर्णन क्यों नहीं होता?',
      a_en: 'Rotation would break sideways p-orbital overlap of the pi bond; this needs about 333 kJ/mol, far above thermal energy.',
      a_hi: 'घूर्णन से पाई आबंध का p-कक्षक अतिव्यापन टूटेगा; इसमें लगभग 333 kJ/mol लगता है, जो बहुत अधिक है।',
      formula: '$$\\Delta H_\\pi\\approx681-348=333\\text{ kJ mol}^{-1}$$'
    },
    {
      d: 'M',
      q_en: 'Which of cis- or trans-but-2-ene is more stable, and why?',
      q_hi: 'cis- या trans-ब्यूट-2-ईन में कौन अधिक स्थायी है और क्यों?',
      a_en: 'Trans, because the two CH3 groups are on opposite sides, avoiding steric repulsion present in cis.',
      a_hi: 'Trans, क्योंकि दोनों CH3 विपरीत ओर हैं, अतः cis जैसा त्रिविम प्रतिकर्षण नहीं होता।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why does cis-but-2-ene boil higher (277 K) than trans (274 K)?',
      q_hi: 'cis-ब्यूट-2-ईन का क्वथनांक (277 K) trans (274 K) से अधिक क्यों है?',
      a_en: 'The cis isomer has a net dipole moment (μ ≈ 0.33 D), so dipole-dipole forces add to van der Waals forces.',
      a_hi: 'cis में परिणामी द्विध्रुव आघूर्ण (μ ≈ 0.33 D) है, अतः द्विध्रुव-द्विध्रुव बल भी लगते हैं।',
      formula: '$$\\mu_{\\text{cis}}=0.33\\text{ D},\\ \\mu_{\\text{trans}}\\approx0$$'
    },
    {
      d: 'H',
      q_en: 'Trap: trans-but-2-ene has a much higher m.p. than cis. Why?',
      q_hi: 'जाल: trans-ब्यूट-2-ईन का गलनांक cis से बहुत अधिक क्यों है?',
      a_en: 'The symmetric trans molecule packs better in the crystal lattice (m.p. ~168 K vs ~134 K for cis).',
      a_hi: 'सममित trans अणु क्रिस्टल जालक में बेहतर संकुलित होता है (गलनांक ~168 K बनाम cis ~134 K)।',
      formula: '$$\\text{m.p.}:\\ \\text{trans}\\ (168\\text{ K})>\\text{cis}\\ (134\\text{ K})$$'
    },
    {
      d: 'H',
      q_en: 'Total alkene isomers of C5H10 including geometrical isomers?',
      q_hi: 'ज्यामितीय समावयवियों सहित C5H10 के कुल ऐल्कीन समावयवी कितने हैं?',
      a_en: 'Six: pent-1-ene, cis- and trans-pent-2-ene, 2-methylbut-1-ene, 3-methylbut-1-ene, 2-methylbut-2-ene.',
      a_hi: 'छः: पेन्ट-1-ईन, cis/trans-पेन्ट-2-ईन, 2-मेथिलब्यूट-1-ईन, 3-मेथिलब्यूट-1-ईन, 2-मेथिलब्यूट-2-ईन।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Which is non-polar: cis- or trans-1,2-dichloroethene, and why?',
      q_hi: 'cis- या trans-1,2-डाइक्लोरोएथीन में कौन अध्रुवीय है और क्यों?',
      a_en: 'Trans (μ = 0): the two C–Cl dipoles are equal and opposite and cancel. The cis form is polar.',
      a_hi: 'Trans (μ = 0): दोनों C–Cl द्विध्रुव बराबर व विपरीत होकर निरस्त हो जाते हैं। cis ध्रुवीय है।',
      formula: '$$\\text{ClCH=CHCl}:\\ \\mu_{\\text{trans}}=0$$'
    },
    {
      d: 'H',
      q_en: 'Does 2-methylbut-2-ene show geometrical isomerism? Explain.',
      q_hi: 'क्या 2-मेथिलब्यूट-2-ईन ज्यामितीय समावयवता दर्शाती है? समझाइए।',
      a_en: 'No. One doubly bonded carbon carries two identical CH3 groups, so cis and trans forms are identical.',
      a_hi: 'नहीं। एक द्विआबंधित कार्बन पर दो समान CH3 समूह हैं, अतः cis व trans रूप समान हैं।',
      formula: '$$(\\text{CH}_3)_2\\text{C=CHCH}_3$$'
    }
  ],

  /* ---------- SET 6: Preparation of Alkenes ---------- */
  6: [
    {
      d: 'E',
      q_en: 'What does Lindlar’s catalyst do to an alkyne?',
      q_hi: 'लिंडलर उत्प्रेरक ऐल्काइन के साथ क्या करता है?',
      a_en: 'It partially hydrogenates the alkyne (syn addition of H2) to give a cis-alkene.',
      a_hi: 'यह ऐल्काइन का आंशिक हाइड्रोजनीकरण (H2 का syn योग) कर cis-ऐल्कीन देता है।',
      formula: '$$\\text{R–C}\\equiv\\text{C–R}+\\text{H}_2\\xrightarrow{\\text{Pd/CaCO}_3,\\text{ quinoline}}\\text{cis-RCH=CHR}$$'
    },
    {
      d: 'E',
      q_en: 'Which reagent converts alkyl halides into alkenes by dehydrohalogenation?',
      q_hi: 'कौन-सा अभिकर्मक ऐल्किल हैलाइड को विहाइड्रोहैलोजनन द्वारा ऐल्कीन में बदलता है?',
      a_en: 'Alcoholic KOH (heating). It removes H and X from adjacent carbons (β-elimination).',
      a_hi: 'ऐल्कोहॉलिक KOH (गर्म करने पर)। यह आसन्न कार्बनों से H व X हटाता है (β-विलोपन)।',
      formula: '$$\\text{CH}_3\\text{CH}_2\\text{Br}\\xrightarrow{\\text{alc. KOH},\\Delta}\\text{CH}_2\\text{=CH}_2+\\text{KBr}+\\text{H}_2\\text{O}$$'
    },
    {
      d: 'E',
      q_en: 'How is ethene prepared from ethanol?',
      q_hi: 'एथेनॉल से एथीन कैसे बनाई जाती है?',
      a_en: 'Heat ethanol with excess conc. H2SO4 at 443 K (acidic dehydration).',
      a_hi: 'एथेनॉल को आधिक्य सांद्र H2SO4 के साथ 443 K पर गर्म करते हैं (अम्लीय निर्जलीकरण)।',
      formula: '$$\\text{CH}_3\\text{CH}_2\\text{OH}\\xrightarrow{\\text{conc. H}_2\\text{SO}_4,443\\text{ K}}\\text{CH}_2\\text{=CH}_2+\\text{H}_2\\text{O}$$'
    },
    {
      d: 'E',
      q_en: 'How does Zn dust convert a vicinal dihalide into an alkene?',
      q_hi: 'Zn चूर्ण वायसिनल डाइहैलाइड को ऐल्कीन में कैसे बदलता है?',
      a_en: 'It removes both halogen atoms (dehalogenation), forming the C=C bond and ZnX2.',
      a_hi: 'यह दोनों हैलोजन हटाता है (विहैलोजनन), C=C बनता है और ZnX2 मिलता है।',
      formula: '$$\\text{CH}_2\\text{Br–CH}_2\\text{Br}+\\text{Zn}\\rightarrow\\text{CH}_2\\text{=CH}_2+\\text{ZnBr}_2$$'
    },
    {
      d: 'E',
      q_en: 'State Saytzeff (Zaitsev) rule.',
      q_hi: 'सेटजेफ़ (Zaitsev) नियम लिखिए।',
      a_en: 'In β-elimination, the more substituted (more stable) alkene is the major product.',
      a_hi: 'β-विलोपन में अधिक प्रतिस्थापित (अधिक स्थायी) ऐल्कीन मुख्य उत्पाद होती है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Give the composition of Lindlar’s catalyst.',
      q_hi: 'लिंडलर उत्प्रेरक का संघटन बताइए।',
      a_en: 'Palladised CaCO3 poisoned with Pb(OAc)2 and quinoline (or sulphur), which stops reduction at the alkene.',
      a_hi: 'Pb(OAc)2 व क्विनोलीन (या S) से विषाक्त Pd/CaCO3, जो अपचयन को ऐल्कीन पर रोक देता है।',
      formula: '$$\\text{Pd/CaCO}_3+\\text{Pb(OAc)}_2/\\text{quinoline}$$'
    },
    {
      d: 'M',
      q_en: 'Birch reduction of an alkyne gives which alkene?',
      q_hi: 'ऐल्काइन का बर्च अपचयन कौन-सी ऐल्कीन देता है?',
      a_en: 'Na in liquid NH3 gives anti addition of H2, forming the trans-alkene.',
      a_hi: 'द्रव NH3 में Na, H2 का anti योग कराकर trans-ऐल्कीन देता है।',
      formula: '$$\\text{R–C}\\equiv\\text{C–R}\\xrightarrow{\\text{Na/liq. NH}_3}\\text{trans-RCH=CHR}$$'
    },
    {
      d: 'M',
      q_en: 'Alcoholic KOH vs aqueous KOH with bromoethane: products?',
      q_hi: 'ब्रोमोएथेन के साथ ऐल्कोहॉलिक KOH व जलीय KOH के उत्पाद क्या हैं?',
      a_en: 'Alcoholic KOH gives ethene (elimination); aqueous KOH gives ethanol (substitution).',
      a_hi: 'ऐल्कोहॉलिक KOH से एथीन (विलोपन); जलीय KOH से एथेनॉल (प्रतिस्थापन)।',
      formula: '$$\\text{C}_2\\text{H}_5\\text{Br}\\xrightarrow{\\text{aq. KOH}}\\text{C}_2\\text{H}_5\\text{OH}$$'
    },
    {
      d: 'M',
      q_en: '2-Bromobutane + alc. KOH: major product and approximate percentage?',
      q_hi: '2-ब्रोमोब्यूटेन + ऐल्को. KOH: मुख्य उत्पाद व लगभग प्रतिशत?',
      a_en: 'But-2-ene (about 80%, Saytzeff product); but-1-ene is minor (about 20%).',
      a_hi: 'ब्यूट-2-ईन (लगभग 80%, सेटजेफ़ उत्पाद); ब्यूट-1-ईन गौण (लगभग 20%)।',
      formula: '$$\\text{CH}_3\\text{CHBrCH}_2\\text{CH}_3\\xrightarrow{\\text{alc. KOH}}\\text{CH}_3\\text{CH=CHCH}_3$$'
    },
    {
      d: 'M',
      q_en: 'Give reactivity orders in dehydrohalogenation and in alcohol dehydration.',
      q_hi: 'विहाइड्रोहैलोजनन व ऐल्कोहॉल निर्जलीकरण में क्रियाशीलता क्रम बताइए।',
      a_en: 'Halides: R–I > R–Br > R–Cl and 3° > 2° > 1°. Alcohols: 3° > 2° > 1° (carbocation stability).',
      a_hi: 'हैलाइड: R–I > R–Br > R–Cl व 3° > 2° > 1°। ऐल्कोहॉल: 3° > 2° > 1° (कार्बोकैटायन स्थायित्व)।',
      formula: '$$3^\\circ>2^\\circ>1^\\circ$$'
    },
    {
      d: 'H',
      q_en: 'Why do terminal alkynes not undergo Birch reduction readily?',
      q_hi: 'टर्मिनल ऐल्काइन बर्च अपचयन आसानी से क्यों नहीं देते?',
      a_en: 'Acidic terminal H is removed by the strongly basic medium, forming acetylide anion that resists further reduction.',
      a_hi: 'प्रबल क्षारीय माध्यम अम्लीय टर्मिनल H हटाकर ऐसीटिलाइड ऋणायन बनाता है, जो अपचयित नहीं होता।',
      formula: '$$\\text{RC}\\equiv\\text{CH}+\\text{NH}_2^-\\rightarrow\\text{RC}\\equiv\\text{C}^-+\\text{NH}_3$$'
    },
    {
      d: 'H',
      q_en: 'Dehydration of 3,3-dimethylbutan-2-ol gives which major alkene?',
      q_hi: '3,3-डाइमेथिलब्यूटेन-2-ऑल का निर्जलीकरण कौन-सी मुख्य ऐल्कीन देता है?',
      a_en: '2,3-Dimethylbut-2-ene: 2° carbocation undergoes methyl shift to a 3° cation, then loses H⁺.',
      a_hi: '2,3-डाइमेथिलब्यूट-2-ईन: 2° कार्बोकैटायन में मेथिल विस्थापन से 3° कैटायन बनता है, फिर H⁺ निकलता है।',
      formula: '$$(\\text{CH}_3)_3\\text{C–CH(OH)CH}_3\\xrightarrow{\\text{H}^+}(\\text{CH}_3)_2\\text{C=C(CH}_3)_2$$'
    },
    {
      d: 'H',
      q_en: 'What is the effect of bulky t-BuOK on 2-bromobutane elimination?',
      q_hi: '2-ब्रोमोब्यूटेन के विलोपन पर भारी t-BuOK का क्या प्रभाव है?',
      a_en: 'Bulky base abstracts the less hindered H, so the less substituted but-1-ene rises (Hofmann-type), against Saytzeff.',
      a_hi: 'भारी क्षार कम बाधित H लेता है, अतः कम प्रतिस्थापित ब्यूट-1-ईन बढ़ती है (हॉफ़मैन प्रकार)।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'But-2-yne with H2/Lindlar and with Na/liq. NH3: compare products.',
      q_hi: 'ब्यूट-2-आइन का H2/लिंडलर व Na/द्रव NH3 से उत्पाद तुलना कीजिए।',
      a_en: 'Lindlar gives cis-but-2-ene (syn addition); Na/NH3 gives trans-but-2-ene (anti addition).',
      a_hi: 'लिंडलर से cis-ब्यूट-2-ईन (syn योग); Na/NH3 से trans-ब्यूट-2-ईन (anti योग)।',
      formula: '$$\\text{CH}_3\\text{C}\\equiv\\text{CCH}_3\\xrightarrow{\\text{Lindlar}}\\text{cis};\\ \\xrightarrow{\\text{Na/NH}_3}\\text{trans}$$'
    },
    {
      d: 'H',
      q_en: 'Major alkene from dehydration of butan-2-ol with conc. H2SO4?',
      q_hi: 'ब्यूटेन-2-ऑल का सांद्र H2SO4 से निर्जलीकरण करने पर मुख्य ऐल्कीन कौन-सी?',
      a_en: 'But-2-ene (mainly trans), by Saytzeff rule, via a 2° carbocation; but-1-ene is minor.',
      a_hi: 'ब्यूट-2-ईन (मुख्यतः trans), सेटजेफ़ नियम से, 2° कार्बोकैटायन द्वारा; ब्यूट-1-ईन गौण।',
      formula: '$$\\text{CH}_3\\text{CH(OH)CH}_2\\text{CH}_3\\xrightarrow{\\text{H}_2\\text{SO}_4,\\Delta}\\text{CH}_3\\text{CH=CHCH}_3$$'
    }
  ],

  /* ---------- SET 7: Chemical Properties of Alkenes - Markovnikov & Kharasch ---------- */
  7: [
    {
      d: 'E',
      q_en: 'Why do alkenes undergo electrophilic addition reactions?',
      q_hi: 'ऐल्कीनें इलेक्ट्रॉनस्नेही योगज अभिक्रियाएँ क्यों देती हैं?',
      a_en: 'The exposed, loosely held π electron cloud above and below the plane attracts electrophiles.',
      a_hi: 'तल के ऊपर-नीचे का खुला, शिथिल π इलेक्ट्रॉन मेघ इलेक्ट्रॉनस्नेहियों को आकर्षित करता है।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'How does bromine in CCl4 test for unsaturation?',
      q_hi: 'CCl4 में ब्रोमीन असंतृप्तता की जाँच कैसे करता है?',
      a_en: 'Reddish-brown Br2 colour is discharged as it adds across C=C to form a colourless dibromide.',
      a_hi: 'लाल-भूरा Br2 रंग C=C पर जुड़कर रंगहीन डाइब्रोमाइड बनने से समाप्त हो जाता है।',
      formula: '$$\\text{CH}_2\\text{=CH}_2+\\text{Br}_2\\rightarrow\\text{BrCH}_2\\text{CH}_2\\text{Br}$$'
    },
    {
      d: 'E',
      q_en: 'State Markovnikov’s rule.',
      q_hi: 'मार्कोवनिकोव नियम लिखिए।',
      a_en: 'In addition of HX to an unsymmetrical alkene, the negative part (X) goes to the carbon with fewer hydrogens.',
      a_hi: 'असममित ऐल्कीन पर HX के योग में ऋणात्मक भाग (X) कम हाइड्रोजन वाले कार्बन पर जुड़ता है।',
      formula: '$$\\text{CH}_3\\text{CH=CH}_2+\\text{HBr}\\rightarrow\\text{CH}_3\\text{CHBrCH}_3$$'
    },
    {
      d: 'E',
      q_en: 'Write the product of ethene with H2 over Ni and with HBr.',
      q_hi: 'एथीन के H2/Ni व HBr के साथ उत्पाद लिखिए।',
      a_en: 'With H2/Ni: ethane. With HBr: bromoethane (CH3CH2Br).',
      a_hi: 'H2/Ni से: एथेन। HBr से: ब्रोमोएथेन (CH3CH2Br)।',
      formula: '$$\\text{CH}_2\\text{=CH}_2+\\text{HBr}\\rightarrow\\text{CH}_3\\text{CH}_2\\text{Br}$$'
    },
    {
      d: 'E',
      q_en: 'Give the reactivity order of HX in addition to alkenes.',
      q_hi: 'ऐल्कीनों पर योग में HX का क्रियाशीलता क्रम बताइए।',
      a_en: 'HI > HBr > HCl, following acid strength (ease of H⁺ release).',
      a_hi: 'HI > HBr > HCl, अम्ल प्रबलता (H⁺ मुक्त होने की सरलता) के अनुसार।',
      formula: '$$\\text{HI}>\\text{HBr}>\\text{HCl}$$'
    },
    {
      d: 'M',
      q_en: 'Explain Markovnikov addition of HBr to propene via mechanism.',
      q_hi: 'प्रोपीन पर HBr के मार्कोवनिकोव योग की क्रियाविधि समझाइए।',
      a_en: 'H⁺ adds to give the more stable 2° carbocation CH3–CH⁺–CH3; Br⁻ then attacks it, giving 2-bromopropane.',
      a_hi: 'H⁺ जुड़कर अधिक स्थायी 2° कार्बोकैटायन CH3–CH⁺–CH3 बनाता है; Br⁻ आक्रमण कर 2-ब्रोमोप्रोपेन देता है।',
      formula: '$$\\text{CH}_3\\text{CH=CH}_2\\xrightarrow{\\text{H}^+}\\text{CH}_3\\overset{+}{\\text{C}}\\text{HCH}_3\\xrightarrow{\\text{Br}^-}\\text{CH}_3\\text{CHBrCH}_3$$'
    },
    {
      d: 'M',
      q_en: 'What is the stereochemistry of Br2 addition to alkenes?',
      q_hi: 'ऐल्कीनों पर Br2 योग की त्रिविम रसायन क्या है?',
      a_en: 'Anti addition: a cyclic bromonium ion forms first, then Br⁻ attacks from the opposite face.',
      a_hi: 'Anti योग: पहले चक्रीय ब्रोमोनियम आयन बनता है, फिर Br⁻ विपरीत फलक से आक्रमण करता है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What is the peroxide (Kharasch) effect?',
      q_hi: 'परॉक्साइड (खराश) प्रभाव क्या है?',
      a_en: 'In presence of peroxides, HBr adds to unsymmetrical alkenes against Markovnikov’s rule (anti-Markovnikov).',
      a_hi: 'परॉक्साइड की उपस्थिति में HBr असममित ऐल्कीन पर मार्कोवनिकोव नियम के विरुद्ध जुड़ता है।',
      formula: '$$\\text{CH}_3\\text{CH=CH}_2+\\text{HBr}\\xrightarrow{(\\text{C}_6\\text{H}_5\\text{CO})_2\\text{O}_2}\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{Br}$$'
    },
    {
      d: 'M',
      q_en: 'Why does Br• attack the terminal carbon of propene in the peroxide effect?',
      q_hi: 'परॉक्साइड प्रभाव में Br• प्रोपीन के सिरे वाले कार्बन पर ही क्यों जुड़ता है?',
      a_en: 'It gives the more stable 2° free radical CH3–C•H–CH2Br, which then abstracts H from HBr.',
      a_hi: 'इससे अधिक स्थायी 2° मुक्त मूलक CH3–C•H–CH2Br बनता है, जो HBr से H ग्रहण करता है।',
      formula: '$$\\text{CH}_3\\text{CH=CH}_2+\\text{Br}^\\bullet\\rightarrow\\text{CH}_3\\dot{\\text{C}}\\text{H–CH}_2\\text{Br}$$'
    },
    {
      d: 'M',
      q_en: 'Predict the product of 2-methylpropene + HBr (no peroxide).',
      q_hi: '2-मेथिलप्रोपीन + HBr (बिना परॉक्साइड) का उत्पाद बताइए।',
      a_en: '2-Bromo-2-methylpropane (tert-butyl bromide), via the stable 3° carbocation.',
      a_hi: '2-ब्रोमो-2-मेथिलप्रोपेन (tert-ब्यूटिल ब्रोमाइड), स्थायी 3° कार्बोकैटायन द्वारा।',
      formula: '$$(\\text{CH}_3)_2\\text{C=CH}_2+\\text{HBr}\\rightarrow(\\text{CH}_3)_3\\text{C–Br}$$'
    },
    {
      d: 'H',
      q_en: 'Why is the peroxide effect not seen with HCl?',
      q_hi: 'HCl के साथ परॉक्साइड प्रभाव क्यों नहीं दिखता?',
      a_en: 'H–Cl bond is very strong (~431 kJ/mol), so H abstraction by the carbon radical is endothermic and the chain stalls.',
      a_hi: 'H–Cl आबंध अति प्रबल (~431 kJ/mol) है, अतः मूलक द्वारा H ग्रहण ऊष्माशोषी होता है व श्रृंखला रुकती है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why is the peroxide effect not shown by HI?',
      q_hi: 'HI परॉक्साइड प्रभाव क्यों नहीं दर्शाता?',
      a_en: 'I• addition to the alkene is endothermic (weak C–I bond/large atom); I• atoms instead combine to form I2.',
      a_hi: 'I• का ऐल्कीन पर योग ऊष्माशोषी है (दुर्बल C–I आबंध, बड़ा परमाणु); I• आपस में जुड़कर I2 बनाते हैं।',
      formula: '$$2\\text{I}^\\bullet\\rightarrow\\text{I}_2$$'
    },
    {
      d: 'H',
      q_en: '3-Methylbut-1-ene + HBr: major product? Why?',
      q_hi: '3-मेथिलब्यूट-1-ईन + HBr: मुख्य उत्पाद क्या है? क्यों?',
      a_en: '2-Bromo-2-methylbutane: initial 2° cation undergoes 1,2-hydride shift to a more stable 3° cation.',
      a_hi: '2-ब्रोमो-2-मेथिलब्यूटेन: प्रारंभिक 2° कैटायन 1,2-हाइड्राइड विस्थापन से अधिक स्थायी 3° कैटायन बनता है।',
      formula: '$$(\\text{CH}_3)_2\\text{CH–CH=CH}_2\\xrightarrow{\\text{HBr}}(\\text{CH}_3)_2\\text{CBr–CH}_2\\text{CH}_3$$'
    },
    {
      d: 'H',
      q_en: '3,3-Dimethylbut-1-ene + HCl: major product?',
      q_hi: '3,3-डाइमेथिलब्यूट-1-ईन + HCl: मुख्य उत्पाद क्या है?',
      a_en: '2-Chloro-2,3-dimethylbutane, via 1,2-methyl shift converting a 2° cation into a 3° cation.',
      a_hi: '2-क्लोरो-2,3-डाइमेथिलब्यूटेन, 1,2-मेथिल विस्थापन से 2° कैटायन 3° में बदलता है।',
      formula: '$$(\\text{CH}_3)_3\\text{C–CH=CH}_2\\xrightarrow{\\text{HCl}}(\\text{CH}_3)_2\\text{CCl–CH(CH}_3)_2$$'
    },
    {
      d: 'H',
      q_en: 'CF3CH=CH2 + HBr (no peroxide): why does it violate Markovnikov’s rule?',
      q_hi: 'CF3CH=CH2 + HBr (बिना परॉक्साइड): यह मार्कोवनिकोव नियम का उल्लंघन क्यों करता है?',
      a_en: 'Strong –I of CF3 destabilises the adjacent cation, so the 1° cation forms; product is CF3CH2CH2Br.',
      a_hi: 'CF3 का प्रबल –I समीपी कैटायन अस्थायी करता है, अतः 1° कैटायन बनता है; उत्पाद CF3CH2CH2Br।',
      formula: '$$\\text{CF}_3\\text{CH=CH}_2+\\text{HBr}\\rightarrow\\text{CF}_3\\text{CH}_2\\text{CH}_2\\text{Br}$$'
    }
  ],

  /* ---------- SET 8: Hydration, Baeyer's Reagent, Ozonolysis & Polymerisation ---------- */
  8: [
    {
      d: 'E',
      q_en: 'How is ethene converted to ethanol using H2SO4?',
      q_hi: 'H2SO4 की सहायता से एथीन को एथेनॉल में कैसे बदलते हैं?',
      a_en: 'Add conc. H2SO4 to give ethyl hydrogen sulphate, then hydrolyse with water to get ethanol.',
      a_hi: 'सांद्र H2SO4 मिलाकर एथिल हाइड्रोजन सल्फेट बनाते हैं, फिर जल-अपघटन से एथेनॉल मिलता है।',
      formula: '$$\\text{CH}_2\\text{=CH}_2\\xrightarrow{\\text{H}_2\\text{SO}_4}\\text{CH}_3\\text{CH}_2\\text{OSO}_3\\text{H}\\xrightarrow{\\text{H}_2\\text{O}}\\text{CH}_3\\text{CH}_2\\text{OH}$$'
    },
    {
      d: 'E',
      q_en: 'What is Baeyer’s reagent?',
      q_hi: 'बेयर अभिकर्मक क्या है?',
      a_en: 'Cold, dilute, alkaline (or neutral) aqueous KMnO4 solution.',
      a_hi: 'ठंडा, तनु, क्षारीय (या उदासीन) जलीय KMnO4 विलयन।',
      formula: '$$\\text{cold, dil. alk. KMnO}_4$$'
    },
    {
      d: 'E',
      q_en: 'What visible change shows a positive Baeyer test?',
      q_hi: 'धनात्मक बेयर परीक्षण में कौन-सा दृश्य परिवर्तन होता है?',
      a_en: 'The pink/purple KMnO4 colour is discharged (a brown MnO2 precipitate may form).',
      a_hi: 'गुलाबी/बैंगनी KMnO4 रंग समाप्त हो जाता है (भूरा MnO2 अवक्षेप बन सकता है)।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What is ozonolysis?',
      q_hi: 'ओज़ोनीअपघटन (ozonolysis) क्या है?',
      a_en: 'Reaction of alkene with O3 to form ozonide, then cleavage with Zn/H2O to give carbonyl compounds.',
      a_hi: 'ऐल्कीन की O3 से अभिक्रिया द्वारा ओज़ोनाइड बनाकर Zn/H2O से विदलन कर कार्बोनिल यौगिक पाना।',
      formula: '$$\\text{C=C}\\xrightarrow{\\text{O}_3}\\text{ozonide}\\xrightarrow{\\text{Zn/H}_2\\text{O}}2\\ \\text{C=O}$$'
    },
    {
      d: 'E',
      q_en: 'How is polythene obtained from ethene?',
      q_hi: 'एथीन से पॉलीथीन कैसे प्राप्त होती है?',
      a_en: 'By polymerisation of many ethene units at high temperature and pressure with a catalyst.',
      a_hi: 'उच्च ताप व दाब पर उत्प्रेरक की उपस्थिति में अनेक एथीन इकाइयों के बहुलकीकरण से।',
      formula: '$$n\\,\\text{CH}_2\\text{=CH}_2\\xrightarrow{\\text{high T, P}}[-\\text{CH}_2\\text{–CH}_2-]_n$$'
    },
    {
      d: 'M',
      q_en: 'Baeyer’s reagent with ethene: product and stereochemistry?',
      q_hi: 'एथीन के साथ बेयर अभिकर्मक: उत्पाद व त्रिविम रसायन?',
      a_en: 'Ethane-1,2-diol (glycol) by syn hydroxylation; both OH groups add from the same face.',
      a_hi: 'एथेन-1,2-डाइऑल (ग्लाइकॉल), syn हाइड्रॉक्सिलन द्वारा; दोनों OH एक ही फलक से जुड़ते हैं।',
      formula: '$$\\text{CH}_2\\text{=CH}_2\\xrightarrow{\\text{cold KMnO}_4}\\text{HOCH}_2\\text{CH}_2\\text{OH}$$'
    },
    {
      d: 'M',
      q_en: 'Products of hot acidic KMnO4 oxidation of =CH2, =CHR and =CR2 groups?',
      q_hi: 'गर्म अम्लीय KMnO4 से =CH2, =CHR व =CR2 समूहों के उत्पाद क्या हैं?',
      a_en: '=CH2 → CO2 + H2O; =CHR → RCOOH; =CR2 → R2C=O (ketone).',
      a_hi: '=CH2 → CO2 + H2O; =CHR → RCOOH; =CR2 → R2C=O (कीटोन)।',
      formula: '$$=\\text{CH}_2\\rightarrow\\text{CO}_2;\\ =\\text{CHR}\\rightarrow\\text{RCOOH};\\ =\\text{CR}_2\\rightarrow\\text{R}_2\\text{C=O}$$'
    },
    {
      d: 'M',
      q_en: 'Ozonolysis of propene gives which products?',
      q_hi: 'प्रोपीन का ओज़ोनीअपघटन कौन-से उत्पाद देता है?',
      a_en: 'Ethanal (CH3CHO) and methanal (HCHO).',
      a_hi: 'एथेनैल (CH3CHO) तथा मेथेनैल (HCHO)।',
      formula: '$$\\text{CH}_3\\text{CH=CH}_2\\xrightarrow{\\text{1. O}_3;\\ 2.\\ \\text{Zn/H}_2\\text{O}}\\text{CH}_3\\text{CHO}+\\text{HCHO}$$'
    },
    {
      d: 'M',
      q_en: 'Ozonolysis products of 2-methylpropene?',
      q_hi: '2-मेथिलप्रोपीन के ओज़ोनीअपघटन के उत्पाद क्या हैं?',
      a_en: 'Propanone (acetone) and methanal.',
      a_hi: 'प्रोपेनोन (ऐसीटोन) तथा मेथेनैल।',
      formula: '$$(\\text{CH}_3)_2\\text{C=CH}_2\\rightarrow(\\text{CH}_3)_2\\text{C=O}+\\text{HCHO}$$'
    },
    {
      d: 'M',
      q_en: 'What is formed when propene reacts with conc. H2SO4, then water?',
      q_hi: 'प्रोपीन की सांद्र H2SO4 व फिर जल से अभिक्रिया पर क्या बनता है?',
      a_en: 'Propan-2-ol (isopropyl alcohol), following Markovnikov’s rule.',
      a_hi: 'प्रोपेन-2-ऑल (आइसोप्रोपिल ऐल्कोहॉल), मार्कोवनिकोव नियमानुसार।',
      formula: '$$\\text{CH}_3\\text{CH=CH}_2\\xrightarrow{\\text{H}_2\\text{SO}_4}\\xrightarrow{\\text{H}_2\\text{O}}\\text{CH}_3\\text{CH(OH)CH}_3$$'
    },
    {
      d: 'H',
      q_en: 'Why is Zn used in the work-up of ozonolysis?',
      q_hi: 'ओज़ोनीअपघटन के अंतिम चरण में Zn क्यों प्रयुक्त होता है?',
      a_en: 'Zn destroys H2O2 formed, which would otherwise oxidise aldehydes to carboxylic acids.',
      a_hi: 'Zn बने H2O2 को नष्ट करता है, अन्यथा H2O2 ऐल्डिहाइड को कार्बोक्सिलिक अम्ल में ऑक्सीकृत कर देता।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Which alkene on ozonolysis gives two moles of ethanal?',
      q_hi: 'किस ऐल्कीन के ओज़ोनीअपघटन से एथेनैल के दो मोल मिलते हैं?',
      a_en: 'But-2-ene (CH3CH=CHCH3); cleaving C=C gives two CH3CHO.',
      a_hi: 'ब्यूट-2-ईन (CH3CH=CHCH3); C=C टूटने पर दो CH3CHO मिलते हैं।',
      formula: '$$\\text{CH}_3\\text{CH=CHCH}_3\\xrightarrow{\\text{O}_3,\\text{Zn/H}_2\\text{O}}2\\text{CH}_3\\text{CHO}$$'
    },
    {
      d: 'H',
      q_en: 'Ozonolysis gives propanone and ethanal. Identify the alkene.',
      q_hi: 'ओज़ोनीअपघटन से प्रोपेनोन व एथेनैल मिलते हैं। ऐल्कीन पहचानिए।',
      a_en: '2-Methylbut-2-ene, (CH3)2C=CHCH3. Join the carbonyl carbons and replace the two =O with a C=C.',
      a_hi: '2-मेथिलब्यूट-2-ईन, (CH3)2C=CHCH3। कार्बोनिल कार्बनों को द्विआबंध से जोड़ें, दोनों =O हटाएँ।',
      formula: '$$(\\text{CH}_3)_2\\text{C=O}+\\text{O=CHCH}_3\\rightarrow(\\text{CH}_3)_2\\text{C=CHCH}_3$$'
    },
    {
      d: 'H',
      q_en: 'Hot acidic KMnO4 oxidation of 2-methylbut-2-ene gives what?',
      q_hi: '2-मेथिलब्यूट-2-ईन के गर्म अम्लीय KMnO4 ऑक्सीकरण से क्या मिलता है?',
      a_en: 'Propanone (from =CMe2) and ethanoic acid (from =CHCH3).',
      a_hi: 'प्रोपेनोन (=CMe2 से) तथा एथेनोइक अम्ल (=CHCH3 से)।',
      formula: '$$(\\text{CH}_3)_2\\text{C=CHCH}_3\\xrightarrow{\\text{KMnO}_4/\\text{H}^+}(\\text{CH}_3)_2\\text{CO}+\\text{CH}_3\\text{COOH}$$'
    },
    {
      d: 'H',
      q_en: 'Ozonolysis (Zn/H2O) of cyclohexene gives which product?',
      q_hi: 'साइक्लोहेक्सीन का ओज़ोनीअपघटन (Zn/H2O) कौन-सा उत्पाद देता है?',
      a_en: 'Hexane-1,6-dial, OHC–(CH2)4–CHO; the ring opens into one chain with two –CHO ends.',
      a_hi: 'हेक्सेन-1,6-डाइऐल, OHC–(CH2)4–CHO; वलय खुलकर दोनों सिरों पर –CHO वाली शृंखला बनाती है।',
      formula: '$$\\text{C}_6\\text{H}_{10}\\xrightarrow{\\text{O}_3,\\text{Zn/H}_2\\text{O}}\\text{OHC(CH}_2)_4\\text{CHO}$$'
    }
  ],

  /* ---------- SET 9: Alkynes - Structure, Preparation & Acidic Nature ---------- */
  9: [
    {
      d: 'E',
      q_en: 'State hybridisation, shape and bond angle in ethyne.',
      q_hi: 'एथाइन में संकरण, आकृति व आबंध कोण बताइए।',
      a_en: 'sp hybridised carbons; linear molecule with H–C≡C bond angle of 180°.',
      a_hi: 'sp संकरित कार्बन; रैखिक अणु, H–C≡C आबंध कोण 180°।',
      formula: '$$\\text{H–C}\\equiv\\text{C–H},\\ 180^\\circ$$'
    },
    {
      d: 'E',
      q_en: 'Give the C≡C bond length and bond enthalpy.',
      q_hi: 'C≡C की आबंध लंबाई व आबंध एन्थैल्पी बताइए।',
      a_en: '120 pm and 823 kJ/mol; one σ and two π bonds.',
      a_hi: '120 pm तथा 823 kJ/mol; एक σ व दो π आबंध।',
      formula: '$$\\text{C}\\equiv\\text{C}:\\ 1\\sigma+2\\pi$$'
    },
    {
      d: 'E',
      q_en: 'How is ethyne prepared from calcium carbide?',
      q_hi: 'कैल्सियम कार्बाइड से एथाइन कैसे बनाई जाती है?',
      a_en: 'Hydrolysis of CaC2 with water gives ethyne and Ca(OH)2.',
      a_hi: 'CaC2 के जल-अपघटन से एथाइन व Ca(OH)2 बनते हैं।',
      formula: '$$\\text{CaC}_2+2\\text{H}_2\\text{O}\\rightarrow\\text{Ca(OH)}_2+\\text{C}_2\\text{H}_2$$'
    },
    {
      d: 'E',
      q_en: 'Which reagent gives a white precipitate with terminal alkynes?',
      q_hi: 'कौन-सा अभिकर्मक टर्मिनल ऐल्काइनों से श्वेत अवक्षेप देता है?',
      a_en: 'Tollens’ reagent (ammoniacal AgNO3) gives white silver alkynide, RC≡CAg.',
      a_hi: 'टॉलेन अभिकर्मक (अमोनियाकल AgNO3) श्वेत सिल्वर ऐल्काइनाइड, RC≡CAg देता है।',
      formula: '$$\\text{RC}\\equiv\\text{CH}\\xrightarrow{\\text{[Ag(NH}_3)_2]^+}\\text{RC}\\equiv\\text{CAg}\\downarrow$$'
    },
    {
      d: 'E',
      q_en: 'What does a terminal alkyne give with sodium metal?',
      q_hi: 'टर्मिनल ऐल्काइन सोडियम धातु से क्या देता है?',
      a_en: 'Sodium alkynide and hydrogen gas, showing acidic nature of the terminal hydrogen.',
      a_hi: 'सोडियम ऐल्काइनाइड व हाइड्रोजन गैस; टर्मिनल हाइड्रोजन की अम्लीय प्रकृति दर्शाता है।',
      formula: '$$2\\text{HC}\\equiv\\text{CH}+2\\text{Na}\\rightarrow2\\text{HC}\\equiv\\text{CNa}+\\text{H}_2$$'
    },
    {
      d: 'M',
      q_en: 'How is calcium carbide made industrially?',
      q_hi: 'औद्योगिक स्तर पर कैल्सियम कार्बाइड कैसे बनाया जाता है?',
      a_en: 'Heating quicklime (CaO) with coke in an electric furnace at about 2273 K.',
      a_hi: 'विद्युत भट्ठी में बुझे चूने (CaO) को कोक के साथ लगभग 2273 K पर गर्म करके।',
      formula: '$$\\text{CaO}+3\\text{C}\\xrightarrow{2273\\text{ K}}\\text{CaC}_2+\\text{CO}$$'
    },
    {
      d: 'M',
      q_en: 'Prepare ethyne from 1,2-dibromoethane. Write both steps.',
      q_hi: '1,2-डाइब्रोमोएथेन से एथाइन बनाइए। दोनों चरण लिखिए।',
      a_en: 'Alc. KOH removes one HBr to give vinyl bromide; NaNH2 then removes second HBr to give ethyne.',
      a_hi: 'ऐल्को. KOH एक HBr निकालकर वाइनिल ब्रोमाइड देता है; NaNH2 दूसरा HBr निकालकर एथाइन देता है।',
      formula: '$$\\text{BrCH}_2\\text{CH}_2\\text{Br}\\xrightarrow{\\text{alc. KOH}}\\text{CH}_2\\text{=CHBr}\\xrightarrow{\\text{NaNH}_2}\\text{HC}\\equiv\\text{CH}$$'
    },
    {
      d: 'M',
      q_en: 'Why are terminal alkynes acidic?',
      q_hi: 'टर्मिनल ऐल्काइन अम्लीय क्यों होते हैं?',
      a_en: 'sp carbon has 50% s-character, so it is most electronegative; the acetylide anion is stabilised.',
      a_hi: 'sp कार्बन में 50% s-गुण होता है, अतः अधिक विद्युतऋणी; ऐसीटिलाइड ऋणायन स्थायी होता है।',
      formula: '$$sp\\ (50\\%\\ s)>sp^2\\ (33\\%)>sp^3\\ (25\\%)$$'
    },
    {
      d: 'M',
      q_en: 'Arrange by acidity: ethane, ethene, ethyne.',
      q_hi: 'अम्लीयता के क्रम में रखिए: एथेन, एथीन, एथाइन।',
      a_en: 'HC≡CH > H2C=CH2 > CH3–CH3, following the s-character of the carbon (sp > sp2 > sp3).',
      a_hi: 'HC≡CH > H2C=CH2 > CH3–CH3, कार्बन के s-गुण के अनुसार (sp > sp2 > sp3)।',
      formula: '$$\\text{HC}\\equiv\\text{CH}>\\text{H}_2\\text{C=CH}_2>\\text{CH}_3\\text{–CH}_3$$'
    },
    {
      d: 'M',
      q_en: 'How is propyne prepared from ethyne?',
      q_hi: 'एथाइन से प्रोपाइन कैसे बनाते हैं?',
      a_en: 'Treat ethyne with NaNH2 to get sodium acetylide, then react with CH3Br (SN2) to extend the chain.',
      a_hi: 'एथाइन को NaNH2 से सोडियम ऐसीटिलाइड बनाकर CH3Br (SN2) से अभिक्रिया कराने पर शृंखला बढ़ती है।',
      formula: '$$\\text{HC}\\equiv\\text{CNa}+\\text{CH}_3\\text{Br}\\rightarrow\\text{HC}\\equiv\\text{C–CH}_3+\\text{NaBr}$$'
    },
    {
      d: 'H',
      q_en: 'Why is NaNH2 needed for the second elimination in alkyne synthesis?',
      q_hi: 'ऐल्काइन संश्लेषण के दूसरे विलोपन में NaNH2 क्यों चाहिए?',
      a_en: 'Vinylic C–X bond is strong (sp2 carbon, partial double-bond character), needing a far stronger base than KOH.',
      a_hi: 'वाइनिलिक C–X आबंध प्रबल है (sp2 कार्बन, आंशिक द्विआबंध गुण), KOH से अधिक प्रबल क्षार चाहिए।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Arrange by acidity: H2O, ROH, HC≡CH, NH3.',
      q_hi: 'अम्लीयता क्रम: H2O, ROH, HC≡CH, NH3।',
      a_en: 'H2O > ROH > HC≡CH > NH3. So RO⁻/OH⁻ cannot deprotonate ethyne, but NH2⁻ can.',
      a_hi: 'H2O > ROH > HC≡CH > NH3। अतः RO⁻/OH⁻ एथाइन से H⁺ नहीं ले सकते, पर NH2⁻ ले सकता है।',
      formula: '$$\\text{H}_2\\text{O}>\\text{ROH}>\\text{HC}\\equiv\\text{CH}>\\text{NH}_3$$'
    },
    {
      d: 'H',
      q_en: 'Distinguish but-1-yne from but-2-yne by a chemical test.',
      q_hi: 'ब्यूट-1-आइन व ब्यूट-2-आइन में रासायनिक परीक्षण द्वारा अंतर कीजिए।',
      a_en: 'Ammoniacal AgNO3: but-1-yne gives white ppt; but-2-yne (no terminal H) gives none. Cu2Cl2 gives red ppt.',
      a_hi: 'अमोनियाकल AgNO3: ब्यूट-1-आइन श्वेत अवक्षेप देता है; ब्यूट-2-आइन (टर्मिनल H नहीं) नहीं देता।',
      formula: '$$\\text{CH}_3\\text{CH}_2\\text{C}\\equiv\\text{CH}\\rightarrow\\text{CH}_3\\text{CH}_2\\text{C}\\equiv\\text{CAg}\\downarrow$$'
    },
    {
      d: 'H',
      q_en: 'Distinguish ethyne from ethene using ammoniacal Cu2Cl2.',
      q_hi: 'अमोनियाकल Cu2Cl2 से एथाइन व एथीन में अंतर कीजिए।',
      a_en: 'Ethyne gives a red ppt of copper(I) acetylide; ethene gives no ppt. Dry acetylides are explosive.',
      a_hi: 'एथाइन लाल कॉपर(I) ऐसीटिलाइड अवक्षेप देता है; एथीन नहीं। शुष्क ऐसीटिलाइड विस्फोटक होते हैं।',
      formula: '$$\\text{HC}\\equiv\\text{CH}\\xrightarrow{\\text{Cu}_2\\text{Cl}_2/\\text{NH}_3}\\text{CuC}\\equiv\\text{CCu}\\downarrow$$'
    },
    {
      d: 'H',
      q_en: 'Compare acidity of ethyne using s-character: pKa order of alkane, alkene, alkyne.',
      q_hi: 'S-गुण के आधार पर ऐल्केन, ऐल्कीन, ऐल्काइन के pKa क्रम की तुलना कीजिए।',
      a_en: 'pKa ≈ 25 (alkyne) < 44 (alkene) < 50 (alkane). Lower pKa means stronger acid; sp conjugate base is most stable.',
      a_hi: 'pKa ≈ 25 (ऐल्काइन) < 44 (ऐल्कीन) < 50 (ऐल्केन)। कम pKa = प्रबल अम्ल; sp संयुग्मी क्षार सबसे स्थायी।',
      formula: '$$\\text{p}K_a:\\ 25<44<50$$'
    }
  ],

  /* ---------- SET 10: Addition & Cyclic Polymerisation Reactions of Alkynes ---------- */
  10: [
    {
      d: 'E',
      q_en: 'What is formed when ethyne is hydrogenated completely over Ni?',
      q_hi: 'Ni पर एथाइन का पूर्ण हाइड्रोजनीकरण करने पर क्या बनता है?',
      a_en: 'Ethane, using two moles of H2 (via ethene).',
      a_hi: 'एथेन, H2 के दो मोल से (एथीन के माध्यम से)।',
      formula: '$$\\text{HC}\\equiv\\text{CH}+2\\text{H}_2\\xrightarrow{\\text{Ni}}\\text{CH}_3\\text{CH}_3$$'
    },
    {
      d: 'E',
      q_en: 'What is formed when ethyne reacts with excess Br2?',
      q_hi: 'एथाइन की आधिक्य Br2 से अभिक्रिया पर क्या बनता है?',
      a_en: '1,1,2,2-Tetrabromoethane; the reddish-brown colour of bromine is discharged.',
      a_hi: '1,1,2,2-टेट्राब्रोमोएथेन; ब्रोमीन का लाल-भूरा रंग समाप्त हो जाता है।',
      formula: '$$\\text{HC}\\equiv\\text{CH}+2\\text{Br}_2\\rightarrow\\text{CHBr}_2\\text{–CHBr}_2$$'
    },
    {
      d: 'E',
      q_en: 'Ethyne adds one mole of HCl. What is the product?',
      q_hi: 'एथाइन पर HCl का एक मोल जुड़ने से क्या बनता है?',
      a_en: 'Vinyl chloride (chloroethene), CH2=CHCl; a second HCl gives 1,1-dichloroethane.',
      a_hi: 'वाइनिल क्लोराइड (क्लोरोएथीन), CH2=CHCl; दूसरे HCl से 1,1-डाइक्लोरोएथेन बनता है।',
      formula: '$$\\text{HC}\\equiv\\text{CH}\\xrightarrow{\\text{HCl}}\\text{CH}_2\\text{=CHCl}\\xrightarrow{\\text{HCl}}\\text{CH}_3\\text{CHCl}_2$$'
    },
    {
      d: 'E',
      q_en: 'What does ethyne give on Kucherov hydration?',
      q_hi: 'कुचेरोव जलयोजन में एथाइन क्या देती है?',
      a_en: 'Ethanal (acetaldehyde), using dil. H2SO4 and HgSO4 at 333 K.',
      a_hi: 'एथेनैल (ऐसीटैल्डिहाइड), तनु H2SO4 व HgSO4 के साथ 333 K पर।',
      formula: '$$\\text{HC}\\equiv\\text{CH}+\\text{H}_2\\text{O}\\xrightarrow{\\text{Hg}^{2+},\\text{H}_2\\text{SO}_4}\\text{CH}_3\\text{CHO}$$'
    },
    {
      d: 'E',
      q_en: 'What is linear polymerisation of ethyne?',
      q_hi: 'एथाइन का रैखिक बहुलकीकरण क्या है?',
      a_en: 'Many ethyne molecules join in a chain to give polyacetylene, a conducting polymer (on doping).',
      a_hi: 'अनेक एथाइन अणु शृंखला में जुड़कर पॉलीऐसीटिलीन बनाते हैं, जो (डोपिंग पर) चालक बहुलक है।',
      formula: '$$n\\,\\text{HC}\\equiv\\text{CH}\\rightarrow[-\\text{CH=CH}-]_n$$'
    },
    {
      d: 'M',
      q_en: 'Propyne + 2 HBr: write the product and the rule.',
      q_hi: 'प्रोपाइन + 2 HBr: उत्पाद व नियम लिखिए।',
      a_en: '2,2-Dibromopropane (gem-dihalide), as per Markovnikov’s rule at each step.',
      a_hi: '2,2-डाइब्रोमोप्रोपेन (जेम-डाइहैलाइड), प्रत्येक चरण में मार्कोवनिकोव नियमानुसार।',
      formula: '$$\\text{CH}_3\\text{C}\\equiv\\text{CH}+2\\text{HBr}\\rightarrow\\text{CH}_3\\text{CBr}_2\\text{CH}_3$$'
    },
    {
      d: 'M',
      q_en: 'What does propyne give on Kucherov hydration?',
      q_hi: 'कुचेरोव जलयोजन में प्रोपाइन क्या देती है?',
      a_en: 'Propanone (acetone), a ketone, via enol (CH3C(OH)=CH2) tautomerisation.',
      a_hi: 'प्रोपेनोन (ऐसीटोन), कीटोन, एनॉल CH3C(OH)=CH2 के चलावयवता (tautomerism) से।',
      formula: '$$\\text{CH}_3\\text{C}\\equiv\\text{CH}\\xrightarrow{\\text{Hg}^{2+},\\text{H}_2\\text{SO}_4}\\text{CH}_3\\text{COCH}_3$$'
    },
    {
      d: 'M',
      q_en: 'How is benzene made from ethyne?',
      q_hi: 'एथाइन से बेंज़ीन कैसे बनती है?',
      a_en: 'Cyclic trimerisation: pass ethyne through a red-hot iron tube at 873 K.',
      a_hi: 'चक्रीय त्रिबहुलकीकरण: एथाइन को लाल तप्त लोहे की नली से 873 K पर प्रवाहित करते हैं।',
      formula: '$$3\\text{HC}\\equiv\\text{CH}\\xrightarrow{\\text{red hot Fe tube},873\\text{ K}}\\text{C}_6\\text{H}_6$$'
    },
    {
      d: 'M',
      q_en: 'Cyclic polymerisation of propyne gives which compound?',
      q_hi: 'प्रोपाइन के चक्रीय बहुलकीकरण से कौन-सा यौगिक बनता है?',
      a_en: '1,3,5-Trimethylbenzene (mesitylene).',
      a_hi: '1,3,5-ट्राइमेथिलबेंज़ीन (मेसिटिलीन)।',
      formula: '$$3\\text{CH}_3\\text{C}\\equiv\\text{CH}\\xrightarrow{\\Delta}1,3,5\\text{-(CH}_3)_3\\text{C}_6\\text{H}_3$$'
    },
    {
      d: 'M',
      q_en: 'Ethyne + 1 mol Br2: what is the product?',
      q_hi: 'एथाइन + 1 मोल Br2: उत्पाद क्या है?',
      a_en: '1,2-Dibromoethene (BrCH=CHBr), mainly trans; excess Br2 gives 1,1,2,2-tetrabromoethane.',
      a_hi: '1,2-डाइब्रोमोएथीन (BrCH=CHBr), मुख्यतः trans; आधिक्य Br2 से 1,1,2,2-टेट्राब्रोमोएथेन।',
      formula: '$$\\text{HC}\\equiv\\text{CH}+\\text{Br}_2\\rightarrow\\text{BrCH=CHBr}$$'
    },
    {
      d: 'H',
      q_en: 'Why does vinyl alcohol convert to ethanal in Kucherov hydration?',
      q_hi: 'कुचेरोव जलयोजन में वाइनिल ऐल्कोहॉल एथेनैल में क्यों बदलता है?',
      a_en: 'Enols are unstable; keto–enol tautomerism shifts H from O to C, giving the stable C=O (keto) form.',
      a_hi: 'ऐनॉल अस्थायी होते हैं; कीटो-ऐनॉल चलावयवता में H, O से C पर जाकर स्थायी C=O रूप देता है।',
      formula: '$$\\text{CH}_2\\text{=CHOH}\\rightleftharpoons\\text{CH}_3\\text{CHO}$$'
    },
    {
      d: 'H',
      q_en: 'Trap: which alkyne alone gives an aldehyde on hydration?',
      q_hi: 'जाल: जलयोजन पर कौन-सी ऐल्काइन अकेली ऐल्डिहाइड देती है?',
      a_en: 'Only ethyne. Every other alkyne gives a ketone, since Markovnikov OH goes to the inner carbon.',
      a_hi: 'केवल एथाइन। अन्य सभी ऐल्काइन कीटोन देती हैं, क्योंकि मार्कोवनिकोव से OH भीतरी कार्बन पर जुड़ता है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Hydration of but-1-yne and of but-2-yne gives which product?',
      q_hi: 'ब्यूट-1-आइन व ब्यूट-2-आइन के जलयोजन से कौन-सा उत्पाद मिलता है?',
      a_en: 'Both give butanone (CH3COCH2CH3) as the major product.',
      a_hi: 'दोनों मुख्य उत्पाद के रूप में ब्यूटेनोन (CH3COCH2CH3) देते हैं।',
      formula: '$$\\text{C}_4\\text{H}_6+\\text{H}_2\\text{O}\\xrightarrow{\\text{Hg}^{2+}}\\text{CH}_3\\text{COCH}_2\\text{CH}_3$$'
    },
    {
      d: 'H',
      q_en: 'Propyne + 1 mol HBr: major product?',
      q_hi: 'प्रोपाइन + 1 मोल HBr: मुख्य उत्पाद क्या है?',
      a_en: '2-Bromopropene, CH3C(Br)=CH2, by Markovnikov addition (more stable vinyl cation at C-2).',
      a_hi: '2-ब्रोमोप्रोपीन, CH3C(Br)=CH2, मार्कोवनिकोव योग से (C-2 पर अधिक स्थायी वाइनिल कैटायन)।',
      formula: '$$\\text{CH}_3\\text{C}\\equiv\\text{CH}+\\text{HBr}\\rightarrow\\text{CH}_3\\text{CBr=CH}_2$$'
    },
    {
      d: 'H',
      q_en: 'Why are alkynes less reactive than alkenes toward electrophiles?',
      q_hi: 'ऐल्काइनें इलेक्ट्रॉनस्नेहियों के प्रति ऐल्कीनों से कम क्रियाशील क्यों हैं?',
      a_en: 'sp carbons hold π electrons more tightly, and the intermediate vinyl cation is less stable than an alkyl cation.',
      a_hi: 'sp कार्बन π इलेक्ट्रॉनों को अधिक कसकर पकड़ते हैं, और मध्यवर्ती वाइनिल कैटायन ऐल्किल कैटायन से कम स्थायी है।',
      formula: ''
    }
  ],

  /* ---------- SET 11: Benzene Structure, Resonance & Huckel's Rule ---------- */
  11: [
    {
      d: 'E',
      q_en: 'Give the molecular formula of benzene and its degree of unsaturation.',
      q_hi: 'बेंज़ीन का अणुसूत्र व असंतृप्तता की कोटि (degree of unsaturation) बताइए।',
      a_en: 'C6H6; degree of unsaturation = 4 (three C=C plus one ring in the Kekulé picture).',
      a_hi: 'C6H6; असंतृप्तता कोटि = 4 (केकुले चित्र में तीन C=C व एक वलय)।',
      formula: '$$\\text{DU}=\\frac{2(6)+2-6}{2}=4$$'
    },
    {
      d: 'E',
      q_en: 'What is the C–C bond length in benzene?',
      q_hi: 'बेंज़ीन में C–C आबंध लंबाई कितनी है?',
      a_en: 'All six C–C bonds are equal, 139 pm: between a single (154 pm) and double (134 pm) bond.',
      a_hi: 'सभी छः C–C आबंध समान, 139 pm: एकल (154 pm) व द्वि (134 pm) आबंध के बीच।',
      formula: '$$134\\text{ pm}<139\\text{ pm}<154\\text{ pm}$$'
    },
    {
      d: 'E',
      q_en: 'What is the resonance energy of benzene?',
      q_hi: 'बेंज़ीन की अनुनाद ऊर्जा कितनी है?',
      a_en: 'About 150 kJ/mol (36 kcal/mol): benzene is that much more stable than a hypothetical cyclohexatriene.',
      a_hi: 'लगभग 150 kJ/mol (36 kcal/mol): काल्पनिक साइक्लोहेक्साट्राइईन से उतनी अधिक स्थायी।',
      formula: '$$E_{\\text{res}}\\approx150\\text{ kJ mol}^{-1}$$'
    },
    {
      d: 'E',
      q_en: 'Describe the geometry of benzene.',
      q_hi: 'बेंज़ीन की ज्यामिति का वर्णन कीजिए।',
      a_en: 'Planar regular hexagon, all C sp2, angles 120°; unhybridised p-orbitals form π clouds above and below the ring.',
      a_hi: 'समतलीय समषट्कोण, सभी C sp2, कोण 120°; अनसंकरित p-कक्षक वलय के ऊपर-नीचे π मेघ बनाते हैं।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'State Hückel’s rule of aromaticity.',
      q_hi: 'हकल का ऐरोमैटिकता नियम बताइए।',
      a_en: 'A planar, cyclic, fully conjugated species with (4n + 2) π electrons (n = 0, 1, 2, …) is aromatic.',
      a_hi: 'समतलीय, चक्रीय, पूर्ण संयुग्मित स्पीशीज़ जिसमें (4n + 2) π इलेक्ट्रॉन हों, ऐरोमैटिक होती है।',
      formula: '$$\\pi e^-=4n+2:\\ 2,6,10,14\\ldots$$'
    },
    {
      d: 'M',
      q_en: 'Why does benzene not decolourise Br2 water or cold KMnO4?',
      q_hi: 'बेंज़ीन Br2 जल या ठंडे KMnO4 का रंग क्यों नहीं उड़ाती?',
      a_en: 'Its π electrons are delocalised, giving 150 kJ/mol extra stability, so it resists addition and oxidation.',
      a_hi: 'इसके π इलेक्ट्रॉन विस्थानीकृत हैं (150 kJ/mol अतिरिक्त स्थायित्व), अतः योग व ऑक्सीकरण का प्रतिरोध करती है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'How does the single 1,2-dibromobenzene isomer support delocalisation?',
      q_hi: 'केवल एक 1,2-डाइब्रोमोबेंज़ीन समावयवी विस्थानीकरण का समर्थन कैसे करता है?',
      a_en: 'Kekulé’s fixed bonds would give two 1,2-isomers (C–C vs C=C); only one exists, so all bonds are equivalent.',
      a_hi: 'केकुले के स्थिर आबंध दो 1,2-समावयवी देते (C–C व C=C); केवल एक मिलता है, अतः सभी आबंध समान।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'How many π electrons do naphthalene and anthracene have? Are they aromatic?',
      q_hi: 'नैफ्थैलीन व ऐन्थ्रासीन में कितने π इलेक्ट्रॉन हैं? क्या ये ऐरोमैटिक हैं?',
      a_en: 'Naphthalene 10 π e⁻ (n = 2); anthracene 14 π e⁻ (n = 3). Both aromatic.',
      a_hi: 'नैफ्थैलीन 10 π e⁻ (n = 2); ऐन्थ्रासीन 14 π e⁻ (n = 3)। दोनों ऐरोमैटिक।',
      formula: '$$10=4(2)+2,\\quad14=4(3)+2$$'
    },
    {
      d: 'M',
      q_en: 'Is the cyclopentadienyl anion aromatic?',
      q_hi: 'क्या साइक्लोपेन्टाडाइएनिल ऋणायन ऐरोमैटिक है?',
      a_en: 'Yes: C5H5⁻ is planar, cyclic, fully conjugated with 6 π electrons (n = 1).',
      a_hi: 'हाँ: C5H5⁻ समतलीय, चक्रीय, पूर्ण संयुग्मित है और इसमें 6 π इलेक्ट्रॉन हैं (n = 1)।',
      formula: '$$\\text{C}_5\\text{H}_5^-:\\ 6\\pi\\ e^-$$'
    },
    {
      d: 'M',
      q_en: 'Is the tropylium cation (C7H7⁺) aromatic?',
      q_hi: 'क्या ट्रोपिलियम कैटायन (C7H7⁺) ऐरोमैटिक है?',
      a_en: 'Yes: the empty p-orbital on the sp2 carbon completes conjugation; 6 π electrons, planar and cyclic.',
      a_hi: 'हाँ: sp2 कार्बन का रिक्त p-कक्षक संयुग्मन पूर्ण करता है; 6 π e⁻, समतलीय व चक्रीय।',
      formula: '$$\\text{C}_7\\text{H}_7^+:\\ 6\\pi\\ e^-$$'
    },
    {
      d: 'H',
      q_en: 'Classify the cyclopropenyl cation and anion.',
      q_hi: 'साइक्लोप्रोपेनिल कैटायन व ऐनायन का वर्गीकरण कीजिए।',
      a_en: 'Cation: 2 π e⁻ (4n+2, n=0) aromatic. Anion: 4 π e⁻ (4n) antiaromatic.',
      a_hi: 'कैटायन: 2 π e⁻ (4n+2, n=0) ऐरोमैटिक। ऐनायन: 4 π e⁻ (4n) प्रति-ऐरोमैटिक।',
      formula: '$$\\text{C}_3\\text{H}_3^+:\\ 2\\pi;\\ \\text{C}_3\\text{H}_3^-:\\ 4\\pi$$'
    },
    {
      d: 'H',
      q_en: 'Why is cyclooctatetraene non-aromatic, not antiaromatic?',
      q_hi: 'साइक्लोऑक्टाटेट्राईन प्रति-ऐरोमैटिक नहीं, अऐरोमैटिक क्यों है?',
      a_en: 'It has 8 π e⁻ (4n) but adopts a non-planar tub shape, escaping conjugation; cyclobutadiene (4π, planar) is antiaromatic.',
      a_hi: '8 π e⁻ (4n) है पर यह अ-समतलीय टब आकृति लेता है; समतलीय साइक्लोब्यूटाडाइईन (4π) प्रति-ऐरोमैटिक है।',
      formula: '$$\\text{C}_8\\text{H}_8:\\ 8\\pi,\\ \\text{tub-shaped}$$'
    },
    {
      d: 'H',
      q_en: 'Pyridine vs pyrrole: which N lone pair counts in the 6π sextet?',
      q_hi: 'पिरिडीन बनाम पिरोल: 6π षटक में किस N का एकाकी युग्म गिना जाता है?',
      a_en: 'Pyrrole: N lone pair joins the π system (4 + 2 = 6). Pyridine: lone pair is in an sp2 orbital in-plane, not counted; 6π from C=C/C=N.',
      a_hi: 'पिरोल: N का एकाकी युग्म π तंत्र में (4 + 2 = 6)। पिरिडीन: एकाकी युग्म तल में sp2 कक्षक में, गिना नहीं जाता।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why is cyclopentadiene far more acidic than cyclopentane?',
      q_hi: 'साइक्लोपेन्टाडाइईन, साइक्लोपेन्टेन से कहीं अधिक अम्लीय क्यों है?',
      a_en: 'Losing H⁺ from its CH2 gives the aromatic cyclopentadienyl anion (6π), a very stable conjugate base (pKa ≈ 16).',
      a_hi: 'CH2 से H⁺ निकलने पर ऐरोमैटिक साइक्लोपेन्टाडाइएनिल ऋणायन (6π) बनता है, जो अति स्थायी संयुग्मी क्षार है।',
      formula: '$$\\text{C}_5\\text{H}_6\\rightarrow\\text{C}_5\\text{H}_5^-+\\text{H}^+$$'
    },
    {
      d: 'H',
      q_en: 'Use heats of hydrogenation to show benzene’s extra stability.',
      q_hi: 'हाइड्रोजनीकरण ऊष्मा से बेंज़ीन का अतिरिक्त स्थायित्व दर्शाइए।',
      a_en: 'Cyclohexene: −120 kJ/mol, so 3 C=C would give −360. Benzene gives only −208 kJ/mol; difference ≈ 152 kJ/mol.',
      a_hi: 'साइक्लोहेक्सीन: −120 kJ/mol, तीन C=C पर −360 अपेक्षित। बेंज़ीन केवल −208; अंतर ≈ 152 kJ/mol।',
      formula: '$$3(-120)-(-208)\\approx-152\\text{ kJ mol}^{-1}$$'
    }
  ],

  /* ---------- SET 12: Preparation of Benzene & EAS Mechanism ---------- */
  12: [
    {
      d: 'E',
      q_en: 'How is benzene prepared from ethyne?',
      q_hi: 'एथाइन से बेंज़ीन का विरचन कैसे होता है?',
      a_en: 'Cyclic polymerisation: ethyne passed through a red-hot iron tube at 873 K.',
      a_hi: 'चक्रीय बहुलकीकरण: एथाइन को 873 K पर लाल तप्त लोहे की नली से प्रवाहित करना।',
      formula: '$$3\\text{HC}\\equiv\\text{CH}\\xrightarrow{\\text{Fe},873\\text{ K}}\\text{C}_6\\text{H}_6$$'
    },
    {
      d: 'E',
      q_en: 'How is benzene obtained from sodium benzoate?',
      q_hi: 'सोडियम बेंज़ोएट से बेंज़ीन कैसे प्राप्त होती है?',
      a_en: 'Heating with soda-lime (NaOH + CaO) causes decarboxylation, giving benzene and Na2CO3.',
      a_hi: 'सोडालाइम (NaOH + CaO) के साथ गर्म करने पर विकार्बोक्सिलन से बेंज़ीन व Na2CO3 बनते हैं।',
      formula: '$$\\text{C}_6\\text{H}_5\\text{COONa}+\\text{NaOH}\\xrightarrow{\\text{CaO},\\Delta}\\text{C}_6\\text{H}_6+\\text{Na}_2\\text{CO}_3$$'
    },
    {
      d: 'E',
      q_en: 'Give the reduction of phenol to benzene.',
      q_hi: 'फीनॉल का बेंज़ीन में अपचयन लिखिए।',
      a_en: 'Phenol vapour passed over heated zinc dust gives benzene and ZnO.',
      a_hi: 'फीनॉल वाष्प को गर्म ज़िंक चूर्ण पर प्रवाहित करने पर बेंज़ीन व ZnO बनते हैं।',
      formula: '$$\\text{C}_6\\text{H}_5\\text{OH}+\\text{Zn}\\xrightarrow{\\Delta}\\text{C}_6\\text{H}_6+\\text{ZnO}$$'
    },
    {
      d: 'E',
      q_en: 'What type of reaction is typical of benzene?',
      q_hi: 'बेंज़ीन की विशिष्ट अभिक्रिया किस प्रकार की होती है?',
      a_en: 'Electrophilic aromatic substitution (SEAr), which preserves the aromatic ring.',
      a_hi: 'इलेक्ट्रॉनस्नेही ऐरोमैटिक प्रतिस्थापन (SEAr), जो ऐरोमैटिक वलय को सुरक्षित रखता है।',
      formula: '$$\\text{C}_6\\text{H}_6+\\text{E}^+\\rightarrow\\text{C}_6\\text{H}_5\\text{E}+\\text{H}^+$$'
    },
    {
      d: 'E',
      q_en: 'What is an electrophile? Name two.',
      q_hi: 'इलेक्ट्रॉनस्नेही (electrophile) क्या है? दो नाम बताइए।',
      a_en: 'An electron-deficient species that seeks electrons, e.g. NO2⁺, Cl⁺, R⁺, SO3.',
      a_hi: 'इलेक्ट्रॉन-न्यून स्पीशीज़ जो इलेक्ट्रॉन चाहती है, जैसे NO2⁺, Cl⁺, R⁺, SO3।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'List the three steps of the SEAr mechanism.',
      q_hi: 'SEAr क्रियाविधि के तीन चरण लिखिए।',
      a_en: '1) Generation of E⁺; 2) attack of π cloud on E⁺ forming arenium ion (slow); 3) loss of H⁺ restoring aromaticity.',
      a_hi: '1) E⁺ का निर्माण; 2) π मेघ का E⁺ पर आक्रमण, एरेनियम आयन (मंद); 3) H⁺ निष्कासन से ऐरोमैटिकता पुनः।',
      formula: '$$\\text{C}_6\\text{H}_6\\xrightarrow{\\text{E}^+}[\\text{C}_6\\text{H}_6\\text{E}]^+\\xrightarrow{-\\text{H}^+}\\text{C}_6\\text{H}_5\\text{E}$$'
    },
    {
      d: 'M',
      q_en: 'Name the intermediate carbocation in SEAr.',
      q_hi: 'SEAr में मध्यवर्ती कार्बोकैटायन का नाम बताइए।',
      a_en: 'Arenium ion, also called σ-complex or Wheland intermediate; resonance-stabilised.',
      a_hi: 'एरेनियम आयन, जिसे σ-संकुल या व्हीलैंड मध्यवर्ती भी कहते हैं; अनुनाद-स्थायीकृत।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Which step of SEAr is the rate-determining step (RDS)?',
      q_hi: 'SEAr का वेग-निर्धारक चरण कौन-सा है?',
      a_en: 'Step 2: attack of the ring on E⁺, because aromaticity is temporarily lost (high activation energy).',
      a_hi: 'चरण 2: वलय का E⁺ पर आक्रमण, क्योंकि ऐरोमैटिकता अस्थायी रूप से नष्ट होती है (उच्च सक्रियण ऊर्जा)।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What happens to the attacked carbon in the arenium ion?',
      q_hi: 'एरेनियम आयन में आक्रमित कार्बन का क्या होता है?',
      a_en: 'It becomes sp3 hybridised (bearing H and E), so the ring is no longer fully conjugated.',
      a_hi: 'वह sp3 संकरित हो जाता है (H व E सहित), अतः वलय पूर्ण संयुग्मित नहीं रहती।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'In step 3 of SEAr, what removes the proton?',
      q_hi: 'SEAr के चरण 3 में प्रोटॉन कौन हटाता है?',
      a_en: 'A base such as HSO4⁻ or AlCl4⁻ takes H⁺, regenerating the aromatic ring (and the catalyst).',
      a_hi: 'HSO4⁻ या AlCl4⁻ जैसा क्षार H⁺ लेता है, जिससे ऐरोमैटिक वलय (व उत्प्रेरक) पुनः बनते हैं।',
      formula: '$$[\\text{C}_6\\text{H}_6\\text{E}]^++\\text{B}^-\\rightarrow\\text{C}_6\\text{H}_5\\text{E}+\\text{HB}$$'
    },
    {
      d: 'H',
      q_en: 'Why does benzene substitute rather than add under normal conditions?',
      q_hi: 'सामान्य परिस्थितियों में बेंज़ीन योग की बजाय प्रतिस्थापन क्यों देती है?',
      a_en: 'Addition would destroy ~150 kJ/mol resonance stabilisation; substitution regains the aromatic ring.',
      a_hi: 'योग से ~150 kJ/mol अनुनाद स्थायित्व नष्ट होता; प्रतिस्थापन से ऐरोमैटिक वलय पुनः मिल जाती है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Where is the positive charge in the arenium ion delocalised?',
      q_hi: 'एरेनियम आयन में धनावेश कहाँ विस्थानीकृत होता है?',
      a_en: 'At the ortho and para carbons relative to the sp3 carbon, via three resonance structures (not at meta).',
      a_hi: 'sp3 कार्बन के सापेक्ष ortho व para कार्बनों पर, तीन अनुनाद संरचनाओं द्वारा (meta पर नहीं)।',
      formula: '$$3\\ \\text{resonance forms: charge at }o,\\ o,\\ p$$'
    },
    {
      d: 'H',
      q_en: 'Nitration of C6H6 and C6D6 occurs at the same rate. What does this show?',
      q_hi: 'C6H6 व C6D6 का नाइट्रीकरण समान वेग से होता है। यह क्या दर्शाता है?',
      a_en: 'No kinetic isotope effect: C–H bond breaking is not in the RDS; E⁺ attack (step 2) is rate-determining.',
      a_hi: 'कोई गतिज समस्थानिक प्रभाव नहीं: C–H आबंध टूटना RDS में नहीं; E⁺ का आक्रमण (चरण 2) वेग-निर्धारक है।',
      formula: '$$k_{\\text{H}}/k_{\\text{D}}\\approx1$$'
    },
    {
      d: 'H',
      q_en: 'Compare benzene with ethene for attack by Br2: why is benzene less reactive?',
      q_hi: 'Br2 के आक्रमण में बेंज़ीन व एथीन की तुलना: बेंज़ीन कम क्रियाशील क्यों?',
      a_en: 'Benzene’s π electrons are delocalised and stabilised, so forming the arenium ion is costlier than a simple alkene’s bromonium ion.',
      a_hi: 'बेंज़ीन के π e⁻ विस्थानीकृत व स्थायी हैं, अतः एरेनियम आयन बनाना सामान्य ऐल्कीन के ब्रोमोनियम से महँगा है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why is a catalyst (Lewis acid) often needed in SEAr of benzene?',
      q_hi: 'बेंज़ीन के SEAr में प्रायः लुईस अम्ल उत्प्रेरक क्यों चाहिए?',
      a_en: 'Benzene is a weak nucleophile; the Lewis acid generates a much stronger electrophile (E⁺) from reagents like Cl2, RCl.',
      a_hi: 'बेंज़ीन दुर्बल नाभिकस्नेही है; लुईस अम्ल Cl2, RCl आदि से प्रबल इलेक्ट्रॉनस्नेही (E⁺) बनाता है।',
      formula: '$$\\text{Cl}_2+\\text{FeCl}_3\\rightarrow\\text{Cl}^++\\text{FeCl}_4^-$$'
    }
  ],

  /* ---------- SET 13: EAS Reactions of Benzene ---------- */
  13: [
    {
      d: 'E',
      q_en: 'Give reagents and conditions for nitration of benzene.',
      q_hi: 'बेंज़ीन के नाइट्रीकरण के अभिकर्मक व परिस्थितियाँ लिखिए।',
      a_en: 'Nitrating mixture (conc. HNO3 + conc. H2SO4) at 323–333 K gives nitrobenzene.',
      a_hi: 'नाइट्रीकारक मिश्रण (सांद्र HNO3 + सांद्र H2SO4), 323–333 K पर, नाइट्रोबेंज़ीन बनता है।',
      formula: '$$\\text{C}_6\\text{H}_6+\\text{HNO}_3\\xrightarrow{\\text{H}_2\\text{SO}_4,323\\text{–}333\\text{ K}}\\text{C}_6\\text{H}_5\\text{NO}_2+\\text{H}_2\\text{O}$$'
    },
    {
      d: 'E',
      q_en: 'How is chlorobenzene prepared from benzene?',
      q_hi: 'बेंज़ीन से क्लोरोबेंज़ीन कैसे बनाते हैं?',
      a_en: 'Cl2 in presence of anhydrous AlCl3 or FeCl3 (Lewis acid) in dark.',
      a_hi: 'निर्जल AlCl3 या FeCl3 (लुईस अम्ल) की उपस्थिति में Cl2, अँधेरे में।',
      formula: '$$\\text{C}_6\\text{H}_6+\\text{Cl}_2\\xrightarrow{\\text{AlCl}_3}\\text{C}_6\\text{H}_5\\text{Cl}+\\text{HCl}$$'
    },
    {
      d: 'E',
      q_en: 'Which reagent sulphonates benzene?',
      q_hi: 'बेंज़ीन का सल्फोनीकरण किस अभिकर्मक से होता है?',
      a_en: 'Fuming sulphuric acid (oleum, H2SO4 + SO3), giving benzenesulphonic acid.',
      a_hi: 'धूमिल सल्फ्यूरिक अम्ल (ओलियम, H2SO4 + SO3), जिससे बेंज़ीनसल्फोनिक अम्ल बनता है।',
      formula: '$$\\text{C}_6\\text{H}_6+\\text{H}_2\\text{SO}_4\\xrightarrow{\\text{SO}_3}\\text{C}_6\\text{H}_5\\text{SO}_3\\text{H}$$'
    },
    {
      d: 'E',
      q_en: 'What is Friedel–Crafts alkylation?',
      q_hi: 'फ्रीडेल-क्राफ्ट्स ऐल्किलीकरण क्या है?',
      a_en: 'Benzene reacts with alkyl halide in presence of anhydrous AlCl3 to give an alkylbenzene.',
      a_hi: 'बेंज़ीन निर्जल AlCl3 की उपस्थिति में ऐल्किल हैलाइड से अभिक्रिया कर ऐल्किलबेंज़ीन देती है।',
      formula: '$$\\text{C}_6\\text{H}_6+\\text{CH}_3\\text{Cl}\\xrightarrow{\\text{AlCl}_3}\\text{C}_6\\text{H}_5\\text{CH}_3+\\text{HCl}$$'
    },
    {
      d: 'E',
      q_en: 'Product of benzene with CH3COCl and anhydrous AlCl3?',
      q_hi: 'बेंज़ीन की CH3COCl व निर्जल AlCl3 से अभिक्रिया का उत्पाद?',
      a_en: 'Acetophenone (methyl phenyl ketone); this is Friedel–Crafts acylation.',
      a_hi: 'ऐसीटोफ़ीनोन (मेथिल फेनिल कीटोन); यह फ्रीडेल-क्राफ्ट्स ऐसिलीकरण है।',
      formula: '$$\\text{C}_6\\text{H}_6+\\text{CH}_3\\text{COCl}\\xrightarrow{\\text{AlCl}_3}\\text{C}_6\\text{H}_5\\text{COCH}_3+\\text{HCl}$$'
    },
    {
      d: 'M',
      q_en: 'How is the nitronium ion (NO2⁺) generated?',
      q_hi: 'नाइट्रोनियम आयन (NO2⁺) कैसे बनता है?',
      a_en: 'H2SO4 protonates HNO3, which loses water to form NO2⁺; HNO3 acts as a base here.',
      a_hi: 'H2SO4, HNO3 को प्रोटॉनित करता है जो जल त्यागकर NO2⁺ बनाता है; यहाँ HNO3 क्षार का कार्य करता है।',
      formula: '$$\\text{HNO}_3+2\\text{H}_2\\text{SO}_4\\rightarrow\\text{NO}_2^++\\text{H}_3\\text{O}^++2\\text{HSO}_4^-$$'
    },
    {
      d: 'M',
      q_en: 'What is the attacking electrophile in sulphonation, and is it reversible?',
      q_hi: 'सल्फोनीकरण में आक्रमणकारी इलेक्ट्रॉनस्नेही कौन-सा है? क्या यह उत्क्रमणीय है?',
      a_en: 'Neutral SO3 (or HSO3⁺). Yes, sulphonation is reversible; dilute acid/steam removes –SO3H.',
      a_hi: 'उदासीन SO3 (या HSO3⁺)। हाँ, उत्क्रमणीय है; तनु अम्ल/भाप से –SO3H हट जाता है।',
      formula: '$$\\text{C}_6\\text{H}_5\\text{SO}_3\\text{H}+\\text{H}_2\\text{O}\\rightleftharpoons\\text{C}_6\\text{H}_6+\\text{H}_2\\text{SO}_4$$'
    },
    {
      d: 'M',
      q_en: '1-Chloropropane + benzene + AlCl3: major product?',
      q_hi: '1-क्लोरोप्रोपेन + बेंज़ीन + AlCl3: मुख्य उत्पाद क्या है?',
      a_en: 'Isopropylbenzene (cumene), since the 1° carbocation rearranges by hydride shift to the more stable 2° cation.',
      a_hi: 'आइसोप्रोपिलबेंज़ीन (क्यूमीन), क्योंकि 1° कार्बोकैटायन हाइड्राइड विस्थापन से स्थायी 2° कैटायन बनता है।',
      formula: '$$\\text{C}_6\\text{H}_6+\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{Cl}\\xrightarrow{\\text{AlCl}_3}\\text{C}_6\\text{H}_5\\text{CH(CH}_3)_2$$'
    },
    {
      d: 'M',
      q_en: 'What is the electrophile in Friedel–Crafts acylation?',
      q_hi: 'फ्रीडेल-क्राफ्ट्स ऐसिलीकरण में इलेक्ट्रॉनस्नेही कौन-सा है?',
      a_en: 'Acylium ion, R–C≡O⁺, formed from RCOCl + AlCl3.',
      a_hi: 'ऐसिलियम आयन, R–C≡O⁺, जो RCOCl + AlCl3 से बनता है।',
      formula: '$$\\text{RCOCl}+\\text{AlCl}_3\\rightarrow\\text{R–C}\\equiv\\text{O}^++\\text{AlCl}_4^-$$'
    },
    {
      d: 'M',
      q_en: 'Name the role of AlCl3 in halogenation of benzene.',
      q_hi: 'बेंज़ीन के हैलोजनीकरण में AlCl3 की भूमिका बताइए।',
      a_en: 'It is a Lewis acid that polarises/withdraws Cl⁻ from Cl2, generating the electrophile Cl⁺ (as AlCl4⁻ salt).',
      a_hi: 'यह लुईस अम्ल है जो Cl2 से Cl⁻ खींचकर इलेक्ट्रॉनस्नेही Cl⁺ (AlCl4⁻ के साथ) उत्पन्न करता है।',
      formula: '$$\\text{Cl–Cl}+\\text{AlCl}_3\\rightarrow\\text{Cl}^++\\text{AlCl}_4^-$$'
    },
    {
      d: 'H',
      q_en: 'Why does Friedel–Crafts acylation give no rearrangement?',
      q_hi: 'फ्रीडेल-क्राफ्ट्स ऐसिलीकरण में पुनर्विन्यास क्यों नहीं होता?',
      a_en: 'The acylium ion is resonance-stabilised (R–C≡O⁺ ↔ R–C⁺=O) and cannot gain stability by shifting groups.',
      a_hi: 'ऐसिलियम आयन अनुनाद-स्थायीकृत है (R–C≡O⁺ ↔ R–C⁺=O); समूह खिसकाकर अधिक स्थायी नहीं बन सकता।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Benzene with excess Cl2/AlCl3 in dark: final product?',
      q_hi: 'बेंज़ीन की आधिक्य Cl2/AlCl3 से अँधेरे में अभिक्रिया का अंतिम उत्पाद?',
      a_en: 'Hexachlorobenzene, C6Cl6 (substitution of all six H atoms).',
      a_hi: 'हेक्साक्लोरोबेंज़ीन, C6Cl6 (सभी छः H का प्रतिस्थापन)।',
      formula: '$$\\text{C}_6\\text{H}_6+6\\text{Cl}_2\\xrightarrow{\\text{AlCl}_3,\\text{ dark}}\\text{C}_6\\text{Cl}_6+6\\text{HCl}$$'
    },
    {
      d: 'H',
      q_en: 'Why is Friedel–Crafts alkylation prone to polyalkylation?',
      q_hi: 'फ्रीडेल-क्राफ्ट्स ऐल्किलीकरण में बहु-ऐल्किलीकरण क्यों होता है?',
      a_en: 'The alkyl group is activating (+I), so the product is more reactive than benzene; use excess benzene.',
      a_hi: 'ऐल्किल समूह सक्रियक (+I) है, अतः उत्पाद बेंज़ीन से अधिक क्रियाशील होता है; आधिक्य बेंज़ीन लें।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Benzene + n-butyl chloride/AlCl3 mainly gives which product?',
      q_hi: 'बेंज़ीन + n-ब्यूटिल क्लोराइड/AlCl3 मुख्यतः क्या देता है?',
      a_en: 'sec-Butylbenzene, because the 1° cation shifts hydride to the more stable 2° cation.',
      a_hi: 'sec-ब्यूटिलबेंज़ीन, क्योंकि 1° कैटायन हाइड्राइड विस्थापन से अधिक स्थायी 2° कैटायन बनाता है।',
      formula: '$$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\overset{+}{\\text{C}}\\text{H}_2\\rightarrow\\text{CH}_3\\text{CH}_2\\overset{+}{\\text{C}}\\text{HCH}_3$$'
    },
    {
      d: 'H',
      q_en: 'Nitrobenzene is nitrated further: product and conditions?',
      q_hi: 'नाइट्रोबेंज़ीन का और नाइट्रीकरण: उत्पाद व परिस्थितियाँ?',
      a_en: '1,3-Dinitrobenzene (meta), under harsher conditions (fuming HNO3, conc. H2SO4, heat) as –NO2 deactivates the ring.',
      a_hi: '1,3-डाइनाइट्रोबेंज़ीन (meta), कठोर परिस्थितियों (धूमिल HNO3, सांद्र H2SO4, ऊष्मा) में, क्योंकि –NO2 वलय को निष्क्रिय करता है।',
      formula: '$$\\text{C}_6\\text{H}_5\\text{NO}_2\\xrightarrow{\\text{fuming HNO}_3/\\text{H}_2\\text{SO}_4}\\text{m-C}_6\\text{H}_4(\\text{NO}_2)_2$$'
    }
  ],

  /* ---------- SET 14: Addition, Combustion & Directive Influence ---------- */
  14: [
    {
      d: 'E',
      q_en: 'What does benzene give with H2 over Ni on heating?',
      q_hi: 'बेंज़ीन गर्म करने पर Ni की उपस्थिति में H2 से क्या देती है?',
      a_en: 'Cyclohexane (addition of 3 mol H2 under vigorous conditions).',
      a_hi: 'साइक्लोहेक्सेन (कठोर परिस्थितियों में 3 मोल H2 का योग)।',
      formula: '$$\\text{C}_6\\text{H}_6+3\\text{H}_2\\xrightarrow{\\text{Ni},\\Delta}\\text{C}_6\\text{H}_{12}$$'
    },
    {
      d: 'E',
      q_en: 'Why does benzene burn with a sooty flame?',
      q_hi: 'बेंज़ीन कालिख वाली ज्वाला से क्यों जलती है?',
      a_en: 'High carbon percentage (C:H = 1:1) leads to incomplete combustion and soot (unburnt carbon).',
      a_hi: 'उच्च कार्बन प्रतिशत (C:H = 1:1) से अपूर्ण दहन होता है और कालिख (अदग्ध कार्बन) बनती है।',
      formula: '$$2\\text{C}_6\\text{H}_6+15\\text{O}_2\\rightarrow12\\text{CO}_2+6\\text{H}_2\\text{O}$$'
    },
    {
      d: 'E',
      q_en: 'Name four ortho/para-directing groups.',
      q_hi: 'चार ortho/para-निर्देशी समूहों के नाम बताइए।',
      a_en: '–OH, –NH2, –OCH3, –CH3 (also –NHCOCH3, –C2H5). Most are activating.',
      a_hi: '–OH, –NH2, –OCH3, –CH3 (साथ ही –NHCOCH3, –C2H5)। अधिकांश सक्रियक हैं।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Name four meta-directing groups.',
      q_hi: 'चार meta-निर्देशी समूहों के नाम बताइए।',
      a_en: '–NO2, –CN, –CHO, –COOH (also –COR, –COOR, –SO3H). All are deactivating.',
      a_hi: '–NO2, –CN, –CHO, –COOH (साथ ही –COR, –COOR, –SO3H)। सभी निष्क्रियक हैं।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What are the products of nitration of toluene?',
      q_hi: 'टॉलूईन के नाइट्रीकरण के उत्पाद क्या हैं?',
      a_en: 'Mainly o-nitrotoluene and p-nitrotoluene, as –CH3 is o/p-directing.',
      a_hi: 'मुख्यतः o-नाइट्रोटॉलूईन व p-नाइट्रोटॉलूईन, क्योंकि –CH3 o/p-निर्देशी है।',
      formula: '$$\\text{C}_6\\text{H}_5\\text{CH}_3\\xrightarrow{\\text{HNO}_3/\\text{H}_2\\text{SO}_4}o\\text{-}/p\\text{-O}_2\\text{N–C}_6\\text{H}_4\\text{CH}_3$$'
    },
    {
      d: 'M',
      q_en: 'Benzene + Cl2 in UV light at 500 K: product and its names?',
      q_hi: 'बेंज़ीन + Cl2, UV प्रकाश में 500 K पर: उत्पाद व उसके नाम?',
      a_en: 'Benzene hexachloride, C6H6Cl6 (BHC, gammexane, lindane): a free-radical addition product.',
      a_hi: 'बेंज़ीन हेक्साक्लोराइड, C6H6Cl6 (BHC, गैमेक्सेन, लिंडेन): मुक्त मूलक योगज उत्पाद।',
      formula: '$$\\text{C}_6\\text{H}_6+3\\text{Cl}_2\\xrightarrow{h\\nu,500\\text{ K}}\\text{C}_6\\text{H}_6\\text{Cl}_6$$'
    },
    {
      d: 'M',
      q_en: 'Contrast C6Cl6 and C6H6Cl6 formation from benzene.',
      q_hi: 'बेंज़ीन से C6Cl6 व C6H6Cl6 बनने की तुलना कीजिए।',
      a_en: 'AlCl3/dark (ionic) gives substitution: C6Cl6. UV light (radical) gives addition: C6H6Cl6.',
      a_hi: 'AlCl3/अँधेरा (आयनिक) से प्रतिस्थापन: C6Cl6। UV प्रकाश (मूलक) से योग: C6H6Cl6।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What does an activating group do in electrophilic substitution?',
      q_hi: 'इलेक्ट्रॉनस्नेही प्रतिस्थापन में सक्रियक समूह क्या करता है?',
      a_en: 'It donates electrons (+R/+I), raising ring electron density at o/p and speeding up the reaction vs benzene.',
      a_hi: 'यह इलेक्ट्रॉन देता है (+R/+I), o/p पर वलय का इलेक्ट्रॉन घनत्व बढ़ाकर बेंज़ीन से तेज़ अभिक्रिया कराता है।',
      formula: '$$\\text{Rate:}\\ \\text{C}_6\\text{H}_5\\text{OH}>\\text{C}_6\\text{H}_6$$'
    },
    {
      d: 'M',
      q_en: 'Why are meta-directors deactivating?',
      q_hi: 'meta-निर्देशी समूह निष्क्रियक क्यों होते हैं?',
      a_en: '–R/–I groups withdraw electrons, mostly from o/p, so meta is the least deactivated site for attack.',
      a_hi: '–R/–I समूह इलेक्ट्रॉन खींचते हैं, मुख्यतः o/p से, अतः meta स्थिति सबसे कम निष्क्रिय होती है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Explain why –OH is an activating o/p director.',
      q_hi: 'समझाइए –OH सक्रियक o/p-निर्देशी क्यों है।',
      a_en: 'O lone pair donates into the ring (+R > –I), enriching o/p positions and stabilising the arenium ion.',
      a_hi: 'O का एकाकी युग्म वलय में जाता है (+R > –I), o/p स्थितियाँ समृद्ध होती हैं व एरेनियम आयन स्थायी होता है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Halogens are deactivating yet o/p-directing. Explain.',
      q_hi: 'हैलोजन निष्क्रियक होते हुए भी o/p-निर्देशी हैं। समझाइए।',
      a_en: 'Strong –I outweighs +R, lowering reactivity; but +R lone-pair donation stabilises the o/p arenium ions.',
      a_hi: 'प्रबल –I, +R से अधिक है (क्रियाशीलता घटती); पर +R एकाकी युग्म दान से o/p एरेनियम आयन स्थायी होते हैं।',
      formula: '$$-I>+R\\Rightarrow\\text{deactivating};\\ +R\\Rightarrow o/p$$'
    },
    {
      d: 'H',
      q_en: 'Why is acetanilide less activating than aniline?',
      q_hi: 'ऐसीटैनिलाइड, ऐनिलीन से कम सक्रियक क्यों है?',
      a_en: 'N lone pair is delocalised toward the C=O, so less is available to donate to the ring.',
      a_hi: 'N का एकाकी युग्म C=O की ओर विस्थानीकृत होता है, अतः वलय को देने हेतु कम उपलब्ध रहता है।',
      formula: '$$\\text{–NH}_2>\\text{–NHCOCH}_3>\\text{–CH}_3$$'
    },
    {
      d: 'H',
      q_en: 'Nitration of aniline in strongly acidic medium gives some meta product. Why?',
      q_hi: 'प्रबल अम्लीय माध्यम में ऐनिलीन के नाइट्रीकरण से कुछ meta उत्पाद क्यों मिलता है?',
      a_en: 'Aniline is protonated to anilinium ion (–NH3⁺), a strongly deactivating meta-directing group.',
      a_hi: 'ऐनिलीन प्रोटॉनित होकर ऐनिलिनियम आयन (–NH3⁺) बनती है, जो प्रबल निष्क्रियक meta-निर्देशी है।',
      formula: '$$\\text{C}_6\\text{H}_5\\text{NH}_2+\\text{H}^+\\rightarrow\\text{C}_6\\text{H}_5\\text{NH}_3^+$$'
    },
    {
      d: 'H',
      q_en: 'In nitration of chlorobenzene, which is major: ortho or para? Why?',
      q_hi: 'क्लोरोबेंज़ीन के नाइट्रीकरण में ortho या para में मुख्य कौन? क्यों?',
      a_en: 'Para, since the bulky Cl hinders ortho attack and the –I of Cl is stronger at the nearer ortho site.',
      a_hi: 'Para, क्योंकि भारी Cl ortho आक्रमण में बाधक है व Cl का –I निकट ortho पर अधिक प्रबल है।',
      formula: '$$\\text{C}_6\\text{H}_5\\text{Cl}\\xrightarrow{\\text{HNO}_3/\\text{H}_2\\text{SO}_4}p\\text{-}>o\\text{-nitrochlorobenzene}$$'
    },
    {
      d: 'H',
      q_en: 'Why is –CH3 activating and o/p-directing?',
      q_hi: '–CH3 सक्रियक व o/p-निर्देशी क्यों है?',
      a_en: '+I effect and hyperconjugation push electrons into the ring, stabilising the o/p arenium ions (3° cation form).',
      a_hi: '+I प्रभाव व अतिसंयुग्मन वलय में इलेक्ट्रॉन भेजते हैं, o/p एरेनियम आयनों (3° कैटायन रूप) को स्थायी करते हैं।',
      formula: ''
    }
  ],

  /* ---------- SET 15: Carcinogenicity & Chapter 9 JEE/NEET Roadmaps ---------- */
  15: [
    {
      d: 'E',
      q_en: 'Name three carcinogenic polynuclear aromatic hydrocarbons (PAHs).',
      q_hi: 'तीन कैंसरजन्य बहुनाभिकीय ऐरोमैटिक हाइड्रोकार्बनों (PAH) के नाम बताइए।',
      a_en: '1,2-Benzanthracene, 1,2-benzpyrene and 3-methylcholanthrene.',
      a_hi: '1,2-बेंज़ऐन्थ्रासीन, 1,2-बेंज़पाइरीन तथा 3-मेथिलकोलैन्थ्रीन।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'How do PAHs form in the environment?',
      q_hi: 'पर्यावरण में PAH कैसे बनते हैं?',
      a_en: 'By incomplete combustion of organic matter such as tobacco, coal, petroleum and fuel.',
      a_hi: 'तंबाकू, कोयला, पेट्रोलियम जैसे कार्बनिक पदार्थों के अपूर्ण दहन से।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'How do PAHs cause cancer?',
      q_hi: 'PAH कैंसर कैसे उत्पन्न करते हैं?',
      a_en: 'They enter the body and undergo various reactions, damaging DNA and producing cancerous growth.',
      a_hi: 'ये शरीर में प्रवेश कर विभिन्न अभिक्रियाओं से DNA को क्षतिग्रस्त कर कैंसरजन्य वृद्धि करते हैं।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Which simple test distinguishes ethane from ethene?',
      q_hi: 'कौन-सा सरल परीक्षण एथेन को एथीन से अलग करता है?',
      a_en: 'Ethene decolourises Br2 water / Br2 in CCl4 / Baeyer’s reagent; ethane does not.',
      a_hi: 'एथीन Br2 जल / CCl4 में Br2 / बेयर अभिकर्मक का रंग उड़ा देती है; एथेन नहीं।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Give the route from ethyne to benzene to toluene.',
      q_hi: 'एथाइन से बेंज़ीन व फिर टॉलूईन का मार्ग लिखिए।',
      a_en: 'Ethyne → benzene (red-hot Fe tube, 873 K) → toluene (CH3Cl, anhydrous AlCl3).',
      a_hi: 'एथाइन → बेंज़ीन (लाल तप्त Fe नली, 873 K) → टॉलूईन (CH3Cl, निर्जल AlCl3)।',
      formula: '$$\\text{C}_2\\text{H}_2\\rightarrow\\text{C}_6\\text{H}_6\\xrightarrow{\\text{CH}_3\\text{Cl/AlCl}_3}\\text{C}_6\\text{H}_5\\text{CH}_3$$'
    },
    {
      d: 'M',
      q_en: 'Convert CaC2 to nitrobenzene: list the steps.',
      q_hi: 'CaC2 से नाइट्रोबेंज़ीन बनाने के चरण लिखिए।',
      a_en: 'CaC2 + H2O → C2H2; 3 C2H2 (Fe, 873 K) → C6H6; C6H6 + HNO3/H2SO4 → C6H5NO2.',
      a_hi: 'CaC2 + H2O → C2H2; 3 C2H2 (Fe, 873 K) → C6H6; C6H6 + HNO3/H2SO4 → C6H5NO2।',
      formula: '$$\\text{CaC}_2\\rightarrow\\text{C}_2\\text{H}_2\\rightarrow\\text{C}_6\\text{H}_6\\rightarrow\\text{C}_6\\text{H}_5\\text{NO}_2$$'
    },
    {
      d: 'M',
      q_en: 'Convert benzene to acetophenone. Name the reaction and reagents.',
      q_hi: 'बेंज़ीन से ऐसीटोफ़ीनोन बनाइए। अभिक्रिया व अभिकर्मक बताइए।',
      a_en: 'Friedel–Crafts acylation: benzene + CH3COCl (or (CH3CO)2O) with anhydrous AlCl3.',
      a_hi: 'फ्रीडेल-क्राफ्ट्स ऐसिलीकरण: बेंज़ीन + CH3COCl (या (CH3CO)2O), निर्जल AlCl3 के साथ।',
      formula: '$$\\text{C}_6\\text{H}_6\\xrightarrow{\\text{CH}_3\\text{COCl/AlCl}_3}\\text{C}_6\\text{H}_5\\text{COCH}_3$$'
    },
    {
      d: 'M',
      q_en: 'Test to distinguish ethane, ethene and ethyne in one scheme.',
      q_hi: 'एथेन, एथीन व एथाइन में एक योजना से अंतर कीजिए।',
      a_en: 'Ammoniacal AgNO3: only ethyne gives white ppt. Of the rest, Br2 water decolourised by ethene only.',
      a_hi: 'अमोनियाकल AgNO3: केवल एथाइन श्वेत अवक्षेप देती है। शेष में Br2 जल का रंग केवल एथीन उड़ाती है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'How can you distinguish propyne from propene?',
      q_hi: 'प्रोपाइन व प्रोपीन में अंतर कैसे करेंगे?',
      a_en: 'Propyne (terminal alkyne) gives a white ppt with Tollens’ reagent / red ppt with ammoniacal Cu2Cl2; propene does not.',
      a_hi: 'प्रोपाइन (टर्मिनल) टॉलेन अभिकर्मक से श्वेत / अमोनियाकल Cu2Cl2 से लाल अवक्षेप देती है; प्रोपीन नहीं।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Convert ethene to ethyne in two steps.',
      q_hi: 'एथीन को दो चरणों में एथाइन में बदलिए।',
      a_en: 'Ethene + Br2 → 1,2-dibromoethane; then alc. KOH, then NaNH2 gives ethyne (double dehydrohalogenation).',
      a_hi: 'एथीन + Br2 → 1,2-डाइब्रोमोएथेन; फिर ऐल्को. KOH, फिर NaNH2 से एथाइन (द्वि-विहाइड्रोहैलोजनन)।',
      formula: '$$\\text{CH}_2\\text{=CH}_2\\xrightarrow{\\text{Br}_2}\\text{BrCH}_2\\text{CH}_2\\text{Br}\\xrightarrow{\\text{KOH, NaNH}_2}\\text{HC}\\equiv\\text{CH}$$'
    },
    {
      d: 'H',
      q_en: 'Why does aniline not undergo Friedel–Crafts reaction?',
      q_hi: 'ऐनिलीन फ्रीडेल-क्राफ्ट्स अभिक्रिया क्यों नहीं देती?',
      a_en: 'Basic –NH2 forms a salt/complex with AlCl3 (N⁺–Al⁻), creating a strongly deactivating group on the ring.',
      a_hi: 'क्षारीय –NH2, AlCl3 से लवण/संकुल (N⁺–Al⁻) बनाता है, जो वलय पर प्रबल निष्क्रियक समूह बनता है।',
      formula: '$$\\text{C}_6\\text{H}_5\\text{NH}_2+\\text{AlCl}_3\\rightarrow\\text{C}_6\\text{H}_5\\overset{+}{\\text{N}}\\text{H}_2\\text{–}\\overset{-}{\\text{Al}}\\text{Cl}_3$$'
    },
    {
      d: 'H',
      q_en: 'Why does nitrobenzene fail Friedel–Crafts, and what is its other use here?',
      q_hi: 'नाइट्रोबेंज़ीन फ्रीडेल-क्राफ्ट्स क्यों नहीं देता? यहाँ इसका अन्य उपयोग क्या है?',
      a_en: 'Strongly deactivated by –NO2. Being inert, it is used as a solvent for Friedel–Crafts reactions.',
      a_hi: '–NO2 से प्रबल निष्क्रिय। अक्रिय होने से यह फ्रीडेल-क्राफ्ट्स अभिक्रियाओं में विलायक के रूप में प्रयुक्त होता है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Convert benzene to m-chloronitrobenzene vs p-chloronitrobenzene: order of steps?',
      q_hi: 'बेंज़ीन से m-क्लोरोनाइट्रोबेंज़ीन बनाम p-क्लोरोनाइट्रोबेंज़ीन: चरणों का क्रम?',
      a_en: 'Meta: nitrate first, then chlorinate (–NO2 is m-director). Para: chlorinate first, then nitrate (–Cl is o/p).',
      a_hi: 'Meta: पहले नाइट्रीकरण, फिर क्लोरीनीकरण (–NO2 m-निर्देशी)। Para: पहले क्लोरीनीकरण, फिर नाइट्रीकरण (–Cl o/p)।',
      formula: '$$\\text{C}_6\\text{H}_6\\xrightarrow{\\text{HNO}_3}\\xrightarrow{\\text{Cl}_2/\\text{FeCl}_3}m\\text{-ClC}_6\\text{H}_4\\text{NO}_2$$'
    },
    {
      d: 'H',
      q_en: 'Prepare m-nitroacetophenone from benzene: which order, and why?',
      q_hi: 'बेंज़ीन से m-नाइट्रोऐसीटोफ़ीनोन बनाइए: कौन-सा क्रम, क्यों?',
      a_en: 'Acylation first (CH3COCl/AlCl3), then nitration; –COCH3 directs meta. Reverse order fails as nitrobenzene resists Friedel–Crafts.',
      a_hi: 'पहले ऐसिलीकरण (CH3COCl/AlCl3), फिर नाइट्रीकरण; –COCH3 meta-निर्देशी। उलटा क्रम विफल (नाइट्रोबेंज़ीन FC नहीं देता)।',
      formula: '$$\\text{C}_6\\text{H}_6\\xrightarrow{\\text{CH}_3\\text{COCl/AlCl}_3}\\xrightarrow{\\text{HNO}_3/\\text{H}_2\\text{SO}_4}m\\text{-O}_2\\text{NC}_6\\text{H}_4\\text{COCH}_3$$'
    },
    {
      d: 'H',
      q_en: 'Prepare p-nitrotoluene from benzene: which order, and why?',
      q_hi: 'बेंज़ीन से p-नाइट्रोटॉलूईन बनाइए: कौन-सा क्रम, क्यों?',
      a_en: 'Alkylate first (CH3Cl/AlCl3) to get toluene, then nitrate: –CH3 is o/p-directing; para is major. Reverse fails.',
      a_hi: 'पहले ऐल्किलीकरण (CH3Cl/AlCl3) से टॉलूईन, फिर नाइट्रीकरण: –CH3 o/p-निर्देशी; para मुख्य। उलटा क्रम विफल।',
      formula: '$$\\text{C}_6\\text{H}_6\\xrightarrow{\\text{CH}_3\\text{Cl/AlCl}_3}\\xrightarrow{\\text{HNO}_3/\\text{H}_2\\text{SO}_4}p\\text{-O}_2\\text{NC}_6\\text{H}_4\\text{CH}_3$$'
    }
  ]

};
