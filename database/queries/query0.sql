-- Query 0
SELECT r.id, r.name, r.value, s.value as snapshot_value
FROM records r
LEFT JOIN snapshots s ON s.record_id = r.id
WHERE r.category = $1
ORDER BY s.snapshot_at DESC
LIMIT 100;
