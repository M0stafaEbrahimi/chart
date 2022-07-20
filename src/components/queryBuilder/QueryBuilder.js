import { useState } from "react";
import { QueryBuilder } from "react-querybuilder";
import "react-querybuilder/dist/query-builder.scss";

const fields = [
  { name: "firstName", label: "First Name" },
  { name: "lastName", label: "Last Name" },
];

export default () => {
  const [query, setQuery] = useState({
    combinator: "and",
    rules: [],
  });

  return (
    <QueryBuilder
      fields={fields}
      query={query}
      onQueryChange={(q) => setQuery(q)}
    />
  );
};
