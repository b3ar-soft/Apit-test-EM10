import '@babel/polyfill';

import server from './server'



async function main() {
    await server.listen('3000');
    console.log('Server on port 3000');
}

main();