import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Agent, AgentName} from "@/lib/zzz/core/Agent";
import {JaneDoe} from "@/lib/zzz/agents/janeDoe";
import {ZhuYuan} from "@/lib/zzz/agents/zhuYuan";

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
        selectAgent: (state, payload: PayloadAction<Agent | null>) => {

            const index = state.agents.findIndex(x => x.label === payload.payload?.label)
            const selectedAgent = state.agents[index]

            if (selectedAgent) {
                state.selectedAgent = selectedAgent
            }
        }
    }
})

export const agentActions = agentSlice.actions
export const agentReducer = agentSlice.reducer