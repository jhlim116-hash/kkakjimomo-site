export default function Home() {
  return (
    <main style={{fontFamily:"Pretendard,-apple-system,sans-serif",background:"#fff",minHeight:"100vh",display:"flex",flexDirection:"column"}}>

      <nav style={{padding:"22px 40px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"0.5px solid #EAEAEA"}}>
        <div style={{display:"flex",alignItems:"center",gap:"11px"}}>
          <div style={{width:"24px",height:"24px",background:"#1F7A5E",borderRadius:"50% 50% 45% 45%"}} />
          <div>
            <div style={{fontSize:"13px",fontWeight:800,color:"#0A0A0A"}}>KKAKJIMOMO</div>
            <div style={{fontFamily:"monospace",fontSize:"10px",color:"#1F7A5E",marginTop:"2px"}}>// book agit</div>
          </div>
        </div>
        <span style={{fontFamily:"monospace",fontSize:"11px",color:"#555"}}>subscribe</span>
      </nav>

      <div style={{padding:"64px 40px 48px",background:"white"}}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:"48px"}}>
          <div style={{fontFamily:"monospace",fontSize:"11px",color:"#1F7A5E"}}>vol.01 — welcome issue</div>
          <div style={{fontFamily:"monospace",fontSize:"11px",color:"#555"}}>2025.05.30</div>
        </div>
        <div style={{fontSize:"64px",fontWeight:800,letterSpacing:"-0.045em",lineHeight:1,color:"#0A0A0A",marginBottom:"18px"}}>
          책과 함께,<br/>나답게.
        </div>
        <div style={{fontSize:"30px",fontWeight:600,color:"#1F7A5E",marginBottom:"24px"}}>
          With Books, As You Are.
        </div>
        <div style={{fontSize:"13px",color:"#555",lineHeight:1.7}}>
          아이부터 어른까지, 책으로 만나는 모든 순간을 정성껏 준비합니다
        </div>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",flex:1,background:"#0A0A0A"}}>

        <a href="/kids" style={{textDecoration:"none",borderRight:"0.5px solid #222",display:"flex",flexDirection:"column",background:"#0A0A0A"}}>
          <div style={{aspectRatio:"1/1.05",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"32px 36px"}}>
            <div style={{display:"flex",justifyContent:"flex-end"}}>
              <span style={{fontFamily:"monospace",fontSize:"11px",color:"#1F7A5E",padding:"6px 12px",border:"0.5px solid #333",borderRadius:"2px"}}>// for kids</span>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"0px"}}>
              <span style={{fontSize:"88px",fontWeight:800,color:"white",lineHeight:0.88,letterSpacing:"-0.05em"}}>FOR</span>
              <span style={{fontSize:"88px",fontWeight:800,color:"white",lineHeight:0.88,letterSpacing:"-0.05em"}}>KIDS</span>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",paddingTop:"18px",borderTop:"0.5px solid #2A2A2A"}}>
              <span style={{fontFamily:"monospace",fontSize:"11px",color:"white"}}>no.01</span>
              <span style={{fontFamily:"monospace",fontSize:"11px",color:"#888"}}>— programs</span>
            </div>
          </div>
          <div style={{padding:"36px 36px 40px",borderTop:"0.5px solid #222",position:"relative"}}>
            <div style={{position:"absolute",top:"-1.5px",left:"36px",width:"32px",height:"1.5px",background:"white"}} />
            <div style={{fontSize:"22px",fontWeight:800,color:"white",letterSpacing:"-0.035em",marginBottom:"6px",marginTop:"18px"}}>어린이 독서 프로그램</div>
            <div style={{fontSize:"12px",color:"#888",marginBottom:"22px"}}>Kids Reading Program</div>
            <div style={{fontSize:"12px",color:"#888",lineHeight:1.75,marginBottom:"28px"}}>아이들과 함께 그림책을 읽고 이야기 나누는 깍지모모의 어린이 독서 프로그램입니다.</div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:"18px",borderTop:"0.5px solid #222"}}>
              <div style={{display:"flex",alignItems:"baseline",gap:"8px"}}>
                <span style={{fontSize:"24px",fontWeight:800,color:"white",letterSpacing:"-0.045em"}}>12</span>
                <span style={{fontFamily:"monospace",fontSize:"10px",color:"#555"}}>programs</span>
              </div>
              <span style={{fontFamily:"monospace",fontSize:"10px",color:"white",borderBottom:"1px solid white",paddingBottom:"3px"}}>EXPLORE</span>
            </div>
          </div>
        </a>

        <a href="/magazine" style={{textDecoration:"none",borderRight:"0.5px solid #222",display:"flex",flexDirection:"column",background:"#0A0A0A"}}>
          <div style={{aspectRatio:"1/1.05",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"32px 36px"}}>
            <div style={{display:"flex",justifyContent:"flex-end"}}>
              <span style={{fontFamily:"monospace",fontSize:"11px",color:"#1F7A5E",padding:"6px 12px",border:"0.5px solid #333",borderRadius:"2px"}}>// archive</span>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"0px"}}>
              <span style={{fontSize:"88px",fontWeight:800,color:"white",lineHeight:0.88,letterSpacing:"-0.05em"}}>BOOKS</span>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",paddingTop:"18px",borderTop:"0.5px solid #2A2A2A"}}>
              <span style={{fontFamily:"monospace",fontSize:"11px",color:"white"}}>no.02</span>
              <span style={{fontFamily:"monospace",fontSize:"11px",color:"#888"}}>— magazine</span>
            </div>
          </div>
          <div style={{padding:"36px 36px 40px",borderTop:"0.5px solid #222",position:"relative"}}>
            <div style={{position:"absolute",top:"-1.5px",left:"36px",width:"32px",height:"1.5px",background:"white"}} />
            <div style={{fontSize:"22px",fontWeight:800,color:"white",letterSpacing:"-0.035em",marginBottom:"6px",marginTop:"18px"}}>그림책 매거진</div>
            <div style={{fontSize:"12px",color:"#888",marginBottom:"22px"}}>Picture Book Magazine</div>
            <div style={{fontSize:"12px",color:"#888",lineHeight:1.75,marginBottom:"28px"}}>주제와 소재로 그림책을 검색하고, 큐레이터가 읽고 쓴 깊은 시선을 만나보세요.</div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:"18px",borderTop:"0.5px solid #222"}}>
              <div style={{display:"flex",alignItems:"baseline",gap:"8px"}}>
                <span style={{fontSize:"24px",fontWeight:800,color:"white",letterSpacing:"-0.045em"}}>128</span>
                <span style={{fontFamily:"monospace",fontSize:"10px",color:"#555"}}>books</span>
              </div>
              <span style={{fontFamily:"monospace",fontSize:"10px",color:"white",borderBottom:"1px solid white",paddingBottom:"3px"}}>EXPLORE</span>
            </div>
          </div>
        </a>

        <a href="/adults" style={{textDecoration:"none",display:"flex",flexDirection:"column",background:"#0A0A0A"}}>
          <div style={{aspectRatio:"1/1.05",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"32px 36px"}}>
            <div style={{display:"flex",justifyContent:"flex-end"}}>
              <span style={{fontFamily:"monospace",fontSize:"11px",color:"#1F7A5E",padding:"6px 12px",border:"0.5px solid #333",borderRadius:"2px"}}>// for adults</span>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"0px"}}>
              <span style={{fontSize:"88px",fontWeight:800,color:"white",lineHeight:0.88,letterSpacing:"-0.05em"}}>FOR</span>
              <span style={{fontSize:"88px",fontWeight:800,color:"white",lineHeight:0.88,letterSpacing:"-0.05em"}}>ADULTS</span>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",paddingTop:"18px",borderTop:"0.5px solid #2A2A2A"}}>
              <span style={{fontFamily:"monospace",fontSize:"11px",color:"white"}}>no.03</span>
              <span style={{fontFamily:"monospace",fontSize:"11px",color:"#888"}}>— program</span>
            </div>
          </div>
          <div style={{padding:"36px 36px 40px",borderTop:"0.5px solid #222",position:"relative"}}>
            <div style={{position:"absolute",top:"-1.5px",left:"36px",width:"32px",height:"1.5px",background:"white"}} />
            <div style={{fontSize:"22px",fontWeight:800,color:"white",letterSpacing:"-0.035em",marginBottom:"6px",marginTop:"18px"}}>어른 독서 모임</div>
            <div style={{fontSize:"12px",color:"#888",marginBottom:"22px"}}>Adult Reading Club</div>
            <div style={{fontSize:"12px",color:"#888",lineHeight:1.75,marginBottom:"28px"}}>소설, 에세이, 인문까지. 어른을 위한 깍지모모의 깊이 있는 독서 모임을 만나보세요.</div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:"18px",borderTop:"0.5px solid #222"}}>
              <div style={{display:"flex",alignItems:"baseline",gap:"8px"}}>
                <span style={{fontSize:"24px",fontWeight:800,color:"white",letterSpacing:"-0.045em"}}>8</span>
                <span style={{fontFamily:"monospace",fontSize:"10px",color:"#555"}}>clubs</span>
              </div>
              <span style={{fontFamily:"monospace",fontSize:"10px",color:"white",borderBottom:"1px solid white",paddingBottom:"3px"}}>EXPLORE</span>
            </div>
          </div>
        </a>

      </div>

      <footer style={{padding:"32px 40px",background:"white",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"center",gap:"14px"}}>
          <div style={{width:"32px",height:"32px",background:"#1F7A5E",borderRadius:"50% 50% 45% 45%"}} />
          <div>
            <div style={{fontSize:"12px",fontWeight:800,color:"#0A0A0A"}}>KKAKJIMOMO BOOK AGIT</div>
            <div style={{fontFamily:"monospace",fontSize:"10px",color:"#555"}}>since 2023</div>
          </div>
        </div>
        <a href="https://www.instagram.com/kkakjimomo_book_agit" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "6px", textDecoration: "none", color: "#0A0A0A" }}>
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
  </svg>
  <span style={{ fontFamily: "monospace", fontSize: "11px" }}>@kkakjimomo_book_agit</span>
</a>
      </footer>

    </main>
  );
}