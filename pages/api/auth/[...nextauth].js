import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/Google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.Google_CLIENT_ID,
      clientSecret: process.env.Google__CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
}

