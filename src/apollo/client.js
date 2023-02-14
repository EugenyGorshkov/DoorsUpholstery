import {ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: 'kek/api',
    cache: new InMemoryCache(),
})

export default client

