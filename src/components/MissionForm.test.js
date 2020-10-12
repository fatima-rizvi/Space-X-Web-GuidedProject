import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MissionForm from './MissionForm';

describe('MissionForm tests', () => {
    test('render without error', () => {
        // Arrange
            render(<MissionForm />);
        // Act - it will internally check to see if there are errors
        // Assert - if there are errors, the test will automatically flag as false
    })

    test('renders fetching data when isFetchingData is true', () => {
        render(<MissionForm isFetchingData = {true}/>)
        expect(screen.getByText(/we are fetching data/i)).not.toBeNull();
        // want to use query by bc it will return null, not throw the test like get
        expect(screen.queryByText(/get data/i)).toBeNull();

    })

    test('renders button when isFetchingData is false', () => {
        render(<MissionForm isFetchingData = {false}/>)
        expect(screen.getByRole('button')).not.toBeNull();
        expect(screen.queryByText(/we are fetching data/i)).toBeNull();
    })

    test('calls getData when button is pressed', () => {
        //use a mock (a fake function)
        // ex) const mockGetData = jest.fn();
        const mockGetData =  jest.fn();
        //turn it into a proper function if desired
        // const mockGetData =  jest.fn(() => {
        //     return('Fatima')
        // });
        
        render(<MissionForm getData = {mockGetData}/>);
        //render(<MissionForm getData = {() => {mockGetData(27, 'Fatima')}}/>);
        //Act
        const button = screen.getByRole("button");
        fireEvent.click(button);
        // fireEvent.click(button);
        // fireEvent.click(button);

        //mockGetData.mockReturnValueOnce('Fatima');
        
        console.log(mockGetData.mock);

        //check to see if the mock was called ONCE
        expect(mockGetData.mock.calls.legnth === 1);
        // OR
        //expect(mockGetData.mock.calls).toBe(1);
        //Um, the one above doesn't actually work for me
        // // OR
        expect(mockGetData.mock.calls).toHaveLength(1);
    })
})