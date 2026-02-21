import React from 'react'
import { cn } from './utils'
export function Badge({ className, ...props }) {
  return (
    <span className={cn('inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-emerald-700/10 text-emerald-900 border border-emerald-700/20', className)} {...props} />
  )
}
