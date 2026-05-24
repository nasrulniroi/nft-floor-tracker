"use client"
import { Line, Bar, Doughnut } from 'react-chartjs-2'
export default function Chart4({ data, title }: { data: number[]; title: string }) {
  return <div className="card"><h3 className="font-semibold mb-3">{title}</h3><Line data={ datasets: [{ data, borderColor: '#818cf8' }] } /></div>
}