import { useState, useEffect } from "react"

const getWidth = () =>
  typeof window !== `undefined`
    ? window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    : null

function useCurrentWidth() {
  // save current window width in the state object
  let [width, setWidth] = useState(getWidth())

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId = null
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId)
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setWidth(getWidth()), 150)
    }
    // set resize listener
    typeof window !== `undefined` &&
      window.addEventListener("resize", resizeListener)

    // clean up function
    return () => {
      // remove resize listener
      typeof window !== `undefined` &&
        window.removeEventListener("resize", resizeListener)
    }
  }, [])

  return width
}

export default useCurrentWidth
