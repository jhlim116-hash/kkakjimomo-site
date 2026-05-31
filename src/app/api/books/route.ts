import { NextResponse } from "next/server";
import { getPictureBooks } from "@/lib/notion";

export const revalidate = 0;

export async function GET() {
  try {
    const pages = await getPictureBooks();

    const books = pages.map((page: any) => ({
      id: page.id,
      title: page.properties?.["제목"]?.title?.[0]?.plain_text || "제목 없음",
      author: page.properties?.["저자"]?.rich_text?.[0]?.plain_text || "",
      publisher: page.properties?.["출판사"]?.rich_text?.[0]?.plain_text || "",
      themes: page.properties?.["주제"]?.multi_select?.map((t: any) => t.name) || [],
      materials: page.properties?.["소재"]?.multi_select?.map((t: any) => t.name) || [],
      cover:
        page.properties?.["표지 이미지"]?.files?.[0]?.file?.url ||
        page.properties?.["표지 이미지"]?.files?.[0]?.external?.url ||
        "",
    }));

    return NextResponse.json(books);
  } catch (error) {
    console.error(error);
    return NextResponse.json([], { status: 500 });
  }
}