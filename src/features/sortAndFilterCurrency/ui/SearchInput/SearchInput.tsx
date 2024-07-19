import React, { ChangeEvent, useState } from "react"

import { observer } from "mobx-react-lite"

import { Search } from "lucide-react"

import { currencyStore } from "@/entities/Currency"

import CloseIcon from "@/shared/assets/icons/close-icon.svg"

export const SearchInput = observer(() => {
  const { setSearchQuery, searchQuery } = currencyStore
  const [isFocused, setIsFocused] = useState(false)
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const handleClear = () => {
    setSearchQuery("")
  }
  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  return (
    <form className="flex justify-center items-center max-w-[160px] w-full relative">
      {!isFocused && !searchQuery.length && (
        <Search
          className="absolute left-0 text-gray-300 w-5 h-5 sm:w-6 sm:h-6 bottom-1"
          strokeWidth={1}
        />
      )}
      <input
        id="search"
        type="text"
        aria-label="Search"
        value={searchQuery}
        className="px-1 border-b border-gray-300 w-full focus:outline-none
                    placeholder:font-normal focus:border-primary-blue"
        onChange={handleSearchChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {searchQuery && (
        <button
          type="button"
          aria-label="Clear search"
          onClick={handleClear}
          className="absolute right-1"
        >
          <CloseIcon />
        </button>
      )}
    </form>
  )
})
