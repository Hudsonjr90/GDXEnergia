const LIST_ICONS = ['✅', '🔹', '⚡', '✔️', '✔']

export type RichTextBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: { icon: string; text: string }[] }

function startsWithListIcon(line: string): string | null {
  const icon = LIST_ICONS.find((candidate) => line.startsWith(candidate))
  return icon ?? null
}


export function parseRichText(source: string): RichTextBlock[] {
  const blocks = source
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean)

  return blocks.map((block) => {
    const lines = block.split('\n').map((line) => line.trim())
    const icon = startsWithListIcon(lines[0])

    if (icon && lines.every((line) => startsWithListIcon(line))) {
      return {
        type: 'list',
        items: lines.map((line) => {
          const lineIcon = startsWithListIcon(line) as string
          return { icon: lineIcon, text: line.slice(lineIcon.length).trim() }
        })
      }
    }

    if (lines.length === 1 && lines[0].length <= 90) {
      return { type: 'heading', text: lines[0] }
    }

    return { type: 'paragraph', text: lines.join('\n') }
  })
}
