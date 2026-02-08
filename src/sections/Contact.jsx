import { useState } from "react"
import emailjs from "@emailjs/browser"
import Alert from "../components/Alert"
import { Particles } from "../components/Particles"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [isLoading, setIsLoading] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alertType, setAlertType] = useState("success")
  const [alertMessage, setAlertMessage] = useState("")

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Show alert for 3 seconds
  const showAlertMessage = (type, message) => {
    setAlertType(type)
    setAlertMessage(message)
    setShowAlert(true)

    setTimeout(() => {
      setShowAlert(false)
    }, 3000)
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      console.log("Form submitted:", formData)

      await emailjs.send(
        "service_ffv2uja",
        "template_5ntq5sb",
        {
          from_name: formData.name,
          to_name: "João",
          from_email: formData.email,
          to_email: "joaopedronf6b@gmail.com",
          message: formData.message
        },
        "7u_tGg-sY7aBGcZjp"
      )

      setIsLoading(false)
      setFormData({ name: "", email: "", message: "" })
      showAlertMessage("success", "Your message has been sent successfully!")
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      showAlertMessage("danger", "Failed to send your message. Please try again.")
    }
  }

  return (
    <section className="relative flex items-center justify-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto-border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. 
            Feel free to reach out to me. I look forward to connecting with you!
          </p>
        </div>

        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="field-input field-input-focus"
              placeholder="Enter your full name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="field-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="field-input field-input-focus"
              placeholder="Enter your email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="field-label">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              autoComplete="off"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
