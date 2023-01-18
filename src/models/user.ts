import { z } from "zod";

const Grade = z.enum(["A", "B", "C", "D", "F"]);

const SubjectGradesScema = z.object({
    english: Grade,
    maths: Grade,
    physics: Grade,
})

const UserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8, "Password length too short"),
    grades: SubjectGradesScema.optional()
})
    .refine(data => {
        if (data.password == "password") return false
        return true
    }, {message: "Password cant be password", path: ["password`"]});

const GetUser = z.object({
    _id: z.number(),
    name: z.string(),
    email: z.string().email(),
    grades: SubjectGradesScema.optional()
})

type User = z.infer<typeof UserSchema>;

export {
    UserSchema,
    User,
    GetUser
}