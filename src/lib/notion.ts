import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const PICTURE_BOOK_DB_ID = process.env.NOTION_DATABASE_ID as string;

export async function getPictureBooks() {
  try {
    const allResults: any[] = [];
    let hasMore = true;
    let startCursor: string | undefined = undefined;

    while (hasMore) {
      const response: any = await notion.databases.query({
        database_id: PICTURE_BOOK_DB_ID,
        filter: {
          and: [
            {
              property: "장르",
              select: {
                equals: "그림책",
              },
            },
            {
              property: "공개여부",
              checkbox: {
                equals: true,
              },
            },
          ],
        },
        sorts: [
          {
            timestamp: "created_time",
            direction: "descending",
          },
        ],
        page_size: 100,
        ...(startCursor ? { start_cursor: startCursor } : {}),
      });

      allResults.push(...response.results);
      hasMore = response.has_more;
      startCursor = response.next_cursor ?? undefined;
    }

    return allResults;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

export { notion, PICTURE_BOOK_DB_ID };