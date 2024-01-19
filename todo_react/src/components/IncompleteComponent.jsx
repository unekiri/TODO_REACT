import { ViewComponent } from "./ViewComponent"

export const IncompleteComponents = () => {
  return (
    <div className="incomplete-area">
      <ViewComponent />
      <ul id="incomplete-list">
      </ul>
    </div>
  )
}