import { ReleaseInfo as TReleaseInfo } from "../api/releaseInfo/ReleaseInfo";

export const RELEASEINFO_TITLE_FIELD = "id";

export const ReleaseInfoTitle = (record: TReleaseInfo): string => {
  return record.id?.toString() || String(record.id);
};
