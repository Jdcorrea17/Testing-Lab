const {returnTwo, greeting, add} = require("./functions.js")

test("Should return 2", () => {
    expect(returnTwo()).toBe(2)
})

test("Should return names", () => {
    expect(greeting("James")).toBe("Hello, James")
    expect(greeting('Jill')).toBe("Hello, Jill")
})

test("should add numnbers", () => {
    expect(add(1, 2)).toBe(3)
    expect(add(5, 9)).toBe(14)
})