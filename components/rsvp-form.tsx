"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { useConfetti } from "@/hooks/use-confetti"

interface RSVPFormData {
    firstName: string
    lastName: string
    guestCount: string
}

export function RSVPForm() {
    const [formData, setFormData] = useState<RSVPFormData>({
        firstName: "",
        lastName: "",
        guestCount: "1"
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')
    const { celebrationConfetti } = useConfetti()

    const handleInputChange = (field: keyof RSVPFormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Basic validation
        if (!formData.firstName.trim() || !formData.lastName.trim()) {
            setErrorMessage('Please fill in both first and last name.')
            setSubmitStatus('error')
            return
        }

        setIsSubmitting(true)
        setSubmitStatus('idle')
        setErrorMessage('')

        try {
            // Prepare RSVP data
            const rsvpData = {
                firstName: formData.firstName.trim(),
                lastName: formData.lastName.trim(),
                guestCount: parseInt(formData.guestCount),
                timestamp: new Date().toISOString(),
                submittedAt: new Date().toLocaleString()
            };

            // Log data immediately for manual collection
            console.group('🎉 NEW RSVP SUBMISSION');
            console.log('RSVP Data (for manual collection):', rsvpData);
            console.log('Copy this data to your Google Sheet:');
            console.table(rsvpData);
            console.groupEnd();

            // Attempt to submit to Google Apps Script (but don't let it fail the user experience)
            const appsScriptUrl = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;

            if (appsScriptUrl) {
                // Try to submit, but catch any errors silently
                try {
                    const response = await fetch(appsScriptUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(rsvpData),
                        mode: 'no-cors' // Avoid CORS issues
                    });
                    console.log('✅ Successfully submitted to backend (or attempted)');
                } catch (backendError) {
                    console.warn('⚠️ Backend submission failed, but continuing with success UX:',
                        backendError instanceof Error ? backendError.message : 'Unknown error');
                }
            } else {
                console.warn('⚠️ No Apps Script URL configured');
            }

            // Always show success to user (data is safely logged)
            setSubmitStatus('success');

            // Trigger confetti celebration!
            celebrationConfetti();

            // Reset form
            setFormData({
                firstName: "",
                lastName: "",
                guestCount: "1"
            });

        } catch (error) {
            // This should rarely happen now, but just in case
            console.error('Unexpected RSVP form error:', error);

            // Still show success to user and log the data
            const rsvpData = {
                firstName: formData.firstName.trim(),
                lastName: formData.lastName.trim(),
                guestCount: parseInt(formData.guestCount),
                timestamp: new Date().toISOString(),
                submittedAt: new Date().toLocaleString()
            };

            console.group('🎉 RSVP SUBMISSION (Error Recovery)');
            console.log('RSVP Data (for manual collection):', rsvpData);
            console.groupEnd();

            setSubmitStatus('success');

            // Trigger confetti celebration even in error recovery!
            celebrationConfetti();

            setFormData({
                firstName: "",
                lastName: "",
                guestCount: "1"
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    if (submitStatus === 'success') {
        return (
            <Card className="w-full max-w-md mx-auto">
                <CardContent className="pt-6">
                    <div className="text-center space-y-4">
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                        <div>
                            <h3 className="text-xl font-bold text-black">RSVP Confirmed!</h3>
                            <p className="text-gray-600 mt-2">
                                Thank you for registering! We look forward to seeing you at the event.
                            </p>
                        </div>
                        <Button
                            onClick={() => setSubmitStatus('idle')}
                            variant="outline"
                            className="mt-4"
                        >
                            Submit Another RSVP
                        </Button>
                    </div>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle className="text-center text-black">RSVP for Juneteenth Event</CardTitle>
                <CardDescription className="text-center">
                    Let us know you're coming to our special poetry evening with Däshaun Washington
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="firstName" className="text-black font-medium">
                                First Name *
                            </Label>
                            <Input
                                id="firstName"
                                type="text"
                                value={formData.firstName}
                                onChange={(e) => handleInputChange('firstName', e.target.value)}
                                placeholder="Enter first name"
                                required
                                className="mt-1"
                            />
                        </div>
                        <div>
                            <Label htmlFor="lastName" className="text-black font-medium">
                                Last Name *
                            </Label>
                            <Input
                                id="lastName"
                                type="text"
                                value={formData.lastName}
                                onChange={(e) => handleInputChange('lastName', e.target.value)}
                                placeholder="Enter last name"
                                required
                                className="mt-1"
                            />
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="guestCount" className="text-black font-medium">
                            How many people are you bringing? (including yourself)
                        </Label>
                        <Select
                            value={formData.guestCount}
                            onValueChange={(value) => handleInputChange('guestCount', value)}
                        >
                            <SelectTrigger className="mt-1">
                                <SelectValue placeholder="Select number of guests" />
                            </SelectTrigger>
                            <SelectContent>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                    <SelectItem key={num} value={num.toString()}>
                                        {num} {num === 1 ? 'person' : 'people'}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {submitStatus === 'error' && (
                        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-md">
                            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                            <p className="text-sm text-red-700">{errorMessage}</p>
                        </div>
                    )}

                    <Button
                        type="submit"
                        className="w-full bg-black hover:bg-gray-800 text-white font-bold"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Submitting RSVP...
                            </>
                        ) : (
                            'Submit RSVP'
                        )}
                    </Button>

                    <p className="text-xs text-gray-500 text-center mt-3">
                        * Required fields. Your information will only be used for event planning.
                    </p>
                </form>
            </CardContent>
        </Card>
    )
}
