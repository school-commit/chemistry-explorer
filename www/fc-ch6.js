/* ==========================================================================
   CHEMISTRY EXPLORER - Class 11 Chemistry
   Chapter 6: Equilibrium (Chemical & Ionic Equilibrium)
   Flashcard database: 15 sets x 15 cards = 225 hand-crafted cards
   Each set: 5 Easy (E) + 5 Medium (M) + 5 Hard (H)
   Read by buildDeck(ch, s) via window.FLASHCARD_SETS_DB[chId][setNum]
   ========================================================================== */
window.FLASHCARD_SETS_DB = window.FLASHCARD_SETS_DB || {};
window.FLASHCARD_SETS_DB.ch6 = {

  /* ---------- SET 1: Physical Equilibrium & Dynamic Nature of Equilibrium ---------- */
  1: [
    {
      d: 'E',
      q_en: 'At what conditions do ice and water coexist in equilibrium?',
      q_hi: 'किन परिस्थितियों में बर्फ व जल साम्य में रहते हैं?',
      a_en: 'At 273 K and 1 atm (normal melting point) in a closed system: rate of melting = rate of freezing.',
      a_hi: '273 K व 1 atm (सामान्य गलनांक) पर बंद निकाय में: गलन की दर = हिमीकरण की दर।',
      formula: '$$\\text{H}_2\\text{O(s)}\\rightleftharpoons\\text{H}_2\\text{O(l)}$$'
    },
    {
      d: 'E',
      q_en: 'What is liquid–vapour equilibrium?',
      q_hi: 'द्रव–वाष्प साम्य (liquid–vapour equilibrium) क्या है?',
      a_en: 'In a closed vessel, rate of evaporation = rate of condensation, so the vapour pressure stays constant.',
      a_hi: 'बंद पात्र में वाष्पन की दर = संघनन की दर होती है, अतः वाष्प दाब स्थिर रहता है।',
      formula: '$$\\text{H}_2\\text{O(l)}\\rightleftharpoons\\text{H}_2\\text{O(g)}$$'
    },
    {
      d: 'E',
      q_en: 'Give three examples of solid–vapour equilibrium.',
      q_hi: 'ठोस–वाष्प साम्य (solid–vapour) के तीन उदाहरण दीजिए।',
      a_en: 'Sublimation of iodine, camphor and ammonium chloride in a closed vessel.',
      a_hi: 'बंद पात्र में आयोडीन, कपूर व अमोनियम क्लोराइड का ऊर्ध्वपातन।',
      formula: '$$\\text{I}_2\\text{(s)}\\rightleftharpoons\\text{I}_2\\text{(g)}$$'
    },
    {
      d: 'E',
      q_en: 'What is a saturated solution in terms of equilibrium?',
      q_hi: 'साम्य के रूप में संतृप्त विलयन (saturated solution) क्या है?',
      a_en: 'Solution in which rate of dissolution of solute = rate of crystallisation at a given temperature.',
      a_hi: 'वह विलयन जिसमें दिए ताप पर विलेय के घुलने की दर = क्रिस्टलन की दर होती है।',
      formula: '$$\\text{Solute(s)}\\rightleftharpoons\\text{Solute(aq)}$$'
    },
    {
      d: 'E',
      q_en: 'Why must equilibrium be studied in a closed vessel?',
      q_hi: 'साम्य का अध्ययन बंद पात्र में ही क्यों किया जाता है?',
      a_en: 'In an open vessel vapour or gaseous products escape, so the reverse process cannot match the forward one.',
      a_hi: 'खुले पात्र में वाष्प या गैसीय उत्पाद बाहर निकल जाते हैं, अतः प्रतिलोमी क्रिया बराबर नहीं हो पाती।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'On what does the vapour pressure of a liquid at equilibrium depend?',
      q_hi: 'साम्य पर द्रव का वाष्प दाब (vapour pressure) किस पर निर्भर है?',
      a_en: 'Only on temperature (and nature of liquid), not on the amount of liquid or the volume of the container.',
      a_hi: 'केवल ताप (व द्रव की प्रकृति) पर; द्रव की मात्रा या पात्र के आयतन पर नहीं।',
      formula: '$$p_{\\text{H}_2\\text{O}}=f(T)\\ \\text{only}$$'
    },
    {
      d: 'M',
      q_en: 'State Henry\'s law for the solubility of a gas in a liquid.',
      q_hi: 'द्रव में गैस की विलेयता के लिए हेनरी का नियम (Henry\'s law) बताइए।',
      a_en: 'At constant T, solubility (mole fraction) of a gas is directly proportional to its partial pressure above the liquid.',
      a_hi: 'स्थिर ताप पर गैस की विलेयता (मोल अंश) द्रव के ऊपर उसके आंशिक दाब के अनुक्रमानुपाती होती है।',
      formula: '$$p=k_H\\,x$$'
    },
    {
      d: 'M',
      q_en: 'Why does a soda bottle fizz when opened?',
      q_hi: 'सोडा की बोतल खोलने पर झाग क्यों बनता है?',
      a_en: 'Opening lowers the CO2 pressure above the liquid, so CO2 solubility falls and the gas escapes as bubbles.',
      a_hi: 'खोलने पर द्रव के ऊपर CO2 का दाब घटता है, विलेयता कम हो जाती है और गैस बुलबुलों के रूप में निकलती है।',
      formula: '$$\\text{CO}_2\\text{(aq)}\\rightleftharpoons\\text{CO}_2\\text{(g)}$$'
    },
    {
      d: 'M',
      q_en: 'Why does warm soda fizz more than cold soda?',
      q_hi: 'गर्म सोडा ठंडे सोडा से अधिक झाग क्यों देता है?',
      a_en: 'Dissolution of gases is exothermic, so solubility falls on heating and CO2 escapes faster.',
      a_hi: 'गैसों का घुलना ऊष्माक्षेपी है, अतः गर्म करने पर विलेयता घटती है और CO2 तेज़ी से निकलती है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What does it mean that equilibrium is dynamic?',
      q_hi: 'साम्य गतिक (dynamic) है, इसका क्या अर्थ है?',
      a_en: 'Forward and backward processes continue at equal rates (r_f = r_b ≠ 0); only macroscopic properties look constant.',
      a_hi: 'अग्र व पश्च क्रियाएँ समान दर से चलती रहती हैं (r_f = r_b ≠ 0); केवल स्थूल गुण स्थिर दिखते हैं।',
      formula: '$$r_f=r_b\\neq0$$'
    },
    {
      d: 'H',
      q_en: 'How does adding D2 to N2 + 3H2 ⇌ 2NH3 at equilibrium prove it is dynamic?',
      q_hi: 'साम्य पर N2 + 3H2 ⇌ 2NH3 में D2 मिलाने से गतिक प्रकृति कैसे सिद्ध होती है?',
      a_en: 'Deuterium soon appears in NH3 (NH2D, NHD2, ND3) and HD forms: both reactions never stop.',
      a_hi: 'ड्यूटीरियम शीघ्र ही NH3 (NH2D, NHD2, ND3) में तथा HD के रूप में मिलता है: दोनों अभिक्रियाएँ चलती रहती हैं।',
      formula: '$$\\text{N}_2+3\\text{D}_2\\rightleftharpoons2\\text{ND}_3$$'
    },
    {
      d: 'H',
      q_en: 'Radioactive I2* is added to a saturated iodine solution. What is observed?',
      q_hi: 'संतृप्त आयोडीन विलयन में रेडियोधर्मी I2* मिलाने पर क्या देखा जाता है?',
      a_en: 'Radioactivity later appears in the solid iodine though concentration is unchanged: dissolution and crystallisation continue.',
      a_hi: 'कुछ समय बाद ठोस आयोडीन में रेडियोधर्मिता मिलती है जबकि सांद्रता अपरिवर्तित: घुलना व क्रिस्टलन जारी है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'TRAP: A tiny drop of water is sealed in a huge vessel. Is the pressure always the vapour pressure?',
      q_hi: 'ट्रैप: एक विशाल बंद पात्र में पानी की बहुत छोटी बूँद है। क्या दाब सदैव वाष्प दाब होगा?',
      a_en: 'No. If all the liquid evaporates before saturation, no equilibrium exists and the pressure is below vapour pressure.',
      a_hi: 'नहीं। यदि संतृप्ति से पहले पूरा द्रव वाष्पित हो जाए तो साम्य नहीं बनता और दाब वाष्प दाब से कम रहता है।',
      formula: '$$p<p^{\\text{sat}}\\ (\\text{no liquid left})$$'
    },
    {
      d: 'H',
      q_en: 'Why does the melting point of ice decrease on increasing pressure?',
      q_hi: 'दाब बढ़ाने पर बर्फ का गलनांक क्यों घटता है?',
      a_en: 'Water is denser than ice, so higher pressure favours the smaller-volume liquid (Le Chatelier), lowering the melting point.',
      a_hi: 'जल बर्फ से सघन है, अतः अधिक दाब कम आयतन वाले द्रव के पक्ष में है (ला-शातेलिए); गलनांक घटता है।',
      formula: '$$\\text{Ice}\\rightleftharpoons\\text{Water},\\ V_{\\text{liq}}<V_{\\text{solid}}$$'
    },
    {
      d: 'H',
      q_en: 'Does adding more solid solute to a saturated solution at constant T change its concentration?',
      q_hi: 'स्थिर ताप पर संतृप्त विलयन में और ठोस विलेय डालने से सांद्रता बदलती है?',
      a_en: 'No. Concentration is fixed by temperature; the extra solid stays undissolved and both rates remain equal.',
      a_hi: 'नहीं। सांद्रता ताप से निर्धारित है; अतिरिक्त ठोस अविलेय रहता है व दोनों दरें बराबर रहती हैं।',
      formula: ''
    }
  ],

  /* ---------- SET 2: Law of Chemical Equilibrium & Characteristics of Kc ---------- */
  2: [
    {
      d: 'E',
      q_en: 'State the Law of Mass Action (Guldberg & Waage).',
      q_hi: 'द्रव्य अनुपाती क्रिया का नियम (Guldberg व Waage) बताइए।',
      a_en: 'At constant T, rate of a reaction is proportional to the product of active masses of reactants, each raised to its stoichiometric coefficient.',
      a_hi: 'स्थिर ताप पर अभिक्रिया की दर अभिकारकों के सक्रिय द्रव्यमानों के गुणनफल (स्टोइकियोमीट्री घात सहित) के समानुपाती होती है।',
      formula: '$$\\text{rate}\\propto[A]^a[B]^b$$'
    },
    {
      d: 'E',
      q_en: 'Write the expression of Kc for aA + bB ⇌ cC + dD.',
      q_hi: 'aA + bB ⇌ cC + dD के लिए Kc का व्यंजक लिखिए।',
      a_en: 'Kc = product of equilibrium concentrations of products ÷ that of reactants, each raised to its coefficient.',
      a_hi: 'Kc = साम्य पर उत्पादों की सांद्रताओं का गुणनफल ÷ अभिकारकों का गुणनफल, प्रत्येक पर स्टोइकियोमीट्री घात।',
      formula: '$$K_c=\\frac{[C]^c[D]^d}{[A]^a[B]^b}$$'
    },
    {
      d: 'E',
      q_en: 'Write Kc for N2(g) + 3H2(g) ⇌ 2NH3(g).',
      q_hi: 'N2(g) + 3H2(g) ⇌ 2NH3(g) के लिए Kc लिखिए।',
      a_en: 'Kc = [NH3]^2 / ([N2][H2]^3).',
      a_hi: 'Kc = [NH3]^2 / ([N2][H2]^3)।',
      formula: '$$K_c=\\frac{[\\text{NH}_3]^2}{[\\text{N}_2][\\text{H}_2]^3}$$'
    },
    {
      d: 'E',
      q_en: 'Write Kc for H2(g) + I2(g) ⇌ 2HI(g).',
      q_hi: 'H2(g) + I2(g) ⇌ 2HI(g) के लिए Kc लिखिए।',
      a_en: 'Kc = [HI]^2 / ([H2][I2]).',
      a_hi: 'Kc = [HI]^2 / ([H2][I2])।',
      formula: '$$K_c=\\frac{[\\text{HI}]^2}{[\\text{H}_2][\\text{I}_2]}$$'
    },
    {
      d: 'E',
      q_en: 'On what does the value of Kc depend?',
      q_hi: 'Kc का मान किन कारकों पर निर्भर करता है?',
      a_en: 'Only on temperature and the way the balanced equation is written; not on concentration, pressure, volume or catalyst.',
      a_hi: 'केवल ताप व संतुलित समीकरण लिखने के ढंग पर; सांद्रता, दाब, आयतन या उत्प्रेरक पर नहीं।',
      formula: '$$K_c=f(T)$$'
    },
    {
      d: 'M',
      q_en: 'How does Kc change when the reaction is reversed?',
      q_hi: 'अभिक्रिया को उलटने पर Kc कैसे बदलता है?',
      a_en: 'The new constant is the reciprocal of the original: K\'c = 1/Kc.',
      a_hi: 'नया स्थिरांक मूल का व्युत्क्रम होता है: K\'c = 1/Kc।',
      formula: '$$K\'_c=\\frac{1}{K_c}$$'
    },
    {
      d: 'M',
      q_en: 'How does Kc change if the equation is multiplied by n? By 1/2?',
      q_hi: 'समीकरण को n से गुणा करने पर Kc कैसे बदलता है? 1/2 से गुणा करने पर?',
      a_en: 'Multiplying by n gives K\'c = Kc^n; multiplying by 1/2 gives K\'c = √Kc.',
      a_hi: 'n से गुणा करने पर K\'c = Kc^n; 1/2 से गुणा करने पर K\'c = √Kc।',
      formula: '$$K\'_c=K_c^{\\,n},\\quad K\'_c=\\sqrt{K_c}$$'
    },
    {
      d: 'M',
      q_en: 'If two reactions are added, how is the Kc of the net reaction obtained?',
      q_hi: 'दो अभिक्रियाओं को जोड़ने पर नेट अभिक्रिया का Kc कैसे प्राप्त होता है?',
      a_en: 'The equilibrium constants are multiplied: K3 = K1 × K2.',
      a_hi: 'साम्य स्थिरांकों का गुणनफल लिया जाता है: K3 = K1 × K2।',
      formula: '$$K_3=K_1\\times K_2$$'
    },
    {
      d: 'M',
      q_en: 'Does a catalyst change the value of Kc?',
      q_hi: 'क्या उत्प्रेरक Kc का मान बदलता है?',
      a_en: 'No. It speeds up forward and backward reactions equally, so equilibrium is reached sooner but Kc is unchanged.',
      a_hi: 'नहीं। यह अग्र व पश्च दोनों अभिक्रियाओं को समान रूप से तेज़ करता है; साम्य जल्दी बनता है, Kc नहीं बदलता।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What are the units of Kc for N2 + 3H2 ⇌ 2NH3?',
      q_hi: 'N2 + 3H2 ⇌ 2NH3 के लिए Kc की इकाई क्या है?',
      a_en: 'Δn_g = 2 − 4 = −2, so units are (mol L⁻¹)⁻² = L² mol⁻².',
      a_hi: 'Δn_g = 2 − 4 = −2, अतः इकाई (mol L⁻¹)⁻² = L² mol⁻² है।',
      formula: '$$\\text{Unit}=(\\text{mol L}^{-1})^{\\Delta n_g}$$'
    },
    {
      d: 'H',
      q_en: 'If two reactions are subtracted, how are K1 and K2 combined?',
      q_hi: 'दो अभिक्रियाओं को घटाने पर K1 व K2 को कैसे जोड़ा जाता है?',
      a_en: 'Subtracting equation 2 from equation 1 divides the constants: K3 = K1 / K2.',
      a_hi: 'अभिक्रिया 2 को अभिक्रिया 1 से घटाने पर स्थिरांकों का भाग होता है: K3 = K1 / K2।',
      formula: '$$K_3=\\frac{K_1}{K_2}$$'
    },
    {
      d: 'H',
      q_en: 'Different initial concentrations give different equilibrium concentrations. Is Kc different too?',
      q_hi: 'भिन्न प्रारंभिक सांद्रताओं से साम्य सांद्रताएँ भिन्न मिलती हैं। क्या Kc भी भिन्न होगा?',
      a_en: 'No. At fixed T the ratio of concentrations given by the Kc expression is always the same value.',
      a_hi: 'नहीं। स्थिर ताप पर Kc व्यंजक द्वारा दिया गया सांद्रता अनुपात सदैव समान रहता है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'TRAP: Which reactions have a unitless Kc, and what is the standard K°?',
      q_hi: 'ट्रैप: किन अभिक्रियाओं का Kc मात्रकहीन होता है और मानक K° क्या है?',
      a_en: 'Kc is unitless when Δn_g = 0 (e.g. H2 + I2 ⇌ 2HI). Standard K° uses activities (c/c° with c° = 1 M), so it is always dimensionless.',
      a_hi: 'Δn_g = 0 होने पर Kc मात्रकहीन होता है। मानक K° सक्रियता (c/c°, c° = 1 M) पर आधारित है, अतः सदैव मात्रकहीन।',
      formula: '$$K^\\circ=\\prod\\left(\\frac{c_i}{c^\\circ}\\right)^{\\nu_i}$$'
    },
    {
      d: 'H',
      q_en: 'For A ⇌ B, Kc = 4. Find Kc for 2B ⇌ 2A.',
      q_hi: 'A ⇌ B के लिए Kc = 4 है। 2B ⇌ 2A के लिए Kc ज्ञात कीजिए।',
      a_en: 'Reverse gives 1/4; doubling squares it: (1/4)^2 = 1/16 = 0.0625.',
      a_hi: 'उलटने पर 1/4; दो गुना करने पर वर्ग: (1/4)^2 = 1/16 = 0.0625।',
      formula: '$$K\'=\\left(\\frac{1}{4}\\right)^2=0.0625$$'
    },
    {
      d: 'H',
      q_en: '2SO2 + O2 ⇌ 2SO3 has Kc = 100. Find Kc for SO3 ⇌ SO2 + ½O2.',
      q_hi: '2SO2 + O2 ⇌ 2SO3 का Kc = 100 है। SO3 ⇌ SO2 + ½O2 का Kc ज्ञात कीजिए।',
      a_en: 'Reverse (1/100) and halve (square root): K = (1/100)^{1/2} = 0.1.',
      a_hi: 'उलटना (1/100) व आधा करना (वर्गमूल): K = (1/100)^{1/2} = 0.1।',
      formula: '$$K=\\frac{1}{\\sqrt{100}}=0.1$$'
    }
  ],

  /* ---------- SET 3: Homogeneous vs Heterogeneous Equilibria & Kp–Kc Relation ---------- */
  3: [
    {
      d: 'E',
      q_en: 'What is a homogeneous equilibrium?',
      q_hi: 'समांगी साम्य (homogeneous equilibrium) क्या है?',
      a_en: 'All reactants and products are in the same phase, e.g. N2(g) + 3H2(g) ⇌ 2NH3(g).',
      a_hi: 'सभी अभिकारक व उत्पाद एक ही प्रावस्था में होते हैं, जैसे N2(g) + 3H2(g) ⇌ 2NH3(g)।',
      formula: '$$\\text{N}_2\\text{(g)}+3\\text{H}_2\\text{(g)}\\rightleftharpoons2\\text{NH}_3\\text{(g)}$$'
    },
    {
      d: 'E',
      q_en: 'What is a heterogeneous equilibrium? Give an example.',
      q_hi: 'विषमांगी साम्य (heterogeneous equilibrium) क्या है? उदाहरण दीजिए।',
      a_en: 'Species are in more than one phase, e.g. CaCO3(s) ⇌ CaO(s) + CO2(g).',
      a_hi: 'स्पीशीज़ एक से अधिक प्रावस्थाओं में होती हैं, जैसे CaCO3(s) ⇌ CaO(s) + CO2(g)।',
      formula: '$$\\text{CaCO}_3\\text{(s)}\\rightleftharpoons\\text{CaO(s)}+\\text{CO}_2\\text{(g)}$$'
    },
    {
      d: 'E',
      q_en: 'Write Kp for CaCO3(s) ⇌ CaO(s) + CO2(g).',
      q_hi: 'CaCO3(s) ⇌ CaO(s) + CO2(g) के लिए Kp लिखिए।',
      a_en: 'Kp = p(CO2); solids CaCO3 and CaO are omitted.',
      a_hi: 'Kp = p(CO2); ठोस CaCO3 व CaO सम्मिलित नहीं होते।',
      formula: '$$K_p=p_{\\text{CO}_2}$$'
    },
    {
      d: 'E',
      q_en: 'Why are pure solids and pure liquids omitted from Kc and Kp?',
      q_hi: 'शुद्ध ठोस व शुद्ध द्रव को Kc व Kp में क्यों नहीं लिखा जाता?',
      a_en: 'Their active mass (activity) is constant, taken as 1, because their concentration does not change with amount.',
      a_hi: 'उनका सक्रिय द्रव्यमान (activity) स्थिर, 1 माना जाता है, क्योंकि मात्रा बदलने पर सांद्रता नहीं बदलती।',
      formula: '$$a_{\\text{pure solid}}=a_{\\text{pure liquid}}=1$$'
    },
    {
      d: 'E',
      q_en: 'What is Kp?',
      q_hi: 'Kp क्या है?',
      a_en: 'The equilibrium constant for gaseous reactions expressed in partial pressures of products and reactants.',
      a_hi: 'गैसीय अभिक्रियाओं का साम्य स्थिरांक जो उत्पादों व अभिकारकों के आंशिक दाबों में व्यक्त हो।',
      formula: '$$K_p=\\frac{p_C^{\\,c}\\,p_D^{\\,d}}{p_A^{\\,a}\\,p_B^{\\,b}}$$'
    },
    {
      d: 'M',
      q_en: 'Derive the relation between Kp and Kc.',
      q_hi: 'Kp व Kc में संबंध व्युत्पन्न कीजिए।',
      a_en: 'Using p = cRT for each gas in Kp, the RT factors combine to give Kp = Kc (RT)^Δn_g.',
      a_hi: 'Kp में प्रत्येक गैस के लिए p = cRT रखने पर RT के गुणनखंड मिलकर Kp = Kc (RT)^Δn_g देते हैं।',
      formula: '$$K_p=K_c(RT)^{\\Delta n_g}$$'
    },
    {
      d: 'M',
      q_en: 'Find Kp for NH4HS(s) ⇌ NH3(g) + H2S(g) in terms of total pressure P.',
      q_hi: 'NH4HS(s) ⇌ NH3(g) + H2S(g) के लिए कुल दाब P के पदों में Kp ज्ञात कीजिए।',
      a_en: 'p(NH3) = p(H2S) = P/2, so Kp = (P/2)(P/2) = P²/4.',
      a_hi: 'p(NH3) = p(H2S) = P/2, अतः Kp = (P/2)(P/2) = P²/4।',
      formula: '$$K_p=p_{\\text{NH}_3}\\,p_{\\text{H}_2\\text{S}}=\\frac{P^2}{4}$$'
    },
    {
      d: 'M',
      q_en: 'When is Kp = Kc?',
      q_hi: 'Kp = Kc कब होता है?',
      a_en: 'When Δn_g = 0, e.g. H2 + I2 ⇌ 2HI, since (RT)^0 = 1.',
      a_hi: 'जब Δn_g = 0 हो, जैसे H2 + I2 ⇌ 2HI, क्योंकि (RT)^0 = 1।',
      formula: '$$\\Delta n_g=0\\Rightarrow K_p=K_c$$'
    },
    {
      d: 'M',
      q_en: 'Which value of R is used for pressure in atm and in bar?',
      q_hi: 'दाब atm व bar में हो तो R का कौन-सा मान लें?',
      a_en: 'R = 0.0821 L atm mol⁻¹ K⁻¹ for atm; R = 0.0831 L bar mol⁻¹ K⁻¹ for bar. Units must match.',
      a_hi: 'atm के लिए R = 0.0821 L atm mol⁻¹ K⁻¹; bar के लिए R = 0.0831 L bar mol⁻¹ K⁻¹। इकाइयाँ मेल खानी चाहिए।',
      formula: '$$R=0.0821\\ \\text{L atm mol}^{-1}\\text{K}^{-1}$$'
    },
    {
      d: 'M',
      q_en: 'Compare Kp and Kc for PCl5 ⇌ PCl3 + Cl2.',
      q_hi: 'PCl5 ⇌ PCl3 + Cl2 के लिए Kp व Kc की तुलना कीजिए।',
      a_en: 'Δn_g = +1, so Kp = Kc(RT); since RT > 1 at ordinary T, Kp > Kc.',
      a_hi: 'Δn_g = +1, अतः Kp = Kc(RT); सामान्य ताप पर RT > 1 होने से Kp > Kc।',
      formula: '$$K_p=K_c(RT)>K_c$$'
    },
    {
      d: 'H',
      q_en: 'TRAP: When can Kp < Kc even if Δn_g > 0? Find the temperature limit.',
      q_hi: 'ट्रैप: Δn_g > 0 होने पर भी Kp < Kc कब हो सकता है? ताप सीमा ज्ञात कीजिए।',
      a_en: 'When RT < 1, i.e. T < 1/0.0821 ≈ 12.18 K. Then (RT)^Δn_g < 1 for Δn_g > 0.',
      a_hi: 'जब RT < 1, अर्थात T < 1/0.0821 ≈ 12.18 K। तब Δn_g > 0 के लिए (RT)^Δn_g < 1।',
      formula: '$$RT=1\\Rightarrow T=\\frac{1}{0.0821}\\approx12.18\\ \\text{K}$$'
    },
    {
      d: 'H',
      q_en: 'Write Kc and Kp for C(s) + CO2(g) ⇌ 2CO(g) and give Δn_g.',
      q_hi: 'C(s) + CO2(g) ⇌ 2CO(g) के लिए Kc, Kp लिखिए तथा Δn_g बताइए।',
      a_en: 'Kc = [CO]²/[CO2]; Kp = p(CO)²/p(CO2). Only gases count: Δn_g = 2 − 1 = +1.',
      a_hi: 'Kc = [CO]²/[CO2]; Kp = p(CO)²/p(CO2)। केवल गैसें गिनें: Δn_g = 2 − 1 = +1।',
      formula: '$$K_p=\\frac{p_{\\text{CO}}^2}{p_{\\text{CO}_2}}$$'
    },
    {
      d: 'H',
      q_en: 'NH2COONH4(s) ⇌ 2NH3 + CO2: express Kp in terms of total pressure P.',
      q_hi: 'NH2COONH4(s) ⇌ 2NH3 + CO2: कुल दाब P के पदों में Kp व्यक्त कीजिए।',
      a_en: 'p(NH3) = 2P/3, p(CO2) = P/3, so Kp = (2P/3)²(P/3) = 4P³/27.',
      a_hi: 'p(NH3) = 2P/3, p(CO2) = P/3, अतः Kp = (2P/3)²(P/3) = 4P³/27।',
      formula: '$$K_p=\\left(\\tfrac{2P}{3}\\right)^2\\left(\\tfrac{P}{3}\\right)=\\frac{4P^3}{27}$$'
    },
    {
      d: 'H',
      q_en: 'Kc = 0.5 for N2 + 3H2 ⇌ 2NH3 at 400 K. Find Kp (R = 0.0821).',
      q_hi: '400 K पर N2 + 3H2 ⇌ 2NH3 के लिए Kc = 0.5 है। Kp ज्ञात कीजिए (R = 0.0821)।',
      a_en: 'Δn_g = −2; RT = 32.84; Kp = 0.5/(32.84)² ≈ 4.6 × 10⁻⁴.',
      a_hi: 'Δn_g = −2; RT = 32.84; Kp = 0.5/(32.84)² ≈ 4.6 × 10⁻⁴।',
      formula: '$$K_p=\\frac{0.5}{(32.84)^2}\\approx4.6\\times10^{-4}$$'
    },
    {
      d: 'H',
      q_en: 'For NH4HS(s) ⇌ NH3 + H2S, Kp = 0.25 atm². What is the total pressure?',
      q_hi: 'NH4HS(s) ⇌ NH3 + H2S के लिए Kp = 0.25 atm² है। कुल दाब क्या होगा?',
      a_en: 'Kp = P²/4 = 0.25, so P² = 1 and total pressure P = 1 atm.',
      a_hi: 'Kp = P²/4 = 0.25, अतः P² = 1 और कुल दाब P = 1 atm।',
      formula: '$$P=2\\sqrt{K_p}=2\\times0.5=1\\ \\text{atm}$$'
    }
  ],

  /* ---------- SET 4: Extent of Reaction, Reaction Quotient Qc & ΔG° Link ---------- */
  4: [
    {
      d: 'E',
      q_en: 'What does Kc > 10³ indicate about a reaction?',
      q_hi: 'Kc > 10³ अभिक्रिया के बारे में क्या दर्शाता है?',
      a_en: 'Products predominate at equilibrium; the reaction goes almost to completion.',
      a_hi: 'साम्य पर उत्पाद प्रबल होते हैं; अभिक्रिया लगभग पूर्ण होती है।',
      formula: '$$K_c>10^3$$'
    },
    {
      d: 'E',
      q_en: 'What does Kc < 10⁻³ indicate?',
      q_hi: 'Kc < 10⁻³ क्या दर्शाता है?',
      a_en: 'Reactants predominate; the reaction hardly proceeds forward.',
      a_hi: 'अभिकारक प्रबल रहते हैं; अभिक्रिया बहुत कम आगे बढ़ती है।',
      formula: '$$K_c<10^{-3}$$'
    },
    {
      d: 'E',
      q_en: 'What does Kc between 10⁻³ and 10³ mean?',
      q_hi: '10⁻³ से 10³ के बीच Kc का क्या अर्थ है?',
      a_en: 'Appreciable concentrations of both reactants and products are present at equilibrium.',
      a_hi: 'साम्य पर अभिकारक व उत्पाद दोनों की पर्याप्त सांद्रताएँ उपस्थित होती हैं।',
      formula: '$$10^{-3}<K_c<10^3$$'
    },
    {
      d: 'E',
      q_en: 'Define the reaction quotient Qc.',
      q_hi: 'अभिक्रिया भागफल (reaction quotient) Qc को परिभाषित कीजिए।',
      a_en: 'It has the same form as Kc but uses concentrations at any instant, not only at equilibrium.',
      a_hi: 'इसका रूप Kc जैसा है, पर यह साम्य ही नहीं, किसी भी क्षण की सांद्रताओं से बनता है।',
      formula: '$$Q_c=\\frac{[C]^c[D]^d}{[A]^a[B]^b}\\ (\\text{any time})$$'
    },
    {
      d: 'E',
      q_en: 'If Qc < Kc, in which direction does the reaction proceed?',
      q_hi: 'यदि Qc < Kc हो तो अभिक्रिया किस दिशा में बढ़ेगी?',
      a_en: 'In the forward direction (products form) until Qc = Kc.',
      a_hi: 'अग्र दिशा में (उत्पाद बनेंगे) जब तक Qc = Kc न हो जाए।',
      formula: '$$Q_c<K_c\\Rightarrow\\text{forward}$$'
    },
    {
      d: 'M',
      q_en: 'What is the condition for Qc = Kc and Qc > Kc?',
      q_hi: 'Qc = Kc तथा Qc > Kc की स्थिति क्या दर्शाती है?',
      a_en: 'Qc = Kc: system is at equilibrium. Qc > Kc: net reaction goes backward.',
      a_hi: 'Qc = Kc: निकाय साम्य पर है। Qc > Kc: नेट अभिक्रिया पश्च दिशा में जाती है।',
      formula: '$$Q_c=K_c\\ (\\text{eq.}),\\quad Q_c>K_c\\Rightarrow\\text{backward}$$'
    },
    {
      d: 'M',
      q_en: '1 M each of H2 and I2 react (Kc = 50). Find equilibrium [HI].',
      q_hi: 'H2 व I2 प्रत्येक 1 M लिए गए (Kc = 50)। साम्य पर [HI] ज्ञात कीजिए।',
      a_en: '(2x)²/(1−x)² = 50 gives 2x/(1−x) = 7.07, x ≈ 0.78, so [HI] ≈ 1.56 M.',
      a_hi: '(2x)²/(1−x)² = 50 से 2x/(1−x) = 7.07, x ≈ 0.78, अतः [HI] ≈ 1.56 M।',
      formula: '$$\\frac{(2x)^2}{(1-x)^2}=50\\Rightarrow x\\approx0.78$$'
    },
    {
      d: 'M',
      q_en: 'Only 0.5 M H2 and 0.5 M I2 are mixed (no HI). Find Qc and the direction.',
      q_hi: 'केवल 0.5 M H2 व 0.5 M I2 मिलाए गए (HI नहीं)। Qc व दिशा बताइए।',
      a_en: 'Qc = 0 (no product), which is less than Kc, so the reaction proceeds in the forward direction.',
      a_hi: 'Qc = 0 (उत्पाद नहीं), जो Kc से कम है, अतः अभिक्रिया अग्र दिशा में बढ़ेगी।',
      formula: '$$Q_c=\\frac{0^2}{0.5\\times0.5}=0<K_c$$'
    },
    {
      d: 'M',
      q_en: 'Write the relation connecting ΔG and Q.',
      q_hi: 'ΔG तथा Q को जोड़ने वाला संबंध लिखिए।',
      a_en: 'ΔG = ΔG° + RT ln Q; at equilibrium ΔG = 0 and Q = K.',
      a_hi: 'ΔG = ΔG° + RT ln Q; साम्य पर ΔG = 0 तथा Q = K।',
      formula: '$$\\Delta G=\\Delta G^\\circ+RT\\ln Q$$'
    },
    {
      d: 'M',
      q_en: 'Relate ΔG° to the equilibrium constant K.',
      q_hi: 'ΔG° का साम्य स्थिरांक K से संबंध लिखिए।',
      a_en: 'ΔG° = −RT ln K = −2.303 RT log K. If ΔG° < 0, K > 1; if ΔG° > 0, K < 1.',
      a_hi: 'ΔG° = −RT ln K = −2.303 RT log K। ΔG° < 0 तो K > 1; ΔG° > 0 तो K < 1।',
      formula: '$$\\Delta G^\\circ=-2.303\\,RT\\log K$$'
    },
    {
      d: 'H',
      q_en: 'ΔG° = −5.7 kJ/mol at 298 K. Estimate K.',
      q_hi: '298 K पर ΔG° = −5.7 kJ/mol है। K का आकलन कीजिए।',
      a_en: '2.303RT = 5.7 kJ, so log K = 1 and K ≈ 10.',
      a_hi: '2.303RT = 5.7 kJ, अतः log K = 1 और K ≈ 10।',
      formula: '$$\\log K=\\frac{5705}{2.303\\times8.314\\times298}=1$$'
    },
    {
      d: 'H',
      q_en: 'PCl5 ⇌ PCl3 + Cl2, Kc = 0.04. Mixture: 0.2 M, 0.1 M, 0.1 M. Direction?',
      q_hi: 'PCl5 ⇌ PCl3 + Cl2, Kc = 0.04। मिश्रण: 0.2 M, 0.1 M, 0.1 M। दिशा क्या होगी?',
      a_en: 'Qc = (0.1)(0.1)/0.2 = 0.05 > Kc, so the reaction shifts backward.',
      a_hi: 'Qc = (0.1)(0.1)/0.2 = 0.05 > Kc, अतः अभिक्रिया पश्च दिशा में जाएगी।',
      formula: '$$Q_c=\\frac{0.1\\times0.1}{0.2}=0.05>0.04$$'
    },
    {
      d: 'H',
      q_en: '1 mol PCl5 in 1 L, Kc = 0.04. Find moles dissociated.',
      q_hi: '1 L में 1 mol PCl5 है, Kc = 0.04। वियोजित मोल ज्ञात कीजिए।',
      a_en: 'x²/(1−x) = 0.04 gives x² + 0.04x − 0.04 = 0, so x ≈ 0.18 mol.',
      a_hi: 'x²/(1−x) = 0.04 से x² + 0.04x − 0.04 = 0, अतः x ≈ 0.18 mol।',
      formula: '$$\\frac{x^2}{1-x}=0.04\\Rightarrow x\\approx0.18$$'
    },
    {
      d: 'H',
      q_en: 'TRAP: ΔG° > 0 for a reaction. Can it still proceed forward?',
      q_hi: 'ट्रैप: एक अभिक्रिया का ΔG° > 0 है। क्या वह फिर भी अग्र दिशा में बढ़ सकती है?',
      a_en: 'Yes. If Q is much smaller than K, ΔG = ΔG° + RT ln Q can be negative; ΔG decides direction.',
      a_hi: 'हाँ। यदि Q ≪ K हो तो ΔG = ΔG° + RT ln Q ऋणात्मक हो सकता है; दिशा ΔG से तय होती है।',
      formula: '$$\\Delta G<0\\ \\text{if}\\ RT\\ln Q<-\\Delta G^\\circ$$'
    },
    {
      d: 'H',
      q_en: 'What is ΔG° when K = 1, and does a large K mean a fast reaction?',
      q_hi: 'K = 1 होने पर ΔG° क्या है, और क्या बड़ा K तेज़ अभिक्रिया दर्शाता है?',
      a_en: 'K = 1 gives ΔG° = 0. A large K shows extent only, not rate; kinetics is separate.',
      a_hi: 'K = 1 पर ΔG° = 0। बड़ा K केवल सीमा बताता है, दर नहीं; गतिकी अलग विषय है।',
      formula: '$$K=1\\Rightarrow\\Delta G^\\circ=0$$'
    }
  ],

  /* ---------- SET 5: Degree of Dissociation, Vapour Density & Le Chatelier's Principle ---------- */
  5: [
    {
      d: 'E',
      q_en: 'Define degree of dissociation (α).',
      q_hi: 'वियोजन की मात्रा (degree of dissociation, α) परिभाषित कीजिए।',
      a_en: 'Fraction of the total moles of a substance that dissociates at equilibrium.',
      a_hi: 'साम्य पर पदार्थ के कुल मोलों का वह भाग जो वियोजित होता है।',
      formula: '$$\\alpha=\\frac{\\text{moles dissociated}}{\\text{initial moles}}$$'
    },
    {
      d: 'E',
      q_en: 'State Le Chatelier\'s principle.',
      q_hi: 'ला-शातेलिए का सिद्धांत (Le Chatelier\'s principle) बताइए।',
      a_en: 'If a system at equilibrium is disturbed, it shifts in the direction that partly counteracts the change.',
      a_hi: 'साम्य पर निकाय में परिवर्तन करने पर वह उस दिशा में विस्थापित होता है जो परिवर्तन को आंशिक रूप से कम करे।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'How does adding a reactant affect the equilibrium?',
      q_hi: 'अभिकारक जोड़ने का साम्य पर क्या प्रभाव पड़ता है?',
      a_en: 'The equilibrium shifts forward to consume the added reactant; Kc remains unchanged.',
      a_hi: 'साम्य अग्र दिशा में विस्थापित होता है; Kc अपरिवर्तित रहता है।',
      formula: '$$[\\text{reactant}]\\uparrow\\Rightarrow\\text{forward}$$'
    },
    {
      d: 'E',
      q_en: 'How does increasing pressure shift a gaseous equilibrium?',
      q_hi: 'दाब बढ़ाने पर गैसीय साम्य किस ओर विस्थापित होता है?',
      a_en: 'Toward the side with fewer gas moles (smaller volume). No shift if Δn_g = 0.',
      a_hi: 'कम गैस मोल (कम आयतन) वाली ओर। Δn_g = 0 हो तो कोई विस्थापन नहीं।',
      formula: '$$P\\uparrow\\Rightarrow\\text{side with fewer moles}$$'
    },
    {
      d: 'E',
      q_en: 'What is the effect of a catalyst on equilibrium?',
      q_hi: 'साम्य पर उत्प्रेरक का क्या प्रभाव है?',
      a_en: 'No shift and no change in K; it only helps reach equilibrium faster.',
      a_hi: 'कोई विस्थापन नहीं व K अपरिवर्तित; यह केवल साम्य शीघ्र स्थापित कराता है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Total moles at equilibrium if 1 mol A dissociates into n moles of products?',
      q_hi: 'यदि 1 mol A वियोजित होकर n mol उत्पाद देता है, तो साम्य पर कुल मोल?',
      a_en: 'Total = 1 − α + nα = 1 + (n − 1)α.',
      a_hi: 'कुल मोल = 1 − α + nα = 1 + (n − 1)α।',
      formula: '$$n_{\\text{total}}=1+(n-1)\\alpha$$'
    },
    {
      d: 'M',
      q_en: 'How does temperature change K for exothermic and endothermic reactions?',
      q_hi: 'ताप बदलने पर ऊष्माक्षेपी व ऊष्माशोषी अभिक्रियाओं का K कैसे बदलता है?',
      a_en: 'Exothermic: K decreases with rise in T. Endothermic: K increases with rise in T.',
      a_hi: 'ऊष्माक्षेपी: T बढ़ने पर K घटता है। ऊष्माशोषी: T बढ़ने पर K बढ़ता है।',
      formula: '$$\\Delta H<0:\\ T\\uparrow\\Rightarrow K\\downarrow$$'
    },
    {
      d: 'M',
      q_en: 'Write Kp for PCl5 ⇌ PCl3 + Cl2 in terms of α and total pressure P.',
      q_hi: 'PCl5 ⇌ PCl3 + Cl2 के लिए α व कुल दाब P के पदों में Kp लिखिए।',
      a_en: 'Kp = α²P/(1 − α²).',
      a_hi: 'Kp = α²P/(1 − α²)।',
      formula: '$$K_p=\\frac{\\alpha^2P}{1-\\alpha^2}$$'
    },
    {
      d: 'M',
      q_en: 'Write Kp for N2O4 ⇌ 2NO2 in terms of α and P.',
      q_hi: 'N2O4 ⇌ 2NO2 के लिए α व P के पदों में Kp लिखिए।',
      a_en: 'Kp = 4α²P/(1 − α²).',
      a_hi: 'Kp = 4α²P/(1 − α²)।',
      formula: '$$K_p=\\frac{4\\alpha^2P}{1-\\alpha^2}$$'
    },
    {
      d: 'M',
      q_en: 'State optimum conditions for the Haber process N2 + 3H2 ⇌ 2NH3.',
      q_hi: 'हैबर प्रक्रम N2 + 3H2 ⇌ 2NH3 की अनुकूलतम परिस्थितियाँ बताइए।',
      a_en: 'High pressure (~200 atm), moderate T (~700 K) and Fe catalyst: exothermic, fewer moles on right.',
      a_hi: 'उच्च दाब (~200 atm), मध्यम ताप (~700 K) व Fe उत्प्रेरक: अभिक्रिया ऊष्माक्षेपी, दाईं ओर कम मोल।',
      formula: '$$\\text{N}_2+3\\text{H}_2\\rightleftharpoons2\\text{NH}_3,\\ \\Delta H<0$$'
    },
    {
      d: 'H',
      q_en: 'Give the vapour density formula for α. Find α if PCl5 (D = 104.25) shows d = 70.',
      q_hi: 'α का वाष्प घनत्व सूत्र लिखिए। PCl5 (D = 104.25) में d = 70 हो तो α ज्ञात कीजिए।',
      a_en: 'α = (D − d)/((n − 1)d) = (104.25 − 70)/70 ≈ 0.49 (n = 2).',
      a_hi: 'α = (D − d)/((n − 1)d) = (104.25 − 70)/70 ≈ 0.49 (n = 2)।',
      formula: '$$\\alpha=\\frac{D-d}{(n-1)d}$$'
    },
    {
      d: 'H',
      q_en: 'Write the van\'t Hoff equation relating K and temperature.',
      q_hi: 'K व ताप को जोड़ने वाली वान्ट हॉफ समीकरण लिखिए।',
      a_en: 'log(K2/K1) = ΔH°/(2.303R) × (1/T1 − 1/T2). Positive ΔH° means K rises with T.',
      a_hi: 'log(K2/K1) = ΔH°/(2.303R) × (1/T1 − 1/T2)। धनात्मक ΔH° पर T बढ़ने से K बढ़ता है।',
      formula: '$$\\log\\frac{K_2}{K_1}=\\frac{\\Delta H^\\circ}{2.303R}\\left(\\frac{1}{T_1}-\\frac{1}{T_2}\\right)$$'
    },
    {
      d: 'H',
      q_en: 'TRAP: Inert gas is added at constant volume. Does equilibrium shift?',
      q_hi: 'ट्रैप: स्थिर आयतन पर अक्रिय गैस मिलाई गई। क्या साम्य विस्थापित होगा?',
      a_en: 'No. Partial pressures and concentrations of reacting gases are unchanged, so Qc = Kc still.',
      a_hi: 'नहीं। अभिकारक गैसों के आंशिक दाब व सांद्रता अपरिवर्तित रहते हैं, अतः Qc = Kc बना रहता है।',
      formula: '$$V=\\text{const}:\\ Q=K$$'
    },
    {
      d: 'H',
      q_en: 'TRAP: Inert gas is added at constant total pressure to PCl5 ⇌ PCl3 + Cl2. Effect?',
      q_hi: 'ट्रैप: स्थिर कुल दाब पर PCl5 ⇌ PCl3 + Cl2 में अक्रिय गैस मिलाने पर प्रभाव?',
      a_en: 'Volume increases, reactant partial pressures fall, so the equilibrium shifts to the side with more gas moles (forward).',
      a_hi: 'आयतन बढ़ता है, आंशिक दाब घटते हैं, अतः साम्य अधिक गैस मोल वाली ओर (अग्र) विस्थापित होता है।',
      formula: '$$P=\\text{const}:\\ \\text{shift to larger}\\ \\Delta n_g$$'
    },
    {
      d: 'H',
      q_en: 'N2O4 ⇌ 2NO2 has α = 0.2 at 1 atm. Find Kp.',
      q_hi: '1 atm पर N2O4 ⇌ 2NO2 में α = 0.2 है। Kp ज्ञात कीजिए।',
      a_en: 'Kp = 4(0.2)²(1)/(1 − 0.04) = 0.16/0.96 ≈ 0.167 atm.',
      a_hi: 'Kp = 4(0.2)²(1)/(1 − 0.04) = 0.16/0.96 ≈ 0.167 atm।',
      formula: '$$K_p=\\frac{4(0.04)(1)}{0.96}\\approx0.167$$'
    }
  ],

  /* ---------- SET 6: Ionic Equilibrium: Electrolytes & Acid-Base Concepts ---------- */
  6: [
    {
      d: 'E',
      q_en: 'Distinguish strong and weak electrolytes.',
      q_hi: 'प्रबल व दुर्बल विद्युत-अपघट्य (electrolytes) में अंतर बताइए।',
      a_en: 'Strong electrolytes ionise almost completely in solution (NaCl, HCl); weak ones ionise partially (CH3COOH, NH4OH).',
      a_hi: 'प्रबल विद्युत-अपघट्य लगभग पूर्णतः आयनित होते हैं (NaCl, HCl); दुर्बल आंशिक (CH3COOH, NH4OH)।',
      formula: '$$\\text{CH}_3\\text{COOH}\\rightleftharpoons\\text{CH}_3\\text{COO}^-+\\text{H}^+$$'
    },
    {
      d: 'E',
      q_en: 'Define Arrhenius acid and base.',
      q_hi: 'आरेनियस अम्ल व क्षार को परिभाषित कीजिए।',
      a_en: 'Acid gives H⁺ ions in water; base gives OH⁻ ions in water.',
      a_hi: 'अम्ल जल में H⁺ देता है; क्षार जल में OH⁻ देता है।',
      formula: '$$\\text{HA}\\rightarrow\\text{H}^++\\text{A}^-,\\quad\\text{MOH}\\rightarrow\\text{M}^++\\text{OH}^-$$'
    },
    {
      d: 'E',
      q_en: 'State two limitations of the Arrhenius concept.',
      q_hi: 'आरेनियस सिद्धांत की दो सीमाएँ बताइए।',
      a_en: 'It works only in aqueous solution and cannot explain basicity of NH3 (no OH⁻ in its formula).',
      a_hi: 'यह केवल जलीय विलयन में लागू है और NH3 की क्षारीयता (सूत्र में OH⁻ नहीं) नहीं समझा पाता।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Define Brønsted–Lowry acid and base.',
      q_hi: 'ब्रॉन्स्टेड–लाउरी अम्ल व क्षार को परिभाषित कीजिए।',
      a_en: 'Acid is a proton (H⁺) donor; base is a proton acceptor.',
      a_hi: 'अम्ल प्रोटॉन (H⁺) दाता है; क्षार प्रोटॉन ग्राही है।',
      formula: '$$\\text{HA}+\\text{B}\\rightleftharpoons\\text{A}^-+\\text{BH}^+$$'
    },
    {
      d: 'E',
      q_en: 'What is a conjugate acid–base pair?',
      q_hi: 'संयुग्मी अम्ल–क्षार युग्म (conjugate pair) क्या है?',
      a_en: 'Two species differing by exactly one H⁺, e.g. NH4⁺/NH3 and H3O⁺/H2O.',
      a_hi: 'दो स्पीशीज़ जिनमें केवल एक H⁺ का अंतर हो, जैसे NH4⁺/NH3 और H3O⁺/H2O।',
      formula: '$$\\text{Acid}\\rightleftharpoons\\text{Conj. base}+\\text{H}^+$$'
    },
    {
      d: 'M',
      q_en: 'Give conjugate bases of H2O, HCO3⁻, HSO4⁻, NH3, H2PO4⁻.',
      q_hi: 'H2O, HCO3⁻, HSO4⁻, NH3, H2PO4⁻ के संयुग्मी क्षारक लिखिए।',
      a_en: 'OH⁻, CO3²⁻, SO4²⁻, NH2⁻ and HPO4²⁻ respectively.',
      a_hi: 'क्रमशः OH⁻, CO3²⁻, SO4²⁻, NH2⁻ तथा HPO4²⁻।',
      formula: '$$\\text{HCO}_3^-\\rightarrow\\text{CO}_3^{2-}+\\text{H}^+$$'
    },
    {
      d: 'M',
      q_en: 'Give conjugate acids of NH3, H2O and OH⁻.',
      q_hi: 'NH3, H2O तथा OH⁻ के संयुग्मी अम्ल लिखिए।',
      a_en: 'NH4⁺, H3O⁺ and H2O respectively (each gains one H⁺).',
      a_hi: 'क्रमशः NH4⁺, H3O⁺ तथा H2O (प्रत्येक एक H⁺ ग्रहण करता है)।',
      formula: '$$\\text{NH}_3+\\text{H}^+\\rightarrow\\text{NH}_4^+$$'
    },
    {
      d: 'M',
      q_en: 'What are amphiprotic species? Give examples.',
      q_hi: 'उभयधर्मी (amphiprotic) स्पीशीज़ क्या हैं? उदाहरण दीजिए।',
      a_en: 'Species that can donate or accept a proton: H2O, HCO3⁻, HS⁻, H2PO4⁻.',
      a_hi: 'वे स्पीशीज़ जो प्रोटॉन दे भी सकती हैं और ले भी: H2O, HCO3⁻, HS⁻, H2PO4⁻।',
      formula: '$$\\text{HCO}_3^-\\ \\begin{cases}\\to\\text{CO}_3^{2-}\\\\\\to\\text{H}_2\\text{CO}_3\\end{cases}$$'
    },
    {
      d: 'M',
      q_en: 'Strong acids have which type of conjugate bases? Example.',
      q_hi: 'प्रबल अम्लों के संयुग्मी क्षारक कैसे होते हैं? उदाहरण दीजिए।',
      a_en: 'Very weak conjugate bases, e.g. HClO4 gives ClO4⁻ which has almost no tendency to accept H⁺.',
      a_hi: 'बहुत दुर्बल संयुग्मी क्षारक, जैसे HClO4 का ClO4⁻ जो H⁺ ग्रहण करने की प्रवृत्ति लगभग नहीं रखता।',
      formula: '$$\\text{HClO}_4\\rightarrow\\text{ClO}_4^-+\\text{H}^+$$'
    },
    {
      d: 'M',
      q_en: 'Define Lewis acid and Lewis base with examples.',
      q_hi: 'लुईस अम्ल व क्षार को उदाहरण सहित परिभाषित कीजिए।',
      a_en: 'Lewis acid accepts an electron pair (BF3, AlCl3, Ag⁺); Lewis base donates one (NH3, H2O, OH⁻, CN⁻).',
      a_hi: 'लुईस अम्ल इलेक्ट्रॉन युग्म ग्रहण करता है (BF3, AlCl3, Ag⁺); लुईस क्षार देता है (NH3, H2O, OH⁻, CN⁻)।',
      formula: '$$\\text{BF}_3+:\\text{NH}_3\\rightarrow\\text{F}_3\\text{B}\\leftarrow\\text{NH}_3$$'
    },
    {
      d: 'H',
      q_en: 'TRAP: Why is boric acid H3BO3 a monobasic Lewis acid, not a proton donor?',
      q_hi: 'ट्रैप: बोरिक अम्ल H3BO3 एकक्षारकी लुईस अम्ल क्यों है, प्रोटॉन दाता क्यों नहीं?',
      a_en: 'B is electron-deficient: it accepts OH⁻ from water forming [B(OH)4]⁻ and releasing one H⁺.',
      a_hi: 'B इलेक्ट्रॉन-न्यून है: यह जल से OH⁻ ग्रहण कर [B(OH)4]⁻ बनाता है व एक H⁺ मुक्त होता है।',
      formula: '$$\\text{B(OH)}_3+\\text{H}_2\\text{O}\\rightleftharpoons[\\text{B(OH)}_4]^-+\\text{H}^+$$'
    },
    {
      d: 'H',
      q_en: 'Classify as Lewis acid or base: BF3, NH3, CN⁻, Cu²⁺, SiF4, SO3.',
      q_hi: 'लुईस अम्ल या क्षार बताइए: BF3, NH3, CN⁻, Cu²⁺, SiF4, SO3।',
      a_en: 'Acids: BF3, Cu²⁺, SiF4, SO3 (electron-deficient or empty orbitals). Bases: NH3, CN⁻ (lone pairs).',
      a_hi: 'अम्ल: BF3, Cu²⁺, SiF4, SO3 (इलेक्ट्रॉन-न्यून/रिक्त कक्षक)। क्षार: NH3, CN⁻ (एकाकी युग्म)।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why is H2O amphiprotic? Show with HCl and NH3.',
      q_hi: 'H2O उभयधर्मी क्यों है? HCl व NH3 के साथ दर्शाइए।',
      a_en: 'With HCl, water accepts H⁺ (base); with NH3, it donates H⁺ (acid).',
      a_hi: 'HCl के साथ जल H⁺ ग्रहण करता है (क्षार); NH3 के साथ H⁺ देता है (अम्ल)।',
      formula: '$$\\text{H}_2\\text{O}+\\text{HCl}\\rightarrow\\text{H}_3\\text{O}^++\\text{Cl}^-$$'
    },
    {
      d: 'H',
      q_en: 'Why is CO2 a Lewis acid even though it has no H?',
      q_hi: 'CO2 में H न होने पर भी वह लुईस अम्ल क्यों है?',
      a_en: 'Carbon is δ⁺ (bonded to two O), so it accepts an electron pair from OH⁻ forming HCO3⁻.',
      a_hi: 'कार्बन δ⁺ है (दो O से बंधित), अतः OH⁻ से इलेक्ट्रॉन युग्म ग्रहण कर HCO3⁻ बनाता है।',
      formula: '$$\\text{CO}_2+\\text{OH}^-\\rightarrow\\text{HCO}_3^-$$'
    },
    {
      d: 'H',
      q_en: 'Arrange conjugate bases of HCl, CH3COOH and HCN in order of basic strength.',
      q_hi: 'HCl, CH3COOH व HCN के संयुग्मी क्षारकों को क्षारीय सामर्थ्य के क्रम में रखिए।',
      a_en: 'Cl⁻ < CH3COO⁻ < CN⁻; the weaker the acid, the stronger its conjugate base.',
      a_hi: 'Cl⁻ < CH3COO⁻ < CN⁻; जितना दुर्बल अम्ल, उतना प्रबल उसका संयुग्मी क्षारक।',
      formula: '$$\\text{Cl}^-<\\text{CH}_3\\text{COO}^-<\\text{CN}^-$$'
    }
  ],

  /* ---------- SET 7: Ionisation of Water (Kw) & the pH Scale ---------- */
  7: [
    {
      d: 'E',
      q_en: 'What is auto-protolysis of water?',
      q_hi: 'जल का स्वतः प्रोटोनीकरण (auto-protolysis) क्या है?',
      a_en: 'One water molecule donates a proton to another, forming H3O⁺ and OH⁻.',
      a_hi: 'एक जल अणु दूसरे को प्रोटॉन देकर H3O⁺ व OH⁻ बनाता है।',
      formula: '$$2\\text{H}_2\\text{O}\\rightleftharpoons\\text{H}_3\\text{O}^++\\text{OH}^-$$'
    },
    {
      d: 'E',
      q_en: 'Write Kw and its value at 298 K.',
      q_hi: 'Kw लिखिए तथा 298 K पर इसका मान बताइए।',
      a_en: 'Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴ M² at 298 K.',
      a_hi: '298 K पर Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴ M²।',
      formula: '$$K_w=[\\text{H}^+][\\text{OH}^-]=10^{-14}$$'
    },
    {
      d: 'E',
      q_en: 'Define pH and pOH.',
      q_hi: 'pH व pOH को परिभाषित कीजिए।',
      a_en: 'pH = −log[H⁺]; pOH = −log[OH⁻].',
      a_hi: 'pH = −log[H⁺]; pOH = −log[OH⁻]।',
      formula: '$$\\text{pH}=-\\log[\\text{H}^+]$$'
    },
    {
      d: 'E',
      q_en: 'What is the relation between pH and pOH at 298 K?',
      q_hi: '298 K पर pH व pOH का संबंध क्या है?',
      a_en: 'pH + pOH = pKw = 14.',
      a_hi: 'pH + pOH = pKw = 14।',
      formula: '$$\\text{pH}+\\text{pOH}=14$$'
    },
    {
      d: 'E',
      q_en: 'State the pH range for acidic, neutral and basic solutions at 298 K.',
      q_hi: '298 K पर अम्लीय, उदासीन व क्षारीय विलयनों की pH सीमा बताइए।',
      a_en: 'Acidic: pH < 7; neutral: pH = 7; basic: pH > 7.',
      a_hi: 'अम्लीय: pH < 7; उदासीन: pH = 7; क्षारीय: pH > 7।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What is the molarity of pure water?',
      q_hi: 'शुद्ध जल की मोलरता कितनी है?',
      a_en: '1000 g/L ÷ 18 g/mol ≈ 55.55 M.',
      a_hi: '1000 g/L ÷ 18 g/mol ≈ 55.55 M।',
      formula: '$$M=\\frac{1000}{18}=55.55\\ \\text{M}$$'
    },
    {
      d: 'M',
      q_en: 'Find the degree of dissociation of pure water at 298 K.',
      q_hi: '298 K पर शुद्ध जल का वियोजन अंश ज्ञात कीजिए।',
      a_en: 'α = 10⁻⁷/55.55 ≈ 1.8 × 10⁻⁹ (very small).',
      a_hi: 'α = 10⁻⁷/55.55 ≈ 1.8 × 10⁻⁹ (बहुत कम)।',
      formula: '$$\\alpha=\\frac{10^{-7}}{55.55}=1.8\\times10^{-9}$$'
    },
    {
      d: 'M',
      q_en: 'Why does Kw increase with temperature?',
      q_hi: 'ताप बढ़ने पर Kw क्यों बढ़ता है?',
      a_en: 'Ionisation of water is endothermic, so heating shifts it forward and raises [H⁺] and [OH⁻].',
      a_hi: 'जल का आयनन ऊष्माशोषी है, अतः गर्म करने पर साम्य अग्र बढ़ता है और [H⁺], [OH⁻] बढ़ते हैं।',
      formula: '$$\\text{H}_2\\text{O}\\rightleftharpoons\\text{H}^++\\text{OH}^-,\\ \\Delta H>0$$'
    },
    {
      d: 'M',
      q_en: 'Find pH and pOH of 10⁻³ M HCl at 298 K.',
      q_hi: '298 K पर 10⁻³ M HCl का pH व pOH ज्ञात कीजिए।',
      a_en: '[H⁺] = 10⁻³, so pH = 3 and pOH = 11.',
      a_hi: '[H⁺] = 10⁻³, अतः pH = 3 और pOH = 11।',
      formula: '$$\\text{pH}=3,\\ \\text{pOH}=14-3=11$$'
    },
    {
      d: 'M',
      q_en: 'Find the pH of 0.01 M NaOH.',
      q_hi: '0.01 M NaOH का pH ज्ञात कीजिए।',
      a_en: '[OH⁻] = 10⁻², pOH = 2, so pH = 12.',
      a_hi: '[OH⁻] = 10⁻², pOH = 2, अतः pH = 12।',
      formula: '$$\\text{pH}=14-2=12$$'
    },
    {
      d: 'H',
      q_en: 'TRAP: Neutral water at 333 K has Kw ≈ 10⁻¹³. Find its pH. Is it acidic?',
      q_hi: 'ट्रैप: 333 K पर उदासीन जल का Kw ≈ 10⁻¹³ है। pH ज्ञात कीजिए। क्या यह अम्लीय है?',
      a_en: '[H⁺] = √10⁻¹³ so pH = 6.5. It is still neutral because [H⁺] = [OH⁻].',
      a_hi: '[H⁺] = √10⁻¹³, अतः pH = 6.5। यह फिर भी उदासीन है क्योंकि [H⁺] = [OH⁻]।',
      formula: '$$\\text{pH}=\\frac{1}{2}\\text{p}K_w=6.5$$'
    },
    {
      d: 'H',
      q_en: 'TRAP: At 333 K (neutral pH 6.5), is a solution of pH 7 acidic or basic?',
      q_hi: 'ट्रैप: 333 K पर (उदासीन pH 6.5) pH 7 वाला विलयन अम्लीय है या क्षारीय?',
      a_en: 'Basic, since pH 7 > 6.5 and [OH⁻] > [H⁺] at that temperature.',
      a_hi: 'क्षारीय, क्योंकि उस ताप पर pH 7 > 6.5 तथा [OH⁻] > [H⁺] है।',
      formula: '$$\\text{neutral}\\ \\text{pH}=\\tfrac{1}{2}\\text{p}K_w\\ (\\neq7\\ \\text{for}\\ T\\neq298)$$'
    },
    {
      d: 'H',
      q_en: 'How does pKw change with rising temperature?',
      q_hi: 'ताप बढ़ने पर pKw कैसे बदलता है?',
      a_en: 'Kw increases, so pKw decreases below 14 (e.g. about 13 at 333 K).',
      a_hi: 'Kw बढ़ता है, अतः pKw 14 से कम हो जाता है (जैसे 333 K पर लगभग 13)।',
      formula: '$$T\\uparrow\\Rightarrow K_w\\uparrow\\Rightarrow\\text{p}K_w\\downarrow$$'
    },
    {
      d: 'H',
      q_en: 'Find [OH⁻] in a solution of pH 4 at 298 K.',
      q_hi: '298 K पर pH 4 वाले विलयन में [OH⁻] ज्ञात कीजिए।',
      a_en: '[H⁺] = 10⁻⁴, so [OH⁻] = 10⁻¹⁴/10⁻⁴ = 10⁻¹⁰ M.',
      a_hi: '[H⁺] = 10⁻⁴, अतः [OH⁻] = 10⁻¹⁴/10⁻⁴ = 10⁻¹⁰ M।',
      formula: '$$[\\text{OH}^-]=\\frac{10^{-14}}{10^{-4}}=10^{-10}\\ \\text{M}$$'
    },
    {
      d: 'H',
      q_en: 'By what factor does [H⁺] differ between pH 3 and pH 5 solutions?',
      q_hi: 'pH 3 व pH 5 वाले विलयनों में [H⁺] कितने गुना भिन्न है?',
      a_en: 'Each pH unit is a 10-fold change, so pH 3 has 100 times more [H⁺] than pH 5.',
      a_hi: 'प्रत्येक pH इकाई 10 गुना परिवर्तन है, अतः pH 3 में [H⁺] pH 5 से 100 गुना अधिक है।',
      formula: '$$\\frac{10^{-3}}{10^{-5}}=100$$'
    }
  ],

  /* ---------- SET 8: Tricky pH Calculations: Strong Acids/Bases, Dilute Acids & Mixtures ---------- */
  8: [
    {
      d: 'E',
      q_en: 'Find the pH of 10⁻² M HCl.',
      q_hi: '10⁻² M HCl का pH ज्ञात कीजिए।',
      a_en: 'HCl is a strong acid, so [H⁺] = 10⁻² M and pH = 2.',
      a_hi: 'HCl प्रबल अम्ल है, अतः [H⁺] = 10⁻² M और pH = 2।',
      formula: '$$\\text{pH}=-\\log10^{-2}=2$$'
    },
    {
      d: 'E',
      q_en: 'Find the pH of 10⁻² M NaOH.',
      q_hi: '10⁻² M NaOH का pH ज्ञात कीजिए।',
      a_en: '[OH⁻] = 10⁻², pOH = 2, so pH = 12.',
      a_hi: '[OH⁻] = 10⁻², pOH = 2, अतः pH = 12।',
      formula: '$$\\text{pH}=14-2=12$$'
    },
    {
      d: 'E',
      q_en: 'Find the pH of 0.005 M H2SO4.',
      q_hi: '0.005 M H2SO4 का pH ज्ञात कीजिए।',
      a_en: 'Each H2SO4 gives 2 H⁺, so [H⁺] = 0.01 M and pH = 2.',
      a_hi: 'प्रत्येक H2SO4 2 H⁺ देता है, अतः [H⁺] = 0.01 M और pH = 2।',
      formula: '$$[\\text{H}^+]=2\\times0.005=10^{-2}$$'
    },
    {
      d: 'E',
      q_en: 'Find the pH of 0.1 M HNO3.',
      q_hi: '0.1 M HNO3 का pH ज्ञात कीजिए।',
      a_en: 'HNO3 is strong: [H⁺] = 0.1 M, so pH = 1.',
      a_hi: 'HNO3 प्रबल है: [H⁺] = 0.1 M, अतः pH = 1।',
      formula: '$$\\text{pH}=-\\log0.1=1$$'
    },
    {
      d: 'E',
      q_en: 'What happens to the pH of a strong acid on 10-fold dilution?',
      q_hi: 'प्रबल अम्ल को 10 गुना तनु करने पर pH कैसे बदलता है?',
      a_en: '[H⁺] falls 10 times, so pH increases by 1 unit (e.g. 2 → 3).',
      a_hi: '[H⁺] 10 गुना घटता है, अतः pH 1 इकाई बढ़ता है (जैसे 2 → 3)।',
      formula: '$$\\text{pH}_{\\text{new}}=\\text{pH}_{\\text{old}}+1$$'
    },
    {
      d: 'M',
      q_en: 'Equal volumes of pH 2 and pH 4 HCl are mixed. Find the pH.',
      q_hi: 'pH 2 व pH 4 वाले HCl के समान आयतन मिलाए गए। pH ज्ञात कीजिए।',
      a_en: '[H⁺] = (10⁻² + 10⁻⁴)/2 ≈ 5.05 × 10⁻³, so pH ≈ 2.30.',
      a_hi: '[H⁺] = (10⁻² + 10⁻⁴)/2 ≈ 5.05 × 10⁻³, अतः pH ≈ 2.30।',
      formula: '$$[\\text{H}^+]=\\frac{10^{-2}+10^{-4}}{2}$$'
    },
    {
      d: 'M',
      q_en: 'Mix 100 mL of 0.1 M HCl with 100 mL of 0.1 M NaOH. Find the pH.',
      q_hi: '100 mL 0.1 M HCl को 100 mL 0.1 M NaOH में मिलाने पर pH ज्ञात कीजिए।',
      a_en: 'Complete neutralisation gives NaCl solution, so pH = 7 at 298 K.',
      a_hi: 'पूर्ण उदासीनीकरण से NaCl विलयन बनता है, अतः 298 K पर pH = 7।',
      formula: '$$\\text{HCl}+\\text{NaOH}\\rightarrow\\text{NaCl}+\\text{H}_2\\text{O}$$'
    },
    {
      d: 'M',
      q_en: '50 mL 0.1 M HCl + 50 mL 0.05 M NaOH. Find the pH.',
      q_hi: '50 mL 0.1 M HCl + 50 mL 0.05 M NaOH। pH ज्ञात कीजिए।',
      a_en: 'Excess H⁺ = 5 − 2.5 = 2.5 mmol in 100 mL = 0.025 M, so pH ≈ 1.60.',
      a_hi: 'अतिरिक्त H⁺ = 5 − 2.5 = 2.5 mmol, 100 mL में = 0.025 M, अतः pH ≈ 1.60।',
      formula: '$$[\\text{H}^+]=\\frac{2.5}{100}=0.025\\ \\text{M}$$'
    },
    {
      d: 'M',
      q_en: 'Find the pH of 0.001 M Ba(OH)2.',
      q_hi: '0.001 M Ba(OH)2 का pH ज्ञात कीजिए।',
      a_en: '[OH⁻] = 2 × 10⁻³, pOH = 2.70, so pH ≈ 11.30.',
      a_hi: '[OH⁻] = 2 × 10⁻³, pOH = 2.70, अतः pH ≈ 11.30।',
      formula: '$$\\text{pOH}=-\\log(2\\times10^{-3})=2.70$$'
    },
    {
      d: 'M',
      q_en: 'Equal volumes of pH 12 and pH 10 NaOH are mixed. Find the pH.',
      q_hi: 'pH 12 व pH 10 वाले NaOH के समान आयतन मिलाए गए। pH ज्ञात कीजिए।',
      a_en: '[OH⁻] = (10⁻² + 10⁻⁴)/2 ≈ 5.05 × 10⁻³, pOH ≈ 2.30, so pH ≈ 11.70.',
      a_hi: '[OH⁻] = (10⁻² + 10⁻⁴)/2 ≈ 5.05 × 10⁻³, pOH ≈ 2.30, अतः pH ≈ 11.70।',
      formula: '$$\\text{pH}=14-2.30=11.70$$'
    },
    {
      d: 'H',
      q_en: 'TRAP: What is the pH of 10⁻⁸ M HCl? Why not 8?',
      q_hi: 'ट्रैप: 10⁻⁸ M HCl का pH क्या है? 8 क्यों नहीं?',
      a_en: 'An acid cannot give pH > 7. Add water\'s H⁺: 10⁻⁷ + 10⁻⁸ = 1.1 × 10⁻⁷ M gives pH ≈ 6.96 (exact ≈ 6.98).',
      a_hi: 'अम्ल का pH > 7 नहीं हो सकता। जल का H⁺ जोड़ें: 10⁻⁷ + 10⁻⁸ = 1.1 × 10⁻⁷ M, pH ≈ 6.96 (सटीक ≈ 6.98)।',
      formula: '$$[\\text{H}^+]=10^{-7}+10^{-8}=1.1\\times10^{-7}$$'
    },
    {
      d: 'H',
      q_en: 'TRAP: What is the pH of 10⁻⁸ M NaOH?',
      q_hi: 'ट्रैप: 10⁻⁸ M NaOH का pH क्या है?',
      a_en: 'Include water\'s OH⁻: 1.1 × 10⁻⁷ M gives pOH ≈ 6.96, so pH ≈ 7.04 (exact ≈ 7.02), slightly basic.',
      a_hi: 'जल का OH⁻ जोड़ें: 1.1 × 10⁻⁷ M से pOH ≈ 6.96, अतः pH ≈ 7.04 (सटीक ≈ 7.02), हल्का क्षारीय।',
      formula: '$$[\\text{OH}^-]=10^{-7}+10^{-8}\\Rightarrow\\text{pH}\\approx7.04$$'
    },
    {
      d: 'H',
      q_en: 'Find the pH of 10⁻⁶ M HCl. Does water\'s H⁺ matter?',
      q_hi: '10⁻⁶ M HCl का pH ज्ञात कीजिए। क्या जल के H⁺ का प्रभाव पड़ता है?',
      a_en: 'Exact solution gives [H⁺] ≈ 1.01 × 10⁻⁶ M, pH ≈ 5.996 ≈ 6; water\'s contribution is negligible here.',
      a_hi: 'सटीक हल से [H⁺] ≈ 1.01 × 10⁻⁶ M, pH ≈ 5.996 ≈ 6; यहाँ जल का योगदान नगण्य है।',
      formula: '$$[\\text{H}^+]=10^{-6}+\\frac{K_w}{[\\text{H}^+]}\\Rightarrow\\text{pH}\\approx6$$'
    },
    {
      d: 'H',
      q_en: 'Can infinite dilution turn an acid solution basic?',
      q_hi: 'क्या असीमित तनुकरण से अम्लीय विलयन क्षारीय हो सकता है?',
      a_en: 'No. On very high dilution pH approaches 7 from below (≈ 7 for 10⁻¹⁰ M HCl) but never exceeds it.',
      a_hi: 'नहीं। अत्यधिक तनुकरण पर pH नीचे से 7 के निकट पहुँचता है (10⁻¹⁰ M HCl के लिए ≈ 7) पर 7 से अधिक नहीं होता।',
      formula: '$$\\text{pH}\\to7^-\\ \\text{for dilute acid}$$'
    },
    {
      d: 'H',
      q_en: 'Equal volumes of 0.1 M HCl and 0.1 M H2SO4 are mixed. Find the pH.',
      q_hi: '0.1 M HCl व 0.1 M H2SO4 के समान आयतन मिलाए गए। pH ज्ञात कीजिए।',
      a_en: '[H⁺] = (0.1 + 0.2)/2 = 0.15 M, so pH = −log 0.15 ≈ 0.82.',
      a_hi: '[H⁺] = (0.1 + 0.2)/2 = 0.15 M, अतः pH = −log 0.15 ≈ 0.82।',
      formula: '$$[\\text{H}^+]=\\frac{0.1+0.2}{2}=0.15$$'
    }
  ],

  /* ---------- SET 9: Weak Acids/Bases, Ostwald's Dilution Law & Polyprotic Acids ---------- */
  9: [
    {
      d: 'E',
      q_en: 'State Ostwald\'s dilution law for a weak acid.',
      q_hi: 'दुर्बल अम्ल के लिए ओस्टवाल्ड का तनुता नियम लिखिए।',
      a_en: 'For concentration c and degree of ionisation α: Ka = cα²/(1 − α).',
      a_hi: 'सांद्रता c व आयनन अंश α के लिए: Ka = cα²/(1 − α)।',
      formula: '$$K_a=\\frac{c\\alpha^2}{1-\\alpha}$$'
    },
    {
      d: 'E',
      q_en: 'Give α in terms of Ka and c when α is very small.',
      q_hi: 'α बहुत कम हो तो α को Ka व c के पदों में लिखिए।',
      a_en: '1 − α ≈ 1, so Ka ≈ cα² and α = √(Ka/c).',
      a_hi: '1 − α ≈ 1, अतः Ka ≈ cα² और α = √(Ka/c)।',
      formula: '$$\\alpha=\\sqrt{K_a/c}$$'
    },
    {
      d: 'E',
      q_en: 'Write [H⁺] of a weak monobasic acid in terms of Ka and c.',
      q_hi: 'दुर्बल एकक्षारकी अम्ल का [H⁺] Ka व c के पदों में लिखिए।',
      a_en: '[H⁺] = cα = √(Ka·c).',
      a_hi: '[H⁺] = cα = √(Ka·c)।',
      formula: '$$[\\text{H}^+]=c\\alpha=\\sqrt{K_ac}$$'
    },
    {
      d: 'E',
      q_en: 'Define pKa. Which acid is stronger: lower or higher pKa?',
      q_hi: 'pKa परिभाषित कीजिए। कम pKa वाला अम्ल प्रबल होता है या अधिक वाला?',
      a_en: 'pKa = −log Ka. A smaller pKa means larger Ka, so a stronger acid.',
      a_hi: 'pKa = −log Ka। कम pKa का अर्थ अधिक Ka, अतः प्रबल अम्ल।',
      formula: '$$\\text{p}K_a=-\\log K_a$$'
    },
    {
      d: 'E',
      q_en: 'How are Ka and Kb of a conjugate pair related?',
      q_hi: 'संयुग्मी युग्म के Ka व Kb में क्या संबंध है?',
      a_en: 'Ka × Kb = Kw, so pKa + pKb = 14 at 298 K.',
      a_hi: 'Ka × Kb = Kw, अतः 298 K पर pKa + pKb = 14।',
      formula: '$$K_a\\times K_b=K_w$$'
    },
    {
      d: 'M',
      q_en: 'Find the pH of 0.1 M CH3COOH (Ka = 1.8 × 10⁻⁵).',
      q_hi: '0.1 M CH3COOH का pH ज्ञात कीजिए (Ka = 1.8 × 10⁻⁵)।',
      a_en: '[H⁺] = √(1.8×10⁻⁶) ≈ 1.34 × 10⁻³ M, so pH ≈ 2.87.',
      a_hi: '[H⁺] = √(1.8×10⁻⁶) ≈ 1.34 × 10⁻³ M, अतः pH ≈ 2.87।',
      formula: '$$\\text{pH}=\\tfrac{1}{2}(\\text{p}K_a-\\log c)=2.87$$'
    },
    {
      d: 'M',
      q_en: 'On dilution of a weak acid, what happens to α and [H⁺]?',
      q_hi: 'दुर्बल अम्ल को तनु करने पर α व [H⁺] का क्या होता है?',
      a_en: 'α increases (α ∝ 1/√c) but [H⁺] decreases.',
      a_hi: 'α बढ़ता है (α ∝ 1/√c) परंतु [H⁺] घटता है।',
      formula: '$$c\\downarrow\\Rightarrow\\alpha\\uparrow,\\ [\\text{H}^+]\\downarrow$$'
    },
    {
      d: 'M',
      q_en: 'Why is Ka1 ≫ Ka2 ≫ Ka3 for polyprotic acids?',
      q_hi: 'बहुक्षारकी अम्लों में Ka1 ≫ Ka2 ≫ Ka3 क्यों होता है?',
      a_en: 'Removing H⁺ from an already negatively charged ion is harder due to stronger electrostatic attraction.',
      a_hi: 'पहले से ऋणावेशित आयन से H⁺ हटाना अधिक कठिन है क्योंकि स्थिरवैद्युत आकर्षण अधिक होता है।',
      formula: '$$\\text{H}_3\\text{PO}_4>\\text{H}_2\\text{PO}_4^->\\text{HPO}_4^{2-}$$'
    },
    {
      d: 'M',
      q_en: 'From which step does most [H⁺] of H3PO4 or H2S come?',
      q_hi: 'H3PO4 या H2S का अधिकांश [H⁺] किस चरण से आता है?',
      a_en: 'From the first ionisation step, because Ka1 is far larger than Ka2 and Ka3.',
      a_hi: 'प्रथम आयनन चरण से, क्योंकि Ka1, Ka2 व Ka3 से बहुत अधिक है।',
      formula: '$$[\\text{H}^+]\\approx\\sqrt{K_{a1}c}$$'
    },
    {
      d: 'M',
      q_en: 'Find Kb of CH3COO⁻ if Ka of CH3COOH is 1.8 × 10⁻⁵.',
      q_hi: 'यदि CH3COOH का Ka 1.8 × 10⁻⁵ है तो CH3COO⁻ का Kb ज्ञात कीजिए।',
      a_en: 'Kb = Kw/Ka = 10⁻¹⁴/1.8×10⁻⁵ ≈ 5.6 × 10⁻¹⁰.',
      a_hi: 'Kb = Kw/Ka = 10⁻¹⁴/1.8×10⁻⁵ ≈ 5.6 × 10⁻¹⁰।',
      formula: '$$K_b=\\frac{10^{-14}}{1.8\\times10^{-5}}=5.6\\times10^{-10}$$'
    },
    {
      d: 'H',
      q_en: 'Explain acid strength trend across a period: CH4 < NH3 < H2O < HF.',
      q_hi: 'आवर्त में अम्ल सामर्थ्य क्रम समझाइए: CH4 < NH3 < H2O < HF।',
      a_en: 'Electronegativity rises across a period, stabilising the conjugate base (F⁻ > OH⁻ > NH2⁻), so acidity increases.',
      a_hi: 'आवर्त में विद्युत-ऋणात्मकता बढ़ती है, संयुग्मी क्षारक (F⁻ > OH⁻ > NH2⁻) स्थिर होता है, अतः अम्लीयता बढ़ती है।',
      formula: '$$\\text{CH}_4<\\text{NH}_3<\\text{H}_2\\text{O}<\\text{HF}$$'
    },
    {
      d: 'H',
      q_en: 'Explain acid strength down a group: HF < HCl < HBr < HI.',
      q_hi: 'समूह में नीचे अम्ल सामर्थ्य क्रम समझाइए: HF < HCl < HBr < HI।',
      a_en: 'H–X bond strength decreases down the group (bigger X), so H⁺ is released more easily.',
      a_hi: 'समूह में नीचे H–X बंध सामर्थ्य घटता है (X बड़ा), अतः H⁺ आसानी से निकलता है।',
      formula: '$$\\text{HF}<\\text{HCl}<\\text{HBr}<\\text{HI}$$'
    },
    {
      d: 'H',
      q_en: 'TRAP: When is α = √(Ka/c) invalid, and what to do?',
      q_hi: 'ट्रैप: α = √(Ka/c) कब अमान्य है, तब क्या करें?',
      a_en: 'When α > ~0.05 (dilute or fairly strong acid); solve the full quadratic Ka = cα²/(1 − α).',
      a_hi: 'जब α > ~0.05 हो (तनु या अपेक्षाकृत प्रबल अम्ल); पूर्ण द्विघात Ka = cα²/(1 − α) हल करें।',
      formula: '$$c\\alpha^2+K_a\\alpha-K_a=0$$'
    },
    {
      d: 'H',
      q_en: 'Find pH of a 0.1 M weak acid with pKa = 4.74.',
      q_hi: 'pKa = 4.74 वाले 0.1 M दुर्बल अम्ल का pH ज्ञात कीजिए।',
      a_en: 'pH = ½(pKa − log c) = ½(4.74 + 1) = 2.87.',
      a_hi: 'pH = ½(pKa − log c) = ½(4.74 + 1) = 2.87।',
      formula: '$$\\text{pH}=\\tfrac{1}{2}(4.74+1)=2.87$$'
    },
    {
      d: 'H',
      q_en: 'Which is a stronger acid: HCOOH (Ka = 1.8×10⁻⁴) or CH3COOH (1.8×10⁻⁵)? Compare α at equal c.',
      q_hi: 'HCOOH (Ka = 1.8×10⁻⁴) या CH3COOH (1.8×10⁻⁵) में कौन प्रबल है? समान c पर α की तुलना कीजिए।',
      a_en: 'HCOOH is stronger; at equal c, α ratio = √(Ka1/Ka2) = √10 ≈ 3.16 times larger.',
      a_hi: 'HCOOH प्रबल है; समान c पर α का अनुपात = √(Ka1/Ka2) = √10 ≈ 3.16 गुना अधिक।',
      formula: '$$\\frac{\\alpha_1}{\\alpha_2}=\\sqrt{\\frac{K_{a1}}{K_{a2}}}$$'
    }
  ],

  /* ---------- SET 10: Common Ion Effect in Weak Electrolytes ---------- */
  10: [
    {
      d: 'E',
      q_en: 'Define the common ion effect.',
      q_hi: 'सम-आयन प्रभाव (common ion effect) परिभाषित कीजिए।',
      a_en: 'Suppression of ionisation of a weak electrolyte by adding a strong electrolyte that has an ion in common.',
      a_hi: 'दुर्बल विद्युत-अपघट्य में उभयनिष्ठ आयन वाला प्रबल विद्युत-अपघट्य मिलाने पर उसके आयनन का घट जाना।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What happens when CH3COONa is added to CH3COOH?',
      q_hi: 'CH3COOH में CH3COONa मिलाने पर क्या होता है?',
      a_en: 'CH3COO⁻ increases, equilibrium shifts left, so ionisation of acid and [H⁺] decrease.',
      a_hi: 'CH3COO⁻ बढ़ता है, साम्य बाईं ओर खिसकता है, अतः अम्ल का आयनन व [H⁺] घटते हैं।',
      formula: '$$\\text{CH}_3\\text{COOH}\\rightleftharpoons\\text{CH}_3\\text{COO}^-+\\text{H}^+$$'
    },
    {
      d: 'E',
      q_en: 'What happens when NH4Cl is added to NH4OH?',
      q_hi: 'NH4OH में NH4Cl मिलाने पर क्या होता है?',
      a_en: 'NH4⁺ increases, so ionisation of NH4OH is suppressed and [OH⁻] decreases.',
      a_hi: 'NH4⁺ बढ़ता है, अतः NH4OH का आयनन घटता है और [OH⁻] कम हो जाता है।',
      formula: '$$\\text{NH}_4\\text{OH}\\rightleftharpoons\\text{NH}_4^++\\text{OH}^-$$'
    },
    {
      d: 'E',
      q_en: 'Why does NaCl salt out soap from solution?',
      q_hi: 'NaCl साबुन को विलयन से क्यों पृथक करता है (salting out)?',
      a_en: 'Common Na⁺ shifts RCOONa ⇌ RCOO⁻ + Na⁺ backward, so soap precipitates.',
      a_hi: 'उभयनिष्ठ Na⁺ से RCOONa ⇌ RCOO⁻ + Na⁺ पश्च दिशा में जाता है, साबुन अवक्षेपित होता है।',
      formula: '$$\\text{RCOONa}\\rightleftharpoons\\text{RCOO}^-+\\text{Na}^+$$'
    },
    {
      d: 'E',
      q_en: 'Does the common ion effect change the value of Ka?',
      q_hi: 'क्या सम-आयन प्रभाव से Ka का मान बदलता है?',
      a_en: 'No. Ka depends only on temperature; α and concentrations adjust instead.',
      a_hi: 'नहीं। Ka केवल ताप पर निर्भर है; α व सांद्रताएँ बदलती हैं।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Give [H⁺] of an acetic acid–sodium acetate mixture.',
      q_hi: 'ऐसीटिक अम्ल–सोडियम ऐसीटेट मिश्रण का [H⁺] लिखिए।',
      a_en: '[H⁺] = Ka × [acid]/[salt], taking acid and salt concentrations as initial values.',
      a_hi: '[H⁺] = Ka × [अम्ल]/[लवण], जहाँ अम्ल व लवण की प्रारंभिक सांद्रताएँ ली जाती हैं।',
      formula: '$$[\\text{H}^+]=K_a\\frac{[\\text{acid}]}{[\\text{salt}]}$$'
    },
    {
      d: 'M',
      q_en: 'Why is H2S passed with dilute HCl for Group II cations?',
      q_hi: 'समूह II के धनायनों के लिए H2S के साथ तनु HCl क्यों प्रयुक्त होता है?',
      a_en: 'H⁺ suppresses ionisation of H2S, so [S²⁻] is low; only very low Ksp sulphides precipitate.',
      a_hi: 'H⁺ H2S का आयनन घटाता है, [S²⁻] कम रहता है; केवल अति न्यून Ksp वाले सल्फाइड अवक्षेपित होते हैं।',
      formula: '$$\\text{H}_2\\text{S}\\rightleftharpoons2\\text{H}^++\\text{S}^{2-}$$'
    },
    {
      d: 'M',
      q_en: 'Why does NH4OH medium precipitate Group IV sulphides with H2S?',
      q_hi: 'NH4OH माध्यम में H2S से समूह IV सल्फाइड क्यों अवक्षेपित होते हैं?',
      a_en: 'OH⁻ removes H⁺ from H2S, shifting ionisation forward and raising [S²⁻] above their higher Ksp.',
      a_hi: 'OH⁻ H2S से H⁺ हटाता है, आयनन अग्र बढ़ता है और [S²⁻] उनके उच्च Ksp से अधिक हो जाता है।',
      formula: '$$\\text{H}^++\\text{OH}^-\\rightarrow\\text{H}_2\\text{O}$$'
    },
    {
      d: 'M',
      q_en: 'Why does adding HCl lower the ionisation of acetic acid?',
      q_hi: 'HCl मिलाने पर ऐसीटिक अम्ल का आयनन क्यों घटता है?',
      a_en: 'HCl supplies H⁺, a common ion, so the equilibrium shifts toward undissociated CH3COOH.',
      a_hi: 'HCl उभयनिष्ठ H⁺ देता है, अतः साम्य अवियोजित CH3COOH की ओर खिसकता है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Find [H⁺] of 0.1 M CH3COOH + 0.1 M CH3COONa (Ka = 1.8 × 10⁻⁵).',
      q_hi: '0.1 M CH3COOH + 0.1 M CH3COONa का [H⁺] ज्ञात कीजिए (Ka = 1.8 × 10⁻⁵)।',
      a_en: '[H⁺] = 1.8×10⁻⁵ × (0.1/0.1) = 1.8 × 10⁻⁵ M, pH ≈ 4.74.',
      a_hi: '[H⁺] = 1.8×10⁻⁵ × (0.1/0.1) = 1.8 × 10⁻⁵ M, pH ≈ 4.74।',
      formula: '$$[\\text{H}^+]=K_a\\times\\frac{0.1}{0.1}=K_a$$'
    },
    {
      d: 'H',
      q_en: 'Does NaCl suppress ionisation of CH3COOH?',
      q_hi: 'क्या NaCl CH3COOH के आयनन को घटाता है?',
      a_en: 'No. NaCl has no ion in common with acetic acid, so there is no common ion effect.',
      a_hi: 'नहीं। NaCl का ऐसीटिक अम्ल के साथ कोई उभयनिष्ठ आयन नहीं, अतः सम-आयन प्रभाव नहीं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why is HCl gas passed through saturated NaCl solution?',
      q_hi: 'संतृप्त NaCl विलयन में HCl गैस क्यों प्रवाहित की जाती है?',
      a_en: 'Added Cl⁻ is a common ion; it lowers NaCl solubility so pure NaCl crystallises out.',
      a_hi: 'मिलाया गया Cl⁻ उभयनिष्ठ आयन है; यह NaCl की विलेयता घटाता है और शुद्ध NaCl क्रिस्टलित होता है।',
      formula: '$$\\text{NaCl(s)}\\rightleftharpoons\\text{Na}^++\\text{Cl}^-$$'
    },
    {
      d: 'H',
      q_en: 'Find pH of 0.1 M NH4OH + 0.1 M NH4Cl (Kb = 1.8 × 10⁻⁵).',
      q_hi: '0.1 M NH4OH + 0.1 M NH4Cl का pH ज्ञात कीजिए (Kb = 1.8 × 10⁻⁵)।',
      a_en: '[OH⁻] = Kb × (base/salt) = 1.8×10⁻⁵; pOH = 4.74, so pH = 9.26.',
      a_hi: '[OH⁻] = Kb × (क्षार/लवण) = 1.8×10⁻⁵; pOH = 4.74, अतः pH = 9.26।',
      formula: '$$[\\text{OH}^-]=K_b\\frac{[\\text{base}]}{[\\text{salt}]}$$'
    },
    {
      d: 'H',
      q_en: 'By how much is α of 0.1 M CH3COOH reduced by 0.1 M CH3COONa?',
      q_hi: '0.1 M CH3COONa मिलाने से 0.1 M CH3COOH का α कितना घटता है?',
      a_en: 'From ≈ 1.34% to α = 1.8×10⁻⁵/0.1 = 1.8×10⁻⁴ (0.018%), about 75-fold lower.',
      a_hi: 'लगभग 1.34% से घटकर α = 1.8×10⁻⁵/0.1 = 1.8×10⁻⁴ (0.018%), यानी लगभग 75 गुना कम।',
      formula: '$$\\alpha=\\frac{[\\text{H}^+]}{c}=\\frac{1.8\\times10^{-5}}{0.1}$$'
    },
    {
      d: 'H',
      q_en: 'Why is NH4Cl added before NH4OH in Group III analysis?',
      q_hi: 'समूह III विश्लेषण में NH4OH से पहले NH4Cl क्यों मिलाया जाता है?',
      a_en: 'NH4⁺ suppresses OH⁻ ionisation, so only low-Ksp hydroxides (Fe, Al, Cr) precipitate; Mg(OH)2 does not.',
      a_hi: 'NH4⁺ OH⁻ का आयनन घटाता है, अतः केवल कम Ksp वाले हाइड्रॉक्साइड (Fe, Al, Cr) अवक्षेपित होते हैं; Mg(OH)2 नहीं।',
      formula: '$$\\text{NH}_4\\text{Cl}\\rightarrow\\text{NH}_4^++\\text{Cl}^-$$'
    }
  ],

  /* ---------- SET 11: Hydrolysis of Salts: Types, Kh, h & pH Formulas ---------- */
  11: [
    {
      d: 'E',
      q_en: 'What is salt hydrolysis?',
      q_hi: 'लवण जल-अपघटन (salt hydrolysis) क्या है?',
      a_en: 'Reaction of cations or anions of a salt with water that changes the pH of the solution.',
      a_hi: 'लवण के धनायन या ऋणायन की जल से अभिक्रिया जो विलयन का pH बदल देती है।',
      formula: '$$\\text{A}^-+\\text{H}_2\\text{O}\\rightleftharpoons\\text{HA}+\\text{OH}^-$$'
    },
    {
      d: 'E',
      q_en: 'Why do NaCl, KNO3 and Na2SO4 solutions have pH = 7?',
      q_hi: 'NaCl, KNO3 व Na2SO4 के विलयनों का pH = 7 क्यों होता है?',
      a_en: 'They are salts of strong acid + strong base; neither ion hydrolyses.',
      a_hi: 'ये प्रबल अम्ल + प्रबल क्षार के लवण हैं; कोई आयन जल-अपघटित नहीं होता।',
      formula: '$$\\text{pH}=7$$'
    },
    {
      d: 'E',
      q_en: 'Why is aqueous CH3COONa basic?',
      q_hi: 'जलीय CH3COONa क्षारीय क्यों है?',
      a_en: 'Anion hydrolysis: CH3COO⁻ (conjugate base of weak acid) takes H⁺ from water and releases OH⁻.',
      a_hi: 'ऋणायनी जल-अपघटन: CH3COO⁻ (दुर्बल अम्ल का संयुग्मी क्षारक) जल से H⁺ लेकर OH⁻ मुक्त करता है।',
      formula: '$$\\text{CH}_3\\text{COO}^-+\\text{H}_2\\text{O}\\rightleftharpoons\\text{CH}_3\\text{COOH}+\\text{OH}^-$$'
    },
    {
      d: 'E',
      q_en: 'Why is aqueous NH4Cl acidic?',
      q_hi: 'जलीय NH4Cl अम्लीय क्यों है?',
      a_en: 'Cation hydrolysis: NH4⁺ gives H⁺ to water, forming NH3 and H3O⁺.',
      a_hi: 'धनायनी जल-अपघटन: NH4⁺ जल को H⁺ देकर NH3 व H3O⁺ बनाता है।',
      formula: '$$\\text{NH}_4^++\\text{H}_2\\text{O}\\rightleftharpoons\\text{NH}_3+\\text{H}_3\\text{O}^+$$'
    },
    {
      d: 'E',
      q_en: 'Why is aqueous Na2CO3 alkaline while CuSO4 is acidic?',
      q_hi: 'जलीय Na2CO3 क्षारीय व CuSO4 अम्लीय क्यों है?',
      a_en: 'Na2CO3 = SB + WA (CO3²⁻ hydrolyses); CuSO4 = SA + WB (Cu²⁺ hydrolyses).',
      a_hi: 'Na2CO3 = प्रबल क्षार + दुर्बल अम्ल (CO3²⁻ जल-अपघटित); CuSO4 = प्रबल अम्ल + दुर्बल क्षार (Cu²⁺ जल-अपघटित)।',
      formula: '$$\\text{CO}_3^{2-}+\\text{H}_2\\text{O}\\rightleftharpoons\\text{HCO}_3^-+\\text{OH}^-$$'
    },
    {
      d: 'M',
      q_en: 'Give Kh and h for a salt of weak acid + strong base.',
      q_hi: 'दुर्बल अम्ल + प्रबल क्षार के लवण के लिए Kh व h लिखिए।',
      a_en: 'Kh = Kw/Ka and h = √(Kw/(Ka·c)).',
      a_hi: 'Kh = Kw/Ka तथा h = √(Kw/(Ka·c))।',
      formula: '$$K_h=\\frac{K_w}{K_a},\\quad h=\\sqrt{\\frac{K_w}{K_ac}}$$'
    },
    {
      d: 'M',
      q_en: 'Give pH of a salt of weak acid + strong base.',
      q_hi: 'दुर्बल अम्ल + प्रबल क्षार के लवण का pH सूत्र लिखिए।',
      a_en: 'pH = 7 + ½(pKa + log c), always greater than 7.',
      a_hi: 'pH = 7 + ½(pKa + log c), सदैव 7 से अधिक।',
      formula: '$$\\text{pH}=7+\\tfrac{1}{2}(\\text{p}K_a+\\log c)$$'
    },
    {
      d: 'M',
      q_en: 'Give pH of a salt of strong acid + weak base.',
      q_hi: 'प्रबल अम्ल + दुर्बल क्षार के लवण का pH सूत्र लिखिए।',
      a_en: 'pH = 7 − ½(pKb + log c), always less than 7; Kh = Kw/Kb.',
      a_hi: 'pH = 7 − ½(pKb + log c), सदैव 7 से कम; Kh = Kw/Kb।',
      formula: '$$\\text{pH}=7-\\tfrac{1}{2}(\\text{p}K_b+\\log c)$$'
    },
    {
      d: 'M',
      q_en: 'Find pH of 0.1 M CH3COONa (pKa = 4.74).',
      q_hi: '0.1 M CH3COONa का pH ज्ञात कीजिए (pKa = 4.74)।',
      a_en: 'pH = 7 + ½(4.74 − 1) = 8.87.',
      a_hi: 'pH = 7 + ½(4.74 − 1) = 8.87।',
      formula: '$$\\text{pH}=7+\\tfrac{1}{2}(4.74-1)=8.87$$'
    },
    {
      d: 'M',
      q_en: 'Give Kh, h and pH for a salt of weak acid + weak base.',
      q_hi: 'दुर्बल अम्ल + दुर्बल क्षार के लवण के लिए Kh, h व pH लिखिए।',
      a_en: 'Kh = Kw/(Ka·Kb); h = √Kh; pH = 7 + ½(pKa − pKb).',
      a_hi: 'Kh = Kw/(Ka·Kb); h = √Kh; pH = 7 + ½(pKa − pKb)।',
      formula: '$$\\text{pH}=7+\\tfrac{1}{2}(\\text{p}K_a-\\text{p}K_b)$$'
    },
    {
      d: 'H',
      q_en: 'TRAP: How do h and pH of CH3COONH4 depend on concentration?',
      q_hi: 'ट्रैप: CH3COONH4 का h व pH सांद्रता पर कैसे निर्भर हैं?',
      a_en: 'Both are independent of c. With Ka ≈ Kb, pH ≈ 7, yet the salt still hydrolyses.',
      a_hi: 'दोनों c से स्वतंत्र हैं। Ka ≈ Kb होने पर pH ≈ 7, पर लवण फिर भी जल-अपघटित होता है।',
      formula: '$$h=\\sqrt{\\frac{K_w}{K_aK_b}}$$'
    },
    {
      d: 'H',
      q_en: 'How does dilution affect h for a weak acid + strong base salt?',
      q_hi: 'दुर्बल अम्ल + प्रबल क्षार के लवण में तनुकरण से h पर क्या प्रभाव पड़ता है?',
      a_en: 'h increases (h ∝ 1/√c), but [OH⁻] falls, so pH moves closer to 7.',
      a_hi: 'h बढ़ता है (h ∝ 1/√c), पर [OH⁻] घटता है, अतः pH 7 के निकट आता है।',
      formula: '$$h\\propto\\frac{1}{\\sqrt{c}}$$'
    },
    {
      d: 'H',
      q_en: 'Is NH4CN acidic or basic? (pKa of HCN = 9.2, pKb of NH3 = 4.74)',
      q_hi: 'क्या NH4CN अम्लीय है या क्षारीय? (HCN का pKa = 9.2, NH3 का pKb = 4.74)',
      a_en: 'pH = 7 + ½(9.2 − 4.74) ≈ 9.23: basic, since HCN is weaker than NH3 is a base.',
      a_hi: 'pH = 7 + ½(9.2 − 4.74) ≈ 9.23: क्षारीय, क्योंकि HCN की अम्लता NH3 की क्षारकता से कम है।',
      formula: '$$\\text{pH}=7+\\tfrac{1}{2}(9.2-4.74)\\approx9.23$$'
    },
    {
      d: 'H',
      q_en: 'Find Kh of NH4Cl if Kb of NH3 = 1.8 × 10⁻⁵.',
      q_hi: 'यदि NH3 का Kb = 1.8 × 10⁻⁵ है तो NH4Cl का Kh ज्ञात कीजिए।',
      a_en: 'Kh = Kw/Kb = 10⁻¹⁴/1.8×10⁻⁵ ≈ 5.6 × 10⁻¹⁰.',
      a_hi: 'Kh = Kw/Kb = 10⁻¹⁴/1.8×10⁻⁵ ≈ 5.6 × 10⁻¹⁰।',
      formula: '$$K_h=\\frac{10^{-14}}{1.8\\times10^{-5}}=5.6\\times10^{-10}$$'
    },
    {
      d: 'H',
      q_en: 'Why does AlCl3 solution turn blue litmus red?',
      q_hi: 'AlCl3 विलयन नीले लिटमस को लाल क्यों करता है?',
      a_en: 'Al³⁺ is a small, highly charged cation: its hydrated ion hydrolyses and releases H⁺.',
      a_hi: 'Al³⁺ छोटा, उच्च आवेश वाला धनायन है: इसका जलयोजित आयन जल-अपघटित होकर H⁺ मुक्त करता है।',
      formula: '$$[\\text{Al(H}_2\\text{O)}_6]^{3+}\\rightleftharpoons[\\text{Al(H}_2\\text{O)}_5\\text{OH}]^{2+}+\\text{H}^+$$'
    }
  ],

  /* ---------- SET 12: Buffer Solutions, Henderson Equation & Buffer Capacity ---------- */
  12: [
    {
      d: 'E',
      q_en: 'What is a buffer solution?',
      q_hi: 'बफ़र विलयन (buffer solution) क्या है?',
      a_en: 'A solution that resists change in pH on adding small amounts of acid or base or on dilution.',
      a_hi: 'वह विलयन जो थोड़ा अम्ल/क्षार मिलाने या तनुकरण पर pH में परिवर्तन का विरोध करे।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Give an example of an acidic buffer.',
      q_hi: 'अम्लीय बफ़र का उदाहरण दीजिए।',
      a_en: 'Weak acid + its salt with a strong base, e.g. CH3COOH + CH3COONa.',
      a_hi: 'दुर्बल अम्ल + प्रबल क्षार से बना उसका लवण, जैसे CH3COOH + CH3COONa।',
      formula: '$$\\text{CH}_3\\text{COOH}+\\text{CH}_3\\text{COONa}$$'
    },
    {
      d: 'E',
      q_en: 'Give an example of a basic buffer.',
      q_hi: 'क्षारीय बफ़र का उदाहरण दीजिए।',
      a_en: 'Weak base + its salt with a strong acid, e.g. NH4OH + NH4Cl.',
      a_hi: 'दुर्बल क्षार + प्रबल अम्ल से बना उसका लवण, जैसे NH4OH + NH4Cl।',
      formula: '$$\\text{NH}_4\\text{OH}+\\text{NH}_4\\text{Cl}$$'
    },
    {
      d: 'E',
      q_en: 'Write the Henderson equation for an acidic buffer.',
      q_hi: 'अम्लीय बफ़र के लिए हेंडरसन समीकरण लिखिए।',
      a_en: 'pH = pKa + log([salt]/[acid]).',
      a_hi: 'pH = pKa + log([लवण]/[अम्ल])।',
      formula: '$$\\text{pH}=\\text{p}K_a+\\log\\frac{[\\text{Salt}]}{[\\text{Acid}]}$$'
    },
    {
      d: 'E',
      q_en: 'Write the Henderson equation for a basic buffer.',
      q_hi: 'क्षारीय बफ़र के लिए हेंडरसन समीकरण लिखिए।',
      a_en: 'pOH = pKb + log([salt]/[base]).',
      a_hi: 'pOH = pKb + log([लवण]/[क्षार])।',
      formula: '$$\\text{pOH}=\\text{p}K_b+\\log\\frac{[\\text{Salt}]}{[\\text{Base}]}$$'
    },
    {
      d: 'M',
      q_en: 'Explain how an acetate buffer resists added H⁺ and OH⁻.',
      q_hi: 'ऐसीटेट बफ़र जोड़े गए H⁺ व OH⁻ का विरोध कैसे करता है?',
      a_en: 'Added H⁺ is consumed by CH3COO⁻; added OH⁻ is consumed by CH3COOH. The ratio, hence pH, barely changes.',
      a_hi: 'जोड़ा गया H⁺ CH3COO⁻ से, OH⁻ CH3COOH से निष्प्रभावित होता है। अनुपात, अतः pH, लगभग स्थिर रहता है।',
      formula: '$$\\text{CH}_3\\text{COO}^-+\\text{H}^+\\rightarrow\\text{CH}_3\\text{COOH}$$'
    },
    {
      d: 'M',
      q_en: 'When does pH = pKa in a buffer, and what is special?',
      q_hi: 'बफ़र में pH = pKa कब होता है और इसकी विशेषता क्या है?',
      a_en: 'When [salt] = [acid]; buffer capacity is then maximum.',
      a_hi: 'जब [लवण] = [अम्ल]; तब बफ़र क्षमता अधिकतम होती है।',
      formula: '$$\\log1=0\\Rightarrow\\text{pH}=\\text{p}K_a$$'
    },
    {
      d: 'M',
      q_en: 'What is the effective buffer range?',
      q_hi: 'प्रभावी बफ़र परास (buffer range) क्या है?',
      a_en: 'pH = pKa ± 1, i.e. salt/acid ratio between 10:1 and 1:10.',
      a_hi: 'pH = pKa ± 1, अर्थात लवण/अम्ल अनुपात 10:1 से 1:10 के बीच।',
      formula: '$$\\text{pH}=\\text{p}K_a\\pm1$$'
    },
    {
      d: 'M',
      q_en: 'Which buffer maintains blood pH, and what is that pH?',
      q_hi: 'रक्त का pH कौन-सा बफ़र बनाए रखता है और pH कितना है?',
      a_en: 'The H2CO3/HCO3⁻ buffer keeps blood pH ≈ 7.4.',
      a_hi: 'H2CO3/HCO3⁻ बफ़र रक्त का pH ≈ 7.4 बनाए रखता है।',
      formula: '$$\\text{H}_2\\text{CO}_3/\\text{HCO}_3^-,\\ \\text{pH}\\approx7.4$$'
    },
    {
      d: 'M',
      q_en: 'Find pH: 0.2 M CH3COONa + 0.1 M CH3COOH (pKa = 4.74).',
      q_hi: 'pH ज्ञात कीजिए: 0.2 M CH3COONa + 0.1 M CH3COOH (pKa = 4.74)।',
      a_en: 'pH = 4.74 + log 2 = 4.74 + 0.30 = 5.04.',
      a_hi: 'pH = 4.74 + log 2 = 4.74 + 0.30 = 5.04।',
      formula: '$$\\text{pH}=4.74+\\log2=5.04$$'
    },
    {
      d: 'H',
      q_en: '2 mol CH3COOH + 1 mol NaOH are mixed. Is it a buffer? Find pH.',
      q_hi: '2 mol CH3COOH + 1 mol NaOH मिलाए गए। क्या यह बफ़र है? pH ज्ञात कीजिए।',
      a_en: 'Yes: 1 mol acid + 1 mol CH3COONa remain, so pH = pKa = 4.74.',
      a_hi: 'हाँ: 1 mol अम्ल + 1 mol CH3COONa बचते हैं, अतः pH = pKa = 4.74।',
      formula: '$$2\\text{HA}+\\text{NaOH}\\rightarrow\\text{HA}+\\text{NaA}$$'
    },
    {
      d: 'H',
      q_en: '1 mol CH3COOH + 1 mol NaOH are mixed. Is it a buffer?',
      q_hi: '1 mol CH3COOH + 1 mol NaOH मिलाए गए। क्या यह बफ़र है?',
      a_en: 'No. Only CH3COONa forms; its anion hydrolyses, so pH > 7 (basic salt solution).',
      a_hi: 'नहीं। केवल CH3COONa बनता है; इसका ऋणायन जल-अपघटित होता है, अतः pH > 7।',
      formula: '$$\\text{HA}+\\text{NaOH}\\rightarrow\\text{NaA}+\\text{H}_2\\text{O}$$'
    },
    {
      d: 'H',
      q_en: 'Does dilution change the pH of a buffer?',
      q_hi: 'क्या तनुकरण से बफ़र का pH बदलता है?',
      a_en: 'Practically no: salt/acid ratio is unchanged, so pH stays the same (capacity falls).',
      a_hi: 'व्यावहारिक रूप से नहीं: लवण/अम्ल अनुपात अपरिवर्तित, अतः pH समान रहता है (क्षमता घटती है)।',
      formula: '$$\\frac{[\\text{Salt}]}{[\\text{Acid}]}=\\text{const}$$'
    },
    {
      d: 'H',
      q_en: 'Why does buffer capacity fall when the ratio goes beyond 1:10?',
      q_hi: 'अनुपात 1:10 से बाहर जाने पर बफ़र क्षमता क्यों घटती है?',
      a_en: 'One component becomes too scarce to neutralise added acid or base, so pH changes sharply.',
      a_hi: 'एक घटक इतना कम हो जाता है कि अम्ल/क्षार निष्प्रभावित नहीं कर पाता, अतः pH तेज़ी से बदलता है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Find pH of 0.1 M NH4OH + 0.1 M NH4Cl (pKb = 4.74).',
      q_hi: '0.1 M NH4OH + 0.1 M NH4Cl का pH ज्ञात कीजिए (pKb = 4.74)।',
      a_en: 'pOH = pKb + log 1 = 4.74, so pH = 14 − 4.74 = 9.26.',
      a_hi: 'pOH = pKb + log 1 = 4.74, अतः pH = 14 − 4.74 = 9.26।',
      formula: '$$\\text{pH}=14-4.74=9.26$$'
    }
  ],

  /* ---------- SET 13: Solubility Equilibria & Ksp for All Salt Types ---------- */
  13: [
    {
      d: 'E',
      q_en: 'What is the solubility product Ksp?',
      q_hi: 'विलेयता गुणनफल (solubility product) Ksp क्या है?',
      a_en: 'Product of ion concentrations (each to the power of its coefficient) in a saturated solution of a sparingly soluble salt.',
      a_hi: 'अल्प विलेय लवण के संतृप्त विलयन में आयन सांद्रताओं का गुणनफल (प्रत्येक पर गुणांक की घात)।',
      formula: '$$\\text{A}_x\\text{B}_y\\rightleftharpoons x\\text{A}^{y+}+y\\text{B}^{x-}$$'
    },
    {
      d: 'E',
      q_en: 'Classify salts by solubility in water.',
      q_hi: 'जल में विलेयता के आधार पर लवणों का वर्गीकरण कीजिए।',
      a_en: 'Soluble > 0.1 M; slightly soluble 0.01–0.1 M; sparingly soluble < 0.01 M.',
      a_hi: 'विलेय > 0.1 M; अल्प विलेय 0.01–0.1 M; विरल विलेय < 0.01 M।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Relate Ksp and molar solubility S for AgCl.',
      q_hi: 'AgCl के लिए Ksp व मोलर विलेयता S का संबंध लिखिए।',
      a_en: '[Ag⁺] = [Cl⁻] = S, so Ksp = S². Same for BaSO4.',
      a_hi: '[Ag⁺] = [Cl⁻] = S, अतः Ksp = S²। BaSO4 के लिए भी यही।',
      formula: '$$K_{sp}=S\\times S=S^2$$'
    },
    {
      d: 'E',
      q_en: 'Give the general Ksp for AxBy in terms of S.',
      q_hi: 'AxBy के लिए S के पदों में सामान्य Ksp लिखिए।',
      a_en: 'Ksp = (xS)^x (yS)^y = x^x · y^y · S^(x+y).',
      a_hi: 'Ksp = (xS)^x (yS)^y = x^x · y^y · S^(x+y)।',
      formula: '$$K_{sp}=x^x\\,y^y\\,S^{x+y}$$'
    },
    {
      d: 'E',
      q_en: 'Write Ksp expression for BaSO4.',
      q_hi: 'BaSO4 के लिए Ksp व्यंजक लिखिए।',
      a_en: 'Ksp = [Ba²⁺][SO4²⁻] = S².',
      a_hi: 'Ksp = [Ba²⁺][SO4²⁻] = S²।',
      formula: '$$K_{sp}=[\\text{Ba}^{2+}][\\text{SO}_4^{2-}]$$'
    },
    {
      d: 'M',
      q_en: 'Give Ksp for PbCl2, CaF2, Ag2CrO4 in terms of S.',
      q_hi: 'PbCl2, CaF2, Ag2CrO4 के लिए S के पदों में Ksp लिखिए।',
      a_en: 'All are 1:2 or 2:1 types: Ksp = 4S³.',
      a_hi: 'सभी 1:2 या 2:1 प्रकार के हैं: Ksp = 4S³।',
      formula: '$$K_{sp}=S(2S)^2=4S^3$$'
    },
    {
      d: 'M',
      q_en: 'Give Ksp for Al(OH)3, Fe(OH)3 in terms of S.',
      q_hi: 'Al(OH)3, Fe(OH)3 के लिए S के पदों में Ksp लिखिए।',
      a_en: '1:3 type: Ksp = S(3S)³ = 27S⁴.',
      a_hi: '1:3 प्रकार: Ksp = S(3S)³ = 27S⁴।',
      formula: '$$K_{sp}=27S^4$$'
    },
    {
      d: 'M',
      q_en: 'Give Ksp for Ca3(PO4)2 in terms of S.',
      q_hi: 'Ca3(PO4)2 के लिए S के पदों में Ksp लिखिए।',
      a_en: '3:2 type: Ksp = (3S)³(2S)² = 108 S⁵. Same for Bi2S3.',
      a_hi: '3:2 प्रकार: Ksp = (3S)³(2S)² = 108 S⁵। Bi2S3 के लिए भी यही।',
      formula: '$$K_{sp}=(3S)^3(2S)^2=108S^5$$'
    },
    {
      d: 'M',
      q_en: 'Ksp of AgCl is 1.8 × 10⁻¹⁰. Find its molar solubility.',
      q_hi: 'AgCl का Ksp 1.8 × 10⁻¹⁰ है। इसकी मोलर विलेयता ज्ञात कीजिए।',
      a_en: 'S = √Ksp = √(1.8×10⁻¹⁰) ≈ 1.34 × 10⁻⁵ mol/L.',
      a_hi: 'S = √Ksp = √(1.8×10⁻¹⁰) ≈ 1.34 × 10⁻⁵ mol/L।',
      formula: '$$S=\\sqrt{1.8\\times10^{-10}}=1.34\\times10^{-5}$$'
    },
    {
      d: 'M',
      q_en: 'Write Ksp for Bi2S3 in ion concentrations.',
      q_hi: 'Bi2S3 के लिए आयन सांद्रताओं में Ksp लिखिए।',
      a_en: 'Ksp = [Bi³⁺]²[S²⁻]³.',
      a_hi: 'Ksp = [Bi³⁺]²[S²⁻]³।',
      formula: '$$K_{sp}=[\\text{Bi}^{3+}]^2[\\text{S}^{2-}]^3$$'
    },
    {
      d: 'H',
      q_en: 'Derive Ksp of Zr3(PO4)4 in terms of S (NCERT favourite).',
      q_hi: 'Zr3(PO4)4 का S के पदों में Ksp व्युत्पन्न कीजिए (NCERT प्रिय प्रश्न)।',
      a_en: '[Zr⁴⁺] = 3S, [PO4³⁻] = 4S; Ksp = (3S)³(4S)⁴ = 27 × 256 S⁷ = 6912 S⁷.',
      a_hi: '[Zr⁴⁺] = 3S, [PO4³⁻] = 4S; Ksp = (3S)³(4S)⁴ = 27 × 256 S⁷ = 6912 S⁷।',
      formula: '$$K_{sp}=3^3\\cdot4^4\\cdot S^7=6912\\,S^7$$'
    },
    {
      d: 'H',
      q_en: 'Ksp of Ag2CrO4 = 1.1 × 10⁻¹². Find its molar solubility.',
      q_hi: 'Ag2CrO4 का Ksp = 1.1 × 10⁻¹² है। मोलर विलेयता ज्ञात कीजिए।',
      a_en: 'S = (Ksp/4)^{1/3} = (2.75×10⁻¹³)^{1/3} ≈ 6.5 × 10⁻⁵ mol/L.',
      a_hi: 'S = (Ksp/4)^{1/3} = (2.75×10⁻¹³)^{1/3} ≈ 6.5 × 10⁻⁵ mol/L।',
      formula: '$$S=\\left(\\frac{K_{sp}}{4}\\right)^{1/3}$$'
    },
    {
      d: 'H',
      q_en: 'TRAP: AgCl Ksp = 1.8×10⁻¹⁰ vs Ag2CrO4 Ksp = 1.1×10⁻¹². Which is more soluble?',
      q_hi: 'ट्रैप: AgCl Ksp = 1.8×10⁻¹⁰ बनाम Ag2CrO4 Ksp = 1.1×10⁻¹²। कौन अधिक विलेय है?',
      a_en: 'Ag2CrO4 (S = 6.5×10⁻⁵ > 1.3×10⁻⁵). Compare Ksp only for salts of the same type.',
      a_hi: 'Ag2CrO4 (S = 6.5×10⁻⁵ > 1.3×10⁻⁵)। Ksp की तुलना केवल समान प्रकार के लवणों में करें।',
      formula: '$$S_{\\text{Ag}_2\\text{CrO}_4}>S_{\\text{AgCl}}\\ \\text{despite lower}\\ K_{sp}$$'
    },
    {
      d: 'H',
      q_en: 'Fe(OH)3 has S = 1 × 10⁻¹⁰ M. Find its Ksp.',
      q_hi: 'Fe(OH)3 की विलेयता S = 1 × 10⁻¹⁰ M है। इसका Ksp ज्ञात कीजिए।',
      a_en: 'Ksp = 27S⁴ = 27 × (10⁻¹⁰)⁴ = 2.7 × 10⁻³⁹.',
      a_hi: 'Ksp = 27S⁴ = 27 × (10⁻¹⁰)⁴ = 2.7 × 10⁻³⁹।',
      formula: '$$K_{sp}=27\\times10^{-40}=2.7\\times10^{-39}$$'
    },
    {
      d: 'H',
      q_en: 'Ca3(PO4)2 has S = 1 × 10⁻⁷ M. Find Ksp.',
      q_hi: 'Ca3(PO4)2 की विलेयता S = 1 × 10⁻⁷ M है। Ksp ज्ञात कीजिए।',
      a_en: 'Ksp = 108S⁵ = 108 × 10⁻³⁵ ≈ 1.08 × 10⁻³³.',
      a_hi: 'Ksp = 108S⁵ = 108 × 10⁻³⁵ ≈ 1.08 × 10⁻³³।',
      formula: '$$K_{sp}=108\\times(10^{-7})^5\\approx1.08\\times10^{-33}$$'
    }
  ],

  /* ---------- SET 14: Ionic Product Qsp, Precipitation & Common Ion Effect on Solubility ---------- */
  14: [
    {
      d: 'E',
      q_en: 'Define ionic product Qsp.',
      q_hi: 'आयनिक गुणनफल (ionic product) Qsp परिभाषित कीजिए।',
      a_en: 'Product of ion concentrations at any moment in a solution; it equals Ksp only at saturation.',
      a_hi: 'किसी भी क्षण विलयन में आयन सांद्रताओं का गुणनफल; यह केवल संतृप्ति पर Ksp के बराबर होता है।',
      formula: '$$Q_{sp}=[\\text{A}^{y+}]^x[\\text{B}^{x-}]^y$$'
    },
    {
      d: 'E',
      q_en: 'What does Qsp < Ksp indicate?',
      q_hi: 'Qsp < Ksp क्या दर्शाता है?',
      a_en: 'Unsaturated solution; no precipitate forms (more solid can dissolve).',
      a_hi: 'असंतृप्त विलयन; अवक्षेप नहीं बनता (और ठोस घुल सकता है)।',
      formula: '$$Q_{sp}<K_{sp}$$'
    },
    {
      d: 'E',
      q_en: 'What does Qsp = Ksp indicate?',
      q_hi: 'Qsp = Ksp क्या दर्शाता है?',
      a_en: 'Saturated solution at equilibrium; no net precipitation or dissolution.',
      a_hi: 'साम्य पर संतृप्त विलयन; कोई नेट अवक्षेपण या विलयन नहीं।',
      formula: '$$Q_{sp}=K_{sp}$$'
    },
    {
      d: 'E',
      q_en: 'What happens when Qsp > Ksp?',
      q_hi: 'Qsp > Ksp होने पर क्या होता है?',
      a_en: 'Supersaturated: precipitation occurs until Qsp falls to Ksp.',
      a_hi: 'अतिसंतृप्त: Qsp के Ksp तक घटने तक अवक्षेपण होता है।',
      formula: '$$Q_{sp}>K_{sp}\\Rightarrow\\text{ppt}$$'
    },
    {
      d: 'E',
      q_en: 'How does a common ion affect solubility of a sparingly soluble salt?',
      q_hi: 'उभयनिष्ठ आयन अल्प विलेय लवण की विलेयता को कैसे प्रभावित करता है?',
      a_en: 'It decreases solubility, as the equilibrium shifts toward the undissolved solid.',
      a_hi: 'यह विलेयता घटाता है, क्योंकि साम्य अविलेय ठोस की ओर खिसकता है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Find solubility of AgCl in c M NaCl.',
      q_hi: 'c M NaCl में AgCl की विलेयता ज्ञात कीजिए।',
      a_en: '[Cl⁻] ≈ c, so S\' = Ksp/c.',
      a_hi: '[Cl⁻] ≈ c, अतः S\' = Ksp/c।',
      formula: '$$S\'=\\frac{K_{sp}}{c}$$'
    },
    {
      d: 'M',
      q_en: 'Find solubility of CaF2 in c M NaF.',
      q_hi: 'c M NaF में CaF2 की विलेयता ज्ञात कीजिए।',
      a_en: 'Ksp = S\'·c², so S\' = Ksp/c².',
      a_hi: 'Ksp = S\'·c², अतः S\' = Ksp/c²।',
      formula: '$$S\'=\\frac{K_{sp}}{c^2}$$'
    },
    {
      d: 'M',
      q_en: 'Find solubility of CaF2 in c M Ca(NO3)2.',
      q_hi: 'c M Ca(NO3)2 में CaF2 की विलेयता ज्ञात कीजिए।',
      a_en: 'Ksp = c(2S\')² = 4cS\'², so S\' = √(Ksp/4c).',
      a_hi: 'Ksp = c(2S\')² = 4cS\'², अतः S\' = √(Ksp/4c)।',
      formula: '$$S\'=\\sqrt{\\frac{K_{sp}}{4c}}$$'
    },
    {
      d: 'M',
      q_en: 'Equal volumes of 10⁻⁵ M AgNO3 and 10⁻⁵ M NaCl are mixed. Does AgCl precipitate?',
      q_hi: '10⁻⁵ M AgNO3 व 10⁻⁵ M NaCl के समान आयतन मिलाए गए। क्या AgCl अवक्षेपित होगा?',
      a_en: 'After mixing each is 5×10⁻⁶ M; Qsp = 2.5×10⁻¹¹ < 1.8×10⁻¹⁰, so no precipitate.',
      a_hi: 'मिलाने पर प्रत्येक 5×10⁻⁶ M; Qsp = 2.5×10⁻¹¹ < 1.8×10⁻¹⁰, अतः अवक्षेप नहीं।',
      formula: '$$Q_{sp}=(5\\times10^{-6})^2=2.5\\times10^{-11}$$'
    },
    {
      d: 'M',
      q_en: 'What is fractional precipitation? Which precipitates first, AgI or AgCl?',
      q_hi: 'प्रभाजी अवक्षेपण क्या है? AgI या AgCl में पहले कौन अवक्षेपित होगा?',
      a_en: 'Selective precipitation by slowly adding a reagent. AgI (Ksp ≈ 8.5×10⁻¹⁷) precipitates first at lower [Ag⁺].',
      a_hi: 'अभिकर्मक धीरे-धीरे डालकर चयनात्मक अवक्षेपण। AgI (Ksp ≈ 8.5×10⁻¹⁷) कम [Ag⁺] पर पहले अवक्षेपित होता है।',
      formula: '$$K_{sp}(\\text{AgI})\\ll K_{sp}(\\text{AgCl})$$'
    },
    {
      d: 'H',
      q_en: 'Why does CaF2 dissolve more in acidic solution?',
      q_hi: 'CaF2 अम्लीय विलयन में अधिक क्यों घुलता है?',
      a_en: 'F⁻ is a weak-acid conjugate base; H⁺ converts it to HF, lowering [F⁻] and shifting dissolution forward.',
      a_hi: 'F⁻ दुर्बल अम्ल का संयुग्मी क्षारक है; H⁺ इसे HF में बदलता है, [F⁻] घटता है और विलयन अग्र बढ़ता है।',
      formula: '$$\\text{F}^-+\\text{H}^+\\rightarrow\\text{HF}$$'
    },
    {
      d: 'H',
      q_en: 'Name salts whose solubility increases at low pH. Does AgCl do so?',
      q_hi: 'वे लवण बताइए जिनकी विलेयता कम pH पर बढ़ती है। क्या AgCl ऐसा करता है?',
      a_en: 'CaF2, CaC2O4, AgCN, Ca3(PO4)2 (weak-acid anions). AgCl does not; Cl⁻ is conjugate base of a strong acid.',
      a_hi: 'CaF2, CaC2O4, AgCN, Ca3(PO4)2 (दुर्बल अम्ल के ऋणायन)। AgCl नहीं; Cl⁻ प्रबल अम्ल का संयुग्मी क्षारक है।',
      formula: '$$\\text{CaC}_2\\text{O}_4+2\\text{H}^+\\rightarrow\\text{Ca}^{2+}+\\text{H}_2\\text{C}_2\\text{O}_4$$'
    },
    {
      d: 'H',
      q_en: 'Find S\' of AgCl in 0.1 M NaCl (Ksp = 1.8 × 10⁻¹⁰).',
      q_hi: '0.1 M NaCl में AgCl की S\' ज्ञात कीजिए (Ksp = 1.8 × 10⁻¹⁰)।',
      a_en: 'S\' = Ksp/0.1 = 1.8 × 10⁻⁹ M, about 7400 times lower than in water.',
      a_hi: 'S\' = Ksp/0.1 = 1.8 × 10⁻⁹ M, जो जल की तुलना में लगभग 7400 गुना कम है।',
      formula: '$$S\'=\\frac{1.8\\times10^{-10}}{0.1}=1.8\\times10^{-9}$$'
    },
    {
      d: 'H',
      q_en: 'Compare AgCl solubility in water, 0.1 M NaCl and 0.1 M AgNO3.',
      q_hi: 'जल, 0.1 M NaCl व 0.1 M AgNO3 में AgCl की विलेयता की तुलना कीजिए।',
      a_en: 'Highest in water (1.34×10⁻⁵ M); equally suppressed (1.8×10⁻⁹ M) in both, as Cl⁻ or Ag⁺ is common.',
      a_hi: 'जल में सर्वाधिक (1.34×10⁻⁵ M); दोनों में समान रूप से कम (1.8×10⁻⁹ M), क्योंकि Cl⁻ या Ag⁺ उभयनिष्ठ है।',
      formula: '$$S_{\\text{water}}\\gg S_{\\text{NaCl}}=S_{\\text{AgNO}_3}$$'
    },
    {
      d: 'H',
      q_en: 'CaF2 (Ksp = 4×10⁻¹¹): compare S in 0.1 M NaF and 0.1 M Ca(NO3)2.',
      q_hi: 'CaF2 (Ksp = 4×10⁻¹¹): 0.1 M NaF व 0.1 M Ca(NO3)2 में S की तुलना कीजिए।',
      a_en: 'NaF: S\' = 4×10⁻¹¹/0.01 = 4×10⁻⁹ M. Ca(NO3)2: S\' = √(4×10⁻¹¹/0.4) = 1×10⁻⁵ M. F⁻ suppresses far more.',
      a_hi: 'NaF: S\' = 4×10⁻¹¹/0.01 = 4×10⁻⁹ M. Ca(NO3)2: S\' = √(4×10⁻¹¹/0.4) = 1×10⁻⁵ M। F⁻ बहुत अधिक घटाता है।',
      formula: '$$\\frac{K_{sp}}{c^2}\\ \\text{vs}\\ \\sqrt{\\frac{K_{sp}}{4c}}$$'
    }
  ],

  /* ---------- SET 15: Chapter 6 Mixed JEE/NEET Traps & Qualitative Analysis ---------- */
  15: [
    {
      d: 'E',
      q_en: 'Which cations form Group II and why do they precipitate with H2S in dilute HCl?',
      q_hi: 'समूह II के कौन-से धनायन हैं और वे तनु HCl में H2S से क्यों अवक्षेपित होते हैं?',
      a_en: 'Cu²⁺, Cd²⁺, Pb²⁺: their sulphides have very low Ksp, so even a small [S²⁻] exceeds it.',
      a_hi: 'Cu²⁺, Cd²⁺, Pb²⁺: इनके सल्फाइडों का Ksp बहुत कम है, अतः थोड़े [S²⁻] पर भी Qsp > Ksp।',
      formula: '$$\\text{Cu}^{2+}+\\text{S}^{2-}\\rightarrow\\text{CuS}\\downarrow$$'
    },
    {
      d: 'E',
      q_en: 'Which cations form Group IV and what reagent is used?',
      q_hi: 'समूह IV के कौन-से धनायन हैं और कौन-सा अभिकर्मक प्रयुक्त होता है?',
      a_en: 'Zn²⁺, Ni²⁺, Co²⁺, Mn²⁺ (higher Ksp sulphides) are precipitated by H2S in NH4OH medium.',
      a_hi: 'Zn²⁺, Ni²⁺, Co²⁺, Mn²⁺ (उच्च Ksp वाले सल्फाइड) NH4OH माध्यम में H2S से अवक्षेपित होते हैं।',
      formula: '$$\\text{Zn}^{2+}+\\text{H}_2\\text{S}\\xrightarrow{\\text{NH}_4\\text{OH}}\\text{ZnS}\\downarrow$$'
    },
    {
      d: 'E',
      q_en: 'Which hydroxides are precipitated in Group III?',
      q_hi: 'समूह III में कौन-से हाइड्रॉक्साइड अवक्षेपित होते हैं?',
      a_en: 'Fe(OH)3, Al(OH)3 and Cr(OH)3, using NH4OH in the presence of NH4Cl.',
      a_hi: 'NH4Cl की उपस्थिति में NH4OH से Fe(OH)3, Al(OH)3 व Cr(OH)3।',
      formula: '$$\\text{Fe}^{3+}+3\\text{OH}^-\\rightarrow\\text{Fe(OH)}_3\\downarrow$$'
    },
    {
      d: 'E',
      q_en: 'State the pH range and colour change of phenolphthalein.',
      q_hi: 'फीनॉल्फ्थेलीन की pH परास व रंग परिवर्तन बताइए।',
      a_en: 'pH ≈ 8.3–10: colourless in acid, pink in base.',
      a_hi: 'pH ≈ 8.3–10: अम्ल में रंगहीन, क्षार में गुलाबी।',
      formula: '$$\\text{pH}=8.3\\text{–}10$$'
    },
    {
      d: 'E',
      q_en: 'State the pH range and colour change of methyl orange.',
      q_hi: 'मेथिल ऑरेंज की pH परास व रंग परिवर्तन बताइए।',
      a_en: 'pH ≈ 3.1–4.4: red in acid, yellow in base.',
      a_hi: 'pH ≈ 3.1–4.4: अम्ल में लाल, क्षार में पीला।',
      formula: '$$\\text{pH}=3.1\\text{–}4.4$$'
    },
    {
      d: 'M',
      q_en: 'Why does Zn²⁺ not precipitate as ZnS in acidic medium?',
      q_hi: 'अम्लीय माध्यम में Zn²⁺ ZnS के रूप में क्यों अवक्षेपित नहीं होता?',
      a_en: 'Acid suppresses [S²⁻]; Qsp stays below the relatively high Ksp of ZnS.',
      a_hi: 'अम्ल [S²⁻] घटाता है; Qsp, ZnS के अपेक्षाकृत उच्च Ksp से कम रहता है।',
      formula: '$$Q_{sp}(\\text{ZnS})<K_{sp}(\\text{ZnS})$$'
    },
    {
      d: 'M',
      q_en: 'Why is Mg²⁺ not precipitated with Group III in NH4OH + NH4Cl?',
      q_hi: 'NH4OH + NH4Cl में Mg²⁺ समूह III के साथ अवक्षेपित क्यों नहीं होता?',
      a_en: 'Low [OH⁻] gives Qsp < Ksp for Mg(OH)2, which has a high Ksp; Fe, Al, Cr hydroxides have very low Ksp.',
      a_hi: 'कम [OH⁻] पर Mg(OH)2 का Qsp < Ksp (उच्च Ksp); Fe, Al, Cr हाइड्रॉक्साइडों का Ksp बहुत कम है।',
      formula: '$$Q_{sp}[\\text{Mg(OH)}_2]<K_{sp}$$'
    },
    {
      d: 'M',
      q_en: 'Find pH of 0.1 M NaHCO3 (pKa1 = 6.35, pKa2 = 10.33).',
      q_hi: '0.1 M NaHCO3 का pH ज्ञात कीजिए (pKa1 = 6.35, pKa2 = 10.33)।',
      a_en: 'pH = ½(6.35 + 10.33) = 8.34, independent of concentration.',
      a_hi: 'pH = ½(6.35 + 10.33) = 8.34, सांद्रता से स्वतंत्र।',
      formula: '$$\\text{pH}=\\frac{\\text{p}K_{a1}+\\text{p}K_{a2}}{2}$$'
    },
    {
      d: 'M',
      q_en: 'Find pH of NaH2PO4 (pKa1 = 2.15, pKa2 = 7.20).',
      q_hi: 'NaH2PO4 का pH ज्ञात कीजिए (pKa1 = 2.15, pKa2 = 7.20)।',
      a_en: 'pH = ½(2.15 + 7.20) ≈ 4.68 (acidic).',
      a_hi: 'pH = ½(2.15 + 7.20) ≈ 4.68 (अम्लीय)।',
      formula: '$$\\text{pH}=\\tfrac{1}{2}(2.15+7.20)=4.68$$'
    },
    {
      d: 'M',
      q_en: 'Which indicator suits strong acid–weak base and weak acid–strong base titrations?',
      q_hi: 'प्रबल अम्ल–दुर्बल क्षार व दुर्बल अम्ल–प्रबल क्षार अनुमापन के लिए कौन-सा सूचक उपयुक्त है?',
      a_en: 'Strong acid–weak base: methyl orange (acidic end point). Weak acid–strong base: phenolphthalein (basic end point).',
      a_hi: 'प्रबल अम्ल–दुर्बल क्षार: मेथिल ऑरेंज। दुर्बल अम्ल–प्रबल क्षार: फीनॉल्फ्थेलीन।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Simultaneous solubility: AgCl and AgBr both saturated. Write the Ag⁺ balance.',
      q_hi: 'सहविलेयता: AgCl व AgBr दोनों संतृप्त हैं। Ag⁺ संतुलन लिखिए।',
      a_en: '[Ag⁺] = [Cl⁻] + [Br⁻], and [Cl⁻]/[Br⁻] = Ksp(AgCl)/Ksp(AgBr).',
      a_hi: '[Ag⁺] = [Cl⁻] + [Br⁻], तथा [Cl⁻]/[Br⁻] = Ksp(AgCl)/Ksp(AgBr)।',
      formula: '$$[\\text{Ag}^+]=[\\text{Cl}^-]+[\\text{Br}^-]$$'
    },
    {
      d: 'H',
      q_en: 'True or false: on diluting a weak acid, [H⁺] increases because α increases.',
      q_hi: 'सही/गलत: दुर्बल अम्ल तनु करने पर α बढ़ने से [H⁺] बढ़ता है।',
      a_en: 'False. α rises, but concentration falls more, so [H⁺] = cα decreases (∝ √c).',
      a_hi: 'गलत। α बढ़ता है, पर सांद्रता अधिक घटती है, अतः [H⁺] = cα घटता है (∝ √c)।',
      formula: '$$[\\text{H}^+]=\\sqrt{K_ac}\\downarrow$$'
    },
    {
      d: 'H',
      q_en: 'TRAP: 100 mL of pH 2 HCl and pH 2 CH3COOH are titrated with NaOH. Which needs more?',
      q_hi: 'ट्रैप: 100 mL pH 2 HCl व pH 2 CH3COOH को NaOH से अनुमापित किया जाता है। किसे अधिक चाहिए?',
      a_en: 'CH3COOH. Equal [H⁺] but the weak acid has a much higher total concentration, all of which gets neutralised.',
      a_hi: 'CH3COOH को। [H⁺] समान, पर दुर्बल अम्ल की कुल सांद्रता बहुत अधिक है और सब उदासीन होता है।',
      formula: '$$c_{\\text{CH}_3\\text{COOH}}\\gg c_{\\text{HCl}}\\ \\text{at same pH}$$'
    },
    {
      d: 'H',
      q_en: 'Does adding KNO3 (no common ion) change the solubility of AgCl?',
      q_hi: 'क्या KNO3 (कोई उभयनिष्ठ आयन नहीं) मिलाने से AgCl की विलेयता बदलती है?',
      a_en: 'Slightly increases it (diverse-ion effect): extra ions lower activities of Ag⁺ and Cl⁻.',
      a_hi: 'थोड़ी बढ़ती है (विषम-आयन प्रभाव): अतिरिक्त आयन Ag⁺ व Cl⁻ की सक्रियता घटाते हैं।',
      formula: '$$\\text{AgCl(s)}\\rightleftharpoons\\text{Ag}^++\\text{Cl}^-$$'
    },
    {
      d: 'H',
      q_en: 'Salt of a weak acid and weak base with Ka = Kb has pH 7. Is it unhydrolysed?',
      q_hi: 'Ka = Kb वाले दुर्बल अम्ल–दुर्बल क्षार लवण का pH 7 है। क्या वह जल-अपघटित नहीं है?',
      a_en: 'No. Both ions hydrolyse equally, so [H⁺] = [OH⁻]; neutral pH does not mean no hydrolysis.',
      a_hi: 'नहीं। दोनों आयन समान रूप से जल-अपघटित होते हैं, [H⁺] = [OH⁻]; उदासीन pH का अर्थ जल-अपघटन का अभाव नहीं।',
      formula: '$$K_a=K_b\\Rightarrow\\text{pH}=7,\\ h\\neq0$$'
    }
  ]

};
