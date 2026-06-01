let data=[];
fetch('records.json').then(r=>r.json()).then(records=>{data=records;render(records);});
function render(records){
document.getElementById('results').innerHTML=records.map(r=>`
<div class="card">
<h2>${r.title}</h2>
<p>${r.summary}</p>
<p><b>Country:</b> ${r.country}</p>
<p><b>Evidence:</b> ${r.evidence}</p>
<a href="${r.source}" target="_blank">Source</a>
</div>`).join('');
}
document.getElementById('search').addEventListener('input',e=>{
const q=e.target.value.toLowerCase();
render(data.filter(r=>JSON.stringify(r).toLowerCase().includes(q)));
});