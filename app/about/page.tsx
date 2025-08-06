'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  XMarkIcon,
  Bars3Icon,
  ArrowRightIcon,
  CheckIcon,
  StarIcon,
  HeartIcon,
  ShieldCheckIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Image from 'next/image';
import appLogo from '..logo.jpeg'

const navigation = [
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Privacy', href: '/privacy' },
]

const values = [
  {
    name: 'Customer Success First',
    description: 'Every feature we build is designed with our customers\' success in mind. We measure our success by the revenue we help protect and the problems we help prevent.',
    icon: HeartIcon,
  },
  {
    name: 'Simplicity & Power',
    description: 'Complex monitoring should be simple to use. We believe powerful tools don\'t have to be complicated, and the most important insights should be immediately actionable.',
    icon: SparklesIcon,
  },
  {
    name: 'Proactive Innovation',
    description: 'We don\'t wait for problems to happen. Our technology anticipates issues before they impact your business, giving you the time to act rather than react.',
    icon: ShieldCheckIcon,
  },
]

const team = [
  {
    name: 'Alex Chen',
    role: 'CEO & Co-founder',
    bio: 'Former Shopify developer with 10+ years of experience in e-commerce performance optimization.',
    image: '/team/alex.jpg'
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO & Co-founder',
    bio: 'Expert in web performance and monitoring systems. Previously led engineering teams at major tech companies.',
    image: '/team/sarah.jpg'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Product',
    bio: 'Product leader focused on creating intuitive user experiences that solve real merchant problems.',
    image: '/team/michael.jpg'
  }
]

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
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
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            {/* <Link href="/login" className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link> */}
            <Link
              href="/pricing"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
            >
              Install Now
            </Link>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">O</span>
                    </div>
                    <span className="text-2xl font-bold text-gray-900">Observa</span>
                  </div>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
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
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6 space-y-2">
                    {/* <Link
                      href="/login"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </Link> */}
                    <Link
                      href="/pricing"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-blue-600 hover:bg-blue-500"
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
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <motion.h1 
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About{' '}
              <span className="text-blue-600">Observa</span>
            </motion.h1>
            <motion.p 
              className="mt-6 text-lg leading-8 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We're on a mission to help Shopify merchants protect their revenue through intelligent performance monitoring and proactive alerting.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Story section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.h2 
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Story
          </motion.h2>
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Founded by former Shopify developers who experienced firsthand how performance issues could devastate online revenue, Observa was born from the need for proactive monitoring that actually works.
          </motion.p>
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We've seen stores lose thousands of dollars in minutes due to undetected performance degradation. That's why we built Observa - to give merchants the tools they need to protect their business before problems impact their bottom line.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 text-sm leading-6 text-gray-600 sm:max-w-none sm:grid-cols-2 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-base font-semibold text-gray-900">Our Mission</h3>
              <p className="mt-2">
                To democratize enterprise-level performance monitoring for Shopify merchants of all sizes, providing them with the insights and alerts they need to protect and grow their revenue.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-base font-semibold text-gray-900">Our Vision</h3>
              <p className="mt-2">
                A world where no ecommerce business loses revenue due to undetected performance issues. Every Shopify store should have access to professional-grade monitoring tools.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <motion.h2 
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Values
            </motion.h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {values.map((value, index) => (
                <motion.div 
                  key={value.name} 
                  className="flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <div className="h-10 w-10 rounded-lg bg-blue-600 p-2.5">
                      <value.icon className="h-5 w-5 text-white" aria-hidden="true" />
                    </div>
                    {value.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2 
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Meet Our Team
          </motion.h2>
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            The passionate team behind Observa, dedicated to protecting your revenue and improving your store's performance.
          </motion.p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {team.map((member, index) => (
            <motion.div 
              key={member.name} 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-6">
                <span className="text-white text-3xl font-bold">{member.name.charAt(0)}</span>
              </div>
              <h3 className="text-lg font-semibold leading-7 text-gray-900">{member.name}</h3>
              <p className="text-sm leading-6 text-blue-600">{member.role}</p>
              <p className="mt-2 text-base leading-7 text-gray-600 text-center">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Trusted by thousands of Shopify stores
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Join the growing community of merchants who rely on Observa to protect their revenue
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">Stores Monitored</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-gray-900">2,500+</dd>
              </div>
              <div className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">Performance Issues Detected</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-gray-900">50K+</dd>
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
      </div>

      {/* CTA section */}
      <div className="bg-blue-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to protect your revenue?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Join thousands of Shopify merchants who trust Observa to monitor their store's performance and protect their bottom line.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/pricing"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all hover:scale-105"
              >
                Get Started Free
              </Link>
              <Link href="/features" className="text-sm font-semibold leading-6 text-white">
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
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">O</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">Observa</span>
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
                      <Link href="/features" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link href="/pricing" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <a href="/integrations" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        Integrations
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">Support</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a href="/docs" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        Documentation
                      </a>
                    </li>
                    <li>
                      <a href="/help" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a href="/contact" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
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
                      <Link href="/about" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        About
                      </Link>
                    </li>
                    <li>
                      <a href="/blog" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="/careers" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        Careers
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a href="/privacy" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a href="/terms" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
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
