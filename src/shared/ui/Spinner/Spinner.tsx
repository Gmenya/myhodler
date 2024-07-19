export const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="animate-spin rounded-full h-36 w-36 border-t-4 border-b-4
            border-primary-blue absolute top-[calc(50%-72px)] left-[calc(50%-72px)]"
      />
    </div>
  )
}
