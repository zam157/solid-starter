import 'uno.css'
import '@unocss/reset/tailwind.css'

import App from './App'

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('solid-root') as HTMLElement,
)
