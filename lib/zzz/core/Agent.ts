import {AgentDriveMainstatCount, AgentDriveSubstatCount, DriveMainstat} from "@/lib/zzz/stats/discStats";
import {BuffValues} from "@/lib/zzz/stats/buffs";
import {AgentBaseStats} from "@/lib/zzz/stats/baseStats";
import {AgentDiscDrives, DiscDrive} from "@/lib/zzz/disc-drives/discDrive";

export type AgentName =
  "Jane Doe" |
  "Zhu Yuan"

interface Attacks {

}

export interface Agent {
  label: AgentName
  baseStats: AgentBaseStats
  // TODO store mainstats with their multipliers rather than storing counts here
  mainstatCount: AgentDriveMainstatCount
  substatCount: AgentDriveSubstatCount
  buffs: BuffValues
  discDrives: AgentDiscDrives
}
