import { LoadingContainer, Rectangle1, Rectangle2, Rectangle3 } from './styles'

export function Loading() {
  return (
    <LoadingContainer>
      <Rectangle1></Rectangle1>
      <div>
        <Rectangle2></Rectangle2>
        <Rectangle3></Rectangle3>
      </div>
    </LoadingContainer>
  )
}
