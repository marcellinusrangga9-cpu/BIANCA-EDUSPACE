// Model Pembelajaran — catalog logic
const models = [
  { name: "Problem Based Learning", acronym: "PBL", file: "pbl.html", cat: "student-centered", desc: "Pembelajaran berbasis masalah kontekstual yang mendorong berpikir kritis dan kolaborasi.", char: "Problem solving, kolaborasi, berpikir kritis" },
  { name: "Project Based Learning", acronym: "PjBL", file: "pjbl.html", cat: "student-centered", desc: "Pembelajaran berbasis proyek nyata yang mengintegrasikan pengetahuan, keterampilan, dan kreativitas.", char: "Proyek nyata, kreativitas, kolaborasi" },
  { name: "Discovery Learning", acronym: "", file: "discovery-learning.html", cat: "student-centered", desc: "Siswa menemukan konsep sendiri melalui eksplorasi dan investigasi terbimbing.", char: "Eksplorasi, inkuiri, penemuan konsep" },
  { name: "Inquiry Learning", acronym: "", file: "inquiry-learning.html", cat: "student-centered", desc: "Pembelajaran yang menekankan pertanyaan, investigasi, dan penemuan ilmiah.", char: "Pertanyaan, investigasi, penemuan" },
  { name: "Cooperative Learning", acronym: "", file: "cooperative-learning.html", cat: "collaborative", desc: "Pembelajaran kooperatif dalam kelompok kecil dengan tanggung jawab bersama.", char: "Kerja kelompok, interdependensi positif" },
  { name: "Contextual Teaching and Learning", acronym: "CTL", file: "ctl.html", cat: "student-centered", desc: "Pembelajaran yang menghubungkan materi dengan konteks kehidupan nyata siswa.", char: "Kontekstual, bermakna, relevan" },
  { name: "Direct Instruction", acronym: "", file: "direct-instruction.html", cat: "teacher-centered", desc: "Pembelajaran langsung dengan penjelasan terstruktur dari guru.", char: "Penjelasan langsung, terstruktur" },
  { name: "Problem Solving", acronym: "", file: "problem-solving.html", cat: "student-centered", desc: "Pendekatan berbasis pemecahan masalah untuk mengembangkan kemampuan berpikir.", char: "Pemecahan masalah, analisis" },
  { name: "Experiential Learning", acronym: "", file: "experiential-learning.html", cat: "student-centered", desc: "Pembelajaran melalui pengalaman langsung dan refleksi.", char: "Pengalaman, refleksi, aksi" },
  { name: "Numbered Heads Together", acronym: "NHT", file: "nht.html", cat: "collaborative", desc: "Teknik kooperatif dengan penomoran anggota kelompok untuk memastikan partisipasi.", char: "Kooperatif, partisipasi merata" }
];

function renderModels(list) {
  const grid = document.getElementById("modelGrid");
  if (!grid) return;
  grid.innerHTML = list.map((m) => `
    <article class="model-card">
      <h3>${m.name}</h3>
      ${m.acronym ? `<span class="acronym">${m.acronym}</span>` : ""}
      <p>${m.desc}</p>
      <span class="char">${m.char}</span>
      <a class="btn btn-sm" href="model/${m.file}">Pelajari Model</a>
    </article>
  `).join("");
}

function filterModels() {
  const q = (document.getElementById("searchInput").value || "").toLowerCase();
  const cat = document.getElementById("filterSelect").value;
  const filtered = models.filter((m) => {
    const matchQ = m.name.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q);
    const matchCat = cat === "all" || m.cat === cat;
    return matchQ && matchCat;
  });
  renderModels(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
  renderModels(models);
  const search = document.getElementById("searchInput");
  const filter = document.getElementById("filterSelect");
  if (search) search.addEventListener("input", filterModels);
  if (filter) filter.addEventListener("change", filterModels);

  const btn = document.getElementById("backToTop");
  if (btn) {
    window.addEventListener("scroll", () => {
      btn.classList.toggle("show", window.scrollY > 300);
    }, { passive: true });
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }
});
