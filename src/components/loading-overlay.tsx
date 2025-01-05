interface LoadingOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export function LoadingOverlay({ isOpen, onClose }: LoadingOverlayProps) {
  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm transition-all duration-100 cursor-pointer"
      onClick={onClose}
    >
      <div className="flex flex-col items-center gap-4">
        <pre className="font-mono text-primary whitespace-pre animate-bounce">
{`
    /\\_/\\
   ( o.o )
    > ^ <
`}
        </pre>
        <p className="text-primary text-lg font-medium ml-6">Coming Soon</p>
      </div>
    </div>
  )
} 