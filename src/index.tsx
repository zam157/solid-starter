import 'uno.css'
import '@unocss/reset/tailwind.css'
import routes from '~solid-pages'

render(
  () => {
    const Routes = useRoutes(routes)
    return (
      <Router>
        <Routes />
      </Router>
    )
  },
  document.getElementById('solid-root') as HTMLElement,
)
