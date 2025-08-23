import { forwardRef } from 'react'

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'default',
  className = '',
  disabled = false,
  ...props 
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50'
  
  const variants = {
    primary: 'bg-gradient-primary text-white hover:opacity-90 shadow-lg hover:shadow-primary-500/25',
    secondary: 'glass glass-hover text-white border-white/20',
    ghost: 'hover:bg-white/10 text-gray-300 hover:text-white',
    outline: 'border border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white'
  }
  
  const sizes = {
    sm: 'h-8 px-3 text-sm',
    default: 'h-10 px-4 py-2',
    lg: 'h-12 px-6 text-lg',
    xl: 'h-14 px-8 text-xl'
  }

  const variantStyles = variants[variant] || variants.primary
  const sizeStyles = sizes[size] || sizes.default

  return (
    <button
      ref={ref}
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button