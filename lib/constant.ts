// // old menudashboard

// import { IconArticle, IconDashboard, IconLockAccess, IconLockAccessOff, IconPackage, IconSettings, IconShield, IconUser } from "@tabler/icons-react"

// export const menuDashboard = [
//   { link: "/dashboard", label: "Dashobard", icon: IconDashboard },
//   { link: "/settings", label: "Settings", icon: IconSettings },
//   { link: "/posts", label: "Posts", icon: IconArticle },

//   {
//     label: "Auth",
//     icon: IconShield,
//     links: [
//       { label: "Signin", link: "/auth/signin" },
//       { label: "Signup", link: "/auth/signup" },
//       // { label: "Verify Email", link: "/auth/verify" },
//     ],
//     initiallyOpened: false,
//   },
//   {
//     label: "Account",
//     icon: IconUser,
//     links: [{ label: "Profile", link: "/account/profile" }],
//     initiallyOpened: false,
//   },

//   {
//     label: "Product",
//     icon: IconPackage,
//     links: [
//       { label: "Product List", link: "/products" },
//       { label: "Product Detail", link: "/products/1" },
//       { label: "Add Product", link: "/products/add" },
//       { label: "Edit Product", link: "/products/1/edit" },
//     ],
//     initiallyOpened: false,
//   },
//   {
//     label: "Exception",
//     icon: IconLockAccess,
//     links: [{ label: "403", link: "/exception/403" }],
//     initiallyOpened: false,
//   },
//   { link: "/superadmin", label: "Superadmin", icon: IconLockAccess, roles: ["superadmin"] },

//   {
//     label: "Permission",
//     icon: IconLockAccess,
//     links: [
//       { label: "Superadmin", link: "/protected/superadmin", roles: ["superadmin"] },
//       { label: "Admin", link: "/protected/admin", roles: ["admin", "superadmin"] },
//       { label: "User", link: "/protected/user", roles: ["user", "admin", "superadmin"] },
//     ],
//     initiallyOpened: false,
//   },
// ]
