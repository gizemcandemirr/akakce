import { render, screen } from "@testing-library/react";
import { debug } from "jest-preview";
import "@testing-library/jest-dom"; // So we can use toBeInTheDocument assertion
import DropdownMenu from "./DropdownMenu";
import userEvent from '@testing-library/user-event';

describe('Dropdown Menu Component', () => {
  it("should work as expected", () => {
    const mock = [
      { id: 1, name: "Test" },
      { id: 2, name: "Test" },
      { id: 3, name: "Test" },
    ];

    render(
      <DropdownMenu
        title="Test"
        options={mock}
        renderOption={(test) => test.name}
      />
    );
  
    debug();
  

    const dropdownDiv = screen.getByTestId('dropdown-div');
      
    expect(dropdownDiv).toHaveClass('bg-akBlue');
    expect(dropdownDiv).not.toHaveClass('bg-akYellow');

    userEvent.hover(dropdownDiv);

    expect(dropdownDiv).toHaveClass('relative rounded-lg bg-akBlue');
  });
}
)
