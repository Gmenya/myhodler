import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { FixedSizeList as List, ListChildComponentProps, ListOnScrollProps } from "react-window"

import { observer } from "mobx-react-lite"

import { Currency, currencyStore } from "@/entities/Currency"

import TopArrow from "@/shared/assets/icons/arrow-top-icon.svg"

import { CurrencyItemView } from "../CurrencyItemView/CurrencyItemView"
import { CurrencyListSkeleton } from "../CurrencyListSkeleton/CurrencyListSkeleton"

export const CurrencyList = observer(() => {
  const { sortCurrencies, searchQuery, isLoading, error } = currencyStore
  const listRef = useRef<List | null>(null)
  const [isShowScrollButton, setIsShowScrollButton] = useState(false)
  const [itemSize, setItemSize] = useState(88)
  const scrollToTop = () => {
    if (listRef.current) {
      listRef.current?.scrollToItem(0)
    }
  }

  const handleScroll = ({ scrollOffset }: ListOnScrollProps) => {
    setIsShowScrollButton(scrollOffset > 0)
  }

  const Row = ({ index, style }: ListChildComponentProps) => {
    const currency: Currency = sortCurrencies[index]
    return (
      <Link key={currency.name} to={`/${currency.name}`} style={style}>
        <CurrencyItemView currency={currency} />
      </Link>
    )
  }

  const updateItemSize = () => {
    const width = window.innerWidth
    //eslint-disable-next-line  no-nested-ternary
    setItemSize(width <= 640 ? 64 : width <= 768 ? 72 : 88)
  }

  useEffect(() => {
    updateItemSize()
    window.addEventListener("resize", updateItemSize)
    return () => {
      window.removeEventListener("resize", updateItemSize)
    }
  }, [])

  if (isLoading) {
    return <CurrencyListSkeleton />
  }

  if (error) {
    return (
      <div className="flex justify-center w-full relative top-14">
        <h3 className="text-lg text-center">Something went wrong. Please try again a bit later.</h3>
      </div>
    )
  }

  return (
    <>
      {searchQuery && sortCurrencies.length === 0 ? (
        <div className="flex justify-center w-full relative top-14">
          <h3 className="text-2xl relative top-20">There are no matches</h3>
        </div>
      ) : (
        <div className="flex w-full h-full relative">
          <List
            ref={listRef}
            height={900}
            itemCount={sortCurrencies.length}
            itemSize={itemSize}
            width="100%"
            className="custom-scrollbar"
            onScroll={handleScroll}
          >
            {Row}
          </List>
          {isShowScrollButton && (
            <button
              type="button"
              aria-label="scroll"
              onClick={scrollToTop}
              className="absolute right-[calc(50%-17px)] bg-white border-2 border-primary-blue p-2
                       rounded-full bottom-24 s:bottom-[120px] sm:bottom-[140px] md:bottom-[120px]"
            >
              <TopArrow />
            </button>
          )}
        </div>
      )}
    </>
  )
})
