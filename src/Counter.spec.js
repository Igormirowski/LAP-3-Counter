import { fireEvent, screen } from '@testing-library/react';
import Counter from './Counter';

//beforeEach runs bit of code before every test
describe('Counter', () => {
    
    beforeEach(() => render(<Counter />))

    test('it loads with the counter at 0', () => {
        const counter = screen.getByRole('figure')
        expect(counter.textContent).toBe("Count: 0")
    })

    test('clicking the btn increases counter by one', ()=> {
    const counter = screen.getByRole('figure')
    const button = screen.getByRole("button") // for few buttons use: ('button', { nameL : 'add one})
    fireEvent.click(button) 
    // fireEvent.click(button) // if test the button to click twice add one more line
    expect(counter.textContent).toBe("Count: 1")
    })
})
