import NextAuth from "next-auth/next"; // Importing NextAuth, a Next.js authentication library
import GoogleProvider from "next-auth/providers/google"; // Importing the Google authentication provider for NextAuth

// Define an authentication handler using NextAuth
const handler = NextAuth({
	providers: [
		// Configure the Google authentication provider
		GoogleProvider({
			clientId:
				"931854902239-bd16pe5bbjotuu24ddkls898e8nqg3l5.apps.googleusercontent.com", // Google Client ID obtained from environment variables
			clientSecret: "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", // Google Client Secret obtained from environment variables
		}),
	],
});

// Export the authentication handler as GET and POST for different HTTP methods
export { handler as GET, handler as POST };
