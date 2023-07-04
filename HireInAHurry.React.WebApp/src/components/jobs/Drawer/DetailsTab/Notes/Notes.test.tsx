import { render, screen } from "@testing-library/react";
import Notes from "./Notes";

describe("Notes component", () => {
  it("should render notes correctly when notes are available", () => {
    const mockNotes = [
      {
        vendorUserName: "John Doe",
        message: "This is a note",
        postedDate: "2023-06-28",
      },
      {
        vendorUserName: "Jane Smith",
        message: "Another note",
        postedDate: "2023-06-29",
      },
    ];

    render(<Notes />);

    const noteElements = screen.getAllByTestId("note");

    expect(noteElements).toHaveLength(mockNotes.length);

    mockNotes.forEach((note, index) => {
      const noteElement = noteElements[index];

      const vendorUserName = screen.getByText(note.vendorUserName);
      expect(vendorUserName).toBeInTheDocument();
      expect(noteElement).toContainElement(vendorUserName);

      const message = screen.getByText(note.message);
      expect(message).toBeInTheDocument();
      expect(noteElement).toContainElement(message);

      const postedDate = screen.getByText(note.postedDate);
      expect(postedDate).toBeInTheDocument();
      expect(noteElement).toContainElement(postedDate);
    });
  });

  it("should not render any notes when notes are not available", () => {
    render(<Notes />);
    const noteElements = screen.queryAllByTestId("note");
    expect(noteElements).toHaveLength(0);
  });
});
