import { render, screen } from '@testing-library/react';
import Discount from './Discount';
import { debug } from "jest-preview";
import "@testing-library/jest-dom";

describe('Discount component', () => {
  it('should render the title correctly', () => {
    render(<Discount />);
    
    debug();

    const title = screen.getByText('Son Yakalanan İndirimler');
    expect(title).toBeInTheDocument();
  });

 

});
