/** コレクションの entry.id（例: api.md）を URL 用スラッグ（api）に揃える */
export function termSlug(entryId: string): string {
  return entryId.replace(/\.md$/i, '');
}
