import React from "react";
import { render, screen } from "@testing-library/react";
import List from "../List";
import mockedData from '../../youtube-videos-mock.json';

describe("items list", () => {
  it("There is an items list displayed", () => {
    const { items } = mockedData;     
    render(<List items={items} />);
    expect(screen.queryByTestId("items-list").tagName).toBe('DIV');
    expect(screen.queryAllByTestId("items-list").length).toBe(1);
  });
  it("There are 25 items in the items list", () => {
    const { items } = mockedData;     
    render(<List items={items} />);
    expect(screen.queryAllByTestId("item").length).toBe(25);
  });
});