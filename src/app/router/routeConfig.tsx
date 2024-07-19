import { Suspense } from "react"

import { CurrencyDetail } from "@/pages/CurrencyDetail"
import { MainPage } from "@/pages/MainPage"

import { AppRoutes } from "@/shared/consts/router"
import { Spinner } from "@/shared/ui/Spinner"

export const routeConfig = {
  [AppRoutes.MAIN]: {
    path: "/",
    element: <MainPage />,
  },
  [AppRoutes.CURRENCY_DETAIL]: {
    path: "/:name",
    element: (
      <Suspense fallback={<Spinner />}>
        <CurrencyDetail />
      </Suspense>
    ),
  },
}
