import * as model from "."

describe("Timpestamp", () => {
	it("create", () => {
		const value = model.Timestamp.create(new Date(Date.UTC(2020, 11, 31, 23, 59, 59)))
		expect(value).toEqual("2020-12-31 23:59:59")
	})
	it("parse", () => {
		const value = model.Timestamp.parse("2020-12-31 23:59:59")
		expect(value).toEqual(new Date(Date.UTC(2020, 11, 31, 23, 59, 59)))
	})
	it("is", () => {
		expect(model.Timestamp.is("2020-12-31 23:59:59"))
		expect(model.Timestamp.is("2016-12-31 23:59:60")) // leap second
	})
})
