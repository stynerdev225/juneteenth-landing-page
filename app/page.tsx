"use client"

import Image from "next/image"
import { Clock, MapPin, Mail, ExternalLink, Users, BookOpen, Heart, Menu, X, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RSVPModal } from "@/components/rsvp-modal"
import { useState } from "react"

export default function JuneteenthLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Background decorative elements - Fully responsive */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* TOP ROW - Hidden on mobile, reduced on tablet */}
        <div className="hidden lg:block absolute top-16 left-16 opacity-75 w-20 h-20 lg:w-32 lg:h-32">
          <Image src="/images/african-mask-1.png" alt="" width={128} height={128} className="w-full h-full" />
        </div>

        <div className="hidden lg:block absolute top-20 left-1/3 opacity-70 w-16 h-16 lg:w-28 lg:h-28">
          <Image src="/images/juneteenth-sunburst.png" alt="" width={112} height={112} className="w-full h-full" />
        </div>

        <div className="hidden lg:block absolute top-16 right-1/3 opacity-75 w-18 h-18 lg:w-30 lg:h-30">
          <Image src="/images/african-mask-2.png" alt="" width={120} height={120} className="w-full h-full" />
        </div>

        <div className="hidden lg:block absolute top-20 right-16 opacity-70 w-20 h-20 lg:w-32 lg:h-32">
          <Image src="/images/juneteenth-drums1.png" alt="" width={128} height={128} className="w-full h-full" />
        </div>

        {/* UPPER MIDDLE ROW - Hidden on mobile, responsive sizing */}
        <div className="hidden md:block absolute top-1/4 left-20 opacity-80 w-16 h-16 md:w-24 md:h-24 lg:w-36 lg:h-36">
          <Image src="/images/african-mask-3.png" alt="" width={144} height={144} className="w-full h-full" />
        </div>

        <div className="hidden md:block absolute top-1/4 left-1/2 transform -translate-x-1/2 opacity-65 w-20 h-20 md:w-28 md:h-28 lg:w-40 lg:h-40">
          <Image src="/images/juneteenth-drums2.png" alt="" width={160} height={160} className="w-full h-full" />
        </div>

        <div className="hidden md:block absolute top-1/4 right-20 opacity-80 w-16 h-16 md:w-24 md:h-24 lg:w-34 lg:h-34">
          <Image src="/images/african-mask-4.png" alt="" width={136} height={136} className="w-full h-full" />
        </div>

        {/* CENTER ROW - Responsive sizing with mobile fallback */}
        <div className="hidden sm:block absolute top-1/2 left-4 sm:left-12 opacity-75 w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28">
          <Image src="/images/african-mask-5.png" alt="" width={112} height={112} className="w-full h-full" />
        </div>

        <div className="hidden sm:block absolute top-1/2 left-1/4 opacity-70 w-18 h-18 sm:w-24 sm:h-24 lg:w-32 lg:h-32">
          <Image src="/images/juneteenth-dancers.png" alt="" width={128} height={128} className="w-full h-full" />
        </div>

        <div className="hidden sm:block absolute top-1/2 right-1/4 opacity-75 w-16 h-16 sm:w-20 sm:h-20 lg:w-30 lg:h-30">
          <Image src="/images/african-mask-6.png" alt="" width={120} height={120} className="w-full h-full" />
        </div>

        <div className="hidden sm:block absolute top-1/2 right-4 sm:right-12 opacity-70 w-18 h-18 sm:w-24 sm:h-24 lg:w-32 lg:h-32">
          <Image src="/images/juneteenth-sunburst.png" alt="" width={128} height={128} className="w-full h-full" />
        </div>

        {/* LOWER MIDDLE ROW - Hidden on mobile */}
        <div className="hidden md:block absolute top-2/3 left-24 opacity-80 w-24 h-24 lg:w-34 lg:h-34">
          <Image src="/images/african-mask-7.png" alt="" width={136} height={136} className="w-full h-full" />
        </div>

        <div className="hidden md:block absolute top-2/3 left-1/2 transform -translate-x-1/2 opacity-75 w-28 h-28 lg:w-36 lg:h-36">
          <Image src="/images/african-mask-8.png" alt="" width={144} height={144} className="w-full h-full" />
        </div>

        <div className="hidden md:block absolute top-2/3 right-24 opacity-80 w-24 h-24 lg:w-32 lg:h-32">
          <Image src="/images/juneteenth-drums1.png" alt="" width={128} height={128} className="w-full h-full" />
        </div>

        {/* BOTTOM ROW - Hidden on mobile */}
        <div className="hidden lg:block absolute bottom-20 left-16 opacity-75 w-24 h-24 lg:w-32 lg:h-32">
          <Image src="/images/juneteenth-special.png" alt="" width={128} height={128} className="w-full h-full" />
        </div>

        <div className="hidden lg:block absolute bottom-24 left-1/3 opacity-70 w-20 h-20 lg:w-28 lg:h-28">
          <Image src="/images/african-mask-1.png" alt="" width={112} height={112} className="w-full h-full" />
        </div>

        <div className="hidden lg:block absolute bottom-20 right-1/3 opacity-75 w-18 h-18 lg:w-30 lg:h-30">
          <Image src="/images/african-mask-2.png" alt="" width={120} height={120} className="w-full h-full" />
        </div>

        <div className="hidden lg:block absolute bottom-24 right-16 opacity-70 w-24 h-24 lg:w-32 lg:h-32">
          <Image src="/images/juneteenth-dancers.png" alt="" width={128} height={128} className="w-full h-full" />
        </div>

        {/* CORNER ACCENTS - Hidden on mobile */}
        <div className="hidden md:block absolute top-32 left-1/2 transform -translate-x-1/2 opacity-65 w-16 h-16 lg:w-24 lg:h-24">
          <Image src="/images/african-mask-3.png" alt="" width={96} height={96} className="w-full h-full" />
        </div>

        <div className="hidden md:block absolute bottom-32 left-1/2 transform -translate-x-1/2 opacity-65 w-16 h-16 lg:w-24 lg:h-24">
          <Image src="/images/african-mask-4.png" alt="" width={96} height={96} className="w-full h-full" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
                PORTAL<span className="navbar-writing text-2xl sm:text-3xl lg:text-4xl">writing</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-black hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-semibold transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("event")}
                  className="text-black hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-semibold transition-colors"
                >
                  Event Details
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-black hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-semibold transition-colors"
                >
                  About
                </button>
                <a
                  href="https://music.watanistiner.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-semibold transition-colors"
                >
                  Music
                </a>
                <button
                  onClick={() => scrollToSection("juneteenth")}
                  className="text-black hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-semibold transition-colors"
                >
                  Juneteenth
                </button>
                <div className="flex items-center space-x-2">
                  <RSVPModal>
                    <button
                      className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded-md text-sm font-semibold transition-colors"
                    >
                      RSVP
                    </button>
                  </RSVPModal>
                  <a
                    href="https://www.facebook.com/groups/2062961534050002/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-blue-600 transition-colors px-4 py-2 rounded-md text-sm font-semibold flex items-center justify-center"
                    aria-label="Join our Facebook group"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black hover:bg-gray-100 p-2 rounded-md"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t-2 border-black">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-sm font-semibold w-full text-left transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("event")}
                  className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-sm font-semibold w-full text-left transition-colors"
                >
                  Event Details
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-sm font-semibold w-full text-left transition-colors"
                >
                  About
                </button>
                <a
                  href="https://music.watanistiner.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-sm font-semibold w-full text-left transition-colors"
                >
                  Music
                </a>
                <button
                  onClick={() => scrollToSection("juneteenth")}
                  className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-sm font-semibold w-full text-left transition-colors"
                >
                  Juneteenth
                </button>
                <RSVPModal>
                  <button
                    className="bg-black text-white hover:bg-gray-800 block px-3 py-2 rounded-md text-sm font-semibold w-full text-left transition-colors"
                  >
                    RSVP
                  </button>
                </RSVPModal>
                <a
                  href="https://www.facebook.com/groups/2062961534050002/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-blue-600 transition-colors flex items-center justify-center px-3 py-2 rounded-md text-sm font-semibold"
                  aria-label="Join our Facebook group"
                >
                  <Facebook className="h-5 w-5 mr-2" />
                  Join Facebook Group
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-8 sm:py-12 md:py-16 lg:py-24 pt-16 sm:pt-20 lg:pt-24">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="space-y-2 sm:space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                  PORTAL <span className="engineer-text">writing</span>
                  <br className="heading-break" /> POETRY HOUR
                </h1>
              </div>

              <div className="box-3d-green p-4 sm:p-6 space-y-4">
                <p className="text-sm sm:text-base lg:text-lg text-black leading-relaxed">
                  An ongoing creative writing group for formerly incarcerated and/or system-impacted writers, focused on
                  stories (memoir, fiction, and creative nonfiction)
                </p>
              </div>

              <div className="box-3d-red p-4 sm:p-6 space-y-2 sm:space-y-3">
                <p className="text-lg sm:text-xl text-black font-medium">Join us on</p>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">Thursday, June 19</h3>
                <p className="text-lg sm:text-xl text-black">to celebrate JUNETEENTH with poet</p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">Däshaun Washington</h2>
                <p className="text-sm sm:text-base lg:text-lg text-black stegner-text">Stegner Fellow for poetry at Stanford University</p>
                <p className="text-xs sm:text-sm lg:text-base text-black flex flex-wrap items-center gap-1 sm:gap-2">
                  <span>(find out more at</span>
                  <a
                    href="https://DashaunWashington.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black underline flex items-center hover:opacity-70 break-all"
                  >
                    DashaunWashington.com
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1 flex-shrink-0" />
                  </a>
                  <span>)</span>
                </p>
              </div>

              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white font-bold px-6 sm:px-8 py-2 sm:py-3 shadow-lg text-sm sm:text-base"
                onClick={() => scrollToSection("event")}
              >
                Learn More
              </Button>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-red-600 via-yellow-500 to-green-600 p-1 rounded-2xl shadow-2xl">
                <Image
                  src="/images/juneteenth-flyer.jpg"
                  alt="PORTAL Juneteenth Event Flyer"
                  width={600}
                  height={800}
                  className="rounded-xl w-full"
                />
              </div>

              {/* Decorative drums - Hidden on small screens */}
              <div className="hidden sm:block absolute -bottom-6 sm:-bottom-10 -left-6 sm:-left-10 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 opacity-60">
                <Image src="/images/juneteenth-drums2.png" alt="" width={96} height={96} className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section id="event" className="py-8 sm:py-12 lg:py-16 relative">
        {/* Decorative dancers - Hidden on mobile */}
        <div className="hidden md:block absolute top-10 right-4 lg:right-10 w-20 h-20 lg:w-32 lg:h-32 opacity-50">
          <Image src="/images/juneteenth-dancers.png" alt="" width={128} height={128} className="w-full h-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-6 lg:space-y-8">
                <div className="box-3d-red p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">Come hear Däshaun read</h2>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
                    with time afterwards for conversation and connection!
                  </h3>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div className="box-3d-yellow p-3 sm:p-4 flex items-center gap-3 sm:gap-4">
                    <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-black flex-shrink-0" />
                    <span className="text-xl sm:text-2xl font-bold text-black">7:30 PM</span>
                  </div>
                  <div className="box-3d-green p-3 sm:p-4 flex items-start gap-3 sm:gap-4">
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-black mt-1 flex-shrink-0" />
                    <span className="text-lg sm:text-xl font-bold text-black">1969 Harrington Ave., Oakland</span>
                  </div>
                  <div className="box-3d-red p-3 sm:p-4 flex items-center gap-3 sm:gap-4">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-black flex-shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm text-black">Contact us:</p>
                      <a href="mailto:portalwriting@gmail.com" className="text-sm sm:text-base lg:text-lg font-semibold text-black underline break-all">
                        portalwriting@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center mt-6 md:mt-0">
                <div className="box-3d-yellow p-6 sm:p-8 w-full max-w-md relative">
                  {/* Decorative drums in the corner - Hidden on mobile */}
                  <div className="hidden sm:block absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 opacity-70">
                    <Image
                      src="/images/juneteenth-drums1.png"
                      alt=""
                      width={64}
                      height={64}
                      className="w-full h-full"
                    />
                  </div>

                  <div className="text-center space-y-3 sm:space-y-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-full flex items-center justify-center mx-auto">
                      <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-black">Free Event</h3>
                    <p className="text-sm sm:text-base text-black">
                      Open to all who are interested in creative writing, poetry, and community connection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-6 sm:py-8 bg-gray-50 relative">
        {/* Decorative sunburst - Hidden on mobile */}
        <div className="hidden md:block absolute bottom-10 left-4 lg:left-10 w-24 h-24 lg:w-40 lg:h-40 opacity-45">
          <Image src="/images/juneteenth-sunburst.png" alt="" width={160} height={160} className="w-full h-full" />
        </div>

        {/* Large decorative images - Hidden on mobile and tablet for readability */}
        <div className="hidden xl:block absolute top-1/2 left-8 transform -translate-y-1/2 w-[400px] h-[400px]">
          <Image src="https://pub-c4eb8296ba9b4feb81d786002e04ec4c.r2.dev/AfricanFaceMasks%20/6.png" alt="" width={400} height={400} className="w-full h-full" />
        </div>

        <div className="hidden xl:block absolute top-1/2 right-8 transform -translate-y-1/2 w-[400px] h-[400px]">
          <Image src="https://pub-c4eb8296ba9b4feb81d786002e04ec4c.r2.dev/AfricanFaceMasks%20/3.png" alt="" width={400} height={400} className="w-full h-full" />
        </div>

        {/* Corner decorative elements - Responsive sizing */}
        <div className="hidden lg:block absolute top-4 sm:top-8 left-4 sm:left-8 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 opacity-100">
          <Image src="https://pub-c4eb8296ba9b4feb81d786002e04ec4c.r2.dev/AfricanFaceMasks%20/7.png" alt="" width={160} height={160} className="w-full h-full" />
        </div>

        <div className="hidden lg:block absolute top-4 sm:top-8 right-4 sm:right-8 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 opacity-100">
          <Image src="https://pub-c4eb8296ba9b4feb81d786002e04ec4c.r2.dev/AfricanFaceMasks%20/2.png" alt="" width={128} height={128} className="w-full h-full" />
        </div>

        <div className="hidden md:block absolute bottom-4 sm:bottom-8 right-1/3 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 opacity-100">
          <Image src="/images/african-mask-6.png" alt="" width={112} height={112} className="w-full h-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-black">
                ABOUT <span className="engineer-text">portal</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <div className="box-3d-red p-4 sm:p-6 text-center space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black">Community</h3>
                <p className="text-sm sm:text-base text-black">
                  A supportive space for formerly incarcerated and system-impacted writers to connect and grow.
                </p>
              </div>

              <div className="box-3d-green p-4 sm:p-6 text-center space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black">Stories</h3>
                <p className="text-sm sm:text-base text-black">
                  Focus on memoir, fiction, and creative nonfiction to share experiences and perspectives.
                </p>
              </div>

              <div className="box-3d-yellow p-4 sm:p-6 text-center space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black">Healing</h3>
                <p className="text-sm sm:text-base text-black">
                  Using the power of writing and storytelling as tools for healing and transformation.
                </p>
              </div>
            </div>

            <div className="box-3d-green p-4 sm:p-6 lg:p-8">
              <p className="text-sm sm:text-base lg:text-lg text-black leading-relaxed text-center">
                PORTAL provides an ongoing creative writing group specifically designed for formerly incarcerated and/or
                system-impacted writers. Our workshops offer a supportive environment where writers can develop their
                craft, share their experiences, and connect with others who understand their journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Juneteenth Section */}
      <section id="juneteenth" className="py-8 sm:py-12 lg:py-16 relative">
        {/* Decorative dancers - Hidden on mobile */}
        <div className="hidden lg:block absolute top-1/2 right-4 lg:right-10 transform -translate-y-1/2 w-32 h-32 lg:w-48 lg:h-48 opacity-40">
          <Image src="/images/juneteenth-dancers.png" alt="" width={192} height={192} className="w-full h-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="box-3d-red p-4 sm:p-6 lg:p-8 relative">
                {/* Decorative drums - Hidden on mobile */}
                <div className="hidden sm:block absolute -top-4 sm:-top-6 lg:-top-8 -left-4 sm:-left-6 lg:-left-8 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 opacity-60">
                  <Image src="/images/juneteenth-drums1.png" alt="" width={80} height={80} className="w-full h-full" />
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-black">Celebrating Juneteenth</h2>
                  <p className="text-sm sm:text-base lg:text-lg text-black leading-relaxed">
                    Juneteenth commemorates the emancipation of enslaved African Americans in the United States. It
                    marks June 19, 1865, when news of the end of slavery reached Texas. This celebration of freedom and
                    African American culture features music, food, and community gatherings, while serving as a time for
                    reflection, education, and action toward equality.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="box-3d-yellow p-4 sm:p-6">
                  <div className="relative">
                    <Image
                      src="/images/juneteenth-dancers.png"
                      alt="Juneteenth celebration dancers"
                      width={400}
                      height={300}
                      className="w-full rounded-lg"
                    />

                    {/* Decorative sunburst - Hidden on small screens */}
                    <div className="hidden sm:block absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 opacity-70">
                      <Image
                        src="/images/juneteenth-sunburst.png"
                        alt=""
                        width={80}
                        height={80}
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Section */}
      <section className="py-8 sm:py-10 lg:py-12 relative bg-juneteenth-main">
        {/* Secondary background image - Hidden on mobile */}
        <div className="hidden lg:block absolute top-0 right-0 w-[120px] h-[120px] lg:w-[200px] lg:h-[200px] bg-juneteenth-secondary"></div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="box-3d-yellow p-4 sm:p-6 lg:p-8 max-w-3xl mx-auto backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
              {/* Sponsor number/badge */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black rounded-full flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl font-bold text-white">1</span>
                </div>
              </div>

              {/* Sponsor text */}
              <div className="text-center sm:text-left">
                <p className="text-base sm:text-lg text-black mb-1 sm:mb-2">This event is sponsored by</p>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">Francesca Bell</p>
                <p className="text-base sm:text-lg text-black italic">Marin County Poet Laureate</p>
              </div>

              {/* Decorative view element */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-8 sm:py-12 lg:py-16 relative">
        {/* Decorative drums - Hidden on mobile */}
        <div className="hidden md:block absolute bottom-6 lg:bottom-10 left-4 lg:left-10 w-24 h-24 lg:w-32 lg:h-32 opacity-45">
          <Image src="/images/juneteenth-drums2.png" alt="" width={128} height={128} className="w-full h-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="max-w-md mx-auto box-3d-red p-4 sm:p-6 lg:p-8 text-center space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-black">Join Us for This Special Event</h2>
              <p className="text-base sm:text-lg text-black">Space may be limited. Let us know you're coming!</p>
              <RSVPModal>
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold px-6 sm:px-8 py-4 sm:py-6 text-lg sm:text-xl w-full">
                  RSVP Now
                </Button>
              </RSVPModal>
              <p className="text-xs sm:text-sm text-black">
                Or email us at{" "}
                <a href="mailto:portalwriting@gmail.com" className="text-black underline break-all">
                  portalwriting@gmail.com
                </a>
              </p>
            </div>

            <div className="flex justify-center relative">
              <div className="box-3d-green p-4 sm:p-6 relative">
                {/* Main PORTAL writing group image */}
                <Image
                  src="https://pub-c4eb8296ba9b4feb81d786002e04ec4c.r2.dev/JUNETEENTH%20.png"
                  alt="PORTAL Writing Group members"
                  width={400}
                  height={300}
                  className="w-full rounded-lg"
                />

                {/* Decorative drums positioned in top-right corner - Hidden on small screens */}
                <div className="hidden sm:block absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 opacity-70">
                  <Image src="/images/juneteenth-drums1.png" alt="" width={64} height={64} className="w-full h-full" />
                </div>

                {/* Decorative sunburst in bottom-left corner - Hidden on small screens */}
                <div className="hidden sm:block absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 opacity-60">
                  <Image
                    src="/images/juneteenth-sunburst.png"
                    alt=""
                    width={48}
                    height={48}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 bg-black relative">
        <div className="absolute inset-0 opacity-25">
          {/* Footer decorative elements - Hidden on mobile */}
          <div className="hidden sm:block absolute top-0 left-1/4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
            <Image src="/images/juneteenth-sunburst.png" alt="" width={96} height={96} className="w-full h-full" />
          </div>
          <div className="hidden sm:block absolute top-0 right-1/4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
            <Image src="/images/juneteenth-drums1.png" alt="" width={96} height={96} className="w-full h-full" />
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex flex-col items-center space-y-3 sm:space-y-4">
            <a
              href="https://www.facebook.com/groups/2062961534050002/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
              aria-label="Join our Facebook group"
            >
              <Facebook className="h-6 w-6 sm:h-8 sm:w-8" />
            </a>
            <p className="text-sm sm:text-base text-white leading-relaxed">
              © 2024 PORTAL Writing Workshop. Celebrating Juneteenth and the power of storytelling.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}