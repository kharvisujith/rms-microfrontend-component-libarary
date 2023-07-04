import { Provider } from "react-redux";
import NotesForm from "./NotesForm";
import { store } from "../../../../Redux/store/configureStore";
import { render, screen, fireEvent, getByRole } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
describe("NotesForm", () => {
  const register = jest.fn();
  test("element should be in the document", () => {
    const { getByRole, getByLabelText, getByTestId } = render(
      <NotesForm register={() => {}} />
    );
    const ButtonSave = screen.getByText("Save");
    expect(ButtonSave).toBeInTheDocument();
    const Element = screen.getByTestId("notes-form-comp");
    expect(Element).toBeInTheDocument();
    const ButtonNote = screen.getByRole("dialog-submit");
    expect(ButtonNote).toBeInTheDocument();
  });
  test("should submit notes when Save button is clicked", () => {
    const mockRegister = jest.fn();
    render(<NotesForm register={mockRegister} />);

    const notesTextarea = screen.getByRole("textbox");
    userEvent.type(notesTextarea, "This is a test note.");

    const saveButton = screen.getByRole("dialog-submit");
    userEvent.click(saveButton);

    // expect(mockRegister).toHaveBeenCalledWith("notes", { required: false });
  });
});
