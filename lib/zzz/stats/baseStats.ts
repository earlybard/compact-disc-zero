export type AgentBaseStat =
  "hp" |
  "def" |
  "atk" |
  "critDmg" |
  "critRate" |
  "penRatio" |
  "impact" |
  "anomalyMastery" |
  "anomalyProficiency" |
  "energyRegen"

export type AgentBaseStats = Record<AgentBaseStat, number>