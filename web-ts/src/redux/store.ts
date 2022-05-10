import { configureStore } from '@reduxjs/toolkit';
import appStateSlice from './slices/appStateSlice';

export default configureStore({
    reducer: {
        appState: appStateSlice,
    },
    
})