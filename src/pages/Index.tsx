import { useState } from "react";
import Icon from "@/components/ui/icon";

const CLINIC_IMAGE = "https://cdn.poehali.dev/projects/3eae3c75-3228-4881-8e8e-f72c1dc566e0/files/51e9e9b3-1411-48ce-9f26-f67da0da2ddf.jpg";

const doctors = [
  { name: "Марченко С.Е.", role: "ЛОР, главный врач", spec: "Дети и взрослые", exp: "", cat: "", photo: "" },
  { name: "Бахмут Н.Ю.", role: "Невролог, остеопат", spec: "Нервная система, головные боли", exp: "26 лет", cat: "Высшая категория", photo: "" },
  { name: "Бахмут Кирилл Юрьевич", role: "Остеопат", spec: "Боли, стресс, восстановление", exp: "26 лет", cat: "Высшая категория", photo: "https://cdn.poehali.dev/files/ce2aae14-ae3b-4a43-b3b3-bb00ef2523fb.png" },
  { name: "Мухина Е.М.", role: "Остеопат, педиатр", spec: "Беременные, дети раннего возраста", exp: "", cat: "", photo: "" },
  { name: "Хороших Ирина Юрьевна", role: "Доктор остеопатии", spec: "Дети с 1 месяца, неврология", exp: "13 лет", cat: "Член РОсА", photo: "https://cdn.poehali.dev/files/6cdc3cad-6b6f-45cb-889d-4409cd9063ff.png" },
  { name: "Растрыгина Жанна Александровна", role: "Педиатр", spec: "Наблюдение, лечение, вакцинация", exp: "30 лет", cat: "Высшая категория", photo: "https://cdn.poehali.dev/files/23066e9d-24ba-4f6b-9993-9358e9eccc70.png" },
  { name: "Попов Олег Анатольевич", role: "Массажист", spec: "Взрослые/дети, грыжи, травмы", exp: "31 год", cat: "", photo: "https://cdn.poehali.dev/files/983b99ce-4288-4180-b42c-4c89531efafd.png" },
  { name: "Либенко Светлана Анатольевна", role: "Детский массажист", spec: "Развитие детей 0–7 лет", exp: "29 лет", cat: "Высшая категория", photo: "https://cdn.poehali.dev/files/628d83f3-71b2-4f8b-8ef5-029db06b3061.png" },
  { name: "Чепурнова Т.М.", role: "Гинеколог", spec: "Диагностика и лечение", exp: "23 года", cat: "Высшая категория", photo: "" },
  { name: "Абрамова О.Н.", role: "Гинеколог, врач УЗИ", spec: "Гинекология, ультразвуковая диагностика", exp: "25 лет", cat: "Высшая категория", photo: "" },
  { name: "Проскурякова Т.В.", role: "Врач УЗИ", spec: "Органы, беременность, дети", exp: "45 лет", cat: "Высшая категория", photo: "" },
];

const directions = [
  { icon: "Activity", label: "Остеопатия" },
  { icon: "Brain", label: "Неврология" },
  { icon: "Hand", label: "Мануальная терапия" },
  { icon: "Heart", label: "Массаж" },
  { icon: "Baby", label: "Педиатрия" },
  { icon: "Stethoscope", label: "Гинекология" },
  { icon: "Scan", label: "УЗИ-диагностика" },
];

const trustPoints = [
  { icon: "Award", text: "Врачи высшей категории" },
  { icon: "Clock", text: "Стаж врачей до 45 лет" },
  { icon: "Search", text: "Комплексная диагностика" },
  { icon: "Leaf", text: "Мягкие методы лечения" },
  { icon: "Users", text: "Приём всей семьи" },
  { icon: "Baby", text: "Дети с рождения" },
];

const TEAL = "#2d8c7a";
const TEAL_LIGHT = "#e8f5f2";
const TEAL_DARK = "#1e6458";
const GOLD = "#d4883a";
const GOLD_LIGHT = "#fdf3e7";
const TEXT = "#1a2332";
const MUTED = "#5a6778";
const BG = "#fafbfc";
const BG_WARM = "#f8f6f3";

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: "rgba(255,255,255,0.97)", backdropFilter: "blur(8px)", borderBottom: "1px solid #e8f0ee" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <img src="https://cdn.poehali.dev/projects/3eae3c75-3228-4881-8e8e-f72c1dc566e0/bucket/857e3fee-7628-4d92-9c70-d7a0946b1798.png" alt="Радуга Здоровья" style={{ height: 52, width: "auto", objectFit: "contain" }} />
          <div>
            <div style={{ fontFamily: "Cormorant, serif", fontWeight: 600, fontSize: 20, color: TEAL_DARK, lineHeight: 1.2 }}>Радуга Здоровья</div>
            <div style={{ fontFamily: "Golos Text, sans-serif", fontSize: 11, color: MUTED }}>Медицинский центр · Липецк</div>
          </div>
        </a>

        <nav style={{ display: "flex", alignItems: "center", gap: 24 }} className="hidden md:flex">
          {[["О центре", "#about"], ["Врачи", "#doctors"], ["Лечим", "#problems"], ["Контакты", "#contacts"]].map(([label, href]) => (
            <a key={label} href={href} style={{ fontFamily: "Golos Text, sans-serif", fontSize: 14, color: MUTED, textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = TEAL)}
              onMouseLeave={e => (e.currentTarget.style.color = MUTED)}>
              {label}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a href="tel:906868" style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "Golos Text, sans-serif", fontWeight: 600, fontSize: 15, color: TEAL_DARK, textDecoration: "none" }} className="hidden sm:flex">
            <Icon name="Phone" size={15} />
            90-68-68
          </a>
          <a href="#booking" className="hidden md:inline-flex"
            style={{ padding: "10px 22px", borderRadius: 100, background: TEAL, color: "white", fontFamily: "Golos Text, sans-serif", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
            Записаться
          </a>
          <button className="md:hidden" style={{ background: "none", border: "none", cursor: "pointer", padding: 6 }} onClick={() => setOpen(!open)}>
            <Icon name={open ? "X" : "Menu"} size={22} style={{ color: TEAL }} />
          </button>
        </div>
      </div>
      {open && (
        <div style={{ background: "white", borderTop: "1px solid #e8f0ee", padding: "12px 24px 20px" }}>
          {[["О центре", "#about"], ["Врачи", "#doctors"], ["Лечим", "#problems"], ["Контакты", "#contacts"]].map(([label, href]) => (
            <a key={label} href={href} style={{ display: "block", fontFamily: "Golos Text, sans-serif", fontSize: 15, color: TEXT, textDecoration: "none", padding: "10px 0" }} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href="#booking" onClick={() => setOpen(false)}
            style={{ display: "block", textAlign: "center", padding: "12px", background: TEAL, color: "white", borderRadius: 100, fontFamily: "Golos Text, sans-serif", fontWeight: 600, fontSize: 14, textDecoration: "none", marginTop: 8 }}>
            Записаться на приём
          </a>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", background: BG_WARM, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <img src={CLINIC_IMAGE} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.07 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #f8f6f3 0%, rgba(232,245,242,0.8) 50%, #f8f6f3 100%)" }} />
      </div>
      <div style={{ position: "absolute", top: 80, right: 0, width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${TEAL}20 0%, transparent 70%)`, pointerEvents: "none" }} />

      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "100px 24px 60px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="hero-grid">
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 100, background: TEAL_LIGHT, color: TEAL_DARK, fontFamily: "Golos Text, sans-serif", fontSize: 13, fontWeight: 500, marginBottom: 24 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: TEAL, display: "inline-block" }} />
            Ведём приём сейчас
          </div>

          <h1 style={{ fontFamily: "Cormorant, serif", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 600, color: TEXT, lineHeight: 1.1, marginBottom: 20 }}>
            Здоровье семьи —<br />
            <span style={{ color: TEAL }}>под контролем врачей</span><br />
            экспертного уровня
          </h1>

          <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: 17, lineHeight: 1.7, color: MUTED, marginBottom: 28 }}>
            Остеопатия, неврология, гинекология, педиатрия, массаж и УЗИ. Мягкое восстановление организма без перегрузки медикаментами — с первых дней жизни.
          </p>

          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
            {["Врачи высшей категории, стаж до 45 лет", "Приём детей с 0 лет", "Работа с причиной, а не симптомами"].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: "Golos Text, sans-serif", fontSize: 15, color: TEXT, marginBottom: 10 }}>
                <div style={{ width: 22, height: 22, borderRadius: "50%", background: TEAL_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name="Check" size={13} style={{ color: TEAL }} />
                </div>
                {item}
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#booking" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 100, background: TEAL, color: "white", fontFamily: "Golos Text, sans-serif", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
              <Icon name="Calendar" size={18} />
              Записаться на приём
            </a>
            <a href="#picker" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 100, border: `2px solid ${TEAL}`, color: TEAL, fontFamily: "Golos Text, sans-serif", fontWeight: 600, fontSize: 15, textDecoration: "none", background: "white" }}>
              <Icon name="UserSearch" size={18} />
              Подобрать специалиста
            </a>
          </div>

          <div style={{ display: "flex", gap: 32, marginTop: 36, paddingTop: 28, borderTop: "1px solid #dceee9" }}>
            {[["11", "специалистов"], ["45", "лет стажа"], ["0+", "лет пациентам"]].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontFamily: "Cormorant, serif", fontSize: 36, fontWeight: 700, color: TEAL }}>{num}</div>
                <div style={{ fontFamily: "Golos Text, sans-serif", fontSize: 12, color: MUTED }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <div style={{ position: "relative" }}>
            <img src={CLINIC_IMAGE} alt="Клиника Радуга Здоровья" style={{ width: "100%", height: 500, objectFit: "cover", borderRadius: 28, boxShadow: "0 24px 64px rgba(0,0,0,0.12)" }} />
            <div style={{ position: "absolute", bottom: -20, left: -20, background: "white", borderRadius: 20, boxShadow: "0 8px 32px rgba(0,0,0,0.1)", padding: "18px 22px", maxWidth: 260 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: TEAL_LIGHT, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="Star" size={20} style={{ color: TEAL }} />
                </div>
                <div>
                  <div style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 600, fontSize: 13, color: TEXT }}>Врачи экспертного уровня</div>
                  <div style={{ color: "#f59e0b", fontSize: 12, marginTop: 2 }}>★★★★★</div>
                </div>
              </div>
              <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: 12, color: MUTED, margin: 0 }}>Более 2000 семей доверяют нам своё здоровье</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" style={{ padding: "80px 24px", background: "white" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: TEAL, marginBottom: 10 }}>О нас</p>
          <h2 style={{ fontFamily: "Cormorant, serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 600, color: TEXT, marginBottom: 16 }}>Центр, которому доверяют семьи</h2>
          <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: 16, color: MUTED, maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            Объединяем клинический опыт до 45 лет, современные знания и мягкие методы восстановления. Работаем с причиной — не с симптомами.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 16 }}>
          {directions.map(({ icon, label }) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: "24px 12px", borderRadius: 20, background: BG, cursor: "default", transition: "all 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(45,140,122,0.12)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "none"; }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: TEAL_LIGHT, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name={icon} size={26} style={{ color: TEAL }} />
              </div>
              <span style={{ fontFamily: "Golos Text, sans-serif", fontSize: 13, textAlign: "center", fontWeight: 500, color: TEXT }}>{label}</span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a href="#booking" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", borderRadius: 100, background: TEAL, color: "white", fontFamily: "Golos Text, sans-serif", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
            <Icon name="Calendar" size={17} />
            Записаться на приём
          </a>
        </div>
      </div>
    </section>
  );
}

function ProblemsSection() {
  return (
    <section id="problems" style={{ padding: "80px 24px", background: BG_WARM }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: TEAL, marginBottom: 10 }}>Наша экспертиза</p>
          <h2 style={{ fontFamily: "Cormorant, serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 600, color: TEXT }}>С чем мы работаем</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="problems-grid">
          {[
            { emoji: "👶", title: "Дети (0–7 лет)", subtitle: "Детская остеопатия и педиатрия", accentColor: TEAL, items: ["Родовые травмы", "Задержка развития", "Неврология, ДЦП", "Кривошея", "Гипертонус", "Дисплазия", "Сколиоз", "Колики"] },
            { emoji: "🧑", title: "Взрослые", subtitle: "Неврология и восстановление", accentColor: GOLD, items: ["Боли в спине, шее", "Грыжи и протрузии", "Мигрени", "Невриты", "Инсульт (последствия)", "Хроническая усталость", "Нарушения осанки", "Синдром тревоги"] },
          ].map(({ emoji, title, subtitle, accentColor, items }) => (
            <div key={title} style={{ background: "white", borderRadius: 28, padding: 36, boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: accentColor === TEAL ? TEAL_LIGHT : GOLD_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>{emoji}</div>
                <div>
                  <h3 style={{ fontFamily: "Cormorant, serif", fontSize: 24, fontWeight: 600, color: TEXT, margin: 0 }}>{title}</h3>
                  <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: 13, color: accentColor, margin: "2px 0 0" }}>{subtitle}</p>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 8px" }}>
                {items.map(item => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 0" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: accentColor, flexShrink: 0 }} />
                    <span style={{ fontFamily: "Golos Text, sans-serif", fontSize: 14, color: TEXT }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 24, borderRadius: 24, padding: "32px 40px", background: TEAL_LIGHT, textAlign: "center" }}>
          <p style={{ fontFamily: "Cormorant, serif", fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 500, color: TEAL_DARK, marginBottom: 20 }}>
            Результат нашего подхода: снижение боли, восстановление подвижности и гармоничное развитие без лишних лекарств
          </p>
          <a href="#booking" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", borderRadius: 100, background: TEAL, color: "white", fontFamily: "Golos Text, sans-serif", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
            <Icon name="ArrowRight" size={17} />
            Записаться к специалисту
          </a>
        </div>
      </div>
    </section>
  );
}

function DoctorCard({ doctor, idx }: { doctor: typeof doctors[0]; idx: number }) {
  const initials = doctor.name.split(" ").map(w => w[0]).join("").slice(0, 2);
  const palette = ["#2d8c7a", "#3a7d6e", "#1e6458", "#4a9b8a", "#256b5c", "#2d8c7a", "#3a7d6e", "#1e6458", "#4a9b8a", "#256b5c", "#2d8c7a"];
  const color = palette[idx % palette.length];

  return (
    <div style={{ background: "white", borderRadius: 20, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", transition: "all 0.2s" }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(45,140,122,0.15)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}>
      <div style={{ height: doctor.photo ? 220 : 140, display: "flex", alignItems: "center", justifyContent: "center", background: doctor.photo ? "transparent" : `linear-gradient(135deg, ${color}15, ${color}28)`, position: "relative", overflow: "hidden" }}>
        {doctor.photo ? (
          <img src={doctor.photo} alt={doctor.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
        ) : (
          <div style={{ width: 80, height: 80, borderRadius: "50%", background: color, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 22, fontFamily: "Cormorant, serif", fontWeight: 700 }}>
            {initials}
          </div>
        )}
        {doctor.cat && (
          <div style={{ position: "absolute", bottom: 10, left: 10, padding: "4px 10px", borderRadius: 100, background: doctor.photo ? "rgba(255,255,255,0.92)" : GOLD_LIGHT, color: GOLD, fontFamily: "Golos Text, sans-serif", fontSize: 11, fontWeight: 600, backdropFilter: "blur(4px)" }}>
            ★ {doctor.cat}
          </div>
        )}
      </div>
      <div style={{ padding: "18px 18px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 style={{ fontFamily: "Cormorant, serif", fontSize: 18, fontWeight: 600, color: TEXT, margin: "0 0 4px" }}>{doctor.name}</h3>
        <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: 13, fontWeight: 500, color: TEAL, margin: "0 0 4px" }}>{doctor.role}</p>
        <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: 12, color: MUTED, margin: "0 0 10px", lineHeight: 1.5, flex: 1 }}>{doctor.spec}</p>
        {doctor.exp && (
          <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: 12, margin: "0 0 12px" }}>
            <span style={{ color: TEAL, fontWeight: 600 }}>Стаж: {doctor.exp}</span>
          </p>
        )}
        <a href="#booking" style={{ display: "block", textAlign: "center", padding: "10px", background: TEAL_LIGHT, color: TEAL_DARK, borderRadius: 12, fontFamily: "Golos Text, sans-serif", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>
          Записаться
        </a>
      </div>
    </div>
  );
}

function DoctorsSection() {
  return (
    <section id="doctors" style={{ padding: "80px 24px", background: "white" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: TEAL, marginBottom: 10 }}>Команда</p>
          <h2 style={{ fontFamily: "Cormorant, serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 600, color: TEXT, marginBottom: 12 }}>Наши врачи</h2>
          <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: 16, color: MUTED, maxWidth: 480, margin: "0 auto" }}>
            Специалисты с опытом до 45 лет, врачи высшей квалификационной категории
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: 20 }}>
          {doctors.map((doc, idx) => <DoctorCard key={doc.name} doctor={doc} idx={idx} />)}
        </div>

        <div style={{ textAlign: "center", marginTop: 36 }}>
          <a href="#picker" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", borderRadius: 100, border: `2px solid ${TEAL}`, color: TEAL, fontFamily: "Golos Text, sans-serif", fontWeight: 600, fontSize: 14, textDecoration: "none", background: "white" }}>
            <Icon name="UserSearch" size={17} />
            Помогите подобрать специалиста
          </a>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section style={{ padding: "60px 24px", background: TEAL }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "Cormorant, serif", fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 600, color: "white", textAlign: "center", marginBottom: 40 }}>Почему выбирают нас</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 24 }}>
          {trustPoints.map(({ icon, text }) => (
            <div key={text} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, textAlign: "center" }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name={icon} size={26} style={{ color: "white" }} />
              </div>
              <span style={{ fontFamily: "Golos Text, sans-serif", fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.92)" }}>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PickerSection() {
  const [age, setAge] = useState("");
  const [complaint, setComplaint] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="picker" style={{ padding: "80px 24px", background: BG_WARM }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: TEAL, marginBottom: 10 }}>Подбор врача</p>
          <h2 style={{ fontFamily: "Cormorant, serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 600, color: TEXT, marginBottom: 10 }}>Не знаете к кому обратиться?</h2>
          <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: 15, color: MUTED }}>Заполните форму — мы свяжемся и порекомендуем нужного специалиста</p>
        </div>

        {submitted ? (
          <div style={{ background: "white", borderRadius: 28, padding: "60px 40px", textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: TEAL_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
              <Icon name="CheckCircle" size={32} style={{ color: TEAL }} />
            </div>
            <h3 style={{ fontFamily: "Cormorant, serif", fontSize: 26, fontWeight: 600, color: TEXT, marginBottom: 8 }}>Заявка принята!</h3>
            <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: 14, color: MUTED }}>Мы перезвоним вам в ближайшее время и подберём подходящего специалиста</p>
          </div>
        ) : (
          <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ background: "white", borderRadius: 28, padding: "40px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }} className="form-grid">
              <div>
                <label style={{ display: "block", fontFamily: "Golos Text, sans-serif", fontSize: 13, fontWeight: 500, color: TEXT, marginBottom: 8 }}>Возраст пациента</label>
                <select value={age} onChange={e => setAge(e.target.value)} required
                  style={{ width: "100%", padding: "12px 16px", borderRadius: 12, border: "1.5px solid #dde7e4", fontFamily: "Golos Text, sans-serif", fontSize: 14, color: TEXT, outline: "none", background: "white" }}>
                  <option value="">Выберите возраст</option>
                  <option value="baby">До 1 года</option>
                  <option value="child">1–7 лет</option>
                  <option value="teen">7–18 лет</option>
                  <option value="adult">18–60 лет</option>
                  <option value="senior">60+ лет</option>
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontFamily: "Golos Text, sans-serif", fontSize: 13, fontWeight: 500, color: TEXT, marginBottom: 8 }}>Ваш телефон</label>
                <input type="tel" placeholder="+7 (___) ___-__-__" value={phone} onChange={e => setPhone(e.target.value)} required
                  style={{ width: "100%", padding: "12px 16px", borderRadius: 12, border: "1.5px solid #dde7e4", fontFamily: "Golos Text, sans-serif", fontSize: 14, color: TEXT, outline: "none", boxSizing: "border-box" }} />
              </div>
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: "block", fontFamily: "Golos Text, sans-serif", fontSize: 13, fontWeight: 500, color: TEXT, marginBottom: 8 }}>Жалоба или вопрос</label>
              <textarea value={complaint} onChange={e => setComplaint(e.target.value)} rows={3} required placeholder="Опишите, что беспокоит..."
                style={{ width: "100%", padding: "12px 16px", borderRadius: 12, border: "1.5px solid #dde7e4", fontFamily: "Golos Text, sans-serif", fontSize: 14, color: TEXT, outline: "none", resize: "none", boxSizing: "border-box" }} />
            </div>
            <button type="submit" style={{ width: "100%", padding: "14px", borderRadius: 12, background: TEAL, color: "white", fontFamily: "Golos Text, sans-serif", fontWeight: 600, fontSize: 15, border: "none", cursor: "pointer" }}>
              Подобрать врача
            </button>
            <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: 11, textAlign: "center", color: MUTED, marginTop: 12 }}>
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

function BookingSection() {
  const [step, setStep] = useState(1);
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const times = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"];

  const inputStyle = { width: "100%", padding: "12px 16px", borderRadius: 12, border: "1.5px solid #dde7e4", fontFamily: "Golos Text, sans-serif", fontSize: 14, color: TEXT, outline: "none", boxSizing: "border-box" as const };

  return (
    <section id="booking" style={{ padding: "80px 24px", background: "white" }}>
      <div style={{ maxWidth: 780, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: TEAL, marginBottom: 10 }}>Онлайн-запись</p>
          <h2 style={{ fontFamily: "Cormorant, serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 600, color: TEXT, marginBottom: 10 }}>Запись на приём</h2>
          <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: 15, color: MUTED }}>Выберите специалиста, удобное время и оставьте контакты</p>
        </div>

        {submitted ? (
          <div style={{ borderRadius: 28, border: "1.5px solid #e8f0ee", padding: "64px 40px", textAlign: "center" }}>
            <div style={{ width: 72, height: 72, borderRadius: "50%", background: TEAL_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
              <Icon name="CalendarCheck" size={36} style={{ color: TEAL }} />
            </div>
            <h3 style={{ fontFamily: "Cormorant, serif", fontSize: 30, fontWeight: 600, color: TEXT, marginBottom: 10 }}>Запись подтверждена!</h3>
            <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: 15, color: MUTED }}>Мы позвоним вам для подтверждения приёма. Ждём вас!</p>
          </div>
        ) : (
          <div style={{ borderRadius: 28, border: "1.5px solid #e8f0ee", overflow: "hidden" }}>
            {/* Steps */}
            <div style={{ display: "flex", borderBottom: "1.5px solid #e8f0ee" }}>
              {["Специалист", "Дата и время", "Ваши данные"].map((s, i) => (
                <button key={s} onClick={() => step > i + 1 && setStep(i + 1)} style={{ flex: 1, padding: "16px 8px", background: "none", border: "none", cursor: step > i + 1 ? "pointer" : "default", position: "relative", fontFamily: "Golos Text, sans-serif", fontSize: 13, fontWeight: 500, color: step === i + 1 ? TEAL : step > i + 1 ? TEXT : MUTED }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                    <span style={{ width: 22, height: 22, borderRadius: "50%", background: step === i + 1 ? TEAL : step > i + 1 ? TEAL_LIGHT : "#f0f0f0", color: step === i + 1 ? "white" : step > i + 1 ? TEAL : "#aaa", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 600 }}>
                      {step > i + 1 ? "✓" : i + 1}
                    </span>
                    {s}
                  </span>
                  {step === i + 1 && <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: TEAL }} />}
                </button>
              ))}
            </div>

            <div style={{ padding: "32px" }}>
              {step === 1 && (
                <div>
                  <h3 style={{ fontFamily: "Cormorant, serif", fontSize: 22, fontWeight: 600, color: TEXT, marginBottom: 20 }}>Выберите специалиста</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="doctors-pick-grid">
                    {doctors.map(doc => (
                      <button key={doc.name} onClick={() => { setDoctor(doc.name); setStep(2); }}
                        style={{ textAlign: "left", padding: "14px 16px", borderRadius: 14, border: `2px solid ${doctor === doc.name ? TEAL : "#e8f0ee"}`, background: doctor === doc.name ? TEAL_LIGHT : "white", cursor: "pointer", transition: "all 0.15s" }}>
                        <p style={{ fontFamily: "Golos Text, sans-serif", fontWeight: 600, fontSize: 14, color: TEXT, margin: "0 0 2px" }}>{doc.name}</p>
                        <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: 12, color: TEAL, margin: 0 }}>{doc.role}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 style={{ fontFamily: "Cormorant, serif", fontSize: 22, fontWeight: 600, color: TEXT, marginBottom: 20 }}>Дата и время</h3>
                  <div style={{ marginBottom: 24 }}>
                    <label style={{ display: "block", fontFamily: "Golos Text, sans-serif", fontSize: 13, fontWeight: 500, color: TEXT, marginBottom: 8 }}>Дата приёма</label>
                    <input type="date" value={date} onChange={e => setDate(e.target.value)} min={new Date().toISOString().split("T")[0]} style={{ ...inputStyle, width: "auto", minWidth: 220 }} />
                  </div>
                  <div style={{ marginBottom: 28 }}>
                    <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: 13, fontWeight: 500, color: TEXT, marginBottom: 12 }}>Время</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {times.map(t => (
                        <button key={t} onClick={() => setTime(t)} style={{ padding: "10px 16px", borderRadius: 12, border: `2px solid ${time === t ? TEAL : "#e8f0ee"}`, background: time === t ? TEAL : "white", color: time === t ? "white" : TEXT, fontFamily: "Golos Text, sans-serif", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>{t}</button>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <button onClick={() => setStep(1)} style={{ padding: "12px 24px", borderRadius: 100, border: "1.5px solid #dde7e4", background: "white", color: MUTED, fontFamily: "Golos Text, sans-serif", fontSize: 14, cursor: "pointer" }}>Назад</button>
                    <button onClick={() => setStep(3)} disabled={!date || !time} style={{ padding: "12px 28px", borderRadius: 100, background: TEAL, color: "white", fontFamily: "Golos Text, sans-serif", fontWeight: 600, fontSize: 14, border: "none", cursor: !date || !time ? "not-allowed" : "pointer", opacity: !date || !time ? 0.5 : 1 }}>Продолжить</button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
                  <h3 style={{ fontFamily: "Cormorant, serif", fontSize: 22, fontWeight: 600, color: TEXT, marginBottom: 20 }}>Ваши контакты</h3>
                  <div style={{ background: TEAL_LIGHT, borderRadius: 12, padding: "14px 18px", marginBottom: 24, fontFamily: "Golos Text, sans-serif", fontSize: 14, color: TEAL_DARK }}>
                    <strong>{doctor}</strong> · {date} · {time}
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 24 }} className="form-grid">
                    <div>
                      <label style={{ display: "block", fontFamily: "Golos Text, sans-serif", fontSize: 13, fontWeight: 500, color: TEXT, marginBottom: 8 }}>Ваше имя</label>
                      <input type="text" placeholder="Иванова Мария" required value={name} onChange={e => setName(e.target.value)} style={inputStyle} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontFamily: "Golos Text, sans-serif", fontSize: 13, fontWeight: 500, color: TEXT, marginBottom: 8 }}>Телефон</label>
                      <input type="tel" placeholder="+7 (___) ___-__-__" required value={phone} onChange={e => setPhone(e.target.value)} style={inputStyle} />
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <button type="button" onClick={() => setStep(2)} style={{ padding: "12px 24px", borderRadius: 100, border: "1.5px solid #dde7e4", background: "white", color: MUTED, fontFamily: "Golos Text, sans-serif", fontSize: 14, cursor: "pointer" }}>Назад</button>
                    <button type="submit" style={{ padding: "12px 28px", borderRadius: 100, background: TEAL, color: "white", fontFamily: "Golos Text, sans-serif", fontWeight: 600, fontSize: 14, border: "none", cursor: "pointer" }}>Записаться на приём</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ContactsSection() {
  const labelStyle = { fontFamily: "Golos Text, sans-serif", fontSize: 11, fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.1em", color: MUTED, marginBottom: 6 };
  const valueStyle = { fontFamily: "Golos Text, sans-serif", fontSize: 14, color: TEXT, margin: "0 0 4px" };

  return (
    <section id="contacts" style={{ padding: "80px 24px", background: BG_WARM }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <h2 style={{ fontFamily: "Cormorant, serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 600, color: TEXT, marginBottom: 16, lineHeight: 1.15 }}>
            Здоровье — это решение,<br />
            <span style={{ color: TEAL }}>которое важно не откладывать</span>
          </h2>
          <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: 16, color: MUTED, marginBottom: 28 }}>Запишитесь сегодня — первый шаг к здоровью уже завтра</p>
          <a href="#booking" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 36px", borderRadius: 100, background: TEAL, color: "white", fontFamily: "Golos Text, sans-serif", fontWeight: 600, fontSize: 16, textDecoration: "none", boxShadow: "0 8px 32px rgba(45,140,122,0.3)" }}>
            <Icon name="Calendar" size={20} />
            Записаться сейчас
          </a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginBottom: 20 }}>
          {/* Телефоны */}
          <div style={{ background: "white", borderRadius: 22, padding: "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
            <div style={{ width: 46, height: 46, borderRadius: 14, background: TEAL_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
              <Icon name="Phone" size={22} style={{ color: TEAL }} />
            </div>
            <h3 style={{ fontFamily: "Cormorant, serif", fontSize: 20, fontWeight: 600, color: TEXT, marginBottom: 14 }}>Наши телефоны</h3>
            {[
              { num: "72-10-60", label: "Остеопатия" },
              { num: "90-68-68", label: "Остеопатия" },
              { num: "90-14-00", label: "Педиатрия" },
              { num: "90-06-33", label: "Анализы" },
            ].map(({ num, label }) => (
              <div key={num} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <a href={`tel:${num.replace(/-/g, "")}`} style={{ fontFamily: "Golos Text, sans-serif", fontSize: 17, fontWeight: 700, color: TEAL, textDecoration: "none" }}>{num}</a>
                <span style={{ fontFamily: "Golos Text, sans-serif", fontSize: 12, color: MUTED, background: TEAL_LIGHT, padding: "2px 8px", borderRadius: 100 }}>{label}</span>
              </div>
            ))}
            <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid #e8f0ee" }}>
              <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: 12, color: MUTED, margin: 0 }}>Пн–Сб: 8:00–20:00</p>
            </div>
          </div>

          {/* Адреса */}
          <div style={{ background: "white", borderRadius: 22, padding: "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
            <div style={{ width: 46, height: 46, borderRadius: 14, background: TEAL_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
              <Icon name="MapPin" size={22} style={{ color: TEAL }} />
            </div>
            <h3 style={{ fontFamily: "Cormorant, serif", fontSize: 20, fontWeight: 600, color: TEXT, marginBottom: 14 }}>Наши отделения</h3>
            <div style={{ marginBottom: 14 }}>
              <p style={labelStyle}>Отделение 1</p>
              <p style={{ ...valueStyle, fontWeight: 500 }}>ул. Белянского, д.8</p>
              <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: 12, color: MUTED, margin: 0 }}>г. Липецк</p>
            </div>
            <div>
              <p style={labelStyle}>Отделение 2</p>
              <p style={{ ...valueStyle, fontWeight: 500 }}>ул. Политехническая, д.7</p>
              <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: 12, color: MUTED, margin: 0 }}>г. Липецк</p>
            </div>
          </div>

          {/* Почта и график */}
          <div style={{ background: "white", borderRadius: 22, padding: "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
            <div style={{ width: 46, height: 46, borderRadius: 14, background: TEAL_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
              <Icon name="Mail" size={22} style={{ color: TEAL }} />
            </div>
            <h3 style={{ fontFamily: "Cormorant, serif", fontSize: 20, fontWeight: 600, color: TEXT, marginBottom: 14 }}>Почта и график</h3>
            <div style={{ marginBottom: 16 }}>
              <p style={labelStyle}>Электронная почта</p>
              <a href="mailto:radugazd2018@yandex.ru" style={{ fontFamily: "Golos Text, sans-serif", fontSize: 14, color: TEAL, textDecoration: "none", wordBreak: "break-all" as const }}>
                radugazd2018@yandex.ru
              </a>
            </div>
            <div>
              <p style={labelStyle}>График работы</p>
              <p style={valueStyle}>Пн–Пт: 8:00–20:00</p>
              <p style={valueStyle}>Сб: 9:00–16:00</p>
              <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: 12, color: MUTED, margin: 0 }}>Вс: выходной</p>
            </div>
          </div>
        </div>

        {/* Реквизиты */}
        <div style={{ background: "white", borderRadius: 22, padding: "24px 28px", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
          <h3 style={{ fontFamily: "Cormorant, serif", fontSize: 18, fontWeight: 600, color: TEXT, marginBottom: 12 }}>Реквизиты</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 40px" }}>
            {[
              ['Организация', 'ООО Медицинский центр «Радуга Здоровья»'],
              ['ИНН', '4826127738'],
              ['КПП', '482601001'],
              ['ОГРН', '1164827072112'],
            ].map(([label, val]) => (
              <div key={label}>
                <span style={{ fontFamily: "Golos Text, sans-serif", fontSize: 11, color: MUTED, textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}: </span>
                <span style={{ fontFamily: "Golos Text, sans-serif", fontSize: 13, color: TEXT, fontWeight: 500 }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ padding: "24px", borderTop: "1px solid #e8f0ee", background: "white" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src="https://cdn.poehali.dev/projects/3eae3c75-3228-4881-8e8e-f72c1dc566e0/bucket/857e3fee-7628-4d92-9c70-d7a0946b1798.png" alt="Радуга Здоровья" style={{ height: 36, width: "auto" }} />
          <span style={{ fontFamily: "Cormorant, serif", fontSize: 17, fontWeight: 600, color: TEAL_DARK }}>Радуга Здоровья</span>
        </div>
        <p style={{ fontFamily: "Golos Text, sans-serif", fontSize: 12, color: MUTED, margin: 0 }}>
          © 2026 Медицинский центр «Радуга Здоровья». г. Липецк
        </p>
        <a href="tel:906868" style={{ fontFamily: "Golos Text, sans-serif", fontSize: 15, fontWeight: 600, color: TEAL, textDecoration: "none" }}>90-68-68</a>
      </div>
    </footer>
  );
}

export default function Index() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ProblemsSection />
      <DoctorsSection />
      <TrustSection />
      <PickerSection />
      <BookingSection />
      <ContactsSection />
      <Footer />
    </div>
  );
}