import React from 'react'
import { cn } from './utils'

const variants = {
  default: 'bg-emerald-700 text-white hover:bg-emerald-800',
  secondary: 'bg-emerald-700/10 text-emerald-900 hover:bg-emerald-700/15 border border-emerald-700/20',
}
const sizes = { sm:'h-9 px-3 text-sm', md:'h-10 px-4 text-sm', lg:'h-11 px-5 text-base' }

export function Button({ className, variant='default', size='md', type='button', ...props }) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center rounded-2xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-600/30 disabled:opacity-50 disabled:pointer-events-none',
        variants[variant] || variants.default,
        sizes[size] || sizes.md,
        className
      )}
      {...props}
    />
  )
}
