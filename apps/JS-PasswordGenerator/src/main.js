import './style.css'
const characters = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'~',
	'`',
	'!',
	'@',
	'#',
	'$',
	'%',
	'^',
	'&',
	'*',
	'(',
	')',
	'_',
	'-',
	'+',
	'=',
	'{',
	'[',
	'}',
	']',
	',',
	'|',
	':',
	';',
	'<',
	'>',
	'.',
	'?',
	'/',
];

function generatePassword() {
	let password = '';
	let randomizedChars = () => Math.floor(Math.random() * characters.length);
	for (let i = 0; i < 15; i++) {
		password += characters[randomizedChars()]
	}
	return password;
}

let passEl1 = document.getElementById('pass-1');
let passEl2 = document.getElementById('pass-2');
let copyConfirmMsg = document.getElementById('copy-confirmation')

let generateBtn = document.getElementById('generateBtn')
generateBtn.addEventListener('click', () => {
    passEl1.textContent = generatePassword();
    passEl2.textContent = generatePassword();
})

/* 
export function updatePasswords() {
	passEl1.textContent = generatePassword();
	passEl2.textContent = generatePassword();
	console.log('passwords updated');
}
*/

// click to copy
let passwords = document.querySelectorAll('.pwds');
passwords.forEach(password => password.addEventListener('click', () => {
    navigator.clipboard.writeText(password.textContent)
        .then(() => {
            copyConfirmMsg.style.display = 'inline'
            setTimeout(() => {
                copyConfirmMsg.style.display = 'none'
            }, 2000)
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
}))