import clsx from 'clsx'
import type { ButtonHTMLAttributes } from 'react'
import Styles from './button.module.scss'

type ButtonWidthType = 'default' | 'small' | 'big' | 'full'
type ButtonThemeType = 'mint' | 'orange' | 'apple' | 'primary'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  $width?: ButtonWidthType
  $theme?: ButtonThemeType
  children: string
}
export default function Button({
  $width = 'default',
  $theme = 'primary',
  children,
  ...rest
}: IButtonProps) {
  const buttonClass = clsx(
    Styles.baseButton,
    Styles[`theme-${$theme}`],
    Styles[`width-${$width}`]
  )

  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  )
}
