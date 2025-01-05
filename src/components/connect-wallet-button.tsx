'use client'

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Wallet, LogOut } from "lucide-react"
import { kit } from "@/lib/wallet-kit"
import { toast } from "sonner"
import { ISupportedWallet } from "@creit.tech/stellar-wallets-kit"
import { useWalletStore } from "@/lib/store"

export function ConnectWalletButton() {
  const { 
    isConnected, 
    publicKey, 
    selectedWallet,
    setConnected, 
    setPublicKey,
    setSelectedWallet, 
    disconnect 
  } = useWalletStore()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Attempt to reconnect if we have a saved wallet
    const connectSavedWallet = async () => {
      if (publicKey && selectedWallet && !isConnected) {
        try {
          kit.setWallet(selectedWallet)
          const { address } = await kit.getAddress()
          if (address === publicKey) {
            setConnected(true)
          }
        } catch {
          disconnect()
        }
      }
    }

    connectSavedWallet()
  }, [publicKey, selectedWallet, isConnected, setConnected, disconnect])

  const handleConnect = async () => {
    setIsLoading(true)
    try {
      await kit.openModal({
        modalTitle: "Connect your Stellar wallet",
        onWalletSelected: async (option: ISupportedWallet) => {
          try {
            kit.setWallet(option.id)
            const { address } = await kit.getAddress()
            if (address) {
              setPublicKey(address)
              setSelectedWallet(option.id)
              setConnected(true)
              toast.success(`Connected to ${option.name}`)
            }
          } catch {
            toast.error(`Failed to connect ${option.name}. Please make sure it's installed and unlocked.`)
          }
        },
        onClosed: (err) => {
          if (err) {
            toast.error('Failed to connect wallet')
          }
        }
      })
    } catch {
      toast.error('Failed to open wallet selection')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDisconnect = () => {
    try {
      disconnect()
      toast.success('Wallet disconnected')
    } catch {
      toast.error('Failed to disconnect wallet')
    }
  }

  if (isConnected && publicKey) {
    return (
      <Button 
        variant="outline" 
        className="w-full justify-start gap-2 text-sm text-muted-foreground hover:text-foreground py-3"
        onClick={handleDisconnect}
      >
        <LogOut className="h-4 w-4" />
        <span className="truncate">
          {publicKey.slice(0, 4)}...{publicKey.slice(-4)}
        </span>
      </Button>
    )
  }

  return (
    <Button 
      variant="secondary" 
      className="w-full justify-start gap-2 text-sm text-secondary-foreground hover:text-secondary-foreground py-3"
      onClick={handleConnect}
      disabled={isLoading}
    >
      <Wallet className="h-4 w-4" />
      {isLoading ? 'Connecting...' : 'Connect Wallet'}
    </Button>
  )
} 