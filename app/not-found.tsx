import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-display text-[#28A9E1] text-sm font-semibold uppercase tracking-widest mb-4">404</p>
        <h1 className="font-display text-5xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-white/50 text-lg mb-10 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/" className="btn-primary">Back to Home</Link>
          <Link href="/contact" className="btn-secondary">Contact Us</Link>
        </div>
      </div>
    </div>
  )
}
