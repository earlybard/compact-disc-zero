// export type DriveSubstat =
//   "critDmg" |
//   "critRate" |
//   "atkFlat" |
//   "atkPercent" |
//   "hpFlat" |
//   "hpPercent" |
//   "defFlat" |
//   "defPercent" |
//   "penFlat" |
//   "anomalyProficiency"

export const ODriveSubstat = {
  critDmg:  "Crit Damage",
  critRate:  "Crit Rate",
  atkFlat:  "Atk",
  atkPercent:  "Atk %",
  hpFlat:  "HP",
  hpPercent:  "HP %",
  defFlat:  "Def",
  defPercent:  "Def %",
  penFlat:  "Pen",
  anomalyProficiency:  "Anomaly Proficiency"
}

export type DriveSubstat = typeof ODriveSubstat[keyof typeof ODriveSubstat];

export type AgentDriveSubstatCount = Record<DriveSubstat, number>

export const DefaultAgentDriveSubstatCount: AgentDriveSubstatCount = {
  critDmg: 0,
  critRate: 0,
  anomalyProficiency: 0,
  atkFlat: 0,
  atkPercent: 0,
  defFlat: 0,
  defPercent: 0,
  hpFlat: 0,
  hpPercent: 0,
  penFlat: 0
}

export type DriveMainstat =
  "critDmg" |
  "critRate" |
  "atkFlat" |
  "atkPercent" |
  "hpFlat" |
  "hpPercent" |
  "defFlat" |
  "defPercent" |
  "anomalyProficiency" |
  "anomalyMastery" |
  "energyRegen" |
  "impact" |
  "attributeDamagePercent" |
  "penRatio"

export type AgentDriveMainstatCount = Record<DriveMainstat, number>

export const DefaultAgentDriveMainstatCount: AgentDriveMainstatCount = {
  anomalyMastery: 0,
  anomalyProficiency: 0,
  atkFlat: 1,
  atkPercent: 0,
  attributeDamagePercent: 0,
  critDmg: 0,
  critRate: 0,
  defFlat: 1,
  defPercent: 0,
  energyRegen: 0,
  hpFlat: 1,
  hpPercent: 0,
  impact: 0,
  penRatio: 0
}
