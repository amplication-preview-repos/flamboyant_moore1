import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MovieRequestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="country" source="country" />
        <TextInput label="tmdbId" source="tmdbId" />
      </SimpleForm>
    </Edit>
  );
};
