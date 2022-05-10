import { createSlice } from '@reduxjs/toolkit';
import { view } from '../../utils/constants';

export const appStateSlice = createSlice({
    name: 'appState',
    initialState: {
        currentView: view.LOG_IN_PAGE,
        loadingStatus: false,
    },
    reducers: {
        updateCurrentView: (state, action) => {
            state.currentView = action.payload;
        },
        updateLoadingStatus: (state, action) => {
            state.loadingStatus = action.payload;
        }
    }
});

export const { updateCurrentView, updateLoadingStatus } = appStateSlice.actions;

export const selectCurrentView = (state: any) => state.appState.currentView;

export const selectLoadingStatus = (state: any) => state.appState.loadingStatus;

export default appStateSlice.reducer;
