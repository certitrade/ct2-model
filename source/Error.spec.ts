import { Error } from "."

describe("Error", () => {
	it("is simple", () => {
		const error: Error = { title: "title", describedBy: "description"}
		expect(Error.is(error))
	})
	it("is not", () => {
		const error = { title: "title", describedBy: "description", httpStatus: "404" }
		expect(Error.is(error)).toBeFalsy()
	})
})
