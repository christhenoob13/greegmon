function display({ version, changelog, description, downloads }){
  document.querySelector("#item").innerHTML = `
  <div class="flex gap-3 text-sm">
    <div class="min-h-20 max-h-20 max-w-20 min-w-20">
      <img src="assets/mclogo.jpeg" alt="Minecraft" class="rounded-md w-full h-full">
    </div>
    <div>
      <p>Version: ${version}</p>
      <p>Changelog: <a href="${changelog}" target="_blank" class="text-green-600 underline">Click</a></p>
      <p class="text-xs text-gray-600">${description}</p>
    </div>
  </div>
      
  <table class="w-full border mt-5">
    <thead class="text-heading text-left border-b bg-gray-200">
      <tr>
        <th scope="col" class="font-semibold py-1 px-3">Options</th>
        <th scope="col" class="font-semibold py-1 px-3">Download</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
  `;
  const tbody = document.querySelector("tbody");
  downloads.forEach(({ option, size, link }) => {
    tbody.innerHTML += `
      <tr>
        <td class="p-2 py-1 text-sm">${option}</td>
        <td class="p-2 py-1 text-xs">
          <a href="${link}"><button class="bg-green-200 text-green-800 rounded-sm p-2 px-3 hover:bg-green-600 hover:text-green-200">${size}</button></a>
        </td>
      </tr>
    `;
  })
}

function main(data) {
  const versions = Object.keys(data).map(a=>a.replaceAll('-','.'));
  const versionInput = document.getElementById('version');
  
  
  versions.forEach(v => {
    versionInput.innerHTML += `<option value="${v}">${v}</option>`
  });
  
  versionInput.onchange = function(){
    display(data[versionInput.value.replaceAll('.','-')]);
  }
  
  display(data[versionInput.value.replaceAll('.','-')]);
}

fetch('./mcdl.json')
  .then(r => r.json())
  .then(d => {
    main(d)
  })