import { StatusBar } from "expo-status-bar"

import { Home } from "./components/Home"
import { Container } from "./styles/appStyles"

export default function App() {
  return (
    <Container>
      <Home />
      <StatusBar style='light' />
    </Container>
  )
}
