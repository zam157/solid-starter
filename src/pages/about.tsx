import type { Resource } from 'solid-js'

export default function About() {
  const name = useRouteData<Resource<() => string | undefined>>()

  createEffect(() => {
    console.log(name!())
  })

  return (
    <section bg-pink-100 text-gray-700 p-8>
      <h1 text-2xl font-bold>About</h1>

      <p class="mt-4">A page all about this website.</p>

      <p>
        <span>We love</span>
        <Suspense fallback={<span>...</span>}>
          <span>&nbsp;{name!()}</span>
        </Suspense>
      </p>
    </section>
  )
}
