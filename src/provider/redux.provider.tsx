"use client";

import { store } from "@/redux/store.redux";
import { Provider } from "react-redux";

export default function ReduxProviders({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
