export function BackgroundPattern() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute -top-[40%] -right-[60%] w-[100%] h-[100%] rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-[30%] -left-[20%] w-[60%] h-[60%] rounded-full bg-accent/5 blur-3xl"></div>
      <div className="absolute top-[20%] left-[30%] w-[40%] h-[40%] rounded-full bg-secondary/5 blur-3xl"></div>

      <svg className="absolute top-0 left-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}
