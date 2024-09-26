let password = '1123-_';

if (password.length > 4 && (password.includes('-') || password.includes('_'))) {
    console.log('Надежный пароль');
} else {
    console.log('Ненадежный пароль');
}