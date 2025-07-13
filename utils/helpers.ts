export function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

export function formatPercentage(value: number): string {
  return `${value.toFixed(2)}%`
}

export function formatDuration(seconds: number): string {
  if (seconds < 1) {
    return `${(seconds * 1000).toFixed(0)}ms`
  }
  return `${seconds.toFixed(1)}s`
}

export function getWebVitalStatus(value: number, threshold: number): 'good' | 'needs-improvement' | 'poor' {
  if (value <= threshold * 0.75) return 'good'
  if (value <= threshold) return 'needs-improvement'
  return 'poor'
}

export function generateRandomMetrics() {
  return {
    lcp: +(Math.random() * 3 + 1).toFixed(1),
    fid: Math.floor(Math.random() * 150 + 25),
    cls: +(Math.random() * 0.15).toFixed(3),
    conversionRate: +(Math.random() * 2 + 2).toFixed(2),
    revenue: Math.floor(Math.random() * 50000 + 10000),
  }
}

export function timeAgo(date: Date): string {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000)
  
  let interval = seconds / 31536000
  if (interval > 1) return Math.floor(interval) + ' years ago'
  
  interval = seconds / 2592000
  if (interval > 1) return Math.floor(interval) + ' months ago'
  
  interval = seconds / 86400
  if (interval > 1) return Math.floor(interval) + ' days ago'
  
  interval = seconds / 3600
  if (interval > 1) return Math.floor(interval) + ' hours ago'
  
  interval = seconds / 60
  if (interval > 1) return Math.floor(interval) + ' minutes ago'
  
  return Math.floor(seconds) + ' seconds ago'
}
