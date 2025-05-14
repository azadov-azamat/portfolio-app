"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ExternalLink, Calendar, Tag, User, Briefcase, CheckCircle, XCircle, Sun, Moon } from 'lucide-react'
import { officeData, portfolioData } from "@/utils/constants"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("hammasi")
  const [darkMode, setDarkMode] = useState(false)

  // Initialize dark mode based on system preference
  useEffect(() => {
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
    setDarkMode(isDarkMode)
    
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (darkMode) {
      document.documentElement.classList.remove("dark")
    } else {
      document.documentElement.classList.add("dark")
    }
  }

  // Filter projects based on active tab
  const filteredProjects = () => {
    switch (activeTab) {
      case "aktive":
        return projects.filter(p => p.status)
      case "frontend":
        return projects.filter(p => p.position.includes("Frontend"))
      case "backend":
        return projects.filter(p => p.position.includes("Backend"))
      case "fullstack":
        return projects.filter(p => p.position.includes("Full-stack"))
      default:
        return projects
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Dark Mode Toggle */}
      {/* <button 
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-all"
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <Sun className="h-5 w-5 text-yellow-500" />
        ) : (
          <Moon className="h-5 w-5 text-slate-700" />
        )}
      </button> */}

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
            My Portfolio
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Turli kompaniyalar va texnologiyalar bo'yicha professional ish joylarim va loyihalarimni namoyish etaman
          </p>
        </div>

        {/* Companies Section */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Ish joylarim</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
            {companies.map((company) => (
              <div key={company.id} className="group relative flex flex-col items-center">
                <div className="w-24 h-24 rounded-xl bg-white dark:bg-slate-800 shadow-md flex items-center justify-center p-4 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                  <Image
                    src={company.src || "/placeholder.svg"}
                    alt={company.title}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <span className="mt-3 font-medium text-center text-sm">{company.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Qilingan ishlar</h2>

          {/* Custom Tabs */}
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <div className="inline-flex p-1 rounded-lg bg-slate-100 dark:bg-slate-800">
                {["hammasi", "aktiv", "frontend", "backend", "fullstack"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                      activeTab === tab
                        ? "bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-slate-100"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects().map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function ProjectCard({ project }: any) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg group">
      {/* Card Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.src || "/placeholder.svg"}
          alt={project.title}
          width={500}
          height={300}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <div 
            className={`flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
              project.status 
                ? "bg-teal-500 text-white" 
                : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200"
            }`}
          >
            {project.status ? (
              <CheckCircle className="w-3.5 h-3.5 mr-1" />
            ) : (
              <XCircle className="w-3.5 h-3.5 mr-1" />
            )}
            {project.status ? "Aktiv" : 'Aktiv emas'}
          </div>
        </div>
      </div>

      {/* Card Header */}
      <div className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">{project.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{project.owner}</p>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="px-4 space-y-3 pb-3">
        <div className="flex items-center text-sm text-slate-700 dark:text-slate-300">
          <User className="w-4 h-4 mr-2 text-teal-500" />
          <span>{project.manager}</span>
        </div>

        <div className="flex items-center text-sm text-slate-700 dark:text-slate-300">
          <Briefcase className="w-4 h-4 mr-2 text-teal-500" />
          <span>{project.position}</span>
        </div>

        <div className="flex items-center text-sm text-slate-700 dark:text-slate-300">
          <Calendar className="w-4 h-4 mr-2 text-teal-500" />
          <span>{project.start_date}</span>
        </div>

        {project.url && (
          <div className="flex items-center text-sm">
            <ExternalLink className="w-4 h-4 mr-2 text-teal-500" />
            <a
              href={`https://${project.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 dark:text-teal-400 hover:underline truncate"
            >
              {project.url}
            </a>
          </div>
        )}

        <p className="text-sm line-clamp-2 text-slate-600 dark:text-slate-400">{project.desc}</p>
      </div>

      {/* Card Footer */}
      <div className="px-4 pb-4 pt-0 flex flex-wrap gap-1.5">
        {project.hash.map((tech: any, index: number) => (
          <div 
            key={index} 
            className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-600"
          >
            <Tag className="w-3 h-3 mr-1" />
            {tech}
          </div>
        ))}
      </div>
    </div>
  )
}

// Sample data
const companies = officeData;

const projects = portfolioData