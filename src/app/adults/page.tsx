"use client";

const hoverStyle = `
  .adult-card { transition: background 0.18s; cursor: default; background: #fff; }
  .adult-card .c-num { color: #ddd; }
  .adult-card .c-tag { background: #0a0a0a; color: #fff; }
  .adult-card .c-title { color: #0a0a0a; }
  .adult-card .c-subtitle { color: #aaa; }
  .adult-card .c-desc { color: #555; }
  .adult-card .c-meta { color: #888; }
  .adult-card .c-btn { background: #fff; color: #0a0a0a; border-color: #0a0a0a; }
  .adult-card .c-coming { background: #f0f0f0; color: #888; }

  .adult-card:hover { background: #0a0a0a; }
  .adult-card:hover .c-num { color: #fff; }
  .adult-card:hover .c-tag { background: #fff; color: #0a0a0a; }
  .adult-card:hover .c-title { color: #fff; }
  .adult-card:hover .c-subtitle { color: #666; }
  .adult-card:hover .c-desc { color: #fff; }
  .adult-card:hover .c-meta { color: #fff; }
  .adult-card:hover .c-btn { background: #fff; color: #0a0a0a; border-color: #fff; }
  .adult-card:hover .c-coming { background: #333; color: #aaa; }

  .adults-nav { padding: 18px 40px; }
  .adults-hero { padding: 72px 40px 64px; }
  .adults-hero-title { font-size: 44px; }
.adults-grid { grid-template-columns: 1fr 1fr; border-left: 2px solid #0a0a0a; border-top: 2px solid #0a0a0a; align-items: stretch; }  .adults-contact { padding: 72px 40px; }
  .adults-footer { padding: 28px 40px; }
  .workshop-grid { grid-template-columns: 1fr 1fr; }

  @media (max-width: 768px) {
    .adults-nav { padding: 16px 20px !important; }
    .adults-hero { padding: 40px 20px 32px !important; }
    .adults-hero-title { font-size: 28px !important; }
    .adults-grid { grid-template-columns: 1fr !important; }
    .adult-card { border-right: 2px solid #0a0a0a !important; }
    .workshop-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
    .adults-contact { padding: 48px 20px !important; }
    .adults-footer { padding: 24px 20px !important; }
  }
`;

export default function AdultsPage() {
  const programs = [
    {
      num: "01",
      tag: "Reading",
      title: "나를 꺼내는 한 줄",
      subtitle: "어른 필사 독서 모임",
      desc: "혼자 읽을 때와 함께 읽을 때, 책은 전혀 다르게 기억됩니다. 조용히 자신의 이야기를 꺼내보고 싶은 분을 위한 모임.",
      meta: ["매달 마지막 주 금요일 · 10:30–12:30"],
      link: "https://naver.me/5kPNeAHl",
    },
    {
      num: "02",
      tag: "Narrative",
      title: "그림책의 장면과 서사",
      subtitle: "어른 그림책 모임",
      desc: "익숙한 그림책 장면들을 낯설고 신선하게 다시 바라보는 시간. 논제 중심의 이야기로 그림책을 바라보는 폭을 넓혀갑니다.",
      meta: null,
      link: null,
    },
    {
      num: "03",
      tag: "English",
      title: "Momo's Readers Club",
      subtitle: "영어 원서 읽기 모임",
      desc: "영어를 잘 못해도 괜찮습니다. 이야기를 즐기고 함께 나누는 마음이 가장 중요하니까요. 2달에 1권씩, 천천히.",
      meta: ["매달 마지막 주 수요일 · 13:00–14:30"],
      link: "https://naver.me/GKbRu5U2",
    },
    {
      num: "04",
      tag: "Japanese",
      title: "일본어로 감동을 읽는 시간",
      subtitle: "일본어 그림책 모임",
      desc: "일본어를 몰라도, 책이 없어도 괜찮습니다. 그림책을 좋아하는 마음 하나면 충분해요.",
      meta: ["매달 마지막 주 금요일 · 13:00–15:00", "강사: 김연정 선생님"],
      link: "https://naver.me/GwfgUB9T",
    },
  ];

  const workshop = {
    num: "05",
    tag: "Workshop",
    title: "깍지모모 그림책 작가 되기",
    subtitle: "창작 모임",
    desc: "『마음빨래』 남개미 작가와 함께, 공모전·투고·더미데이를 목표로 꾸준히 작업하는 스터디.",
    meta: ["강사: 남개미 작가", "합평 · 투고 · 더미데이", "한 달에 한 번 오프모임 + 줌 모임"],
    link: "https://naver.me/5reTtSyw",
  };

  const cardStyle: React.CSSProperties = {
    borderRight: "2px solid #0a0a0a",
    borderBottom: "2px solid #0a0a0a",
    padding: "1.75rem 1.5rem",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    boxSizing: "border-box",
  };

  return (
    <main style={{fontFamily:"Pretendard,-apple-system,sans-serif",background:"#fff",minHeight:"100vh",letterSpacing:"-0.012em"}}>
      <style>{hoverStyle}</style>

      <nav className="adults-nav" style={{display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"0.5px solid #EAEAEA"}}>
        <a href="/" style={{textDecoration:"none",display:"flex",alignItems:"center",gap:"10px"}}>
          <div style={{width:"22px",height:"22px",background:"#1F7A5E",borderRadius:"50% 50% 45% 45%"}} />
          <div>
            <div style={{fontSize:"13px",fontWeight:800,color:"#0A0A0A"}}>KKAKJIMOMO</div>
            <div style={{fontFamily:"monospace",fontSize:"10px",color:"#1F7A5E"}}>// book agit</div>
          </div>
        </a>
        <span style={{fontFamily:"monospace",fontSize:"11px",color:"#555"}}>subscribe</span>
      </nav>

      <div className="adults-hero" style={{background:"#0A0A0A",color:"white",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",right:"40px",top:"50%",transform:"translateY(-50%)",fontSize:"200px",fontWeight:800,color:"rgba(255,255,255,0.04)",letterSpacing:"-0.05em",lineHeight:1,userSelect:"none"}}>03</div>
        <div style={{fontFamily:"monospace",fontSize:"10px",letterSpacing:"0.2em",color:"#1F7A5E",marginBottom:"18px"}}>NO.03 — FOR ADULTS</div>
        <div className="adults-hero-title" style={{fontWeight:800,letterSpacing:"-0.04em",lineHeight:1.1,marginBottom:"20px",maxWidth:"560px"}}>읽고, 쓰고,<br/>나로 돌아오는 시간.</div>
        <div style={{fontSize:"13px",color:"#888",lineHeight:1.9,maxWidth:"460px"}}>필사, 그림책, 영어 원서, 일본어 그림책, 창작 워크숍까지. 어른을 위한 깍지모모의 독서 모임이에요.</div>
      </div>

      <div className="adults-grid" style={{display:"grid"}}>
        {programs.map((p) => (
          <div key={p.num} style={cardStyle} className="adult-card">
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"1.25rem"}}>
              <span className="c-num" style={{fontFamily:"monospace",fontSize:"36px",fontWeight:800,lineHeight:1}}>{p.num}</span>
              <span className="c-tag" style={{fontSize:"9px",letterSpacing:"0.15em",fontWeight:700,padding:"3px 9px",borderRadius:"2px",textTransform:"uppercase" as const}}>{p.tag}</span>
            </div>
            <p className="c-title" style={{fontSize:"15px",fontWeight:700,marginBottom:"0.4rem"}}>{p.title}</p>
            <p className="c-subtitle" style={{fontSize:"11px",fontWeight:300,marginBottom:"0.85rem"}}>{p.subtitle}</p>
            <p className="c-desc" style={{fontSize:"12px",lineHeight:1.9,fontWeight:300,marginBottom:"1.25rem",flex:1}}>{p.desc}</p>
            <div style={{marginTop:"auto",display:"flex",flexDirection:"column",gap:"10px"}}>
              {!p.link ? (
                <span className="c-coming" style={{fontSize:"9px",fontWeight:700,padding:"3px 9px",borderRadius:"2px",alignSelf:"flex-start"}}>오픈 예정</span>
              ) : (
                <>
                  <div style={{display:"flex",flexDirection:"column",gap:"4px"}}>
                    {p.meta?.map((m, i) => (
                      <span key={i} className="c-meta" style={{fontSize:"11px",fontWeight:300}}>{m}</span>
                    ))}
                  </div>
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="c-btn" style={{display:"inline-block",fontSize:"10px",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase" as const,border:"1px solid",padding:"7px 16px",textDecoration:"none",borderRadius:"2px",alignSelf:"flex-start"}}>신청하기 ↗</a>
                </>
              )}
            </div>
          </div>
        ))}

        <div style={{...cardStyle,gridColumn:"span 2"}} className="adult-card">
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"1.25rem"}}>
            <span className="c-num" style={{fontFamily:"monospace",fontSize:"36px",fontWeight:800,lineHeight:1}}>{workshop.num}</span>
            <span className="c-tag" style={{fontSize:"9px",letterSpacing:"0.15em",fontWeight:700,padding:"3px 9px",borderRadius:"2px",textTransform:"uppercase" as const}}>{workshop.tag}</span>
          </div>
          <div className="workshop-grid" style={{display:"grid",gap:"0 2rem",alignItems:"flex-end"}}>
            <div style={{display:"flex",flexDirection:"column"}}>
              <p className="c-title" style={{fontSize:"15px",fontWeight:700,marginBottom:"0.4rem"}}>{workshop.title}</p>
              <p className="c-subtitle" style={{fontSize:"11px",fontWeight:300,marginBottom:"0.85rem"}}>{workshop.subtitle}</p>
              <p className="c-desc" style={{fontSize:"12px",lineHeight:1.9,fontWeight:300}}>{workshop.desc}</p>
            </div>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-end",gap:"10px"}}>
              <div style={{display:"flex",flexDirection:"column",gap:"4px"}}>
                {workshop.meta.map((m, i) => (
                  <span key={i} className="c-meta" style={{fontSize:"11px",fontWeight:300}}>{m}</span>
                ))}
              </div>
              <a href={workshop.link} target="_blank" rel="noopener noreferrer" className="c-btn" style={{display:"inline-block",fontSize:"10px",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase" as const,border:"1px solid",padding:"7px 16px",textDecoration:"none",borderRadius:"2px",alignSelf:"flex-start"}}>신청하기 ↗</a>
            </div>
          </div>
        </div>
      </div>

      <div className="adults-contact" style={{background:"#F7F6F3",textAlign:"center"}}>
        <div style={{fontFamily:"monospace",fontSize:"10px",color:"#1F7A5E",letterSpacing:"0.2em",marginBottom:"16px"}}>CONTACT</div>
        <div style={{fontSize:"24px",fontWeight:800,letterSpacing:"-0.02em",marginBottom:"12px"}}>궁금한 점이 있으신가요?</div>
        <div style={{fontSize:"13px",color:"#555",lineHeight:1.9,marginBottom:"32px"}}>프로그램 내용, 수업 일정, 비용 등 편하게 카카오로 문의해 주세요</div>
        <a href="http://pf.kakao.com/_CJzGX" target="_blank" rel="noopener noreferrer" style={{display:"inline-block",padding:"15px 36px",background:"#0A0A0A",color:"white",fontSize:"13px",fontWeight:700,textDecoration:"none",letterSpacing:"0.04em"}}>
          카카오톡으로 문의하기
        </a>
      </div>

      <footer className="adults-footer" style={{background:"white",display:"flex",alignItems:"center",justifyContent:"space-between",borderTop:"0.5px solid #eee"}}>
        <div style={{display:"flex",alignItems:"center",gap:"14px"}}>
          <div style={{width:"28px",height:"28px",background:"#1F7A5E",borderRadius:"50% 50% 45% 45%"}} />
          <div>
            <div style={{fontSize:"12px",fontWeight:800,color:"#0A0A0A"}}>KKAKJIMOMO BOOK AGIT</div>
            <div style={{fontFamily:"monospace",fontSize:"10px",color:"#555"}}>since 2023</div>
          </div>
        </div>
        <a href="https://www.instagram.com/kkakjimomo_book_agit" target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",gap:"6px",textDecoration:"none",color:"#0A0A0A"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
          </svg>
          <span style={{fontFamily:"monospace",fontSize:"11px"}}>@kkakjimomo_book_agit</span>
        </a>
      </footer>

    </main>
  );
}