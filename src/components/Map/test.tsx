import { render, screen } from "@testing-library/react";

import Map from ".";

describe("<Map />", () => {
  it("should render without any marker", () => {
    render(<Map />);

    expect(
      screen.getByRole("link", {
        name: /a js library for interactive maps/i,
      })
    ).toBeInTheDocument();
  });

  it("should render with the marker in correct place", () => {
    const places = [
      {
        id: "1",
        name: "Centenário do Sul",
        slug: "centenario-do-sul",
        locations: {
          latitude: 0,
          longitude: 0,
        },
      },
      {
        id: "2",
        name: "Lisboa",
        slug: "lisboa",
        locations: {
          latitude: 129,
          longitude: -50,
        },
      },
    ];

    render(<Map places={places} />);

    expect(screen.getByTitle(/Centenário do Sul/i)).toBeInTheDocument();
    expect(screen.getByTitle(/Lisboa/i)).toBeInTheDocument();
  });
});
