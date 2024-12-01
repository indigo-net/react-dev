import { isNull } from '@fxts/core'
import { useCallback, useRef } from 'react'
import { useCheckFocused } from './hooks'
import Styles from './search-bar.module.scss'

const SearchBar = () => {
  const { isFocused, onFocusInput, onBlurInput } = useCheckFocused()
  const inputRef = useRef<HTMLInputElement | null>(null)

  const onResetSearchField = useCallback(() => {
    if (isNull(inputRef.current)) return
    inputRef.current.value = ''
  }, [])

  const isShowCancelBtn = isFocused || inputRef.current?.value.length

  return (
    <div className={Styles.layout}>
      <div className={Styles.searchBarBase}>
        <input
          className={Styles.searchField}
          onFocus={onFocusInput}
          onBlur={onBlurInput}
          ref={inputRef}
        />
        <button className={Styles.cancelButton} onClick={onResetSearchField}>
          {isShowCancelBtn ? 'X' : ''}
        </button>
      </div>
    </div>
  )
}
export default SearchBar
