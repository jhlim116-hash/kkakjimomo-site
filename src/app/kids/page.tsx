export default function KidsPage() {
  const KAKAO_URL = "http://pf.kakao.com/_CJzGX";
  const NAVER_URL = "https://m.place.naver.com/place/1717632495/ticket";

  const U = ({children}: {children: React.ReactNode}) => (
    <span style={{borderBottom:"1.5px solid #1F7A5E",paddingBottom:"1px",color:"#0A0A0A",fontWeight:600}}>{children}</span>
  );

  const programs = [
    {
      no: "01",
      tag: "// 5-7세 · 미취학 · 주1회",
      title: "그림책 창의미술",
      en: "Picture Book Art Class",
      quote: "그림책은 어린이가 처음으로 만나는 예술 작품이다",
      quoteBy: "— 페리 노들먼, The Pleasures of Children's Literature",
      target: "5-7세 미취학",
      extra: "oneway",
      body: (U: any) => (
        <span>
          그림책은 단순한 읽기 자료가 아니에요. 정교하게 설계된 그림과 언어의 결합으로 <U>어린이 고유의 미적 감수성과 세계관</U>을 형성해요. 국제어린이도서협의회(IBBY)는 질 높은 그림책 경험이 <U>상징적 사고와 자기표현 능력</U>을 결정적으로 발달시킨다고 강조해요. 책 속 이야기를 온몸으로 만나고 미술로 표현하는 순간, 아이는 <U>독서를 즐거운 것으로 기억</U>하기 시작해요.
        </span>
      ),
    },
    {
      no: "02",
      tag: "// 7-9세 · 초1-2학년 · 주1회",
      title: "어린이 북클럽",
      en: "Children's Book Club",
      quote: "독서는 기술이 아니라 태도다",
      quoteBy: "— 메리앤 울프, Proust and the Squid",
      target: "초1-2학년",
      extra: null,
      body: (U: any) => (
        <span>
          읽을 수 있는 것과 읽는 사람이 되는 것은 달라요. 신경과학자 메리앤 울프는 <U>독서하는 뇌는 독서를 통해서만 만들어진다</U>고 말해요. 초등 1-2학년 시기는 <U>진짜 독서의 출발점</U>이에요. 이 시기에 형성된 독서에 대한 태도와 습관이 <U>평생의 독서 정체성</U>을 결정해요.
        </span>
      ),
    },
    {
      no: "03",
      tag: "// 9-11세 · 초3-4학년 · 주1회",
      title: "한국사 북클럽",
      en: "Korean History Book Club",
      quote: "역사적 사고력은 암기가 아닌 서사로 길러진다",
      quoteBy: "— 역사교육학회 논문, 2021",
      target: "초3-4학년",
      extra: null,
      body: (U: any) => (
        <span>
          초등 3-4학년은 <U>한국사를 처음 만나는 시기</U>예요. 이 첫 만남이 역사를 평생 좋아하는 사람이 될지를 결정해요. 역사교육학회 연구(2021)는 서사 중심의 역사 학습이 단순 암기 방식보다 <U>장기 기억률을 3.1배</U> 높인다고 밝혀요.
        </span>
      ),
    },
    {
      no: "04",
      tag: "// 11-13세 · 초5-6학년 · 주1회",
      title: "세계사 북클럽",
      en: "World History Book Club",
      quote: "역사는 모든 지식의 어머니다",
      quoteBy: "— E.H. 카, What is History?",
      target: "초5-6학년",
      extra: null,
      body: (U: any) => (
        <span>
          세계사는 암기 과목이 아니에요. <U>우리가 사는 세상이 어떻게 지금의 모양이 되었는지</U> 이해하는 일이에요. OECD 교육 보고서(2022)는 세계사 이해를 <U>글로벌 시대의 핵심 문해력</U>으로 규정해요.
        </span>
      ),
    },
  ];

  return (
    <main style={{fontFamily:"Pretendard,-apple-system,sans-serif",background:"#fff",minHeight:"100vh",letterSpacing:"-0.012em"}}>
      <style>{`
        .kids-nav { padding: 18px 40px; }
        .kids-hero { padding: 72px 40px 64px; }
        .kids-hero-title { font-size: 44px; }
        .kids-section { padding: 56px 40px; }
        .kids-grid { grid-template-columns: 1fr 360px; gap: 64px; }
        .kids-no { font-size: 120px; }
        .kids-title { font-size: 28px; }
        .kids-contact { padding: 72px 40px; }
        .kids-footer { padding: 28px 40px; }
        @media (max-width: 768px) {
          .kids-nav { padding: 16px 20px !important; }
          .kids-hero { padding: 40px 20px 32px !important; }
          .kids-hero-title { font-size: 28px !important; max-width: 100% !important; }
          .kids-section { padding: 36px 20px !important; }
          .kids-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .kids-no { font-size: 72px !important; margin-bottom: -8px !important; }
          .kids-title { font-size: 22px !important; }
          .kids-contact { padding: 48px 20px !important; }
          .kids-footer { padding: 24px 20px !important; }
        }
      `}</style>

      <nav className="kids-nav" style={{display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"0.5px solid #EAEAEA"}}>
        <a href="/" style={{textDecoration:"none",display:"flex",alignItems:"center",gap:"10px"}}>
          <div style={{width:"22px",height:"22px",background:"#1F7A5E",borderRadius:"50% 50% 45% 45%"}} />
          <div>
            <div style={{fontSize:"13px",fontWeight:800,color:"#0A0A0A"}}>KKAKJIMOMO</div>
            <div style={{fontFamily:"monospace",fontSize:"10px",color:"#1F7A5E"}}>// book agit</div>
          </div>
        </a>
        <span style={{fontFamily:"monospace",fontSize:"11px",color:"#555"}}>subscribe</span>
      </nav>

      <div className="kids-hero" style={{background:"#0A0A0A",color:"white",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",right:"40px",top:"50%",transform:"translateY(-50%)",fontSize:"200px",fontWeight:800,color:"rgba(255,255,255,0.04)",letterSpacing:"-0.05em",lineHeight:1,userSelect:"none"}}>01</div>
        <div style={{fontFamily:"monospace",fontSize:"10px",letterSpacing:"0.2em",color:"#1F7A5E",marginBottom:"18px"}}>NO.01 — KID'S BOOK CLUB</div>
        <div className="kids-hero-title" style={{fontWeight:800,letterSpacing:"-0.04em",lineHeight:1.1,marginBottom:"20px",maxWidth:"560px"}}>책과 함께<br/>자라는 아이들</div>
        <div style={{fontSize:"13px",color:"#888",lineHeight:1.9,maxWidth:"460px"}}>그림책 창의미술부터 한국사, 세계사 북클럽까지. 나이에 맞게, 책과 함께 성장하는 깍지모모의 어린이 독서 프로그램이에요.</div>
      </div>

      {programs.map((p) => (
        <div key={p.no} style={{borderBottom:"0.5px solid #eee"}} className="kids-section">
          <div className="kids-grid" style={{display:"grid",alignItems:"start"}}>

            <div>
              <div className="kids-no" style={{fontWeight:800,color:"#F0F0F0",lineHeight:1,letterSpacing:"-0.05em",marginBottom:"-16px"}}>{p.no}</div>
              <div style={{fontFamily:"monospace",fontSize:"10px",color:"#1F7A5E",letterSpacing:"0.18em",marginBottom:"12px"}}>{p.tag}</div>
              <div className="kids-title" style={{fontWeight:800,letterSpacing:"-0.025em",marginBottom:"6px"}}>{p.title}</div>
              <div style={{fontFamily:"monospace",fontSize:"11px",color:"#888",marginBottom:"32px"}}>{p.en}</div>
              <div style={{borderLeft:"2px solid #1F7A5E",paddingLeft:"18px",marginBottom:"28px"}}>
                <div style={{fontSize:"14px",fontStyle:"italic",color:"#0A0A0A",lineHeight:1.6,marginBottom:"8px"}}>"{p.quote}"</div>
                <div style={{fontFamily:"monospace",fontSize:"10px",color:"#888"}}>{p.quoteBy}</div>
              </div>
              <div style={{fontSize:"13px",color:"#555",lineHeight:2}}>
                {p.body(U)}
              </div>
            </div>

            <div style={{display:"flex",flexDirection:"column",gap:"1px",background:"#eee"}}>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"1px",background:"#eee"}}>
                {[{label:"대상",value:p.target},{label:"시간",value:"50분"},{label:"정원",value:"4명"}].map((item) => (
                  <div key={item.label} style={{background:"#F7F6F3",padding:"14px",textAlign:"center"}}>
                    <div style={{fontFamily:"monospace",fontSize:"9px",color:"#aaa",letterSpacing:"0.12em",marginBottom:"5px"}}>{item.label}</div>
                    <div style={{fontSize:"13px",fontWeight:700,color:"#0A0A0A"}}>{item.value}</div>
                  </div>
                ))}
              </div>
              {p.extra === "oneway" && (
                <div style={{background:"#F7F6F3",padding:"20px"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"6px"}}>
                    <div style={{fontSize:"13px",fontWeight:800}}>원데이 클래스</div>
                    <div style={{fontFamily:"monospace",fontSize:"9px",color:"#aaa"}}>ONE-DAY</div>
                  </div>
                  <div style={{fontSize:"12px",color:"#888",lineHeight:1.7,marginBottom:"12px"}}>한 번만 참여해볼 수 있는 단회 수업이에요.</div>
                  <a href={NAVER_URL} target="_blank" rel="noopener noreferrer" style={{fontFamily:"monospace",fontSize:"11px",color:"#03C75A",textDecoration:"none",fontWeight:600}}>네이버 예약하기 →</a>
                </div>
              )}
              <div style={{background:"#F7F6F3",padding:"20px"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"6px"}}>
                  <div style={{fontSize:"13px",fontWeight:800}}>정규 클래스</div>
                  <div style={{fontFamily:"monospace",fontSize:"9px",color:"#aaa"}}>REGULAR · 주1회</div>
                </div>
                <div style={{fontSize:"12px",color:"#888",lineHeight:1.7}}>매주 꾸준히 참여하는 정규 클래스예요. 아래 카카오톡으로 문의해 주세요.</div>
              </div>
            </div>

          </div>
        </div>
      ))}

      <div className="kids-contact" style={{background:"#F7F6F3",textAlign:"center"}}>
        <div style={{fontFamily:"monospace",fontSize:"10px",color:"#1F7A5E",letterSpacing:"0.2em",marginBottom:"16px"}}>CONTACT</div>
        <div style={{fontSize:"24px",fontWeight:800,letterSpacing:"-0.02em",marginBottom:"12px"}}>궁금한 점이 있으신가요?</div>
        <div style={{fontSize:"13px",color:"#555",lineHeight:1.9,marginBottom:"32px"}}>프로그램 내용, 수업 일정, 비용 등 편하게 카카오톡 채널로 문의해 주세요</div>
        <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" style={{display:"inline-block",padding:"15px 36px",background:"#0A0A0A",color:"white",fontSize:"13px",fontWeight:700,textDecoration:"none",letterSpacing:"0.04em"}}>
          카카오톡으로 문의하기
        </a>
      </div>

      <footer className="kids-footer" style={{background:"white",display:"flex",alignItems:"center",justifyContent:"space-between",borderTop:"0.5px solid #eee"}}>
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