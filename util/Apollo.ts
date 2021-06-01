import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
	uri: "https://bareapp-314200.uc.r.appspot.com/graphql/",
	cache: new InMemoryCache(),
});

export default client;
