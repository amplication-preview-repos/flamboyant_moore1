import { ReleaseInfoWhereInput } from "./ReleaseInfoWhereInput";
import { ReleaseInfoOrderByInput } from "./ReleaseInfoOrderByInput";

export type ReleaseInfoFindManyArgs = {
  where?: ReleaseInfoWhereInput;
  orderBy?: Array<ReleaseInfoOrderByInput>;
  skip?: number;
  take?: number;
};
