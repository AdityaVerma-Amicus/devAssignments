// Q5.  Write a function multiFilter(arr, filters) that takes an array of objects and an object of filter conditions, and returns only the items that match ALL conditions. 

interface User {
    name: string;
    age: number;
    role: string;
}

const users: User[] = [ { name: 'Ali', age: 25, role: 'admin' }, 
                { name: 'Sara', age: 17, role: 'user' }, 
                { name: 'Zara', age: 30, role: 'admin' },];


function multiFilter(users: User[], filters: Partial<User>): User[] {
    return users.filter(user => {
        for (const key in filters) {
            if (filters[key as keyof User] !== undefined && user[key as keyof User] !== filters[key as keyof User]) {           
                return false;
            }
        }
        return true;
    });
}

const filteredUsers = multiFilter(users, { role: 'admin', age: 25 });
console.log(filteredUsers);

