export default function OfflineIndicator() {
  return (
    <div className="bg-yellow-100 dark:bg-yellow-900 border-b border-yellow-300 dark:border-yellow-800 text-yellow-900 dark:text-yellow-100 p-3 flex items-center justify-between">
      <p className="text-sm font-medium flex items-center gap-2">
        <span>📵</span>
        <span>You're offline. 15 lessons available for offline learning</span>
      </p>
      <button className="text-xs font-semibold underline hover:no-underline">Sync when online</button>
    </div>
  )
}
