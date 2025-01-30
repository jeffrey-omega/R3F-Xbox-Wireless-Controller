import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import App from "../src/App";

describe("App", () => {
  test("App renders correctly canvas", async () => {
    const queryClient = new QueryClient();
    const renderer = render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );
    const canvas = renderer
      .asFragment()
      .querySelector("canvas")! as HTMLCanvasElement;
    await expect(canvas).toBeTruthy();
  });
});
