// Q14. Write a function composeValidators(...validators) that takes multiple validator functions and returns a single function that runs them all on a value and returns the first error message it finds, or null if all pass. 

type Validator = (value: string) => string | null;

const required: Validator = (val) => val ? null : "Required";
const minLength = (n: number): Validator => (val) => val.length >= n ? null : `Min ${n} chars`;
const isEmail: Validator = (val) => val.includes("@") ? null : "Invalid email";

function composeValidators(...validators: Validator[]) {
    return (value: string): string | null => {
        for (const validator of validators) {
            const error = validator(value);
            if (error !== null) {
                return error;
            }
        }
        return null;
    };
}

const validate = composeValidators(
    required,
    minLength(5),
    isEmail
);

console.log(validate(""));          // Required
console.log(validate("hi"));        // Min 5 chars
console.log(validate("hello"));     // Invalid email
console.log(validate("a@b.com"));   // null