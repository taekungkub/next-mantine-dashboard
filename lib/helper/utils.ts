export function isNumberInput(evt: any) {
  if (!/[0-9]/.test(evt.key)) {
    evt.preventDefault()
  }
}
