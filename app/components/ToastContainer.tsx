"use client"

import { useToast } from "@/app/context/ToastContext"
import { motion, AnimatePresence } from "framer-motion"
import { Check, AlertCircle, Info, X } from "lucide-react"

export default function ToastContainer() {
  const { toasts, removeToast } = useToast()

  const getIcon = (type: "success" | "info" | "error") => {
    switch (type) {
      case "success":
        return <Check size={20} />
      case "error":
        return <AlertCircle size={20} />
      default:
        return <Info size={20} />
    }
  }

  const getColors = (type: "success" | "info" | "error") => {
    switch (type) {
      case "success":
        return "bg-gradient-to-r from-green-900/80 to-green-800/80 border-green-600/50 text-green-100"
      case "error":
        return "bg-gradient-to-r from-red-900/80 to-red-800/80 border-red-600/50 text-red-100"
      default:
        return "bg-gradient-to-r from-shimmering-gold/20 to-amber/20 border-shimmering-gold/50 text-beige"
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 100, y: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className={`mb-3 backdrop-blur-md border rounded-lg p-4 flex items-center gap-3 pointer-events-auto shadow-lg ${getColors(
              toast.type,
            )}`}
          >
            <div className="flex-shrink-0">{getIcon(toast.type)}</div>
            <p className="flex-1 text-sm font-body">{toast.message}</p>
            <button onClick={() => removeToast(toast.id)} className="flex-shrink-0 hover:opacity-70 transition-opacity">
              <X size={16} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
