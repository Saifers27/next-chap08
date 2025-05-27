'use client'
import { useSearchParams } from 'next/navigation'

export default function NewsSearch() {
  const params = useSearchParams()
  const q = params.get('q') ?? ''
  // ここで q を使ったフェッチやフィルタ処理を書く
  return <div>検索ワード: 「{q}」</div>
}
