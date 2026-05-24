import { useState, useEffect, useCallback } from 'react'
export function use4(initial?: any) {
  const [state, setState] = useState(initial)
  const [loading, setLoading] = useState(false)
  const refresh = useCallback(() => { setLoading(true); setTimeout(() => setLoading(false), 1000) }, [])
  useEffect(() => { refresh() }, [refresh])
  return { state, setState, loading, refresh }
}
