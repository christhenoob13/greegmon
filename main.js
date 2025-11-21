const ul = document.getElementById("ul-projects");
function projects(data){
  const li = document.createElement('li');li.className = "bg-zinc-900 rounded-md overflow-hidden";
  
  const div1 = document.createElement('div');div1.className = "border border-zinc-800 m-4 mb-1 h-40 p-2 bg-zinc-950 rounded-xl";
  const img = document.createElement('img');
  img.src = data.thumbnail;
  img.alt = data.title;
  img.style.width = "100%";
  img.style.height = "100%";
  img.className = "rounded-lg";
  
  const div2 = document.createElement("div");div2.className = "px-6 pb-4";
  const title = document.createElement("a");
  title.className = "text-lg text-emerald-600 underline";
  title.href = data.src;
  title.target = "_blank";
  title.textContent = data.title;
  const description = document.createElement('p');
  description.className = "text-sm";
  description.textContent = data.description;
  const tags = document.createElement('p');
  tags.className = "pt-2 text-xs leading-7";
  data.tags.forEach(({ text, color }) => {
    const span = document.createElement('span');
    span.className = `tags text-xs text-${color} border-${color} mr-1`;
    span.textContent = text;
    tags.appendChild(span)
  })
  
  div1.appendChild(img);
  div2.appendChild(title);
  div2.appendChild(description);
  div2.appendChild(tags);
  li.appendChild(div1);
  li.appendChild(div2);
  ul.appendChild(li)
}

fetch('./data.json')
  .then(r => r.json())
  .then(data => {
    data.projects.forEach((p) => projects(p))
  })
  .catch(e => alert("May error"))