import React from 'react'
import { cn } from './utils'
export function Input({ className, ...props }) {
  return (
    <input
      className={cn('w-full rounded-2xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-600/20', className)}
      {...props}
    />
  )
}
