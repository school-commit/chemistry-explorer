/* ==========================================================================
   CHEMISTRY EXPLORER - Class 11 Chemistry
   Chapter 5: Chemical Thermodynamics
   Flashcard database: 15 sets x 15 cards = 225 hand-crafted cards
   Each set: 5 Easy (E) + 5 Medium (M) + 5 Hard (H)
   Read by buildDeck(ch, s) via window.FLASHCARD_SETS_DB[chId][setNum]
   ========================================================================== */
window.FLASHCARD_SETS_DB = window.FLASHCARD_SETS_DB || {};
window.FLASHCARD_SETS_DB.ch5 = {

  /* ---------- SET 1: Thermodynamic Terms: System, Surroundings & Types of Systems ---------- */
  1: [
    {
      d: 'E',
      q_en: 'What are the system, surroundings and universe?',
      q_hi: 'निकाय, परिवेश व ब्रह्मांड (universe) क्या हैं?',
      a_en: 'System is the part under study; surroundings is everything else that can interact with it; system + surroundings = universe.',
      a_hi: 'निकाय अध्ययन का भाग है; परिवेश शेष भाग जो उससे अंतःक्रिया कर सकता है; निकाय + परिवेश = ब्रह्मांड।',
      formula: '$$\\text{Universe}=\\text{System}+\\text{Surroundings}$$'
    },
    {
      d: 'E',
      q_en: 'What is a boundary? Distinguish diathermic and adiabatic walls.',
      q_hi: 'सीमा (boundary) क्या है? ऊष्मीय चालक व रुद्धोष्म दीवार में अंतर बताइए।',
      a_en: 'Boundary separates system from surroundings. A diathermic wall allows heat flow; an adiabatic wall does not.',
      a_hi: 'सीमा निकाय को परिवेश से अलग करती है। ऊष्मीय चालक दीवार से ऊष्मा बहती है; रुद्धोष्म दीवार से नहीं।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What is an open system? Give examples.',
      q_hi: 'खुला निकाय (open system) क्या है? उदाहरण दीजिए।',
      a_en: 'It exchanges both matter and energy with the surroundings, e.g. an open beaker or a living cell.',
      a_hi: 'यह परिवेश से पदार्थ व ऊर्जा दोनों का आदान-प्रदान करता है, जैसे खुला बीकर या जीवित कोशिका।',
      formula: '$$\\Delta m\\neq0,\\ q\\neq0$$'
    },
    {
      d: 'E',
      q_en: 'What is a closed system? Give an example.',
      q_hi: 'बंद निकाय (closed system) क्या है? उदाहरण दीजिए।',
      a_en: 'It exchanges energy but not matter, e.g. gas in a covered metallic vessel.',
      a_hi: 'यह ऊर्जा का आदान-प्रदान करता है, पदार्थ का नहीं, जैसे ढके धात्विक पात्र में गैस।',
      formula: '$$\\Delta m=0,\\ q\\neq0$$'
    },
    {
      d: 'E',
      q_en: 'What is an isolated system? Give examples.',
      q_hi: 'विलगित निकाय (isolated system) क्या है? उदाहरण दीजिए।',
      a_en: 'It exchanges neither matter nor energy, e.g. an ideal thermos flask and the universe.',
      a_hi: 'यह न पदार्थ, न ऊर्जा का आदान-प्रदान करता है, जैसे आदर्श थर्मस फ्लास्क तथा ब्रह्मांड।',
      formula: '$$\\Delta m=0,\\ q=0$$'
    },
    {
      d: 'M',
      q_en: 'What are macroscopic properties of a system?',
      q_hi: 'निकाय के स्थूल गुण (macroscopic properties) क्या हैं?',
      a_en: 'Bulk measurable properties such as pressure, volume, temperature and composition, which define the state.',
      a_hi: 'दाब, आयतन, ताप व संघटन जैसे मापनीय स्थूल गुण, जो निकाय की अवस्था निर्धारित करते हैं।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Name the three kinds of thermodynamic equilibrium.',
      q_hi: 'ऊष्मागतिक साम्य के तीन प्रकार बताइए।',
      a_en: 'Thermal (no temperature difference), mechanical (no pressure difference) and chemical (no change in composition).',
      a_hi: 'ऊष्मीय (ताप अंतर नहीं), यांत्रिक (दाब अंतर नहीं) तथा रासायनिक (संघटन में परिवर्तन नहीं)।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'State the Zeroth Law of Thermodynamics.',
      q_hi: 'ऊष्मागतिकी का शून्यवाँ नियम (Zeroth Law) लिखिए।',
      a_en: 'If A and B are each in thermal equilibrium with C, then A and B are in thermal equilibrium with each other.',
      a_hi: 'यदि A व B दोनों C के साथ ऊष्मीय साम्य में हैं, तो A व B भी आपस में ऊष्मीय साम्य में हैं।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Classify a sealed glass bulb of gas, an open boiling pot and an ideal thermos.',
      q_hi: 'बंद काँच बल्ब में गैस, खुला उबलता बर्तन व आदर्श थर्मस को वर्गीकृत कीजिए।',
      a_en: 'Sealed bulb: closed; open pot: open; ideal thermos: isolated.',
      a_hi: 'बंद बल्ब: बंद निकाय; खुला बर्तन: खुला निकाय; आदर्श थर्मस: विलगित निकाय।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'How do rigid and flexible walls differ?',
      q_hi: 'दृढ़ व लचीली दीवार में क्या अंतर है?',
      a_en: 'A rigid wall keeps volume fixed (no PV work); a flexible wall can move, so PV work can be exchanged.',
      a_hi: 'दृढ़ दीवार में आयतन स्थिर (PV कार्य नहीं); लचीली दीवार हिल सकती है, अतः PV कार्य का आदान-प्रदान होता है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'What can cross the boundary of a closed, rigid, diathermic container?',
      q_hi: 'बंद, दृढ़, ऊष्मीय चालक पात्र की सीमा से क्या गुज़र सकता है?',
      a_en: 'Only heat: matter cannot (closed) and PV work cannot (rigid).',
      a_hi: 'केवल ऊष्मा: पदार्थ नहीं (बंद) और PV कार्य नहीं (दृढ़)।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Does an adiabatic wall make a system isolated?',
      q_hi: 'क्या रुद्धोष्म दीवार निकाय को विलगित बना देती है?',
      a_en: 'No; it blocks only heat. Matter and work can still cross unless the wall is also closed and rigid.',
      a_hi: 'नहीं; यह केवल ऊष्मा रोकती है। जब तक दीवार बंद व दृढ़ न हो, पदार्थ व कार्य गुज़र सकते हैं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'What can cross a closed system with a flexible diathermic wall?',
      q_hi: 'बंद निकाय की लचीली ऊष्मीय चालक दीवार से क्या गुज़र सकता है?',
      a_en: 'Heat and work, but not matter.',
      a_hi: 'ऊष्मा व कार्य, पर पदार्थ नहीं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Is a real thermos flask truly isolated?',
      q_hi: 'क्या वास्तविक थर्मस फ्लास्क पूर्णतः विलगित है?',
      a_en: 'Only approximately; heat leaks slowly. The universe is the only truly isolated system.',
      a_hi: 'केवल लगभग; ऊष्मा धीरे-धीरे रिसती है। केवल ब्रह्मांड ही वास्तव में विलगित निकाय है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'How does the Zeroth Law lead to the concept of temperature?',
      q_hi: 'शून्यवाँ नियम ताप की अवधारणा तक कैसे ले जाता है?',
      a_en: 'Bodies in thermal equilibrium share a common property, temperature, which a thermometer (C) compares.',
      a_hi: 'ऊष्मीय साम्य वाले पिंडों का एक उभयनिष्ठ गुण होता है: ताप, जिसकी तुलना थर्मामीटर (C) करता है।',
      formula: ''
    }
  ],

  /* ---------- SET 2: State Functions vs Path Functions & Thermodynamic Processes ---------- */
  2: [
    {
      d: 'E',
      q_en: 'What are state functions?',
      q_hi: 'अवस्था फलन (state functions) क्या हैं?',
      a_en: 'Properties depending only on the initial and final states, not the path: P, V, T, U, H, S and G.',
      a_hi: 'वे गुण जो केवल प्रारंभिक व अंतिम अवस्था पर निर्भर करते हैं, पथ पर नहीं: P, V, T, U, H, S तथा G।',
      formula: '$$P,\\ V,\\ T,\\ U,\\ H,\\ S,\\ G$$'
    },
    {
      d: 'E',
      q_en: 'What are path functions? Give examples.',
      q_hi: 'पथ फलन (path functions) क्या हैं? उदाहरण दीजिए।',
      a_en: 'Quantities that depend on the path followed: heat (q) and work (w).',
      a_hi: 'वे राशियाँ जो अपनाए गए पथ पर निर्भर करती हैं: ऊष्मा (q) व कार्य (w)।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What is an isothermal process?',
      q_hi: 'समतापी प्रक्रम (isothermal process) क्या है?',
      a_en: 'A process at constant temperature (ΔT = 0); the system exchanges heat with surroundings to hold T fixed.',
      a_hi: 'स्थिर ताप पर प्रक्रम (ΔT = 0); ताप स्थिर रखने हेतु निकाय परिवेश से ऊष्मा का आदान-प्रदान करता है।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What is an adiabatic process?',
      q_hi: 'रुद्धोष्म प्रक्रम (adiabatic process) क्या है?',
      a_en: 'A process with no heat exchange with surroundings (q = 0).',
      a_hi: 'ऐसा प्रक्रम जिसमें परिवेश से ऊष्मा का आदान-प्रदान नहीं होता (q = 0)।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What are isochoric and isobaric processes?',
      q_hi: 'समआयतनिक व समदाबी प्रक्रम क्या हैं?',
      a_en: 'Isochoric: constant volume (ΔV = 0, so w = 0). Isobaric: constant pressure (ΔP = 0).',
      a_hi: 'समआयतनिक: स्थिर आयतन (ΔV = 0, अतः w = 0)। समदाबी: स्थिर दाब (ΔP = 0)।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What is the cyclic integral test for a state function?',
      q_hi: 'अवस्था फलन के लिए चक्रीय समाकलन परीक्षण क्या है?',
      a_en: 'For a state function X the integral over a complete cycle is zero.',
      a_hi: 'अवस्था फलन X का पूर्ण चक्र पर समाकलन शून्य होता है।',
      formula: '$$\\oint dX=0$$'
    },
    {
      d: 'M',
      q_en: 'q and w are path functions. Why is q + w a state function?',
      q_hi: 'q व w पथ फलन हैं। फिर q + w अवस्था फलन क्यों है?',
      a_en: 'Because q + w = ΔU, and U depends only on the end states; changes in q and w offset each other.',
      a_hi: 'क्योंकि q + w = ΔU है और U केवल अंतिम अवस्थाओं पर निर्भर करता है; q व w के परिवर्तन एक-दूसरे को संतुलित करते हैं।',
      formula: '$$\\Delta U=q+w$$'
    },
    {
      d: 'M',
      q_en: 'State the features of a cyclic process.',
      q_hi: 'चक्रीय प्रक्रम की विशेषताएँ लिखिए।',
      a_en: 'The system returns to its initial state: ΔU = 0, ΔH = 0 and q = -w.',
      a_hi: 'निकाय प्रारंभिक अवस्था में लौटता है: ΔU = 0, ΔH = 0 तथा q = −w।',
      formula: '$$\\Delta U=0,\\ \\Delta H=0,\\ q=-w$$'
    },
    {
      d: 'M',
      q_en: 'What do ΔU and q equal in isothermal expansion of an ideal gas?',
      q_hi: 'आदर्श गैस के समतापी प्रसार में ΔU व q किसके बराबर होते हैं?',
      a_en: 'ΔU = 0 (U depends only on T), so q = -w: heat absorbed equals work done by the gas.',
      a_hi: 'ΔU = 0 (U केवल T पर निर्भर), अतः q = −w: अवशोषित ऊष्मा = गैस द्वारा किया गया कार्य।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What is the work in an isobaric process?',
      q_hi: 'समदाबी प्रक्रम में कार्य क्या होता है?',
      a_en: 'w = -P ΔV, with P constant and equal to the external pressure.',
      a_hi: 'w = −P ΔV, जहाँ P स्थिर है और बाह्य दाब के बराबर है।',
      formula: '$$w=-P\\Delta V$$'
    },
    {
      d: 'H',
      q_en: 'Is ΔU always zero for an isothermal process?',
      q_hi: 'क्या समतापी प्रक्रम में ΔU सदैव शून्य होता है?',
      a_en: 'No; only for an ideal gas. For real gases or phase changes, U also depends on volume or phase, so ΔU is not zero.',
      a_hi: 'नहीं; केवल आदर्श गैस के लिए। वास्तविक गैसों या प्रावस्था परिवर्तन में U आयतन/प्रावस्था पर भी निर्भर करता है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Two paths join the same initial and final states. What stays the same and what differs?',
      q_hi: 'दो पथ समान प्रारंभिक व अंतिम अवस्थाएँ जोड़ते हैं। क्या समान रहता है, क्या बदलता है?',
      a_en: 'ΔU, ΔH and ΔS stay the same; q and w differ from path to path.',
      a_hi: 'ΔU, ΔH व ΔS समान रहते हैं; q व w प्रत्येक पथ में भिन्न होते हैं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why is adiabatic work a state-function difference?',
      q_hi: 'रुद्धोष्म कार्य अवस्था फलन का अंतर क्यों है?',
      a_en: 'With q = 0, ΔU = w, so w depends only on initial and final states for an adiabatic process.',
      a_hi: 'q = 0 होने पर ΔU = w, अतः रुद्धोष्म प्रक्रम में w केवल प्रारंभिक व अंतिम अवस्थाओं पर निर्भर करता है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why do q_V and q_P behave like state functions?',
      q_hi: 'q_V व q_P अवस्था फलन जैसा व्यवहार क्यों करते हैं?',
      a_en: 'At constant V, q_V = ΔU; at constant P, q_P = ΔH. Both equal changes in state functions.',
      a_hi: 'स्थिर V पर q_V = ΔU; स्थिर P पर q_P = ΔH। दोनों अवस्था फलनों के परिवर्तन के बराबर हैं।',
      formula: '$$q_V=\\Delta U,\\quad q_P=\\Delta H$$'
    },
    {
      d: 'H',
      q_en: 'In a cyclic process ΔU = 0. Is the net work zero?',
      q_hi: 'चक्रीय प्रक्रम में ΔU = 0 होता है। क्या कुल कार्य शून्य है?',
      a_en: 'No; net work = -q, equal to the area enclosed by the cycle on the P-V diagram.',
      a_hi: 'नहीं; कुल कार्य = −q, जो P–V आरेख में चक्र द्वारा घिरे क्षेत्रफल के बराबर है।',
      formula: ''
    }
  ],

  /* ---------- SET 3: Internal Energy, Work, Heat & First Law of Thermodynamics ---------- */
  3: [
    {
      d: 'E',
      q_en: 'What are the components of internal energy?',
      q_hi: 'आंतरिक ऊर्जा के घटक क्या हैं?',
      a_en: 'Translational, rotational, vibrational, electronic and nuclear energies of the molecules (not bulk motion).',
      a_hi: 'अणुओं की स्थानांतरीय, घूर्णी, कंपनी, इलेक्ट्रॉनिक व नाभिकीय ऊर्जाएँ (पिंड की गति नहीं)।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'State the IUPAC sign convention for q and w.',
      q_hi: 'q व w के लिए IUPAC चिह्न परिपाटी लिखिए।',
      a_en: '+q: heat absorbed by system; -q: released. +w: work done on system; -w: work done by system.',
      a_hi: '+q: निकाय द्वारा ऊष्मा अवशोषित; −q: मुक्त। +w: निकाय पर कार्य; −w: निकाय द्वारा कार्य।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'State the First Law of Thermodynamics.',
      q_hi: 'ऊष्मागतिकी का प्रथम नियम लिखिए।',
      a_en: 'Energy can be neither created nor destroyed; the change in internal energy equals heat plus work.',
      a_hi: 'ऊर्जा न उत्पन्न होती है न नष्ट; आंतरिक ऊर्जा में परिवर्तन = ऊष्मा + कार्य।',
      formula: '$$\\Delta U=q+w$$'
    },
    {
      d: 'E',
      q_en: 'What is ΔU for an isolated system?',
      q_hi: 'विलगित निकाय के लिए ΔU क्या है?',
      a_en: 'Zero: with q = 0 and w = 0, the internal energy stays constant.',
      a_hi: 'शून्य: q = 0 व w = 0 होने से आंतरिक ऊर्जा स्थिर रहती है।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What does heat at constant volume equal?',
      q_hi: 'स्थिर आयतन पर ऊष्मा किसके बराबर होती है?',
      a_en: 'The change in internal energy, q_V = ΔU, since ΔV = 0 gives w = 0.',
      a_hi: 'आंतरिक ऊर्जा परिवर्तन के, q_V = ΔU, क्योंकि ΔV = 0 से w = 0।',
      formula: '$$q_V=\\Delta U$$'
    },
    {
      d: 'M',
      q_en: 'What are the signs of w for compression and expansion?',
      q_hi: 'संपीड़न व प्रसार में w का चिह्न क्या होता है?',
      a_en: 'Compression: w positive (work done on system). Expansion: w negative (work done by system).',
      a_hi: 'संपीड़न: w धनात्मक (निकाय पर कार्य)। प्रसार: w ऋणात्मक (निकाय द्वारा कार्य)।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'How does the physics convention differ from IUPAC?',
      q_hi: 'भौतिकी परिपाटी IUPAC से कैसे भिन्न है?',
      a_en: 'Physics takes w as work done BY the system, so ΔU = q - w; IUPAC uses ΔU = q + w.',
      a_hi: 'भौतिकी में w निकाय द्वारा किया गया कार्य है, अतः ΔU = q − w; IUPAC में ΔU = q + w।',
      formula: '$$\\text{Physics: }\\Delta U=q-w$$'
    },
    {
      d: 'M',
      q_en: 'Convert: 1 L atm in joules and calories.',
      q_hi: '1 L atm को जूल व कैलोरी में बदलिए।',
      a_en: '1 L atm = 101.3 J = 24.2 cal.',
      a_hi: '1 L atm = 101.3 J = 24.2 cal।',
      formula: '$$1\\text{ L atm}=101.3\\text{ J}=24.2\\text{ cal}$$'
    },
    {
      d: 'M',
      q_en: 'A system absorbs 50 J of heat and does 30 J of work. Find ΔU.',
      q_hi: 'एक निकाय 50 J ऊष्मा अवशोषित करता है व 30 J कार्य करता है। ΔU ज्ञात कीजिए।',
      a_en: 'q = +50 J, w = -30 J, so ΔU = +20 J.',
      a_hi: 'q = +50 J, w = −30 J, अतः ΔU = +20 J।',
      formula: '$$\\Delta U=50-30=+20\\text{ J}$$'
    },
    {
      d: 'M',
      q_en: 'A gas releases 100 J of heat while 40 J of work is done on it. Find ΔU.',
      q_hi: 'एक गैस 100 J ऊष्मा मुक्त करती है जबकि उस पर 40 J कार्य किया जाता है। ΔU ज्ञात कीजिए।',
      a_en: 'q = -100 J, w = +40 J, so ΔU = -60 J.',
      a_hi: 'q = −100 J, w = +40 J, अतः ΔU = −60 J।',
      formula: '$$\\Delta U=-100+40=-60\\text{ J}$$'
    },
    {
      d: 'H',
      q_en: 'A gas expands from 2 L to 5 L against 1 atm. Find w in joules.',
      q_hi: 'एक गैस 1 atm के विरुद्ध 2 L से 5 L तक फैलती है। w जूल में ज्ञात कीजिए।',
      a_en: 'w = -1 x 3 = -3 L atm = -3 x 101.3 = -304 J (work done by the gas).',
      a_hi: 'w = −1 × 3 = −3 L atm = −3 × 101.3 = −304 J (गैस द्वारा कार्य)।',
      formula: '$$w=-P\\Delta V=-3\\text{ L atm}\\approx-304\\text{ J}$$'
    },
    {
      d: 'H',
      q_en: 'Why is R = 8.314 J/(mol K) = 0.0821 L atm/(mol K)?',
      q_hi: 'R = 8.314 J/(mol K) = 0.0821 L atm/(mol K) क्यों है?',
      a_en: 'Same constant in different units: 8.314 / 0.0821 = 101.3, the L atm to joule factor.',
      a_hi: 'वही नियतांक भिन्न मात्रकों में: 8.314 / 0.0821 = 101.3, जो L atm से जूल का गुणक है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why is ΔU = 0 for an ideal gas whenever T is constant?',
      q_hi: 'आदर्श गैस के लिए T स्थिर होने पर ΔU = 0 क्यों होता है?',
      a_en: 'No intermolecular forces: U depends only on temperature (Joule\'s finding).',
      a_hi: 'अंतराणुक बल नहीं होते: U केवल ताप पर निर्भर करती है (जूल का निष्कर्ष)।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Give the formula for ΔU of an ideal gas in any process.',
      q_hi: 'किसी भी प्रक्रम में आदर्श गैस के ΔU का सूत्र दीजिए।',
      a_en: 'ΔU = n C_V ΔT, whatever the path, because U depends only on T.',
      a_hi: 'ΔU = n C_V ΔT, पथ कुछ भी हो, क्योंकि U केवल T पर निर्भर है।',
      formula: '$$\\Delta U=nC_V\\Delta T$$'
    },
    {
      d: 'H',
      q_en: 'Can the absolute internal energy of a system be measured?',
      q_hi: 'क्या निकाय की निरपेक्ष आंतरिक ऊर्जा मापी जा सकती है?',
      a_en: 'No; only changes (ΔU) are measurable, since all molecular energy contributions cannot be summed.',
      a_hi: 'नहीं; केवल परिवर्तन (ΔU) मापे जा सकते हैं, क्योंकि सभी आणविक ऊर्जाओं का योग संभव नहीं।',
      formula: ''
    }
  ],

  /* ---------- SET 4: Pressure-Volume Work: Reversible, Irreversible & Free Expansion ---------- */
  4: [
    {
      d: 'E',
      q_en: 'Write the work formula for irreversible expansion.',
      q_hi: 'अनुत्क्रमणीय प्रसार के लिए कार्य का सूत्र लिखिए।',
      a_en: 'w = -P_ext ΔV, where P_ext is the constant external pressure.',
      a_hi: 'w = −P_ext ΔV, जहाँ P_ext स्थिर बाह्य दाब है।',
      formula: '$$w=-P_{\\text{ext}}\\Delta V$$'
    },
    {
      d: 'E',
      q_en: 'Write the work formula for reversible isothermal expansion.',
      q_hi: 'उत्क्रमणीय समतापी प्रसार के लिए कार्य का सूत्र लिखिए।',
      a_en: 'w_rev = -2.303 nRT log(V2/V1) = -2.303 nRT log(P1/P2).',
      a_hi: 'w_rev = −2.303 nRT log(V₂/V₁) = −2.303 nRT log(P₁/P₂)।',
      formula: '$$w_{\\text{rev}}=-2.303\\,nRT\\log\\frac{V_2}{V_1}$$'
    },
    {
      d: 'E',
      q_en: 'What is work in free expansion into a vacuum?',
      q_hi: 'निर्वात में मुक्त प्रसार में कार्य कितना होता है?',
      a_en: 'Zero, because P_ext = 0.',
      a_hi: 'शून्य, क्योंकि P_ext = 0।',
      formula: '$$w=0\\ (P_{\\text{ext}}=0)$$'
    },
    {
      d: 'E',
      q_en: 'Give the work formula for an adiabatic process.',
      q_hi: 'रुद्धोष्म प्रक्रम के लिए कार्य का सूत्र दीजिए।',
      a_en: 'Since q = 0, w = ΔU = n C_V ΔT.',
      a_hi: 'q = 0 होने से w = ΔU = n C_V ΔT।',
      formula: '$$w=nC_V\\Delta T$$'
    },
    {
      d: 'E',
      q_en: 'What is a reversible process?',
      q_hi: 'उत्क्रमणीय प्रक्रम (reversible process) क्या है?',
      a_en: 'One carried out infinitely slowly, with the system always in equilibrium with surroundings; it gives maximum work.',
      a_hi: 'अनंत धीमे चलने वाला प्रक्रम जिसमें निकाय सदैव परिवेश से साम्य में रहता है; यह अधिकतम कार्य देता है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'In expansion, why does a reversible path do more work than an irreversible one?',
      q_hi: 'प्रसार में उत्क्रमणीय पथ अनुत्क्रमणीय से अधिक कार्य क्यों करता है?',
      a_en: 'In reversible expansion P_ext stays almost equal to P_gas, so the area under the P-V curve is largest.',
      a_hi: 'उत्क्रमणीय प्रसार में P_ext लगभग P_gas के बराबर रहता है, अतः P–V वक्र के नीचे क्षेत्रफल अधिकतम होता है।',
      formula: '$$\\lvert w_{\\text{rev}}\\rvert>\\lvert w_{\\text{irrev}}\\rvert$$'
    },
    {
      d: 'M',
      q_en: 'In compression, which path needs more work: reversible or irreversible?',
      q_hi: 'संपीड़न में किस पथ में अधिक कार्य चाहिए: उत्क्रमणीय या अनुत्क्रमणीय?',
      a_en: 'Irreversible: it needs a large constant P_ext throughout, so more work is done on the gas than in reversible compression.',
      a_hi: 'अनुत्क्रमणीय: पूरे समय बड़ा P_ext चाहिए, अतः उत्क्रमणीय संपीड़न से अधिक कार्य गैस पर होता है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What happens to q and ΔU in isothermal free expansion of an ideal gas?',
      q_hi: 'आदर्श गैस के समतापी मुक्त प्रसार में q व ΔU का क्या होता है?',
      a_en: 'w = 0 and ΔT = 0, so ΔU = 0 and q = 0; the process is both isothermal and adiabatic.',
      a_hi: 'w = 0 व ΔT = 0, अतः ΔU = 0 तथा q = 0; प्रक्रम समतापी भी है और रुद्धोष्म भी।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Write the adiabatic work in terms of γ.',
      q_hi: 'γ के पदों में रुद्धोष्म कार्य लिखिए।',
      a_en: 'w = nR(T2 - T1)/(γ - 1), obtained from C_V = R/(γ - 1).',
      a_hi: 'w = nR(T₂ − T₁)/(γ − 1), जो C_V = R/(γ − 1) से प्राप्त होता है।',
      formula: '$$w=\\frac{nR(T_2-T_1)}{\\gamma-1}$$'
    },
    {
      d: 'M',
      q_en: 'Compare the slopes of adiabatic and isothermal curves on a P-V graph.',
      q_hi: 'P–V आलेख पर रुद्धोष्म व समतापी वक्रों के ढाल की तुलना कीजिए।',
      a_en: 'Adiabatic PV^γ = constant is steeper; its slope is γ times the isothermal slope (-P/V).',
      a_hi: 'रुद्धोष्म PV^γ = स्थिरांक अधिक तीव्र है; इसका ढाल समतापी ढाल (−P/V) का γ गुना है।',
      formula: '$$PV^\\gamma=\\text{const}$$'
    },
    {
      d: 'H',
      q_en: 'Find w when 1 mol of ideal gas expands reversibly and isothermally from 1 L to 10 L at 300 K.',
      q_hi: '1 mol आदर्श गैस 300 K पर 1 L से 10 L तक उत्क्रमणीय समतापी फैलती है। w ज्ञात कीजिए।',
      a_en: 'w = -2.303 x 8.314 x 300 x log 10 = -5744 J, about -5.74 kJ.',
      a_hi: 'w = −2.303 × 8.314 × 300 × log 10 = −5744 J, लगभग −5.74 kJ।',
      formula: '$$w=-2.303\\,(8.314)(300)\\log10\\approx-5744\\text{ J}$$'
    },
    {
      d: 'H',
      q_en: 'Find w for 1 mol gas expanding from 1 L to 10 L against a constant 1 atm.',
      q_hi: '1 mol गैस के 1 atm स्थिर दाब के विरुद्ध 1 L से 10 L प्रसार में w ज्ञात कीजिए।',
      a_en: 'w = -1 x 9 = -9 L atm = -912 J, smaller in magnitude than the reversible -5744 J.',
      a_hi: 'w = −1 × 9 = −9 L atm = −912 J, जो उत्क्रमणीय −5744 J से परिमाण में कम है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why does a gas cool during adiabatic expansion?',
      q_hi: 'रुद्धोष्म प्रसार में गैस ठंडी क्यों होती है?',
      a_en: 'q = 0 and w < 0, so ΔU = w < 0: the gas spends its own internal energy, and T falls.',
      a_hi: 'q = 0 व w < 0, अतः ΔU = w < 0: गैस अपनी ही आंतरिक ऊर्जा खर्च करती है, T घटता है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Does a real gas cool on free expansion?',
      q_hi: 'क्या वास्तविक गैस मुक्त प्रसार में ठंडी होती है?',
      a_en: 'Slightly, yes: molecules do internal work against attractive forces, unlike an ideal gas (ΔT = 0).',
      a_hi: 'हाँ, थोड़ा: अणु आकर्षण बलों के विरुद्ध आंतरिक कार्य करते हैं, आदर्श गैस के विपरीत (ΔT = 0)।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'If a monoatomic ideal gas doubles its volume reversibly and adiabatically, find T2/T1.',
      q_hi: 'एकपरमाणुक आदर्श गैस का आयतन उत्क्रमणीय रुद्धोष्म रूप से दोगुना होता है। T₂/T₁ ज्ञात कीजिए।',
      a_en: 'T V^(γ-1) = constant with γ = 5/3: T2/T1 = (1/2)^(2/3) = 0.63.',
      a_hi: 'T V^(γ−1) = स्थिरांक, γ = 5/3 के साथ: T₂/T₁ = (1/2)^(2/3) = 0.63।',
      formula: '$$T_1V_1^{\\gamma-1}=T_2V_2^{\\gamma-1}$$'
    }
  ],

  /* ---------- SET 5: Enthalpy, ΔH vs ΔU & Δn_g Calculations ---------- */
  5: [
    {
      d: 'E',
      q_en: 'Define enthalpy.',
      q_hi: 'एन्थैल्पी (enthalpy) परिभाषित कीजिए।',
      a_en: 'H = U + PV; it is a state function and an extensive property.',
      a_hi: 'H = U + PV; यह अवस्था फलन व मात्रात्मक गुण है।',
      formula: '$$H=U+PV$$'
    },
    {
      d: 'E',
      q_en: 'What does heat at constant pressure equal?',
      q_hi: 'स्थिर दाब पर ऊष्मा किसके बराबर होती है?',
      a_en: 'The enthalpy change, q_P = ΔH.',
      a_hi: 'एन्थैल्पी परिवर्तन के, q_P = ΔH।',
      formula: '$$q_P=\\Delta H$$'
    },
    {
      d: 'E',
      q_en: 'Distinguish exothermic and endothermic reactions by ΔH.',
      q_hi: 'ΔH के आधार पर ऊष्माक्षेपी व ऊष्माशोषी अभिक्रियाओं में अंतर बताइए।',
      a_en: 'Exothermic: ΔH < 0 (heat released). Endothermic: ΔH > 0 (heat absorbed).',
      a_hi: 'ऊष्माक्षेपी: ΔH < 0 (ऊष्मा मुक्त)। ऊष्माशोषी: ΔH > 0 (ऊष्मा अवशोषित)।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Write the relation between ΔH and ΔU for gaseous reactions.',
      q_hi: 'गैसीय अभिक्रियाओं में ΔH व ΔU का संबंध लिखिए।',
      a_en: 'ΔH = ΔU + Δn_g RT.',
      a_hi: 'ΔH = ΔU + Δn_g RT।',
      formula: '$$\\Delta H=\\Delta U+\\Delta n_gRT$$'
    },
    {
      d: 'E',
      q_en: 'How is Δn_g calculated?',
      q_hi: 'Δn_g कैसे ज्ञात करते हैं?',
      a_en: 'Moles of gaseous products minus moles of gaseous reactants; solids and liquids are ignored.',
      a_hi: 'गैसीय उत्पादों के मोल − गैसीय अभिकारकों के मोल; ठोस व द्रव छोड़ दिए जाते हैं।',
      formula: '$$\\Delta n_g=n_{g}(\\text{products})-n_{g}(\\text{reactants})$$'
    },
    {
      d: 'M',
      q_en: 'When is ΔH = ΔU? Give an example.',
      q_hi: 'ΔH = ΔU कब होता है? उदाहरण दीजिए।',
      a_en: 'When Δn_g = 0, e.g. H2(g) + I2(g) → 2HI(g).',
      a_hi: 'जब Δn_g = 0, जैसे H₂(g) + I₂(g) → 2HI(g)।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Is ΔH greater or smaller than ΔU for PCl5 → PCl3 + Cl2?',
      q_hi: 'PCl₅ → PCl₃ + Cl₂ के लिए ΔH, ΔU से अधिक है या कम?',
      a_en: 'Δn_g = +1, so ΔH > ΔU (by RT).',
      a_hi: 'Δn_g = +1, अतः ΔH > ΔU (RT से)।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Is ΔH greater or smaller than ΔU for N2 + 3H2 → 2NH3?',
      q_hi: 'N₂ + 3H₂ → 2NH₃ के लिए ΔH, ΔU से अधिक है या कम?',
      a_en: 'Δn_g = 2 - 4 = -2, so ΔH < ΔU.',
      a_hi: 'Δn_g = 2 − 4 = −2, अतः ΔH < ΔU।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Find Δn_g for CH4(g) + 2O2(g) → CO2(g) + 2H2O(l).',
      q_hi: 'CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l) के लिए Δn_g ज्ञात कीजिए।',
      a_en: 'Δn_g = 1 - 3 = -2, since liquid water is not counted.',
      a_hi: 'Δn_g = 1 − 3 = −2, क्योंकि द्रव जल नहीं गिना जाता।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What is the relation of ΔH and ΔU for reactions of only solids and liquids?',
      q_hi: 'केवल ठोस व द्रव वाली अभिक्रियाओं में ΔH व ΔU का संबंध क्या है?',
      a_en: 'ΔH ≈ ΔU, because ΔV and hence PΔV are negligible.',
      a_hi: 'ΔH ≈ ΔU, क्योंकि ΔV तथा PΔV नगण्य होते हैं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Compare ΔH and ΔU for C(s) + O2(g) → CO2(g).',
      q_hi: 'C(s) + O₂(g) → CO₂(g) के लिए ΔH व ΔU की तुलना कीजिए।',
      a_en: 'Δn_g = 1 - 1 = 0, so ΔH = ΔU.',
      a_hi: 'Δn_g = 1 − 1 = 0, अतः ΔH = ΔU।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Compare ΔH and ΔU for 2C(s) + O2(g) → 2CO(g).',
      q_hi: '2C(s) + O₂(g) → 2CO(g) के लिए ΔH व ΔU की तुलना कीजिए।',
      a_en: 'Δn_g = 2 - 1 = +1, so ΔH > ΔU.',
      a_hi: 'Δn_g = 2 − 1 = +1, अतः ΔH > ΔU।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Find ΔH - ΔU for N2 + 3H2 → 2NH3 at 298 K.',
      q_hi: '298 K पर N₂ + 3H₂ → 2NH₃ के लिए ΔH − ΔU ज्ञात कीजिए।',
      a_en: 'Δn_g RT = (-2)(8.314)(298) = -4955 J, about -4.96 kJ.',
      a_hi: 'Δn_g RT = (−2)(8.314)(298) = −4955 J, लगभग −4.96 kJ।',
      formula: '$$-2(8.314)(298)\\approx-4955\\text{ J}$$'
    },
    {
      d: 'H',
      q_en: 'Trap: find Δn_g for CH4(g) + 2O2(g) → CO2(g) + 2H2O(g).',
      q_hi: 'जाल: CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g) के लिए Δn_g ज्ञात कीजिए।',
      a_en: 'With water as vapour, Δn_g = 3 - 3 = 0, so ΔH = ΔU (unlike the liquid-water case).',
      a_hi: 'जल बाष्प होने पर Δn_g = 3 − 3 = 0, अतः ΔH = ΔU (द्रव जल वाले मामले से भिन्न)।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'CH4 combustion has ΔH = -890 kJ at 298 K (liquid water). Find ΔU.',
      q_hi: 'CH₄ दहन के लिए 298 K पर ΔH = −890 kJ है (द्रव जल)। ΔU ज्ञात कीजिए।',
      a_en: 'ΔU = ΔH - Δn_g RT = -890 + 4.96 = -885 kJ.',
      a_hi: 'ΔU = ΔH − Δn_g RT = −890 + 4.96 = −885 kJ।',
      formula: '$$\\Delta U=-890-(-2)(8.314)(298)\\times10^{-3}\\approx-885\\text{ kJ}$$'
    }
  ],

  /* ---------- SET 6: Extensive vs Intensive Properties & Heat Capacity (C, Cp, Cv) ---------- */
  6: [
    {
      d: 'E',
      q_en: 'What are extensive properties? Give examples.',
      q_hi: 'मात्रात्मक गुण (extensive properties) क्या हैं? उदाहरण दीजिए।',
      a_en: 'Properties that depend on the amount of matter: m, V, n, U, H, S, G and heat capacity C.',
      a_hi: 'वे गुण जो पदार्थ की मात्रा पर निर्भर हैं: m, V, n, U, H, S, G तथा ऊष्मा धारिता C।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What are intensive properties? Give examples.',
      q_hi: 'गहन गुण (intensive properties) क्या हैं? उदाहरण दीजिए।',
      a_en: 'Properties independent of the amount: T, P, density, concentration, viscosity, surface tension, refractive index.',
      a_hi: 'मात्रा से स्वतंत्र गुण: T, P, घनत्व, सांद्रता, श्यानता, पृष्ठ तनाव, अपवर्तनांक।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What is the ratio of two extensive properties?',
      q_hi: 'दो मात्रात्मक गुणों का अनुपात क्या होता है?',
      a_en: 'An intensive property, e.g. density = mass / volume and molar volume = V / n.',
      a_hi: 'एक गहन गुण, जैसे घनत्व = द्रव्यमान / आयतन तथा मोलर आयतन = V / n।',
      formula: '$$\\rho=\\frac{m}{V}$$'
    },
    {
      d: 'E',
      q_en: 'How is heat related to temperature change?',
      q_hi: 'ऊष्मा का ताप परिवर्तन से क्या संबंध है?',
      a_en: 'q = C ΔT = m c ΔT = n C_m ΔT.',
      a_hi: 'q = C ΔT = m c ΔT = n C_m ΔT।',
      formula: '$$q=C\\Delta T=mc\\Delta T=nC_m\\Delta T$$'
    },
    {
      d: 'E',
      q_en: 'State Mayer\'s relation.',
      q_hi: 'मेयर का संबंध (Mayer\'s relation) लिखिए।',
      a_en: 'For one mole of an ideal gas, C_p - C_v = R (and C_p - C_v = nR for n moles).',
      a_hi: 'एक मोल आदर्श गैस के लिए C_p − C_v = R (n मोल के लिए C_p − C_v = nR)।',
      formula: '$$C_p-C_v=R$$'
    },
    {
      d: 'M',
      q_en: 'Which of C, c and C_m are extensive or intensive?',
      q_hi: 'C, c व C_m में कौन मात्रात्मक व कौन गहन हैं?',
      a_en: 'Heat capacity C is extensive; specific heat c and molar heat capacity C_m are intensive.',
      a_hi: 'ऊष्मा धारिता C मात्रात्मक है; विशिष्ट ऊष्मा c व मोलर ऊष्मा धारिता C_m गहन हैं।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Give γ = C_p / C_v for monoatomic, diatomic and polyatomic gases.',
      q_hi: 'एकपरमाणुक, द्विपरमाणुक व बहुपरमाणुक गैसों के लिए γ = C_p / C_v दीजिए।',
      a_en: 'Monoatomic 5/3 = 1.67, diatomic 7/5 = 1.4, polyatomic 4/3 = 1.33.',
      a_hi: 'एकपरमाणुक 5/3 = 1.67, द्विपरमाणुक 7/5 = 1.4, बहुपरमाणुक 4/3 = 1.33।',
      formula: '$$\\gamma=\\frac{5}{3},\\ \\frac{7}{5},\\ \\frac{4}{3}$$'
    },
    {
      d: 'M',
      q_en: 'Give C_v and C_p of a monoatomic ideal gas.',
      q_hi: 'एकपरमाणुक आदर्श गैस के C_v व C_p दीजिए।',
      a_en: 'C_v = 3R/2 and C_p = 5R/2.',
      a_hi: 'C_v = 3R/2 तथा C_p = 5R/2।',
      formula: '$$C_v=\\frac{3R}{2},\\ C_p=\\frac{5R}{2}$$'
    },
    {
      d: 'M',
      q_en: 'Find the heat for 2 mol of a monoatomic ideal gas heated by 10 K at constant pressure.',
      q_hi: '2 mol एकपरमाणुक आदर्श गैस को स्थिर दाब पर 10 K गर्म करने हेतु ऊष्मा ज्ञात कीजिए।',
      a_en: 'q_P = n C_p ΔT = 2 x (5/2)(8.314) x 10 = 416 J.',
      a_hi: 'q_P = n C_p ΔT = 2 × (5/2)(8.314) × 10 = 416 J।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Give C_v and C_p for a diatomic ideal gas (translation and rotation only).',
      q_hi: 'द्विपरमाणुक आदर्श गैस के C_v व C_p दीजिए (केवल स्थानांतरण व घूर्णन)।',
      a_en: 'C_v = 5R/2 and C_p = 7R/2, so γ = 1.4.',
      a_hi: 'C_v = 5R/2 तथा C_p = 7R/2, अतः γ = 1.4।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why is the heat capacity infinite for an isothermal process?',
      q_hi: 'समतापी प्रक्रम में ऊष्मा धारिता अनंत क्यों होती है?',
      a_en: 'Heat is exchanged while ΔT = 0, so C = q / ΔT tends to infinity.',
      a_hi: 'ΔT = 0 रहते हुए ऊष्मा का आदान-प्रदान होता है, अतः C = q / ΔT अनंत की ओर जाता है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why is the heat capacity zero for an adiabatic process?',
      q_hi: 'रुद्धोष्म प्रक्रम में ऊष्मा धारिता शून्य क्यों होती है?',
      a_en: 'q = 0 while ΔT is non-zero, so C = q / ΔT = 0.',
      a_hi: 'ΔT शून्येतर होने पर q = 0, अतः C = q / ΔT = 0।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'How much heat warms 100 g of water by 10 K (c = 4.18 J g^-1 K^-1)?',
      q_hi: '100 g जल को 10 K गर्म करने हेतु कितनी ऊष्मा चाहिए (c = 4.18 J g⁻¹ K⁻¹)?',
      a_en: 'q = m c ΔT = 100 x 4.18 x 10 = 4180 J.',
      a_hi: 'q = m c ΔT = 100 × 4.18 × 10 = 4180 J।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Is ΔH of a reaction extensive? Which related quantity is intensive?',
      q_hi: 'क्या अभिक्रिया का ΔH मात्रात्मक है? कौन-सी संबंधित राशि गहन है?',
      a_en: 'ΔH scales with moles reacted (extensive); molar enthalpy ΔH_m (per mole) is intensive.',
      a_hi: 'ΔH अभिक्रिया के मोलों के साथ बदलती है (मात्रात्मक); मोलर एन्थैल्पी ΔH_m (प्रति मोल) गहन है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Which is extensive, ΔG or E°cell, and which is intensive?',
      q_hi: 'ΔG और E°cell में कौन मात्रात्मक है व कौन गहन?',
      a_en: 'ΔG is extensive (depends on n); E°cell is intensive (independent of the amount).',
      a_hi: 'ΔG मात्रात्मक है (n पर निर्भर); E°cell गहन है (मात्रा से स्वतंत्र)।',
      formula: '$$\\Delta G=-nFE^\\circ$$'
    }
  ],

  /* ---------- SET 7: Calorimetry: Bomb Calorimeter (ΔU) & Coffee-Cup Calorimeter (ΔH) ---------- */
  7: [
    {
      d: 'E',
      q_en: 'What does a bomb calorimeter measure?',
      q_hi: 'बम कैलोरीमीटर क्या मापता है?',
      a_en: 'Heat at constant volume, q_V = ΔU, usually for combustion reactions.',
      a_hi: 'स्थिर आयतन पर ऊष्मा, q_V = ΔU, प्रायः दहन अभिक्रियाओं के लिए।',
      formula: '$$q_V=\\Delta U$$'
    },
    {
      d: 'E',
      q_en: 'Why is w = 0 in a bomb calorimeter?',
      q_hi: 'बम कैलोरीमीटर में w = 0 क्यों होता है?',
      a_en: 'The sealed steel bomb has fixed volume, so ΔV = 0 and no PV work is done.',
      a_hi: 'सीलबंद इस्पात बम का आयतन स्थिर है, अतः ΔV = 0 और PV कार्य नहीं होता।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What does a coffee-cup calorimeter measure?',
      q_hi: 'कॉफ़ी-कप कैलोरीमीटर क्या मापता है?',
      a_en: 'Heat at constant atmospheric pressure, q_P = ΔH.',
      a_hi: 'स्थिर वायुमंडलीय दाब पर ऊष्मा, q_P = ΔH।',
      formula: '$$q_P=\\Delta H$$'
    },
    {
      d: 'E',
      q_en: 'What is the calorimeter constant C_cal?',
      q_hi: 'कैलोरीमीटर स्थिरांक C_cal क्या है?',
      a_en: 'Heat needed to raise the temperature of the whole calorimeter (bomb + water + fittings) by 1 K.',
      a_hi: 'पूरे कैलोरीमीटर (बम + जल + उपकरण) का ताप 1 K बढ़ाने हेतु आवश्यक ऊष्मा।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Why is ΔU of combustion in a bomb calorimeter negative?',
      q_hi: 'बम कैलोरीमीटर में दहन का ΔU ऋणात्मक क्यों होता है?',
      a_en: 'Combustion is exothermic: the system releases heat, raising the calorimeter temperature.',
      a_hi: 'दहन ऊष्माक्षेपी है: निकाय ऊष्मा मुक्त करता है, जिससे कैलोरीमीटर का ताप बढ़ता है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Write the formula for ΔU of combustion from bomb calorimeter data.',
      q_hi: 'बम कैलोरीमीटर आँकड़ों से दहन के ΔU का सूत्र लिखिए।',
      a_en: 'ΔU = -C_cal ΔT x (M / w), where M is molar mass and w the mass burnt.',
      a_hi: 'ΔU = −C_cal ΔT × (M / w), जहाँ M मोलर द्रव्यमान और w जलाया गया द्रव्यमान है।',
      formula: '$$\\Delta U=-C_{\\text{cal}}\\Delta T\\times\\frac{M}{w}$$'
    },
    {
      d: 'M',
      q_en: 'How do you obtain ΔH from the bomb calorimeter ΔU?',
      q_hi: 'बम कैलोरीमीटर के ΔU से ΔH कैसे प्राप्त करते हैं?',
      a_en: 'Use ΔH = ΔU + Δn_g RT, with Δn_g from the balanced combustion equation.',
      a_hi: 'संतुलित दहन समीकरण से Δn_g लेकर ΔH = ΔU + Δn_g RT प्रयोग करते हैं।',
      formula: '$$\\Delta H=\\Delta U+\\Delta n_gRT$$'
    },
    {
      d: 'M',
      q_en: '1 g of a compound (M = 100 g/mol) raises a bomb calorimeter (C = 5 kJ/K) by 2 K. Find ΔU.',
      q_hi: '1 g यौगिक (M = 100 g/mol) बम कैलोरीमीटर (C = 5 kJ/K) का ताप 2 K बढ़ाता है। ΔU ज्ञात कीजिए।',
      a_en: 'Heat per gram = 10 kJ, so ΔU = -10 x 100 = -1000 kJ/mol.',
      a_hi: 'प्रति ग्राम ऊष्मा = 10 kJ, अतः ΔU = −10 × 100 = −1000 kJ/mol।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Why is the bomb filled with excess oxygen at high pressure?',
      q_hi: 'बम में उच्च दाब पर अधिक ऑक्सीजन क्यों भरी जाती है?',
      a_en: 'To ensure complete and rapid combustion of the sample.',
      a_hi: 'नमूने का पूर्ण व तीव्र दहन सुनिश्चित करने के लिए।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Give one example reaction studied in a coffee-cup calorimeter.',
      q_hi: 'कॉफ़ी-कप कैलोरीमीटर में अध्ययन की जाने वाली एक अभिक्रिया बताइए।',
      a_en: 'Neutralisation or dissolution in water, open to the atmosphere at constant pressure.',
      a_hi: 'वायुमंडल के लिए खुले, स्थिर दाब पर जल में उदासीनीकरण या विलयन।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'For C6H6(l) + 15/2 O2(g) → 6CO2(g) + 3H2O(l), compare ΔH and ΔU.',
      q_hi: 'C₆H₆(l) + 15/2 O₂(g) → 6CO₂(g) + 3H₂O(l) के लिए ΔH व ΔU की तुलना कीजिए।',
      a_en: 'Δn_g = 6 - 7.5 = -1.5, so ΔH is more negative than ΔU by 1.5 RT.',
      a_hi: 'Δn_g = 6 − 7.5 = −1.5, अतः ΔH, ΔU से 1.5 RT अधिक ऋणात्मक है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'For C6H12O6(s) + 6O2(g) → 6CO2(g) + 6H2O(l), compare ΔH and ΔU.',
      q_hi: 'C₆H₁₂O₆(s) + 6O₂(g) → 6CO₂(g) + 6H₂O(l) के लिए ΔH व ΔU की तुलना कीजिए।',
      a_en: 'Δn_g = 6 - 6 = 0, so ΔH = ΔU.',
      a_hi: 'Δn_g = 6 − 6 = 0, अतः ΔH = ΔU।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'How is C_cal found experimentally?',
      q_hi: 'C_cal प्रयोग द्वारा कैसे ज्ञात किया जाता है?',
      a_en: 'By burning a standard such as benzoic acid, whose ΔU of combustion (about -3226 kJ/mol) is known.',
      a_hi: 'बेंज़ोइक अम्ल जैसे मानक को जलाकर, जिसका दहन ΔU (लगभग −3226 kJ/mol) ज्ञात है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'In a bomb experiment, how is the total heat absorbed calculated?',
      q_hi: 'बम प्रयोग में अवशोषित कुल ऊष्मा कैसे परिकलित की जाती है?',
      a_en: 'q = (C_water + C_bomb) ΔT, since both the water and the steel bomb heat up.',
      a_hi: 'q = (C_जल + C_बम) ΔT, क्योंकि जल व इस्पात बम दोनों गर्म होते हैं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Calorimeter temperature rises. What are the signs of q_calorimeter and q_reaction?',
      q_hi: 'कैलोरीमीटर का ताप बढ़ता है। q_कैलोरीमीटर व q_अभिक्रिया के चिह्न क्या हैं?',
      a_en: 'q_calorimeter is positive, but q_reaction is negative (exothermic): q_rxn = -q_cal.',
      a_hi: 'q_कैलोरीमीटर धनात्मक है, पर q_अभिक्रिया ऋणात्मक (ऊष्माक्षेपी): q_अभि = −q_कै।',
      formula: '$$q_{\\text{rxn}}=-q_{\\text{cal}}$$'
    }
  ],

  /* ---------- SET 8: Thermochemical Equations & Standard Enthalpy of Formation ---------- */
  8: [
    {
      d: 'E',
      q_en: 'What is the standard state?',
      q_hi: 'मानक अवस्था (standard state) क्या है?',
      a_en: 'The pure substance at 1 bar pressure and a specified temperature, usually 298 K.',
      a_hi: 'शुद्ध पदार्थ 1 bar दाब व निर्दिष्ट ताप (प्रायः 298 K) पर।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Define standard enthalpy of formation.',
      q_hi: 'मानक विरचन एन्थैल्पी परिभाषित कीजिए।',
      a_en: 'Enthalpy change when 1 mole of a compound forms from its elements in their reference states at 1 bar.',
      a_hi: '1 bar पर तत्वों की संदर्भ अवस्थाओं से 1 मोल यौगिक बनने पर एन्थैल्पी परिवर्तन।',
      formula: '$$\\Delta_fH^\\circ$$'
    },
    {
      d: 'E',
      q_en: 'What is Δ_fH° of an element in its reference state?',
      q_hi: 'संदर्भ अवस्था में तत्व का Δ_fH° क्या है?',
      a_en: 'Zero, by definition.',
      a_hi: 'परिभाषा से शून्य।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Name the reference states of C, S, Br and I.',
      q_hi: 'C, S, Br व I की संदर्भ अवस्थाएँ बताइए।',
      a_en: 'C(graphite), S(rhombic), Br2(l) and I2(s); H2 and O2 are gases.',
      a_hi: 'C(ग्रेफ़ाइट), S(विषमलंबाक्ष), Br₂(l) तथा I₂(s); H₂ व O₂ गैसें हैं।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Write the formula for the standard enthalpy of reaction from Δ_fH°.',
      q_hi: 'Δ_fH° से मानक अभिक्रिया एन्थैल्पी का सूत्र लिखिए।',
      a_en: 'Δ_rH° = sum of Δ_fH° (products) - sum of Δ_fH° (reactants), with stoichiometric coefficients.',
      a_hi: 'Δ_rH° = Σ Δ_fH° (उत्पाद) − Σ Δ_fH° (अभिकारक), रससमीकरणमितीय गुणांकों सहित।',
      formula: '$$\\Delta_rH^\\circ=\\sum\\nu_p\\Delta_fH^\\circ(\\text{P})-\\sum\\nu_r\\Delta_fH^\\circ(\\text{R})$$'
    },
    {
      d: 'M',
      q_en: 'What happens to ΔH when a thermochemical equation is reversed?',
      q_hi: 'थर्मोरासायनिक समीकरण उलटने पर ΔH का क्या होता है?',
      a_en: 'Its sign reverses, e.g. +x becomes -x.',
      a_hi: 'इसका चिह्न उलट जाता है, जैसे +x से −x।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What happens to ΔH when an equation is multiplied by n?',
      q_hi: 'समीकरण को n से गुणा करने पर ΔH का क्या होता है?',
      a_en: 'ΔH is also multiplied by n, because it is extensive.',
      a_hi: 'ΔH भी n से गुणित हो जाता है, क्योंकि यह मात्रात्मक गुण है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What is Δ_fH° of diamond? Why is it non-zero?',
      q_hi: 'हीरे का Δ_fH° क्या है? यह शून्य क्यों नहीं है?',
      a_en: 'About +1.9 kJ/mol: graphite, not diamond, is the reference state.',
      a_hi: 'लगभग +1.9 kJ/mol: संदर्भ अवस्था ग्रेफ़ाइट है, हीरा नहीं।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What is Δ_fH° of monoclinic sulfur?',
      q_hi: 'एकनताक्ष गंधक का Δ_fH° क्या है?',
      a_en: 'About +0.33 kJ/mol, since rhombic sulfur is the reference state.',
      a_hi: 'लगभग +0.33 kJ/mol, क्योंकि संदर्भ अवस्था विषमलंबाक्ष गंधक है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Why is Δ_fH° of Br2(g) not zero?',
      q_hi: 'Br₂(g) का Δ_fH° शून्य क्यों नहीं है?',
      a_en: 'Bromine\'s reference state is the liquid; Br2(g) has Δ_fH° = +30.9 kJ/mol.',
      a_hi: 'ब्रोमीन की संदर्भ अवस्था द्रव है; Br₂(g) का Δ_fH° = +30.9 kJ/mol है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Is the standard pressure 1 atm or 1 bar?',
      q_hi: 'क्या मानक दाब 1 atm है या 1 bar?',
      a_en: '1 bar (10^5 Pa), per current IUPAC; 1 atm = 1.013 bar.',
      a_hi: '1 bar (10⁵ Pa), वर्तमान IUPAC के अनुसार; 1 atm = 1.013 bar।',
      formula: '$$1\\text{ bar}=10^5\\text{ Pa}$$'
    },
    {
      d: 'H',
      q_en: 'White phosphorus is taken as zero; is it the most stable form?',
      q_hi: 'श्वेत फॉस्फोरस को शून्य लिया जाता है; क्या यह सर्वाधिक स्थायी रूप है?',
      a_en: 'No, black P is most stable thermodynamically; white P is the reference by convention.',
      a_hi: 'नहीं, ऊष्मागतिकीय रूप से काला P सर्वाधिक स्थायी है; परिपाटी से श्वेत P संदर्भ अवस्था है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Find Δ_rH° for N2 + 3H2 → 2NH3 (Δ_fH° of NH3 = -46.1 kJ/mol).',
      q_hi: 'N₂ + 3H₂ → 2NH₃ का Δ_rH° ज्ञात कीजिए (NH₃ का Δ_fH° = −46.1 kJ/mol)।',
      a_en: 'Δ_rH° = 2(-46.1) - 0 = -92.2 kJ.',
      a_hi: 'Δ_rH° = 2(−46.1) − 0 = −92.2 kJ।',
      formula: '$$\\Delta_rH^\\circ=2(-46.1)=-92.2\\text{ kJ}$$'
    },
    {
      d: 'H',
      q_en: 'Find Δ_cH° of CH4 from Δ_fH°: CH4 -74.8, CO2 -393.5, H2O(l) -285.8 kJ/mol.',
      q_hi: 'Δ_fH° से CH₄ का Δ_cH° ज्ञात कीजिए: CH₄ −74.8, CO₂ −393.5, H₂O(l) −285.8 kJ/mol।',
      a_en: '-393.5 + 2(-285.8) - (-74.8) = -890.3 kJ/mol.',
      a_hi: '−393.5 + 2(−285.8) − (−74.8) = −890.3 kJ/mol।',
      formula: '$$-393.5-571.6+74.8=-890.3$$'
    },
    {
      d: 'H',
      q_en: 'Is Δ_fH° of H2O(l) equal to that of H2O(g)?',
      q_hi: 'क्या H₂O(l) व H₂O(g) का Δ_fH° समान है?',
      a_en: 'No: -285.8 kJ/mol for liquid and -241.8 for vapour; the difference is the vaporisation enthalpy (44 kJ/mol).',
      a_hi: 'नहीं: द्रव के लिए −285.8 व बाष्प के लिए −241.8 kJ/mol; अंतर वाष्पन एन्थैल्पी (44 kJ/mol) है।',
      formula: ''
    }
  ],

  /* ---------- SET 9: Enthalpies of Phase Transformation, Combustion & Atomisation ---------- */
  9: [
    {
      d: 'E',
      q_en: 'Is the enthalpy of fusion positive or negative?',
      q_hi: 'संगलन एन्थैल्पी धनात्मक है या ऋणात्मक?',
      a_en: 'Always positive (endothermic), since melting needs heat to loosen the lattice.',
      a_hi: 'सदैव धनात्मक (ऊष्माशोषी), क्योंकि गलन में जालक ढीला करने हेतु ऊष्मा चाहिए।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Is the enthalpy of vaporisation positive or negative?',
      q_hi: 'वाष्पन एन्थैल्पी धनात्मक है या ऋणात्मक?',
      a_en: 'Always positive (endothermic).',
      a_hi: 'सदैव धनात्मक (ऊष्माशोषी)।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Relate sublimation enthalpy to fusion and vaporisation.',
      q_hi: 'ऊर्ध्वपातन एन्थैल्पी को संगलन व वाष्पन से जोड़िए।',
      a_en: 'Δ_subH° = Δ_fusH° + Δ_vapH°.',
      a_hi: 'Δ_subH° = Δ_fusH° + Δ_vapH°।',
      formula: '$$\\Delta_{\\text{sub}}H^\\circ=\\Delta_{\\text{fus}}H^\\circ+\\Delta_{\\text{vap}}H^\\circ$$'
    },
    {
      d: 'E',
      q_en: 'Why is Δ_vapH° larger than Δ_fusH°?',
      q_hi: 'Δ_vapH°, Δ_fusH° से अधिक क्यों है?',
      a_en: 'Vaporisation almost completely separates molecules; fusion only loosens their arrangement.',
      a_hi: 'वाष्पन में अणु लगभग पूर्णतः अलग होते हैं; संगलन में केवल व्यवस्था ढीली होती है।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Define standard enthalpy of combustion.',
      q_hi: 'मानक दहन एन्थैल्पी परिभाषित कीजिए।',
      a_en: 'Enthalpy change when 1 mole of a substance is completely burnt in excess oxygen; always exothermic.',
      a_hi: '1 मोल पदार्थ के अधिक ऑक्सीजन में पूर्ण दहन पर एन्थैल्पी परिवर्तन; सदैव ऊष्माक्षेपी।',
      formula: '$$\\Delta_cH^\\circ<0$$'
    },
    {
      d: 'M',
      q_en: 'Why is C(s) + 1/2 O2 → CO not the enthalpy of combustion of carbon?',
      q_hi: 'C(s) + ½O₂ → CO कार्बन की दहन एन्थैल्पी क्यों नहीं है?',
      a_en: 'Combustion means complete burning to CO2; forming CO is incomplete combustion (it is Δ_fH° of CO).',
      a_hi: 'दहन का अर्थ CO₂ तक पूर्ण जलना है; CO बनना अपूर्ण दहन है (यह CO का Δ_fH° है)।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What is calorific value and why is H2 the best fuel per gram?',
      q_hi: 'ऊष्मीय मान (calorific value) क्या है और H₂ प्रति ग्राम सर्वश्रेष्ठ ईंधन क्यों है?',
      a_en: 'Heat released per gram (kJ/g). H2 gives about 143 kJ/g since its molar mass is only 2 g/mol.',
      a_hi: 'प्रति ग्राम मुक्त ऊष्मा (kJ/g)। H₂ लगभग 143 kJ/g देता है क्योंकि इसका मोलर द्रव्यमान केवल 2 g/mol है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What is the enthalpy of atomisation of a diatomic gas?',
      q_hi: 'द्विपरमाणुक गैस की कणन एन्थैल्पी क्या है?',
      a_en: 'It equals the bond dissociation enthalpy, e.g. H2(g) → 2H(g): 435.8 kJ/mol.',
      a_hi: 'यह आबंध वियोजन एन्थैल्पी के बराबर है, जैसे H₂(g) → 2H(g): 435.8 kJ/mol।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What is the enthalpy of atomisation of a metal?',
      q_hi: 'धातु की कणन एन्थैल्पी क्या है?',
      a_en: 'It equals the enthalpy of sublimation, e.g. Na(s) → Na(g): about 108 kJ/mol.',
      a_hi: 'यह ऊर्ध्वपातन एन्थैल्पी के बराबर है, जैसे Na(s) → Na(g): लगभग 108 kJ/mol।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Find the mean C-H bond enthalpy from Δ_aH° of CH4 = 1665 kJ/mol.',
      q_hi: 'CH₄ के Δ_aH° = 1665 kJ/mol से औसत C–H आबंध एन्थैल्पी ज्ञात कीजिए।',
      a_en: 'CH4(g) → C(g) + 4H(g) breaks four C-H bonds: 1665 / 4 = 416 kJ/mol.',
      a_hi: 'CH₄(g) → C(g) + 4H(g) में चार C–H आबंध टूटते हैं: 1665 / 4 = 416 kJ/mol।',
      formula: '$$\\frac{1665}{4}\\approx416\\text{ kJ/mol}$$'
    },
    {
      d: 'H',
      q_en: 'Estimate Δ_subH° of water from Δ_fusH° = 6.0 and Δ_vapH° = 40.7 kJ/mol.',
      q_hi: 'Δ_fusH° = 6.0 व Δ_vapH° = 40.7 kJ/mol से जल का Δ_subH° आकलित कीजिए।',
      a_en: 'Δ_subH° is about 6.0 + 40.7 = 46.7 kJ/mol.',
      a_hi: 'Δ_subH° लगभग 6.0 + 40.7 = 46.7 kJ/mol।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'How much heat melts 36 g of ice at 0 °C (Δ_fusH° = 6.0 kJ/mol)?',
      q_hi: '0 °C पर 36 g बर्फ़ पिघलाने हेतु कितनी ऊष्मा चाहिए (Δ_fusH° = 6.0 kJ/mol)?',
      a_en: 'n = 2 mol, so q = 2 x 6.0 = 12 kJ.',
      a_hi: 'n = 2 mol, अतः q = 2 × 6.0 = 12 kJ।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'What is Δ_cH° of CO, and how does it compare with carbon burning to CO?',
      q_hi: 'CO का Δ_cH° क्या है और यह C से CO बनने की ऊष्मा से कैसे तुलनीय है?',
      a_en: 'CO + 1/2 O2 → CO2 gives -283 kJ/mol; carbon to CO releases only -110.5 of the full -393.5.',
      a_hi: 'CO + ½O₂ → CO₂ से −283 kJ/mol मिलता है; C से CO में पूर्ण −393.5 में से केवल −110.5 निकलता है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'What is Δ_aH° of graphite?',
      q_hi: 'ग्रेफ़ाइट का Δ_aH° क्या है?',
      a_en: 'C(s) → C(g): 716.7 kJ/mol, which is also its enthalpy of sublimation.',
      a_hi: 'C(s) → C(g): 716.7 kJ/mol, जो इसकी ऊर्ध्वपातन एन्थैल्पी भी है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'How is Δ_cH° of graphite related to Δ_fH° of CO2 and CO?',
      q_hi: 'ग्रेफ़ाइट का Δ_cH°, CO₂ व CO के Δ_fH° से कैसे संबंधित है?',
      a_en: 'Equal to Δ_fH°(CO2) = -393.5 kJ/mol, but not to Δ_fH°(CO), since carbon burns to CO2.',
      a_hi: 'यह Δ_fH°(CO₂) = −393.5 kJ/mol के बराबर है, Δ_fH°(CO) के नहीं, क्योंकि कार्बन जलकर CO₂ बनाता है।',
      formula: ''
    }
  ],

  /* ---------- SET 10: Hess's Law of Constant Heat Summation & Applications ---------- */
  10: [
    {
      d: 'E',
      q_en: 'State Hess\'s Law of constant heat summation.',
      q_hi: 'हेस का स्थिर ऊष्मा संकलन नियम लिखिए।',
      a_en: 'The total enthalpy change of a reaction is the same whether it takes place in one step or several steps.',
      a_hi: 'अभिक्रिया का कुल एन्थैल्पी परिवर्तन समान रहता है, चाहे वह एक चरण में हो या कई चरणों में।',
      formula: '$$\\Delta_rH=\\Delta H_1+\\Delta H_2+\\cdots$$'
    },
    {
      d: 'E',
      q_en: 'Why is Hess\'s Law valid?',
      q_hi: 'हेस का नियम क्यों मान्य है?',
      a_en: 'Because enthalpy is a state function, so ΔH depends only on initial and final states.',
      a_hi: 'क्योंकि एन्थैल्पी अवस्था फलन है, इसलिए ΔH केवल प्रारंभिक व अंतिम अवस्थाओं पर निर्भर करता है।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'How are thermochemical equations manipulated under Hess\'s Law?',
      q_hi: 'हेस के नियम में थर्मोरासायनिक समीकरणों में क्या हेरफेर होते हैं?',
      a_en: 'They can be added, subtracted or multiplied, with ΔH treated the same way (sign flips when reversed).',
      a_hi: 'इन्हें जोड़ा, घटाया या गुणा किया जा सकता है, ΔH के साथ वही क्रिया (उलटने पर चिह्न बदलता है)।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What is ΔH for C(diamond) → C(graphite)?',
      q_hi: 'C(हीरा) → C(ग्रेफ़ाइट) के लिए ΔH क्या है?',
      a_en: 'About -1.9 kJ/mol: graphite is slightly more stable.',
      a_hi: 'लगभग −1.9 kJ/mol: ग्रेफ़ाइट कुछ अधिक स्थायी है।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Which law of thermodynamics underlies Hess\'s Law?',
      q_hi: 'हेस का नियम ऊष्मागतिकी के किस नियम पर आधारित है?',
      a_en: 'The First Law (conservation of energy), through enthalpy being a state function.',
      a_hi: 'प्रथम नियम (ऊर्जा संरक्षण), एन्थैल्पी के अवस्था फलन होने के माध्यम से।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Find Δ_fH° of CO given Δ_cH°(C) = -393.5 and Δ_cH°(CO) = -283.0 kJ/mol.',
      q_hi: 'Δ_cH°(C) = −393.5 व Δ_cH°(CO) = −283.0 kJ/mol से CO का Δ_fH° ज्ञात कीजिए।',
      a_en: 'C + O2 → CO2 minus CO + 1/2 O2 → CO2 gives -393.5 + 283.0 = -110.5 kJ/mol.',
      a_hi: 'C + O₂ → CO₂ में से CO + ½O₂ → CO₂ घटाने पर −393.5 + 283.0 = −110.5 kJ/mol।',
      formula: '$$-393.5-(-283.0)=-110.5$$'
    },
    {
      d: 'M',
      q_en: 'Find Δ_fH° of CH4 from Δ_cH°: C -393.5, H2 -285.8, CH4 -890.3 kJ/mol.',
      q_hi: 'Δ_cH° से CH₄ का Δ_fH° ज्ञात कीजिए: C −393.5, H₂ −285.8, CH₄ −890.3 kJ/mol।',
      a_en: '-393.5 + 2(-285.8) - (-890.3) = -74.8 kJ/mol.',
      a_hi: '−393.5 + 2(−285.8) − (−890.3) = −74.8 kJ/mol।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Find Δ_fH° of C2H6 given Δ_cH° = -1559.7 kJ/mol (C: -393.5, H2: -285.8).',
      q_hi: 'Δ_cH° = −1559.7 kJ/mol से C₂H₆ का Δ_fH° ज्ञात कीजिए (C: −393.5, H₂: −285.8)।',
      a_en: '2(-393.5) + 3(-285.8) - (-1559.7) = -84.7 kJ/mol.',
      a_hi: '2(−393.5) + 3(−285.8) − (−1559.7) = −84.7 kJ/mol।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Find Δ_fH° of C6H6(l) given Δ_cH° = -3267 kJ/mol (C: -393.5, H2: -285.8).',
      q_hi: 'Δ_cH° = −3267 kJ/mol से C₆H₆(l) का Δ_fH° ज्ञात कीजिए (C: −393.5, H₂: −285.8)।',
      a_en: '6(-393.5) + 3(-285.8) - (-3267) = +48.6 kJ/mol (about +49).',
      a_hi: '6(−393.5) + 3(−285.8) − (−3267) = +48.6 kJ/mol (लगभग +49)।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Given N2 + O2 → 2NO (+180.5) and 2NO + O2 → 2NO2 (-114.1 kJ), find ΔH for N2 + 2O2 → 2NO2.',
      q_hi: 'N₂ + O₂ → 2NO (+180.5) व 2NO + O₂ → 2NO₂ (−114.1 kJ) से N₂ + 2O₂ → 2NO₂ का ΔH ज्ञात कीजिए।',
      a_en: 'Add the steps: +180.5 + (-114.1) = +66.4 kJ.',
      a_hi: 'चरण जोड़ने पर: +180.5 + (−114.1) = +66.4 kJ।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Find ΔH for C(diamond) → C(graphite) given Δ_cH° of diamond -395.4 and graphite -393.5 kJ/mol.',
      q_hi: 'Δ_cH°(हीरा) −395.4 व (ग्रेफ़ाइट) −393.5 kJ/mol से C(हीरा) → C(ग्रेफ़ाइट) का ΔH ज्ञात कीजिए।',
      a_en: 'ΔH = -395.4 - (-393.5) = -1.9 kJ/mol.',
      a_hi: 'ΔH = −395.4 − (−393.5) = −1.9 kJ/mol।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Find Δ_fH° of CH3COOH(l) given its Δ_cH° = -870.3 (C: -393.5, H2: -285.8 kJ/mol).',
      q_hi: 'Δ_cH° = −870.3 से CH₃COOH(l) का Δ_fH° ज्ञात कीजिए (C: −393.5, H₂: −285.8 kJ/mol)।',
      a_en: '2(-393.5) + 2(-285.8) - (-870.3) = -488.3 kJ/mol.',
      a_hi: '2(−393.5) + 2(−285.8) − (−870.3) = −488.3 kJ/mol।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'What error arises if combustion data use H2O(g) instead of H2O(l)?',
      q_hi: 'दहन आँकड़ों में H₂O(l) की जगह H₂O(g) लेने पर क्या त्रुटि आती है?',
      a_en: 'Each mole of water is off by the vaporisation enthalpy (about 44 kJ), so results shift by 44 kJ per mole of H2O.',
      a_hi: 'प्रत्येक मोल जल पर वाष्पन एन्थैल्पी (लगभग 44 kJ) का अंतर आता है; परिणाम 44 kJ प्रति मोल H₂O से खिसकते हैं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Can Hess\'s Law be used for ΔS and ΔG as well?',
      q_hi: 'क्या हेस का नियम ΔS व ΔG के लिए भी प्रयुक्त हो सकता है?',
      a_en: 'Yes; S and G are state functions too, so reaction values add like ΔH.',
      a_hi: 'हाँ; S व G भी अवस्था फलन हैं, इसलिए अभिक्रिया के मान ΔH की तरह जुड़ते हैं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'How does Hess\'s Law give ΔH of reactions that cannot be run directly?',
      q_hi: 'हेस का नियम उन अभिक्रियाओं का ΔH कैसे देता है जो सीधे नहीं की जा सकतीं?',
      a_en: 'Such steps, like C → CO, are built from measurable steps (combustions) whose ΔH values combine.',
      a_hi: 'C → CO जैसे चरण मापनीय चरणों (दहन) से बनाए जाते हैं, जिनके ΔH मान जोड़े जाते हैं।',
      formula: ''
    }
  ],

  /* ---------- SET 11: Bond Enthalpy, Resonance Energy, Solution & Neutralisation Enthalpies ---------- */
  11: [
    {
      d: 'E',
      q_en: 'Write the bond enthalpy formula for ΔrH°.',
      q_hi: 'Δ_rH° के लिए आबंध एन्थैल्पी सूत्र लिखिए।',
      a_en: 'Δ_rH° = sum of bond enthalpies of reactants - sum for products (gaseous species only).',
      a_hi: 'Δ_rH° = अभिकारकों की आबंध एन्थैल्पियों का योग − उत्पादों का योग (केवल गैसीय स्पीशीज़)।',
      formula: '$$\\Delta_rH^\\circ=\\sum\\text{BE}_{\\text{R}}-\\sum\\text{BE}_{\\text{P}}$$'
    },
    {
      d: 'E',
      q_en: 'Why is the bond enthalpy formula reactants minus products?',
      q_hi: 'आबंध एन्थैल्पी सूत्र "अभिकारक − उत्पाद" क्यों है?',
      a_en: 'Breaking reactant bonds absorbs energy (+); forming product bonds releases energy (-), opposite to the formation formula.',
      a_hi: 'अभिकारक आबंध टूटने पर ऊर्जा अवशोषित (+); उत्पाद आबंध बनने पर मुक्त (−); यह विरचन सूत्र का उलटा है।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Write the enthalpy of solution in terms of lattice and hydration enthalpies.',
      q_hi: 'विलयन एन्थैल्पी को जालक व जलयोजन एन्थैल्पी के पदों में लिखिए।',
      a_en: 'Δ_solH° = Δ_latticeH° + Δ_hydH° (lattice positive, hydration negative).',
      a_hi: 'Δ_solH° = Δ_latticeH° + Δ_hydH° (जालक धनात्मक, जलयोजन ऋणात्मक)।',
      formula: '$$\\Delta_{\\text{sol}}H^\\circ=\\Delta_{\\text{lattice}}H^\\circ+\\Delta_{\\text{hyd}}H^\\circ$$'
    },
    {
      d: 'E',
      q_en: 'What is the enthalpy of neutralisation of a strong acid by a strong base?',
      q_hi: 'प्रबल अम्ल की प्रबल क्षार से उदासीनीकरण एन्थैल्पी क्या है?',
      a_en: '-57.1 kJ per mole of water formed (about -13.7 kcal).',
      a_hi: '−57.1 kJ प्रति मोल बने जल (लगभग −13.7 kcal)।',
      formula: '$$\\text{H}^++\\text{OH}^-\\rightarrow\\text{H}_2\\text{O},\\ \\Delta H=-57.1\\text{ kJ}$$'
    },
    {
      d: 'E',
      q_en: 'What is the enthalpy of dilution?',
      q_hi: 'तनुकरण एन्थैल्पी क्या है?',
      a_en: 'The heat change when more solvent is added to a solution at constant temperature and pressure.',
      a_hi: 'स्थिर ताप व दाब पर विलयन में और विलायक मिलाने पर ऊष्मा परिवर्तन।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Find ΔH for H2 + Cl2 → 2HCl using BE: H-H 436, Cl-Cl 243, H-Cl 431 kJ/mol.',
      q_hi: 'BE से H₂ + Cl₂ → 2HCl का ΔH ज्ञात कीजिए: H–H 436, Cl–Cl 243, H–Cl 431 kJ/mol।',
      a_en: 'ΔH = (436 + 243) - 2(431) = -183 kJ.',
      a_hi: 'ΔH = (436 + 243) − 2(431) = −183 kJ।',
      formula: '$$436+243-862=-183\\text{ kJ}$$'
    },
    {
      d: 'M',
      q_en: 'Why does a weak acid-strong base neutralisation release less than 57.1 kJ?',
      q_hi: 'दुर्बल अम्ल–प्रबल क्षार उदासीनीकरण में 57.1 kJ से कम ऊष्मा क्यों निकलती है?',
      a_en: 'Part of the energy goes into ionising the incompletely dissociated weak acid.',
      a_hi: 'ऊर्जा का कुछ भाग अपूर्ण वियोजित दुर्बल अम्ल को आयनित करने में लग जाता है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Why is the bond-energy method only approximate?',
      q_hi: 'आबंध ऊर्जा विधि केवल सन्निकट क्यों है?',
      a_en: 'It uses average bond enthalpies, which vary slightly with the molecule\'s environment.',
      a_hi: 'यह औसत आबंध एन्थैल्पियाँ लेती है, जो अणु के परिवेश के साथ थोड़ी बदलती हैं।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What heat is evolved when 0.5 mol H2SO4 is neutralised by 1 mol NaOH?',
      q_hi: '0.5 mol H₂SO₄ को 1 mol NaOH से उदासीन करने पर कितनी ऊष्मा निकलती है?',
      a_en: '1 mol of water forms, so 57.1 kJ is released (strong acid and strong base).',
      a_hi: '1 mol जल बनता है, अतः 57.1 kJ मुक्त होती है (प्रबल अम्ल व प्रबल क्षार)।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Why must species be gaseous in the bond enthalpy method?',
      q_hi: 'आबंध एन्थैल्पी विधि में स्पीशीज़ गैसीय क्यों होनी चाहिए?',
      a_en: 'Bond enthalpies refer to gas-phase bond breaking; liquids and solids need extra phase-change enthalpies.',
      a_hi: 'आबंध एन्थैल्पी गैस प्रावस्था में आबंध टूटने से संबंधित है; द्रव/ठोस में अतिरिक्त प्रावस्था परिवर्तन एन्थैल्पी चाहिए।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Find ΔH for CH4 + Cl2 → CH3Cl + HCl (C-H 414, Cl-Cl 243, C-Cl 339, H-Cl 431 kJ/mol).',
      q_hi: 'CH₄ + Cl₂ → CH₃Cl + HCl का ΔH ज्ञात कीजिए (C–H 414, Cl–Cl 243, C–Cl 339, H–Cl 431)।',
      a_en: 'ΔH = (414 + 243) - (339 + 431) = -113 kJ.',
      a_hi: 'ΔH = (414 + 243) − (339 + 431) = −113 kJ।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'What is resonance energy, and what is its value for benzene?',
      q_hi: 'अनुनाद ऊर्जा क्या है, और बेंज़ीन के लिए इसका मान क्या है?',
      a_en: 'Calculated (bond-energy) ΔfH minus experimental ΔfH; for benzene about 150 kJ/mol of extra stability.',
      a_hi: 'परिकलित (आबंध ऊर्जा) ΔfH और प्रायोगिक ΔfH का अंतर; बेंज़ीन के लिए लगभग 150 kJ/mol अतिरिक्त स्थायित्व।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why is neutralisation of HF with NaOH (-68.6 kJ/mol) more exothermic than -57.1?',
      q_hi: 'HF की NaOH से उदासीनीकरण (−68.6 kJ/mol), −57.1 से अधिक ऊष्माक्षेपी क्यों है?',
      a_en: 'Small F- is very strongly hydrated, and HF ionisation itself is exothermic, so extra heat is released.',
      a_hi: 'छोटा F⁻ अत्यधिक जलयोजित होता है और HF का आयनन स्वयं ऊष्माक्षेपी है, इसलिए अतिरिक्त ऊष्मा निकलती है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why is NaCl dissolution slightly endothermic (+3.9) but LiCl strongly exothermic (-37 kJ/mol)?',
      q_hi: 'NaCl का विलयन थोड़ा ऊष्माशोषी (+3.9) पर LiCl का प्रबल ऊष्माक्षेपी (−37 kJ/mol) क्यों है?',
      a_en: 'Small Li+ has a much larger hydration enthalpy, outweighing the lattice enthalpy; for Na+ the two nearly cancel.',
      a_hi: 'छोटे Li⁺ की जलयोजन एन्थैल्पी बहुत अधिक है, जो जालक एन्थैल्पी पर भारी पड़ती है; Na⁺ में दोनों लगभग निरस्त होती हैं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Why is the neutralisation enthalpy of HCN with NaOH only about -12 kJ/mol?',
      q_hi: 'HCN की NaOH से उदासीनीकरण एन्थैल्पी केवल लगभग −12 kJ/mol क्यों है?',
      a_en: 'HCN is a very weak acid; most of the energy released is spent on its ionisation.',
      a_hi: 'HCN अत्यंत दुर्बल अम्ल है; मुक्त ऊर्जा का अधिकांश भाग उसके आयनन में खर्च हो जाता है।',
      formula: ''
    }
  ],

  /* ---------- SET 12: Spontaneity, Second Law of Thermodynamics & Entropy ---------- */
  12: [
    {
      d: 'E',
      q_en: 'What is a spontaneous process?',
      q_hi: 'स्वतःप्रवर्ती प्रक्रम (spontaneous process) क्या है?',
      a_en: 'One that occurs on its own, without continuous outside help, once started, e.g. ice melting above 0 °C.',
      a_hi: 'जो आरंभ होने पर बिना बाह्य सहायता के स्वयं होता है, जैसे 0 °C से ऊपर बर्फ़ का पिघलना।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Is ΔH < 0 enough to decide spontaneity?',
      q_hi: 'क्या ΔH < 0 स्वतःप्रवर्तिता तय करने के लिए पर्याप्त है?',
      a_en: 'No; many endothermic processes are spontaneous, so ΔH alone is not the criterion.',
      a_hi: 'नहीं; कई ऊष्माशोषी प्रक्रम स्वतःप्रवर्ती होते हैं, अतः केवल ΔH कसौटी नहीं है।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Define entropy and give its unit.',
      q_hi: 'एन्ट्रॉपी परिभाषित कीजिए व मात्रक बताइए।',
      a_en: 'A measure of randomness or disorder; a state and extensive property, in J K^-1 mol^-1.',
      a_hi: 'अव्यवस्था/यादृच्छिकता का माप; अवस्था व मात्रात्मक गुण, मात्रक J K⁻¹ mol⁻¹।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'Arrange gas, liquid and solid by entropy.',
      q_hi: 'गैस, द्रव व ठोस को एन्ट्रॉपी के क्रम में रखिए।',
      a_en: 'S(gas) >> S(liquid) > S(solid).',
      a_hi: 'S(गैस) >> S(द्रव) > S(ठोस)।',
      formula: '$$S_{\\text{gas}}\\gg S_{\\text{liquid}}>S_{\\text{solid}}$$'
    },
    {
      d: 'E',
      q_en: 'Write the thermodynamic definition of entropy change.',
      q_hi: 'एन्ट्रॉपी परिवर्तन की ऊष्मागतिक परिभाषा लिखिए।',
      a_en: 'ΔS_sys = q_rev / T, where q_rev is the heat absorbed reversibly.',
      a_hi: 'ΔS_sys = q_rev / T, जहाँ q_rev उत्क्रमणीय रूप से अवशोषित ऊष्मा है।',
      formula: '$$\\Delta S_{\\text{sys}}=\\frac{q_{\\text{rev}}}{T}$$'
    },
    {
      d: 'M',
      q_en: 'Give endothermic processes that are spontaneous.',
      q_hi: 'स्वतःप्रवर्ती ऊष्माशोषी प्रक्रमों के उदाहरण दीजिए।',
      a_en: 'Melting of ice above 0 °C, evaporation of water, and dissolution of NH4Cl in water.',
      a_hi: '0 °C से ऊपर बर्फ़ का पिघलना, जल का वाष्पन तथा NH₄Cl का जल में विलयन।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'How does Δn_g decide the sign of ΔS in a reaction?',
      q_hi: 'अभिक्रिया में Δn_g, ΔS का चिह्न कैसे तय करता है?',
      a_en: 'If Δn_g > 0, disorder rises and ΔS > 0; if Δn_g < 0, ΔS < 0.',
      a_hi: 'यदि Δn_g > 0, अव्यवस्था बढ़ती है व ΔS > 0; यदि Δn_g < 0, ΔS < 0।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What is the sign of ΔS when a rubber band is stretched?',
      q_hi: 'रबर बैंड खींचने पर ΔS का चिह्न क्या होता है?',
      a_en: 'Negative: the coiled polymer chains straighten and become more ordered.',
      a_hi: 'ऋणात्मक: कुंडलित बहुलक शृंखलाएँ सीधी होकर अधिक व्यवस्थित हो जाती हैं।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Why does boiling an egg increase entropy?',
      q_hi: 'अंडा उबालने पर एन्ट्रॉपी क्यों बढ़ती है?',
      a_en: 'Heat denatures the proteins: the folded structure unravels into a more disordered state, so ΔS > 0.',
      a_hi: 'ऊष्मा प्रोटीन का विकृतीकरण करती है: संरचना खुलकर अधिक अव्यवस्थित हो जाती है, अतः ΔS > 0।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Predict the sign of ΔS for 2H2(g) + O2(g) → 2H2O(l).',
      q_hi: '2H₂(g) + O₂(g) → 2H₂O(l) के लिए ΔS का चिह्न बताइए।',
      a_en: 'Negative: three moles of gas become liquid, a large drop in disorder.',
      a_hi: 'ऋणात्मक: तीन मोल गैस द्रव बन जाती है, अव्यवस्था में भारी कमी।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'What is the sign of ΔS_sys on mixing two ideal gases?',
      q_hi: 'दो आदर्श गैसों को मिलाने पर ΔS_sys का चिह्न क्या है?',
      a_en: 'Positive: each gas spreads over a larger volume, so mixing is spontaneous.',
      a_hi: 'धनात्मक: प्रत्येक गैस बड़े आयतन में फैलती है, अतः मिश्रण स्वतःप्रवर्ती है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Compare the entropies of diamond and graphite.',
      q_hi: 'हीरे व ग्रेफ़ाइट की एन्ट्रॉपी की तुलना कीजिए।',
      a_en: 'S(diamond) = 2.4 < S(graphite) = 5.7 J K^-1 mol^-1: diamond\'s rigid 3-D network is more ordered.',
      a_hi: 'S(हीरा) = 2.4 < S(ग्रेफ़ाइट) = 5.7 J K⁻¹ mol⁻¹: हीरे का दृढ़ त्रिविम जालक अधिक व्यवस्थित है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'What is the sign of ΔS_sys on adsorption of a gas on a solid?',
      q_hi: 'ठोस पर गैस के अधिशोषण में ΔS_sys का चिह्न क्या है?',
      a_en: 'Negative: gas molecules become confined to a surface, so disorder decreases.',
      a_hi: 'ऋणात्मक: गैस अणु सतह पर सीमित हो जाते हैं, अतः अव्यवस्था घटती है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Water freezes below 0 °C although ΔS_sys < 0. Why is it spontaneous?',
      q_hi: '0 °C से नीचे जल जमता है जबकि ΔS_sys < 0। यह स्वतःप्रवर्ती क्यों है?',
      a_en: 'The released heat raises the surroundings\' entropy more, so ΔS_total > 0.',
      a_hi: 'मुक्त ऊष्मा परिवेश की एन्ट्रॉपी को अधिक बढ़ाती है, अतः ΔS_total > 0।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Compare S° of CH4, C2H6 and C3H8.',
      q_hi: 'CH₄, C₂H₆ व C₃H₈ की S° की तुलना कीजिए।',
      a_en: 'CH4 < C2H6 < C3H8 (about 186, 230, 270 J K^-1 mol^-1): larger molecules have more energy levels.',
      a_hi: 'CH₄ < C₂H₆ < C₃H₈ (लगभग 186, 230, 270): बड़े अणुओं में अधिक ऊर्जा स्तर होते हैं।',
      formula: ''
    }
  ],

  /* ---------- SET 13: Entropy Changes, Trouton's Rule & Third Law of Thermodynamics ---------- */
  13: [
    {
      d: 'E',
      q_en: 'Write the formula for the entropy of fusion.',
      q_hi: 'संगलन एन्ट्रॉपी का सूत्र लिखिए।',
      a_en: 'Δ_fusS = Δ_fusH / T_m, at the melting point T_m.',
      a_hi: 'Δ_fusS = Δ_fusH / T_m, गलनांक T_m पर।',
      formula: '$$\\Delta_{\\text{fus}}S=\\frac{\\Delta_{\\text{fus}}H}{T_m}$$'
    },
    {
      d: 'E',
      q_en: 'Write the formula for the entropy of vaporisation.',
      q_hi: 'वाष्पन एन्ट्रॉपी का सूत्र लिखिए।',
      a_en: 'Δ_vapS = Δ_vapH / T_b, at the boiling point T_b.',
      a_hi: 'Δ_vapS = Δ_vapH / T_b, क्वथनांक T_b पर।',
      formula: '$$\\Delta_{\\text{vap}}S=\\frac{\\Delta_{\\text{vap}}H}{T_b}$$'
    },
    {
      d: 'E',
      q_en: 'State Trouton\'s rule.',
      q_hi: 'ट्राउटन का नियम (Trouton\'s rule) लिखिए।',
      a_en: 'For many non-associated liquids, Δ_vapS is about 88 J K^-1 mol^-1.',
      a_hi: 'कई असंगुणित द्रवों के लिए Δ_vapS लगभग 88 J K⁻¹ mol⁻¹ होती है।',
      formula: '$$\\Delta_{\\text{vap}}S\\approx88\\text{ J K}^{-1}\\text{mol}^{-1}$$'
    },
    {
      d: 'E',
      q_en: 'Write ΔS for isothermal expansion of an ideal gas.',
      q_hi: 'आदर्श गैस के समतापी प्रसार में ΔS का सूत्र लिखिए।',
      a_en: 'ΔS = 2.303 nR log(V2/V1) = 2.303 nR log(P1/P2).',
      a_hi: 'ΔS = 2.303 nR log(V₂/V₁) = 2.303 nR log(P₁/P₂)।',
      formula: '$$\\Delta S=2.303\\,nR\\log\\frac{V_2}{V_1}$$'
    },
    {
      d: 'E',
      q_en: 'State the Third Law of Thermodynamics.',
      q_hi: 'ऊष्मागतिकी का तृतीय नियम लिखिए।',
      a_en: 'The entropy of a perfectly crystalline solid is zero at absolute zero (0 K).',
      a_hi: 'पूर्ण क्रिस्टलीय ठोस की एन्ट्रॉपी परम शून्य (0 K) पर शून्य होती है।',
      formula: '$$S(0\\text{ K})=0$$'
    },
    {
      d: 'M',
      q_en: 'State the Second Law criterion for spontaneity.',
      q_hi: 'स्वतःप्रवर्तिता के लिए द्वितीय नियम की कसौटी लिखिए।',
      a_en: 'ΔS_total = ΔS_sys + ΔS_surr > 0 for a spontaneous process, and = 0 at equilibrium.',
      a_hi: 'स्वतःप्रवर्ती प्रक्रम में ΔS_total = ΔS_sys + ΔS_surr > 0, तथा साम्य पर = 0।',
      formula: '$$\\Delta S_{\\text{total}}=\\Delta S_{\\text{sys}}+\\Delta S_{\\text{surr}}>0$$'
    },
    {
      d: 'M',
      q_en: 'Express ΔS_surr in terms of ΔH_sys.',
      q_hi: 'ΔS_surr को ΔH_sys के पदों में व्यक्त कीजिए।',
      a_en: 'ΔS_surr = -ΔH_sys / T, at constant T and P.',
      a_hi: 'ΔS_surr = −ΔH_sys / T, स्थिर T व P पर।',
      formula: '$$\\Delta S_{\\text{surr}}=-\\frac{\\Delta H_{\\text{sys}}}{T}$$'
    },
    {
      d: 'M',
      q_en: 'What are ΔS_total and ΔS_sys at equilibrium?',
      q_hi: 'साम्य पर ΔS_total व ΔS_sys क्या होते हैं?',
      a_en: 'ΔS_total = 0: the entropy change of the system exactly offsets that of the surroundings.',
      a_hi: 'ΔS_total = 0: निकाय का एन्ट्रॉपी परिवर्तन परिवेश के परिवर्तन को ठीक संतुलित करता है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Find Δ_fusS of ice (Δ_fusH = 6.01 kJ/mol, T_m = 273 K).',
      q_hi: 'बर्फ़ की Δ_fusS ज्ञात कीजिए (Δ_fusH = 6.01 kJ/mol, T_m = 273 K)।',
      a_en: 'Δ_fusS = 6010 / 273 = 22.0 J K^-1 mol^-1.',
      a_hi: 'Δ_fusS = 6010 / 273 = 22.0 J K⁻¹ mol⁻¹।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Find Δ_vapS of water (Δ_vapH = 40.7 kJ/mol, T_b = 373 K). Does it obey Trouton?',
      q_hi: 'जल की Δ_vapS ज्ञात कीजिए (Δ_vapH = 40.7 kJ/mol, T_b = 373 K)। क्या यह ट्राउटन नियम मानता है?',
      a_en: '40700 / 373 = 109 J K^-1 mol^-1, above 88, because hydrogen bonding makes liquid water highly ordered.',
      a_hi: '40700 / 373 = 109 J K⁻¹ mol⁻¹, जो 88 से अधिक है, क्योंकि H-आबंध द्रव जल को अधिक व्यवस्थित बनाते हैं।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Free expansion of an ideal gas has q = 0. Why is ΔS_sys still positive?',
      q_hi: 'आदर्श गैस के मुक्त प्रसार में q = 0 है। फिर भी ΔS_sys धनात्मक क्यों है?',
      a_en: 'ΔS uses q_rev, not the actual q. ΔS_sys = nR ln(V2/V1) > 0, a state-function change.',
      a_hi: 'ΔS में q_rev लगता है, वास्तविक q नहीं। ΔS_sys = nR ln(V₂/V₁) > 0, जो अवस्था फलन परिवर्तन है।',
      formula: '$$\\Delta S_{\\text{sys}}=nR\\ln\\frac{V_2}{V_1}>0$$'
    },
    {
      d: 'H',
      q_en: 'What is ΔS_surr in isothermal free expansion, and what does it imply?',
      q_hi: 'समतापी मुक्त प्रसार में ΔS_surr क्या है, और इसका क्या अर्थ है?',
      a_en: 'ΔS_surr = 0 since no heat is exchanged (q = 0), so ΔS_total > 0 and the process is spontaneous.',
      a_hi: 'ΔS_surr = 0 क्योंकि ऊष्मा का आदान-प्रदान नहीं होता (q = 0), अतः ΔS_total > 0 और प्रक्रम स्वतःप्रवर्ती है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Name substances with residual entropy at 0 K.',
      q_hi: '0 K पर अवशिष्ट एन्ट्रॉपी वाले पदार्थ बताइए।',
      a_en: 'CO, NO, N2O and H2O (ice): their molecules freeze in random orientations, so S > 0 at 0 K.',
      a_hi: 'CO, NO, N₂O व H₂O (बर्फ़): इनके अणु यादृच्छिक अभिविन्यास में जम जाते हैं, अतः 0 K पर S > 0।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Find ΔS_sys, ΔS_surr and ΔS_total for reversible isothermal expansion of 1 mol gas, 1 L to 10 L.',
      q_hi: '1 mol गैस के 1 L से 10 L उत्क्रमणीय समतापी प्रसार के लिए ΔS_sys, ΔS_surr व ΔS_total ज्ञात कीजिए।',
      a_en: 'ΔS_sys = 2.303 x 8.314 x log 10 = +19.1 J/K; ΔS_surr = -19.1; ΔS_total = 0.',
      a_hi: 'ΔS_sys = 2.303 × 8.314 × log 10 = +19.1 J/K; ΔS_surr = −19.1; ΔS_total = 0।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Does benzene obey Trouton\'s rule (Δ_vapH = 30.8 kJ/mol, T_b = 353 K)?',
      q_hi: 'क्या बेंज़ीन ट्राउटन नियम मानती है (Δ_vapH = 30.8 kJ/mol, T_b = 353 K)?',
      a_en: 'Yes: 30800 / 353 = 87 J K^-1 mol^-1, close to 88, since it is a non-associated liquid.',
      a_hi: 'हाँ: 30800 / 353 = 87 J K⁻¹ mol⁻¹, जो 88 के निकट है, क्योंकि यह असंगुणित द्रव है।',
      formula: ''
    }
  ],

  /* ---------- SET 14: Gibbs Energy, ΔG = ΔH - TΔS & Effect of Temperature on Spontaneity ---------- */
  14: [
    {
      d: 'E',
      q_en: 'Define Gibbs energy.',
      q_hi: 'गिब्स ऊर्जा परिभाषित कीजिए।',
      a_en: 'G = H - TS; a state function and extensive property.',
      a_hi: 'G = H − TS; यह अवस्था फलन व मात्रात्मक गुण है।',
      formula: '$$G=H-TS$$'
    },
    {
      d: 'E',
      q_en: 'Write the Gibbs equation at constant T and P.',
      q_hi: 'स्थिर T व P पर गिब्स समीकरण लिखिए।',
      a_en: 'ΔG = ΔH - TΔS.',
      a_hi: 'ΔG = ΔH − TΔS।',
      formula: '$$\\Delta G=\\Delta H-T\\Delta S$$'
    },
    {
      d: 'E',
      q_en: 'State the Gibbs criterion for spontaneity.',
      q_hi: 'स्वतःप्रवर्तिता की गिब्स कसौटी लिखिए।',
      a_en: 'ΔG < 0: spontaneous; ΔG = 0: equilibrium; ΔG > 0: non-spontaneous.',
      a_hi: 'ΔG < 0: स्वतःप्रवर्ती; ΔG = 0: साम्य; ΔG > 0: अस्वतःप्रवर्ती।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What does -ΔG represent?',
      q_hi: '−ΔG क्या दर्शाता है?',
      a_en: 'The maximum useful (non-PV) work obtainable from a process at constant T and P.',
      a_hi: 'स्थिर T व P पर प्रक्रम से प्राप्त अधिकतम उपयोगी (non-PV) कार्य।',
      formula: '$$-\\Delta G=w_{\\text{non-PV,max}}$$'
    },
    {
      d: 'E',
      q_en: 'What is the unit of ΔG?',
      q_hi: 'ΔG का मात्रक क्या है?',
      a_en: 'kJ/mol (or J/mol), the same as ΔH.',
      a_hi: 'kJ/mol (या J/mol), ΔH के समान।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Show that ΔG_sys = -TΔS_total at constant T and P.',
      q_hi: 'दिखाइए कि स्थिर T व P पर ΔG_sys = −TΔS_total।',
      a_en: 'ΔS_total = ΔS_sys - ΔH_sys/T; multiplying by -T gives ΔH - TΔS = ΔG.',
      a_hi: 'ΔS_total = ΔS_sys − ΔH_sys/T; −T से गुणा करने पर ΔH − TΔS = ΔG।',
      formula: '$$-T\\Delta S_{\\text{total}}=\\Delta H-T\\Delta S=\\Delta G$$'
    },
    {
      d: 'M',
      q_en: 'When is a reaction spontaneous at all temperatures?',
      q_hi: 'कोई अभिक्रिया किस स्थिति में सभी ताप पर स्वतःप्रवर्ती होती है?',
      a_en: 'ΔH < 0 and ΔS > 0, so ΔG is negative at every T.',
      a_hi: 'ΔH < 0 व ΔS > 0, अतः हर T पर ΔG ऋणात्मक।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'When is a reaction non-spontaneous at all temperatures?',
      q_hi: 'कोई अभिक्रिया किस स्थिति में सभी ताप पर अस्वतःप्रवर्ती होती है?',
      a_en: 'ΔH > 0 and ΔS < 0, so ΔG is positive at every T.',
      a_hi: 'ΔH > 0 व ΔS < 0, अतः हर T पर ΔG धनात्मक।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'When is a reaction with ΔH < 0 and ΔS < 0 spontaneous?',
      q_hi: 'ΔH < 0 व ΔS < 0 वाली अभिक्रिया कब स्वतःप्रवर्ती होती है?',
      a_en: 'At low temperature, when T < ΔH / ΔS (in magnitude).',
      a_hi: 'निम्न ताप पर, जब T < ΔH / ΔS (परिमाण में)।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'When is a reaction with ΔH > 0 and ΔS > 0 spontaneous?',
      q_hi: 'ΔH > 0 व ΔS > 0 वाली अभिक्रिया कब स्वतःप्रवर्ती होती है?',
      a_en: 'At high temperature, when T > ΔH / ΔS.',
      a_hi: 'उच्च ताप पर, जब T > ΔH / ΔS।',
      formula: '$$T>\\frac{\\Delta H}{\\Delta S}$$'
    },
    {
      d: 'H',
      q_en: 'Find the crossover temperature for ΔH = +30 kJ and ΔS = +100 J/K.',
      q_hi: 'ΔH = +30 kJ व ΔS = +100 J/K के लिए संक्रमण ताप ज्ञात कीजिए।',
      a_en: 'Convert ΔS = 0.100 kJ/K: T = 30 / 0.100 = 300 K.',
      a_hi: 'ΔS = 0.100 kJ/K में बदलकर: T = 30 / 0.100 = 300 K।',
      formula: '$$T=\\frac{30}{0.100}=300\\text{ K}$$'
    },
    {
      d: 'H',
      q_en: 'Find ΔG at 300 K for ΔH = -40 kJ and ΔS = -100 J/K.',
      q_hi: 'ΔH = −40 kJ व ΔS = −100 J/K के लिए 300 K पर ΔG ज्ञात कीजिए।',
      a_en: 'ΔG = -40 - 300(-0.100) = -10 kJ, spontaneous.',
      a_hi: 'ΔG = −40 − 300(−0.100) = −10 kJ, स्वतःप्रवर्ती।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'CaCO3 → CaO + CO2 has ΔH = +178 kJ, ΔS = +160 J/K. Find the minimum T for spontaneity.',
      q_hi: 'CaCO₃ → CaO + CO₂ के लिए ΔH = +178 kJ, ΔS = +160 J/K है। स्वतःप्रवर्तिता का न्यूनतम T ज्ञात कीजिए।',
      a_en: 'T > 178 / 0.160 = 1112 K (about 840 °C).',
      a_hi: 'T > 178 / 0.160 = 1112 K (लगभग 840 °C)।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Show that ice and water are at equilibrium at 273 K (ΔH = 6.0 kJ, ΔS = 22 J/K).',
      q_hi: 'दिखाइए कि 273 K पर बर्फ़ व जल साम्य में हैं (ΔH = 6.0 kJ, ΔS = 22 J/K)।',
      a_en: 'ΔG = 6.0 - 273(0.022) is about 0, so ΔG = 0 at 273 K.',
      a_hi: 'ΔG = 6.0 − 273(0.022) लगभग 0, अतः 273 K पर ΔG = 0।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Does spontaneous (ΔG < 0) mean fast?',
      q_hi: 'क्या स्वतःप्रवर्ती (ΔG < 0) का अर्थ तीव्र है?',
      a_en: 'No; thermodynamics gives direction, not rate. Diamond to graphite is spontaneous but extremely slow.',
      a_hi: 'नहीं; ऊष्मागतिकी दिशा बताती है, दर नहीं। हीरा → ग्रेफ़ाइट स्वतःप्रवर्ती है पर अत्यंत धीमा।',
      formula: ''
    }
  ],

  /* ---------- SET 15: Standard Gibbs Energy, Equilibrium Constant K & Electrochemistry Link ---------- */
  15: [
    {
      d: 'E',
      q_en: 'Write the relation between ΔrG and ΔrG°.',
      q_hi: 'ΔrG व ΔrG° का संबंध लिखिए।',
      a_en: 'ΔrG = ΔrG° + RT ln Q.',
      a_hi: 'Δ_rG = Δ_rG° + RT ln Q।',
      formula: '$$\\Delta_rG=\\Delta_rG^\\circ+RT\\ln Q$$'
    },
    {
      d: 'E',
      q_en: 'What are ΔrG and Q at equilibrium?',
      q_hi: 'साम्य पर ΔrG व Q क्या होते हैं?',
      a_en: 'ΔrG = 0 and Q = K.',
      a_hi: 'Δ_rG = 0 तथा Q = K।',
      formula: '$$\\Delta_rG=0,\\ \\ Q=K$$'
    },
    {
      d: 'E',
      q_en: 'Write ΔrG° in terms of the equilibrium constant.',
      q_hi: 'ΔrG° को साम्य स्थिरांक के पदों में लिखिए।',
      a_en: 'ΔrG° = -RT ln K = -2.303 RT log K.',
      a_hi: 'Δ_rG° = −RT ln K = −2.303 RT log K।',
      formula: '$$\\Delta_rG^\\circ=-2.303\\,RT\\log K$$'
    },
    {
      d: 'E',
      q_en: 'What does K > 1 imply for ΔrG°?',
      q_hi: 'K > 1 होने पर ΔrG° के बारे में क्या निष्कर्ष है?',
      a_en: 'ΔrG° < 0: the forward reaction is favoured at equilibrium (products dominate).',
      a_hi: 'Δ_rG° < 0: साम्य पर अग्र अभिक्रिया अनुकूल है (उत्पाद अधिक)।',
      formula: ''
    },
    {
      d: 'E',
      q_en: 'What do K = 1 and K < 1 imply for ΔrG°?',
      q_hi: 'K = 1 तथा K < 1 होने पर ΔrG° क्या होता है?',
      a_en: 'K = 1: ΔrG° = 0. K < 1: ΔrG° > 0, so reactants dominate at equilibrium.',
      a_hi: 'K = 1: Δ_rG° = 0. K < 1: Δ_rG° > 0, अतः साम्य पर अभिकारक अधिक।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Which is zero at equilibrium: ΔrG or ΔrG°?',
      q_hi: 'साम्य पर कौन शून्य होता है: ΔrG या ΔrG°?',
      a_en: 'ΔrG = 0 at equilibrium. ΔrG° is zero only if K = 1.',
      a_hi: 'साम्य पर Δ_rG = 0। Δ_rG° केवल K = 1 होने पर शून्य होता है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Relate ΔrG° to the standard cell potential.',
      q_hi: 'ΔrG° को मानक सेल विभव से जोड़िए।',
      a_en: 'ΔrG° = -nF E°cell, where F = 96500 C/mol and n is electrons transferred.',
      a_hi: 'Δ_rG° = −nF E°cell, जहाँ F = 96500 C/mol तथा n स्थानांतरित इलेक्ट्रॉन हैं।',
      formula: '$$\\Delta_rG^\\circ=-nFE^\\circ_{\\text{cell}}$$'
    },
    {
      d: 'M',
      q_en: 'Why is ΔG° additive for coupled reactions but E° is not?',
      q_hi: 'युग्मित अभिक्रियाओं में ΔG° योज्य है पर E° नहीं, क्यों?',
      a_en: 'ΔG is extensive (scales with n), whereas E° is intensive, so potentials must be weighted by n.',
      a_hi: 'ΔG मात्रात्मक है (n के साथ बदलता है), जबकि E° गहन है; विभवों को n से भारित करना पड़ता है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'What is a coupled reaction? Give a biological example.',
      q_hi: 'युग्मित अभिक्रिया क्या है? एक जैविक उदाहरण दीजिए।',
      a_en: 'A non-spontaneous reaction driven by a spontaneous one; ATP hydrolysis (ΔG° about -30.5 kJ/mol) powers many biosyntheses.',
      a_hi: 'अस्वतःप्रवर्ती अभिक्रिया को स्वतःप्रवर्ती से चलाना; ATP जलअपघटन (ΔG° ≈ −30.5 kJ/mol) कई जैव-संश्लेषण चलाता है।',
      formula: ''
    },
    {
      d: 'M',
      q_en: 'Find ΔG° at 298 K if K = 10.',
      q_hi: 'K = 10 होने पर 298 K पर ΔG° ज्ञात कीजिए।',
      a_en: 'ΔG° = -2.303 x 8.314 x 298 x log 10 = -5.71 kJ/mol.',
      a_hi: 'ΔG° = −2.303 × 8.314 × 298 × log 10 = −5.71 kJ/mol।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Find ΔG° for the Daniell cell (E° = 1.10 V, n = 2).',
      q_hi: 'डेनियल सेल के लिए ΔG° ज्ञात कीजिए (E° = 1.10 V, n = 2)।',
      a_en: 'ΔG° = -2 x 96500 x 1.10 = -212.3 kJ/mol.',
      a_hi: 'ΔG° = −2 × 96500 × 1.10 = −212.3 kJ/mol।',
      formula: '$$-2(96500)(1.10)=-212.3\\text{ kJ}$$'
    },
    {
      d: 'H',
      q_en: 'Find K at 298 K if ΔG° = -17.1 kJ/mol.',
      q_hi: 'ΔG° = −17.1 kJ/mol होने पर 298 K पर K ज्ञात कीजिए।',
      a_en: 'log K = 17100 / (2.303 x 8.314 x 298) = 3.0, so K = 10^3.',
      a_hi: 'log K = 17100 / (2.303 × 8.314 × 298) = 3.0, अतः K = 10³।',
      formula: '$$\\log K=\\frac{17100}{5706}=3$$'
    },
    {
      d: 'H',
      q_en: 'How are metal oxides reduced by C or CO in terms of ΔG?',
      q_hi: 'धातु ऑक्साइडों का C या CO द्वारा अपचयन ΔG के पदों में कैसे होता है?',
      a_en: 'The combined (coupled) reaction must have ΔG < 0; C to CO has ΔS > 0, so its ΔG falls with T (Ellingham).',
      a_hi: 'संयुक्त (युग्मित) अभिक्रिया का ΔG < 0 होना चाहिए; C → CO में ΔS > 0 है, अतः T बढ़ने पर ΔG घटता है (एलिंघम)।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'If ΔG° > 0, can the reaction still proceed forward?',
      q_hi: 'यदि ΔG° > 0 हो, तो क्या अभिक्रिया फिर भी अग्र दिशा में चल सकती है?',
      a_en: 'Yes, if Q < K so that ΔG = ΔG° + RT ln Q < 0; ΔG° only describes the standard state.',
      a_hi: 'हाँ, यदि Q < K हो ताकि ΔG = ΔG° + RT ln Q < 0; ΔG° केवल मानक अवस्था बताता है।',
      formula: ''
    },
    {
      d: 'H',
      q_en: 'Do ΔG° and K depend on concentration or only on temperature?',
      q_hi: 'क्या ΔG° व K सांद्रता पर निर्भर हैं या केवल ताप पर?',
      a_en: 'Only on temperature. ΔG (not ΔG°) depends on the current composition through Q.',
      a_hi: 'केवल ताप पर। ΔG (ΔG° नहीं) वर्तमान संघटन पर Q के माध्यम से निर्भर करता है।',
      formula: ''
    }
  ]
};
