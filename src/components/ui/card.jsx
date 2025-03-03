// src/components/ui/card.jsx

import React from "react";

export function Card({ children, className }) {
  return <div className={`border p-4 rounded-lg shadow-lg ${className}`}>{children}</div>;
}

export function CardContent({ children }) {
  return <div className="space-y-2">{children}</div>;
}
