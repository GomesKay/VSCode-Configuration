import { Desktop } from "./components/Desktop"
import { Mobile } from "./components/Mobile"

export function App() {
  const isMobile = window.innerWidth < 768

  return <>{isMobile ? <Mobile /> : <Desktop />}</>
}
