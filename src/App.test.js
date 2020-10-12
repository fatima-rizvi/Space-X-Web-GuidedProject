import React from 'react';
import { render, screen, fireEvent, wait } from '@testing-library/react';
import App from './App';

//defining mock
import { fetchMissions as mockFetchMissions } from './api/fetchMissions';
//saying that a mock function should replace anytime I try to access this inside of my function
jest.mock('./api/fetchMissions')

describe('app tests', () => {
    test('renders without errors', () => {
        render(<App />);
    });

    test('fetches mission data and renders data', async () => {
        render(<App />);
        mockFetchMissions.mockResolvedValueOnce({ 
            data: [
            {mission_name: "Mission 1"},
            {mission_name: "Mission 2"}
        ]});

        const button = screen.getByRole('button');
        fireEvent.click(button);

        await wait();

        console.log(screen.queryAllByTestId('mission'));
        expect(screen.queryAllByTestId('mission')).toHaveLength(2);
    })

});