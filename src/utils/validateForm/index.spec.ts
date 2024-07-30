import { it, describe, expect } from "vitest";
import { validateForm } from ".";
import { ErrorField } from "../../types/definitions";

describe("validateForm Unit Test Suite", () => {
  it("should return something", () => {
    expect(
      validateForm({
        name: "Calcagno Loïc",
        email: "test@example.com",
        message: "Hello, World!",
      }),
    ).toBeDefined();
  });

  it("should be the return the appropriate types", () => {
    const formData = validateForm({
      name: "Calcagno Loïc",
      email: "test@example.com",
      message: "Hello, World!",
    });

    expect(typeof formData.isValid).toBe("boolean");
    expect(typeof formData.errors).toStrictEqual("object");
    expect(typeof formData.errors.NameEmpty as unknown as ErrorField).toBe(
      "string",
    );
    expect(typeof formData.errors.EmailEmpty as unknown as ErrorField).toBe(
      "string",
    );
    expect(typeof formData.errors.EmailFormat as unknown as ErrorField).toBe(
      "string",
    );
    expect(typeof formData.errors.MessageEmpty as unknown as ErrorField).toBe(
      "string",
    );
  });

  it("should return true if each fields are filled", () => {
    expect(
      validateForm({
        name: "Calcagno Loïc",
        email: "test@example.com",
        message: "Hello, World!",
      }).isValid,
    ).toBe(true);
  });

  it("should return false if at least one field are empty", () => {
    expect(
      validateForm({
        name: "",
        email: "test@example.com",
        message: "Hello, World!",
      }).isValid,
    ).toBe(false);
  });

  it("should return false if all fields are empty", () => {
    expect(
      validateForm({
        name: "",
        email: "test@example.com",
        message: "Hello, World!",
      }).isValid,
    ).toBe(false);
  });

  it("should return an error message if name's field is empty", () => {
    expect(
      validateForm({
        name: "",
        email: "test@example.com",
        message: "Hello, World!",
      }).errors.NameEmpty,
    ).toBe("The field name is required");
  });

  it("should return an error message if email's field is empty", () => {
    expect(
      validateForm({
        name: "Calcagno Loïc",
        email: "",
        message: "Hello, World!",
      }).errors.EmailEmpty,
    ).toBe("The field email is required");
  });

  it("should return an error message if message's field is empty", () => {
    expect(
      validateForm({
        name: "Calcagno Loïc",
        email: "test@example.com",
        message: "",
      }).errors.MessageEmpty,
    ).toBe("The field message is required");
  });

  it("should return an error message if name's field is empty", () => {
    expect(
      validateForm({
        name: "Calcagno Loïc",
        email: "test@example",
        message: "Hello, World!",
      }).errors.EmailFormat,
    ).toBe("Wrong format for password");
  });
});
