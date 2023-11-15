import { useState } from "react"

function useUser() {
  const [users, setUsers] = useState([])
  const [userData, setUserdata] = useState()

  async function getUsers() {}

  async function getUserById() {}

  return {
    users,
    userData,
    getUsers,
    getUserById,
  }
}

export default useUser
