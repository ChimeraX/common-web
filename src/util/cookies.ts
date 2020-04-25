export interface Cookies {
	[key: string]: string;
}

export function getCookies(): Cookies {
	return document.cookie
		.split(';')
		.map((x) => x.trim().split('='))
		.reduce((acc: Cookies, value: string[]) => {
			acc[value[0]] = value[1];
			return acc;
		}, {});
}
