import { forwardRef } from 'react'

const Card = forwardRef(({ 
  children, 
  className = '',
  hover = true,
  ...props 
}, ref) => {
  const baseStyles = 'glass rounded-xl p-6'
  const hoverStyles = hover ? 'glass-hover' : ''

  return (
    <div
      ref={ref}
      className={`${baseStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
})

Card.displayName = 'Card'

const CardHeader = forwardRef(({ children, className = '', ...props }, ref) => (
  <div ref={ref} className={`flex flex-col space-y-1.5 pb-4 ${className}`} {...props}>
    {children}
  </div>
))

CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef(({ children, className = '', ...props }, ref) => (
  <h3 ref={ref} className={`text-xl font-semibold leading-none tracking-tight text-white ${className}`} {...props}>
    {children}
  </h3>
))

CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef(({ children, className = '', ...props }, ref) => (
  <p ref={ref} className={`text-sm text-gray-400 ${className}`} {...props}>
    {children}
  </p>
))

CardDescription.displayName = 'CardDescription'

const CardContent = forwardRef(({ children, className = '', ...props }, ref) => (
  <div ref={ref} className={`${className}`} {...props}>
    {children}
  </div>
))

CardContent.displayName = 'CardContent'

const CardFooter = forwardRef(({ children, className = '', ...props }, ref) => (
  <div ref={ref} className={`flex items-center pt-4 ${className}`} {...props}>
    {children}
  </div>
))

CardFooter.displayName = 'CardFooter'

Card.Header = CardHeader
Card.Title = CardTitle
Card.Description = CardDescription
Card.Content = CardContent
Card.Footer = CardFooter

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
export default Card