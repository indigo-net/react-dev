import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const usePageRoute = () => {
  const navigate = useNavigate()

  const goHome = useCallback(() => navigate('/home'), [])

  return {
    goHome,
  }
}
