import { useState, useEffect } from "react"
import { Loader2 } from "lucide-react"
import About from "./components/About"
import githubData from "./data/github-data.json"
import type { GitHubData } from "./types"

function App() {
  const [data, setData] = useState<GitHubData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setData(githubData as GitHubData)
      setIsLoading(false)
    }, 100)
  }, [])

  if (isLoading || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-6 h-6 animate-spin text-slate-400" />
          <p className="text-xs text-slate-500 font-medium">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <About githubData={data} />
    </div>
  )
}

export default App
