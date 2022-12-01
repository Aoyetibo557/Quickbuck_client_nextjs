// this is a dynamic routh to catch all the nextauth routes and pass them to the nextauth handler
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { loginHelper } from '../../../utils/userauth';


const authOptions ={
    providers: [
        CredentialsProvider({
            type: 'credentials',
            name: 'Credentials',
            credentials: {}, 

            async authorize(credentials, req) {
                const res = await loginHelper(credentials.username, credentials.password);
                if (res.message === "Invalid credentials!") {
                    return new Error(res.message || 'Invalid credentials!');
                }else if(res.message === "Authentication Sucessfull!") {
                    return res;
                }else{
                    return new Error(res.message || 'something went wrong!');
                }
                               
            }
        })
    ],
    
    session: {
        jwt: true,
    },
    callbacks: {
        async jwt(token, user, account) {
            if(account && user) {
               return {
                ...token,
                accessToken: user.data.token,
               }
            }
        },
        async session({ session, token, user }) {
           /**
            * @param session - The current session object
            * @param token - The JWT token
            * @param user - The user object
            * get the user data from the user object, message and token and add it to the session
            */
            if(user) {
                session.user = user.user;
                session.message = user.message;
                session.token = user.token;
            }
            return session;
        }
    },
    pages: {
        signIn: '/authpage/login',
        
    },

}

export default NextAuth (authOptions);
// export default (req, res) => NextAuth(req, res, authOptions) 