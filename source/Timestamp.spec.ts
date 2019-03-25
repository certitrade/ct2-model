import { Timestamp } from "./Timestamp"

describe("Timpestamp", () => {
	it("create", () => {
		const value = Timestamp.create(new Date(Date.UTC(2020, 11, 31, 23, 59, 59)))
		expect(value).toEqual("2020-12-31 23:59:59")
	})
	it("parse", () => {
		const value = Timestamp.parse("2020-12-31 23:59:59")
		expect(value).toEqual(new Date(Date.UTC(2020, 11, 31, 23, 59, 59)))
	})
})
