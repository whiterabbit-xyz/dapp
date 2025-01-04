import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface WalletState {
  isConnected: boolean
  publicKey: string | undefined
  selectedWallet: string | undefined
  setConnected: (connected: boolean) => void
  setPublicKey: (key: string | undefined) => void
  setSelectedWallet: (wallet: string | undefined) => void
  disconnect: () => void
}

export const useWalletStore = create<WalletState>()(
  persist(
    (set) => ({
      isConnected: false,
      publicKey: undefined,
      selectedWallet: undefined,
      setConnected: (connected) => set({ isConnected: connected }),
      setPublicKey: (key) => set({ publicKey: key }),
      setSelectedWallet: (wallet) => set({ selectedWallet: wallet }),
      disconnect: () => set({ 
        isConnected: false, 
        publicKey: undefined, 
        selectedWallet: undefined 
      })
    }),
    {
      name: 'wallet-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ 
        publicKey: state.publicKey,
        selectedWallet: state.selectedWallet
      })
    }
  )
) 