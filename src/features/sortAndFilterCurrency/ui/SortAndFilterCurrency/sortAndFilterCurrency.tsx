import { observer } from "mobx-react-lite"

import { SearchInput } from "../SearchInput/SearchInput"
import { SortGroup } from "../SortGroup/SortGroup"

export const SortAndFilterCurrency = observer(() => {
  return (
    <section
      className="flex justify-between items-centert px-3 md:px-5 w-full
                        gap-6 mb-5 mt-5 s:mt-0"
    >
      <SearchInput />
      <SortGroup />
    </section>
  )
})
