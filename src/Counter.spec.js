import { screen } from '@testing-library-react';
import Counter from './Counter';

//beforeEach runs bit of code before every test
describr('Counter', () => {
    beforeEach(() => render('Counter'))

    test('it loads with the counter at 0', () => {
        const counter = screen.getByRole('figure')
        expect(counter.textContent).toBe(0)
    })
})
