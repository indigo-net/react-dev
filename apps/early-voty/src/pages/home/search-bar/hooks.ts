import { useCallback, useState } from 'react'

export const useCheckFocused = () => {
  const [isFocused, setIsFocused] = useState(false)

  const onFocusInput = useCallback(() => setIsFocused(true), [])
  const onBlurInput = useCallback(() => setIsFocused(false), [])

  return {
    isFocused,
    onFocusInput,
    onBlurInput,
  }
}
