import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

interface StatusFeedbackProps {
  status: string
}

export default function StatusFeedback({ status }: StatusFeedbackProps) {
  if (!status) {
    return null
  }

  let icon
  let message
  let colorClass

  switch (status) {
    case "Sending...":
      icon = <Loader2 className="animate-spin" />
      message = "Sende Nachricht..."
      colorClass = "text-blue-500"
      break
    case "Message sent successfully!":
      icon = <CheckCircle />
      message = "Erfolgreich gesendet!"
      colorClass = "text-green-500"
      break
    default:
      icon = <AlertCircle />
      message = status.startsWith("Error:") ? status : "An error occurred"
      colorClass = "text-red-500"
  }

  return (
    <div className={`flex items-center space-x-2 mb-4 ${colorClass}`}>
      {icon}
      <span className="font-medium">{message}</span>
    </div>
  )
}

