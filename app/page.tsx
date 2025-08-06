'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  ChartBarIcon,
  BellIcon,
  ShieldCheckIcon,
  SparklesIcon,
  XMarkIcon,
  Bars3Icon,
  ArrowRightIcon,
  CheckIcon,
  PlayIcon,
  StarIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image';



const navigation = [
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Privacy', href: '/privacy' },
]

const features = [
  {
    name: 'Real-time Performance Monitoring',
    description: 'Track Core Web Vitals (LCP, FID, CLS) and other performance metrics in real-time across your Shopify store.',
    icon: ChartBarIcon,
    gradient: 'from-indigo-500 to-purple-500',
    delay: 0.1
  },
  {
    name: 'Smart Conversion Alerts',
    description: 'Get instant notifications when conversion rates drop below your defined thresholds via email, WhatsApp, or Slack.',
    icon: BellIcon,
    gradient: 'from-pink-500 to-rose-500',
    delay: 0.2
  },
  {
    name: 'Revenue Protection',
    description: 'Comprehensive analytics dashboard showing how performance impacts your store\'s revenue and user experience.',
    icon: SparklesIcon,
    gradient: 'from-cyan-500 to-blue-500',
    delay: 0.3
  },
  {
    name: 'Multi-channel Notifications',
    description: 'Stay informed through your preferred channels - email, WhatsApp, Slack, and more notification options.',
    icon: ShieldCheckIcon,
    gradient: 'from-indigo-500 to-purple-500',
    delay: 0.4
  },
]

const stats = [
  { name: 'Stores Monitored', value: '2,500+', icon: GlobeAltIcon },
  { name: 'Performance Issues Detected', value: '50K+', icon: CpuChipIcon },
  { name: 'Revenue Protected', value: '$2.1M+', icon: ShieldCheckIcon },
  { name: 'Average Response Time', value: '<30s', icon: RocketLaunchIcon },
]

const testimonials = [
  {
    content: "Observa has transformed how we monitor our store's performance. The real-time alerts have saved us thousands in potential lost revenue.",
    author: "Sarah Johnson",
    role: "E-commerce Manager",
    company: "Fashion Retailer",
    rating: 5
  },
  {
    content: "The setup was incredibly simple and the insights are invaluable. Our conversion rates improved by 35% within the first month.",
    author: "Michael Chen",
    role: "COO",
    company: "Electronics Store",
    rating: 5
  },
  {
    content: "Finally, a performance monitoring tool that actually helps protect revenue. The multi-channel alerts are a game-changer.",
    author: "Emma Rodriguez",
    role: "Digital Marketing Director",
    company: "Home & Garden",
    rating: 5
  }
]

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, -200])

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-indigo-50 min-h-screen">
      {/* Animated Background Canvas */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/20 via-transparent to-purple-100/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-rose-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      {/* Header */}
      <header className="relative z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 group">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 overflow-hidden">
                    <Image
                      src="/logo.jpeg"
                      alt="Observa Logo"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-cover rounded-lg"
                    />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-teal-600 via-emerald-600 to-cyan-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Observa</span>
              </div>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-gray-700 hover:bg-white/50 backdrop-blur-sm transition-all"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-700 hover:text-indigo-600 transition-colors relative group">
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            {/* <Link href="/login" className="text-sm font-semibold leading-6 text-gray-700 hover:text-indigo-600 transition-colors">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link> */}
            <Link
              href="/pricing"
              className="relative group rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Install Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" />
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 backdrop-blur-md px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-600 via-emerald-600 to-cyan-600 rounded-xl flex items-center justify-center overflow-hidden">
                      <Image
                        src="/logo.jpeg"
                        alt="Observa Logo"
                        className="w-8 h-8 object-cover rounded-lg"
                      />
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Observa</span>
                  </div>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-xl p-2.5 text-gray-700 hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-xl px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-indigo-50 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6 space-y-2">
                    {/* <Link
                      href="/login"
                      className="-mx-3 block rounded-xl px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-indigo-50 transition-colors"
                    >
                      Log in
                    </Link> */}
                    <Link
                      href="/pricing"
                      className="-mx-3 block rounded-xl px-3 py-2.5 text-base font-semibold leading-7 text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all"
                    >
                      Install Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero section */}
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <motion.div
              className="inline-flex items-center rounded-full px-4 py-2 text-sm leading-6 text-indigo-700 ring-1 ring-indigo-600/20 mb-8 bg-indigo-50/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-semibold">🚀 Just launched v2.0</span>
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </motion.div>
            <motion.h1
              className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Complete Shopify{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Performance Monitoring
              </span>{' '}
              Suite
            </motion.h1>
            <motion.p
              className="mt-8 text-xl leading-8 text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Observa helps Shopify merchants protect revenue and boost conversions by monitoring web vitals,
              tracking performance metrics, and delivering instant alerts when issues arise.
            </motion.p>
            <motion.div
              className="mt-12 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/pricing"
                className="relative group rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4 text-base font-semibold text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Install Now
                  <ArrowRightIcon className="h-5 w-5" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link href="#demo" className="text-base font-semibold leading-6 text-gray-700 hover:text-indigo-600 transition-colors flex items-center gap-2 group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <PlayIcon className="h-5 w-5 text-indigo-600" />
                </div>
                Watch Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* App Screenshot Placeholder */}
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 mb-24">
        <motion.div
          className="relative mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Main App Screenshot */}
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-1 shadow-2xl">
              <div className="rounded-xl bg-white overflow-hidden">
                <div className="bg-gradient-to-r from-slate-50 to-gray-100 px-6 py-4 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="ml-4 text-sm text-gray-500">observa.app/dashboard</div>
                  </div>
                </div>
                <div className="p-8">
                  {/* OPTION 1: Single Main Screenshot */}
                  <div className="relative">
                    {/* Replace this placeholder with your actual screenshot */}
                    {/* <div className="w-full h-96 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border-2 border-dashed border-indigo-200 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-indigo-600 font-medium">Dashboard Screenshot</p>
                        <p className="text-gray-500 text-sm mt-1">Replace with your actual app screenshot</p>
                      </div>
                    </div> */}

                    {/* TO ADD YOUR ACTUAL IMAGE, UNCOMMENT THIS AND REPLACE THE PATH: */}

                                    <Image
                  src="/dashboard.png"
                  alt="Observa Dashboard Screenshot"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-xl shadow-lg"
                />

                  </div>

                  {/* OPTION 2: Multiple Screenshots Grid */}
                  {/* 
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Dashboard</h3>
                      <img 
                        src="/images/dashboard.png" 
                        alt="Dashboard Screenshot"
                        className="w-full h-48 object-cover rounded-lg shadow-md"
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Analytics</h3>
                      <img 
                        src="/images/analytics.png" 
                        alt="Analytics Screenshot"
                        className="w-full h-48 object-cover rounded-lg shadow-md"
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Alerts</h3>
                      <img 
                        src="/images/alerts.png" 
                        alt="Alerts Screenshot"
                        className="w-full h-48 object-cover rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                  */}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-2xl shadow-xl animate-float" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-pink-400 to-rose-400 rounded-2xl shadow-xl animate-float delay-1000" />
            <div className="absolute top-1/2 -left-8 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl shadow-lg animate-float delay-500" />
          </div>
        </motion.div>
      </div>

      {/* Stats section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-24">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by thousands of Shopify stores
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Join the growing community of merchants who rely on Observa to protect their revenue
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.name}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-2xl bg-white/50 backdrop-blur-sm p-8 shadow-lg ring-1 ring-gray-200/50 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-100 to-purple-100 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <dt className="text-sm font-semibold leading-6 text-gray-600 mb-2">{stat.name}</dt>
                  <dd className="text-3xl font-bold tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Simple and Powerful</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Complete performance monitoring for your Shopify store
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get comprehensive insights into your store's performance with our advanced monitoring tools and intelligent alerting system.
          </p>
        </div>
        <div className="mx-auto max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: feature.delay }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-2xl bg-white/50 backdrop-blur-sm p-8 shadow-lg ring-1 ring-gray-200/50 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-center gap-x-4 mb-6">
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-r ${feature.gradient} p-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold leading-7 text-gray-900">{feature.name}</h3>
                  </div>
                  <p className="text-base leading-7 text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials section */}
      <div className="bg-gradient-to-br from-slate-50 to-gray-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center mb-16">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-teal-600">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              See how businesses are growing with Observa
            </p>
          </div>
          <div className="mx-auto flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative rounded-2xl bg-white/70 backdrop-blur-sm p-8 shadow-lg ring-1 ring-gray-200/50 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-900 mb-4 text-lg leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{testimonial.author.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700/20 via-purple-700/20 to-pink-700/20" />
        <div className="relative px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to protect your revenue?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-100">
              Start monitoring your Shopify store's performance today. Get alerted before issues impact your sales.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/pricing"
                className="rounded-xl bg-white px-6 py-4 text-base font-semibold text-indigo-600 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Get Started Free
              </Link>
              <Link href="/features" className="text-base font-semibold leading-6 text-white hover:text-indigo-100 transition-colors">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-600 via-emerald-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 overflow-hidden">
                    <Image
                      src="/logo.jpeg"
                      alt="Observa Logo"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-cover rounded-lg"
                    />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-teal-600 via-emerald-600 to-cyan-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Observa</span>
              </Link>
              <p className="text-sm leading-6 text-gray-600">
                The most comprehensive performance monitoring solution for Shopify stores.
                Protect your revenue with intelligent alerts and real-time insights.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">Product</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <Link href="/features" className="text-sm leading-6 text-gray-600 hover:text-indigo-600 transition-colors">
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link href="/pricing" className="text-sm leading-6 text-gray-600 hover:text-indigo-600 transition-colors">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <a href="/integrations" className="text-sm leading-6 text-gray-600 hover:text-teal-600 transition-colors">
                        Integrations
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">Support</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a href="/docs" className="text-sm leading-6 text-gray-600 hover:text-teal-600 transition-colors">
                        Documentation
                      </a>
                    </li>
                    <li>
                      <a href="/help" className="text-sm leading-6 text-gray-600 hover:text-teal-600 transition-colors">
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a href="/contact" className="text-sm leading-6 text-gray-600 hover:text-teal-600 transition-colors">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">Company</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <Link href="/about" className="text-sm leading-6 text-gray-600 hover:text-teal-600 transition-colors">
                        About
                      </Link>
                    </li>
                    <li>
                      <a href="/blog" className="text-sm leading-6 text-gray-600 hover:text-teal-600 transition-colors">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="/careers" className="text-sm leading-6 text-gray-600 hover:text-teal-600 transition-colors">
                        Careers
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a href="/privacy" className="text-sm leading-6 text-gray-600 hover:text-teal-600 transition-colors">
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a href="/terms" className="text-sm leading-6 text-gray-600 hover:text-teal-600 transition-colors">
                        Terms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs leading-5 text-gray-500">
              &copy; 2025 Observa. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
