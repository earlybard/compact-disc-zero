import {AgentDriveMainstatCount, AgentDriveSubstatCount, DriveMainstat} from "@/lib/zzz/stats/discStats";
import {BuffValues} from "@/lib/zzz/stats/buffs";
import {AgentBaseStats} from "@/lib/zzz/stats/baseStats";

export type AgentName =
  "Jane Doe" |
  "Zhu Yuan"

export interface Agent {
  label: AgentName
  baseStats: AgentBaseStats
  // TODO store mainstats with their multipliers rather than storing counts here
  mainstatCount: AgentDriveMainstatCount
  substatCount: AgentDriveSubstatCount
  buffs: BuffValues
}
