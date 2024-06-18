import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ReleaseInfoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="info" multiline source="info" />
        <DateTimeInput label="releaseDate" source="releaseDate" />
      </SimpleForm>
    </Edit>
  );
};
