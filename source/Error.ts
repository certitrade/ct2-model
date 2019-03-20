export interface Error {
	/** URL that refers to a description of the error. */
	readonly describedBy: string,
	/** Short title of the error. */
	readonly title: string,
	/**  	No 	Detailed information about the error. */
	readonly detail?: string,
	/** HTTP status code. */
	readonly httpStatus?: number,
}
export namespace Error {
	export function is(value: Error | any): value is Error {
		return typeof(value) == "object" &&
			typeof(value.describedBy) == "string" &&
			typeof(value.title) == "string" &&
			(value.detail == undefined || typeof(value.detail) == "string") &&
			(value.httpStatus == undefined || typeof(value.httpStatus) == "number")
	}
}
