import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  pages: {
    error: "/login",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    // TwitterProvider({
    //   clientId: process.env.TWITTER_ID as string,
    //   clientSecret: process.env.TWITTER_SECRET as string,
    //   version: "2.0"
    // }),
    // GitHubProvider({
    //   clientId: process.env.GITHUB_ID as string,
    //   clientSecret: process.env.GITHUB_SECRET as string,
    // }),
    // LinkedInProvider({
    //   clientId: process.env.LINKEDIN_ID as string,
    //   clientSecret: process.env.LINKEDIN_SECRET as string,
    // }),
  ],
});

export { handler as GET, handler as POST };
