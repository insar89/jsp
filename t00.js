const company1 = { name: 'Hexlet', state: 'moderating', website: 'https://hexlet.io' };
const company2 = { name: 'CodeBasics', state: 'published', website: 'https://code-basics.com' };
const company3 = { name: 'CodeBasics', state: 'published', website: 'https://code-basics.com' };
let t1 = {};
let t2 = {};

const comparison = (c1, c2) => {
    const keys = ['name', 'state', 'website'];
    for (const key of keys) {
        if (c1[key] !== c2[key]) {
            return false;
        }
    }
    return true;
}

console.log(comparison(t1, t2));