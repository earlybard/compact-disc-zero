import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Agent} from "@/lib/zzz/core/Agent";
import {JaneDoe} from "@/lib/zzz/agents/janeDoe";
import {ZhuYuan} from "@/lib/zzz/agents/zhuYuan";
import {DiscDrive} from "@/lib/zzz/disc-drives/discDrive";

export interface AgentState {
    agents: Agent[]
    selectedAgent: Agent
}

const initialState: AgentState = {
    agents: [
        JaneDoe,
        ZhuYuan
    ],
    selectedAgent: JaneDoe
}

export const agentSlice = createSlice({
    name: 'agent',
    initialState,
    reducers: {
        /**
         * Change the currently selected Agent.
         */
        selectAgent: (state, payload: PayloadAction<string>) => {

            const index = state.agents.findIndex(x => x.label === payload.payload)
            const selectedAgent = state.agents[index]

            if (selectedAgent) {
                state.selectedAgent = selectedAgent
            }
        },
        updateDisc: (state, payload: PayloadAction<{ idx: number, drive: DiscDrive }>) => {
            state.selectedAgent.discDrives[payload.payload.idx] = payload.payload.drive
        }
    }
})

export const agentActions = agentSlice.actions
export const agentReducer = agentSlice.reducer