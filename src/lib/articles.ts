export interface Article {
  slug: string;
  kicker: string;
  title: string;
  content: string[];
}

export const articles: Record<string, Article> = {
  preface: {
    slug: "preface",
    kicker: "Vol. 00 • The Manifesto",
    title: "Breaking the Cycle.",
    content: [
      "This platform exists for two distinct purposes. First, to educate the non-user: to dismantle the ignorance that demonizes a behavior often rooted in trauma. Second, and perhaps more importantly, to validate the user: to prove that the guilt and humiliation you feel are not inherent to you, but are constructs imposed by a society that refuses to understand your pain.",
      "For decades, the public narrative has been dangerously empty. We see simplistic slogans like 'Cocaine is bad' or 'Don't do drugs,' which point out health risks but ignore the psychological reality. We ignore *why* people use. We ignore that for many, the substance is a coping mechanism for untreated psychological distress. Instead of treating addiction as a disease, we treat it as a moral failing—a sign of 'bad character.'",
      "There is a grotesque hypocrisy in how this substance is viewed. When the wealthy consume cocaine in powder form, it is often glamorized—whispered about in high society as a recreational luxury. Yet, when a person of lower income uses the same alkaloid to escape their reality, they are viewed with disgust. The substance is the same; only the judgment changes based on tax bracket.",
      "This stigma is a lethal part of the problem. When society treats drug use as a taboo, it pushes the user into the shadows. The guilt forced upon them creates isolation, and that isolation drives further consumption to cope with the shame. It is a vicious loop fueled entirely by ignorance.",
      "We cannot help people by judging them. We cannot save lives with silence. This archive rejects the sugar-coated clichés. It offers raw, scientific, and sociological truth—because true information is the only way to dismantle the stigma and offer real safety.",
    ],
  },

  pharmacology: {
    slug: "pharmacology",
    kicker: "Vol. 01 • The Mechanism",
    title: "Pharmacology & Kinetics.",
    content: [
      "To understand the safety profile of cocaine, one must first understand its mechanism of action. It is classified as a psychomotor stimulant. Unlike other substances that might mimic neurotransmitters, cocaine acts primarily as a blocker.",
      "The brain functions by sending chemical messengers (neurotransmitters) between neurons. The primary messenger involved here is Dopamine, which regulates reward, motivation, and motor control. Under normal conditions, a neuron releases dopamine, it attaches to a receiver to send a signal, and is then recycled back into the original neuron by a 'transporter.'",
      "Cocaine binds to these transporters and blocks them. Imagine a dam built across a river. Because the dopamine cannot be recycled, it floods the synaptic gap. This accumulation creates the intense euphoria, hyper-alertness, and inflated sense of confidence. It is not that the brain is making 'more' energy; it is preventing the system from turning off the signal.",
      "However, the intensity and danger of this process depend entirely on the Route of Administration (ROA). The substance exists in two primary chemical forms, which dictates how it can be consumed.",
      "1. Cocaine Hydrochloride (Powder): This is the salt form. It is water-soluble, meaning it dissolves in the mucous membranes (snorting) or blood (injecting). It cannot be smoked effectively because heat destroys the molecule before it vaporizes.",
      "2. Freebase / Crack: This is the alkaloid base, stripped of the hydrochloride acid. It has a lower melting point, allowing it to be vaporized and inhaled. This creates a distinct pharmacokinetic profile.",
      "When Snorted (Insufflation): Absorption is relatively slow. The drug constricts the capillaries in the nose, effectively limiting its own absorption speed. Peak effects are reached in 15–30 minutes, lasting 45–90 minutes. Bioavailability is roughly 60%.",
      "When Smoked (Inhalation): Vaporized cocaine enters the lungs, which offer a massive surface area for absorption. It bypasses the venous system and travels directly to the heart and brain. The onset is 8–10 seconds. This produces a violent, immediate 'flash' of euphoria that fades within 5–10 minutes. This rapid spike and drop drives the intense, compulsive urge to redose that is characteristic of crack cocaine addiction.",
      "When Injected (Intravenous): The drug is dissolved in water and injected directly into the bloodstream. Bioavailability is 100%. Like smoking, the onset is immediate, but without the filtration of the lungs. This carries the highest risk of acute overdose, as the entire dose hits the heart at once, alongside risks of abscesses, vein collapse, and blood-borne pathogens.",
      "Regardless of the method, the metabolic cost is high. The cardiovascular system is pushed into overdrive—vasoconstriction coupled with tachycardia—while the brain's reward system is forcibly rewired to prioritize the substance above survival needs.",
    ],
  },

  effects: {
    slug: "effects",
    kicker: "Vol. 02 • Systemic Impact",
    title: "Physiological Effects.",
    content: [
      "The impact of cocaine is systemic, affecting nearly every organ system, but its primary target is the cardiovascular system. The immediate physical sensation—the racing heart and 'energy'—is actually a sign of acute stress.",
      "1. Cardiovascular Strain: Cocaine is a potent vasoconstrictor (it shrinks blood vessels) while simultaneously increasing heart rate (chronotropy) and the force of contraction (inotropy). This creates a 'perfect storm': the heart is forced to pump harder and faster, but the pipes it pumps through are narrowed. This drastically increases blood pressure and the risk of ischemia (lack of oxygen to the heart muscle).",
      "2. The Brain & The Crash: During the high, dopamine levels are artificially peaked. Once the drug metabolizes, these levels plummet below the baseline. This is the 'Comedown.' It is not just sadness; it is a physiological state called 'Anhedonia'—the inability to feel pleasure. The brain has depleted its available neurotransmitters and needs time to synthesize more. This emptiness often drives the user to take more drug just to feel 'normal,' not to get high.",
      "3. Route-Specific Damage (Snorting): Chronic insufflation damages the delicate mucous membranes of the nasal cavity. The blood supply to the septum (the wall between nostrils) is repeatedly cut off. Over time, the tissue dies (necrosis), leading to perforations—a permanent hole in the septum that can cause collapse of the nasal structure.",
      "4. Route-Specific Damage (Smoking/Crack): The inhalation of hot, vaporized alkaloid causes 'Crack Lung'—a form of acute eosinophilic pneumonia. It involves severe chest pain, breathing difficulties, and scarring of the lung tissue. Additionally, the rapid cycle of high-and-crash creates a more severe dopamine downregulation, making emotional recovery harder.",
      "5. Route-Specific Damage (Injection): Beyond the risk of collapsed veins and abscesses, IV users face high risks of endocarditis—a life-threatening infection of the heart valves caused by bacteria entering the bloodstream through non-sterile needles.",
      "Understanding these mechanical costs is vital. The body is resilient, but it is not invincible. The damage is often cumulative, building up silently over months or years of 'functional' use before a critical event occurs.",
    ],
  },

  risks: {
    slug: "risks",
    kicker: "Vol. 03 • Hidden Dangers",
    title: "Risk Analysis.",
    content: [
      "The illicit nature of the cocaine market means that 'quality control' is nonexistent. The user rarely knows the true potency or composition of what they are consuming. This variability is the primary driver of accidental overdose and unexpected toxicity.",
      "1. The Adulterant Crisis (Levamisole): It is estimated that a vast majority of the global cocaine supply is cut with Levamisole, a veterinary deworming agent. Cartels use it because it adds bulk and mimics the stimulating effect of cocaine. However, in humans, Levamisole causes Agranulocytosis—a severe drop in white blood cells. This destroys the immune system, leaving the user vulnerable to fatal infections from minor cuts or colds. In high doses, it causes vasculitis, leading to patches of dying, black skin (necrosis).",
      "2. Fentanyl Contamination: The deadliest risk in the modern era is cross-contamination with Fentanyl, a synthetic opioid 50-100 times stronger than morphine. Because dealers often package multiple substances in the same location, microscopic amounts of fentanyl can transfer to cocaine. For a user with no opioid tolerance, this trace amount is often fatal. Fentanyl test strips are now a mandatory safety tool, not an optional one.",
      "3. The Purity Trap: Paradoxically, higher purity can also be lethal. If a user is accustomed to heavily cut product (e.g., 30% purity) and suddenly obtains a high-quality batch (e.g., 80% purity), their usual 'line' size effectively becomes a double or triple dose. This sudden spike in dosage overwhelms the heart, leading to cardiac arrest.",
      "4. The Alcohol Multiplier: As noted in our Interaction Tool, mixing cocaine and alcohol creates Cocaethylene. This is not just 'mixing buzzes.' It creates a third, distinct chemical in the liver that is far more cardiotoxic and stays in the bloodstream longer. It is the leading cause of two-drug combination deaths.",
    ],
  },

  history: {
    slug: "history",
    kicker: "Vol. 04 • The Timeline",
    title: "Historical Context.",
    content: [
      "The history of cocaine is not a straight line of criminality; it is a complex arc of divinity, medicine, commercialization, and finally, political weaponization. To understand the stigma, one must understand how a sacred leaf was transformed into a catalyst for the 'War on Drugs.'",

      "I. The Divine Era (3000 BC – 1850 AD)\nFor millennia, the Erythroxylum coca plant was the cornerstone of Andean civilization. The Incas revered it as a gift from the Sun God, reserved for royalty and religious ceremonies. It was not used to get 'high'; it was a functional tool for survival. Chewed with lime (calcium) to release the alkaloid, it allowed indigenous people to withstand the brutal altitude, hunger, and fatigue of the Andes. In this context, there was no addiction, no overdose, and no crime—only utility and reverence.",

      "II. The Era of Extraction (1860 – 1900)\nEuropean chemistry changed everything. In 1860, Albert Niemann isolated the active alkaloid, creating 'Cocaine Hydrochloride.' This concentration process amplified the plant's potency by thousands of times. It was immediately hailed as a wonder drug. Sigmund Freud wrote 'Über Coca,' praising it as a cure for depression and morphine addiction. It was sold in pharmacies, added to wines (Vin Mariani), and famously included in the original formula of Coca-Cola by John Pemberton. It was the aspirin of its day—legal, celebrated, and ubiquitous.",

      "III. The Racial Pivot (1914 – 1920)\nAs recreational use spread, the narrative shifted. The turning point was not medical, but racial. In the American South, newspapers began publishing sensationalized (and false) stories of 'Negro Cocaine Fiends' to incite fear. Police forces claimed that cocaine gave Black men 'superhuman strength' and made them impervious to .32 caliber bullets, a myth used to justify the militarization of police weaponry. The Harrison Narcotics Tax Act of 1914 was passed largely on this wave of racial panic, marking the beginning of criminalization.",

      "IV. Glamour & Violence (1970 – 1980)\nBy the 1970s, cocaine re-emerged as a status symbol of the elite. It fueled the disco era and Wall Street, viewed as a 'champagne drug' for the wealthy, associated with success and luxury. Meanwhile, the supply chain grew violent. The rise of the Medellín and Cali cartels industrialized production, turning a plant into a multi-billion dollar illicit economy that destabilized entire nations in South America.",

      "V. The Great Disparity (1986 – Present)\nThe darker turn came with the invention of 'Crack'—freebase cocaine that could be smoked. Because it was cheap and sold in small units, it flooded low-income, often minority neighborhoods. The government's response was the Anti-Drug Abuse Act of 1986, which established the infamous '100-to-1' sentencing disparity. Possession of 5 grams of crack triggered the same mandatory minimum prison sentence as 500 grams of powder. This legal framework did not target the drug; it targeted the class of the user. It decimated communities and filled prisons, cementing the stigma that drug use is a moral failing of the poor, rather than a health issue.",

      "VI. The Modern Reality\nToday, we live in the shadow of these policies. The 'War on Drugs' has failed to reduce supply or demand, succeeding only in creating a dangerous, unregulated black market where Fentanyl now kills more users than cocaine ever did. History teaches us that prohibition does not create safety; regulation and education do.",
    ],
  },
  reduction: {
    slug: "reduction",
    kicker: "Vol. 05 • Actionable Protocols",
    title: "Harm Reduction Manual.",
    content: [
      "Safety is not an abstract concept; it is a discipline. The following protocols are derived from clinical data and harm reduction organizations. They are designed to mitigate physiological damage in real-time.",

      "I. PRE-SESSION: ANALYSIS & PURITY\nMost overdoses occur due to 'The Unknowns'—cuts, varying potency, or cross-contamination.\n\n• Fentanyl Testing (Mandatory): Visual inspection is impossible. Dissolve a 10mg residue sample in 5ml of water. Dip the Fentanyl Test Strip for 15 seconds. One line = Positive (Deadly). Two lines = Negative. If positive, discard the entire batch. Fentanyl is unevenly distributed ('chocolate chip cookie effect'); testing one rock doesn't guarantee the rest is safe unless you test the entire solution.\n\n• Reagent Testing (The Morris Reagent): To identify if your substance is actually cocaine or a mimic (like Cathinones/Bath Salts). Cocaine turns bright blue. If it stays clear or turns yellow, it is not cocaine. This also helps identify Levamisole.",

      "II. PROTOCOL: INSUFFLATION (SNORTING)\nThe goal is to maximize absorption while minimizing tissue necrosis.\n\n• The Surface Area Rule: 'Hot Plating' is essential. Microwave a ceramic plate for 60 seconds (dry). Pour powder onto the warm plate and crush. The heat evaporates moisture, allowing the powder to become a fine, dust-like mist. Clumpy powder cuts the nose and drips down the throat (wasting the drug and hurting the stomach).\n\n• The Delivery Tool: Never use banknotes. They are vectors for Hepatitis C. Use a clean, dedicated straw or a fresh Post-it note rolled up. Plastic straws can be sharp; rounded paper is safer.\n\n• Saline Hygiene: 10 minutes after a line, use a simple saline nasal spray. This flushes the corrosive hydrochloric acid from the cartilage. Leaving it to sit causes the 'hole in the septum.' Apply Vitamin E oil inside the nostril *after* the session (not before) to heal micro-cuts.",

      "III. PROTOCOL: INHALATION (SMOKING/FREEBASE)\nThe damage here comes from heat (thermal injury) and chemical byproducts.\n\n• Vaporization vs. Combustion: You want to vaporize the oil, not burn the rock. Direct flame destroys the cocaine molecule and creates toxic pyrolysis byproducts. Hold the flame 1 inch below the tip. You are looking for a 'cool melt,' not a charred black residue.\n\n• The Hardware: Never use aluminum cans or plastic bottles. Heated aluminum releases aluminum oxide (neurotoxic). Heated plastic releases dioxins (carcinogenic). Use a straight Pyrex stem (glass). If the glass chips or cracks, discard it immediately—inhaling microscopic glass dust causes permanent lung scarring.\n\n• The Filter (Chore Boy): If using copper wool, you MUST pre-burn it. Hold a lighter to the copper until it stops smoking and turns grey. The shiny coating on commercial copper is toxic when inhaled. Better yet, use stainless steel screens which do not off-gas.",

      "IV. PROTOCOL: INTRAVENOUS (INJECTION)\nThis carries the highest risk. Strict sterile technique is the only barrier against endocarditis and abscesses.\n\n• The Hierarchy of Veins: Arms (safest) > Hands (painful, fragile) > Legs (high risk of clots) > Neck/Groin (NEVER—risk of hitting arteries/nerves is lethal).\n\n• Water Quality: Tap water contains bacteria. Saliva contains bacteria. Use only sterile water ampoules or, if necessary, boiled and cooled water.\n\n• Filtration: Cotton balls are dangerous—they can shed fibers that cause 'Cotton Fever' (sepsis-like symptoms) or block capillaries in the lungs. Use a 0.22µm Micron Filter (Wheel Filter) to remove bacteria and particulate matter.\n\n• Rotation: Never inject into the same spot twice in a row. Let the vein heal. If you miss the vein, stop immediately. Do not 'fish' around with the needle.",

      "V. EMERGENCY RESPONSE (OVERDOSE)\nStimulant overdose is different from Opioid overdose, but given the fentanyl risk, you must be prepared for both.\n\n• If Opioid Signs (Blue lips, no breathing, unresponsiveness): Administer Narcan (Naloxone) immediately. It does not hurt a cocaine overdose, but it saves a fentanyl overdose. Perform rescue breathing.\n\n• If Stimulant Signs (Seizure, chest pain, extreme overheating): Narcan will NOT work. Call emergency services. Focus on cooling the person down (ice packs on neck/armpits) to prevent brain damage from hyperthermia. Keep them seated (not lying down) if they are conscious to help breathing.",

      "VI. BIOCHEMISTRY & NUTRITION\n• Electrolytes: Cocaine depletes potassium and magnesium, leading to heart arrhythmia. Drink an electrolyte solution (Pedialyte/Gatorade), not just plain water.\n• L-Arginine: A vasodilator supplement taken *before* a session can help counteract the vasoconstriction, potentially lowering blood pressure strain.\n• Sleep Aids: Avoid using more drugs (benzos/alcohol) to sleep. Melatonin and Magnesium Glycinate are safer options to lower the heart rate naturally.",
    ],
  },
};
