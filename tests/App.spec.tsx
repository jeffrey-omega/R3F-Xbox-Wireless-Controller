import React from "react";
import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import App from "../src/App";

describe("App", () => {
  test("App renders correctly canvas", async () => {
    const renderer = render(<App />);
    const canvas = renderer
      .asFragment()
      .querySelector("canvas")! as HTMLCanvasElement;
    await expect(canvas).toBeTruthy();
  });
});
