import { render, screen, fireEvent } from "@testing-library/react";
import GeneralInformation from "./GeneralInformation";
import "@testing-library/jest-dom";

describe("GeneralInformation component", () => {
  it("should render general information correctly when data is available", () => {
    const mockGeneralInformation = {
      currentStatus: "Active",
      client: "ABC Company",
      stage: "Stage 1",
      offers: [
        {
          companyName: "XYZ Company",
          offeredCtc: "10 LPA",
          joiningBy: "2022-06-30",
        },
      ],
      assignee: "John Doe",
      noticePeriod: "30 days",
    };

    render(<GeneralInformation />);

    const currentStatusElement = screen.getByText(/Active/i);
    const clientElement = screen.getByText(/ABC Company/i);
    const stageElement = screen.getByText(/Stage 1/i);
    const noOfOffersElement = screen.getByText(/1/i);
    const assigneeElement = screen.getByText(/John Doe/i);
    const noticePeriodElement = screen.getByText(/30 days/i);
    const viewDetailsElement = screen.getByText(/View Details/i);

    expect(currentStatusElement).toBeInTheDocument();
    expect(clientElement).toBeInTheDocument();
    expect(stageElement).toBeInTheDocument();
    expect(noOfOffersElement).toBeInTheDocument();
    expect(assigneeElement).toBeInTheDocument();
    expect(noticePeriodElement).toBeInTheDocument();
    expect(viewDetailsElement).toBeInTheDocument();
  });

  it("should toggle offer details visibility when 'View Details' is clicked", () => {
    render(<GeneralInformation />);

    const viewDetailsElement = screen.getByText(/View Details/i);

    fireEvent.click(viewDetailsElement);

    const offerCard = screen.getByTestId("offer-card");

    expect(offerCard).toBeInTheDocument();

    fireEvent.click(viewDetailsElement);

    expect(offerCard).not.toBeInTheDocument();
  });

  it("should not render the offer details when no offers are available", () => {
    render(<GeneralInformation />);

    const viewDetailsElement = screen.getByText(/View Details/i);

    expect(viewDetailsElement).not.toBeInTheDocument();
  });
});
