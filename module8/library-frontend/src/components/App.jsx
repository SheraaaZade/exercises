import { useState } from "react";
import Authors from "./Authors";
import Books from "./Books";
import NewBook from "./NewBook";

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:4000",
  }),
});

/**
 * npm install @apollo/client graphql
 * 
 */

const App = () => {
  const [page, setPage] = useState("authors");

  return (
    <ApolloProvider client={client}>
      <div>
        <div>
          <button onClick={() => setPage("authors")}>authors</button>
          <button onClick={() => setPage("books")}>books</button>
          <button onClick={() => setPage("add")}>add book</button>
        </div>

        <Authors show={page === "authors"} />

        <Books show={page === "books"} />

        <NewBook show={page === "add"} />
      </div>
    </ApolloProvider>
  );
};

export default App;
