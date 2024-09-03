"use client"
import {Input} from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {useAppDispatch, useAppSelector} from "@/lib/store/util/hooks";
import {agentActions} from "@/lib/store/agentStore";
import {DriveMainstat, DriveSubstat, ODriveSubstat} from "@/lib/zzz/stats/discStats";

export default function DiscDrivesPage() {

  const agent = useAppSelector(s => s.agent.selectedAgent)
  const dispatch = useAppDispatch()

  console.log(agent.discDrives[0])

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <div>
        <Select value={agent.discDrives[0].mainStat} onValueChange={(e) => {
          const disc = {...agent.discDrives[0]}
          disc.subStat1 = e
          dispatch(agentActions.updateDisc({idx: 0, drive: disc}))
        }}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {/*<SelectLabel>Fruits</SelectLabel>*/}
              {
                Object.entries(ODriveSubstat).map(([k, v]) => <SelectItem key={k} value={k}>{v}</SelectItem>)
              }
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}