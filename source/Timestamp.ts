export type Timestamp = string

export namespace Timestamp {
	export function is(value: any | Timestamp) {
		return typeof(value) == "string" &&
			/^\\d{4}-[0-1][0-3]-[0-3]\\d{1} [0-2]\\d{1}:[0-5]\\d{1}:[0-5]\\d{1}Z$/.test(value)
	}
	export function parse(value: Timestamp): Date {
		return new Date(value.replace(/-/g, "/" + " UTC"))
	}
	export function create(value: Date): Timestamp {
		return value.getUTCFullYear().toString().padStart(4, "0") + "-" +
			(value.getUTCMonth() + 1).toString().padStart(2, "0") + "-" +
			value.getUTCDate().toString().padStart(2, "0") + " " +
			value.getUTCHours().toString().padStart(2, "0") + ":" +
			value.getUTCMinutes().toString().padStart(2, "0") + ":" +
			value.getUTCSeconds().toString().padStart(2, "0")
	}
	export function now(): Timestamp {
		return create(new Date())
	}
}
