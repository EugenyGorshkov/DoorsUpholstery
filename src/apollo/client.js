import {ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: 'url',
    cache: new InMemoryCache(),
})

export default client
