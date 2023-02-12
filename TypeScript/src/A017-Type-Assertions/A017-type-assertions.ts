/* Recomendado */
// Condicional
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Non-null Assertions (!)
const bodyother = document.querySelector('body')!;
bodyother.style.background = 'red';

// Type assertion (Só quando eu tiver certeza que ele existe)
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

/* Não Recomendado */
// Type assertion
const body4 = document.querySelector('body') as unknown as number;
