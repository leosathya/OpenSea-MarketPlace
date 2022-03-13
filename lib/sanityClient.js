import sanityClient from "@sanity/client";

export const client = sanityClient({
	projectId: "5rkf9h5g",
	dataset: "production",
	apiVersion: "2022-02-01",
	token:
		"skvk0PG3TkToUvLZJT8mq6dkvNfTY1MTu2prWT7VIEGIThQSTZlIo6FJwNR6Xb6V0O2MqfwJp8JCpro21D0o8fHWuOkLwwAGCqDhav2NAvfV8c61PGwqGuBGerLoSPLsD9BpwCXTHoMu8NowlYppJwTD56fGSoNeXXnOI1uqWqG6UKGtddM6",
	useCdn: false,
});
