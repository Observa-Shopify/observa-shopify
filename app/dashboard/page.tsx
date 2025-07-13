'use client'

import { useState } from 'react'
import {
  ChartBarIcon,
  BellIcon,
  CogIcon,
  HomeIcon,
  UsersIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: true },
  { name: 'Analytics', href: '/analytics', icon: ChartBarIcon, current: false },
  { name: 'Alerts', href: '/alerts', icon: BellIcon, current: false },
  { name: 'Team', href: '/team', icon: UsersIcon, current: false },
  { name: 'Settings', href: '/settings', icon: CogIcon, current: false },
]

const stats = [
  {
    name: 'Core Web Vitals Score',
    value: '89',
    change: '+2.1%',
    changeType: 'positive',
    unit: '/100',
  },
  {
    name: 'Conversion Rate',
    value: '3.24',
    change: '-0.3%',
    changeType: 'negative',
    unit: '%',
  },
  {
    name: 'Page Load Time',
    value: '1.8',
    change: '-0.2s',
    changeType: 'positive',
    unit: 's',
  },
  {
    name: 'Revenue (24h)',
    value: '$12,489',
    change: '+8.2%',
    changeType: 'positive',
    unit: '',
  },
]

const alerts = [
  {
    id: 1,
    type: 'warning',
    title: 'Conversion rate dropped',
    description: 'Conversion rate fell below 3% threshold on product pages',
    time: '5 minutes ago',
    status: 'active',
  },
  {
    id: 2,
    type: 'error',
    title: 'High LCP detected',
    description: 'Largest Contentful Paint increased to 4.2s on homepage',
    time: '12 minutes ago',
    status: 'active',
  },
  {
    id: 3,
    type: 'success',
    title: 'Performance improved',
    description: 'FID decreased to 45ms - below target threshold',
    time: '1 hour ago',
    status: 'resolved',
  },
]

const webVitalsData = [
  { metric: 'LCP', value: 2.1, threshold: 2.5, status: 'good' },
  { metric: 'FID', value: 45, threshold: 100, status: 'good' },
  { metric: 'CLS', value: 0.08, threshold: 0.1, status: 'good' },
  { metric: 'FCP', value: 1.2, threshold: 1.8, status: 'good' },
  { metric: 'INP', value: 180, threshold: 200, status: 'good' },
  { metric: 'TTFB', value: 0.4, threshold: 0.8, status: 'good' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 shadow-sm">
          <div className="flex h-16 shrink-0 items-center">
            <h1 className="text-2xl font-bold gradient-text">Observa</h1>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-primary-50 text-primary-600'
                            : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current ? 'text-primary-600' : 'text-gray-400 group-hover:text-primary-600',
                            'h-6 w-6 shrink-0'
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-72">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div className="relative flex flex-1">
              {/* Placeholder for search */}
            </div>
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              {/* Notifications */}
              <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
              >
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Profile dropdown placeholder */}
              <div className="h-8 w-8 rounded-full bg-primary-600"></div>
            </div>
          </div>
        </div>

        <main className="py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Page header */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Performance Dashboard
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                Real-time monitoring for your Shopify store: yourstore.myshopify.com
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
              {stats.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow-sm border"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center">
                    <div className="flex-1">
                      <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                      <dd className="mt-1 text-2xl font-semibold text-gray-900">
                        {item.value}
                        <span className="text-sm text-gray-500">{item.unit}</span>
                      </dd>
                    </div>
                    <div className="flex items-center">
                      {item.changeType === 'positive' ? (
                        <ArrowTrendingUpIcon className="h-5 w-5 text-green-500" />
                      ) : (
                        <ArrowTrendingDownIcon className="h-5 w-5 text-red-500" />
                      )}
                      <span
                        className={classNames(
                          item.changeType === 'positive' ? 'text-green-600' : 'text-red-600',
                          'ml-1 text-sm font-medium'
                        )}
                      >
                        {item.change}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Web Vitals Chart */}
              <motion.div
                className="bg-white rounded-lg shadow-sm border p-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-lg font-medium text-gray-900 mb-4">Core Web Vitals</h3>
                <div className="space-y-4">
                  {webVitalsData.map((vital) => (
                    <div key={vital.metric} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-900 w-12">{vital.metric}</span>
                        <div className="ml-4 flex-1 bg-gray-200 rounded-full h-2 max-w-32">
                          <div
                            className={classNames(
                              vital.status === 'good' ? 'bg-green-500' : 'bg-red-500',
                              'h-2 rounded-full'
                            )}
                            style={{ width: `${(vital.value / vital.threshold) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">
                          {vital.value}
                          {vital.metric === 'FID' || vital.metric === 'INP' ? 'ms' : 
                           vital.metric === 'LCP' || vital.metric === 'FCP' || vital.metric === 'TTFB' ? 's' : ''}
                        </span>
                        {vital.status === 'good' ? (
                          <CheckCircleIcon className="h-5 w-5 text-green-500" />
                        ) : (
                          <ExclamationTriangleIcon className="h-5 w-5 text-red-500" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Recent Alerts */}
              <motion.div
                className="bg-white rounded-lg shadow-sm border p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Alerts</h3>
                <div className="space-y-4">
                  {alerts.map((alert) => (
                    <div key={alert.id} className="flex gap-3">
                      <div className="flex-shrink-0">
                        {alert.type === 'error' && (
                          <div className="h-2 w-2 mt-2 bg-red-500 rounded-full"></div>
                        )}
                        {alert.type === 'warning' && (
                          <div className="h-2 w-2 mt-2 bg-yellow-500 rounded-full"></div>
                        )}
                        {alert.type === 'success' && (
                          <div className="h-2 w-2 mt-2 bg-green-500 rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{alert.title}</p>
                        <p className="text-sm text-gray-600">{alert.description}</p>
                        <p className="text-xs text-gray-400 mt-1">{alert.time}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <span
                          className={classNames(
                            alert.status === 'active'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-green-100 text-green-800',
                            'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium'
                          )}
                        >
                          {alert.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <a
                    href="/alerts"
                    className="text-sm font-medium text-primary-600 hover:text-primary-500"
                  >
                    View all alerts →
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Performance Chart Placeholder */}
            <motion.div
              className="mt-8 bg-white rounded-lg shadow-sm border p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-medium text-gray-900 mb-4">Performance Trends (Last 7 Days)</h3>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <ChartBarIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Performance chart would be displayed here</p>
                  <p className="text-sm text-gray-400">Integration with Chart.js or similar library</p>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  )
}
