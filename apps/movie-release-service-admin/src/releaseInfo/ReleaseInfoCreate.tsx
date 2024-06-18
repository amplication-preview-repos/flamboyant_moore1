import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ReleaseInfoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="info" multiline source="info" />
        <DateTimeInput label="releaseDate" source="releaseDate" />
      </SimpleForm>
    </Create>
  );
};
