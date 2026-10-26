/* ==========================================================================
   CHEMISTRY EXPLORER - Class 11 Chemistry
   Chapter 3: Classification of Elements and Periodicity in Properties
   Flashcard database: 15 sets x 15 cards = 225 hand-crafted cards
   Each set: 5 Easy (E) + 5 Medium (M) + 5 Hard (H)
   Read by buildDeck(ch, s) via window.FLASHCARD_SETS_DB[chId][setNum]
   ========================================================================== */
window.FLASHCARD_SETS_DB = window.FLASHCARD_SETS_DB || {};
window.FLASHCARD_SETS_DB.ch3 = {

  /* ---------- SET 1: Need for Classification & Early Attempts ---------- */
  1: [
    {
      d: 'E',
      q_en: 'Why is the classification of elements needed?',
      q_hi: 'तत्वों का वर्गीकरण (classification) क्यों आवश्यक है?',
      a_en: 'To study the 118 known elements and their compounds systematically by grouping similar ones together.',
      a_hi: '118 ज्ञात तत्वों व उनके यौगिकों का अध्ययन समान तत्वों को एक साथ समूहित कर व्यवस्थित ढंग से करने के लिए।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'How did Lavoisier first classify the elements?',
      q_hi: 'लेवोज़ियर ने तत्वों का वर्गीकरण सबसे पहले कैसे किया?',
      a_en: 'Lavoisier (1789) divided the elements into two classes: metals and non-metals.',
      a_hi: 'लेवोज़ियर (1789) ने तत्वों को दो वर्गों में बाँटा: धातु (metals) और अधातु (non-metals)।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'State Dobereiner\'s Law of Triads.',
      q_hi: 'डोबेराइनर का त्रिक का नियम (Law of Triads) लिखिए।',
      a_en: 'In a triad of three similar elements, the atomic mass of the middle element is the mean of the other two.',
      a_hi: 'समान गुण वाले तीन तत्वों के त्रिक में बीच वाले तत्व का परमाणु द्रव्यमान शेष दोनों के द्रव्यमानों का माध्य होता है।',
      formula: '$$M_{\\text{middle}}=\\frac{M_1+M_3}{2}$$'
    },
    {
      d: 'E',
      q_en: 'Name three Dobereiner triads.',
      q_hi: 'डोबेराइनर के तीन त्रिक (triads) बताइए।',
      a_en: 'Li, Na, K; Ca, Sr, Ba; and Cl, Br, I.',
      a_hi: 'Li, Na, K; Ca, Sr, Ba; तथा Cl, Br, I।',
      formula: '$$\\text{Li, Na, K};\\ \\text{Ca, Sr, Ba};\\ \\text{Cl, Br, I}$$'
    },
    {
      d: 'E',
      q_en: 'State Newlands\' Law of Octaves.',
      q_hi: 'न्यूलैंड्स का अष्टक का नियम (Law of Octaves) लिखिए।',
      a_en: 'Arranged by increasing atomic mass, every eighth element resembles the first, like notes in a musical octave (1866).',
      a_hi: 'परमाणु द्रव्यमान के बढ़ते क्रम में प्रत्येक आठवाँ तत्व पहले जैसा होता है, संगीत के सप्तक की तरह (1866)।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What was Prout\'s hypothesis (1815)?',
      q_hi: 'प्राउट की परिकल्पना (Prout\'s hypothesis) क्या थी?',
      a_en: 'Atomic masses are whole-number multiples of hydrogen\'s mass, so all elements are built from hydrogen.',
      a_hi: 'सभी परमाणु द्रव्यमान हाइड्रोजन के द्रव्यमान के पूर्ण गुणज हैं, अतः सभी तत्व हाइड्रोजन से बने हैं।',
      formula: '$$M_{\\text{atom}}=n\\times M_{\\text{H}}$$'
    },
    {
      d: 'M',
      q_en: 'Verify Dobereiner\'s triad for Li (6.94), Na (23) and K (39.1).',
      q_hi: 'Li (6.94), Na (23) और K (39.1) के लिए डोबेराइनर त्रिक सत्यापित कीजिए।',
      a_en: 'Mean of Li and K = (6.94 + 39.1)/2 = 23.0, which matches Na (23).',
      a_hi: 'Li व K का माध्य = (6.94 + 39.1)/2 = 23.0, जो Na (23) के बराबर है।',
      formula: '$$\\frac{6.94+39.1}{2}\\approx23.0$$'
    },
    {
      d: 'M',
      q_en: 'Up to which element does Newlands\' Law of Octaves hold good?',
      q_hi: 'न्यूलैंड्स का अष्टक नियम किस तत्व तक लागू होता है?',
      a_en: 'Only up to calcium (Ca); beyond it, the eighth-element repetition no longer holds.',
      a_hi: 'केवल कैल्शियम (Ca) तक; इसके बाद आठवें तत्व पर गुणों की पुनरावृत्ति नहीं होती।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What did Lothar Meyer plot, and what did the curve show?',
      q_hi: 'लोथर मेयर ने क्या आलेखित किया और वक्र ने क्या दर्शाया?',
      a_en: 'Atomic volume vs atomic weight; similar elements fall at similar positions on the curve.',
      a_hi: 'परमाणु आयतन बनाम परमाणु भार; समान गुण वाले तत्व वक्र पर समान स्थितियों में आते हैं।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Which elements occupy the peaks and troughs of Meyer\'s atomic volume curve?',
      q_hi: 'मेयर के परमाणु आयतन वक्र के शिखरों व गर्तों पर कौन-से तत्व आते हैं?',
      a_en: 'Peaks: alkali metals. Troughs: transition metals (smaller atomic volumes).',
      a_hi: 'शिखर (peaks): क्षार धातुएँ। गर्त (troughs): संक्रमण धातुएँ (कम परमाणु आयतन)।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why do F, Cl, Br NOT form a Dobereiner triad?',
      q_hi: 'F, Cl, Br डोबेराइनर त्रिक क्यों नहीं बनाते?',
      a_en: 'Mean of F (19) and Br (80) is 49.5, not Cl (35.5). Cl, Br, I do satisfy the triad rule.',
      a_hi: 'F (19) व Br (80) का माध्य 49.5 है, Cl (35.5) नहीं। Cl, Br, I त्रिक नियम का पालन करते हैं।',
      formula: '$$\\frac{19+80}{2}=49.5\\neq35.5$$'
    },
    {
      d: 'H',
      q_en: 'Verify the Cl (35.5), Br (79.9), I (126.9) triad.',
      q_hi: 'Cl (35.5), Br (79.9), I (126.9) त्रिक का सत्यापन कीजिए।',
      a_en: '(35.5 + 126.9)/2 = 81.2, close to Br (79.9), so the triad holds approximately.',
      a_hi: '(35.5 + 126.9)/2 = 81.2, जो Br (79.9) के निकट है; अतः त्रिक लगभग सत्य है।',
      formula: '$$\\frac{35.5+126.9}{2}=81.2\\approx79.9$$'
    },
    {
      d: 'H',
      q_en: 'Why did Newlands\' Law of Octaves fail after noble gases were discovered?',
      q_hi: 'उत्कृष्ट गैसों की खोज के बाद न्यूलैंड्स का अष्टक नियम क्यों विफल हुआ?',
      a_en: 'Noble gases added a new element to each series, breaking the "every eighth element" pattern.',
      a_hi: 'उत्कृष्ट गैसों ने प्रत्येक श्रेणी में नया तत्व जोड़ दिया, जिससे "प्रत्येक आठवाँ तत्व" का क्रम टूट गया।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why does Prout\'s hypothesis fail for chlorine (35.5)?',
      q_hi: 'क्लोरीन (35.5) के लिए प्राउट की परिकल्पना क्यों विफल होती है?',
      a_en: 'Cl mass is not a whole number of H masses; it is an average of isotopes (35Cl, 37Cl).',
      a_hi: 'Cl का द्रव्यमान H के पूर्ण गुणज नहीं है; यह समस्थानिकों (³⁵Cl, ³⁷Cl) का औसत है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Where do halogens and alkaline earth metals lie on Meyer\'s curve?',
      q_hi: 'मेयर के वक्र पर हैलोजन व क्षारीय मृदा धातुएँ कहाँ आती हैं?',
      a_en: 'Halogens lie on the ascending portions; alkaline earth metals on the descending portions.',
      a_hi: 'हैलोजन आरोही भागों पर तथा क्षारीय मृदा धातुएँ अवरोही भागों पर स्थित होती हैं।',
      formula: ''
    }
  ],

  /* ---------- SET 2: Mendeleev's Periodic Table: Achievements & Limitations ---------- */
  2: [
    {
      d: 'E',
      q_en: 'State Mendeleev\'s Periodic Law.',
      q_hi: 'मेंडलीफ का आवर्त नियम (Periodic Law) लिखिए।',
      a_en: 'The properties of elements are a periodic function of their atomic weights.',
      a_hi: 'तत्वों के गुण उनके परमाणु भारों के आवर्ती फलन (periodic function) होते हैं।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'How many elements did Mendeleev arrange, and in how many groups?',
      q_hi: 'मेंडलीफ ने कितने तत्वों को कितने वर्गों में व्यवस्थित किया?',
      a_en: 'He arranged the 63 elements known then, by increasing atomic weight, into 8 groups and horizontal periods.',
      a_hi: 'उन्होंने तब ज्ञात 63 तत्वों को परमाणु भार के बढ़ते क्रम में 8 वर्गों तथा क्षैतिज आवर्तों में रखा।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Which general formulae of oxides and hydrides did Mendeleev use for grouping?',
      q_hi: 'मेंडलीफ ने समूहन हेतु ऑक्साइड व हाइड्राइड के कौन-से सामान्य सूत्र लिए?',
      a_en: 'Oxides from R2O to R2O7 and hydrides from RH to RH4 (R = the element).',
      a_hi: 'ऑक्साइड R₂O से R₂O₇ तक तथा हाइड्राइड RH से RH₄ तक (R = तत्व)।',
      formula: '$$\\text{R}_2\\text{O}\\ \\text{to}\\ \\text{R}_2\\text{O}_7;\\quad\\text{RH}\\ \\text{to}\\ \\text{RH}_4$$'
    },
    {
      d: 'E',
      q_en: 'Why did Mendeleev leave gaps in his table?',
      q_hi: 'मेंडलीफ ने अपनी सारणी में रिक्त स्थान क्यों छोड़े?',
      a_en: 'To keep similar elements in one group; the gaps were for undiscovered elements whose properties he predicted.',
      a_hi: 'समान तत्वों को एक वर्ग में रखने के लिए; रिक्त स्थान अज्ञात तत्वों के थे जिनके गुणों की उन्होंने भविष्यवाणी की।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Which modern elements are Mendeleev\'s Eka-aluminium and Eka-silicon?',
      q_hi: 'मेंडलीफ के एका-ऐलुमिनियम व एका-सिलिकॉन आज कौन-से तत्व हैं?',
      a_en: 'Eka-aluminium is gallium (Ga); Eka-silicon is germanium (Ge).',
      a_hi: 'एका-ऐलुमिनियम गैलियम (Ga) है; एका-सिलिकॉन जर्मेनियम (Ge) है।',
      formula: '$$\\text{Eka-Al}=\\text{Ga};\\quad\\text{Eka-Si}=\\text{Ge}$$'
    },
    {
      d: 'M',
      q_en: 'Which elements correspond to Eka-boron and Eka-manganese?',
      q_hi: 'एका-बोरॉन व एका-मैंगनीज़ आज कौन-से तत्व हैं?',
      a_en: 'Eka-boron is scandium (Sc); Eka-manganese is technetium (Tc).',
      a_hi: 'एका-बोरॉन स्कैंडियम (Sc) है; एका-मैंगनीज़ टेक्नीशियम (Tc) है।',
      formula: '$$\\text{Eka-B}=\\text{Sc};\\quad\\text{Eka-Mn}=\\text{Tc}$$'
    },
    {
      d: 'M',
      q_en: 'Name Mendeleev\'s inverted pairs, where the heavier element comes first.',
      q_hi: 'मेंडलीफ के उलटे युग्म बताइए जहाँ भारी तत्व पहले आता है।',
      a_en: 'Ar/K, Co/Ni, Te/I and Th/Pa, placed by properties rather than atomic weight.',
      a_hi: 'Ar/K, Co/Ni, Te/I तथा Th/Pa; इन्हें परमाणु भार की जगह गुणों के आधार पर रखा गया।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Whose atomic weights did Mendeleev correct?',
      q_hi: 'मेंडलीफ ने किन तत्वों के परमाणु भार संशोधित किए?',
      a_en: 'Be, In and U (e.g. Be from 13.5 to 9, U from 120 to 240), using valence and group position.',
      a_hi: 'Be, In व U (जैसे Be: 13.5 से 9, U: 120 से 240), संयोजकता व वर्ग-स्थिति के आधार पर।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Which elements formed Group VIII in Mendeleev\'s table?',
      q_hi: 'मेंडलीफ की सारणी के वर्ग VIII में कौन-से तत्व थे?',
      a_en: 'Triads of transition metals: Fe, Co, Ni; Ru, Rh, Pd; and Os, Ir, Pt.',
      a_hi: 'संक्रमण धातुओं के त्रिक: Fe, Co, Ni; Ru, Rh, Pd; तथा Os, Ir, Pt।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'List the main limitations of Mendeleev\'s table.',
      q_hi: 'मेंडलीफ की सारणी की मुख्य सीमाएँ बताइए।',
      a_en: 'Position of H, no place for isotopes, unplaced lanthanoids/actinoids, and anomalous pairs like Ar/K.',
      a_hi: 'H की स्थिति, समस्थानिकों के लिए स्थान नहीं, लैंथेनॉइड/ऐक्टिनॉइड अनिश्चित तथा Ar/K जैसे असंगत युग्म।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why were isotopes a problem for Mendeleev\'s periodic law?',
      q_hi: 'समस्थानिक (isotopes) मेंडलीफ के नियम के लिए समस्या क्यों थे?',
      a_en: 'Isotopes have different atomic weights but identical chemistry, so by weight they would need separate positions.',
      a_hi: 'समस्थानिकों के परमाणु भार भिन्न पर रासायनिक गुण समान होते हैं; भार के आधार पर उन्हें अलग स्थान चाहिए होते।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why was Te (127.6) placed before I (126.9)?',
      q_hi: 'Te (127.6) को I (126.9) से पहले क्यों रखा गया?',
      a_en: 'Properties decided: Te resembles S and Se (group VI) while I resembles halogens, though Te is heavier.',
      a_hi: 'गुणों के आधार पर: Te, S व Se (वर्ग VI) जैसा तथा I हैलोजन जैसा है, यद्यपि Te भारी है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'How did noble gases fit into Mendeleev\'s table when discovered?',
      q_hi: 'उत्कृष्ट गैसों की खोज पर वे मेंडलीफ की सारणी में कैसे समायोजित हुईं?',
      a_en: 'They were added as a new zero group between halogens and alkali metals without disturbing the order.',
      a_hi: 'इन्हें हैलोजन व क्षार धातुओं के बीच नए शून्य वर्ग में बिना क्रम बिगाड़े जोड़ दिया गया।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why is hydrogen\'s position problematic in Mendeleev\'s table?',
      q_hi: 'मेंडलीफ की सारणी में हाइड्रोजन की स्थिति समस्या क्यों थी?',
      a_en: 'H resembles alkali metals (ns1, forms H+) and halogens (forms H-, diatomic), so no single place fits.',
      a_hi: 'H क्षार धातुओं (ns¹, H⁺) तथा हैलोजनों (H⁻, द्विपरमाणुक) दोनों जैसा है; कोई एक स्थान उपयुक्त नहीं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Compare Mendeleev\'s predicted Eka-silicon with actual germanium.',
      q_hi: 'मेंडलीफ के अनुमानित एका-सिलिकॉन की वास्तविक जर्मेनियम से तुलना कीजिए।',
      a_en: 'Predicted mass 72 vs 72.6 found; density 5.5 vs 5.47 g/cm3; both form a dioxide (EsO2/GeO2).',
      a_hi: 'अनुमानित द्रव्यमान 72, प्राप्त 72.6; घनत्व 5.5 व 5.47 g/cm³; दोनों डाइऑक्साइड बनाते हैं (EsO₂/GeO₂)।',
      formula: ''
    }
  ],

  /* ---------- SET 3: Moseley's Experiment, Modern Periodic Law & Long Form Table ---------- */
  3: [
    {
      d: 'E',
      q_en: 'What did Henry Moseley discover about elements in 1913?',
      q_hi: '1913 में हेनरी मोज़ले ने तत्वों के बारे में क्या खोजा?',
      a_en: 'Using X-rays, he showed that atomic number (Z), not atomic mass, is the fundamental property of an element.',
      a_hi: 'X-किरणों द्वारा उन्होंने दिखाया कि तत्व का मूल गुण परमाणु क्रमांक (Z) है, परमाणु द्रव्यमान नहीं।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'State the Modern Periodic Law.',
      q_hi: 'आधुनिक आवर्त नियम (Modern Periodic Law) लिखिए।',
      a_en: 'The physical and chemical properties of elements are periodic functions of their atomic numbers.',
      a_hi: 'तत्वों के भौतिक व रासायनिक गुण उनके परमाणु क्रमांकों के आवर्ती फलन होते हैं।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'How many periods and groups does the long form of the periodic table have?',
      q_hi: 'दीर्घ आवर्त सारणी में कितने आवर्त और वर्ग हैं?',
      a_en: '7 periods (horizontal rows) and 18 groups (vertical columns).',
      a_hi: '7 आवर्त (क्षैतिज पंक्तियाँ) और 18 वर्ग (ऊर्ध्वाधर स्तंभ)।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'How does IUPAC number the groups in the modern table?',
      q_hi: 'IUPAC आधुनिक सारणी में वर्गों को कैसे क्रमांकित करता है?',
      a_en: 'Simply 1 to 18, replacing the old IA-VIIIA and IB-VIIIB notation.',
      a_hi: 'पुराने IA–VIIIA व IB–VIIIB की जगह केवल 1 से 18 तक।',
      formula: '$$\\text{Groups }1\\text{ to }18$$'
    },
    {
      d: 'E',
      q_en: 'How many elements are in each of the seven periods?',
      q_hi: 'सात आवर्तों में से प्रत्येक में कितने तत्व हैं?',
      a_en: '2, 8, 8, 18, 18, 32 and 32 (the "magic numbers"), a total of 118 elements.',
      a_hi: '2, 8, 8, 18, 18, 32 तथा 32 (जादुई संख्याएँ), कुल 118 तत्व।',
      formula: '$$2+8+8+18+18+32+32=118$$'
    },
    {
      d: 'M',
      q_en: 'State Moseley\'s relation between X-ray frequency and atomic number.',
      q_hi: 'X-किरण आवृत्ति और परमाणु क्रमांक के बीच मोज़ले का संबंध लिखिए।',
      a_en: 'The square root of frequency is linear in Z; a is a constant and b is the screening constant.',
      a_hi: 'आवृत्ति का वर्गमूल Z का रैखिक फलन है; a स्थिरांक तथा b परिरक्षण स्थिरांक है।',
      formula: '$$\\sqrt{\\nu}=a(Z-b)$$'
    },
    {
      d: 'M',
      q_en: 'What difference did Moseley\'s plots of sqrt(nu) against Z and against atomic mass show?',
      q_hi: 'मोज़ले के √ν के Z व परमाणु द्रव्यमान के विरुद्ध आलेखों में क्या अंतर मिला?',
      a_en: 'sqrt(nu) vs Z gives a straight line; sqrt(nu) vs atomic mass is not a straight line.',
      a_hi: '√ν बनाम Z सरल रेखा देता है; √ν बनाम परमाणु द्रव्यमान सरल रेखा नहीं देता।',
      formula: '$$\\sqrt{\\nu}\\ \\text{vs}\\ Z:\\ \\text{straight line}$$'
    },
    {
      d: 'M',
      q_en: 'How does the Modern Periodic Law resolve the Ar/K, Co/Ni, Te/I anomalies?',
      q_hi: 'आधुनिक नियम Ar/K, Co/Ni, Te/I की विसंगतियाँ कैसे दूर करता है?',
      a_en: 'Order follows Z, not mass: Ar (18) < K (19), Co (27) < Ni (28), Te (52) < I (53).',
      a_hi: 'क्रम Z से तय होता है, द्रव्यमान से नहीं: Ar (18) < K (19), Co (27) < Ni (28), Te (52) < I (53)।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'How does the Modern Periodic Law handle isotopes?',
      q_hi: 'आधुनिक नियम समस्थानिकों को कैसे समायोजित करता है?',
      a_en: 'Isotopes have the same Z, so they occupy the same position; atomic mass is irrelevant to placement.',
      a_hi: 'समस्थानिकों का Z समान होता है, इसलिए वे एक ही स्थान पर आते हैं; द्रव्यमान से स्थान तय नहीं होता।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Why does the 4th period contain 18 elements?',
      q_hi: 'चौथे आवर्त में 18 तत्व क्यों हैं?',
      a_en: 'The 4s, 3d and 4p orbitals fill here: 2 + 10 + 6 = 18 electrons.',
      a_hi: 'यहाँ 4s, 3d तथा 4p कक्षक भरते हैं: 2 + 10 + 6 = 18 इलेक्ट्रॉन।',
      formula: '$$4s^2\\,3d^{10}\\,4p^6:\\ 2+10+6=18$$'
    },
    {
      d: 'H',
      q_en: 'How were X-rays produced in Moseley\'s experiment?',
      q_hi: 'मोज़ले के प्रयोग में X-किरणें कैसे उत्पन्न की गईं?',
      a_en: 'High-speed electrons struck a metal anode, emitting characteristic X-rays whose frequency depends on the anode\'s Z.',
      a_hi: 'तीव्र इलेक्ट्रॉन धात्विक एनोड से टकराए जिससे विशिष्ट X-किरणें निकलीं; उनकी आवृत्ति एनोड के Z पर निर्भर थी।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why does the 6th period contain 32 elements?',
      q_hi: 'छठे आवर्त में 32 तत्व क्यों हैं?',
      a_en: 'The 6s, 4f, 5d and 6p orbitals fill: 2 + 14 + 10 + 6 = 32.',
      a_hi: '6s, 4f, 5d तथा 6p कक्षक भरते हैं: 2 + 14 + 10 + 6 = 32।',
      formula: '$$6s^2\\,4f^{14}\\,5d^{10}\\,6p^6:\\ 2+14+10+6=32$$'
    },
    {
      d: 'H',
      q_en: 'For K-alpha X-rays, nu is proportional to (Z-1)^2. If X has 4x the frequency of Na (Z = 11), find Z of X.',
      q_hi: 'K-α X-किरणों में ν ∝ (Z−1)² है। X की आवृत्ति Na (Z = 11) की 4 गुनी है; X का Z ज्ञात कीजिए।',
      a_en: '(Z-1)^2 = 4 x 10^2, so Z - 1 = 20 and Z = 21 (scandium).',
      a_hi: '(Z−1)² = 4 × 10², अतः Z − 1 = 20 तथा Z = 21 (स्कैंडियम)।',
      formula: '$$\\frac{\\nu_X}{\\nu_{Na}}=\\frac{(Z-1)^2}{10^2}=4\\Rightarrow Z=21$$'
    },
    {
      d: 'H',
      q_en: 'Which missing elements did Moseley\'s graph reveal?',
      q_hi: 'मोज़ले के आलेख ने कौन-से लुप्त तत्व प्रकट किए?',
      a_en: 'Gaps at Z = 43, 61, 72 and 75, later filled by Tc, Pm, Hf and Re.',
      a_hi: 'Z = 43, 61, 72 व 75 पर रिक्तियाँ, जो बाद में Tc, Pm, Hf तथा Re से भरीं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'In Moseley\'s relation, why is b about 1 for K-alpha lines?',
      q_hi: 'मोज़ले संबंध में K-α रेखाओं के लिए b लगभग 1 क्यों होता है?',
      a_en: 'The other K-shell electron screens the nucleus by about one unit, so the effective charge is about (Z - 1).',
      a_hi: 'K-कोश का दूसरा इलेक्ट्रॉन नाभिक को लगभग एक इकाई परिरक्षित करता है; प्रभावी आवेश ≈ (Z − 1)।',
      formula: '$$\\sqrt{\\nu}=a(Z-1)$$'
    }
  ],

  /* ---------- SET 4: IUPAC Nomenclature of Elements with Z > 100 ---------- */
  4: [
    {
      d: 'E',
      q_en: 'Why does IUPAC use systematic names for new elements?',
      q_hi: 'नए तत्वों के लिए IUPAC व्यवस्थित नाम क्यों प्रयोग करता है?',
      a_en: 'To give temporary names until discovery is verified and official names are approved, avoiding naming disputes.',
      a_hi: 'खोज की पुष्टि व आधिकारिक नाम स्वीकृत होने तक अस्थायी नाम देने तथा नामकरण विवाद से बचने के लिए।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Give the IUPAC digit roots for 0, 1, 2, 3 and 4.',
      q_hi: 'अंकों 0, 1, 2, 3 व 4 के IUPAC मूल (roots) बताइए।',
      a_en: '0 = nil, 1 = un, 2 = bi, 3 = tri, 4 = quad.',
      a_hi: '0 = nil, 1 = un, 2 = bi, 3 = tri, 4 = quad।',
      formula: '$$0\\text{ nil},\\,1\\text{ un},\\,2\\text{ bi},\\,3\\text{ tri},\\,4\\text{ quad}$$'
    },
    {
      d: 'E',
      q_en: 'Give the IUPAC digit roots for 5, 6, 7, 8 and 9.',
      q_hi: 'अंकों 5 से 9 के IUPAC मूल बताइए।',
      a_en: '5 = pent, 6 = hex, 7 = sept, 8 = oct, 9 = enn.',
      a_hi: '5 = pent, 6 = hex, 7 = sept, 8 = oct, 9 = enn।',
      formula: '$$5\\text{ pent},\\,6\\text{ hex},\\,7\\text{ sept},\\,8\\text{ oct},\\,9\\text{ enn}$$'
    },
    {
      d: 'E',
      q_en: 'What are the name and symbol of the element with Z = 101?',
      q_hi: 'Z = 101 वाले तत्व का नाम व प्रतीक क्या है?',
      a_en: 'Mendelevium, Md (temporary name unnilunium, Unu).',
      a_hi: 'मेंडेलीवियम, Md (अस्थायी नाम अननिलयूनियम, Unu)।',
      formula: '$$101\\rightarrow\\text{un-nil-un-ium}$$'
    },
    {
      d: 'E',
      q_en: 'How are systematic names and symbols of new elements formed?',
      q_hi: 'नए तत्वों के व्यवस्थित नाम व प्रतीक कैसे बनते हैं?',
      a_en: 'Join the digit roots of Z in order and add -ium; the symbol uses the first letters of the roots.',
      a_hi: 'Z के अंकों के मूल क्रम से जोड़कर -ium लगाएँ; प्रतीक में मूलों के पहले अक्षर लेते हैं।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What are the name and symbol of the element with Z = 104?',
      q_hi: 'Z = 104 वाले तत्व का नाम व प्रतीक क्या है?',
      a_en: 'Rutherfordium, Rf (earlier systematic name unnilquadium, Unq).',
      a_hi: 'रदरफोर्डियम, Rf (पूर्व व्यवस्थित नाम अननिलक्वाडियम, Unq)।',
      formula: '$$104\\rightarrow\\text{Unq}\\rightarrow\\text{Rf}$$'
    },
    {
      d: 'M',
      q_en: 'What are the name and symbol of the element with Z = 106?',
      q_hi: 'Z = 106 वाले तत्व का नाम व प्रतीक क्या है?',
      a_en: 'Seaborgium, Sg (earlier systematic name unnilhexium, Unh).',
      a_hi: 'सीबोर्गियम, Sg (पूर्व व्यवस्थित नाम अननिलहेक्सियम, Unh)।',
      formula: '$$106\\rightarrow\\text{Unh}\\rightarrow\\text{Sg}$$'
    },
    {
      d: 'M',
      q_en: 'Give the old systematic and the official name of Z = 118.',
      q_hi: 'Z = 118 का पुराना व्यवस्थित तथा आधिकारिक नाम बताइए।',
      a_en: 'Systematic: ununoctium (Uuo); official: oganesson (Og).',
      a_hi: 'व्यवस्थित: अननऑक्टियम (Uuo); आधिकारिक: ओगानेसन (Og)।',
      formula: '$$118\\rightarrow\\text{Uuo}\\rightarrow\\text{Og}$$'
    },
    {
      d: 'M',
      q_en: 'Give the systematic name, symbol and position of Z = 120.',
      q_hi: 'Z = 120 का व्यवस्थित नाम, प्रतीक व स्थिति बताइए।',
      a_en: 'Unbinilium (Ubn); predicted in Period 8, Group 2 (s-block).',
      a_hi: 'अनबाइनिलियम (Ubn); अनुमानित स्थिति: आठवाँ आवर्त, वर्ग 2 (s-ब्लॉक)।',
      formula: '$$120\\rightarrow\\text{un-bi-nil-ium}\\rightarrow\\text{Ubn}$$'
    },
    {
      d: 'M',
      q_en: 'State the spelling rules for bi + ium and enn + nil.',
      q_hi: 'वर्तनी नियम बताइए: bi + ium तथा enn + nil।',
      a_en: 'The final \'i\' of bi or tri is dropped before \'ium\' (bium, trium); enn + nil loses one n: ennil.',
      a_hi: '\'ium\' से पहले bi/tri का अंतिम \'i\' हटता है (bium, trium); enn + nil में एक n कम होकर ennil बनता है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Give the systematic name and symbol of Z = 109.',
      q_hi: 'Z = 109 का व्यवस्थित नाम व प्रतीक दीजिए।',
      a_en: 'Unnilennium (Une); the official name is meitnerium (Mt).',
      a_hi: 'अननिलएनियम (Une); आधिकारिक नाम मीटनेरियम (Mt)।',
      formula: '$$109\\rightarrow\\text{un-nil-enn-ium}$$'
    },
    {
      d: 'H',
      q_en: 'Predict the group and period of Z = 114 and give its name.',
      q_hi: 'Z = 114 का वर्ग व आवर्त पूर्वानुमानित कर नाम दीजिए।',
      a_en: 'Period 7, Group 14 (p-block): flerovium, Fl (systematic ununquadium, Uuq).',
      a_hi: 'आवर्त 7, वर्ग 14 (p-ब्लॉक): फ्लेरोवियम, Fl (व्यवस्थित: अनअनक्वाडियम, Uuq)।',
      formula: '$$114\\rightarrow\\text{un-un-quad-ium}$$'
    },
    {
      d: 'H',
      q_en: 'Predict the group, period and nature of Z = 117.',
      q_hi: 'Z = 117 का वर्ग, आवर्त व प्रकृति पूर्वानुमानित कीजिए।',
      a_en: 'Period 7, Group 17: a halogen, tennessine (Ts), systematic ununseptium (Uus).',
      a_hi: 'आवर्त 7, वर्ग 17: हैलोजन, टेनेसीन (Ts), व्यवस्थित अनअनसेप्टियम (Uus)।',
      formula: '$$117\\rightarrow\\text{un-un-sept-ium}$$'
    },
    {
      d: 'H',
      q_en: 'Predict the block, group and period of the undiscovered Z = 119.',
      q_hi: 'अनाविष्कृत Z = 119 का ब्लॉक, वर्ग व आवर्त पूर्वानुमानित कीजिए।',
      a_en: 'Period 8, Group 1 (s-block) alkali metal, named ununennium (Uue).',
      a_hi: 'आवर्त 8, वर्ग 1 (s-ब्लॉक) की क्षार धातु; नाम अनअनएनियम (Uue)।',
      formula: '$$119\\rightarrow\\text{un-un-enn-ium}$$'
    },
    {
      d: 'H',
      q_en: 'Give the systematic name and symbol of Z = 112.',
      q_hi: 'Z = 112 का व्यवस्थित नाम व प्रतीक दीजिए।',
      a_en: 'Ununbium (Uub), using bi + ium = bium; the official name is copernicium (Cn).',
      a_hi: 'अनअनबियम (Uub), (bi + ium = bium); आधिकारिक नाम कोपरनिशियम (Cn)।',
      formula: '$$112\\rightarrow\\text{un-un-bi-ium}$$'
    }
  ],

  /* ---------- SET 5: Electronic Configuration in Periods & s, p, d, f Blocks ---------- */
  5: [
    {
      d: 'E',
      q_en: 'How is the period of an element found from its electronic configuration?',
      q_hi: 'इलेक्ट्रॉनिक विन्यास से तत्व का आवर्त कैसे ज्ञात करते हैं?',
      a_en: 'The period number equals the highest principal quantum number (n) of the occupied outer shell.',
      a_hi: 'आवर्त संख्या बाह्यतम भरे कोश की उच्चतम मुख्य क्वांटम संख्या (n) के बराबर होती है।',
      formula: '$$\\text{Period}=n_{\\max}$$'
    },
    {
      d: 'E',
      q_en: 'What is the general outer configuration of s-block elements?',
      q_hi: 's-ब्लॉक तत्वों का सामान्य बाह्य विन्यास क्या है?',
      a_en: 'ns^1-2 (Groups 1 and 2: alkali and alkaline earth metals).',
      a_hi: 'ns¹⁻² (वर्ग 1 व 2: क्षार व क्षारीय मृदा धातुएँ)।',
      formula: '$$ns^{1\\text{–}2}$$'
    },
    {
      d: 'E',
      q_en: 'What is the general outer configuration of p-block elements?',
      q_hi: 'p-ब्लॉक तत्वों का सामान्य बाह्य विन्यास क्या है?',
      a_en: 'ns^2 np^1-6 (Groups 13 to 18); helium is the exception.',
      a_hi: 'ns² np¹⁻⁶ (वर्ग 13 से 18); हीलियम अपवाद है।',
      formula: '$$ns^2np^{1\\text{–}6}$$'
    },
    {
      d: 'E',
      q_en: 'How many elements do periods 1, 2 and 3 contain and which orbitals fill?',
      q_hi: 'आवर्त 1, 2 व 3 में कितने तत्व हैं और कौन-से कक्षक भरते हैं?',
      a_en: '2 (1s), 8 (2s, 2p) and 8 (3s, 3p).',
      a_hi: '2 (1s), 8 (2s, 2p) तथा 8 (3s, 3p)।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Why is helium placed in Group 18 though its configuration is 1s2?',
      q_hi: 'He का विन्यास 1s² होने पर भी उसे वर्ग 18 में क्यों रखा गया?',
      a_en: 'Its valence shell is completely filled and it is inert like Ne and Ar, so it sits with the noble gases.',
      a_hi: 'उसका संयोजी कोश पूर्ण भरा है और वह Ne, Ar जैसा अक्रिय है; इसलिए उत्कृष्ट गैसों के साथ रखा गया।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What is the general outer configuration of d-block elements?',
      q_hi: 'd-ब्लॉक तत्वों का सामान्य बाह्य विन्यास क्या है?',
      a_en: '(n-1)d^1-10 ns^0-2 (Groups 3 to 12).',
      a_hi: '(n−1)d¹⁻¹⁰ ns⁰⁻² (वर्ग 3 से 12)।',
      formula: '$$(n-1)d^{1\\text{–}10}ns^{0\\text{–}2}$$'
    },
    {
      d: 'M',
      q_en: 'What is the general outer configuration of f-block elements?',
      q_hi: 'f-ब्लॉक तत्वों का सामान्य बाह्य विन्यास क्या है?',
      a_en: '(n-2)f^1-14 (n-1)d^0-1 ns^2 (lanthanoids and actinoids).',
      a_hi: '(n−2)f¹⁻¹⁴ (n−1)d⁰⁻¹ ns² (लैंथेनॉइड व ऐक्टिनॉइड)।',
      formula: '$$(n-2)f^{1\\text{–}14}(n-1)d^{0\\text{–}1}ns^2$$'
    },
    {
      d: 'M',
      q_en: 'Find the period, block and group of Fe (Z = 26).',
      q_hi: 'Fe (Z = 26) का आवर्त, ब्लॉक व वर्ग ज्ञात कीजिए।',
      a_en: '[Ar]3d^6 4s^2: Period 4, d-block, Group 8 (6 + 2).',
      a_hi: '[Ar]3d⁶ 4s²: आवर्त 4, d-ब्लॉक, वर्ग 8 (6 + 2)।',
      formula: '$$\\text{Fe}:[\\text{Ar}]3d^64s^2$$'
    },
    {
      d: 'M',
      q_en: 'Find the period, block and group of Br (Z = 35).',
      q_hi: 'Br (Z = 35) का आवर्त, ब्लॉक व वर्ग ज्ञात कीजिए।',
      a_en: '[Ar]3d^10 4s^2 4p^5: Period 4, p-block, Group 17 (10 + 7).',
      a_hi: '[Ar]3d¹⁰ 4s² 4p⁵: आवर्त 4, p-ब्लॉक, वर्ग 17 (10 + 7)।',
      formula: '$$\\text{Br}:[\\text{Ar}]3d^{10}4s^24p^5$$'
    },
    {
      d: 'M',
      q_en: 'How do you get the group number from the outer configuration?',
      q_hi: 'बाह्य विन्यास से वर्ग संख्या कैसे निकालते हैं?',
      a_en: 's-block: ns electrons; p-block: 10 + (ns + np electrons); d-block: (n-1)d + ns electrons.',
      a_hi: 's-ब्लॉक: ns इलेक्ट्रॉन; p-ब्लॉक: 10 + (ns + np इलेक्ट्रॉन); d-ब्लॉक: (n−1)d + ns इलेक्ट्रॉन।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Pd (Z = 46) has 4d10 5s0. Give its period, block and group.',
      q_hi: 'Pd (Z = 46) का विन्यास 4d¹⁰ 5s⁰ है। इसका आवर्त, ब्लॉक व वर्ग बताइए।',
      a_en: 'Period 5, d-block, Group 10 (10 + 0), even though there is no 5s electron.',
      a_hi: 'आवर्त 5, d-ब्लॉक, वर्ग 10 (10 + 0), यद्यपि 5s में कोई इलेक्ट्रॉन नहीं है।',
      formula: '$$\\text{Pd}:[\\text{Kr}]4d^{10}5s^0$$'
    },
    {
      d: 'H',
      q_en: 'Locate Cu (Z = 29) in the periodic table.',
      q_hi: 'Cu (Z = 29) की आवर्त सारणी में स्थिति बताइए।',
      a_en: '[Ar]3d^10 4s^1: Period 4, d-block, Group 11 (10 + 1).',
      a_hi: '[Ar]3d¹⁰ 4s¹: आवर्त 4, d-ब्लॉक, वर्ग 11 (10 + 1)।',
      formula: '$$\\text{Cu}:[\\text{Ar}]3d^{10}4s^1$$'
    },
    {
      d: 'H',
      q_en: 'Locate Ce (Z = 58) and give its configuration.',
      q_hi: 'Ce (Z = 58) की स्थिति व विन्यास बताइए।',
      a_en: '[Xe]4f^1 5d^1 6s^2: Period 6, f-block (lanthanoid), Group 3.',
      a_hi: '[Xe]4f¹ 5d¹ 6s²: आवर्त 6, f-ब्लॉक (लैंथेनॉइड), वर्ग 3।',
      formula: '$$\\text{Ce}:[\\text{Xe}]4f^15d^16s^2$$'
    },
    {
      d: 'H',
      q_en: 'Locate Pb (Z = 82) and write its outer configuration.',
      q_hi: 'Pb (Z = 82) की स्थिति व बाह्य विन्यास लिखिए।',
      a_en: '6s^2 6p^2 (after 4f^14 5d^10): Period 6, p-block, Group 14 (10 + 4).',
      a_hi: '6s² 6p² (4f¹⁴ 5d¹⁰ के बाद): आवर्त 6, p-ब्लॉक, वर्ग 14 (10 + 4)।',
      formula: '$$\\text{Pb}:[\\text{Xe}]4f^{14}5d^{10}6s^26p^2$$'
    },
    {
      d: 'H',
      q_en: 'Locate Hf (Z = 72) in the periodic table.',
      q_hi: 'Hf (Z = 72) की आवर्त सारणी में स्थिति बताइए।',
      a_en: '[Xe]4f^14 5d^2 6s^2: Period 6, d-block, Group 4 (2 + 2).',
      a_hi: '[Xe]4f¹⁴ 5d² 6s²: आवर्त 6, d-ब्लॉक, वर्ग 4 (2 + 2)।',
      formula: '$$\\text{Hf}:[\\text{Xe}]4f^{14}5d^26s^2$$'
    }
  ],

  /* ---------- SET 6: Metals, Non-metals, Metalloids, Transition & Inner-Transition Elements ---------- */
  6: [
    {
      d: 'E',
      q_en: 'What fraction of known elements are metals and where are they placed?',
      q_hi: 'ज्ञात तत्वों में कितने धातुएँ हैं और वे कहाँ स्थित हैं?',
      a_en: 'More than 78% are metals, located on the left and in the centre of the periodic table.',
      a_hi: '78% से अधिक धातुएँ हैं, जो आवर्त सारणी के बाईं ओर व मध्य में स्थित हैं।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Where are non-metals located in the periodic table?',
      q_hi: 'अधातुएँ आवर्त सारणी में कहाँ स्थित हैं?',
      a_en: 'In the upper right-hand corner (mainly p-block); only about 20 elements are non-metals.',
      a_hi: 'ऊपरी दाएँ कोने में (मुख्यतः p-ब्लॉक); केवल लगभग 20 तत्व अधातु हैं।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Name the metalloids (semi-metals) of the periodic table.',
      q_hi: 'उपधातुओं (semi-metals) के नाम बताइए।',
      a_en: 'B, Si, Ge, As, Sb, Te and Po, lying along the zig-zag line between metals and non-metals.',
      a_hi: 'B, Si, Ge, As, Sb, Te तथा Po, जो धातु व अधातु के बीच की ज़िग-ज़ैग रेखा पर स्थित हैं।',
      formula: '$$\\text{B, Si, Ge, As, Sb, Te, Po}$$'
    },
    {
      d: 'E',
      q_en: 'What are representative (main-group) elements?',
      q_hi: 'प्रतिनिधि (मुख्य समूह) तत्व क्या हैं?',
      a_en: 'The s-block and p-block elements, i.e. Groups 1, 2 and 13 to 18.',
      a_hi: 's-ब्लॉक व p-ब्लॉक के तत्व, अर्थात् वर्ग 1, 2 तथा 13 से 18।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Give the family names of Groups 15, 16 and 17.',
      q_hi: 'वर्ग 15, 16 व 17 के परिवार नाम बताइए।',
      a_en: 'Group 15: pnictogens; Group 16: chalcogens (ore-formers); Group 17: halogens (salt-formers).',
      a_hi: 'वर्ग 15: निक्टोजन; वर्ग 16: चैल्कोजन (अयस्क बनाने वाले); वर्ग 17: हैलोजन (लवण बनाने वाले)।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Define transition elements.',
      q_hi: 'संक्रमण तत्वों (transition elements) की परिभाषा दीजिए।',
      a_en: 'd-block elements with partly filled d-orbitals in the atom or in their common oxidation states (Groups 3 to 12).',
      a_hi: 'd-ब्लॉक के वे तत्व जिनके परमाणु या सामान्य ऑक्सीकरण अवस्था में d-कक्षक आंशिक भरे हों (वर्ग 3 से 12)।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Why are Zn, Cd and Hg not regarded as true transition elements?',
      q_hi: 'Zn, Cd व Hg को वास्तविक संक्रमण तत्व क्यों नहीं माना जाता?',
      a_en: 'They have d^10 in the atom and in the common +2 ion, so no partly filled d-orbital.',
      a_hi: 'इनमें परमाणु व सामान्य +2 आयन दोनों में d¹⁰ विन्यास होता है; d-कक्षक आंशिक भरे नहीं होते।',
      formula: '$$\\text{Zn}^{2+}:3d^{10}$$'
    },
    {
      d: 'M',
      q_en: 'Give Z, period and group of lanthanoids and actinoids.',
      q_hi: 'लैंथेनॉइड व ऐक्टिनॉइड के Z, आवर्त व वर्ग बताइए।',
      a_en: 'Lanthanoids Z = 58-71 (Period 6) and actinoids Z = 90-103 (Period 7), both in Group 3.',
      a_hi: 'लैंथेनॉइड Z = 58–71 (आवर्त 6) तथा ऐक्टिनॉइड Z = 90–103 (आवर्त 7), दोनों वर्ग 3 में।',
      formula: '$$Z=58\\text{–}71;\\ \\ Z=90\\text{–}103$$'
    },
    {
      d: 'M',
      q_en: 'What are transuranic elements?',
      q_hi: 'यूरेनियम-पश्च (transuranic) तत्व क्या हैं?',
      a_en: 'Elements with Z > 92, beyond uranium; they are mostly man-made radioactive elements.',
      a_hi: 'Z > 92 वाले तत्व, जो यूरेनियम के बाद आते हैं; ये अधिकांशतः कृत्रिम रेडियोधर्मी तत्व हैं।',
      formula: '$$Z>92$$'
    },
    {
      d: 'M',
      q_en: 'What intermediate properties do metalloids show?',
      q_hi: 'उपधातुएँ (metalloids) कौन-से मध्यवर्ती गुण दर्शाती हैं?',
      a_en: 'They behave as both metals and non-metals, e.g. Si and Ge are semiconductors with weakly acidic oxides.',
      a_hi: 'ये धातु व अधातु दोनों जैसा व्यवहार करती हैं; Si, Ge अर्धचालक हैं और इनके ऑक्साइड दुर्बल अम्लीय हैं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Is copper a transition element though Cu is 3d10 4s1?',
      q_hi: 'Cu का विन्यास 3d¹⁰ 4s¹ है, फिर भी क्या यह संक्रमण तत्व है?',
      a_en: 'Yes: Cu2+ (the common ion) is 3d^9, which has a partly filled d-subshell.',
      a_hi: 'हाँ: Cu²⁺ (सामान्य आयन) 3d⁹ है, जिसमें d-उपकोश आंशिक भरा है।',
      formula: '$$\\text{Cu}^{2+}:3d^9$$'
    },
    {
      d: 'H',
      q_en: 'Sc3+ has no d electron. Why is Sc still a transition element?',
      q_hi: 'Sc³⁺ में कोई d इलेक्ट्रॉन नहीं है। फिर भी Sc संक्रमण तत्व क्यों है?',
      a_en: 'The Sc atom is 3d^1 4s^2, with a partly filled d-subshell, so it qualifies.',
      a_hi: 'Sc परमाणु 3d¹ 4s² है जिसमें d-उपकोश आंशिक भरा है; इसलिए यह योग्य है।',
      formula: '$$\\text{Sc}:[\\text{Ar}]3d^14s^2$$'
    },
    {
      d: 'H',
      q_en: 'How many true transition elements are in the 3d series (Z = 21-30)?',
      q_hi: '3d श्रेणी (Z = 21–30) में कितने वास्तविक संक्रमण तत्व हैं?',
      a_en: 'Nine (Sc to Cu); Zn is excluded as its d-subshell is full.',
      a_hi: 'नौ (Sc से Cu); Zn को छोड़ा जाता है क्योंकि उसका d-उपकोश पूर्ण भरा है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why are lanthanoids and actinoids placed at the bottom of the table?',
      q_hi: 'लैंथेनॉइड व ऐक्टिनॉइड सारणी के नीचे क्यों रखे जाते हैं?',
      a_en: 'They are 14 elements each in Group 3; placing them in the body would make the table too wide.',
      a_hi: 'प्रत्येक के 14 तत्व वर्ग 3 में आते हैं; इन्हें मुख्य भाग में रखने से सारणी बहुत चौड़ी हो जाती।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Which two elements are liquid at room temperature, and which blocks are they in?',
      q_hi: 'कमरे के ताप पर द्रव दो तत्व कौन-से हैं और किन ब्लॉकों में हैं?',
      a_en: 'Mercury (Hg, d-block metal) and bromine (Br, p-block non-metal).',
      a_hi: 'पारा (Hg, d-ब्लॉक धातु) तथा ब्रोमीन (Br, p-ब्लॉक अधातु)।',
      formula: ''
    }
  ],

  /* ---------- SET 7: Atomic Radius: Types, Periodic Trends & Exceptions ---------- */
  7: [
    {
      d: 'E',
      q_en: 'What is atomic radius?',
      q_hi: 'परमाण्वीय त्रिज्या (atomic radius) क्या है?',
      a_en: 'The distance from the nucleus to the outermost electron shell; it cannot be measured directly.',
      a_hi: 'नाभिक से बाह्यतम इलेक्ट्रॉन कोश तक की दूरी; इसे सीधे नहीं मापा जा सकता।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Define covalent radius.',
      q_hi: 'सहसंयोजक त्रिज्या (covalent radius) परिभाषित कीजिए।',
      a_en: 'Half the distance between nuclei of two bonded atoms of the same element, e.g. Cl-Cl 198 pm gives 99 pm.',
      a_hi: 'एक ही तत्व के दो आबंधित परमाणुओं के नाभिकों की दूरी का आधा, जैसे Cl–Cl 198 pm से 99 pm।',
      formula: '$$r_{\\text{cov}}=\\frac{d_{\\text{Cl-Cl}}}{2}=99\\text{ pm}$$'
    },
    {
      d: 'E',
      q_en: 'Define metallic radius.',
      q_hi: 'धात्विक त्रिज्या (metallic radius) परिभाषित कीजिए।',
      a_en: 'Half the internuclear distance between adjacent metal atoms in a metallic crystal, e.g. Na = 186 pm.',
      a_hi: 'धात्विक क्रिस्टल में पास-पास के धातु परमाणुओं के नाभिकों की दूरी का आधा, जैसे Na = 186 pm।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Define van der Waals radius.',
      q_hi: 'वांडरवाल्स त्रिज्या (van der Waals radius) परिभाषित कीजिए।',
      a_en: 'Half the distance between nuclei of two non-bonded, just-touching atoms of the same element in the solid state.',
      a_hi: 'ठोस अवस्था में एक ही तत्व के दो अबंधित, केवल स्पर्श करते परमाणुओं के नाभिकों की दूरी का आधा।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Arrange the three types of atomic radius in order.',
      q_hi: 'तीनों प्रकार की परमाण्वीय त्रिज्याओं को क्रम में लिखिए।',
      a_en: 'van der Waals > metallic > covalent; vdW atoms only touch, with no orbital overlap.',
      a_hi: 'वांडरवाल्स > धात्विक > सहसंयोजक; वांडरवाल्स में परमाणु बिना कक्षक अतिव्यापन के केवल स्पर्श करते हैं।',
      formula: '$$r_{\\text{vdW}}>r_{\\text{metallic}}>r_{\\text{covalent}}$$'
    },
    {
      d: 'M',
      q_en: 'Why does atomic radius decrease across a period?',
      q_hi: 'एक आवर्त में परमाण्वीय त्रिज्या क्यों घटती है?',
      a_en: 'Z_eff rises as Z increases while electrons enter the same shell, pulling outer electrons closer.',
      a_hi: 'उसी कोश में इलेक्ट्रॉन जुड़ने पर Z बढ़ने से Zeff बढ़ता है, जो बाह्य इलेक्ट्रॉनों को नाभिक के पास खींचता है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Why does atomic radius increase down a group?',
      q_hi: 'वर्ग में नीचे जाने पर परमाण्वीय त्रिज्या क्यों बढ़ती है?',
      a_en: 'New shells (higher n) are added, and the increased shielding outweighs the rise in nuclear charge.',
      a_hi: 'नए कोश (उच्च n) जुड़ते हैं तथा बढ़ा हुआ परिरक्षण नाभिकीय आवेश की वृद्धि पर भारी पड़ता है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What is effective nuclear charge (Z_eff)?',
      q_hi: 'प्रभावी नाभिकीय आवेश (Zeff) क्या है?',
      a_en: 'The net positive charge felt by an outer electron: nuclear charge Z minus the shielding constant sigma.',
      a_hi: 'बाह्य इलेक्ट्रॉन द्वारा अनुभव किया गया नेट धनावेश: नाभिकीय आवेश Z में से परिरक्षण स्थिरांक σ घटाने पर।',
      formula: '$$Z_{\\text{eff}}=Z-\\sigma$$'
    },
    {
      d: 'M',
      q_en: 'Arrange Li, Be, B, C in decreasing atomic radius.',
      q_hi: 'Li, Be, B, C को परमाण्वीय त्रिज्या के घटते क्रम में लिखिए।',
      a_en: 'Li > Be > B > C (Z_eff increases across Period 2).',
      a_hi: 'Li > Be > B > C (आवर्त 2 में Zeff बढ़ता है)।',
      formula: '$$r:\\ \\text{Li}>\\text{Be}>\\text{B}>\\text{C}$$'
    },
    {
      d: 'M',
      q_en: 'How does atomic radius vary in the 3d series from Sc to Zn?',
      q_hi: 'Sc से Zn तक 3d श्रेणी में परमाण्वीय त्रिज्या कैसे बदलती है?',
      a_en: 'Decreases Sc to Mn, nearly constant for Fe, Co, Ni, then increases at Cu and Zn (electron repulsion).',
      a_hi: 'Sc से Mn घटती है, Fe, Co, Ni में लगभग स्थिर, फिर Cu व Zn में बढ़ती है (इलेक्ट्रॉन प्रतिकर्षण)।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why does Ne show a much larger radius (160 pm) than F (72 pm)?',
      q_hi: 'Ne की त्रिज्या (160 pm) F (72 pm) से इतनी अधिक क्यों दिखती है?',
      a_en: 'Noble gas radii are van der Waals values (no bonding); F is a covalent radius, which is smaller.',
      a_hi: 'उत्कृष्ट गैसों की त्रिज्या वांडरवाल्स मान है (आबंध नहीं); F की सहसंयोजक त्रिज्या छोटी होती है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'What is lanthanoid contraction and its cause?',
      q_hi: 'लैंथेनॉइड संकुचन (lanthanoid contraction) क्या है और इसका कारण?',
      a_en: 'Steady decrease in size from La to Lu, as poorly shielding 4f electrons fail to offset rising nuclear charge.',
      a_hi: 'La से Lu तक आकार का क्रमिक घटना; 4f इलेक्ट्रॉन कमज़ोर परिरक्षण से बढ़ते नाभिकीय आवेश को संतुलित नहीं कर पाते।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why do Zr and Hf have nearly identical radii (160 and 159 pm)?',
      q_hi: 'Zr व Hf की त्रिज्याएँ लगभग समान (160 व 159 pm) क्यों हैं?',
      a_en: 'Lanthanoid contraction in between cancels the size gain from the extra shell, so their properties are almost the same.',
      a_hi: 'बीच का लैंथेनॉइड संकुचन अतिरिक्त कोश से बढ़े आकार को निरस्त कर देता है, अतः गुण लगभग समान हैं।',
      formula: '$$r_{\\text{Zr}}\\approx r_{\\text{Hf}}$$'
    },
    {
      d: 'H',
      q_en: 'Why is Ga (135 pm) smaller than Al (143 pm) though it lies below Al?',
      q_hi: 'Ga (135 pm), Al (143 pm) के नीचे होकर भी उससे छोटा क्यों है?',
      a_en: 'Poorly shielding 3d^10 electrons raise Z_eff on Ga, so its size is about the same as or less than Al.',
      a_hi: 'कमज़ोर परिरक्षण करने वाले 3d¹⁰ इलेक्ट्रॉन Ga पर Zeff बढ़ाते हैं; अतः उसका आकार Al जितना या कम है।',
      formula: '$$r_{\\text{Al}}\\approx r_{\\text{Ga}}$$'
    },
    {
      d: 'H',
      q_en: 'Arrange Li, Be, Na, Mg in decreasing atomic radius.',
      q_hi: 'Li, Be, Na, Mg को परमाण्वीय त्रिज्या के घटते क्रम में लिखिए।',
      a_en: 'Na (186) > Mg (160) > Li (152) > Be (112 pm): note that Mg is larger than Li.',
      a_hi: 'Na (186) > Mg (160) > Li (152) > Be (112 pm): ध्यान दें Mg, Li से बड़ा है।',
      formula: '$$\\text{Na}>\\text{Mg}>\\text{Li}>\\text{Be}$$'
    }
  ],

  /* ---------- SET 8: Ionic Radius & Isoelectronic Species ---------- */
  8: [
    {
      d: 'E',
      q_en: 'Why is a cation smaller than its parent atom?',
      q_hi: 'धनायन अपने जनक परमाणु से छोटा क्यों होता है?',
      a_en: 'Electron loss reduces repulsion and often removes a whole shell, so Z_eff per electron increases.',
      a_hi: 'इलेक्ट्रॉन त्यागने से प्रतिकर्षण घटता है और प्रायः एक कोश हट जाता है, इसलिए प्रति इलेक्ट्रॉन Zeff बढ़ता है।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Why is an anion larger than its parent atom?',
      q_hi: 'ऋणायन अपने जनक परमाणु से बड़ा क्यों होता है?',
      a_en: 'Added electrons increase repulsion while nuclear charge stays the same, so Z_eff falls and the cloud expands.',
      a_hi: 'जुड़े इलेक्ट्रॉन प्रतिकर्षण बढ़ाते हैं जबकि नाभिकीय आवेश समान रहता है; Zeff घटता है और बादल फैलता है।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Compare the sizes of Na with Na+ and Cl with Cl-.',
      q_hi: 'Na की Na⁺ से तथा Cl की Cl⁻ से आकार तुलना कीजिए।',
      a_en: 'Na+ (102 pm) < Na (186 pm); Cl- (181 pm) > Cl (99 pm).',
      a_hi: 'Na⁺ (102 pm) < Na (186 pm); Cl⁻ (181 pm) > Cl (99 pm)।',
      formula: '$$\\text{Na}^+<\\text{Na};\\quad\\text{Cl}^->\\text{Cl}$$'
    },
    {
      d: 'E',
      q_en: 'What are isoelectronic species? Give an example.',
      q_hi: 'समइलेक्ट्रॉनिक स्पीशीज़ (isoelectronic species) क्या हैं? उदाहरण दीजिए।',
      a_en: 'Atoms or ions with the same number of electrons, e.g. O2-, F-, Na+, Mg2+ (10 electrons each).',
      a_hi: 'समान इलेक्ट्रॉन संख्या वाले परमाणु/आयन, जैसे O²⁻, F⁻, Na⁺, Mg²⁺ (प्रत्येक में 10 इलेक्ट्रॉन)।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Arrange H+, H and H- by size.',
      q_hi: 'H⁺, H तथा H⁻ को आकार के क्रम में लिखिए।',
      a_en: 'H- > H > H+; H+ is a bare proton (about 10^-3 pm) while H- carries two electrons.',
      a_hi: 'H⁻ > H > H⁺; H⁺ नग्न प्रोटॉन (लगभग 10⁻³ pm) है, जबकि H⁻ में दो इलेक्ट्रॉन हैं।',
      formula: '$$\\text{H}^->\\text{H}>\\text{H}^+$$'
    },
    {
      d: 'M',
      q_en: 'Arrange N3-, O2-, F-, Na+, Mg2+, Al3+ by radius.',
      q_hi: 'N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺, Al³⁺ को त्रिज्या के घटते क्रम में लिखिए।',
      a_en: 'N3- > O2- > F- > Na+ > Mg2+ > Al3+ (radius is inversely related to nuclear charge).',
      a_hi: 'N³⁻ > O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺ (त्रिज्या नाभिकीय आवेश के व्युत्क्रम में बदलती है)।',
      formula: '$$\\text{N}^{3-}>\\text{O}^{2-}>\\text{F}^->\\text{Na}^+>\\text{Mg}^{2+}>\\text{Al}^{3+}$$'
    },
    {
      d: 'M',
      q_en: 'Arrange P3-, S2-, Cl-, K+, Ca2+ in decreasing radius.',
      q_hi: 'P³⁻, S²⁻, Cl⁻, K⁺, Ca²⁺ को घटते त्रिज्या क्रम में लिखिए।',
      a_en: 'P3- > S2- > Cl- > K+ > Ca2+ (all have 18 electrons; higher Z shrinks the ion).',
      a_hi: 'P³⁻ > S²⁻ > Cl⁻ > K⁺ > Ca²⁺ (सभी में 18 इलेक्ट्रॉन; अधिक Z से आयन छोटा)।',
      formula: '$$\\text{P}^{3-}>\\text{S}^{2-}>\\text{Cl}^->\\text{K}^+>\\text{Ca}^{2+}$$'
    },
    {
      d: 'M',
      q_en: 'Compare the radii of Fe, Fe2+ and Fe3+.',
      q_hi: 'Fe, Fe²⁺ व Fe³⁺ की त्रिज्याओं की तुलना कीजिए।',
      a_en: 'Fe > Fe2+ > Fe3+; more positive charge on the same nucleus means a stronger pull.',
      a_hi: 'Fe > Fe²⁺ > Fe³⁺; समान नाभिक पर अधिक धनावेश का अर्थ है अधिक आकर्षण।',
      formula: '$$\\text{Fe}>\\text{Fe}^{2+}>\\text{Fe}^{3+}$$'
    },
    {
      d: 'M',
      q_en: 'Compare the sizes of O, O- and O2-.',
      q_hi: 'O, O⁻ तथा O²⁻ के आकार की तुलना कीजिए।',
      a_en: 'O2- > O- > O; each added electron raises repulsion and lowers Z_eff.',
      a_hi: 'O²⁻ > O⁻ > O; प्रत्येक जुड़ा इलेक्ट्रॉन प्रतिकर्षण बढ़ाता व Zeff घटाता है।',
      formula: '$$\\text{O}^{2-}>\\text{O}^->\\text{O}$$'
    },
    {
      d: 'M',
      q_en: 'Why is Mg2+ smaller than Na+ though both have 10 electrons?',
      q_hi: 'दोनों में 10 इलेक्ट्रॉन होने पर भी Mg²⁺, Na⁺ से छोटा क्यों है?',
      a_en: 'Mg2+ has 12 protons versus 11 in Na+, so its pull on the same 10 electrons is greater.',
      a_hi: 'Mg²⁺ में 12 प्रोटॉन हैं जबकि Na⁺ में 11; समान 10 इलेक्ट्रॉनों पर खिंचाव अधिक है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Arrange the hydrated radii of Li+, Na+, K+, Rb+, Cs+ in water.',
      q_hi: 'जल में Li⁺, Na⁺, K⁺, Rb⁺, Cs⁺ की जलयोजित त्रिज्याओं का क्रम लिखिए।',
      a_en: 'Li+(aq) > Na+(aq) > K+(aq) > Rb+(aq) > Cs+(aq), the reverse of the bare ionic radii order.',
      a_hi: 'Li⁺(aq) > Na⁺(aq) > K⁺(aq) > Rb⁺(aq) > Cs⁺(aq), जो नग्न आयनिक त्रिज्या के क्रम का उलटा है।',
      formula: '$$\\text{Li}^+(aq)>\\text{Na}^+(aq)>\\text{K}^+(aq)>\\text{Rb}^+(aq)>\\text{Cs}^+(aq)$$'
    },
    {
      d: 'H',
      q_en: 'Why is Li+(aq) the largest hydrated ion though Li+ is the smallest ion?',
      q_hi: 'Li⁺ सबसे छोटा है फिर भी Li⁺(aq) सबसे बड़ा क्यों है?',
      a_en: 'Its highest charge density binds the most water molecules in a thick hydration shell.',
      a_hi: 'सर्वाधिक आवेश-घनत्व के कारण यह सबसे अधिक जल अणुओं को मोटे जलयोजन आवरण में बाँधता है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Arrange the ionic mobility of Li+, Na+, K+, Rb+, Cs+ in water.',
      q_hi: 'जल में Li⁺ से Cs⁺ की आयनिक गतिशीलता का क्रम बताइए।',
      a_en: 'Cs+ > Rb+ > K+ > Na+ > Li+: smaller hydrated ions move faster.',
      a_hi: 'Cs⁺ > Rb⁺ > K⁺ > Na⁺ > Li⁺: छोटे जलयोजित आयन तेज़ चलते हैं।',
      formula: '$$\\text{Cs}^+>\\text{Rb}^+>\\text{K}^+>\\text{Na}^+>\\text{Li}^+$$'
    },
    {
      d: 'H',
      q_en: 'Which is larger: Cs+ or Ba2+, both with 54 electrons?',
      q_hi: 'Cs⁺ और Ba²⁺ में कौन बड़ा है, जबकि दोनों में 54 इलेक्ट्रॉन हैं?',
      a_en: 'Cs+ (55 protons) is larger than Ba2+ (56 protons); the lower nuclear charge pulls less.',
      a_hi: 'Cs⁺ (55 प्रोटॉन), Ba²⁺ (56 प्रोटॉन) से बड़ा है; कम नाभिकीय आवेश कम खींचता है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Compare the crystal ionic radii of Li+, Na+, K+, Rb+, Cs+.',
      q_hi: 'Li⁺ से Cs⁺ की क्रिस्टल आयनिक त्रिज्याओं की तुलना कीजिए।',
      a_en: 'Li+ < Na+ < K+ < Rb+ < Cs+, since each successive ion has one more shell.',
      a_hi: 'Li⁺ < Na⁺ < K⁺ < Rb⁺ < Cs⁺, क्योंकि प्रत्येक अगले आयन में एक कोश अधिक होता है।',
      formula: ''
    }
  ],

  /* ---------- SET 9: Ionisation Enthalpy: Factors & General Trends ---------- */
  9: [
    {
      d: 'E',
      q_en: 'Define first ionisation enthalpy (ΔiH1).',
      q_hi: 'प्रथम आयनन एन्थैल्पी (ΔiH₁) परिभाषित कीजिए।',
      a_en: 'The minimum energy needed to remove the most loosely bound electron from an isolated gaseous atom.',
      a_hi: 'पृथक् गैसीय परमाणु से सबसे शिथिल बंधित इलेक्ट्रॉन को निकालने हेतु आवश्यक न्यूनतम ऊर्जा।',
      formula: '$$\\text{X(g)}\\rightarrow\\text{X}^+\\text{(g)}+e^-$$'
    },
    {
      d: 'E',
      q_en: 'What is second ionisation enthalpy (ΔiH2)?',
      q_hi: 'द्वितीय आयनन एन्थैल्पी (ΔiH₂) क्या है?',
      a_en: 'The energy to remove an electron from the gaseous monovalent cation, X+(g) to X2+(g).',
      a_hi: 'गैसीय एकल-धनायन से इलेक्ट्रॉन निकालने की ऊर्जा, X⁺(g) → X²⁺(g)।',
      formula: '$$\\text{X}^+\\text{(g)}\\rightarrow\\text{X}^{2+}\\text{(g)}+e^-$$'
    },
    {
      d: 'E',
      q_en: 'Why is ionisation enthalpy always positive?',
      q_hi: 'आयनन एन्थैल्पी सदैव धनात्मक क्यों होती है?',
      a_en: 'Energy must be supplied to overcome nucleus-electron attraction, so the process is endothermic.',
      a_hi: 'नाभिक–इलेक्ट्रॉन आकर्षण को पार करने हेतु ऊर्जा देनी पड़ती है, अतः प्रक्रिया ऊष्माशोषी है।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'How does ΔiH1 vary across a period and down a group?',
      q_hi: 'ΔiH₁ आवर्त में तथा वर्ग में कैसे बदलती है?',
      a_en: 'Generally increases across a period (smaller size, higher Z_eff) and decreases down a group.',
      a_hi: 'सामान्यतः आवर्त में बढ़ती है (छोटा आकार, अधिक Zeff) तथा वर्ग में नीचे घटती है।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Which element has the highest and which the lowest ΔiH1?',
      q_hi: 'किस तत्व की ΔiH₁ सर्वाधिक और किसकी सबसे कम है?',
      a_en: 'Highest: helium (2372 kJ/mol). Lowest: caesium (about 376 kJ/mol).',
      a_hi: 'सर्वाधिक: हीलियम (2372 kJ/mol)। न्यूनतम: सीज़ियम (लगभग 376 kJ/mol)।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Why is ΔiH3 > ΔiH2 > ΔiH1 for the same atom?',
      q_hi: 'एक ही परमाणु के लिए ΔiH₃ > ΔiH₂ > ΔiH₁ क्यों होता है?',
      a_en: 'Fewer electrons mean less repulsion, so the same nuclear charge holds the rest more tightly.',
      a_hi: 'कम इलेक्ट्रॉन, कम प्रतिकर्षण; शेष इलेक्ट्रॉनों को वही नाभिकीय आवेश अधिक ज़ोर से खींचता है।',
      formula: '$$\\Delta_iH_3>\\Delta_iH_2>\\Delta_iH_1$$'
    },
    {
      d: 'M',
      q_en: 'List the factors that affect ionisation enthalpy.',
      q_hi: 'आयनन एन्थैल्पी को प्रभावित करने वाले कारक लिखिए।',
      a_en: 'Atomic size, nuclear charge, shielding, penetration of the electron, and stability of half/fully filled subshells.',
      a_hi: 'परमाण्वीय आकार, नाभिकीय आवेश, परिरक्षण, इलेक्ट्रॉन की भेदन क्षमता तथा अर्ध/पूर्ण भरित उपकोशों का स्थायित्व।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Give the order of shielding and penetration by s, p, d and f electrons.',
      q_hi: 's, p, d, f इलेक्ट्रॉनों के परिरक्षण व भेदन का क्रम बताइए।',
      a_en: 'Both follow s > p > d > f, so within a shell, removal gets easier from s to p to d to f.',
      a_hi: 'दोनों का क्रम s > p > d > f; अतः एक कोश में s से f की ओर इलेक्ट्रॉन निकालना सरल होता है।',
      formula: '$$s>p>d>f$$'
    },
    {
      d: 'M',
      q_en: 'Mg has ΔiH (kJ/mol): 738, 1451, 7733. How many valence electrons does it have?',
      q_hi: 'Mg की ΔiH (kJ/mol): 738, 1451, 7733 है। इसमें संयोजी इलेक्ट्रॉन कितने हैं?',
      a_en: 'Two; the huge jump after the 2nd ionisation shows the third electron comes from the stable core.',
      a_hi: 'दो; दूसरे के बाद भारी उछाल दर्शाता है कि तीसरा इलेक्ट्रॉन स्थायी क्रोड से निकलता है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'How does a half-filled or fully filled subshell affect ionisation enthalpy?',
      q_hi: 'अर्ध या पूर्ण भरे उपकोश का आयनन एन्थैल्पी पर क्या प्रभाव होता है?',
      a_en: 'Extra stability makes removal of an electron harder, so ΔiH is higher than expected.',
      a_hi: 'अतिरिक्त स्थायित्व के कारण इलेक्ट्रॉन निकालना कठिन होता है; ΔiH अपेक्षा से अधिक होती है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'An element has ΔiH (kJ/mol): 578, 1817, 2745, 11578. Find its group.',
      q_hi: 'एक तत्व की ΔiH (kJ/mol): 578, 1817, 2745, 11578 है। उसका वर्ग ज्ञात कीजिए।',
      a_en: 'Group 13 (aluminium): the big jump after the third value marks three valence electrons.',
      a_hi: 'वर्ग 13 (ऐलुमिनियम): तीसरे मान के बाद बड़ा उछाल तीन संयोजी इलेक्ट्रॉन दर्शाता है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why does ionisation enthalpy fall down a group although nuclear charge rises?',
      q_hi: 'नाभिकीय आवेश बढ़ने पर भी वर्ग में नीचे ΔiH क्यों घटती है?',
      a_en: 'Larger size and more shielding by inner shells outweigh the nuclear charge increase.',
      a_hi: 'बड़ा आकार व आंतरिक कोशों का अधिक परिरक्षण नाभिकीय आवेश की वृद्धि पर भारी पड़ते हैं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Which is greater: ΔiH2 of Li or ΔiH1 of He?',
      q_hi: 'Li की ΔiH₂ और He की ΔiH₁ में कौन अधिक है?',
      a_en: 'Li\'s ΔiH2 (7298 kJ/mol) exceeds He\'s ΔiH1 (2372): Li+ is 1s^2 but has 3 protons versus 2.',
      a_hi: 'Li की ΔiH₂ (7298 kJ/mol), He की ΔiH₁ (2372) से अधिक है: Li⁺ में 1s² है पर 3 प्रोटॉन हैं।',
      formula: '$$\\Delta_iH_2(\\text{Li})>\\Delta_iH_1(\\text{He})$$'
    },
    {
      d: 'H',
      q_en: 'Why does ΔiH1 rise only slowly along the 3d series?',
      q_hi: '3d श्रेणी में ΔiH₁ केवल धीरे-धीरे क्यों बढ़ती है?',
      a_en: 'Added electrons enter the inner (n-1)d subshell, shielding the 4s electrons and offsetting rising nuclear charge.',
      a_hi: 'नए इलेक्ट्रॉन भीतरी (n−1)d उपकोश में जाकर 4s को परिरक्षित करते हैं, जिससे बढ़ा नाभिकीय आवेश संतुलित रहता है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Calculate the ionisation enthalpy of He+ in eV (H atom: 13.6 eV).',
      q_hi: 'He⁺ की आयनन एन्थैल्पी eV में ज्ञात कीजिए (H परमाणु: 13.6 eV)।',
      a_en: 'He+ is hydrogen-like with Z = 2: IE = 13.6 x 4 = 54.4 eV.',
      a_hi: 'He⁺ हाइड्रोजन-सदृश है (Z = 2): IE = 13.6 × 4 = 54.4 eV।',
      formula: '$$IE=13.6\\,Z^2\\ \\text{eV}=54.4\\text{ eV}$$'
    }
  ],

  /* ---------- SET 10: Ionisation Enthalpy: NCERT/JEE Exceptions ---------- */
  10: [
    {
      d: 'E',
      q_en: 'Why is IE1 of Be (900) greater than that of B (801 kJ/mol)?',
      q_hi: 'Be (900) की IE₁, B (801 kJ/mol) से अधिक क्यों है?',
      a_en: 'Be loses a penetrating, stable 2s^2 electron; B loses a less penetrating 2p electron, which is easier to remove.',
      a_hi: 'Be, 2s² का भेदक व स्थायी इलेक्ट्रॉन खोता है; B का 2p इलेक्ट्रॉन कम भेदक होने से आसानी से निकलता है।',
      formula: '$$\\text{Be}(2s^2)>\\text{B}(2s^22p^1)$$'
    },
    {
      d: 'E',
      q_en: 'Why is IE1 of Mg greater than that of Al?',
      q_hi: 'Mg की IE₁ Al से अधिक क्यों है?',
      a_en: 'Mg removes a 3s electron from a filled 3s^2; Al removes a 3p electron, which 3s partly shields.',
      a_hi: 'Mg का 3s इलेक्ट्रॉन भरे 3s² से निकलता है; Al का 3p इलेक्ट्रॉन 3s से परिरक्षित होने से आसानी से निकलता है।',
      formula: '$$\\text{Mg}(3s^2)>\\text{Al}(3s^23p^1)$$'
    },
    {
      d: 'E',
      q_en: 'Why is IE1 of N greater than that of O?',
      q_hi: 'N की IE₁ O से अधिक क्यों है?',
      a_en: 'N has a stable half-filled 2p^3; O (2p^4) loses an electron to attain half-filled 2p^3.',
      a_hi: 'N का 2p³ अर्ध-भरित स्थायी है; O (2p⁴) इलेक्ट्रॉन खोकर अर्ध-भरित 2p³ पा लेता है।',
      formula: '$$\\text{N}(2p^3)>\\text{O}(2p^4)$$'
    },
    {
      d: 'E',
      q_en: 'Why is IE1 of P greater than that of S?',
      q_hi: 'P की IE₁ S से अधिक क्यों है?',
      a_en: 'P has a half-filled, extra-stable 3p^3, while S (3p^4) gains stability by losing one electron.',
      a_hi: 'P का 3p³ अर्ध-भरित अतिस्थायी है, जबकि S (3p⁴) एक इलेक्ट्रॉन खोकर स्थायित्व पाता है।',
      formula: '$$\\text{P}(3p^3)>\\text{S}(3p^4)$$'
    },
    {
      d: 'E',
      q_en: 'Which element has the lowest and which the highest IE1 in Period 2?',
      q_hi: 'आवर्त 2 में किसकी IE₁ सबसे कम व किसकी सबसे अधिक है?',
      a_en: 'Lowest: Li (520 kJ/mol); highest: Ne (2081 kJ/mol).',
      a_hi: 'न्यूनतम: Li (520 kJ/mol); अधिकतम: Ne (2081 kJ/mol)।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Give the IE1 order for Period 2 elements.',
      q_hi: 'आवर्त 2 के तत्वों की IE₁ का क्रम दीजिए।',
      a_en: 'Li < B < Be < C < O < N < F < Ne',
      a_hi: 'Li < B < Be < C < O < N < F < Ne',
      formula: '$$\\text{Li}<\\text{B}<\\text{Be}<\\text{C}<\\text{O}<\\text{N}<\\text{F}<\\text{Ne}$$'
    },
    {
      d: 'M',
      q_en: 'Give the IE1 order for Period 3 elements.',
      q_hi: 'आवर्त 3 के तत्वों की IE₁ का क्रम दीजिए।',
      a_en: 'Na < Al < Mg < Si < S < P < Cl < Ar',
      a_hi: 'Na < Al < Mg < Si < S < P < Cl < Ar',
      formula: '$$\\text{Na}<\\text{Al}<\\text{Mg}<\\text{Si}<\\text{S}<\\text{P}<\\text{Cl}<\\text{Ar}$$'
    },
    {
      d: 'M',
      q_en: 'Why is IE2 of Na (4562) much greater than IE2 of Mg (1451)?',
      q_hi: 'Na की IE₂ (4562), Mg की IE₂ (1451) से बहुत अधिक क्यों है?',
      a_en: 'Na+ has a stable noble-gas core (2p^6), while Mg+ is 3s^1 and loses its outer electron easily.',
      a_hi: 'Na⁺ में स्थायी उत्कृष्ट गैस क्रोड (2p⁶) है, जबकि Mg⁺ (3s¹) का बाह्य इलेक्ट्रॉन आसानी से निकलता है।',
      formula: '$$IE_2:\\ \\text{Na}\\gg\\text{Mg}$$'
    },
    {
      d: 'M',
      q_en: 'Arrange C, N, O, F in decreasing IE2.',
      q_hi: 'C, N, O, F को IE₂ के घटते क्रम में लिखिए।',
      a_en: 'O > F > N > C; O+ is 2p^3 (half-filled), hardest to ionise, while C+ (2p^1) is easiest.',
      a_hi: 'O > F > N > C; O⁺ (2p³, अर्ध-भरित) से इलेक्ट्रॉन निकालना सबसे कठिन है, C⁺ (2p¹) में सबसे सरल।',
      formula: '$$IE_2:\\ \\text{O}>\\text{F}>\\text{N}>\\text{C}$$'
    },
    {
      d: 'M',
      q_en: 'Arrange Be, Mg, Ca, Sr, Ba in decreasing IE1.',
      q_hi: 'Be, Mg, Ca, Sr, Ba को IE₁ के घटते क्रम में लिखिए।',
      a_en: 'Be > Mg > Ca > Sr > Ba (899, 738, 590, 550, 503 kJ/mol), as size increases down the group.',
      a_hi: 'Be > Mg > Ca > Sr > Ba (899, 738, 590, 550, 503 kJ/mol), क्योंकि वर्ग में नीचे आकार बढ़ता है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Arrange B, Al, Ga, In, Tl in decreasing IE1.',
      q_hi: 'B, Al, Ga, In, Tl को IE₁ के घटते क्रम में लिखिए।',
      a_en: 'B > Tl > Ga > Al > In (801, 589, 579, 577, 558 kJ/mol): the zig-zag trend.',
      a_hi: 'B > Tl > Ga > Al > In (801, 589, 579, 577, 558 kJ/mol): ज़िग-ज़ैग प्रवृत्ति।',
      formula: '$$\\text{B}>\\text{Tl}>\\text{Ga}>\\text{Al}>\\text{In}$$'
    },
    {
      d: 'H',
      q_en: 'Why is Ga\'s IE1 (579) slightly higher than Al\'s (577)?',
      q_hi: 'Ga की IE₁ (579) Al की (577) से थोड़ी अधिक क्यों है?',
      a_en: 'Poorly shielding 3d^10 electrons increase Z_eff on Ga\'s 4p electron, offsetting its larger size.',
      a_hi: 'कमज़ोर परिरक्षण करने वाले 3d¹⁰ इलेक्ट्रॉन Ga के 4p पर Zeff बढ़ाते हैं, जो बड़े आकार को संतुलित करता है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why is Tl\'s IE1 (589) higher than In\'s (558)?',
      q_hi: 'Tl की IE₁ (589), In की (558) से अधिक क्यों है?',
      a_en: 'Poorly shielding 4f and 5d electrons raise Z_eff on Tl\'s 6p electron.',
      a_hi: 'कमज़ोर परिरक्षण करने वाले 4f व 5d इलेक्ट्रॉन Tl के 6p पर Zeff बढ़ाते हैं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Arrange C, Si, Ge, Sn, Pb in decreasing IE1.',
      q_hi: 'C, Si, Ge, Sn, Pb को IE₁ के घटते क्रम में लिखिए।',
      a_en: 'C > Si > Ge > Pb > Sn (1086, 786, 762, 716, 709 kJ/mol); Pb > Sn due to poor 4f/5d shielding.',
      a_hi: 'C > Si > Ge > Pb > Sn (1086, 786, 762, 716, 709); 4f/5d के कमज़ोर परिरक्षण से Pb > Sn।',
      formula: '$$\\text{C}>\\text{Si}>\\text{Ge}>\\text{Pb}>\\text{Sn}$$'
    },
    {
      d: 'H',
      q_en: 'Arrange Zn, Ga, Ge in decreasing IE1.',
      q_hi: 'Zn, Ga, Ge को IE₁ के घटते क्रम में लिखिए।',
      a_en: 'Zn > Ge > Ga (906, 762, 579 kJ/mol); Zn has a full 3d^10 4s^2 configuration.',
      a_hi: 'Zn > Ge > Ga (906, 762, 579 kJ/mol); Zn का 3d¹⁰ 4s² पूर्ण भरित है।',
      formula: ''
    }
  ],

  /* ---------- SET 11: Electron Gain Enthalpy & Electron Affinity ---------- */
  11: [
    {
      d: 'E',
      q_en: 'Define electron gain enthalpy (ΔegH).',
      q_hi: 'इलेक्ट्रॉन लब्धि एन्थैल्पी (ΔegH) परिभाषित कीजिए।',
      a_en: 'The enthalpy change when an isolated gaseous atom gains an electron to form an anion.',
      a_hi: 'पृथक् गैसीय परमाणु द्वारा एक इलेक्ट्रॉन ग्रहण कर ऋणायन बनाने पर एन्थैल्पी परिवर्तन।',
      formula: '$$\\text{X(g)}+e^-\\rightarrow\\text{X}^-\\text{(g)}$$'
    },
    {
      d: 'E',
      q_en: 'What does the sign of ΔegH tell us?',
      q_hi: 'ΔegH का चिह्न क्या दर्शाता है?',
      a_en: 'Negative: energy is released (more negative = greater tendency to gain an electron); positive: energy is absorbed.',
      a_hi: 'ऋणात्मक: ऊर्जा मुक्त (जितना अधिक ऋणात्मक उतनी अधिक प्रवृत्ति); धनात्मक: ऊर्जा अवशोषित।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Which group has the most negative ΔegH values?',
      q_hi: 'किस वर्ग की ΔegH सबसे अधिक ऋणात्मक है?',
      a_en: 'Group 17 (halogens), since gaining one electron gives a stable noble-gas configuration.',
      a_hi: 'वर्ग 17 (हैलोजन), क्योंकि एक इलेक्ट्रॉन लेने पर स्थायी उत्कृष्ट गैस विन्यास मिलता है।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'How is electron affinity (EA) related to ΔegH?',
      q_hi: 'इलेक्ट्रॉन बंधुता (EA) का ΔegH से क्या संबंध है?',
      a_en: 'EA = -ΔegH - (5/2)RT; at 0 K, EA equals the magnitude of ΔegH.',
      a_hi: 'EA = −ΔegH − (5/2)RT; 0 K पर EA का मान ΔegH के परिमाण के बराबर होता है।',
      formula: '$$EA=-\\Delta_{eg}H-\\frac{5}{2}RT$$'
    },
    {
      d: 'E',
      q_en: 'Why do noble gases have positive ΔegH?',
      q_hi: 'उत्कृष्ट गैसों की ΔegH धनात्मक क्यों होती है?',
      a_en: 'They have fully filled valence shells; the extra electron must enter the next higher shell, requiring energy.',
      a_hi: 'इनका संयोजी कोश पूर्ण भरा है; अतिरिक्त इलेक्ट्रॉन अगले उच्च कोश में जाता है, जिसके लिए ऊर्जा चाहिए।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Compare ΔegH of Cl (-349) and F (-328 kJ/mol).',
      q_hi: 'Cl (−349) और F (−328 kJ/mol) की ΔegH की तुलना कीजिए।',
      a_en: 'Cl is more negative: in F\'s compact 2p subshell, electron-electron repulsion reduces the gain.',
      a_hi: 'Cl अधिक ऋणात्मक है: F के सघन 2p उपकोश में इलेक्ट्रॉन-प्रतिकर्षण से लब्धि घट जाती है।',
      formula: '$$\\Delta_{eg}H:\\ \\text{Cl}(-349)<\\text{F}(-328)$$'
    },
    {
      d: 'M',
      q_en: 'Arrange F, Cl, Br, I by ΔegH (most negative first).',
      q_hi: 'F, Cl, Br, I को ΔegH के क्रम (सर्वाधिक ऋणात्मक पहले) में लिखिए।',
      a_en: 'Cl > F > Br > I (-349, -328, -325, -295 kJ/mol).',
      a_hi: 'Cl > F > Br > I (−349, −328, −325, −295 kJ/mol)।',
      formula: '$$\\text{Cl}>\\text{F}>\\text{Br}>\\text{I}$$'
    },
    {
      d: 'M',
      q_en: 'Arrange O, S, Se, Te, Po by ΔegH (most negative first).',
      q_hi: 'O, S, Se, Te, Po को ΔegH (सर्वाधिक ऋणात्मक पहले) के क्रम में लिखिए।',
      a_en: 'S > Se > Te > Po > O; oxygen has the least negative value in Group 16.',
      a_hi: 'S > Se > Te > Po > O; वर्ग 16 में ऑक्सीजन का मान सबसे कम ऋणात्मक है।',
      formula: '$$\\text{S}>\\text{Se}>\\text{Te}>\\text{Po}>\\text{O}$$'
    },
    {
      d: 'M',
      q_en: 'Why are ΔegH values of Be and Mg positive?',
      q_hi: 'Be व Mg की ΔegH धनात्मक क्यों हैं?',
      a_en: 'Their ns^2 subshell is full; the added electron must enter the higher-energy np orbital.',
      a_hi: 'इनका ns² उपकोश पूर्ण भरा है; अतिरिक्त इलेक्ट्रॉन उच्च ऊर्जा के np कक्षक में जाता है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Why is ΔegH of nitrogen about zero (+20 kJ/mol)?',
      q_hi: 'नाइट्रोजन की ΔegH लगभग शून्य (+20 kJ/mol) क्यों है?',
      a_en: 'Its half-filled 2p^3 subshell is stable, and the added electron faces pairing repulsion.',
      a_hi: 'इसका अर्ध-भरित 2p³ उपकोश स्थायी है, और जुड़ने वाला इलेक्ट्रॉन युग्मन के प्रतिकर्षण का सामना करता है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why is the second ΔegH of oxygen (O- to O2-) positive (+780 kJ/mol)?',
      q_hi: 'ऑक्सीजन की द्वितीय ΔegH (O⁻ → O²⁻) धनात्मक (+780 kJ/mol) क्यों है?',
      a_en: 'The incoming electron is repelled by the negative O- ion; this repulsion outweighs the energy released.',
      a_hi: 'आने वाला इलेक्ट्रॉन ऋणात्मक O⁻ द्वारा प्रतिकर्षित होता है; यह प्रतिकर्षण मुक्त ऊर्जा से अधिक होता है।',
      formula: '$$\\text{O}^-+e^-\\rightarrow\\text{O}^{2-},\\ \\Delta_{eg}H_2>0$$'
    },
    {
      d: 'H',
      q_en: 'How can O2- exist in oxides like MgO if the second ΔegH is endothermic?',
      q_hi: 'यदि द्वितीय ΔegH ऊष्माशोषी है तो MgO जैसे ऑक्साइडों में O²⁻ कैसे रहता है?',
      a_en: 'The very high lattice enthalpy of the oxide compensates for the positive second ΔegH of oxygen.',
      a_hi: 'ऑक्साइड की बहुत उच्च जालक एन्थैल्पी ऑक्सीजन की धनात्मक द्वितीय ΔegH की क्षतिपूर्ति कर देती है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Which has the more negative ΔegH: Si or P?',
      q_hi: 'Si और P में किसकी ΔegH अधिक ऋणात्मक है?',
      a_en: 'Si (-134 kJ/mol) beats P (-72): P\'s stable half-filled 3p^3 resists adding an electron.',
      a_hi: 'Si (−134 kJ/mol), P (−72) से अधिक ऋणात्मक है: P का अर्ध-भरित 3p³ इलेक्ट्रॉन ग्रहण का विरोध करता है।',
      formula: '$$\\text{Si}(-134)<\\text{P}(-72)$$'
    },
    {
      d: 'H',
      q_en: 'Why do F, O and N show less negative ΔegH than Cl, S and P?',
      q_hi: 'F, O, N की ΔegH क्रमशः Cl, S, P से कम ऋणात्मक क्यों है?',
      a_en: 'The small 2p subshell causes strong inter-electronic repulsion; the larger 3p subshell has more room.',
      a_hi: 'छोटा 2p उपकोश तीव्र अंतर-इलेक्ट्रॉनिक प्रतिकर्षण उत्पन्न करता है; बड़े 3p में अधिक स्थान होता है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why do alkali metals have small negative ΔegH (Na: -53 kJ/mol)?',
      q_hi: 'क्षार धातुओं की ΔegH छोटी ऋणात्मक (Na: −53 kJ/mol) क्यों है?',
      a_en: 'Adding an electron to ns^1 gives a stable filled ns^2, releasing a little energy.',
      a_hi: 'ns¹ में एक इलेक्ट्रॉन जुड़ने पर स्थायी भरित ns² बनता है, जिससे थोड़ी ऊर्जा मुक्त होती है।',
      formula: ''
    }
  ],

  /* ---------- SET 12: Electronegativity: Pauling, Mulliken & Allred-Rochow Scales ---------- */
  12: [
    {
      d: 'E',
      q_en: 'Define electronegativity.',
      q_hi: 'विद्युत ऋणात्मकता (electronegativity) परिभाषित कीजिए।',
      a_en: 'The tendency of an atom in a molecule to attract the shared pair of electrons toward itself.',
      a_hi: 'अणु में परमाणु की साझा इलेक्ट्रॉन युग्म को अपनी ओर खींचने की प्रवृत्ति।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Distinguish electronegativity from electron gain enthalpy.',
      q_hi: 'विद्युत ऋणात्मकता व इलेक्ट्रॉन लब्धि एन्थैल्पी में अंतर बताइए।',
      a_en: 'EN: relative, unitless, for a bonded atom; ΔegH: measurable energy (kJ/mol) for an isolated gaseous atom.',
      a_hi: 'EN: सापेक्ष, मात्रकहीन, आबंधित परमाणु हेतु; ΔegH: पृथक् गैसीय परमाणु की मापनीय ऊर्जा (kJ/mol)।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Which element is the most electronegative and what is its Pauling value?',
      q_hi: 'सर्वाधिक विद्युत ऋणात्मक तत्व कौन-सा है और उसका पॉलिंग मान क्या है?',
      a_en: 'Fluorine, 4.0 on the Pauling scale.',
      a_hi: 'फ्लुओरीन, पॉलिंग पैमाने पर 4.0।',
      formula: '$$\\chi_{\\text{F}}=4.0$$'
    },
    {
      d: 'E',
      q_en: 'Give Pauling electronegativities of O, N, Cl, C and H.',
      q_hi: 'O, N, Cl, C व H की पॉलिंग विद्युत ऋणात्मकताएँ बताइए।',
      a_en: 'O = 3.5, N ≈ 3.0, Cl ≈ 3.2, C = 2.5, H = 2.1.',
      a_hi: 'O = 3.5, N ≈ 3.0, Cl ≈ 3.2, C = 2.5, H = 2.1।',
      formula: '$$\\text{O}\\,3.5>\\text{Cl}\\,3.2>\\text{N}\\,3.0>\\text{C}\\,2.5>\\text{H}\\,2.1$$'
    },
    {
      d: 'E',
      q_en: 'How does electronegativity vary in the periodic table?',
      q_hi: 'आवर्त सारणी में विद्युत ऋणात्मकता कैसे बदलती है?',
      a_en: 'It increases across a period (smaller size) and decreases down a group.',
      a_hi: 'आवर्त में बढ़ती है (छोटा आकार) तथा वर्ग में नीचे घटती है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'State Mulliken\'s definition of electronegativity.',
      q_hi: 'विद्युत ऋणात्मकता की मुलिकन परिभाषा लिखिए।',
      a_en: 'It is the average of ionisation enthalpy and electron affinity: chi_M = (IE + EA)/2.',
      a_hi: 'यह आयनन एन्थैल्पी व इलेक्ट्रॉन बंधुता का औसत है: χM = (IE + EA)/2।',
      formula: '$$\\chi_M=\\frac{IE+EA}{2}$$'
    },
    {
      d: 'M',
      q_en: 'How are Mulliken and Pauling electronegativities related?',
      q_hi: 'मुलिकन व पॉलिंग विद्युत ऋणात्मकताओं में क्या संबंध है?',
      a_en: 'chi_P is about chi_M / 2.8 when IE and EA are in eV.',
      a_hi: 'जब IE व EA eV में हों तो χP ≈ χM / 2.8।',
      formula: '$$\\chi_P\\approx\\frac{\\chi_M}{2.8}$$'
    },
    {
      d: 'M',
      q_en: 'How does hybridisation affect electronegativity of carbon?',
      q_hi: 'संकरण (hybridisation) कार्बन की विद्युत ऋणात्मकता को कैसे प्रभावित करता है?',
      a_en: 'EN increases with s-character: sp (50%) > sp2 (33%) > sp3 (25%).',
      a_hi: 'EN, s-लक्षण के साथ बढ़ती है: sp (50%) > sp² (33%) > sp³ (25%)।',
      formula: '$$sp>sp^2>sp^3$$'
    },
    {
      d: 'M',
      q_en: 'How does oxidation state affect electronegativity?',
      q_hi: 'ऑक्सीकरण अवस्था विद्युत ऋणात्मकता को कैसे प्रभावित करती है?',
      a_en: 'Higher positive oxidation state gives higher EN: Fe3+ > Fe2+ and Mn7+ > Mn2+.',
      a_hi: 'उच्च धनात्मक ऑक्सीकरण अवस्था पर EN अधिक: Fe³⁺ > Fe²⁺ तथा Mn⁷⁺ > Mn²⁺।',
      formula: '$$\\text{Fe}^{3+}>\\text{Fe}^{2+};\\quad\\text{Mn}^{7+}>\\text{Mn}^{2+}$$'
    },
    {
      d: 'M',
      q_en: 'Write the Hannay-Smith formula for percent ionic character.',
      q_hi: 'प्रतिशत आयनिक लक्षण का हैनी-स्मिथ सूत्र लिखिए।',
      a_en: '% ionic = 16 Δχ + 3.5 (Δχ)^2, where Δχ is the electronegativity difference of the two atoms.',
      a_hi: '% आयनिक = 16 Δχ + 3.5 (Δχ)², जहाँ Δχ दोनों परमाणुओं की विद्युत ऋणात्मकता का अंतर है।',
      formula: '$$\\%\\text{ ionic}=16\\lvert\\Delta\\chi\\rvert+3.5(\\Delta\\chi)^2$$'
    },
    {
      d: 'H',
      q_en: 'Write Pauling\'s formula for percent ionic character.',
      q_hi: 'प्रतिशत आयनिक लक्षण का पॉलिंग सूत्र लिखिए।',
      a_en: '% ionic = 100 [1 - e^(-(Δχ)^2/4)].',
      a_hi: '% आयनिक = 100 [1 − e^(−(Δχ)²/4)]।',
      formula: '$$\\%\\text{ ionic}=100\\left[1-e^{-(\\Delta\\chi)^2/4}\\right]$$'
    },
    {
      d: 'H',
      q_en: 'Using Hannay-Smith, find % ionic character of HF (F = 4.0, H = 2.1).',
      q_hi: 'हैनी-स्मिथ से HF का % आयनिक लक्षण ज्ञात कीजिए (F = 4.0, H = 2.1)।',
      a_en: 'Δχ = 1.9: 16(1.9) + 3.5(1.9)^2 = 30.4 + 12.6, about 43%.',
      a_hi: 'Δχ = 1.9: 16(1.9) + 3.5(1.9)² = 30.4 + 12.6 ≈ 43%।',
      formula: '$$16(1.9)+3.5(1.9)^2\\approx43\\%$$'
    },
    {
      d: 'H',
      q_en: 'Arrange HF, HCl, HBr, HI in increasing ionic character.',
      q_hi: 'HF, HCl, HBr, HI को बढ़ते आयनिक लक्षण के क्रम में लिखिए।',
      a_en: 'HI < HBr < HCl < HF, as the electronegativity difference with H increases from I to F.',
      a_hi: 'HI < HBr < HCl < HF, क्योंकि H के साथ EN अंतर I से F की ओर बढ़ता है।',
      formula: '$$\\text{HI}<\\text{HBr}<\\text{HCl}<\\text{HF}$$'
    },
    {
      d: 'H',
      q_en: 'Why is ethyne (sp carbon) more acidic than ethane in terms of electronegativity?',
      q_hi: 'विद्युत ऋणात्मकता के आधार पर एथाइन (sp कार्बन) एथेन से अधिक अम्लीय क्यों है?',
      a_en: 'sp carbon has 50% s-character, is more electronegative and stabilises the carbanion, so H is lost more easily.',
      a_hi: 'sp कार्बन में 50% s-लक्षण है, वह अधिक विद्युत ऋणात्मक है और कार्बऋणायन को स्थायी करता है; H सरलता से निकलता है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Find the Mulliken and Pauling EN of Cl (IE = 12.97 eV, EA = 3.61 eV).',
      q_hi: 'Cl की मुलिकन व पॉलिंग EN ज्ञात कीजिए (IE = 12.97 eV, EA = 3.61 eV)।',
      a_en: 'chi_M = (12.97 + 3.61)/2 = 8.29; chi_P = 8.29/2.8 = 2.96, about 3.0.',
      a_hi: 'χM = (12.97 + 3.61)/2 = 8.29; χP = 8.29/2.8 = 2.96, लगभग 3.0।',
      formula: '$$\\chi_M=8.29,\\quad\\chi_P=\\frac{8.29}{2.8}\\approx2.96$$'
    }
  ],

  /* ---------- SET 13: Valence, Oxidation States & Inert Pair Effect ---------- */
  13: [
    {
      d: 'E',
      q_en: 'What is the relation between group number and valence of main-group elements?',
      q_hi: 'मुख्य समूह तत्वों में वर्ग संख्या व संयोजकता का संबंध क्या है?',
      a_en: 'Valence = G or (8 - G), where G is the number of outer electrons (old group number).',
      a_hi: 'संयोजकता = G या (8 − G), जहाँ G बाह्य इलेक्ट्रॉनों की संख्या (पुराना वर्ग क्रमांक) है।',
      formula: '$$\\text{Valence}=G\\ \\text{or}\\ 8-G$$'
    },
    {
      d: 'E',
      q_en: 'How does valence change in Period 3 hydrides from NaH to HCl?',
      q_hi: 'NaH से HCl तक आवर्त 3 के हाइड्राइडों में संयोजकता कैसे बदलती है?',
      a_en: '1, 2, 3, 4, 3, 2, 1 for NaH, MgH2, AlH3, SiH4, PH3, H2S, HCl.',
      a_hi: 'NaH, MgH₂, AlH₃, SiH₄, PH₃, H₂S, HCl के लिए 1, 2, 3, 4, 3, 2, 1।',
      formula: '$$\\text{NaH, MgH}_2,\\text{AlH}_3,\\text{SiH}_4,\\text{PH}_3,\\text{H}_2\\text{S, HCl}$$'
    },
    {
      d: 'E',
      q_en: 'How does valence change in Period 3 oxides from Na2O to Cl2O7?',
      q_hi: 'Na₂O से Cl₂O₇ तक आवर्त 3 के ऑक्साइडों में संयोजकता कैसे बदलती है?',
      a_en: 'It increases from 1 to 7: Na2O, MgO, Al2O3, SiO2, P4O10, SO3, Cl2O7.',
      a_hi: 'यह 1 से 7 तक बढ़ती है: Na₂O, MgO, Al₂O₃, SiO₂, P₄O₁₀, SO₃, Cl₂O₇।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What is the oxidation state of fluorine in all compounds, and why?',
      q_hi: 'सभी यौगिकों में फ्लुओरीन की ऑक्सीकरण अवस्था क्या है और क्यों?',
      a_en: 'Always -1, since F is the most electronegative element.',
      a_hi: 'सदैव −1, क्योंकि F सर्वाधिक विद्युत ऋणात्मक तत्व है।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What is the inert pair effect?',
      q_hi: 'अक्रिय युग्म प्रभाव (inert pair effect) क्या है?',
      a_en: 'The reluctance of the ns^2 electrons of heavy p-block elements to take part in bonding.',
      a_hi: 'भारी p-ब्लॉक तत्वों के ns² इलेक्ट्रॉनों की आबंधन में भाग लेने की अनिच्छा।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Find the oxidation state of O in OF2.',
      q_hi: 'OF₂ में O की ऑक्सीकरण अवस्था ज्ञात कीजिए।',
      a_en: '+2, because F (-1) is more electronegative than O.',
      a_hi: '+2, क्योंकि F (−1), O से अधिक विद्युत ऋणात्मक है।',
      formula: '$$x+2(-1)=0\\Rightarrow x=+2$$'
    },
    {
      d: 'M',
      q_en: 'Find the oxidation state of O in O2F2 and in H2O2.',
      q_hi: 'O₂F₂ व H₂O₂ में O की ऑक्सीकरण अवस्था ज्ञात कीजिए।',
      a_en: '+1 in O2F2 and -1 in H2O2 (peroxide).',
      a_hi: 'O₂F₂ में +1 तथा H₂O₂ (परॉक्साइड) में −1।',
      formula: '$$\\text{O}_2\\text{F}_2:+1;\\quad\\text{H}_2\\text{O}_2:-1$$'
    },
    {
      d: 'M',
      q_en: 'Find the oxidation state of O in KO2 and name the ion.',
      q_hi: 'KO₂ में O की ऑक्सीकरण अवस्था ज्ञात कीजिए और आयन का नाम बताइए।',
      a_en: '-1/2 in the superoxide ion, O2-.',
      a_hi: 'सुपरऑक्साइड आयन O₂⁻ में −1/2।',
      formula: '$$\\text{KO}_2:\\ x=-\\tfrac{1}{2}$$'
    },
    {
      d: 'M',
      q_en: 'Why does the inert pair effect arise?',
      q_hi: 'अक्रिय युग्म प्रभाव क्यों उत्पन्न होता है?',
      a_en: 'Poor shielding by intervening d and f electrons binds the ns^2 pair tightly to the nucleus.',
      a_hi: 'बीच के d व f इलेक्ट्रॉनों के कमज़ोर परिरक्षण से ns² युग्म नाभिक से दृढ़ता से बँधा रहता है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Compare the stability of +3 and +1 oxidation states in Group 13 down the group.',
      q_hi: 'वर्ग 13 में नीचे +3 व +1 अवस्थाओं के स्थायित्व की तुलना कीजिए।',
      a_en: '+3 stability: Al > Ga > In > Tl; +1 stability: Tl > In > Ga > Al.',
      a_hi: '+3 स्थायित्व: Al > Ga > In > Tl; +1 स्थायित्व: Tl > In > Ga > Al।',
      formula: '$$\\text{Al}^{3+}>\\text{Ga}^{3+}>\\text{In}^{3+}>\\text{Tl}^{3+};\\ \\text{Tl}^+>\\text{In}^+>\\text{Ga}^+$$'
    },
    {
      d: 'H',
      q_en: 'Why is Pb2+ more stable than Pb4+, and what does this make PbO2?',
      q_hi: 'Pb²⁺, Pb⁴⁺ से अधिक स्थायी क्यों है और इससे PbO₂ क्या बनता है?',
      a_en: 'The inert 6s^2 pair stabilises Pb2+, so PbO2 readily gains electrons: a strong oxidising agent.',
      a_hi: 'निष्क्रिय 6s² युग्म Pb²⁺ को स्थायी बनाता है; अतः PbO₂ आसानी से इलेक्ट्रॉन लेता है: प्रबल ऑक्सीकारक।',
      formula: '$$\\text{Pb}^{4+}+2e^-\\rightarrow\\text{Pb}^{2+}$$'
    },
    {
      d: 'H',
      q_en: 'Why is Sn2+ a reducing agent while Pb2+ is not?',
      q_hi: 'Sn²⁺ अपचायक है पर Pb²⁺ नहीं, क्यों?',
      a_en: 'Sn is stable in +4 (weak inert pair effect), so Sn2+ gets oxidised; Pb prefers +2, so Pb2+ resists oxidation.',
      a_hi: 'Sn +4 में स्थायी है (दुर्बल अक्रिय युग्म), अतः Sn²⁺ ऑक्सीकृत होता है; Pb को +2 पसंद है, Pb²⁺ ऑक्सीकरण का विरोध करता है।',
      formula: '$$\\text{Sn}^{2+}\\rightarrow\\text{Sn}^{4+}+2e^-$$'
    },
    {
      d: 'H',
      q_en: 'Why is Tl3+ a strong oxidising agent?',
      q_hi: 'Tl³⁺ प्रबल ऑक्सीकारक क्यों है?',
      a_en: 'Tl prefers +1 (inert 6s^2), so Tl3+ readily accepts two electrons to become Tl+.',
      a_hi: 'Tl को +1 पसंद है (निष्क्रिय 6s²), इसलिए Tl³⁺ दो इलेक्ट्रॉन लेकर आसानी से Tl⁺ बन जाता है।',
      formula: '$$\\text{Tl}^{3+}+2e^-\\rightarrow\\text{Tl}^+$$'
    },
    {
      d: 'H',
      q_en: 'What is the true constitution of TlI3?',
      q_hi: 'TlI₃ की वास्तविक संरचना क्या है?',
      a_en: 'It contains Tl+ and I3- (triiodide), not Tl3+ and 3 I-, because Tl3+ would oxidise I-.',
      a_hi: 'इसमें Tl⁺ व I₃⁻ (ट्राइआयोडाइड) हैं, Tl³⁺ व 3I⁻ नहीं, क्योंकि Tl³⁺ I⁻ को ऑक्सीकृत कर देता है।',
      formula: '$$\\text{TlI}_3=\\text{Tl}^+\\ \\text{I}_3^-$$'
    },
    {
      d: 'H',
      q_en: 'Why is BiCl5 not known while PCl5 exists?',
      q_hi: 'BiCl₅ ज्ञात नहीं है जबकि PCl₅ का अस्तित्व है, क्यों?',
      a_en: 'Inert pair effect makes Bi(+3) more stable than Bi(+5), and Bi(+5) would oxidise chloride.',
      a_hi: 'अक्रिय युग्म प्रभाव से Bi(+3), Bi(+5) से अधिक स्थायी है, और Bi(+5) क्लोराइड को ऑक्सीकृत कर देगा।',
      formula: ''
    }
  ],

  /* ---------- SET 14: Anomalous Behaviour of 2nd Period & Diagonal Relationships ---------- */
  14: [
    {
      d: 'E',
      q_en: 'Why do the first elements of groups (Li to F) differ from their group members?',
      q_hi: 'समूहों के प्रथम तत्व (Li से F) अपने समूह के अन्य तत्वों से भिन्न क्यों होते हैं?',
      a_en: 'Small size, high charge/radius ratio, high electronegativity and no d-orbitals in the valence shell.',
      a_hi: 'छोटा आकार, उच्च आवेश/त्रिज्या अनुपात, उच्च विद्युत ऋणात्मकता तथा संयोजी कोश में d-कक्षकों का अभाव।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What is the maximum covalency of Period 2 elements and why?',
      q_hi: 'आवर्त 2 के तत्वों की अधिकतम सहसंयोजकता क्या है और क्यों?',
      a_en: '4, as only 2s and three 2p orbitals (four orbitals) are available.',
      a_hi: '4, क्योंकि केवल 2s व तीन 2p (कुल चार) कक्षक उपलब्ध हैं।',
      formula: '$$\\text{Max covalency}=4$$'
    },
    {
      d: 'E',
      q_en: 'Name the three important diagonal pairs.',
      q_hi: 'तीन प्रमुख विकर्ण युग्म (diagonal pairs) बताइए।',
      a_en: 'Li-Mg, Be-Al and B-Si.',
      a_hi: 'Li–Mg, Be–Al तथा B–Si।',
      formula: '$$\\text{Li–Mg},\\ \\text{Be–Al},\\ \\text{B–Si}$$'
    },
    {
      d: 'E',
      q_en: 'Why do diagonal relationships exist?',
      q_hi: 'विकर्ण संबंध क्यों पाए जाते हैं?',
      a_en: 'Diagonal elements have similar charge/radius ratios (polarising power) and similar electronegativity.',
      a_hi: 'विकर्ण तत्वों में आवेश/त्रिज्या अनुपात (ध्रुवण क्षमता) व विद्युत ऋणात्मकता समान होती है।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Which exists: BF4- or BF6^3-?',
      q_hi: 'कौन-सा अस्तित्व में है: BF₄⁻ या BF₆³⁻?',
      a_en: 'BF4- exists; BF6^3- does not, because boron has no d-orbitals to exceed covalency 4.',
      a_hi: 'BF₄⁻ है; BF₆³⁻ नहीं, क्योंकि बोरॉन में सहसंयोजकता 4 से अधिक करने हेतु d-कक्षक नहीं हैं।',
      formula: '$$\\text{BF}_4^-\\ \\checkmark;\\quad\\text{BF}_6^{3-}\\ \\times$$'
    },
    {
      d: 'M',
      q_en: 'Why does AlF6^3- exist but BF6^3- does not?',
      q_hi: 'AlF₆³⁻ का अस्तित्व है पर BF₆³⁻ का नहीं, क्यों?',
      a_en: 'Al has vacant 3d orbitals and a larger size, allowing covalency 6; B (Period 2) cannot.',
      a_hi: 'Al में रिक्त 3d कक्षक व बड़ा आकार है, जिससे सहसंयोजकता 6 संभव है; B (आवर्त 2) में नहीं।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Why do NCl5 and OF4 not exist, while PCl5 and SF6 do?',
      q_hi: 'NCl₅ व OF₄ का अस्तित्व क्यों नहीं, जबकि PCl₅ व SF₆ हैं?',
      a_en: 'N and O (Period 2) lack d-orbitals to expand the octet; P and S use their 3d orbitals.',
      a_hi: 'N व O (आवर्त 2) में अष्टक विस्तार हेतु d-कक्षक नहीं हैं; P व S, 3d कक्षक प्रयोग करते हैं।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Why can C and N form multiple bonds but Si and P usually do not?',
      q_hi: 'C व N बहुबंध बना सकते हैं पर Si व P प्रायः नहीं, क्यों?',
      a_en: 'Small Period 2 atoms overlap p-orbitals sideways well (p-pi to p-pi); larger Si and P cannot.',
      a_hi: 'छोटे आवर्त 2 परमाणुओं के p-कक्षकों का पार्श्व अतिव्यापन (pπ–pπ) प्रभावी है; बड़े Si, P में नहीं।',
      formula: '$$\\text{C=C},\\ \\text{N}\\equiv\\text{N}\\ \\ \\text{vs}\\ \\ \\text{Si–Si},\\ \\text{P}_4$$'
    },
    {
      d: 'M',
      q_en: 'State two similarities between Li and Mg.',
      q_hi: 'Li व Mg की दो समानताएँ बताइए।',
      a_en: 'Both burn in N2 to give nitrides (Li3N, Mg3N2) and their carbonates decompose on heating.',
      a_hi: 'दोनों N₂ में जलकर नाइट्राइड बनाते हैं (Li₃N, Mg₃N₂) और इनके कार्बोनेट गर्म करने पर विघटित होते हैं।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'State two similarities between Be and Al.',
      q_hi: 'Be व Al की दो समानताएँ बताइए।',
      a_en: 'Both have amphoteric oxides/hydroxides and are rendered passive by conc. HNO3.',
      a_hi: 'दोनों के ऑक्साइड/हाइड्रॉक्साइड उभयधर्मी हैं और सांद्र HNO₃ से निष्क्रिय हो जाते हैं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'State two similarities between B and Si.',
      q_hi: 'B व Si की दो समानताएँ बताइए।',
      a_en: 'Both are metalloids with acidic oxides (B2O3, SiO2) and form volatile, easily hydrolysed hydrides.',
      a_hi: 'दोनों उपधातुएँ हैं, अम्लीय ऑक्साइड (B₂O₃, SiO₂) बनाती हैं तथा वाष्पशील, सरलता से जल-अपघटित हाइड्राइड देती हैं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why does N form N≡N while P exists as P4 with single bonds?',
      q_hi: 'N, N≡N बनाता है जबकि P एकल आबंधों वाले P₄ के रूप में क्यों रहता है?',
      a_en: 'N atoms overlap p-pi to p-pi well; the larger P atoms cannot, so P prefers three single bonds in P4.',
      a_hi: 'N परमाणुओं का pπ–pπ अतिव्यापन अच्छा है; बड़े P परमाणु ऐसा नहीं कर पाते, इसलिए P₄ में एकल आबंध बनते हैं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Li forms only Li2O, but Na forms Na2O2 and K forms KO2. Why?',
      q_hi: 'Li केवल Li₂O बनाता है, पर Na, Na₂O₂ तथा K, KO₂ बनाता है। क्यों?',
      a_en: 'Small, highly polarising Li+ stabilises small O2-, but not the larger O2^2- and O2^- ions.',
      a_hi: 'छोटा, उच्च ध्रुवण क्षमता वाला Li⁺ छोटे O²⁻ को स्थायी करता है; बड़े O₂²⁻ व O₂⁻ को नहीं।',
      formula: '$$\\text{Li}_2\\text{O};\\ \\text{Na}_2\\text{O}_2;\\ \\text{KO}_2$$'
    },
    {
      d: 'H',
      q_en: 'Why is LiCl soluble in organic solvents like MgCl2?',
      q_hi: 'LiCl, MgCl₂ की तरह कार्बनिक विलायकों में विलेय क्यों है?',
      a_en: 'Li+ has high polarising power, so LiCl has covalent character (Fajans\' rules), like MgCl2.',
      a_hi: 'Li⁺ की ध्रुवण क्षमता उच्च है, इसलिए LiCl में सहसंयोजी लक्षण (फैजान नियम) होता है, MgCl₂ की तरह।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why is BeCl2 covalent while MgCl2 is largely ionic?',
      q_hi: 'BeCl₂ सहसंयोजी है जबकि MgCl₂ मुख्यतः आयनिक, क्यों?',
      a_en: 'Be2+ is far smaller with a high charge/radius ratio, so it strongly polarises Cl- (Fajans\' rules).',
      a_hi: 'Be²⁺ बहुत छोटा है और आवेश/त्रिज्या अनुपात अधिक है, जो Cl⁻ को प्रबल ध्रुवित करता है (फैजान नियम)।',
      formula: ''
    }
  ],

  /* ---------- SET 15: Nature of Oxides & Ultimate Periodic Trends JEE/NEET Traps ---------- */
  15: [
    {
      d: 'E',
      q_en: 'Name four common basic oxides.',
      q_hi: 'चार सामान्य क्षारीय ऑक्साइड (basic oxides) के नाम बताइए।',
      a_en: 'Na2O, K2O, MgO and CaO: oxides of metals of Groups 1 and 2.',
      a_hi: 'Na₂O, K₂O, MgO तथा CaO: वर्ग 1 व 2 की धातुओं के ऑक्साइड।',
      formula: '$$\\text{Na}_2\\text{O, K}_2\\text{O, MgO, CaO}$$'
    },
    {
      d: 'E',
      q_en: 'Name five common acidic oxides.',
      q_hi: 'पाँच सामान्य अम्लीय ऑक्साइड बताइए।',
      a_en: 'CO2, N2O5, P4O10, SO3, Cl2O7: oxides of non-metals in high oxidation states.',
      a_hi: 'CO₂, N₂O₅, P₄O₁₀, SO₃, Cl₂O₇: उच्च ऑक्सीकरण अवस्था वाली अधातुओं के ऑक्साइड।',
      formula: '$$\\text{CO}_2,\\text{N}_2\\text{O}_5,\\text{P}_4\\text{O}_{10},\\text{SO}_3,\\text{Cl}_2\\text{O}_7$$'
    },
    {
      d: 'E',
      q_en: 'What is an amphoteric oxide? Give three examples.',
      q_hi: 'उभयधर्मी ऑक्साइड (amphoteric oxide) क्या है? तीन उदाहरण दीजिए।',
      a_en: 'It reacts with both acids and bases, e.g. BeO, Al2O3 and ZnO.',
      a_hi: 'यह अम्ल व क्षार दोनों से अभिक्रिया करता है, जैसे BeO, Al₂O₃ तथा ZnO।',
      formula: '$$\\text{BeO, Al}_2\\text{O}_3,\\text{ZnO}$$'
    },
    {
      d: 'E',
      q_en: 'Which oxides are neutral?',
      q_hi: 'कौन-से ऑक्साइड उदासीन (neutral) हैं?',
      a_en: 'Only CO, NO and N2O are commonly neutral oxides.',
      a_hi: 'केवल CO, NO तथा N₂O सामान्यतः उदासीन ऑक्साइड हैं।',
      formula: '$$\\text{CO, NO, N}_2\\text{O}$$'
    },
    {
      d: 'E',
      q_en: 'How does the nature of oxides change across Period 3?',
      q_hi: 'आवर्त 3 में ऑक्साइडों की प्रकृति कैसे बदलती है?',
      a_en: 'Strongly basic (Na2O, MgO), amphoteric (Al2O3), then acidic (SiO2, P4O10, SO3, Cl2O7).',
      a_hi: 'प्रबल क्षारीय (Na₂O, MgO), उभयधर्मी (Al₂O₃), फिर अम्लीय (SiO₂, P₄O₁₀, SO₃, Cl₂O₇)।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Arrange the oxoacids of chlorine by acidic strength.',
      q_hi: 'क्लोरीन के ऑक्सीअम्लों को अम्लीय प्रबलता के क्रम में लिखिए।',
      a_en: 'HClO4 > HClO3 > HClO2 > HClO (more oxygen atoms stabilise the anion).',
      a_hi: 'HClO₄ > HClO₃ > HClO₂ > HClO (अधिक ऑक्सीजन परमाणु ऋणायन को स्थायी करते हैं)।',
      formula: '$$\\text{HClO}_4>\\text{HClO}_3>\\text{HClO}_2>\\text{HClO}$$'
    },
    {
      d: 'M',
      q_en: 'Arrange HNO3, H2CO3 and H3BO3 by acidic strength.',
      q_hi: 'HNO₃, H₂CO₃ व H₃BO₃ को अम्लीय प्रबलता के क्रम में लिखिए।',
      a_en: 'HNO3 > H2CO3 > H3BO3, following the electronegativity order N > C > B.',
      a_hi: 'HNO₃ > H₂CO₃ > H₃BO₃, जो N > C > B विद्युत ऋणात्मकता के क्रम के अनुसार है।',
      formula: '$$\\text{HNO}_3>\\text{H}_2\\text{CO}_3>\\text{H}_3\\text{BO}_3$$'
    },
    {
      d: 'M',
      q_en: 'Arrange the basic strength of LiOH, NaOH and KOH.',
      q_hi: 'LiOH, NaOH, KOH की क्षारीय प्रबलता का क्रम बताइए।',
      a_en: 'LiOH < NaOH < KOH (basicity rises down Group 1 as the M-OH bond weakens).',
      a_hi: 'LiOH < NaOH < KOH (वर्ग 1 में नीचे M–OH आबंध दुर्बल होने से क्षारकता बढ़ती है)।',
      formula: '$$\\text{LiOH}<\\text{NaOH}<\\text{KOH}$$'
    },
    {
      d: 'M',
      q_en: 'Arrange the Group 2 hydroxides by basic strength.',
      q_hi: 'वर्ग 2 के हाइड्रॉक्साइडों को क्षारीय प्रबलता के क्रम में लिखिए।',
      a_en: 'Be(OH)2 < Mg(OH)2 < Ca(OH)2 < Ba(OH)2 (Be(OH)2 is amphoteric).',
      a_hi: 'Be(OH)₂ < Mg(OH)₂ < Ca(OH)₂ < Ba(OH)₂ (Be(OH)₂ उभयधर्मी है)।',
      formula: '$$\\text{Be(OH)}_2<\\text{Mg(OH)}_2<\\text{Ca(OH)}_2<\\text{Ba(OH)}_2$$'
    },
    {
      d: 'M',
      q_en: 'Which elements are most reactive at the two extremes of a period?',
      q_hi: 'आवर्त के दोनों छोरों पर कौन-से तत्व सर्वाधिक अभिक्रियाशील हैं?',
      a_en: 'Left: alkali metals (lose electrons easily); right: halogens (gain electrons easily); centre: least.',
      a_hi: 'बाएँ: क्षार धातुएँ (इलेक्ट्रॉन सरलता से त्यागती हैं); दाएँ: हैलोजन (सरलता से ग्रहण); मध्य में सबसे कम।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Name the amphoteric oxides of Group 14 elements.',
      q_hi: 'वर्ग 14 के उभयधर्मी ऑक्साइड बताइए।',
      a_en: 'SnO, SnO2, PbO and PbO2 (while CO2 and SiO2 are acidic).',
      a_hi: 'SnO, SnO₂, PbO तथा PbO₂ (जबकि CO₂ व SiO₂ अम्लीय हैं)।',
      formula: '$$\\text{SnO, SnO}_2,\\text{PbO, PbO}_2$$'
    },
    {
      d: 'H',
      q_en: 'Is NO2 a neutral oxide? Which nitrogen oxides are neutral?',
      q_hi: 'क्या NO₂ उदासीन ऑक्साइड है? नाइट्रोजन के कौन-से ऑक्साइड उदासीन हैं?',
      a_en: 'No, NO2 is acidic; only N2O and NO are neutral (N2O3 and N2O5 are acidic).',
      a_hi: 'नहीं, NO₂ अम्लीय है; केवल N₂O व NO उदासीन हैं (N₂O₃ व N₂O₅ अम्लीय)।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'What is the nature of CrO, Cr2O3 and CrO3?',
      q_hi: 'CrO, Cr₂O₃ व CrO₃ की प्रकृति क्या है?',
      a_en: 'CrO is basic, Cr2O3 is amphoteric and CrO3 is acidic: acidity rises with oxidation state.',
      a_hi: 'CrO क्षारीय, Cr₂O₃ उभयधर्मी तथा CrO₃ अम्लीय है: ऑक्सीकरण अवस्था के साथ अम्लता बढ़ती है।',
      formula: '$$\\text{CrO (basic)}<\\text{Cr}_2\\text{O}_3<\\text{CrO}_3\\text{ (acidic)}$$'
    },
    {
      d: 'H',
      q_en: 'What is the nature of MnO, MnO2 and Mn2O7?',
      q_hi: 'MnO, MnO₂ व Mn₂O₇ की प्रकृति क्या है?',
      a_en: 'MnO is basic, MnO2 amphoteric and Mn2O7 acidic (it gives permanganic acid, HMnO4).',
      a_hi: 'MnO क्षारीय, MnO₂ उभयधर्मी तथा Mn₂O₇ अम्लीय है (परमैंगनिक अम्ल HMnO₄ देता है)।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Show with equations that Al2O3 is amphoteric.',
      q_hi: 'समीकरणों से दर्शाइए कि Al₂O₃ उभयधर्मी है।',
      a_en: 'It reacts with acid to give AlCl3 and with base to give NaAlO2 (sodium aluminate).',
      a_hi: 'यह अम्ल से AlCl₃ तथा क्षार से NaAlO₂ (सोडियम ऐलुमिनेट) देता है।',
      formula: '$$\\text{Al}_2\\text{O}_3+6\\text{HCl}\\rightarrow2\\text{AlCl}_3+3\\text{H}_2\\text{O};\\ \\text{Al}_2\\text{O}_3+2\\text{NaOH}\\rightarrow2\\text{NaAlO}_2+\\text{H}_2\\text{O}$$'
    }
  ]
};
