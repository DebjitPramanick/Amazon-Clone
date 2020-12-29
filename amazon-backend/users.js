import bcrypt from "bcryptjs"

export const users =[
    {
        name: "Debjit Pramanick",
        email: "debjit1@gmail.com",
        password: bcrypt.hashAsync('1234',8),
        isAdmin: true,
    },
    {
        name: "Rohan Das",
        email: "rohan67@gmail.com",
        password: bcrypt.hashAsync('1234',8),
        isAdmin: false,
    },
]