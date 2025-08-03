'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  XMarkIcon,
  Bars3Icon,
  ShieldCheckIcon,
  EyeIcon,
  LockClosedIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const navigation = [
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
]

const privacySections = [
  {
    title: 'Information We Collect',
    content: [
      'We collect information you provide directly to us, such as when you create an account, subscribe to our service, or contact us for support.',
      'We automatically collect certain information about your use of our service, including performance metrics, error logs, and usage analytics.',
      'We may collect information from third-party sources, such as Shopify APIs, to provide our monitoring services.',
      'We use cookies and similar tracking technologies to enhance your experience and collect usage data.'
    ],
    icon: EyeIcon,
    delay: 0.1
  },
  {
    title: 'How We Use Your Information',
    content: [
      'To provide, maintain, and improve our performance monitoring services.',
      'To send you technical notices, updates, security alerts, and support messages.',
      'To respond to your comments, questions, and customer service requests.',
      'To monitor and analyze trends, usage, and activities in connection with our service.',
      'To detect, investigate, and prevent fraudulent transactions and other illegal activities.'
    ],
    icon: DocumentTextIcon,
    delay: 0.2
  },
  {
    title: 'Information Sharing and Disclosure',
    content: [
      'We do not sell, trade, or otherwise transfer your personal information to third parties.',
      'We may share your information with service providers who assist us in operating our service.',
      'We may disclose your information if required by law or to protect our rights and safety.',
      'In the event of a merger, acquisition, or sale of assets, your information may be transferred.',
      'We may share aggregated, anonymized data for research and analytics purposes.'
    ],
    icon: ShieldCheckIcon,
    delay: 0.3
  },
  {
    title: 'Data Security',
    content: [
      'We implement appropriate technical and organizational security measures to protect your data.',
      'We use industry-standard encryption to secure data transmission and storage.',
      'We regularly review and update our security practices to address emerging threats.',
      'We limit access to personal information to employees who need it to perform their duties.',
      'We maintain incident response procedures to address potential security breaches.'
    ],
    icon: LockClosedIcon,
    delay: 0.4
  },
  {
    title: 'Your Rights and Choices',
    content: [
      'You can access, update, or delete your personal information through your account settings.',
      'You can opt out of marketing communications by following the unsubscribe instructions.',
      'You can request a copy of your personal data or ask us to restrict processing.',
      'You have the right to data portability and can request your data in a structured format.',
      'You can lodge a complaint with supervisory authorities if you believe your rights have been violated.'
    ],
    icon: ShieldCheckIcon,
    delay: 0.5
  },
  {
    title: 'Data Retention',
    content: [
      'We retain your personal information for as long as necessary to provide our services.',
      'Performance monitoring data is typically retained for 12 months for analysis purposes.',
      'Account information is retained until you delete your account or request deletion.',
      'We may retain certain information for legal, regulatory, or business purposes.',
      'You can request deletion of your data at any time through your account settings.'
    ],
    icon: DocumentTextIcon,
    delay: 0.6
  }
]

const contactInfo = [
  {
    title: 'Email',
    value: 'privacy@observa.app',
    description: 'For privacy-related inquiries'
  },
  {
    title: 'Support',
    value: 'support@observa.app',
    description: 'For technical support and account issues'
  },
  {
    title: 'Legal',
    value: 'legal@observa.app',
    description: 'For legal and compliance matters'
  }
]

export default function PrivacyPage() {
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
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-600 via-emerald-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <span className="text-white font-bold text-lg">O</span>
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
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-600 via-emerald-600 to-cyan-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">O</span>
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
              Privacy{' '}
              <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Policy
              </span>
            </motion.h1>
            <motion.p 
              className="mt-8 text-xl leading-8 text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use our performance monitoring service.
            </motion.p>
            <motion.div 
              className="mt-8 text-sm text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Last updated: January 15, 2025
            </motion.div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <div className="mx-auto max-w-4xl px-6 lg:px-8 pb-24">
        <div className="prose prose-lg prose-gray mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              At Observa, we are committed to protecting your privacy and ensuring the security of your data. 
              This Privacy Policy describes how we collect, use, and safeguard your information when you use our 
              Shopify performance monitoring service.
            </p>
          </motion.div>

          {privacySections.map((section, index) => (
            <motion.div 
              key={section.title}
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: section.delay }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl bg-white/50 backdrop-blur-sm p-8 shadow-lg ring-1 ring-gray-200/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 p-3 shadow-lg">
                    <section.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <div className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <p key={itemIndex} className="text-gray-600 leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Contact Information */}
          <motion.div 
            className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-8">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">{contact.title}</h3>
                  <p className="text-teal-600 font-medium">{contact.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{contact.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Updates Section */}
          <motion.div 
            className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, 
              legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this 
              page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
            </p>
          </motion.div>
        </div>
      </div>

      {/* CTA section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-700/20 via-emerald-700/20 to-cyan-700/20" />
        <div className="relative px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-teal-100">
              Start monitoring your Shopify store's performance today with confidence in our privacy practices.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/pricing"
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
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-600 via-emerald-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <span className="text-white font-bold text-lg">O</span>
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
                      <Link href="/privacy" className="text-sm leading-6 text-gray-600 hover:text-teal-600 transition-colors">
                        Privacy
                      </Link>
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