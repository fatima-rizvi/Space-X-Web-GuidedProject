import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MissionsList from './MissionsList'

describe('MissionsList tests', () => {
    test('render qithout errors', () => {
        render(<MissionsList missions = {[]}/>);
    });
    
    test('renders MIssionsList when new missions are added', () => {
        // renders with no missions
        // no missions are printed to the screen
        // rerenders with two missions
        // 3 missions are printed to the scteen
        const { rerender } = render(<MissionsList missions = { [] }/>);
        expect(screen.queryAllByTestId('mission')).toHaveLength(0);

        // you can set the data equal to a variable and pass that in
        const missionData = [
            {mission_name: "Mission 1"},
            {mission_name: "Mission 2"}
            ]
        rerender(<MissionsList 
                missions = {missionData}
            />)
        expect(screen.queryAllByTestId('mission')).toHaveLength(2);
    });
});