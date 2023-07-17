import { errorLogger, logger } from "@libs/server.logger";
import { ImageResponse, NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export async function GET(req: NextRequest): Promise<Response | ImageResponse> {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title");

  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            background: "black",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              marginLeft: 80,
              marginRight: 80,
              display: "flex",
              fontSize: 80,
              fontStyle: "normal",
              fontFamily:
                '-apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
              color: "white",
              lineHeight: "74px",
              whiteSpace: "pre-wrap",
              textTransform: "uppercase",
            }}
          >
            {title || "website"}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 675,
      }
    );
  } catch (e) {
    if (!(e instanceof Error)) throw e;

    errorLogger({
      location: `/api/og`,
      variables: {
        title,
      },
      error: e,
    });

    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
