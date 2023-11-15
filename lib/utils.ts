export function removeWhiteSpace(val: string) {
  return val.replace(/\s/g, "")
}

export const regexStrongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*-]).{8,}$")
