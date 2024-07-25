import React from 'react';

interface IButtonComponent {
    label: string
}

export const Button = ({ label, ...props}: IButtonComponent & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
        {...props}
        className="mt-5 ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        >{label}</button>
  )
}
