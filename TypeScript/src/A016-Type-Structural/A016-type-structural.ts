//Não observa a Identidade do tipo e sim seus atribbutos (e sim o conteúdo)
//Uma especie de interface, so que mais flexivel

//Declaração da função antes de usar
type VerifyUserFn = (user: User, sentValue: User) => boolean;
//Delcaração to tupo User
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'joao', password: '123456' };
const sentUser = { username: 'joao', password: '123456', permissions: '' };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
