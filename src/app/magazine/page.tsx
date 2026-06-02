"use client";

import { useEffect, useState } from "react";

interface Book {
  id: string;
  title: string;
  author: string;
  publisher: string;
  themes: string[];
  materials: string[];
  cover: string;
}

const PAGE_SIZE = 32;

export default function MagazinePage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [allThemes, setAllThemes] = useState<string[]>([]);
  const [allMaterials, setAllMaterials] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch("/api/books")
      .then((r) => r.json())
      .then((data) => {
        setBooks(data);
        const themes = Array.from(new Set(data.flatMap((b: Book) => b.themes))).sort() as string[];
        const materials = Array.from(new Set(data.flatMap((b: Book) => b.materials))).sort() as string[];
        setAllThemes(themes);
        setAllMaterials(materials);
        setLoading(false);
      });
  }, []);

  useEffect(() => { setPage(1); }, [search, selectedThemes, selectedMaterials]);

  const toggleTheme = (t: string) =>
    setSelectedThemes((prev) => prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]);

  const toggleMaterial = (m: string) =>
    setSelectedMaterials((prev) => prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]);

  const clearAll = () => {
    setSelectedThemes([]);
    setSelectedMaterials([]);
    setSearch("");
  };

  const filtered = books.filter((b) => {
    const q = search.toLowerCase();
    const matchSearch = !q ||
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      b.themes.some((t) => t.includes(q)) ||
      b.materials.some((m) => m.includes(q));
    const matchTheme = selectedThemes.length === 0 || selectedThemes.every((t) => b.themes.includes(t));
    const matchMaterial = selectedMaterials.length === 0 || selectedMaterials.every((m) => b.materials.includes(m));
    return matchSearch && matchTheme && matchMaterial;
  });

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const hasFilter = selectedThemes.length > 0 || selectedMaterials.length > 0 || search;

  const Chip = ({ label, on, onClick }: { label: string; on: boolean; onClick: () => void }) => (
    <button
      onClick={onClick}
      style={{
        padding: "7px 14px",
        fontSize: "12px",
        fontWeight: on ? 600 : 400,
        fontFamily: "Pretendard,-apple-system,sans-serif",
        background: on ? "#1F7A5E" : "#fff",
        color: on ? "white" : "#444",
        border: `1px solid ${on ? "#1F7A5E" : "#E0E0E0"}`,
        borderRadius: "100px",
        cursor: "pointer",
        letterSpacing: "-0.005em",
        whiteSpace: "nowrap" as const,
      }}
    >
      {label}
    </button>
  );

  return (
    <main style={{fontFamily:"Pretendard,-apple-system,sans-serif",background:"#fff",minHeight:"100vh"}}>
      <style>{`
        .mag-nav { padding: 18px 40px; }
        .mag-header { padding: 32px 40px 0; }
        .mag-count { padding: 14px 40px; }
        .mag-grid { display: grid; grid-template-columns: 1fr 1fr; }
        .mag-book { padding: 20px 16px 20px 0; }
        .mag-book-left { padding-right: 24px; }
        .mag-book-right { padding-left: 24px; }
        .mag-book-img { width: 72px; }
        .mag-body { padding: 0 40px 48px; }
        .mag-footer { padding: 28px 40px; }
        @media (max-width: 768px) {
          .mag-nav { padding: 16px 20px !important; }
          .mag-header { padding: 24px 20px 0 !important; }
          .mag-count { padding: 12px 20px !important; }
          .mag-grid { grid-template-columns: 1fr !important; }
          .mag-book { border-right: none !important; padding-right: 0 !important; padding-left: 0 !important; }
          .mag-book-left { padding-right: 0 !important; }
          .mag-book-right { padding-left: 0 !important; }
          .mag-book-img { width: 56px !important; }
          .mag-body { padding: 0 20px 40px !important; }
          .mag-footer { padding: 24px 20px !important; }
        }
      `}</style>

      <nav className="mag-nav" style={{display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"0.5px solid #EAEAEA"}}>
        <a href="/" style={{textDecoration:"none",display:"flex",alignItems:"center",gap:"10px"}}>
          <div style={{width:"22px",height:"22px",background:"#1F7A5E",borderRadius:"50% 50% 45% 45%"}} />
          <div>
            <div style={{fontSize:"13px",fontWeight:800,color:"#0A0A0A"}}>KKAKJIMOMO</div>
            <div style={{fontFamily:"monospace",fontSize:"10px",color:"#1F7A5E"}}>// book agit</div>
          </div>
        </a>
        <span style={{fontFamily:"monospace",fontSize:"11px",color:"#555"}}>subscribe</span>
      </nav>

      <div className="mag-header" style={{borderBottom:"0.5px solid #eee"}}>
        <div style={{fontFamily:"monospace",fontSize:"10px",letterSpacing:"0.2em",color:"#1F7A5E",marginBottom:"8px"}}>
          PICTURE BOOK MAGAZINE
        </div>
        <div style={{fontSize:"24px",fontWeight:800,letterSpacing:"-0.02em",marginBottom:"20px"}}>
          그림책 매거진
        </div>

        <div style={{display:"flex",alignItems:"center",gap:"12px",background:"#F7F6F3",padding:"13px 20px",marginBottom:"24px"}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="text"
            placeholder="제목, 저자, 주제, 소재로 검색"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{fontFamily:"Pretendard,-apple-system,sans-serif",fontSize:"14px",color:"#0A0A0A",background:"none",border:"none",outline:"none",flex:1}}
          />
          {search && (
            <button onClick={() => setSearch("")} style={{background:"none",border:"none",cursor:"pointer",color:"#aaa",fontSize:"18px",lineHeight:1}}>×</button>
          )}
        </div>

        <div style={{marginBottom:"16px"}}>
          <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"10px"}}>
            <span style={{fontFamily:"monospace",fontSize:"10px",fontWeight:600,letterSpacing:"0.16em",color:"#1F7A5E",flexShrink:0}}>THEME</span>
            <div style={{flex:1,height:"0.5px",background:"#eee"}} />
          </div>
          <div style={{display:"flex",gap:"6px",flexWrap:"wrap"}}>
            {allThemes.map((t) => (
              <Chip key={t} label={t} on={selectedThemes.includes(t)} onClick={() => toggleTheme(t)} />
            ))}
          </div>
        </div>

        <div style={{marginBottom:"20px"}}>
          <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"10px"}}>
            <span style={{fontFamily:"monospace",fontSize:"10px",fontWeight:600,letterSpacing:"0.16em",color:"#1F7A5E",flexShrink:0}}>SUBJECT</span>
            <div style={{flex:1,height:"0.5px",background:"#eee"}} />
          </div>
          <div style={{display:"flex",gap:"6px",flexWrap:"wrap",paddingBottom:"20px"}}>
            {allMaterials.map((m) => (
              <Chip key={m} label={m} on={selectedMaterials.includes(m)} onClick={() => toggleMaterial(m)} />
            ))}
          </div>
        </div>
      </div>

      <div className="mag-count" style={{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"0.5px solid #eee"}}>
        <div style={{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"}}>
          <div style={{fontSize:"13px",fontWeight:600}}>
            총 <span style={{color:"#1F7A5E"}}>{loading ? "..." : filtered.length}</span>권
          </div>
          {(selectedThemes.length > 0 || selectedMaterials.length > 0) && (
            <div style={{display:"flex",gap:"5px",flexWrap:"wrap",alignItems:"center"}}>
              {[...selectedThemes, ...selectedMaterials].map((tag) => (
                <span key={tag} style={{fontSize:"11px",background:"#E8F4F0",color:"#1F7A5E",padding:"3px 10px",borderRadius:"100px",display:"inline-flex",alignItems:"center",gap:"4px"}}>
                  {tag}
                  <button
                    onClick={() => selectedThemes.includes(tag) ? toggleTheme(tag) : toggleMaterial(tag)}
                    style={{background:"none",border:"none",cursor:"pointer",color:"#1F7A5E",fontSize:"12px",lineHeight:1,padding:0}}
                  >×</button>
                </span>
              ))}
            </div>
          )}
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"16px"}}>
          {hasFilter && (
            <button onClick={clearAll} style={{fontFamily:"monospace",fontSize:"10px",color:"#aaa",background:"none",border:"none",cursor:"pointer"}}>
              초기화 ×
            </button>
          )}
          <div style={{fontFamily:"monospace",fontSize:"11px",color:"#aaa"}}>최신순</div>
        </div>
      </div>

      <div className="mag-body">
        {loading ? (
          <div style={{padding:"60px 0",textAlign:"center",color:"#aaa",fontFamily:"monospace",fontSize:"12px"}}>loading...</div>
        ) : filtered.length === 0 ? (
          <div style={{padding:"60px 0",textAlign:"center"}}>
            <div style={{fontSize:"13px",color:"#888",marginBottom:"12px"}}>검색 결과가 없어요</div>
            {hasFilter && (
              <button onClick={clearAll} style={{fontFamily:"monospace",fontSize:"11px",color:"#1F7A5E",background:"none",border:"1px solid #1F7A5E",padding:"7px 16px",cursor:"pointer",borderRadius:"2px"}}>
                필터 초기화
              </button>
            )}
          </div>
        ) : (
          <div className="mag-grid">
            {paginated.map((book, i) => (
              <div
                key={book.id}
                className={`mag-book ${i % 2 === 0 ? "mag-book-left" : "mag-book-right"}`}
                style={{
                  display:"flex",
                  gap:"16px",
                  borderBottom:"0.5px solid #eee",
                  borderRight: i % 2 === 0 ? "0.5px solid #eee" : "none",
                }}
              >
                <div className="mag-book-img" style={{flexShrink:0}}>
                  {book.cover ? (
                    <img src={book.cover} alt={book.title} style={{width:"100%",aspectRatio:"3/4",objectFit:"cover",borderRadius:"2px"}} />
                  ) : (
                    <div style={{width:"100%",aspectRatio:"3/4",background:"#f0f0f0",borderRadius:"2px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                      <span style={{fontSize:"9px",color:"#bbb",fontFamily:"monospace"}}>no cover</span>
                    </div>
                  )}
                </div>
                <div style={{flex:1,minWidth:0,display:"flex",flexDirection:"column"}}>
                  <div style={{display:"flex",gap:"5px",flexWrap:"wrap",marginBottom:"7px",alignItems:"center"}}>
                    <span style={{fontSize:"9px",fontWeight:700,color:"white",background:"#1F7A5E",padding:"3px 8px",letterSpacing:"0.06em"}}>그림책</span>
                    {[...book.themes, ...book.materials].slice(0, 3).map((tag) => (
                      <span key={tag} style={{fontFamily:"monospace",fontSize:"10px",color:"#1F7A5E"}}>#{tag}</span>
                    ))}
                  </div>
                  <div style={{fontSize:"15px",fontWeight:700,lineHeight:1.4,color:"#0A0A0A",letterSpacing:"-0.015em",marginBottom:"auto"}}>
                    {book.title}
                  </div>
                  <div style={{display:"flex",gap:"8px",alignItems:"center",paddingTop:"10px",marginTop:"10px",borderTop:"0.5px solid #f0f0f0"}}>
                    {book.publisher && <span style={{fontSize:"11px",fontWeight:600,color:"#555"}}>{book.publisher}</span>}
                    {book.publisher && book.author && <span style={{color:"#ddd"}}>|</span>}
                    {book.author && <span style={{fontSize:"11px",color:"#888"}}>{book.author}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {!loading && totalPages > 1 && (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"4px",padding:"0 40px 48px"}}>
          <button
            onClick={() => { setPage((p) => Math.max(1, p - 1)); window.scrollTo(0, 0); }}
            disabled={page === 1}
            style={{padding:"8px 14px",fontSize:"12px",fontFamily:"monospace",background:"none",border:"0.5px solid #eee",cursor:page===1?"default":"pointer",color:page===1?"#ccc":"#555"}}
          >←</button>
          {Array.from({length:totalPages},(_,i)=>i+1).map((p) => (
            <button
              key={p}
              onClick={() => { setPage(p); window.scrollTo(0, 0); }}
              style={{padding:"8px 14px",fontSize:"12px",fontFamily:"monospace",background:p===page?"#0A0A0A":"none",color:p===page?"#fff":"#555",border:`0.5px solid ${p===page?"#0A0A0A":"#eee"}`,cursor:"pointer",fontWeight:p===page?700:400}}
            >{p}</button>
          ))}
          <button
            onClick={() => { setPage((p) => Math.min(totalPages, p + 1)); window.scrollTo(0, 0); }}
            disabled={page === totalPages}
            style={{padding:"8px 14px",fontSize:"12px",fontFamily:"monospace",background:"none",border:"0.5px solid #eee",cursor:page===totalPages?"default":"pointer",color:page===totalPages?"#ccc":"#555"}}
          >→</button>
        </div>
      )}

      <footer className="mag-footer" style={{background:"white",display:"flex",alignItems:"center",justifyContent:"space-between",borderTop:"0.5px solid #eee"}}>
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