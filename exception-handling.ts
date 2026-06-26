function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }

  return a / b;
}

try {
  const result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.error('Error occurred:', error);
} finally {
  console.log('Cleanup completed');
}

class FileResource {
  [Symbol.dispose]() {
    console.log('File closed');
  }

  read() {
    console.log('Reading file...');
  }
}

{
  using file = new FileResource();

  file.read();
}

console.log('Program finished');
