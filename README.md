# Autism Care - Platform Pemantauan Perkembangan Anak dengan Autisme

## 📋 Status Proyek
![Status](https://img.shields.io/badge/Status-Development-yellow)
![Versi](https://img.shields.io/badge/Versi-1.0.0-blue)

## 🎯 Tujuan Proyek
Platform web berbasis AI untuk membantu orang tua melacak dan meningkatkan perkembangan anak dengan autisme.

## 👥 Pengguna Target
- **Primer:** Orang tua/wali anak dengan autisme
- **Sekunder:** Terapis, pengasuh, pendidik, profesional medis

## ⭐ Fitur Utama
### 1. Dashboard Personal [`STATUS: PLANNED`]
- [ ] Grafik interaktif perkembangan
- [ ] Visualisasi data kemajuan
- [ ] Pelacakan tonggak perkembangan

### 2. Pelacak Perilaku [`STATUS: IN PROGRESS`]
- [ ] Pencatatan perilaku real-time
- [ ] Analisis pola berbasis AI
- [ ] Sistem peringatan otomatis

### 3. Rekomendasi AI [`STATUS: PLANNED`]
- [ ] Saran aktivitas personal
- [ ] Model machine learning transparan
- [ ] Sistem explainable AI

### 4. Forum Komunitas [`STATUS: PLANNED`]
- [ ] Ruang diskusi termoderasi
- [ ] Sistem pesan pribadi
- [ ] Grup diskusi tematik

### 5. Fitur Pendukung [`STATUS: PLANNED`]
- [ ] Perpustakaan pembelajaran
- [ ] Sistem notifikasi
- [ ] Dukungan multi-bahasa
- [ ] Fitur aksesibilitas WCAG

## 🛠 Tech Stack
### Frontend
- Next.js (Latest Stable)
- Tailwind CSS
- Redux Toolkit
- React Query
- ShadCN/UI & Radix UI
- next-i18next

### Backend
- Node.js + Express.js
- PostgreSQL + Prisma
- NextAuth.js
- Socket.io

### AI Integration
- PyTorch
- OpenAI API

### DevOps
- GitHub Actions
- Docker + Kubernetes
- Terraform

## 📁 Struktur Proyek
src/
|-- app/
|   |-- (routes)/
|       |-- dashboard/
|           |-- page.tsx
|           |-- components/
|               |-- ProgressChart.tsx
|               |-- BehaviorTable.tsx
|       |-- login/
|           |-- page.tsx
|       |-- community/
|           |-- page.tsx
|           |-- components/
|               |-- PostList.tsx
|               |-- PostForm.tsx
|-- components/
|   |-- UI/
|       |-- Button.tsx
|       |-- Card.tsx
|   |-- Layout/
|       |-- Header.tsx
|       |-- Footer.tsx
|   |-- Forms/
|       |-- LoginForm.tsx
|       |-- BehaviorLogForm.tsx
|-- hooks/
|   |-- useAuth.ts
|   |-- useFetch.ts
|-- context/
|   |-- AuthContext.tsx
|   |-- ThemeContext.tsx
|-- lib/
|   |-- api/
|       |-- auth.ts
|       |-- user.ts
|       |-- behavior.ts
|   |-- utils/
|       |-- helpers.ts
|       |-- validators.ts
|-- constants/
|   |-- routes.ts
|   |-- apiEndpoints.ts
|-- types/
|   |-- user.d.ts
|   |-- behavior.d.ts
|-- tests/
|   |-- components/
|   |-- pages/
|-- public/
|   |-- images/
|   |-- icons/
|   |-- locales/
|-- styles/
|   |-- globals.css
|   |-- tailwind.css
|-- middleware/
|   |-- authMiddleware.ts
|-- i18n/
|   |-- en/
|   |-- es/
|   |-- fr/



## 🎯 Milestone & Progress

### Fase 1: Riset & Perencanaan (3 minggu)
- [x] Analisis kebutuhan
- [ ] Kerangka privasi data
- [ ] Roadmap detail

### Fase 2: Prototipe (4 minggu)
- [ ] Prototipe interaktif
- [ ] Setup development
- [ ] Validasi stakeholder

### Fase 3: MVP (8 minggu)
- [ ] Fitur inti
- [ ] Backend API
- [ ] Integrasi AI dasar

### Fase 4-6: Pengembangan Lanjutan (10+ minggu)
- [ ] AI enhancement
- [ ] Testing
- [ ] Deployment
- [ ] Maintenance

## 📊 Metrik Kesuksesan
| Metrik | Target | Status |
|--------|---------|--------|
| Retensi Pengguna | 60% (6 bulan) | 🟡 Pending |
| Feedback AI | 85% positif | 🟡 Pending |
| Pengurangan Manual | 50% | 🟡 Pending |
| Uptime | 99.9% | 🟡 Pending |

## 🔒 Keamanan & Kepatuhan
- [ ] GDPR Compliance
- [ ] HIPAA Compliance
- [ ] Enkripsi End-to-end
- [ ] MFA Implementation

## 📝 Dokumentasi
- [Setup Lokal](docs/setup.md)
- [Panduan Kontribusi](docs/contributing.md)
- [API Docs](docs/api.md)

## 🤝 Tim & Kontribusi
- UI/UX Team: Progress [===>     ] 30%
- Backend Team: Progress [===>     ] 30%
- AI/ML Team: Progress [=>        ] 10%
- DevOps Team: Progress [==>      ] 20%

## 📫 Kontak
- Project Manager: [rahmanef63@gmail.com]
- Technical Lead: [rahmanef63@gmail.com]

