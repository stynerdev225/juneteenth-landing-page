"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { RSVPForm } from "./rsvp-form"
import { useConfetti } from "@/hooks/use-confetti"

interface RSVPModalProps {
    children?: React.ReactNode
    triggerText?: string
    triggerClassName?: string
}

export function RSVPModal({ children, triggerText = "RSVP Now", triggerClassName }: RSVPModalProps) {
    const [open, setOpen] = useState(false)
    const { welcomeConfetti } = useConfetti()

    // Trigger welcome confetti when modal opens
    useEffect(() => {
        if (open) {
            // Small delay to ensure modal is visible
            const timer = setTimeout(() => {
                welcomeConfetti()
            }, 200)
            return () => clearTimeout(timer)
        }
    }, [open, welcomeConfetti])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children || (
                    <Button
                        size="lg"
                        className={triggerClassName || "bg-black hover:bg-gray-800 text-white font-bold px-8 py-6 text-xl w-full"}
                    >
                        {triggerText}
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-md p-0 bg-transparent border-none shadow-none">
                <DialogTitle className="sr-only">RSVP for Juneteenth Event</DialogTitle>
                <RSVPForm />
            </DialogContent>
        </Dialog>
    )
}
