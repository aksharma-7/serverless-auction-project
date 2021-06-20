export async function uploadAuctionsPicture(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({}),
  };
}

export const handler = uploadAuctionsPicture;
