export type RiskLevel =
  | "Lethal"
  | "High Risk"
  | "Unsafe"
  | "Caution"
  | "Low Risk";

export interface Interaction {
  id: string;
  name: string;
  category: string;
  risk: RiskLevel;
  description: string;
  mechanism: string;
}

export const interactions: Interaction[] = [
  // --- DEPRESSANTS ---
  {
    id: "alcohol",
    name: "Alcohol",
    category: "Depressant",
    risk: "High Risk",
    description:
      "Extremely common but highly toxic. The liver combines them to form Cocaethylene, which is 30% more toxic to the heart than cocaine alone and lasts much longer in the body.",
    mechanism: "Metabolic Synthesis (Cocaethylene)",
  },
  {
    id: "opioids",
    name: "Opioids (Heroin/Fentanyl)",
    category: "Opioid",
    risk: "Lethal",
    description:
      "Known as a 'Speedball'. The stimulant masks the sedative effects, leading to users taking higher doses of the opioid. When the cocaine wears off, respiratory failure can happen instantly.",
    mechanism: "Masking Effect / Respiratory Depression",
  },
  {
    id: "benzos",
    name: "Benzodiazepines (Xanax/Valium)",
    category: "Depressant",
    risk: "Caution",
    description:
      "Often used to 'come down', but high doses can lead to blackouts. The stimulant effect masks the sedation, increasing risk of overdose if the user keeps redosing the benzo.",
    mechanism: "Sedation Masking",
  },
  {
    id: "ghb",
    name: "GHB / GBL",
    category: "Depressant",
    risk: "High Risk",
    description:
      "Both substances place strain on the heart. The stimulant effects can mask the 'G-slide' (unconsciousness), causing users to overdose on GHB. High risk of vomiting while unconscious.",
    mechanism: "Sedation Masking / Aspiration Risk",
  },

  // --- STIMULANTS ---
  {
    id: "mdma",
    name: "MDMA (Ecstasy/Molly)",
    category: "Stimulant / Empathogen",
    risk: "High Risk",
    description:
      "Stacking stimulants puts immense strain on the heart and vasculature. Cocaine also blocks the neurochemical mechanism of MDMA, often cancelling out the euphoria while keeping the physical side effects.",
    mechanism: "Dopamine/Serotonin Competition + Cardiotoxicity",
  },
  {
    id: "amphetamines",
    name: "Amphetamines (Speed/Adderall)",
    category: "Stimulant",
    risk: "Unsafe",
    description:
      "Both drugs compete for the same receptors. This increases heart rate and blood pressure to dangerous levels, significantly raising the risk of stroke or heart attack.",
    mechanism: "Cardiovascular Overload",
  },
  {
    id: "nicotine",
    name: "Nicotine (Tobacco/Vapes)",
    category: "Stimulant",
    risk: "Unsafe",
    description:
      "Both are powerful vasoconstrictors (they shrink blood vessels). Using them together drastically reduces oxygen flow to the heart, increasing the likelihood of cardiac events.",
    mechanism: "Synergistic Vasoconstriction",
  },
  {
    id: "caffeine",
    name: "Caffeine",
    category: "Stimulant",
    risk: "Unsafe",
    description:
      "Seemingly harmless, but high doses of caffeine combined with cocaine can trigger severe anxiety, palpitations, and panic attacks.",
    mechanism: "Stimulant Stacking",
  },

  // --- PSYCHEDELICS ---
  {
    id: "lsd",
    name: "LSD (Acid)",
    category: "Psychedelic",
    risk: "Unsafe",
    description:
      "Stimulants often increase anxiety and thought loops, leading to 'bad trips'. The physical stimulation can also feel uncomfortable or overwhelming during a psychedelic experience.",
    mechanism: "Psychological Amplification",
  },
  {
    id: "shrooms",
    name: "Psilocybin (Mushrooms)",
    category: "Psychedelic",
    risk: "Caution",
    description:
      "Similar to LSD, the anxiety and rapid heart rate from cocaine can derail the psychedelic experience, causing paranoia or panic states.",
    mechanism: "Psychological Amplification",
  },
  {
    id: "cannabis",
    name: "Cannabis (Weed)",
    category: "Psychoactive",
    risk: "Caution",
    description:
      "Unpredictable. For some, it helps the comedown. For many, it dramatically spikes heart rate and induces severe paranoia or psychosis when mixed with stimulants.",
    mechanism: "Tachycardia / Psychological Strain",
  },

  // --- MEDICATIONS ---
  {
    id: "ssri",
    name: "SSRIs (Prozac/Zoloft)",
    category: "Antidepressant",
    risk: "Unsafe",
    description:
      "Cocaine increases serotonin; SSRIs block its reuptake. While less likely than with MDMA, this can lead to Serotonin Syndrome (fever, agitation, muscle rigidity).",
    mechanism: "Serotonin Accumulation",
  },
  {
    id: "maoi",
    name: "MAOIs",
    category: "Antidepressant",
    risk: "Lethal",
    description:
      "Monoamine Oxidase Inhibitors prevent the breakdown of neurotransmitters. Adding cocaine can cause a hypertensive crisis (stroke/heart attack/brain hemorrhage).",
    mechanism: "Hypertensive Crisis",
  },
  {
    id: "tramadol",
    name: "Tramadol",
    category: "Opioid / SNRI",
    risk: "High Risk",
    description:
      "Tramadol lowers the seizure threshold. Cocaine is also pro-convulsant. Combining them creates a very high risk of grand mal seizures.",
    mechanism: "Seizure Threshold Reduction",
  },
  {
    id: "viagra",
    name: "Viagra (Sildenafil/Cialis)",
    category: "Vasodilator",
    risk: "High Risk",
    description:
      "Known as 'Sextasy' contextually. Both substances put opposing pressure on the heart (constriction vs dilation). Risk of priapism and cardiac failure is significantly elevated.",
    mechanism: "Cardiovascular Strain",
  },
  {
    id: "ketamine",
    name: "Ketamine",
    category: "Dissociative",
    risk: "Unsafe",
    description:
      "Known as 'Calvin Klein'. Both raise heart rate and blood pressure significantly. Can lead to ataxia (loss of movement control) and injury.",
    mechanism: "Cardiovascular Compounding",
  },
];
