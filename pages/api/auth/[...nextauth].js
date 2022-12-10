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
                    console.log(res.user);
                    return res;
                }else{
                    return new Error(res.message || 'something went wrong!');
                }
            }
        })
    ],
    
    session: {
        jwt: true,
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({token, user, account}) {
            if(user) {
                token.accessToken = user.token;
                account = user.user;
            }
            //return token and user data
            return {
                ...token,
                ...user,
                ...account
            }
                
        },
        async session({ session, user, token }) {
           /**
            * @param session - The current session object
            * @param token - The JWT token
            * @param user - The user object
            * get the user data from the user object, message and token and add it to the session
            */
            
            // session.user = user.user;
            session.accessToken = token.accessToken;
            session.user = token.user;
            
            return session;
        }
    },
    pages: {
        signIn: '/authpage/login',
        
    },

}

export default NextAuth (authOptions);
// export default (req, res) => NextAuth(req, res, authOptions) 