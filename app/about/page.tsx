import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="bg-primary-600">
        <nav className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
          <Link href="/" className="text-2xl font-bold text-white">
            Observa
          </Link>
        </nav>
      </header>

      {/* Hero section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            About Observa
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're on a mission to help Shopify merchants protect their revenue through intelligent performance monitoring and proactive alerting.
          </p>
        </div>
      </div>

      {/* Story section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Story</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Founded by former Shopify developers who experienced firsthand how performance issues could devastate online revenue, Observa was born from the need for proactive monitoring that actually works.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We've seen stores lose thousands of dollars in minutes due to undetected performance degradation. That's why we built Observa - to give merchants the tools they need to protect their business before problems impact their bottom line.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 text-sm leading-6 text-gray-600 sm:max-w-none sm:grid-cols-2 lg:gap-12">
            <div>
              <h3 className="text-base font-semibold text-gray-900">Our Mission</h3>
              <p className="mt-2">
                To democratize enterprise-level performance monitoring for Shopify merchants of all sizes, providing them with the insights and alerts they need to protect and grow their revenue.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900">Our Vision</h3>
              <p className="mt-2">
                A world where no ecommerce business loses revenue due to undetected performance issues. Every Shopify store should have access to professional-grade monitoring tools.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Values
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  Customer Success First
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Every feature we build is designed with our customers' success in mind. We measure our success by the revenue we help protect and the problems we help prevent.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  Simplicity & Power
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Complex monitoring should be simple to use. We believe powerful tools don't have to be complicated, and the most important insights should be immediately actionable.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  Proactive Innovation
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    We don't wait for problems to happen. Our technology anticipates issues before they impact your business, giving you the time to act rather than react.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-primary-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to protect your revenue?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              Join thousands of Shopify merchants who trust Observa to monitor their store's performance and protect their bottom line.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/signup"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-600 shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Start free trial
              </Link>
              <Link href="/" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link href="/" className="text-gray-400 hover:text-gray-500">
              Home
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-gray-500">
              Contact
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-gray-500">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-gray-500">
              Terms
            </Link>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; 2025 Observa. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
