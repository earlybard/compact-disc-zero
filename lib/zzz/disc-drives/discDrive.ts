import {AgentBaseStat} from "@/lib/zzz/stats/baseStats";
import {DriveMainstat, DriveSubstat} from "@/lib/zzz/stats/discStats";

export interface DiscDrive {
  mainStat: DriveMainstat | undefined
  subStat1: DriveSubstat | undefined
  subStat2: DriveSubstat | undefined
  subStat3: DriveSubstat | undefined
  subStat4: DriveSubstat | undefined
}

export const DefaultDiscValues: DiscDrive = {
  mainStat: undefined,
  subStat1: undefined,
  subStat2: undefined,
  subStat3: undefined,
  subStat4: undefined
}

export type AgentDiscDrives = [
  DiscDrive,
  DiscDrive,
  DiscDrive,
  DiscDrive,
  DiscDrive,
  DiscDrive
]

export const DefaultDiscs: AgentDiscDrives = [
  {...DefaultDiscValues},
  {...DefaultDiscValues},
  {...DefaultDiscValues},
  {...DefaultDiscValues},
  {...DefaultDiscValues},
  {...DefaultDiscValues},
]