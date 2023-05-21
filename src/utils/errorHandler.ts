export const errorHandler = (err: unknown) => {
  console.log(`${err}. Please try again`);
  process.exitCode = 1;
}
