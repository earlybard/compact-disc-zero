"use client"

import {MainstatMultipliers, SubstatMultipliers} from "@/lib/zzz/constants/statMultipliers";
import {useAppSelector} from "@/lib/store/util/hooks";
import {AnomalyMultipliers, AnomalyType} from "@/lib/zzz/constants/anomaly";
import {Separator} from "@/components/ui/separator";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {AgentSelector} from "@/components/AgentSelector";

/**
 * Damage calcs. Displayed as a component mainly for reference.
 */
export default function DamagePage() {

  const agent = useAppSelector(s => s.agent.selectedAgent)

  const baseStats = agent.baseStats
  const mainstatCount = agent.mainstatCount
  const substatCount = agent.substatCount
  const buffs = agent.buffs

  // 714 is wengine attack. TODO this needs to be its own object
  const baseAttack = baseStats.atk + 714;

  // TODO make mainstat and substat
  const basicAttack =
    baseAttack +
    (mainstatCount.atkFlat * MainstatMultipliers.atkFlat) +
    (mainstatCount.atkPercent * MainstatMultipliers.atkPercent * baseAttack) +
    (substatCount.atkPercent * SubstatMultipliers.atkPercent * baseAttack) +
    (substatCount.atkFlat * SubstatMultipliers.atkFlat) +
    buffs.basicAtkFlat +
    (buffs.basicAtkPercent * baseAttack);

  const finalAttack =
    basicAttack +
    (buffs.finalAtkPercent * basicAttack) +
    buffs.finalAtkFlat;

  const attributeDamagePercent =
    buffs.attributeDamagePercent +
    (mainstatCount.attributeDamagePercent * MainstatMultipliers.attributeDamagePercent)

  const penFlat = (substatCount.penFlat * SubstatMultipliers.penFlat) + buffs.penFlat
  const penRatio = (mainstatCount.penRatio * MainstatMultipliers.penRatio) + buffs.penPercent

  const TARGET_BASE_DEF = 921
  const targetDef = TARGET_BASE_DEF - (TARGET_BASE_DEF * buffs.defShred)
  const effectiveDef = targetDef * (1 - penRatio) - penFlat
  const DEF_LEVEL_COEFFICIENT = 794
  const defMultiplier = DEF_LEVEL_COEFFICIENT / (DEF_LEVEL_COEFFICIENT + effectiveDef)

  const innateResPercent = 0
  const allTypeResPercent = 0
  const resMultiplier = 1 - innateResPercent - allTypeResPercent + buffs.resShred

  let critRate =
    (mainstatCount.critRate * MainstatMultipliers.critRate) +
    (substatCount.critRate * SubstatMultipliers.critRate) +
    baseStats.critRate +
    buffs.critRate

  const critDmg =
    (mainstatCount.critDmg * MainstatMultipliers.critDmg) +
    (substatCount.critDmg * SubstatMultipliers.critDmg) +
    baseStats.critDmg +
    buffs.critDmg

  const critMultiplier = 1 + (critRate * critDmg)

  const dmgTaken = 1 + buffs.dmgTaken

  const attackScale =
    (1 + attributeDamagePercent) *
    dmgTaken *
    defMultiplier *
    resMultiplier *
    critMultiplier *
    finalAttack

  // TODO Why?????
  // This is from jstern "Damage Formula" I28
  const ANOMALY_BUFF_LEVEL = 2;

  const wengineAnomaly = 0
  // Not sure if this is a buff?
  const anomalyProficiency = wengineAnomaly + 100

  const apBonus = (
    (mainstatCount.anomalyProficiency * MainstatMultipliers.anomalyProficiency) +
    (substatCount.anomalyProficiency * SubstatMultipliers.anomalyProficiency) +
    anomalyProficiency +
    baseStats.anomalyProficiency
  ) / 100

  // TODO values are very slightly different from the spreadsheet.
  // Might just be some rounding in Google sheets that I'm not doing.

  // Will need to compare to in-game to make sure I get this right.
  const anomaly =
    (1 + attributeDamagePercent) *
    defMultiplier *
    resMultiplier *
    dmgTaken *
    apBonus *
    ANOMALY_BUFF_LEVEL *
    finalAttack

  // TODO JD does anomaly crits. This needs to be incorporated in buffs.
  const anomalyDamage: Record<AnomalyType, number> = {
    shatter: anomaly * AnomalyMultipliers.shatter,
    assault: anomaly * AnomalyMultipliers.assault,
    burn: anomaly * AnomalyMultipliers.burn,
    corruption: anomaly * AnomalyMultipliers.corruption,
    shock: anomaly * AnomalyMultipliers.shock
  }

  // Final anomaly damage:
  // Fill in how many procs of each anomaly will happen.
  // Calculate damage for each.
  // Fill in a rough "rotation" with a couple of anomaly procs.

  return (
    <div>
      <div className="my-4"></div>
      <AgentSelector/>
      <Separator className="my-4" />
      <div className="grid grid-cols-6 gap-4">
        <InputWithLabel placeholder="Base Attack" value={Math.round(baseAttack)}/>
        <InputWithLabel placeholder="Basic Attack" value={Math.round(basicAttack)}/>
        <InputWithLabel placeholder="Final Attack" value={Math.round(finalAttack)}/>
        <InputWithLabel placeholder="Flat Pen" value={Math.round(penFlat)}/>
        <InputWithLabel placeholder="Pen Ratio" value={(penRatio)}/>
        <InputWithLabel placeholder="Def Multiplier" value={(defMultiplier.toFixed(2))}/>
        <InputWithLabel placeholder="Attribute Damage %" value={(attributeDamagePercent)}/>
        <InputWithLabel placeholder="Crit Rate" value={(critRate.toFixed(2))}/>
        <InputWithLabel placeholder="Crit Dmg" value={(critDmg.toFixed(2))}/>
        <InputWithLabel placeholder="Crit Multiplier" value={(critMultiplier.toFixed(2))}/>
        <InputWithLabel placeholder="Res Multiplier" value={(resMultiplier)}/>
        <InputWithLabel placeholder="Anomaly" value={Math.round(anomaly)}/>
        <InputWithLabel placeholder="AP Bonus" value={Math.round(apBonus)}/>
      </div>
      <Separator className="my-4" />
      <div className="grid grid-cols-6 gap-4">
        <InputWithLabel placeholder="Assault Damage" value={Math.round(anomalyDamage.assault)}/>
        <InputWithLabel placeholder="Shatter Damage" value={Math.round(anomalyDamage.shatter)}/>
        <InputWithLabel placeholder="Burn Damage" value={Math.round(anomalyDamage.burn)}/>
        <InputWithLabel placeholder="Corruption Damage" value={Math.round(anomalyDamage.corruption)}/>
        <InputWithLabel placeholder="Shock Damage" value={Math.round(anomalyDamage.shock)}/>
      </div>
      <Separator className="my-4" />
      <InputWithLabel placeholder="Attack Scale" value={Math.round(attackScale)}/>
      <p className="text-white/50">Attack Scale is multiplied by skill values for the final damage per hit</p>
    </div>
  );
}

const InputWithLabel: React.FC<{placeholder: string, value: any}> = (props) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label>{props.placeholder}</Label>
      <Input id={props.placeholder} value={props.value} disabled />
    </div>
  )
}