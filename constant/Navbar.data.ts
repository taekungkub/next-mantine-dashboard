import { IconAlertCircle, IconComponents, IconError404, IconFileAnalytics, IconGauge, IconLock, IconLockAccess, IconPackage, IconShield, IconUsers } from "@tabler/icons-react"

export const navbarData = [
  { label: "Dashboard", icon: IconGauge, link: "/dashboard" },
  { label: "Profile", icon: IconGauge, link: "/profile" },
  { label: "Component", icon: IconComponents, link: "/component" },

  {
    label: "CRM",
    icon: IconUsers,
    links: [
      { label: "Customer", link: "/crm/customer" },
      { label: "Customer Detail", link: "/crm/customer/1" },
      { label: "Calendar", link: "/crm/calendar" },
    ],
  },

  {
    label: "Product",
    icon: IconPackage,
    links: [
      { label: "Product List", link: "/products" },
      { label: "Add Product", link: "/products/add" },
      { label: "Edit Product", link: "/products/edit/1" },
      { label: "Order List", link: "/sales/orders" },
      { label: "Order detail", link: "/sales/order/1" },
    ],
    initiallyOpened: false,
  },
  {
    label: "Auth",
    icon: IconShield,
    links: [
      { label: "Signin", link: "/auth/signin" },
      { label: "Signup", link: "/auth/signup" },
      { label: "Verify Email", link: "/auth/verify-email/mycode" },
      { label: "Forgot Password", link: "/auth/forgotpassword" },
      { label: "Reset Password", link: "/auth/resetpassword" },
      { label: "Code Verify", link: "/auth/code-verify" },
    ],
    initiallyOpened: false,
  },
  {
    label: "Exception",
    icon: IconAlertCircle,
    initiallyOpened: false,

    links: [
      { label: "403", link: "/exeception/403" },
      { label: "404", link: "/exeception/404" },
      { label: "503", link: "/exeception/503" },
    ],
  },
  {
    label: "Permission",
    icon: IconLockAccess,
    initiallyOpened: false,

    links: [
      { label: "Auth", link: "/permission/auth" },
      { label: "Admin", link: "/permission/admin", roles: ["admin"] },
      { label: "Super Secret (superadmin)", link: "/permission/secret" },
    ],
  },
  { label: "Contract", icon: IconFileAnalytics, link: "/contact" },
]
