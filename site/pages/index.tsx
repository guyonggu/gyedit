import { useEffect } from 'react'
import { useRouter } from 'next/router'

import './index.scss'

const Home = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace(`/examples`)
  })

  return null
}

export default Home
