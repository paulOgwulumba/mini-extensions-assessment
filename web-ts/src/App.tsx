import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentView, selectLoadingStatus } from './redux/slices/appStateSlice';
import { view } from './utils/constants';
import { ConditionalRender, LogInPage, ViewClassPage, LoadingPage } from './components';
import './App.css';

function App() {
    const currentView = useSelector(selectCurrentView);
    const loadingStatus = useSelector(selectLoadingStatus);

    return (
        <div className="App">
            <ConditionalRender isVisible = { currentView === view.LOG_IN_PAGE }>
                <LogInPage />
            </ConditionalRender>

            <ConditionalRender isVisible = { currentView === view.VIEW_CLASSES_PAGE }>
                <ViewClassPage />
            </ConditionalRender>

            <ConditionalRender isVisible = { loadingStatus }>
                <LoadingPage />
            </ConditionalRender>
        </div>
    );
};

export default App;
