"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [{ name: 'Ali', age: 25, role: 'admin' },
    { name: 'Sara', age: 17, role: 'user' },
    { name: 'Zara', age: 30, role: 'admin' },];
function multiFilter(users, filters) {
    return users.filter(user => {
        for (const key in filters) {
            if (filters[key] !== undefined && user[key] !== filters[key]) {
                return false;
            }
        }
        return true;
    });
}
const filteredUsers = multiFilter(users, { role: 'admin', age: 25 });
console.log(filteredUsers);
//# sourceMappingURL=q5.js.map