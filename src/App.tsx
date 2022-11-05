import type { Component } from 'solid-js'

import AppBar from '@suid/material/AppBar'
import Box from '@suid/material/Box'
import Button from '@suid/material/Button'
import Toolbar from '@suid/material/Toolbar'

import { routes } from './routes'

const App: Component = () => {
  const location = useLocation()
  const Route = useRoutes(routes)

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit">
              <Link href="/" class={location.pathname === '/' ? 'underline' : 'no-underline'}>
                Home
              </Link>
            </Button>
            <Button color="inherit">
              <Link href="/about" class={location.pathname === '/about' ? 'underline' : 'no-underline'}>
                About
              </Link>
            </Button>
            <Button color="inherit">
              <Link href="/error" class={location.pathname === '/error' ? 'underline' : 'no-underline'}>
                Error
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <main>
        <Route />
      </main>
    </>
  )
}

export default App
