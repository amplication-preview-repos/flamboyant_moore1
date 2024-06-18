import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MovieRequestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="country" source="country" />
        <TextInput label="tmdbId" source="tmdbId" />
      </SimpleForm>
    </Create>
  );
};
