export default function Table7({ data }: { data: any[] }) {
  return <div className="card"><table className="w-full text-sm"><tbody>{data.map((r,i) => <tr key={i}>{Object.values(r).map((v,j) => <td key={j} className="py-2 px-3">{String(v)}</td>)}</tr>)}</tbody></table></div>
}