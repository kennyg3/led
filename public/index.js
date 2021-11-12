document.getElementById('turnOn').addEventListener('click', async (ev) => {
  let result = await fetch('/turnon');
  return result;
});

document.getElementById('turnOff').addEventListener('click', async (ev) => {
  let result = await fetch('/turnoff');
  return result;
});
