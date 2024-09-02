import {DriveMainstat, DriveSubstat} from "@/lib/zzz/stats/discStats";

export const SubstatMultipliers: Record<DriveSubstat, number> = {
  anomalyProficiency: 9,
  atkFlat: 19,
  atkPercent: 0.03,
  defFlat: 15,
  defPercent: 0.048,
  critDmg: 0.048,
  critRate: 0.024,
  hpFlat: 112,
  hpPercent: 0.03,
  penFlat: 9
}

export const MainstatMultipliers: Record<DriveMainstat, number> = {
  anomalyMastery: 0.3,
  anomalyProficiency: 92,
  atkFlat: 316,
  atkPercent: 0.3,
  critDmg: 0.48,
  critRate: 0.24,
  attributeDamagePercent: 0.3,
  defFlat: 184,
  defPercent: 0.48,
  energyRegen: 0.6,
  hpFlat: 2200,
  hpPercent: 0.3,
  impact: 0.18,
  penRatio: 0.24
}