import { describe, it, expect } from "vitest";
import { getAPIKey } from "../api/auth";

describe("check api key", () => {

  it("returns API key if header is valid", () => {
    const headers = {
      authorization: "ApiKey 12345"
    };

    const result = getAPIKey(headers);

    expect(result).toBe("12345");
  });

});
