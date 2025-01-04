'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { ConfirmModal } from "@/components/confirm-modal"

export default function TradingPage() {
  const [showConfirmModal, setShowConfirmModal] = useState(false)

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Trading</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button 
            onClick={() => toast('Default notification')}
            variant="outline"
          >
            Default Toast
          </Button>

          <Button 
            onClick={() => toast.success('Transaction successful!')}
            variant="outline"
            className="text-green-500"
          >
            Success Toast
          </Button>

          <Button 
            onClick={() => toast.error('Failed to execute trade')}
            variant="outline"
            className="text-red-500"
          >
            Error Toast
          </Button>

          <Button 
            onClick={() => toast.warning('Low balance warning')}
            variant="outline"
            className="text-yellow-500"
          >
            Warning Toast
          </Button>

          <Button 
            onClick={() => 
              toast.promise(
                new Promise(resolve => setTimeout(resolve, 2000)),
                {
                  loading: 'Executing trade...',
                  success: 'Trade executed successfully',
                  error: 'Failed to execute trade',
                }
              )
            }
            variant="outline"
            className="text-blue-500"
          >
            Promise Toast
          </Button>

          <Button 
            onClick={() => 
              toast('Custom action required', {
                action: {
                  label: 'Confirm',
                  onClick: () => toast.success('Action confirmed')
                },
              })
            }
            variant="outline"
            className="text-purple-500"
          >
            Action Toast
          </Button>

          <Button
            onClick={() => setShowConfirmModal(true)}
            variant="outline"
            className="text-orange-500"
          >
            Show Confirm Modal
          </Button>
        </div>
      </div>

      <ConfirmModal 
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={() => {
          toast.success('Action confirmed via modal')
        }}
        title="Confirm Action"
        description="Are you sure you want to perform this action? This cannot be undone."
        confirmText="Yes, continue"
        variant="destructive"
      />
    </div>
  )
} 