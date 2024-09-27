// components/ui/card.tsx

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void; // Añadir el onClick como prop opcional
}

export function Card({ children, className, onClick }: CardProps) {
  return (
    <div
      className={`rounded-lg shadow-md p-4 border ${className}`}
      onClick={onClick} // Pasar el evento onClick al div
    >
      {children}
    </div>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
}
