export interface User {
  id: string
  email: string
  name: string
  shopUrl: string
}

export interface WebVital {
  metric: string
  value: number
  threshold: number
  status: 'good' | 'needs-improvement' | 'poor'
  unit?: string
}

export interface Alert {
  id: number
  type: 'error' | 'warning' | 'success' | 'info'
  title: string
  description: string
  time: string
  status: 'active' | 'resolved' | 'acknowledged'
}

export interface PerformanceMetric {
  name: string
  value: string | number
  change: string
  changeType: 'positive' | 'negative' | 'neutral'
  unit?: string
}

export interface NavigationItem {
  name: string
  href: string
  icon?: any
  current?: boolean
}

export interface PricingPlan {
  name: string
  price: string
  description: string
  features: string[]
  featured: boolean
  cta?: string
}

export interface Feature {
  name: string
  description: string
  icon: any
  gradient?: string
}
