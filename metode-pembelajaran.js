const methods = [
  { name: "Metode Ceramah", file: "ceramah.html", cat: "komunikasi", desc: "Penyampaian materi secara lisan oleh guru kepada siswa.", char: "Penjelasan langsung, efisien" },
  { name: "Metode Tanya Jawab", file: "tanya-jawab.html", cat: "komunikasi", desc: "Interaksi melalui pertanyaan untuk menggali pemahaman siswa.", char: "Interaktif, dialogis" },
  { name: "Metode Diskusi", file: "diskusi.html", cat: "kolaborasi", desc: "Pertukaran ide dan pendapat antar siswa maupun guru.", char: "Kolaboratif, kritis" },
  { name: "Metode Demonstrasi", file: "demonstrasi.html", cat: "praktik", desc: "Menunjukkan cara melakukan sesuatu secara langsung.", char: "Visual, praktik" },
  { name: "Metode Eksperimen", file: "eksperimen.html", cat: "praktik", desc: "Siswa melakukan percobaan untuk menemukan konsep.", char: "Inkuiri, hands-on" },
  { name: "Metode Penugasan", file: "penugasan.html", cat: "praktik", desc: "Pemberian tugas untuk dilaksanakan siswa secara mandiri atau kelompok.", char: "Mandiri, bertanggung jawab" },
  { name: "Metode Simulasi", file: "simulasi.html", cat: "eksplorasi", desc: "Mereplikasi situasi nyata untuk pengalaman belajar.", char: "Imitatif, aman" },
  { name: "Metode Bermain Peran (Role Playing)", file: "role-playing.html", cat: "eksplorasi", desc: "Siswa memerankan tokoh atau situasi tertentu.", char: "Empati, kreatif" },
  { name: "Metode Kerja Kelompok", file: "kerja-kelompok.html", cat: "kolaborasi", desc: "Siswa bekerja dalam kelompok untuk menyelesaikan tugas.", char: "Kooperatif" },
  { name: "Metode Karyawisata", file: "karyawisata.html", cat: "eksplorasi", desc: "Pembelajaran melalui kunjungan ke tempat tertentu.", char: "Pengalaman langsung" },
  { name: "Metode Latihan (Drill)", file: "drill.html", cat: "praktik", desc: "Latihan berulang untuk memperkuat keterampilan.", char: "Repetisi, penguatan" },
  { name: "Metode Bercerita (Storytelling)", file: "storytelling.html", cat: "komunikasi", desc: "Penyampaian materi melalui cerita.", char: "Engaging, naratif" }
];

function renderMethods(list) {
  const grid = document.getElementById("modelGrid");
  if (!grid) return;
  grid.innerHTML = list.map((m) => `
    <article class="model-card">
      <h3>${m.name}</h3>
      <p>${m.desc}</p>
      <span class="char">${m.char}</span>
      <a class="btn btn-sm" href="metode/${m.file}">Pelajari Metode</a>
    </article>
  `).join("");
}

function filterMethods() {
  const q = (document.getElementById("searchInput").value || "").toLowerCase();
  const cat = document.getElementById("filterSelect").value;
  const filtered = methods.filter((m) => {
    const matchQ = m.name.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q);
    const matchCat = cat === "all" || m.cat === cat;
    return matchQ && matchCat;
  });
  renderMethods(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
  renderMethods(methods);
  const search = document.getElementById("searchInput");
  const filter = document.getElementById("filterSelect");
  if (search) search.addEventListener("input", filterMethods);
  if (filter) filter.addEventListener("change", filterMethods);

  const btn = document.getElementById("backToTop");
  if (btn) {
    window.addEventListener("scroll", () => {
      btn.classList.toggle("show", window.scrollY > 300);
    }, { passive: true });
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }
});
