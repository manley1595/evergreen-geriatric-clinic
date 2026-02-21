import React from 'react'
import { cn } from './utils'

export function Card({ className, ...props }) {
  return <div className={cn('border bg-white shadow-sm', className)} {...props} />
}
export function CardHeader({ className, ...props }) {
  return <div className={cn('p-5 pb-3', className)} {...props} />
}
export function CardTitle({ className, ...props }) {
  return <div className={cn('font-semibold', className)} {...props} />
}
export function CardDescription({ className, ...props }) {
  return <p className={cn('text-sm text-muted-foreground mt-1', className)} {...props} />
}
export function CardContent({ className, ...props }) {
  return <div className={cn('p-5 pt-0', className)} {...props} />
}
