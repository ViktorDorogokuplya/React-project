import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props shuld be in the state!)", () => {
    const component = create(<ProfileStatus status="React + Redux" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("React + Redux");
  });
  test("must be created <span>!)", () => {
    const component = create(<ProfileStatus status="React + Redux" />);
    const root = component.root;
    let span = root.findAllByType("span");
    expect(span).not.toBeNull();
  });
//   test("must by created <input>!)", () => {
//     const component = create(<ProfileStatus status="React + Redux" />);
//     const root = component.root;
//     expect(() => {
//         let input = root.findAllByType("input");
//     }).toThrow();
//   });
  test("after creation <span> must be have text: React + Redux!)", () => {
    const component = create(<ProfileStatus status="React + Redux" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("React + Redux");
  });
  test("after click, <input> must be have text: React + Redux!)", () => {
    const component = create(<ProfileStatus status="React + Redux" />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();
    let input = root.findByType("input");
    expect(input.props.value).toBe("React + Redux");
  });
  test("collback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status="React + Redux" updateStatus={mockCallback} />);
    const instance = component.getInstance();
    instance.deActivateEditeMode()
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});