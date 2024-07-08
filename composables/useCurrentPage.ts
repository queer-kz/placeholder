export function useCurrentPage() {
  const { page } = useContent()
  return page
}
