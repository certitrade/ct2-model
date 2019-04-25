import * as model from "."

describe("Error", () => {
	it("is simple", () => {
		const error: model.Error = { title: "title", describedBy: "description"}
		expect(model.Error.is(error))
	})
	it("is not", () => {
		const error = { title: "title", describedBy: "description", httpStatus: "404" }
		expect(model.Error.is(error)).toBeFalsy()
	})
})
