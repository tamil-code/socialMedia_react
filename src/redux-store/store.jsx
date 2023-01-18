import {configureStore,createSlice} from '@reduxjs/toolkit'

const sidebarstate = createSlice({
    name:'sidebar',
    initialState:{
        control:'close',
        action:false
    },
    reducers:{
        handleSidebar(state){
           if(state.control==='open'){
               state.control='close'
           }
           else{
            state.control='open'
           }
        },
        changeAction(state){
            state.action = !state.action;
        }
    }
})

const store = configureStore({
    reducer:sidebarstate.reducer
})

export default store;
export const SidebarActions = sidebarstate.actions;