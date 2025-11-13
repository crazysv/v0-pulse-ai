"use client"

import { useEffect } from "react"

const MyComponent = () => {
  useEffect(() => {
    // Enable smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth"
  }, [])

  // Rest of the component code here

  return <div>{/* Component JSX here */}</div>
}

export default MyComponent
