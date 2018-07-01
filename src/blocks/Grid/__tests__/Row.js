import React from "react";
import Row from "../Row";
import renderer from "react-test-renderer";
import "jest-styled-components";

describe("Grid.Row Element", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Row />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
