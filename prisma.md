npx prisma db push

npx prisma studio

### GET

const users = await prisma.user.findMany()

const findUser = await prisma.user.findFirst({
where: {
posts: {
some: {
likes: {
gt: 100
}
}
}
},
orderBy: {
id: "desc"
}
})
}

const user = await prisma.user.findUnique({
where: {
email: 'emma@prisma.io',
},
select: {
email: true,
name: true,
},
})

### CREATE

const user = await prisma.user.create({
data: {
email: 'elsa@prisma.io',
name: 'Elsa Prisma',
},
})

### READ

// By unique identifier
const user = await prisma.user.findUnique({
where: {
email: 'elsa@prisma.io',
},
})

// By ID
const user = await prisma.user.findUnique({
where: {
id: 99,
},
})

### UPDATE

const updateUser = await prisma.user.update({
where: {
email: 'viola@prisma.io',
},
data: {
name: 'Viola the Magnificent',
},
})

### UPDATE Multi

const updateUsers = await prisma.user.updateMany({
where: {
email: {
contains: 'prisma.io',
},
},
data: {
role: 'ADMIN',
},
})

### DELETE

const deleteUser = await prisma.user.delete({
where: {
email: 'bert@prisma.io',
},
})

### DELETE Multi

const deleteUsers = await prisma.user.deleteMany({
where: {
email: {
contains: 'prisma.io',
},
},
})

### DELETE All

const deleteUsers = await prisma.user.deleteMany({})
