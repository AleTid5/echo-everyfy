import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("when starting a timer", () => {
  test("should start timer and countdown should start", async () => {
    render(<App />);
    const startButton = screen.getByText(/start/i);
    fireEvent.click(startButton);

    // Countdown started
    await waitFor(() => expect(screen.getByText("04:58")).toBeInTheDocument(), {
      timeout: 2500,
    });
  });

  test("should stop timer and restart countdown", async () => {
    render(<App />);
    const startButton = screen.getByText(/Start/i);
    fireEvent.click(startButton);

    // Countdown started
    await waitFor(() => expect(screen.getByText("04:58")).toBeInTheDocument(), {
      timeout: 2500,
    });

    const stopButton = screen.getByText(/stop/i);
    fireEvent.click(stopButton);

    expect(screen.getByText("05:00")).toBeInTheDocument();
  });
});
