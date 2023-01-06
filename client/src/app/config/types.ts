import { AxiosResponse } from "axios";
import { ReactNode } from "react";

export type RouteOptions = {
  path: string;
  Element: ReactNode;
  loader?: () => Promise<AxiosResponse>;
};
