"use client"
import SetUpGame from './components/SetUpGame'

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-4 md:p-24 bg-sky-900 font-mono text-white">
      <h1 className="text-5xl font-extrabold text-sky-100 mb-10 text-center">Memory Card Game</h1>
      <SetUpGame/>
    </main>
  )
}
