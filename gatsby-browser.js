import React from 'react'
import Layout from './src/components/Layout'
/* global window, document */
const scrollTo = (id) => () => {
  const el = document.querySelector(id)
  if (el) return window.scrollTo(0, el.offsetTop - 20)
  return false
}

export function wrapPageElement({element, props}) {
  return <Layout {...props}>{element}</Layout>
}

export const onRouteUpdate = ({ location }) => {
  if (location.hash) {
    window.setTimeout(scrollTo(location.hash), 10)
  }
}