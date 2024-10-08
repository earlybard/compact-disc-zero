"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {useAppDispatch, useAppSelector} from "@/lib/store/util/hooks";
import {agentActions} from "@/lib/store/agentStore";

// Mostly just taken from https://ui.shadcn.com/docs/components/combobox

export function AgentSelector() {
    const [open, setOpen] = React.useState(false)

    const agent = useAppSelector((state) => state.agent)
    const dispatch = useAppDispatch()

    return (
        <>
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger  asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {agent.selectedAgent ? agent.selectedAgent.label : "Select Agent..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search Agent..." />
                    <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                            {agent.agents.map((a) => (
                                <CommandItem
                                    key={a.label}
                                    value={a.label}
                                    onSelect={(value) => {
                                        dispatch(agentActions.selectAgent(value))
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                             agent.selectedAgent.label === a.label ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {a.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
        </>
    )
}
