import { type FC, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface IconButtonProps {
  href?: string
  onClick?: () => void
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
  target?: string
  rel?: string
}

const IconButton: FC<IconButtonProps> = ({ href, onClick, children, className, size = 'md', target, rel }) => {
  const baseClasses =
    'flex items-center justify-center rounded-xl border border-[#333333] bg-[#141414] hover:bg-[#242424] duration-300 transition-all'

  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-16 h-16',
  }

  const classes = cn(baseClasses, sizeClasses[size], className)

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classes}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  )
}

export default IconButton
