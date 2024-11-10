// `:::` markers to disable markdown-it parsing
// Based on: https://github.com/markdown-it/markdown-it-container
//
export default function container_plugin (md, options) {

  function renderDefault (tokens, idx, _options, env, slf) {
    return tokens[idx].content
  }

  options = options || {}

  const min_markers = 3
  const marker_str  = options.marker || ':'
  const marker_char = marker_str.charCodeAt(0)
  const marker_len  = marker_str.length
  const validate    = options.validate || (() => (true))
  const render      = options.render || renderDefault

  function container (state, startLine, endLine, silent) {
    let pos
    let auto_closed = false
    let start = state.bMarks[startLine] + state.tShift[startLine]
    let max = state.eMarks[startLine]

    // Check out the first character quickly,
    // this should filter out most of non-containers
    //
    if (marker_char !== state.src.charCodeAt(start)) { return false }

    // Check out the rest of the marker string
    //
    for (pos = start + 1; pos <= max; pos++) {
      if (marker_str[(pos - start) % marker_len] !== state.src[pos]) {
        break
      }
    }

    const marker_count = Math.floor((pos - start) / marker_len)
    if (marker_count < min_markers) { return false }
    pos -= (pos - start) % marker_len

    const markup = state.src.slice(start, pos)
    const params = state.src.slice(pos, max)
    if (!validate(params, markup)) { return false }

    // Since start is found, we can report success here in validation mode
    //
    if (silent) { return true }

    // Search for the end of the block
    //
    let nextLine = startLine

    for (;;) {
      nextLine++
      if (nextLine >= endLine) {
        // unclosed block should be autoclosed by end of document.
        // also block seems to be autoclosed by end of parent
        break
      }

      start = state.bMarks[nextLine] + state.tShift[nextLine]
      max = state.eMarks[nextLine]

      if (start < max && state.sCount[nextLine] < state.blkIndent) {
        // non-empty line with negative indent should stop the list:
        // - ```
        //  test
        break
      }

      if (marker_char !== state.src.charCodeAt(start)) { continue }

      if (state.sCount[nextLine] - state.blkIndent >= 4) {
        // closing fence should be indented less than 4 spaces
        continue
      }

      for (pos = start + 1; pos <= max; pos++) {
        if (marker_str[(pos - start) % marker_len] !== state.src[pos]) {
          break
        }
      }

      // closing code fence must be at least as long as the opening one
      if (Math.floor((pos - start) / marker_len) < marker_count) { continue }

      // make sure tail has spaces only
      pos -= (pos - start) % marker_len
      pos = state.skipSpaces(pos)

      if (pos < max) { continue }

      // found!
      auto_closed = true
      break
    }

    const old_parent = state.parentType
    const old_line_max = state.lineMax
    state.parentType = 'container'

    // this will prevent lazy continuations from ever going past our end marker
    state.lineMax = nextLine

    // const token_o  = state.push('container_open', 'div', 1)
    // token_o.markup = markup
    // token_o.block  = true
    // token_o.info   = params
    // token_o.map    = [startLine, nextLine]

    // state.md.block.tokenize(state, startLine + 1, nextLine)
    const token_i   = state.push('container_content', 'div', 0)
    token_i.info    = params
    token_i.content = state.getLines(startLine + 1, nextLine, state.sCount[startLine], true)
    token_i.markup  = markup
    token_i.map     = [startLine, state.line]

    // const token_c  = state.push('container_close', 'div', -1)
    // token_c.markup = state.src.slice(start, pos)
    // token_c.block  = true

    state.parentType = old_parent
    state.lineMax = old_line_max
    state.line = nextLine + (auto_closed ? 1 : 0)

    return true
  }

  md.block.ruler.before('fence', 'container', container, {
    alt: ['paragraph', 'reference', 'blockquote', 'list']
  })
  // md.renderer.rules['container_open'] = render
  md.renderer.rules['container_content'] = render
  // md.renderer.rules['container_close'] = render
};
