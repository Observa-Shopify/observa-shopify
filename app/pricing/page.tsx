'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  XMarkIcon,
  Bars3Icon,
  ArrowRightIcon,
  CheckIcon,
  StarIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Image from 'next/image';
import dashboard from '../assets/dashboard.png'
import appLogo from '../assets/applogo.jpeg'


const navigation = [
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Privacy', href: '/privacy' },
]

const pricingPlans = [
  {
    name: 'Free Forever',
    price: '$0',
    description: 'Perfect for getting started with performance monitoring',
    features: [
      'Up to 10K page views/month',
      'Core Web Vitals monitoring',
      'Email alerts',
      'Basic dashboard',
      '24/7 monitoring',
      'Real-time performance metrics',
      'Mobile and desktop tracking',
      'Basic analytics',
      'Community support',
      'Setup in 2 minutes'
    ],
    featured: false,
    cta: 'Get Started Free',
    popular: false
  },
  {
    name: 'Professional',
    price: '$29',
    description: 'Ideal for growing stores with serious performance needs',
    features: [
      'Up to 100K page views/month',
      'Advanced performance metrics',
      'Email + WhatsApp + Slack alerts',
      'Advanced analytics dashboard',
      'Custom alert thresholds',
      'A/B testing insights',
      'Revenue impact analysis',
      'Custom webhook support',
      'Priority email support',
      'Export reports and data',
      'Performance benchmarking',
      'Trend analysis'
    ],
    featured: true,
    cta: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$99',
    description: 'For large stores requiring comprehensive monitoring',
    features: [
      'Unlimited page views',
      'Full performance suite',
      'All notification channels',
      'Custom integrations',
      'Dedicated support',
      'Advanced reporting',
      'API access',
      'White-label options',
      'Custom dashboard branding',
      'SLA guarantees',
      'Onboarding assistance',
      'Quarterly business reviews'
    ],
    featured: false,
    cta: 'Contact Sales',
    popular: false
  },
]

const faqs = [
  {
    question: "Is it really free forever?",
    answer: "Yes! Our Free plan is completely free with no hidden costs or transaction fees. We believe in helping merchants succeed."
  },
  {
    question: "How quickly can I set it up?",
    answer: "Setup takes less than 2 minutes. Simply install from the Shopify App Store and start monitoring immediately."
  },
  {
    question: "Will it affect my store performance?",
    answer: "No, Observa is optimized for performance and won't slow down your store or checkout process."
  },
  {
    question: "Can I customize the alerts?",
    answer: "Absolutely! Create unlimited custom rules based on performance thresholds, conversion rates, and more."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and Shopify Payments. All payments are processed securely."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription at any time. No long-term contracts or cancellation fees."
  }
]

export default function PricingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
                      src={appLogo}
                      alt="Observa Logo"
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
              <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-700 hover:text-teal-600 transition-colors relative group">
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-emerald-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            {/* <Link href="/login" className="text-sm font-semibold leading-6 text-gray-700 hover:text-teal-600 transition-colors">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link> */}
            <Link
              href="/pricing"
              className="relative group rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Install Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-emerald-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                        src={appLogo}
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
                        className="-mx-3 block rounded-xl px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-teal-50 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6 space-y-2">
                    {/* <Link
                      href="/login"
                      className="-mx-3 block rounded-xl px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-teal-50 transition-colors"
                    >
                      Log in
                    </Link> */}
                    <Link
                      href="/pricing"
                      className="-mx-3 block rounded-xl px-3 py-2.5 text-base font-semibold leading-7 text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 transition-all"
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
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <motion.h1
              className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Simple, Transparent{' '}
              <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Pricing
              </span>
            </motion.h1>
            <motion.p
              className="mt-8 text-xl leading-8 text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Start free and scale with your business. No hidden fees, no surprises.
              Choose the plan that fits your needs and grow with confidence.
            </motion.p>
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
                      src={dashboard}
                      alt="Observa Dashboard Screenshot"
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

      {/* Pricing section */}
      <div className="bg-gradient-to-br from-slate-50 to-gray-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-teal-600">Pricing</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Choose the right plan for your store
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
            Start with our free plan. No credit card required. Cancel anytime.
          </p>
          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`rounded-3xl p-8 xl:p-10 ${plan.featured
                    ? 'ring-2 ring-teal-600 bg-white shadow-xl'
                    : 'ring-1 ring-gray-200 bg-white'
                  } relative`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-teal-600 px-3 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">{plan.name}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{plan.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">{plan.price}</span>
                  {plan.price !== '$0' && (
                    <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                  )}
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-teal-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.name === 'Enterprise' ? '/contact' : '/signup'}
                  className={`mt-8 block rounded-xl px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all hover:scale-105 ${plan.featured
                      ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-xl hover:shadow-2xl focus-visible:outline-teal-600'
                      : 'text-teal-600 ring-1 ring-inset ring-teal-200 hover:ring-teal-300'
                    }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by thousands of Shopify stores
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Join the growing community of merchants who rely on Observa to protect their revenue
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-3">
            <div className="flex flex-col bg-gray-400/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600">Stores Protected</dt>
              <dd className="order-first text-3xl font-bold tracking-tight text-gray-900">2,500+</dd>
            </div>
            <div className="flex flex-col bg-gray-400/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600">Revenue Protected</dt>
              <dd className="order-first text-3xl font-bold tracking-tight text-gray-900">$2.1M+</dd>
            </div>
            <div className="flex flex-col bg-gray-400/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600">Average Response Time</dt>
              <dd className="order-first text-3xl font-bold tracking-tight text-gray-900">&lt;30s</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* FAQ section */}
      <div className="bg-gradient-to-br from-slate-50 to-gray-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <dt className="text-lg font-semibold leading-7 text-gray-900">{faq.question}</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-700/20 via-emerald-700/20 to-cyan-700/20" />
        <div className="relative px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to protect your revenue?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-teal-100">
              Start monitoring your Shopify store's performance today. Get alerted before issues impact your sales.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/signup"
                className="rounded-xl bg-white px-6 py-4 text-base font-semibold text-teal-600 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Get Started Free
              </Link>
              <Link href="/features" className="text-base font-semibold leading-6 text-white hover:text-teal-100 transition-colors">
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
                      src={appLogo}
                      alt="Observa Logo"
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
                      <Link href="/features" className="text-sm leading-6 text-gray-600 hover:text-teal-600 transition-colors">
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link href="/pricing" className="text-sm leading-6 text-gray-600 hover:text-teal-600 transition-colors">
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