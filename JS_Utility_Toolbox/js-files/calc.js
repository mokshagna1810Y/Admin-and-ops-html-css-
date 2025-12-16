export function add(a, b) {
return a + b;
}

export function sub(a, b) {
return a - b;
}

export function mul(a, b) {
return a * b;
}

export function div(a, b) {
if (b === 0) return "Cannot divide by zero";
return a / b;
}

export function pow(a, b) {
return a ** b;
}

export function sqrt(a) {
return Math.sqrt(a);
}

export function mod(a, b) {
    return a % b;
}
