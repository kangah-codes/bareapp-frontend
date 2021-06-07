import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
	uri: "https://bareapp-new.uc.r.appspot.com/graphql/",
	cache: new InMemoryCache(),
});

export default client;
